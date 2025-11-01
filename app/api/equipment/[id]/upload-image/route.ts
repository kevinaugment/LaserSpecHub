import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getDatabase } from '@/lib/db/client';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const runtime = 'nodejs';

// Maximum file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
    });

    if (!token || !token.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (token.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Admin access required' },
        { status: 403 }
      );
    }

    const equipmentId = params.id;

    // Verify equipment exists
    const db = getDatabase();
    const checkStmt = db.prepare('SELECT id FROM laser_equipment WHERE id = ?');
    const equipment = await checkStmt.bind(equipmentId).first();

    if (!equipment) {
      return NextResponse.json(
        { success: false, error: 'Equipment not found' },
        { status: 404 }
      );
    }

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const imageType = (formData.get('image_type') as string) || 'photo';
    const altText = formData.get('alt_text') as string;
    const caption = formData.get('caption') as string;
    const isPrimary = formData.get('is_primary') === 'true';

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const extension = file.name.split('.').pop();
    const filename = `equipment-${equipmentId}-${timestamp}.${extension}`;

    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'equipment');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Save file
    const filepath = join(uploadDir, filename);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Generate public URL
    const imageUrl = `/uploads/equipment/${filename}`;

    // If this is set as primary, unset other primary images
    if (isPrimary) {
      const unsetStmt = db.prepare(
        'UPDATE equipment_images SET is_primary = 0 WHERE equipment_id = ?'
      );
      await unsetStmt.bind(equipmentId).run();
    }

    // Get next display order
    const orderStmt = db.prepare(
      'SELECT COALESCE(MAX(display_order), -1) + 1 as next_order FROM equipment_images WHERE equipment_id = ?'
    );
    const orderResult = await orderStmt.bind(equipmentId).first();
    const displayOrder = (orderResult as any)?.next_order || 0;

    // Insert image record
    const insertStmt = db.prepare(`
      INSERT INTO equipment_images 
      (equipment_id, image_url, image_type, display_order, alt_text, caption, is_primary, uploaded_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = await insertStmt
      .bind(
        equipmentId,
        imageUrl,
        imageType,
        displayOrder,
        altText || null,
        caption || null,
        isPrimary ? 1 : 0,
        token.email
      )
      .run();

    // If this is the first image, also update laser_equipment.image_url for backward compatibility
    const countStmt = db.prepare('SELECT COUNT(*) as count FROM equipment_images WHERE equipment_id = ?');
    const countResult = await countStmt.bind(equipmentId).first();
    
    if ((countResult as any)?.count === 1 || isPrimary) {
      const updateStmt = db.prepare('UPDATE laser_equipment SET image_url = ? WHERE id = ?');
      await updateStmt.bind(imageUrl, equipmentId).run();
    }

    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        id: result.meta?.last_row_id || 0,
        image_url: imageUrl,
        image_type: imageType,
        display_order: displayOrder,
        is_primary: isPrimary,
      },
    });
  } catch (error: any) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const equipmentId = params.id;
    const db = getDatabase();

    const stmt = db.prepare(`
      SELECT * FROM equipment_images
      WHERE equipment_id = ?
      ORDER BY display_order ASC, created_at DESC
    `);

    const result = await stmt.bind(equipmentId).all();

    return NextResponse.json({
      success: true,
      data: result.results || [],
    });
  } catch (error: any) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params: _params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
    });

    if (!token || token.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get('image_id');

    if (!imageId) {
      return NextResponse.json(
        { success: false, error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const db = getDatabase();

    // Get image info before deleting
    const getStmt = db.prepare('SELECT * FROM equipment_images WHERE id = ?');
    const image = await getStmt.bind(imageId).first();

    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    // Delete from database
    const deleteStmt = db.prepare('DELETE FROM equipment_images WHERE id = ?');
    await deleteStmt.bind(imageId).run();

    // TODO: Delete physical file from filesystem (optional, for cleanup)
    // const filepath = join(process.cwd(), 'public', (image as any).image_url);
    // if (existsSync(filepath)) {
    //   await unlink(filepath);
    // }

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error: any) {
    console.error('Image deletion error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete image' },
      { status: 500 }
    );
  }
}


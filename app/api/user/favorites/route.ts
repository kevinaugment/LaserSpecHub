import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
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

    const db = getDatabase();
    const userId = Number(token.id);

    const stmt = db.prepare(`
      SELECT f.*, e.*
      FROM user_favorites f
      INNER JOIN laser_equipment e ON f.equipment_id = e.id
      WHERE f.user_id = ? AND e.is_active = 1
      ORDER BY f.created_at DESC
    `);

    const result = await stmt.bind(userId).all();
    const favorites = result.results || [];

    // Parse JSON fields
    const parsedFavorites = favorites.map((fav: any) => ({
      id: fav.equipment_id,
      favoriteId: fav.id,
      brand: fav.brand,
      model: fav.model,
      laser_type: fav.laser_type,
      power_kw: fav.power_kw,
      image_url: fav.image_url,
      created_at: fav.created_at,
    }));

    return NextResponse.json({
      success: true,
      data: parsedFavorites,
    });
  } catch (error: any) {
    console.error('Error fetching favorites:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch favorites' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
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

    const db = getDatabase();
    const body = await request.json();
    const { equipment_id } = body;

    if (!equipment_id || isNaN(Number(equipment_id))) {
      return NextResponse.json(
        { success: false, error: 'Valid equipment_id is required' },
        { status: 400 }
      );
    }

    const userId = Number(token.id);
    const equipmentId = Number(equipment_id);

    // Check if already favorited
    const checkStmt = db.prepare('SELECT id FROM user_favorites WHERE user_id = ? AND equipment_id = ?');
    const existing = await checkStmt.bind(userId, equipmentId).all();

    if (existing.results && existing.results.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Equipment already in favorites' },
        { status: 400 }
      );
    }

    // Add to favorites
    const insertStmt = db.prepare('INSERT INTO user_favorites (user_id, equipment_id) VALUES (?, ?)');
    await insertStmt.bind(userId, equipmentId).run();

    return NextResponse.json({
      success: true,
      message: 'Added to favorites',
    });
  } catch (error: any) {
    console.error('Error adding favorite:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add favorite' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
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

    const db = getDatabase();
    const { searchParams } = new URL(request.url);
    const equipment_id = searchParams.get('equipment_id');

    if (!equipment_id || isNaN(Number(equipment_id))) {
      return NextResponse.json(
        { success: false, error: 'Valid equipment_id is required' },
        { status: 400 }
      );
    }

    const userId = Number(token.id);
    const equipmentId = Number(equipment_id);

    // Remove from favorites
    const deleteStmt = db.prepare('DELETE FROM user_favorites WHERE user_id = ? AND equipment_id = ?');
    await deleteStmt.bind(userId, equipmentId).run();

    return NextResponse.json({
      success: true,
      message: 'Removed from favorites',
    });
  } catch (error: any) {
    console.error('Error removing favorite:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to remove favorite' },
      { status: 500 }
    );
  }
}





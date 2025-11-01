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
      SELECT * FROM comparison_saves
      WHERE user_id = ?
      ORDER BY updated_at DESC
    `);

    const result = await stmt.bind(userId).all();
    const saves = result.results || [];

    // Parse equipment_ids JSON
    const parsedSaves = saves.map((save: any) => ({
      id: save.id,
      name: save.name,
      equipment_ids: JSON.parse(save.equipment_ids || '[]'),
      created_at: save.created_at,
      updated_at: save.updated_at,
    }));

    return NextResponse.json({
      success: true,
      data: parsedSaves,
    });
  } catch (error: any) {
    console.error('Error fetching saved comparisons:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch saved comparisons' },
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
    const { name, equipment_ids } = body;

    if (!name || !equipment_ids || !Array.isArray(equipment_ids) || equipment_ids.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name and equipment_ids array are required' },
        { status: 400 }
      );
    }

    const userId = Number(token.id);

    // Insert saved comparison
    const insertStmt = db.prepare(`
      INSERT INTO comparison_saves (user_id, name, equipment_ids)
      VALUES (?, ?, ?)
    `);

    const result = await insertStmt
      .bind(userId, name.trim(), JSON.stringify(equipment_ids))
      .run();

    return NextResponse.json({
      success: true,
      message: 'Comparison saved',
      id: result.meta?.last_row_id || 0,
    });
  } catch (error: any) {
    console.error('Error saving comparison:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save comparison' },
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
    const id = searchParams.get('id');

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, error: 'Valid id is required' },
        { status: 400 }
      );
    }

    const userId = Number(token.id);
    const saveId = Number(id);

    // Verify ownership
    const checkStmt = db.prepare('SELECT user_id FROM comparison_saves WHERE id = ?');
    const checkResult = await checkStmt.bind(saveId).all();

    if (!checkResult.results || checkResult.results.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Comparison save not found' },
        { status: 404 }
      );
    }

    const save = checkResult.results[0] as any;
    if (save.user_id !== userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Delete
    const deleteStmt = db.prepare('DELETE FROM comparison_saves WHERE id = ?');
    await deleteStmt.bind(saveId).run();

    return NextResponse.json({
      success: true,
      message: 'Comparison save deleted',
    });
  } catch (error: any) {
    console.error('Error deleting comparison save:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete comparison save' },
      { status: 500 }
    );
  }
}


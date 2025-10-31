import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'edge';

export async function GET(
  _request: NextRequest,
  { params }: { params: { shareId: string } }
) {
  try {
    const db = getDatabase();
    const { shareId } = params;

    // Find comparison by share ID
    const stmt = db.prepare(
      'SELECT equipment_ids FROM comparisons WHERE session_id = ? ORDER BY created_at DESC LIMIT 1'
    );
    const result = await stmt.bind(shareId).first();

    if (!result) {
      return NextResponse.json(
        { success: false, error: 'Comparison not found' },
        { status: 404 }
      );
    }

    const equipmentIds = JSON.parse(result.equipment_ids as string) as number[];

    // Fetch equipment data
    const placeholders = equipmentIds.map(() => '?').join(',');
    const equipmentStmt = db.prepare(
      `SELECT * FROM laser_equipment WHERE id IN (${placeholders}) AND is_active = 1`
    );
    const equipmentResult = await equipmentStmt.bind(...equipmentIds).all();

    const equipment = equipmentResult.results as any[];

    // Parse JSON fields
    const parsedEquipment: LaserEquipment[] = equipment.map((eq) => ({
      ...eq,
      max_cutting_thickness: eq.max_cutting_thickness
        ? JSON.parse(eq.max_cutting_thickness as string)
        : null,
      cutting_speed: eq.cutting_speed
        ? JSON.parse(eq.cutting_speed as string)
        : null,
      dimensions: eq.dimensions ? JSON.parse(eq.dimensions as string) : null,
      applications: eq.applications
        ? JSON.parse(eq.applications as string)
        : [],
    }));

    return NextResponse.json({
      success: true,
      data: {
        equipmentIds,
        equipment: parsedEquipment,
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comparison' },
      { status: 500 }
    );
  }
}


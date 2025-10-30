import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'edge';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const { id } = params;

    const stmt = db.prepare('SELECT * FROM laser_equipment WHERE id = ? AND is_active = 1');
    const result = stmt.bind(id).first();

    if (!result) {
      return NextResponse.json(
        {
          success: false,
          error: 'Equipment not found',
        },
        { status: 404 }
      );
    }

    const equipment = result as any;

    // Parse JSON fields
    const parsedEquipment: LaserEquipment = {
      ...equipment,
      max_cutting_thickness: equipment.max_cutting_thickness
        ? JSON.parse(equipment.max_cutting_thickness as string)
        : null,
      cutting_speed: equipment.cutting_speed
        ? JSON.parse(equipment.cutting_speed as string)
        : null,
      dimensions: equipment.dimensions
        ? JSON.parse(equipment.dimensions as string)
        : null,
      applications: equipment.applications
        ? JSON.parse(equipment.applications as string)
        : [],
    };

    return NextResponse.json({
      success: true,
      data: parsedEquipment,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch equipment data',
      },
      { status: 500 }
    );
  }
}



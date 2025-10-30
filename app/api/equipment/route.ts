import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const searchParams = request.nextUrl.searchParams;
    
    // Build query with optional filters
    let query = 'SELECT * FROM laser_equipment WHERE is_active = 1';
    const params: (string | number)[] = [];

    // Laser type filter
    const laserType = searchParams.get('laserType');
    if (laserType && laserType !== 'all') {
      query += ' AND laser_type = ?';
      params.push(laserType);
    }

    // Power range filter
    const powerMin = searchParams.get('powerMin');
    if (powerMin) {
      query += ' AND power_kw >= ?';
      params.push(parseFloat(powerMin));
    }
    
    const powerMax = searchParams.get('powerMax');
    if (powerMax) {
      query += ' AND power_kw <= ?';
      params.push(parseFloat(powerMax));
    }

    // Brand filter
    const brand = searchParams.get('brand');
    if (brand && brand !== 'all') {
      query += ' AND brand = ?';
      params.push(brand);
    }

    // Search filter
    const search = searchParams.get('search');
    if (search) {
      query += ' AND (brand LIKE ? OR model LIKE ? OR description LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += ' ORDER BY brand, model';

    const stmt = db.prepare(query);
    const results = params.length > 0 ? stmt.bind(...params).all() : stmt.all();
    
    const equipment = results.results as any[];

    // Parse JSON fields
    const parsedEquipment: LaserEquipment[] = equipment.map((eq) => ({
      ...eq,
      max_cutting_thickness: eq.max_cutting_thickness
        ? JSON.parse(eq.max_cutting_thickness as string)
        : null,
      cutting_speed: eq.cutting_speed
        ? JSON.parse(eq.cutting_speed as string)
        : null,
      dimensions: eq.dimensions
        ? JSON.parse(eq.dimensions as string)
        : null,
      applications: eq.applications
        ? JSON.parse(eq.applications as string)
        : [],
    }));

    return NextResponse.json({
      success: true,
      data: parsedEquipment,
      count: parsedEquipment.length,
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



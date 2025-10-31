import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const searchParams = request.nextUrl.searchParams;
    
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

    // Origin filter
    const origin = searchParams.get('origin');
    if (origin) {
      query += ' AND origin_country = ?';
      params.push(origin);
    }

    // Work area filters
    const lenMin = searchParams.get('lengthMin');
    const lenMax = searchParams.get('lengthMax');
    const widMin = searchParams.get('widthMin');
    const widMax = searchParams.get('widthMax');
    if (lenMin) { query += ' AND work_area_length >= ?'; params.push(parseFloat(lenMin)); }
    if (lenMax) { query += ' AND work_area_length <= ?'; params.push(parseFloat(lenMax)); }
    if (widMin) { query += ' AND work_area_width >= ?'; params.push(parseFloat(widMin)); }
    if (widMax) { query += ' AND work_area_width <= ?'; params.push(parseFloat(widMax)); }

    // Applications contains
    const application = searchParams.get('application');
    if (application) {
      query += ' AND applications LIKE ?';
      params.push(`%${application}%`);
    }

    // Search filter
    const search = searchParams.get('search');
    if (search) {
      query += ' AND (brand LIKE ? OR model LIKE ? OR description LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    // Sorting
    const sortBy = searchParams.get('sortBy') || 'brand';
    const sortDir = (searchParams.get('sortDir') || 'asc').toLowerCase() === 'desc' ? 'DESC' : 'ASC';
    const sortable = new Set(['brand', 'model', 'power_kw']);
    const sortColumn = sortable.has(sortBy) ? sortBy : 'brand';
    query += ` ORDER BY ${sortColumn} ${sortDir}`;

    // Pagination
    const page = Math.max(parseInt(searchParams.get('page') || '1', 10), 1);
    const pageSize = Math.min(Math.max(parseInt(searchParams.get('pageSize') || '20', 10), 1), 100);
    const offset = (page - 1) * pageSize;
    query += ' LIMIT ? OFFSET ?';
    params.push(pageSize, offset);

    const stmt = db.prepare(query);
    const results = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();

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

    return NextResponse.json({ success: true, data: parsedEquipment, count: parsedEquipment.length, page, pageSize });
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



import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const searchParams = request.nextUrl.searchParams;
    
    // 管理后台可以查看所有设备（包括已禁用的）
    const includeInactive = searchParams.get('includeInactive') === 'true';
    let query = includeInactive 
      ? 'SELECT * FROM laser_equipment WHERE 1=1' 
      : 'SELECT * FROM laser_equipment WHERE is_active = 1';
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

    // 先获取总数（用于分页）
    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as total');
    const countStmt = db.prepare(countQuery);
    const countResult = params.length > 0 
      ? await countStmt.bind(...params).first() 
      : await countStmt.first();
    const totalCount = (countResult as any)?.total || 0;

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
      is_active: Boolean(eq.is_active),
    }));

    return NextResponse.json({ 
      success: true, 
      data: parsedEquipment, 
      count: totalCount,
      page, 
      pageSize,
      totalPages: Math.ceil(totalCount / pageSize),
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

// POST - 创建新设备
export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();

    // 验证必填字段
    if (!body.brand || !body.model || !body.laser_type || body.power_kw === undefined) {
      return NextResponse.json(
        { success: false, error: '缺少必填字段：brand, model, laser_type, power_kw' },
        { status: 400 }
      );
    }

    // 准备字段值
    const val = (k: string) => body[k] ?? null;
    const num = (k: string) => {
      const v = body[k];
      if (v === undefined || v === null || v === '') return null;
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };
    const json = (k: string) => {
      const v = body[k];
      if (v === undefined || v === null || v === '') return null;
      try {
        if (typeof v === 'string') return JSON.stringify(JSON.parse(v));
        return JSON.stringify(v);
      } catch {
        return null;
      }
    };

    const insertSql = `INSERT INTO laser_equipment (
      brand, model, laser_type, power_kw, work_area_length, work_area_width,
      max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
      beam_quality, wavelength, control_system, cooling_type, power_consumption,
      dimensions, weight, price_range, manufacturer_url, spec_sheet_url,
      image_url, description, applications, origin_country, is_active
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const stmt = db.prepare(insertSql);
    const result = await stmt.bind(
      val('brand'),
      val('model'),
      val('laser_type'),
      num('power_kw'),
      num('work_area_length'),
      num('work_area_width'),
      json('max_cutting_thickness'),
      json('cutting_speed'),
      num('positioning_accuracy'),
      num('repeat_accuracy'),
      num('beam_quality'),
      num('wavelength'),
      val('control_system'),
      val('cooling_type'),
      num('power_consumption'),
      json('dimensions'),
      num('weight'),
      val('price_range'),
      val('manufacturer_url'),
      val('spec_sheet_url'),
      val('image_url'),
      val('description'),
      json('applications'),
      val('origin_country'),
      body.is_active !== undefined ? Number(body.is_active) : 1
    ).run();

    const newId = result.meta?.last_row_id || 0;

    // 返回新创建的设备
    const getStmt = db.prepare('SELECT * FROM laser_equipment WHERE id = ?');
    const newEquipment = await getStmt.bind(newId).first();

    if (!newEquipment) {
      return NextResponse.json(
        { success: false, error: '创建成功但无法获取新设备数据' },
        { status: 500 }
      );
    }

    // Parse JSON fields
    const parsedEquipment = {
      ...newEquipment,
      max_cutting_thickness: newEquipment.max_cutting_thickness
        ? JSON.parse(newEquipment.max_cutting_thickness as string)
        : null,
      cutting_speed: newEquipment.cutting_speed
        ? JSON.parse(newEquipment.cutting_speed as string)
        : null,
      dimensions: newEquipment.dimensions
        ? JSON.parse(newEquipment.dimensions as string)
        : null,
      applications: newEquipment.applications
        ? JSON.parse(newEquipment.applications as string)
        : [],
      is_active: Boolean(newEquipment.is_active),
    };

    return NextResponse.json({
      success: true,
      data: parsedEquipment,
      message: '设备创建成功',
    }, { status: 201 });
  } catch (error: any) {
    console.error('Create Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '创建设备失败',
      },
      { status: 500 }
    );
  }
}



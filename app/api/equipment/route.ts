import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';
import { parseEquipmentFromDB, prepareEquipmentForDB } from '@/lib/utils/equipment-parser';

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

    // Parse equipment data (supports both flattened and legacy JSON fields)
    const parsedEquipment: LaserEquipment[] = equipment.map(parseEquipmentFromDB);

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

    // Prepare data for database (converts to both flattened and JSON fields)
    const { fields, values } = prepareEquipmentForDB(body);

    // Build INSERT query dynamically
    const placeholders = fields.map(() => '?').join(', ');
    const insertSql = `INSERT INTO laser_equipment (${fields.join(', ')}) VALUES (${placeholders})`;

    const stmt = db.prepare(insertSql);
    const result = await stmt.bind(...values).run();

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

    // Parse equipment data (supports both flattened and legacy JSON fields)
    const parsedEquipment = parseEquipmentFromDB(newEquipment);

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



import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';

export const runtime = 'nodejs';

// Helper function to parse equipment row
function parseEquipmentRow(row: any): LaserEquipment {
  return {
    ...row,
    max_cutting_thickness: row.max_cutting_thickness
      ? JSON.parse(row.max_cutting_thickness as string)
      : null,
    cutting_speed: row.cutting_speed
      ? JSON.parse(row.cutting_speed as string)
      : null,
    dimensions: row.dimensions
      ? JSON.parse(row.dimensions as string)
      : null,
    applications: row.applications
      ? JSON.parse(row.applications as string)
      : [],
    is_active: Boolean(row.is_active),
  };
}

// GET - 获取单个设备（管理后台可以获取已禁用的设备）
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const { id } = params;
    const searchParams = request.nextUrl.searchParams;
    const includeInactive = searchParams.get('includeInactive') === 'true';

    const query = includeInactive
      ? 'SELECT * FROM laser_equipment WHERE id = ?'
      : 'SELECT * FROM laser_equipment WHERE id = ? AND is_active = 1';
    
    const stmt = db.prepare(query);
    const result = await stmt.bind(id).first();

    if (!result) {
      return NextResponse.json(
        {
          success: false,
          error: 'Equipment not found',
        },
        { status: 404 }
      );
    }

    const parsedEquipment = parseEquipmentRow(result);

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

// PUT - 更新设备
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const { id } = params;
    const body = await request.json();

    // 验证设备存在
    const checkStmt = db.prepare('SELECT id FROM laser_equipment WHERE id = ?');
    const exists = await checkStmt.bind(id).first();
    
    if (!exists) {
      return NextResponse.json(
        { success: false, error: '设备不存在' },
        { status: 404 }
      );
    }

    // 准备更新字段
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

    // 构建更新SQL
    const updateSql = `UPDATE laser_equipment SET
      brand = ?,
      model = ?,
      laser_type = ?,
      power_kw = ?,
      work_area_length = ?,
      work_area_width = ?,
      max_cutting_thickness = ?,
      cutting_speed = ?,
      positioning_accuracy = ?,
      repeat_accuracy = ?,
      beam_quality = ?,
      wavelength = ?,
      control_system = ?,
      cooling_type = ?,
      power_consumption = ?,
      dimensions = ?,
      weight = ?,
      price_range = ?,
      manufacturer_url = ?,
      spec_sheet_url = ?,
      image_url = ?,
      description = ?,
      applications = ?,
      origin_country = ?,
      is_active = ?,
      updated_at = CURRENT_TIMESTAMP
      WHERE id = ?`;

    const stmt = db.prepare(updateSql);
    await stmt.bind(
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
      body.is_active !== undefined ? Number(body.is_active) : 1,
      id
    ).run();

    // 返回更新后的数据
    const getStmt = db.prepare('SELECT * FROM laser_equipment WHERE id = ?');
    const updated = await getStmt.bind(id).first();

    return NextResponse.json({
      success: true,
      data: parseEquipmentRow(updated),
      message: '设备更新成功',
    });
  } catch (error: any) {
    console.error('Update Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '更新设备失败',
      },
      { status: 500 }
    );
  }
}

// DELETE - 删除设备（软删除：设置为is_active=0）
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = getDatabase();
    const { id } = params;

    // 软删除：设置is_active=0
    const stmt = db.prepare('UPDATE laser_equipment SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
    await stmt.bind(id).run();

    return NextResponse.json({
      success: true,
      message: '设备已删除',
    });
  } catch (error: any) {
    console.error('Delete Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '删除设备失败',
      },
      { status: 500 }
    );
  }
}



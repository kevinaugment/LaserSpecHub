import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import { parseEquipmentFromDB, prepareEquipmentForDB } from '@/lib/utils/equipment-parser';

export const runtime = 'nodejs';

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

    const parsedEquipment = parseEquipmentFromDB(result);

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

    // Prepare data for database (converts to both flattened and JSON fields)
    const { fields, values } = prepareEquipmentForDB(body);

    // Build UPDATE query dynamically
    const setClause = fields.map(f => `${f} = ?`).join(', ');
    const updateSql = `UPDATE laser_equipment SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;

    const stmt = db.prepare(updateSql);
    await stmt.bind(...values, id).run();

    // 返回更新后的数据
    const getStmt = db.prepare('SELECT * FROM laser_equipment WHERE id = ?');
    const updated = await getStmt.bind(id).first();

    return NextResponse.json({
      success: true,
      data: parseEquipmentFromDB(updated),
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



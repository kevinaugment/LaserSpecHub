import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

// POST - 批量操作（删除、启用、禁用）
export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();
    const { ids, action } = body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { success: false, error: '请提供设备ID列表' },
        { status: 400 }
      );
    }

    if (!['delete', 'activate', 'deactivate'].includes(action)) {
      return NextResponse.json(
        { success: false, error: '无效的操作类型' },
        { status: 400 }
      );
    }

    const placeholders = ids.map(() => '?').join(',');
    let sql = '';
    let affected = 0;

    switch (action) {
      case 'delete':
        // 软删除：设置is_active=0
        sql = `UPDATE laser_equipment SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`;
        break;
      case 'activate':
        sql = `UPDATE laser_equipment SET is_active = 1, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`;
        break;
      case 'deactivate':
        sql = `UPDATE laser_equipment SET is_active = 0, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`;
        break;
    }

    const stmt = db.prepare(sql);
    await stmt.bind(...ids).run();

    // 注意：libsql的run()方法不返回affected rows，所以我们使用ids.length作为近似值
    affected = ids.length;

    const actionMessages = {
      delete: '删除',
      activate: '启用',
      deactivate: '禁用',
    };

    return NextResponse.json({
      success: true,
      message: `成功${actionMessages[action as keyof typeof actionMessages]} ${affected} 个设备`,
      affected,
    });
  } catch (error: any) {
    console.error('Batch Operation Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || '批量操作失败',
      },
      { status: 500 }
    );
  }
}

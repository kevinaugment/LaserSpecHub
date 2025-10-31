import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';
import { nanoid } from 'nanoid';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();
    const { equipmentIds } = body;

    if (!equipmentIds || !Array.isArray(equipmentIds) || equipmentIds.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Equipment IDs are required' },
        { status: 400 }
      );
    }

    // Generate unique shareable ID
    const shareId = nanoid(10);

    // Get user IP and User-Agent for analytics
    const userIp = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save comparison with shareable ID
    const stmt = db.prepare(
      'INSERT INTO comparisons (equipment_ids, user_ip, user_agent, session_id) VALUES (?, ?, ?, ?)'
    );

    const result = await stmt
      .bind(
        JSON.stringify(equipmentIds),
        userIp,
        userAgent,
        shareId
      )
      .run();

    if (!result.success) {
      throw new Error('Failed to save comparison');
    }

    return NextResponse.json({
      success: true,
      shareId,
      shareUrl: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/comparison?ids=${equipmentIds.join(',')}&share=${shareId}`,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save comparison' },
      { status: 500 }
    );
  }
}


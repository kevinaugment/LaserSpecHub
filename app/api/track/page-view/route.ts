import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();
    const { page_path, page_title, referrer } = body || {};

    if (!page_path || typeof page_path !== 'string') {
      return NextResponse.json({ success: false, error: 'page_path is required' }, { status: 400 });
    }

    const userIp = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const stmt = db.prepare(
      'INSERT INTO page_views (page_path, page_title, referrer, user_ip, user_agent) VALUES (?, ?, ?, ?, ?)'
    );
    await stmt.bind(page_path, page_title || null, referrer || null, userIp, userAgent).run();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to track page view' }, { status: 500 });
  }
}




























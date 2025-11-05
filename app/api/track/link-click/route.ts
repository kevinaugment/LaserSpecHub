import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();
    const { source_page, destination_url, link_text, link_type } = body || {};

    if (!source_page || !destination_url) {
      return NextResponse.json({ success: false, error: 'source_page and destination_url are required' }, { status: 400 });
    }

    const userIp = request.headers.get('x-forwarded-for') || 'unknown';
    const stmt = db.prepare(
      'INSERT INTO link_clicks (source_page, destination_url, link_text, link_type, user_ip) VALUES (?, ?, ?, ?, ?)'
    );
    await stmt.bind(source_page, destination_url, link_text || null, link_type || null, userIp).run();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to track link click' }, { status: 500 });
  }
}





























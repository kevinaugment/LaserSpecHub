import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();
    const { name, email, company, phone, message, form_type, source_page } = body || {};

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'name and email are required' }, { status: 400 });
    }

    const stmt = db.prepare(
      'INSERT INTO contact_submissions (name, email, company, phone, message, form_type, source_page) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    await stmt
      .bind(
        String(name).trim(),
        String(email).trim(),
        company ? String(company).trim() : null,
        phone ? String(phone).trim() : null,
        message ? String(message).trim() : null,
        form_type ? String(form_type).trim() : 'general',
        source_page ? String(source_page).trim() : null
      )
      .run();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit contact form' }, { status: 500 });
  }
}





















import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Check authentication and admin role
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
    });

    if (!token || token.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = getDatabase();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    // Build query based on status filter
    let query = 'SELECT * FROM equipment_submissions';
    const params: string[] = [];

    if (status && ['pending', 'approved', 'rejected'].includes(status)) {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    const stmt = db.prepare(query);
    const result = params.length > 0 
      ? await stmt.bind(...params).all() 
      : await stmt.all();

    const submissions = result.results || [];

    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length,
    });
  } catch (error: any) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}





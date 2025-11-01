import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const submissionId = parseInt(params.id, 10);

    if (isNaN(submissionId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid submission ID' },
        { status: 400 }
      );
    }

    const stmt = db.prepare('SELECT * FROM equipment_submissions WHERE id = ?');
    const result = await stmt.bind(submissionId).all();

    if (!result.results || result.results.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    const submission = result.results[0];

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error: any) {
    console.error('Error fetching submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submission' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const submissionId = parseInt(params.id, 10);

    if (isNaN(submissionId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid submission ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { action, notes } = body;

    if (!action || !['approve', 'reject'].includes(action)) {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Must be "approve" or "reject"' },
        { status: 400 }
      );
    }

    // Get submission data
    const getStmt = db.prepare('SELECT * FROM equipment_submissions WHERE id = ?');
    const getResult = await getStmt.bind(submissionId).all();

    if (!getResult.results || getResult.results.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    const submission = getResult.results[0] as any;

    if (action === 'approve') {
      // Insert into laser_equipment table
      const insertStmt = db.prepare(`
        INSERT INTO laser_equipment (
          brand, model, laser_type, power_kw, work_area_length, work_area_width,
          max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
          beam_quality, wavelength, control_system, cooling_type, power_consumption,
          dimensions, weight, price_range, manufacturer_url, spec_sheet_url,
          image_url, description, applications, origin_country, is_active
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
      `);

      const insertResult = await insertStmt.bind(
        submission.brand,
        submission.model,
        submission.laser_type,
        submission.power_kw,
        submission.work_area_length,
        submission.work_area_width,
        submission.max_cutting_thickness,
        submission.cutting_speed,
        submission.positioning_accuracy,
        submission.repeat_accuracy,
        submission.beam_quality,
        submission.wavelength,
        submission.control_system,
        submission.cooling_type,
        submission.power_consumption,
        submission.dimensions,
        submission.weight,
        submission.price_range,
        submission.manufacturer_url,
        submission.spec_sheet_url,
        submission.image_url,
        submission.description,
        submission.applications,
        submission.origin_country
      ).run();

      const newEquipmentId = insertResult.meta?.last_row_id || 0;

      // Update submission status
      const updateStmt = db.prepare(`
        UPDATE equipment_submissions 
        SET status = 'approved', 
            reviewer_id = ?, 
            reviewer_notes = ?, 
            reviewed_at = CURRENT_TIMESTAMP,
            approved_equipment_id = ?
        WHERE id = ?
      `);

      await updateStmt.bind(token.id, notes || null, newEquipmentId, submissionId).run();

      return NextResponse.json({
        success: true,
        message: 'Submission approved and equipment created',
        equipmentId: newEquipmentId,
      });
    } else {
      // Reject submission
      const updateStmt = db.prepare(`
        UPDATE equipment_submissions 
        SET status = 'rejected', 
            reviewer_id = ?, 
            reviewer_notes = ?, 
            reviewed_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `);

      await updateStmt.bind(token.id, notes || null, submissionId).run();

      return NextResponse.json({
        success: true,
        message: 'Submission rejected',
      });
    }
  } catch (error: any) {
    console.error('Error reviewing submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to review submission' },
      { status: 500 }
    );
  }
}


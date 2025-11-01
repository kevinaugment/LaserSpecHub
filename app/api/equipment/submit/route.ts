import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

function requiredString(v: unknown) {
  return typeof v === 'string' && v.trim().length > 0;
}

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const body = await request.json();

    const { brand, model, laser_type } = body || {};
    if (!requiredString(brand) || !requiredString(model) || !requiredString(laser_type)) {
      return NextResponse.json({ success: false, error: 'brand, model, laser_type are required' }, { status: 400 });
    }

    const stmt = db.prepare(`INSERT INTO equipment_submissions (
      brand, model, laser_type, power_kw, work_area_length, work_area_width,
      max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
      beam_quality, wavelength, control_system, cooling_type, power_consumption,
      dimensions, weight, price_range, manufacturer_url, spec_sheet_url,
      image_url, description, applications, origin_country,
      submitter_name, submitter_email, source_url
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

    await stmt
      .bind(
        String(brand).trim(),
        String(model).trim(),
        String(laser_type).trim(),
        body.power_kw ?? null,
        body.work_area_length ?? null,
        body.work_area_width ?? null,
        body.max_cutting_thickness ? JSON.stringify(body.max_cutting_thickness) : null,
        body.cutting_speed ? JSON.stringify(body.cutting_speed) : null,
        body.positioning_accuracy ?? null,
        body.repeat_accuracy ?? null,
        body.beam_quality ?? null,
        body.wavelength ?? null,
        body.control_system ?? null,
        body.cooling_type ?? null,
        body.power_consumption ?? null,
        body.dimensions ? JSON.stringify(body.dimensions) : null,
        body.weight ?? null,
        body.price_range ?? null,
        body.manufacturer_url ?? null,
        body.spec_sheet_url ?? null,
        body.image_url ?? null,
        body.description ?? null,
        body.applications ? JSON.stringify(body.applications) : null,
        body.origin_country ?? null,
        body.submitter_name ?? null,
        body.submitter_email ?? null,
        body.source_url ?? null
      )
      .run();

    return NextResponse.json({ success: true, status: 'pending' });
  } catch (_err) {
    return NextResponse.json({ success: false, error: 'Failed to submit equipment' }, { status: 500 });
  }
}


























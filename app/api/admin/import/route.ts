import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

// Minimal CSV parser supporting quoted fields, embedded commas, and escaped quotes
function parseCsv(text: string): { headers: string[]; rows: string[][] } {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return { headers: [], rows: [] };

  const parseLine = (line: string): string[] => {
    const out: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"') {
          // Escaped quote
          if (i + 1 < line.length && line[i + 1] === '"') {
            cur += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          cur += ch;
        }
      } else {
        if (ch === ',') {
          out.push(cur);
          cur = '';
        } else if (ch === '"') {
          inQuotes = true;
        } else {
          cur += ch;
        }
      }
    }
    out.push(cur);
    return out.map((v) => v.trim());
  };

  const headers = parseLine(lines[0]);
  const rows = lines.slice(1).map(parseLine);
  return { headers, rows };
}

function normalizeLaserType(value: string | null): string | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (v.includes('fiber')) return 'Fiber';
  if (v.includes('co2') || v.includes('co₂')) return 'CO2';
  if (v.includes('solid')) return 'Solid';
  if (v.includes('hybrid')) return 'Hybrid';
  // fallback: capitalize first letter
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const contentType = request.headers.get('content-type') || '';

    let csvText = '';
    let records: any[] | null = null;
    if (contentType.startsWith('text/csv')) {
      csvText = await request.text();
    } else if (contentType.startsWith('application/json')) {
      const body = await request.json();
      if (Array.isArray(body.records)) {
        records = body.records;
      } else if (typeof body.csv === 'string') {
        csvText = body.csv;
      } else {
        return NextResponse.json({ success: false, error: 'Provide csv or records[] in JSON' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ success: false, error: 'Unsupported content-type' }, { status: 400 });
    }

    let inserted = 0;
    let updated = 0;

    const upsertSql = `INSERT INTO laser_equipment (
      brand, model, laser_type, power_kw, work_area_length, work_area_width,
      max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
      beam_quality, wavelength, control_system, cooling_type, power_consumption,
      dimensions, weight, price_range, manufacturer_url, spec_sheet_url,
      image_url, description, applications, origin_country
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(brand, model) DO UPDATE SET
      laser_type=excluded.laser_type,
      power_kw=excluded.power_kw,
      work_area_length=excluded.work_area_length,
      work_area_width=excluded.work_area_width,
      max_cutting_thickness=excluded.max_cutting_thickness,
      cutting_speed=excluded.cutting_speed,
      positioning_accuracy=excluded.positioning_accuracy,
      repeat_accuracy=excluded.repeat_accuracy,
      beam_quality=excluded.beam_quality,
      wavelength=excluded.wavelength,
      control_system=excluded.control_system,
      cooling_type=excluded.cooling_type,
      power_consumption=excluded.power_consumption,
      dimensions=excluded.dimensions,
      weight=excluded.weight,
      price_range=excluded.price_range,
      manufacturer_url=excluded.manufacturer_url,
      spec_sheet_url=excluded.spec_sheet_url,
      image_url=excluded.image_url,
      description=excluded.description,
      applications=excluded.applications,
      origin_country=excluded.origin_country,
      updated_at=CURRENT_TIMESTAMP`;

    const runUpsert = async (rec: Record<string, any>) => {
      // helpers from record
      const val = (k: string) => rec[k] ?? null;
      const num = (k: string) => {
        const v = rec[k];
        if (v === undefined || v === null || v === '') return null;
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
      };
      const json = (k: string) => {
        const v = rec[k];
        if (v === undefined || v === null || v === '') return null;
        try {
          if (typeof v === 'string') return JSON.stringify(JSON.parse(v));
          return JSON.stringify(v);
        } catch {
          return null;
        }
      };

      const laserType = normalizeLaserType(val('laser_type'));

      const stmt = db.prepare(upsertSql);
      const res = await stmt
        .bind(
          val('brand'),
          val('model'),
          laserType,
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
          val('origin_country')
        )
        .run();

      // libsql returns last_row_id > 0 only on insert; on update it may be 0
      if (res?.meta?.last_row_id && res.meta.last_row_id > 0) inserted += 1;
      else updated += 1;
    };

    if (records) {
      // JSON records flow
      for (const rec of records) {
        if (!rec.brand || !rec.model || !rec.laser_type) continue;
        await runUpsert(rec);
      }
    } else {
      const { headers, rows } = parseCsv(csvText);
      if (headers.length === 0 || rows.length === 0) {
        return NextResponse.json({ success: false, error: 'Empty CSV' }, { status: 400 });
      }
      const idx = (name: string) => headers.indexOf(name);
      const required = ['brand', 'model', 'laser_type'];
      for (const r of required) if (idx(r) === -1) return NextResponse.json({ success: false, error: `Missing header: ${r}` }, { status: 400 });

      for (const row of rows) {
        const rec: Record<string, any> = {};
        headers.forEach((h, i) => {
          rec[h] = row[i];
        });
        if (!rec.brand || !rec.model || !rec.laser_type) continue;
        await runUpsert(rec);
      }
    }

    return NextResponse.json({ success: true, inserted, updated });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Import failed' }, { status: 500 });
  }
}






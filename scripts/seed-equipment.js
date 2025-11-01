/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { createClient } = require('@libsql/client');

async function run() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url || !authToken) {
    console.error('Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN');
    process.exit(1);
  }

  const dataPath = path.resolve(__dirname, '..', 'data', 'equipment.json');
  if (!fs.existsSync(dataPath)) {
    console.error(`Data file not found: ${dataPath}`);
    process.exit(1);
  }

  const rows = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  if (!Array.isArray(rows)) {
    console.error('equipment.json must be an array');
    process.exit(1);
  }

  const client = createClient({ url, authToken });

  let inserted = 0;
  for (const r of rows) {
    const stmt = `INSERT OR IGNORE INTO laser_equipment (
      brand, model, laser_type, power_kw, work_area_length, work_area_width,
      max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
      beam_quality, wavelength, control_system, cooling_type, power_consumption,
      dimensions, weight, price_range, manufacturer_url, spec_sheet_url,
      image_url, description, applications, origin_country
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
      r.brand, r.model, r.laser_type, r.power_kw, r.work_area_length, r.work_area_width,
      r.max_cutting_thickness ? JSON.stringify(r.max_cutting_thickness) : null,
      r.cutting_speed ? JSON.stringify(r.cutting_speed) : null,
      r.positioning_accuracy ?? null, r.repeat_accuracy ?? null,
      r.beam_quality ?? null, r.wavelength ?? null, r.control_system ?? null, r.cooling_type ?? null, r.power_consumption ?? null,
      r.dimensions ? JSON.stringify(r.dimensions) : null, r.weight ?? null, r.price_range ?? null, r.manufacturer_url ?? null, r.spec_sheet_url ?? null,
      r.image_url ?? null, r.description ?? null, r.applications ? JSON.stringify(r.applications) : null, r.origin_country ?? null,
    ];

    await client.execute({ sql: stmt, args: params });
    inserted += 1;
  }

  console.log(`Seeded ${inserted} equipment rows (existing rows ignored).`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});





















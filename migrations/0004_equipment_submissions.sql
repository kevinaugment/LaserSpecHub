-- User submitted equipment proposals (moderation queue)

CREATE TABLE IF NOT EXISTS equipment_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  laser_type TEXT NOT NULL CHECK(laser_type IN ('CO2', 'Fiber', 'Solid', 'Hybrid')),
  power_kw REAL,
  work_area_length REAL,
  work_area_width REAL,
  max_cutting_thickness TEXT,
  cutting_speed TEXT,
  positioning_accuracy REAL,
  repeat_accuracy REAL,
  beam_quality REAL,
  wavelength INTEGER,
  control_system TEXT,
  cooling_type TEXT CHECK(cooling_type IN ('Water', 'Air', 'Hybrid', 'Other')),
  power_consumption REAL,
  dimensions TEXT,
  weight REAL,
  price_range TEXT,
  manufacturer_url TEXT,
  spec_sheet_url TEXT,
  image_url TEXT,
  description TEXT,
  applications TEXT,
  origin_country TEXT,
  submitter_name TEXT,
  submitter_email TEXT,
  source_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_eq_submissions_status_created ON equipment_submissions(status, created_at);





















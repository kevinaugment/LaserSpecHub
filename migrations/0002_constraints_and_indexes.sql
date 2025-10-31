-- Constraints and additional indexes for LaserSpecHub

-- Note: origin_country column should already exist in initial schema
-- Skipping ALTER TABLE as Turso SQLite doesn't support IF NOT EXISTS in ADD COLUMN

CREATE UNIQUE INDEX IF NOT EXISTS ux_equipment_brand_model
  ON laser_equipment(brand, model);

-- Basic sanity checks
CREATE INDEX IF NOT EXISTS idx_equipment_power_area
  ON laser_equipment(power_kw, work_area_length, work_area_width);

-- Improve searches by brand first then model
CREATE INDEX IF NOT EXISTS idx_equipment_brand_model
  ON laser_equipment(brand, model);

-- Comparisons lookup by session_id already used in code
CREATE INDEX IF NOT EXISTS idx_comparisons_session
  ON comparisons(session_id);







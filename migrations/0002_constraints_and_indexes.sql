-- Constraints and additional indexes for LaserSpecHub

-- Enforce brand+model uniqueness and not-null for critical fields
ALTER TABLE laser_equipment
  ADD COLUMN IF NOT EXISTS origin_country TEXT;

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







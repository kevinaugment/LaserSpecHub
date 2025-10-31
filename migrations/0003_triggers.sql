-- Triggers to maintain updated_at
-- Note: Turso SQLite doesn't support IF NOT EXISTS for triggers
-- Drop and recreate to ensure idempotency

DROP TRIGGER IF EXISTS trg_laser_equipment_updated;

CREATE TRIGGER trg_laser_equipment_updated
AFTER UPDATE ON laser_equipment
FOR EACH ROW BEGIN
  UPDATE laser_equipment SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;







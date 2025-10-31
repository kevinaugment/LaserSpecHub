-- Triggers to maintain updated_at

CREATE TRIGGER IF NOT EXISTS trg_laser_equipment_updated
AFTER UPDATE ON laser_equipment
FOR EACH ROW BEGIN
  UPDATE laser_equipment SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;







-- Migration 0008: Equipment Images
-- Created: 2025-11-01
-- Purpose: Add support for multiple images per equipment

-- Equipment images table
CREATE TABLE IF NOT EXISTS equipment_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  equipment_id INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  image_type TEXT NOT NULL DEFAULT 'photo',
  display_order INTEGER NOT NULL DEFAULT 0,
  alt_text TEXT,
  caption TEXT,
  is_primary INTEGER NOT NULL DEFAULT 0,
  uploaded_by TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (equipment_id) REFERENCES laser_equipment(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_equipment_images_equipment ON equipment_images(equipment_id);
CREATE INDEX IF NOT EXISTS idx_equipment_images_primary ON equipment_images(equipment_id, is_primary);
CREATE INDEX IF NOT EXISTS idx_equipment_images_order ON equipment_images(equipment_id, display_order);

-- Add image_url column to laser_equipment if not exists (for backward compatibility)
-- Note: SQLite doesn't support IF NOT EXISTS for columns, so we'll handle this in application code
-- ALTER TABLE laser_equipment ADD COLUMN image_url TEXT;

-- Comments for image_type values:
-- 'photo': General product photo
-- 'diagram': Technical diagram or schematic
-- 'spec_sheet': Specification sheet image
-- 'demo': Demonstration or sample work
-- 'installation': Installation photo
-- 'detail': Close-up detail shot





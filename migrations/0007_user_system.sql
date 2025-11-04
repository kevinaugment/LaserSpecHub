-- Migration 0007: User System Tables (Favorites and Comparison Saves)
-- Created: 2025-11-01
-- Purpose: Add user favorites and comparison saves functionality

-- User favorites table
CREATE TABLE IF NOT EXISTS user_favorites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  equipment_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (equipment_id) REFERENCES laser_equipment(id) ON DELETE CASCADE,
  UNIQUE(user_id, equipment_id)
);

CREATE INDEX IF NOT EXISTS idx_favorites_user ON user_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_equipment ON user_favorites(equipment_id);

-- Comparison saves table
CREATE TABLE IF NOT EXISTS comparison_saves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  equipment_ids TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_comparison_saves_user ON comparison_saves(user_id);

-- Trigger to update updated_at timestamp for comparison_saves
CREATE TRIGGER IF NOT EXISTS update_comparison_saves_timestamp 
AFTER UPDATE ON comparison_saves
FOR EACH ROW
BEGIN
  UPDATE comparison_saves SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;






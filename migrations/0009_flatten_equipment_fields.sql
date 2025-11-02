-- LaserSpecHub Database Schema Migration
-- Migration: 0009_flatten_equipment_fields
-- Created: 2025-11-02
-- Purpose: Flatten JSON fields into individual columns for better searchability and performance

-- Step 1: Add new individual columns for cutting thickness (replacing max_cutting_thickness JSON)
ALTER TABLE laser_equipment ADD COLUMN max_thickness_steel REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_aluminum REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_stainless REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_copper REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_brass REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_acrylic REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_wood REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_mdf REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_fabric REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_leather REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_titanium REAL;
ALTER TABLE laser_equipment ADD COLUMN max_thickness_nickel REAL;

-- Step 2: Add new individual columns for cutting speed (replacing cutting_speed JSON)
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_steel_5mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_steel_10mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_steel_20mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_aluminum_5mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_aluminum_10mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_stainless_5mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_stainless_10mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_acrylic_5mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_acrylic_10mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_wood_5mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_wood_10mm REAL;
ALTER TABLE laser_equipment ADD COLUMN cutting_speed_titanium_5mm REAL;

-- Step 3: Add new individual columns for dimensions (replacing dimensions JSON)
ALTER TABLE laser_equipment ADD COLUMN dimension_length REAL;
ALTER TABLE laser_equipment ADD COLUMN dimension_width REAL;
ALTER TABLE laser_equipment ADD COLUMN dimension_height REAL;

-- Step 4: Create applications lookup table
CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  category TEXT, -- e.g., 'Industry', 'Material Type', 'Application Type'
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 5: Create many-to-many relationship table for equipment and applications
CREATE TABLE IF NOT EXISTS equipment_applications (
  equipment_id INTEGER NOT NULL,
  application_id INTEGER NOT NULL,
  priority INTEGER DEFAULT 0, -- For ordering applications
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (equipment_id, application_id),
  FOREIGN KEY (equipment_id) REFERENCES laser_equipment(id) ON DELETE CASCADE,
  FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
);

-- Step 6: Create indexes for performance optimization
-- Cutting thickness indexes (for filtering)
CREATE INDEX IF NOT EXISTS idx_equipment_thickness_steel ON laser_equipment(max_thickness_steel);
CREATE INDEX IF NOT EXISTS idx_equipment_thickness_aluminum ON laser_equipment(max_thickness_aluminum);
CREATE INDEX IF NOT EXISTS idx_equipment_thickness_stainless ON laser_equipment(max_thickness_stainless);

-- Cutting speed indexes (for filtering and sorting)
CREATE INDEX IF NOT EXISTS idx_equipment_speed_steel_10mm ON laser_equipment(cutting_speed_steel_10mm);
CREATE INDEX IF NOT EXISTS idx_equipment_speed_aluminum_5mm ON laser_equipment(cutting_speed_aluminum_5mm);

-- Dimension indexes (for filtering)
CREATE INDEX IF NOT EXISTS idx_equipment_dimension_length ON laser_equipment(dimension_length);
CREATE INDEX IF NOT EXISTS idx_equipment_dimension_width ON laser_equipment(dimension_width);

-- Application relationship indexes
CREATE INDEX IF NOT EXISTS idx_equipment_applications_equipment ON equipment_applications(equipment_id);
CREATE INDEX IF NOT EXISTS idx_equipment_applications_application ON equipment_applications(application_id);
CREATE INDEX IF NOT EXISTS idx_applications_name ON applications(name);
CREATE INDEX IF NOT EXISTS idx_applications_category ON applications(category);

-- Step 7: Insert common applications
INSERT OR IGNORE INTO applications (name, category, description) VALUES
-- Industry applications
('Sheet metal fabrication', 'Industry', 'General sheet metal cutting and fabrication'),
('Automotive parts', 'Industry', 'Automotive components and parts manufacturing'),
('Aerospace', 'Industry', 'Aerospace components requiring high precision'),
('Medical devices', 'Industry', 'Medical equipment and device manufacturing'),
('Electronics', 'Industry', 'Electronic components and enclosures'),
('HVAC', 'Industry', 'Heating, ventilation, and air conditioning components'),
('Signage', 'Industry', 'Sign making and display fabrication'),
('Jewelry', 'Industry', 'Precision jewelry cutting and engraving'),
('Defense', 'Industry', 'Military and defense applications'),
('Shipbuilding', 'Industry', 'Marine and shipbuilding industry'),
('Construction equipment', 'Industry', 'Heavy construction machinery parts'),
('Industrial machinery', 'Industry', 'General industrial machinery components'),

-- Material-specific applications
('Metal fabrication', 'Material', 'General metal cutting and forming'),
('Tube cutting', 'Material', 'Pipe and tube cutting applications'),
('3D cutting', 'Material', 'Three-dimensional cutting applications'),
('Precision parts', 'Material', 'High-precision component manufacturing'),
('Heavy machinery', 'Material', 'Large and heavy component fabrication'),
('Structural steel', 'Material', 'Structural steel component fabrication'),
('Specialty alloys', 'Material', 'Cutting of special alloy materials'),

-- Non-metal applications (for CO2 lasers)
('Woodworking', 'Non-Metal', 'Wood cutting and engraving'),
('Acrylic fabrication', 'Non-Metal', 'Acrylic sheet cutting and forming'),
('Fabric cutting', 'Non-Metal', 'Textile and fabric cutting'),
('Leather working', 'Non-Metal', 'Leather cutting and engraving'),
('Packaging prototypes', 'Non-Metal', 'Packaging design and prototyping'),
('Awards', 'Non-Metal', 'Trophy and award engraving'),
('Crafts', 'Non-Metal', 'Craft and hobby applications'),

-- Business size applications
('Small business', 'Business', 'Suitable for small businesses'),
('Job shops', 'Business', 'Job shop and custom fabrication'),
('High-volume', 'Business', 'High-volume production environments'),
('Prototyping', 'Business', 'Rapid prototyping and R&D'),
('Educational', 'Business', 'Educational and training purposes'),
('Startup', 'Business', 'Startup and new business ventures'),

-- Special applications
('Custom fabrication', 'Special', 'Custom and specialized fabrication'),
('Large panels', 'Special', 'Large format panel cutting'),
('Export manufacturing', 'Special', 'Export-oriented manufacturing'),
('Product development', 'Special', 'Product design and development'),
('Personalization', 'Special', 'Personalization and customization'),
('Architecture models', 'Special', 'Architectural model making'),
('Fashion', 'Special', 'Fashion and apparel applications'),
('Displays', 'Special', 'Display and exhibition fabrication');

-- Step 8: Add comments for documentation
-- Note: SQLite doesn't support column comments, so we document here:
-- 
-- Old JSON fields (to be deprecated after migration):
-- - max_cutting_thickness: TEXT (JSON) -> Individual max_thickness_* columns
-- - cutting_speed: TEXT (JSON) -> Individual cutting_speed_* columns  
-- - dimensions: TEXT (JSON) -> Individual dimension_* columns
-- - applications: TEXT (JSON array) -> applications + equipment_applications tables
--
-- Migration strategy:
-- 1. Add new columns (this migration)
-- 2. Run data migration script to populate new columns from JSON
-- 3. Verify data integrity
-- 4. Update application code to use new columns
-- 5. In future migration, drop old JSON columns after full transition

-- Migration completed successfully


-- LaserSpecHub Database Schema
-- Migration: 0001_initial_schema
-- Created: 2025-10-30

-- Laser equipment data table
CREATE TABLE IF NOT EXISTS laser_equipment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  laser_type TEXT NOT NULL CHECK(laser_type IN ('CO2', 'Fiber', 'Solid', 'Hybrid')),
  power_kw REAL NOT NULL,
  work_area_length REAL,
  work_area_width REAL,
  max_cutting_thickness TEXT, -- JSON: {"steel": 20, "aluminum": 15, "stainless": 12}
  cutting_speed TEXT, -- JSON: {"steel_10mm": 2.5, "aluminum_5mm": 4.0}
  positioning_accuracy REAL,
  repeat_accuracy REAL,
  beam_quality REAL, -- M² value
  wavelength INTEGER, -- in nanometers
  control_system TEXT,
  cooling_type TEXT CHECK(cooling_type IN ('Water', 'Air', 'Hybrid', 'Other')),
  power_consumption REAL, -- in kW
  dimensions TEXT, -- JSON: {"length": 6000, "width": 3000, "height": 2000}
  weight REAL, -- in kg
  price_range TEXT, -- e.g., "50000-75000"
  manufacturer_url TEXT,
  spec_sheet_url TEXT,
  image_url TEXT,
  description TEXT,
  applications TEXT, -- JSON array: ["Sheet metal", "Tube cutting", "3D cutting"]
  origin_country TEXT, -- Country of origin, e.g., "DE", "US", "CN"
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active INTEGER DEFAULT 1 CHECK(is_active IN (0, 1))
);

-- Equipment comparisons history
CREATE TABLE IF NOT EXISTS comparisons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  equipment_ids TEXT NOT NULL, -- JSON array: [1, 5, 12]
  user_ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  session_id TEXT
);

-- User form submissions (for lead generation)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  form_type TEXT, -- 'general', 'quote_request', 'technical_inquiry'
  source_page TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'new' CHECK(status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Calculator usage tracking
CREATE TABLE IF NOT EXISTS calculator_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  calculator_type TEXT NOT NULL, -- 'power', 'size', 'cost'
  input_data TEXT, -- JSON: calculator inputs
  result_data TEXT, -- JSON: calculator outputs
  user_ip TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Content page views (for analytics)
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- External link clicks tracking
CREATE TABLE IF NOT EXISTS link_clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_page TEXT NOT NULL,
  destination_url TEXT NOT NULL,
  link_text TEXT,
  link_type TEXT, -- 'opmt', 'manufacturer', 'external'
  user_ip TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_equipment_laser_type ON laser_equipment(laser_type);
CREATE INDEX IF NOT EXISTS idx_equipment_power ON laser_equipment(power_kw);
CREATE INDEX IF NOT EXISTS idx_equipment_brand ON laser_equipment(brand);
CREATE INDEX IF NOT EXISTS idx_equipment_active ON laser_equipment(is_active);
CREATE INDEX IF NOT EXISTS idx_comparisons_created ON comparisons(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_link_clicks_dest ON link_clicks(destination_url);

-- Insert comprehensive sample data for testing
INSERT INTO laser_equipment (
  brand, model, laser_type, power_kw, work_area_length, work_area_width,
  max_cutting_thickness, cutting_speed, positioning_accuracy, repeat_accuracy,
  beam_quality, wavelength, control_system, cooling_type, power_consumption,
  dimensions, weight, price_range, description, applications
) VALUES 
-- Fiber Lasers
(
  'OPMT Laser',
  'FL-6000',
  'Fiber',
  6.0,
  3000,
  1500,
  '{"steel": 20, "aluminum": 12, "stainless": 15}',
  '{"steel_10mm": 2.8, "aluminum_5mm": 5.2}',
  0.03,
  0.02,
  1.8,
  1070,
  'Cypcut CNC',
  'Water',
  45.0,
  '{"length": 6800, "width": 2600, "height": 2100}',
  4500,
  '65000-85000',
  'High-performance fiber laser cutting machine with advanced CNC system',
  '["Sheet metal fabrication", "Automotive parts", "Industrial machinery"]'
),
(
  'TruLaser',
  'Fiber 3030',
  'Fiber',
  3.0,
  3000,
  1500,
  '{"steel": 15, "aluminum": 10, "stainless": 12}',
  '{"steel_10mm": 2.2, "aluminum_5mm": 4.0}',
  0.04,
  0.025,
  1.9,
  1070,
  'Siemens 840D',
  'Water',
  35.0,
  '{"length": 7200, "width": 2800, "height": 2200}',
  5200,
  '85000-110000',
  'German-engineered precision fiber laser for industrial applications',
  '["Precision parts", "Medical devices", "Electronics"]'
),
(
  'ByStar Fiber',
  'FL-8000',
  'Fiber',
  8.0,
  4000,
  2000,
  '{"steel": 25, "aluminum": 15, "stainless": 20}',
  '{"steel_10mm": 3.5, "aluminum_5mm": 6.0}',
  0.025,
  0.015,
  1.7,
  1070,
  'Beckhoff TwinCAT',
  'Water',
  60.0,
  '{"length": 8500, "width": 3200, "height": 2400}',
  6800,
  '120000-150000',
  'High-power fiber laser for heavy-duty industrial cutting',
  '["Heavy machinery", "Shipbuilding", "Construction equipment"]'
),
(
  'Prima Power',
  'Fiber EVO 4',
  'Fiber',
  4.0,
  3000,
  1500,
  '{"steel": 18, "aluminum": 11, "stainless": 14}',
  '{"steel_10mm": 2.5, "aluminum_5mm": 4.5}',
  0.035,
  0.02,
  1.8,
  1070,
  'Fanuc CNC',
  'Water',
  40.0,
  '{"length": 7000, "width": 2700, "height": 2100}',
  5000,
  '75000-95000',
  'Compact fiber laser with excellent energy efficiency',
  '["General fabrication", "HVAC", "Metal furniture"]'
),
(
  'Mazak',
  'Optiplex 3015',
  'Fiber',
  4.0,
  3000,
  1500,
  '{"steel": 18, "aluminum": 11, "stainless": 14}',
  '{"steel_10mm": 2.6, "aluminum_5mm": 4.6}',
  0.03,
  0.02,
  1.85,
  1070,
  'Mazak Control',
  'Water',
  42.0,
  '{"length": 7100, "width": 2750, "height": 2150}',
  5100,
  '95000-125000',
  'Japanese precision fiber laser with advanced automation features',
  '["Aerospace", "Automotive", "Medical"]'
),
(
  'Han''s Laser',
  'G3015F',
  'Fiber',
  3.0,
  3000,
  1500,
  '{"steel": 16, "aluminum": 10, "stainless": 12}',
  '{"steel_10mm": 2.0, "aluminum_5mm": 3.8}',
  0.04,
  0.025,
  1.9,
  1070,
  'Cypcut',
  'Water',
  32.0,
  '{"length": 6900, "width": 2650, "height": 2050}',
  4200,
  '45000-60000',
  'Cost-effective fiber laser for small to medium businesses',
  '["General metalworking", "Job shops", "Prototyping"]'
),
-- CO2 Lasers
(
  'Generic Brand',
  'CO2-3000',
  'CO2',
  3.0,
  2000,
  1000,
  '{"acrylic": 25, "wood": 20, "mdf": 15}',
  '{"acrylic_10mm": 15, "wood_10mm": 20}',
  0.05,
  0.03,
  2.5,
  10600,
  'Ruida RDC6445G',
  'Water',
  28.0,
  '{"length": 3400, "width": 2200, "height": 1800}',
  2800,
  '35000-45000',
  'Versatile CO2 laser for non-metal materials',
  '["Signage", "Woodworking", "Acrylic fabrication"]'
),
(
  'Epilog',
  'Fusion Pro 48',
  'CO2',
  1.2,
  1219,
  914,
  '{"acrylic": 20, "wood": 15, "fabric": 10}',
  '{"acrylic_5mm": 25, "wood_5mm": 30}',
  0.08,
  0.05,
  2.8,
  10600,
  'Epilog Control',
  'Air',
  15.0,
  '{"length": 1930, "width": 1420, "height": 1120}',
  340,
  '45000-55000',
  'Professional CO2 laser for signage and engraving applications',
  '["Signage", "Awards", "Personalization", "Crafts"]'
),
(
  'Trotec',
  'Speedy 400',
  'CO2',
  1.5,
  1000,
  610,
  '{"acrylic": 15, "wood": 12, "leather": 8}',
  '{"acrylic_5mm": 28, "wood_5mm": 32}',
  0.06,
  0.04,
  2.6,
  10600,
  'Trotec JobControl',
  'Air',
  12.0,
  '{"length": 1740, "width": 1130, "height": 1110}',
  290,
  '55000-70000',
  'High-speed CO2 laser ideal for production environments',
  '["Packaging prototypes", "Displays", "Fashion", "Architecture models"]'
),
(
  'Universal Laser',
  'PLS6.150D',
  'CO2',
  1.5,
  1219,
  610,
  '{"acrylic": 18, "wood": 15, "fabric": 10}',
  '{"acrylic_5mm": 20, "wood_5mm": 25}',
  0.07,
  0.045,
  2.7,
  10600,
  'ULS Control Panel',
  'Air',
  14.0,
  '{"length": 1980, "width": 1090, "height": 1220}',
  318,
  '50000-65000',
  'Dual-source CO2 laser for enhanced productivity',
  '["Product development", "Education", "Small business"]'
),
-- High-Power Fiber Lasers
(
  'OPMT Laser',
  'FL-12000',
  'Fiber',
  12.0,
  4000,
  2000,
  '{"steel": 30, "aluminum": 20, "stainless": 25}',
  '{"steel_10mm": 4.5, "aluminum_5mm": 8.0}',
  0.02,
  0.01,
  1.6,
  1070,
  'Cypcut Pro',
  'Water',
  85.0,
  '{"length": 9200, "width": 3500, "height": 2600}',
  8500,
  '180000-220000',
  'Ultra-high-power fiber laser for maximum productivity',
  '["Heavy industry", "Shipbuilding", "Large fabrication"]'
),
(
  'Trumpf',
  'TruLaser 5030',
  'Fiber',
  5.0,
  3000,
  1500,
  '{"steel": 20, "aluminum": 12, "stainless": 16}',
  '{"steel_10mm": 3.0, "aluminum_5mm": 5.5}',
  0.025,
  0.015,
  1.75,
  1070,
  'Siemens 840D',
  'Water',
  48.0,
  '{"length": 7500, "width": 2900, "height": 2300}',
  5800,
  '150000-190000',
  'Premium German fiber laser with exceptional reliability',
  '["Aerospace", "Defense", "High-precision manufacturing"]'
),
(
  'Amada',
  'LCG AJ 4020',
  'Fiber',
  4.0,
  4000,
  2000,
  '{"steel": 19, "aluminum": 12, "stainless": 15}',
  '{"steel_10mm": 2.7, "aluminum_5mm": 4.8}',
  0.03,
  0.02,
  1.8,
  1070,
  'Amada AMNC',
  'Water',
  44.0,
  '{"length": 8200, "width": 3100, "height": 2400}',
  6200,
  '110000-140000',
  'Large format fiber laser for versatile applications',
  '["Large panels", "Structural steel", "Custom fabrication"]'
),
-- Solid State Lasers
(
  'Coherent',
  'HighLight FL6000',
  'Solid',
  6.0,
  3000,
  1500,
  '{"steel": 22, "titanium": 15, "nickel": 12}',
  '{"steel_10mm": 3.2, "titanium_5mm": 2.5}',
  0.02,
  0.01,
  1.5,
  1030,
  'Custom CNC',
  'Water',
  52.0,
  '{"length": 7300, "width": 2800, "height": 2200}',
  5600,
  '140000-180000',
  'Solid-state laser for demanding aerospace applications',
  '["Aerospace", "Defense", "Specialty alloys"]'
),
-- Hybrid Systems
(
  'Mitsubishi',
  'ML3015eX-F40',
  'Fiber',
  4.0,
  3000,
  1500,
  '{"steel": 19, "aluminum": 12, "copper": 8}',
  '{"steel_10mm": 2.9, "aluminum_5mm": 5.0}',
  0.025,
  0.015,
  1.75,
  1070,
  'Mitsubishi CNC',
  'Water',
  43.0,
  '{"length": 7400, "width": 2850, "height": 2250}',
  5400,
  '130000-165000',
  'Advanced fiber laser with intelligent cutting technology',
  '["Automotive", "Electronics", "Precision manufacturing"]'
),
(
  'LVD',
  'Electra FL-3015',
  'Fiber',
  3.0,
  3000,
  1500,
  '{"steel": 16, "aluminum": 10, "stainless": 13}',
  '{"steel_10mm": 2.3, "aluminum_5mm": 4.2}',
  0.035,
  0.022,
  1.85,
  1070,
  'LVD Touch-L',
  'Water',
  36.0,
  '{"length": 7000, "width": 2700, "height": 2100}',
  4800,
  '80000-105000',
  'Belgian-engineered fiber laser with user-friendly interface',
  '["Metal fabrication", "HVAC", "Job shops"]'
),
(
  'Bodor',
  'P3015',
  'Fiber',
  3.0,
  3000,
  1500,
  '{"steel": 15, "aluminum": 10, "stainless": 12}',
  '{"steel_10mm": 2.1, "aluminum_5mm": 3.9}',
  0.04,
  0.025,
  1.9,
  1070,
  'Cypcut',
  'Water',
  33.0,
  '{"length": 6950, "width": 2680, "height": 2080}',
  4300,
  '42000-55000',
  'Economical fiber laser with solid performance',
  '["Small business", "Startup", "Educational"]'
),
(
  'Raycus',
  'FL6000',
  'Fiber',
  6.0,
  3000,
  1500,
  '{"steel": 20, "aluminum": 12, "stainless": 15}',
  '{"steel_10mm": 2.9, "aluminum_5mm": 5.3}',
  0.03,
  0.02,
  1.8,
  1070,
  'Fscut',
  'Water',
  46.0,
  '{"length": 6850, "width": 2620, "height": 2120}',
  4600,
  '55000-72000',
  'Chinese fiber laser with competitive pricing',
  '["General fabrication", "Export manufacturing", "High-volume"]'
);



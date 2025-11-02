/**
 * Type definitions for laser equipment and related data structures
 */

export type LaserType = 'CO2' | 'Fiber' | 'Solid' | 'Hybrid';
export type CoolingType = 'Water' | 'Air' | 'Hybrid' | 'Other';

// Legacy interfaces - kept for backward compatibility during migration
export interface CuttingThickness {
  steel?: number;
  aluminum?: number;
  stainless?: number;
  copper?: number;
  brass?: number;
  acrylic?: number;
  wood?: number;
  mdf?: number;
  [key: string]: number | undefined;
}

export interface CuttingSpeed {
  steel_10mm?: number;
  steel_5mm?: number;
  aluminum_5mm?: number;
  aluminum_10mm?: number;
  stainless_10mm?: number;
  [key: string]: number | undefined;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
}

// Application definition
export interface Application {
  id: number;
  name: string;
  category: string | null;
  description: string | null;
  created_at: string;
}

export interface LaserEquipment {
  id: number;
  brand: string;
  model: string;
  laser_type: LaserType;
  power_kw: number;
  work_area_length: number | null;
  work_area_width: number | null;
  
  // Cutting thickness - individual fields (NEW flattened structure)
  max_thickness_steel: number | null;
  max_thickness_aluminum: number | null;
  max_thickness_stainless: number | null;
  max_thickness_copper: number | null;
  max_thickness_brass: number | null;
  max_thickness_acrylic: number | null;
  max_thickness_wood: number | null;
  max_thickness_mdf: number | null;
  max_thickness_fabric: number | null;
  max_thickness_leather: number | null;
  max_thickness_titanium: number | null;
  max_thickness_nickel: number | null;
  
  // Cutting speed - individual fields (NEW flattened structure)
  cutting_speed_steel_5mm: number | null;
  cutting_speed_steel_10mm: number | null;
  cutting_speed_steel_20mm: number | null;
  cutting_speed_aluminum_5mm: number | null;
  cutting_speed_aluminum_10mm: number | null;
  cutting_speed_stainless_5mm: number | null;
  cutting_speed_stainless_10mm: number | null;
  cutting_speed_copper_5mm: number | null;
  cutting_speed_brass_5mm: number | null;
  cutting_speed_acrylic_5mm: number | null;
  cutting_speed_acrylic_10mm: number | null;
  cutting_speed_wood_5mm: number | null;
  cutting_speed_wood_10mm: number | null;
  cutting_speed_mdf_5mm: number | null;
  cutting_speed_titanium_5mm: number | null;
  
  // Dimensions - individual fields (NEW flattened structure)
  dimension_length: number | null;
  dimension_width: number | null;
  dimension_height: number | null;
  
  // Legacy JSON fields - kept during migration period
  max_cutting_thickness: CuttingThickness | string | null; // Can be JSON string or object
  cutting_speed: CuttingSpeed | string | null; // Can be JSON string or object
  dimensions: Dimensions | string | null; // Can be JSON string or object
  applications: string[] | string | null; // Can be JSON string or array
  
  // Other fields
  positioning_accuracy: number | null;
  repeat_accuracy: number | null;
  beam_quality: number | null;
  wavelength: number | null;
  control_system: string | null;
  cooling_type: CoolingType | null;
  power_consumption: number | null;
  weight: number | null;
  price_range: string | null;
  manufacturer_url: string | null;
  spec_sheet_url: string | null;
  image_url: string | null;
  description: string | null;
  origin_country?: string | null;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  
  // Related data (joined)
  applicationsList?: Application[];
}

export interface Comparison {
  id: number;
  equipment_ids: number[];
  user_ip: string | null;
  user_agent: string | null;
  created_at: string;
  session_id: string | null;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  form_type: 'general' | 'quote_request' | 'technical_inquiry';
  source_page: string | null;
  created_at: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
}

export interface CalculatorUsage {
  id: number;
  calculator_type: 'power' | 'size' | 'cost';
  input_data: Record<string, unknown>;
  result_data: Record<string, unknown>;
  user_ip: string | null;
  created_at: string;
}

export interface EquipmentFilters {
  laser_type?: LaserType[];
  min_power?: number;
  max_power?: number;
  brand?: string[];
  min_work_area?: number;
  max_work_area?: number;
  price_range?: string;
  control_system?: string[];
}

export interface ComparisonResult {
  equipments: LaserEquipment[];
  differences: {
    field: string;
    values: (string | number | null)[];
    hasDifference: boolean;
  }[];
}


























/**
 * Type definitions for laser equipment and related data structures
 */

export type LaserType = 'CO2' | 'Fiber' | 'Solid' | 'Hybrid';
export type CoolingType = 'Water' | 'Air' | 'Hybrid' | 'Other';

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

export interface LaserEquipment {
  id: number;
  brand: string;
  model: string;
  laser_type: LaserType;
  power_kw: number;
  work_area_length: number | null;
  work_area_width: number | null;
  max_cutting_thickness: CuttingThickness | null;
  cutting_speed: CuttingSpeed | null;
  positioning_accuracy: number | null;
  repeat_accuracy: number | null;
  beam_quality: number | null;
  wavelength: number | null;
  control_system: string | null;
  cooling_type: CoolingType | null;
  power_consumption: number | null;
  dimensions: Dimensions | null;
  weight: number | null;
  price_range: string | null;
  manufacturer_url: string | null;
  spec_sheet_url: string | null;
  image_url: string | null;
  description: string | null;
  applications: string[] | null;
  created_at: string;
  updated_at: string;
  is_active: boolean;
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












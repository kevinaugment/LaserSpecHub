/**
 * Equipment Data Parser Utilities
 * Handles conversion between flattened fields and legacy JSON fields
 */

import type { LaserEquipment, CuttingThickness, CuttingSpeed, Dimensions } from '@/types/equipment';

/**
 * Parse equipment data from database row
 * Supports both new flattened fields and legacy JSON fields
 */
export function parseEquipmentFromDB(dbRow: any): LaserEquipment {
  // Parse legacy JSON fields if they exist
  const parsedMaxThickness = parseJSON(dbRow.max_cutting_thickness);
  const parsedSpeed = parseJSON(dbRow.cutting_speed);
  const parsedDimensions = parseJSON(dbRow.dimensions);
  const parsedApplications = parseJSON(dbRow.applications);

  // Build CuttingThickness object from flattened fields OR legacy JSON
  const cuttingThickness: CuttingThickness | null = 
    dbRow.max_thickness_steel || dbRow.max_thickness_aluminum || dbRow.max_thickness_stainless
    ? {
        steel: dbRow.max_thickness_steel ?? parsedMaxThickness?.steel ?? undefined,
        aluminum: dbRow.max_thickness_aluminum ?? parsedMaxThickness?.aluminum ?? undefined,
        stainless: dbRow.max_thickness_stainless ?? parsedMaxThickness?.stainless ?? undefined,
        copper: dbRow.max_thickness_copper ?? parsedMaxThickness?.copper ?? undefined,
        brass: dbRow.max_thickness_brass ?? parsedMaxThickness?.brass ?? undefined,
        acrylic: dbRow.max_thickness_acrylic ?? parsedMaxThickness?.acrylic ?? undefined,
        wood: dbRow.max_thickness_wood ?? parsedMaxThickness?.wood ?? undefined,
        mdf: dbRow.max_thickness_mdf ?? parsedMaxThickness?.mdf ?? undefined,
      }
    : parsedMaxThickness;

  // Build CuttingSpeed object from flattened fields OR legacy JSON
  const cuttingSpeed: CuttingSpeed | null = 
    dbRow.cutting_speed_steel_10mm || dbRow.cutting_speed_aluminum_5mm
    ? {
        steel_5mm: dbRow.cutting_speed_steel_5mm ?? parsedSpeed?.steel_5mm ?? undefined,
        steel_10mm: dbRow.cutting_speed_steel_10mm ?? parsedSpeed?.steel_10mm ?? undefined,
        aluminum_5mm: dbRow.cutting_speed_aluminum_5mm ?? parsedSpeed?.aluminum_5mm ?? undefined,
        aluminum_10mm: dbRow.cutting_speed_aluminum_10mm ?? parsedSpeed?.aluminum_10mm ?? undefined,
        stainless_10mm: dbRow.cutting_speed_stainless_10mm ?? parsedSpeed?.stainless_10mm ?? undefined,
      }
    : parsedSpeed;

  // Build Dimensions object from flattened fields OR legacy JSON
  const dimensions: Dimensions | null = 
    dbRow.dimension_length || dbRow.dimension_width || dbRow.dimension_height
    ? {
        length: dbRow.dimension_length ?? parsedDimensions?.length ?? 0,
        width: dbRow.dimension_width ?? parsedDimensions?.width ?? 0,
        height: dbRow.dimension_height ?? parsedDimensions?.height ?? 0,
      }
    : parsedDimensions;

  // Applications array
  const applications = Array.isArray(parsedApplications) ? parsedApplications : [];

  return {
    ...dbRow,
    // New flattened fields (keep as is)
    max_thickness_steel: dbRow.max_thickness_steel ?? null,
    max_thickness_aluminum: dbRow.max_thickness_aluminum ?? null,
    max_thickness_stainless: dbRow.max_thickness_stainless ?? null,
    max_thickness_copper: dbRow.max_thickness_copper ?? null,
    max_thickness_brass: dbRow.max_thickness_brass ?? null,
    max_thickness_acrylic: dbRow.max_thickness_acrylic ?? null,
    max_thickness_wood: dbRow.max_thickness_wood ?? null,
    max_thickness_mdf: dbRow.max_thickness_mdf ?? null,
    max_thickness_fabric: dbRow.max_thickness_fabric ?? null,
    max_thickness_leather: dbRow.max_thickness_leather ?? null,
    max_thickness_titanium: dbRow.max_thickness_titanium ?? null,
    max_thickness_nickel: dbRow.max_thickness_nickel ?? null,

    cutting_speed_steel_5mm: dbRow.cutting_speed_steel_5mm ?? null,
    cutting_speed_steel_10mm: dbRow.cutting_speed_steel_10mm ?? null,
    cutting_speed_steel_20mm: dbRow.cutting_speed_steel_20mm ?? null,
    cutting_speed_aluminum_5mm: dbRow.cutting_speed_aluminum_5mm ?? null,
    cutting_speed_aluminum_10mm: dbRow.cutting_speed_aluminum_10mm ?? null,
    cutting_speed_stainless_5mm: dbRow.cutting_speed_stainless_5mm ?? null,
    cutting_speed_stainless_10mm: dbRow.cutting_speed_stainless_10mm ?? null,
    cutting_speed_acrylic_5mm: dbRow.cutting_speed_acrylic_5mm ?? null,
    cutting_speed_acrylic_10mm: dbRow.cutting_speed_acrylic_10mm ?? null,
    cutting_speed_wood_5mm: dbRow.cutting_speed_wood_5mm ?? null,
    cutting_speed_wood_10mm: dbRow.cutting_speed_wood_10mm ?? null,
    cutting_speed_titanium_5mm: dbRow.cutting_speed_titanium_5mm ?? null,

    dimension_length: dbRow.dimension_length ?? null,
    dimension_width: dbRow.dimension_width ?? null,
    dimension_height: dbRow.dimension_height ?? null,

    // Legacy fields (parsed from JSON or built from flattened fields)
    max_cutting_thickness: cuttingThickness,
    cutting_speed: cuttingSpeed,
    dimensions: dimensions,
    applications: applications,

    is_active: Boolean(dbRow.is_active),
  } as LaserEquipment;
}

/**
 * Prepare equipment data for database insert/update
 * Converts objects to both flattened fields AND JSON (during migration period)
 */
export function prepareEquipmentForDB(data: any): {
  fields: string[];
  values: any[];
} {
  const fields: string[] = [];
  const values: any[] = [];

  // Helper to add a field
  const addField = (name: string, value: any) => {
    fields.push(name);
    values.push(value);
  };

  // Basic fields
  if (data.brand !== undefined) addField('brand', data.brand);
  if (data.model !== undefined) addField('model', data.model);
  if (data.laser_type !== undefined) addField('laser_type', data.laser_type);
  if (data.power_kw !== undefined) addField('power_kw', parseNumber(data.power_kw));
  if (data.work_area_length !== undefined) addField('work_area_length', parseNumber(data.work_area_length));
  if (data.work_area_width !== undefined) addField('work_area_width', parseNumber(data.work_area_width));

  // Cutting thickness - handle both flattened and object formats
  if (data.max_cutting_thickness || data.max_thickness_steel !== undefined) {
    const thicknessObj = typeof data.max_cutting_thickness === 'object' 
      ? data.max_cutting_thickness 
      : {};

    // Add flattened fields
    addField('max_thickness_steel', data.max_thickness_steel ?? thicknessObj.steel ?? null);
    addField('max_thickness_aluminum', data.max_thickness_aluminum ?? thicknessObj.aluminum ?? null);
    addField('max_thickness_stainless', data.max_thickness_stainless ?? thicknessObj.stainless ?? null);
    addField('max_thickness_copper', data.max_thickness_copper ?? thicknessObj.copper ?? null);
    addField('max_thickness_brass', data.max_thickness_brass ?? thicknessObj.brass ?? null);
    addField('max_thickness_acrylic', data.max_thickness_acrylic ?? thicknessObj.acrylic ?? null);
    addField('max_thickness_wood', data.max_thickness_wood ?? thicknessObj.wood ?? null);
    addField('max_thickness_mdf', data.max_thickness_mdf ?? thicknessObj.mdf ?? null);
    
    // Also store as legacy JSON field (for backward compatibility)
    if (data.max_cutting_thickness) {
      addField('max_cutting_thickness', stringifyJSON(data.max_cutting_thickness));
    }
  }

  // Cutting speed - handle both flattened and object formats
  if (data.cutting_speed || data.cutting_speed_steel_10mm !== undefined) {
    const speedObj = typeof data.cutting_speed === 'object' 
      ? data.cutting_speed 
      : {};

    // Add flattened fields
    addField('cutting_speed_steel_5mm', data.cutting_speed_steel_5mm ?? speedObj.steel_5mm ?? null);
    addField('cutting_speed_steel_10mm', data.cutting_speed_steel_10mm ?? speedObj.steel_10mm ?? null);
    addField('cutting_speed_steel_20mm', data.cutting_speed_steel_20mm ?? speedObj.steel_20mm ?? null);
    addField('cutting_speed_aluminum_5mm', data.cutting_speed_aluminum_5mm ?? speedObj.aluminum_5mm ?? null);
    addField('cutting_speed_aluminum_10mm', data.cutting_speed_aluminum_10mm ?? speedObj.aluminum_10mm ?? null);
    addField('cutting_speed_stainless_5mm', data.cutting_speed_stainless_5mm ?? speedObj.stainless_5mm ?? null);
    addField('cutting_speed_stainless_10mm', data.cutting_speed_stainless_10mm ?? speedObj.stainless_10mm ?? null);
    
    // Also store as legacy JSON field
    if (data.cutting_speed) {
      addField('cutting_speed', stringifyJSON(data.cutting_speed));
    }
  }

  // Dimensions - handle both flattened and object formats
  if (data.dimensions || data.dimension_length !== undefined) {
    const dimObj = typeof data.dimensions === 'object' 
      ? data.dimensions 
      : {};

    // Add flattened fields
    addField('dimension_length', data.dimension_length ?? dimObj.length ?? null);
    addField('dimension_width', data.dimension_width ?? dimObj.width ?? null);
    addField('dimension_height', data.dimension_height ?? dimObj.height ?? null);
    
    // Also store as legacy JSON field
    if (data.dimensions) {
      addField('dimensions', stringifyJSON(data.dimensions));
    }
  }

  // Applications - store as legacy JSON field (will migrate to relational table later)
  if (data.applications !== undefined) {
    addField('applications', stringifyJSON(data.applications));
  }

  // Other fields
  if (data.positioning_accuracy !== undefined) addField('positioning_accuracy', parseNumber(data.positioning_accuracy));
  if (data.repeat_accuracy !== undefined) addField('repeat_accuracy', parseNumber(data.repeat_accuracy));
  if (data.beam_quality !== undefined) addField('beam_quality', parseNumber(data.beam_quality));
  if (data.wavelength !== undefined) addField('wavelength', parseNumber(data.wavelength));
  if (data.control_system !== undefined) addField('control_system', data.control_system);
  if (data.cooling_type !== undefined) addField('cooling_type', data.cooling_type);
  if (data.power_consumption !== undefined) addField('power_consumption', parseNumber(data.power_consumption));
  if (data.weight !== undefined) addField('weight', parseNumber(data.weight));
  if (data.price_range !== undefined) addField('price_range', data.price_range);
  if (data.manufacturer_url !== undefined) addField('manufacturer_url', data.manufacturer_url);
  if (data.spec_sheet_url !== undefined) addField('spec_sheet_url', data.spec_sheet_url);
  if (data.image_url !== undefined) addField('image_url', data.image_url);
  if (data.description !== undefined) addField('description', data.description);
  if (data.origin_country !== undefined) addField('origin_country', data.origin_country);
  if (data.is_active !== undefined) addField('is_active', Number(Boolean(data.is_active)));

  return { fields, values };
}

/**
 * Safely parse JSON string
 */
function parseJSON(jsonString: any): any {
  if (!jsonString || jsonString === 'null') return null;
  if (typeof jsonString !== 'string') return jsonString;
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

/**
 * Stringify value to JSON
 */
function stringifyJSON(value: any): string | null {
  if (value === undefined || value === null) return null;
  try {
    if (typeof value === 'string') {
      // If already a string, try to parse and re-stringify to validate
      JSON.parse(value);
      return value;
    }
    return JSON.stringify(value);
  } catch {
    return null;
  }
}

/**
 * Parse number from value
 */
function parseNumber(value: any): number | null {
  if (value === undefined || value === null || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}


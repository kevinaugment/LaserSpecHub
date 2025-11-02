/**
 * Cutting Speed Comparison and Adjustment Factors
 * Data Sources:
 * - Industry standard test data
 * - Manufacturer technical documentation
 * - ISO 9013:2017 (Thermal cutting classification)
 * Last Update: 2025-11-02
 */

export interface QualityAdjustmentFactor {
  qualityLevel: string;
  speedMultiplier: number;
  description: string;
}

export interface GasTypeComparison {
  material: string;
  oxygenSpeed: number; // relative speed (1.0 = baseline)
  nitrogenSpeed: number;
  airSpeed?: number;
  notes: string;
}

export interface MaterialConditionFactor {
  condition: string;
  speedMultiplier: number;
  description: string;
}

export interface AccelerationFactor {
  geometryType: string;
  effectiveSpeedMultiplier: number;
  description: string;
}

/**
 * Quality vs Speed Adjustment Factors
 * Based on ISO 9013 quality grades and industry practice
 */
export const QUALITY_ADJUSTMENT_FACTORS: QualityAdjustmentFactor[] = [
  {
    qualityLevel: "Rough Cut (ISO Range 4)",
    speedMultiplier: 1.20,
    description: "Increased dross, rough edges, acceptable for structural parts that will be welded or further processed"
  },
  {
    qualityLevel: "Standard Production (ISO Range 3)",
    speedMultiplier: 1.0,
    description: "Baseline speeds shown in reference tables - good edge quality for most fabrication applications"
  },
  {
    qualityLevel: "High Quality (ISO Range 2)",
    speedMultiplier: 0.75,
    description: "Smooth edges, minimal dross, good perpendicularity - suitable for visible parts and tight tolerances"
  },
  {
    qualityLevel: "Precision (ISO Range 1)",
    speedMultiplier: 0.55,
    description: "Mirror-finish edges, excellent dimensional accuracy, zero dross - for medical, aerospace, and high-end applications"
  }
];

/**
 * Gas Type Speed Comparisons for Steel
 * Oxygen provides exothermic reaction boost for carbon steel
 */
export const GAS_TYPE_COMPARISONS: GasTypeComparison[] = [
  {
    material: "Mild Steel (Carbon Steel)",
    oxygenSpeed: 1.0,
    nitrogenSpeed: 0.65,
    airSpeed: 0.50,
    notes: "Oxygen cutting is fastest due to exothermic reaction. Nitrogen for oxidation-free edges. Air only for thin materials."
  },
  {
    material: "Stainless Steel",
    oxygenSpeed: 0.0, // Not recommended
    nitrogenSpeed: 1.0,
    notes: "Nitrogen only - oxygen causes excessive oxidation and poor edge quality"
  },
  {
    material: "Aluminum",
    oxygenSpeed: 0.0, // Not recommended
    nitrogenSpeed: 1.0,
    notes: "Nitrogen only - oxygen causes oxidation and combustion risk"
  }
];

/**
 * Material Surface Condition Impact on Cutting Speed
 */
export const MATERIAL_CONDITION_FACTORS: MaterialConditionFactor[] = [
  {
    condition: "Clean, Mill-Finished",
    speedMultiplier: 1.0,
    description: "Optimal condition - baseline speeds apply"
  },
  {
    condition: "Light Surface Rust",
    speedMultiplier: 0.90,
    description: "Minor speed reduction, may affect edge quality"
  },
  {
    condition: "Heavy Rust or Mill Scale",
    speedMultiplier: 0.80,
    description: "Significant speed reduction required, inconsistent cutting"
  },
  {
    condition: "Painted (Single Coat)",
    speedMultiplier: 0.85,
    description: "Reduce speed to prevent paint burning beyond cut edge"
  },
  {
    condition: "Galvanized",
    speedMultiplier: 0.75,
    description: "Zinc coating requires lower speeds, produces toxic fumes - proper ventilation critical"
  },
  {
    condition: "Oil or Grease Coated",
    speedMultiplier: 0.85,
    description: "Cleaning recommended, otherwise reduce speed and expect smoke"
  }
];

/**
 * Geometry Complexity Impact on Effective Cutting Speed
 * Accounts for acceleration/deceleration in corners and curves
 */
export const ACCELERATION_FACTORS: AccelerationFactor[] = [
  {
    geometryType: "Straight Lines (>100mm)",
    effectiveSpeedMultiplier: 1.0,
    description: "Machine reaches full programmed speed"
  },
  {
    geometryType: "Large Radius Curves (R>50mm)",
    effectiveSpeedMultiplier: 0.95,
    description: "Minimal speed reduction in gentle curves"
  },
  {
    geometryType: "Medium Radius Curves (R=20-50mm)",
    effectiveSpeedMultiplier: 0.85,
    description: "Noticeable deceleration in tighter curves"
  },
  {
    geometryType: "Tight Radius Curves (R=5-20mm)",
    effectiveSpeedMultiplier: 0.70,
    description: "Significant deceleration required"
  },
  {
    geometryType: "Sharp Corners (90° angles)",
    effectiveSpeedMultiplier: 0.60,
    description: "Machine must slow significantly for direction changes"
  },
  {
    geometryType: "Complex Contours (Many small features)",
    effectiveSpeedMultiplier: 0.50,
    description: "Constant acceleration/deceleration, rarely reaches programmed speed"
  }
];

/**
 * Power Scaling Efficiency
 * Diminishing returns when increasing laser power
 */
export interface PowerScalingData {
  thicknessRange: string;
  powerDoubleSpeedIncrease: string;
  notes: string;
}

export const POWER_SCALING_EFFICIENCY: PowerScalingData[] = [
  {
    thicknessRange: "Thin (1-3mm)",
    powerDoubleSpeedIncrease: "60-80%",
    notes: "Best power scaling efficiency - heat dissipation limited"
  },
  {
    thicknessRange: "Medium (6-10mm)",
    powerDoubleSpeedIncrease: "40-60%",
    notes: "Moderate efficiency - balance of heat and melt dynamics"
  },
  {
    thicknessRange: "Thick (15mm+)",
    powerDoubleSpeedIncrease: "20-30%",
    notes: "Poor efficiency - melt ejection becomes limiting factor"
  }
];

/**
 * Temperature and Environmental Factors
 */
export interface EnvironmentalFactor {
  factor: string;
  impact: string;
  recommendation: string;
}

export const ENVIRONMENTAL_FACTORS: EnvironmentalFactor[] = [
  {
    factor: "Ambient Temperature (Cold <10°C)",
    impact: "Material requires more energy to reach cutting temperature",
    recommendation: "Reduce speed by 5-10% or allow material to warm"
  },
  {
    factor: "Ambient Temperature (Hot >35°C)",
    impact: "Minimal impact on cutting, but affects laser cooling efficiency",
    recommendation: "Monitor laser temperature, ensure adequate cooling"
  },
  {
    factor: "Humidity (High >70%)",
    impact: "Can affect assist gas quality and optics condensation",
    recommendation: "Ensure proper gas drying, monitor optics for condensation"
  },
  {
    factor: "Altitude (High >1500m)",
    impact: "Lower air density affects assist gas dynamics",
    recommendation: "May need to increase gas pressure by 10-15%"
  }
];

/**
 * Equipment Condition Impact
 */
export interface EquipmentConditionFactor {
  component: string;
  condition: string;
  speedImpact: string;
  qualityImpact: string;
}

export const EQUIPMENT_CONDITION_FACTORS: EquipmentConditionFactor[] = [
  {
    component: "Nozzle",
    condition: "New/Clean",
    speedImpact: "Baseline (100%)",
    qualityImpact: "Optimal"
  },
  {
    component: "Nozzle",
    condition: "Worn (>100 pierces)",
    speedImpact: "Reduce 5-10%",
    qualityImpact: "Increased dross"
  },
  {
    component: "Nozzle",
    condition: "Damaged/Dirty",
    speedImpact: "Reduce 15-25%",
    qualityImpact: "Poor edge quality, incomplete cuts"
  },
  {
    component: "Protective Window",
    condition: "Clean",
    speedImpact: "Baseline (100%)",
    qualityImpact: "Optimal"
  },
  {
    component: "Protective Window",
    condition: "Light Contamination",
    speedImpact: "Reduce 5-8%",
    qualityImpact: "Slight degradation"
  },
  {
    component: "Protective Window",
    condition: "Heavy Contamination",
    speedImpact: "Reduce 15-30%",
    qualityImpact: "Significant degradation, risk of damage"
  },
  {
    component: "Focus Lens",
    condition: "Clean",
    speedImpact: "Baseline (100%)",
    qualityImpact: "Optimal"
  },
  {
    component: "Focus Lens",
    condition: "Contaminated",
    speedImpact: "Reduce 10-20%",
    qualityImpact: "Poor focus, wider kerf, incomplete cuts"
  },
  {
    component: "Beam Path Mirrors",
    condition: "Clean & Aligned",
    speedImpact: "Baseline (100%)",
    qualityImpact: "Optimal"
  },
  {
    component: "Beam Path Mirrors",
    condition: "Contaminated/Misaligned",
    speedImpact: "Reduce 10-25%",
    qualityImpact: "Power loss, poor beam quality"
  }
];

/**
 * Helper function to calculate adjusted speed
 */
export function calculateAdjustedSpeed(
  baseSpeed: number,
  qualityLevel?: string,
  materialCondition?: string,
  geometryType?: string
): number {
  let adjustedSpeed = baseSpeed;

  // Apply quality adjustment
  if (qualityLevel) {
    const qualityFactor = QUALITY_ADJUSTMENT_FACTORS.find(
      f => f.qualityLevel === qualityLevel
    );
    if (qualityFactor) {
      adjustedSpeed *= qualityFactor.speedMultiplier;
    }
  }

  // Apply material condition adjustment
  if (materialCondition) {
    const conditionFactor = MATERIAL_CONDITION_FACTORS.find(
      f => f.condition === materialCondition
    );
    if (conditionFactor) {
      adjustedSpeed *= conditionFactor.speedMultiplier;
    }
  }

  // Apply geometry adjustment
  if (geometryType) {
    const geometryFactor = ACCELERATION_FACTORS.find(
      f => f.geometryType === geometryType
    );
    if (geometryFactor) {
      adjustedSpeed *= geometryFactor.effectiveSpeedMultiplier;
    }
  }

  return Math.round(adjustedSpeed * 10) / 10; // Round to 1 decimal place
}

/**
 * Helper function to get gas type multiplier
 */
export function getGasTypeMultiplier(
  material: string,
  gasType: 'oxygen' | 'nitrogen' | 'air'
): number {
  const comparison = GAS_TYPE_COMPARISONS.find(
    c => c.material === material
  );
  
  if (!comparison) return 1.0;

  switch (gasType) {
    case 'oxygen':
      return comparison.oxygenSpeed;
    case 'nitrogen':
      return comparison.nitrogenSpeed;
    case 'air':
      return comparison.airSpeed || 0;
    default:
      return 1.0;
  }
}


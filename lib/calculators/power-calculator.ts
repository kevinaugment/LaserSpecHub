/**
 * Laser Power Calculator Logic
 * Calculates required laser power based on material properties and cutting requirements
 */

export interface MaterialType {
  id: string;
  name: string;
  category: 'metal' | 'non-metal';
  density: number; // g/cm³
  thermalConductivity: number; // W/(m·K)
  meltingPoint: number; // °C
  vaporization: number; // J/g
}

export const MATERIALS: Record<string, MaterialType> = {
  'mild-steel': {
    id: 'mild-steel',
    name: 'Mild Steel',
    category: 'metal',
    density: 7.85,
    thermalConductivity: 50,
    meltingPoint: 1370,
    vaporization: 6340,
  },
  'stainless-steel': {
    id: 'stainless-steel',
    name: 'Stainless Steel (304)',
    category: 'metal',
    density: 8.0,
    thermalConductivity: 16.2,
    meltingPoint: 1400,
    vaporization: 6260,
  },
  aluminum: {
    id: 'aluminum',
    name: 'Aluminum',
    category: 'metal',
    density: 2.7,
    thermalConductivity: 205,
    meltingPoint: 660,
    vaporization: 10900,
  },
  copper: {
    id: 'copper',
    name: 'Copper',
    category: 'metal',
    density: 8.96,
    thermalConductivity: 385,
    meltingPoint: 1085,
    vaporization: 4730,
  },
  brass: {
    id: 'brass',
    name: 'Brass',
    category: 'metal',
    density: 8.5,
    thermalConductivity: 120,
    meltingPoint: 930,
    vaporization: 4600,
  },
  titanium: {
    id: 'titanium',
    name: 'Titanium',
    category: 'metal',
    density: 4.5,
    thermalConductivity: 21.9,
    meltingPoint: 1668,
    vaporization: 8900,
  },
  acrylic: {
    id: 'acrylic',
    name: 'Acrylic (PMMA)',
    category: 'non-metal',
    density: 1.18,
    thermalConductivity: 0.19,
    meltingPoint: 160,
    vaporization: 1800,
  },
  wood: {
    id: 'wood',
    name: 'Wood',
    category: 'non-metal',
    density: 0.6,
    thermalConductivity: 0.12,
    meltingPoint: 300,
    vaporization: 2500,
  },
  mdf: {
    id: 'mdf',
    name: 'MDF',
    category: 'non-metal',
    density: 0.75,
    thermalConductivity: 0.15,
    meltingPoint: 280,
    vaporization: 2400,
  },
  plywood: {
    id: 'plywood',
    name: 'Plywood',
    category: 'non-metal',
    density: 0.55,
    thermalConductivity: 0.13,
    meltingPoint: 290,
    vaporization: 2450,
  },
};

export type LaserTypeRecommendation = 'fiber' | 'co2' | 'solid';
export type CuttingQuality = 'rough' | 'standard' | 'precision' | 'mirror';

export interface PowerCalculationInput {
  materialId: string;
  thickness: number; // mm
  cuttingSpeed: number; // m/min
  quality: CuttingQuality;
  unit: 'metric' | 'imperial';
}

export interface PowerCalculationResult {
  recommendedPower: number; // kW
  minPower: number; // kW
  maxPower: number; // kW
  laserType: LaserTypeRecommendation[];
  efficiency: number; // %
  recommendations: string[];
  warnings: string[];
}

const QUALITY_FACTORS: Record<CuttingQuality, number> = {
  rough: 0.7,
  standard: 1.0,
  precision: 1.3,
  mirror: 1.8,
};

/**
 * Calculate required laser power for cutting
 */
export function calculatePower(
  input: PowerCalculationInput
): PowerCalculationResult {
  const material = MATERIALS[input.materialId];
  if (!material) {
    throw new Error('Invalid material ID');
  }

  // Convert imperial to metric if needed
  const thickness = input.unit === 'imperial' ? input.thickness * 25.4 : input.thickness;
  const speed = input.unit === 'imperial' ? input.cuttingSpeed * 0.3048 : input.cuttingSpeed;

  // Base power calculation (simplified model)
  // P = (density × thickness × speed × vaporization) / (60 × efficiency × 1000)
  const baseEfficiency = material.category === 'metal' ? 0.3 : 0.15;
  const qualityFactor = QUALITY_FACTORS[input.quality];
  const thermalFactor = 1 + (material.thermalConductivity / 100) * 0.1;

  const basePower =
    (material.density *
      thickness *
      speed *
      material.vaporization *
      thermalFactor) /
    (60 * baseEfficiency * 1000);

  const recommendedPower = basePower * qualityFactor;
  const minPower = recommendedPower * 0.7;
  const maxPower = recommendedPower * 1.3;

  // Determine laser type recommendations
  const laserTypes: LaserTypeRecommendation[] = [];
  const recommendations: string[] = [];
  const warnings: string[] = [];

  if (material.category === 'metal') {
    laserTypes.push('fiber');
    recommendations.push(
      'Fiber laser is highly recommended for metal cutting applications'
    );
    recommendations.push(
      `For ${material.name} at ${thickness.toFixed(1)}mm, fiber laser provides best efficiency`
    );
    
    if (recommendedPower > 6) {
      laserTypes.push('solid');
      recommendations.push(
        'High-power solid-state laser can also be considered for this application'
      );
    }
  } else {
    laserTypes.push('co2');
    recommendations.push(
      'CO2 laser is ideal for non-metal materials like wood and acrylic'
    );
    recommendations.push(
      `${material.name} cuts efficiently with CO2 laser technology`
    );
  }

  // Add warnings
  if (thickness > 25 && material.category === 'metal') {
    warnings.push(
      'Cutting thickness exceeds 25mm - consider multiple passes or higher power'
    );
  }

  if (recommendedPower > 20) {
    warnings.push(
      'Required power exceeds 20kW - verify equipment availability and cost'
    );
  }

  if (speed > 20) {
    warnings.push(
      'High cutting speed may compromise quality - adjust speed or increase power'
    );
  }

  if (material.thermalConductivity > 200) {
    warnings.push(
      `${material.name} has high thermal conductivity - power requirements are increased`
    );
  }

  return {
    recommendedPower: Math.round(recommendedPower * 100) / 100,
    minPower: Math.round(minPower * 100) / 100,
    maxPower: Math.round(maxPower * 100) / 100,
    laserType: laserTypes,
    efficiency: Math.round(baseEfficiency * 100),
    recommendations,
    warnings,
  };
}

/**
 * Get equipment recommendations based on power calculation
 */
export interface EquipmentRecommendation {
  id: number;
  brand: string;
  model: string;
  power: number;
  laserType: string;
  matchScore: number;
}

export function getEquipmentRecommendations(
  result: PowerCalculationResult,
  materialCategory: 'metal' | 'non-metal'
): EquipmentRecommendation[] {
  // This would query the database in production
  // For now, return mock recommendations
  const recommendations: EquipmentRecommendation[] = [];

  if (materialCategory === 'metal') {
    recommendations.push(
      {
        id: 1,
        brand: 'OPMT Laser',
        model: 'FL-6000',
        power: 6.0,
        laserType: 'Fiber',
        matchScore: 95,
      },
      {
        id: 2,
        brand: 'Generic Brand',
        model: 'FB-4000',
        power: 4.0,
        laserType: 'Fiber',
        matchScore: 85,
      }
    );
  } else {
    recommendations.push(
      {
        id: 3,
        brand: 'Generic Brand',
        model: 'CO2-3000',
        power: 3.0,
        laserType: 'CO2',
        matchScore: 90,
      }
    );
  }

  return recommendations.filter(
    (rec) =>
      rec.power >= result.minPower && rec.power <= result.maxPower * 1.2
  );
}

/**
 * Format power for display
 */
export function formatPower(power: number): string {
  if (power < 1) {
    return `${Math.round(power * 1000)}W`;
  }
  return `${power.toFixed(2)}kW`;
}

/**
 * Validate calculation input
 */
export function validateInput(input: Partial<PowerCalculationInput>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!input.materialId) {
    errors.push('Material selection is required');
  } else if (!MATERIALS[input.materialId]) {
    errors.push('Invalid material selected');
  }

  if (!input.thickness || input.thickness <= 0) {
    errors.push('Thickness must be greater than 0');
  } else if (input.thickness > 100) {
    errors.push('Thickness exceeds maximum limit (100mm)');
  }

  if (!input.cuttingSpeed || input.cuttingSpeed <= 0) {
    errors.push('Cutting speed must be greater than 0');
  } else if (input.cuttingSpeed > 50) {
    errors.push('Cutting speed exceeds realistic limits (50 m/min)');
  }

  if (!input.quality) {
    errors.push('Quality level is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}






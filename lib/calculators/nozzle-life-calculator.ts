/**
 * Laser Cutting Nozzle Life Prediction Calculator
 * Data Sources: Precitec Technical Manuals, Raytools Product Catalogs, Industry Practice
 * Last Updated: 2025-10-31
 */

export type NozzleMaterial = 'copper' | 'chrome_copper' | 'alloy';
export type NozzleType = 'single_layer' | 'double_layer' | 'high_speed';
export type CuttingMaterial = 'carbon_steel' | 'stainless_steel' | 'aluminum' | 'copper';
export type AssistGas = 'oxygen' | 'nitrogen' | 'air';

export const NOZZLE_MATERIAL_LABELS: Record<NozzleMaterial, string> = {
  copper: 'Copper',
  chrome_copper: 'Chrome-Plated Copper',
  alloy: 'Alloy',
};

export const NOZZLE_TYPE_LABELS: Record<NozzleType, string> = {
  single_layer: 'Single Layer',
  double_layer: 'Double Layer',
  high_speed: 'High Speed',
};

export const CUTTING_MATERIAL_LABELS: Record<CuttingMaterial, string> = {
  carbon_steel: 'Carbon Steel',
  stainless_steel: 'Stainless Steel',
  aluminum: 'Aluminum',
  copper: 'Copper',
};

export const ASSIST_GAS_LABELS: Record<AssistGas, string> = {
  oxygen: 'Oxygen',
  nitrogen: 'Nitrogen',
  air: 'Compressed Air',
};

/**
 * Base Life Factor (hours)
 * Source: Precitec Technical Manuals & Raytools Product Data
 */
const BASE_LIFE: Record<NozzleMaterial, number> = {
  copper: 120,          // Copper base life
  chrome_copper: 180,   // Chrome-plated copper extends 50% life
  alloy: 240,          // Alloy has longest life
};

/**
 * Nozzle Type Factor
 */
const TYPE_FACTOR: Record<NozzleType, number> = {
  single_layer: 1.0,    // Standard single layer
  double_layer: 1.3,    // Double layer structure extends 30% life
  high_speed: 0.8,      // High-speed nozzles wear faster
};

/**
 * Power Wear Factor (normalized to 6kW)
 */
function getPowerWearFactor(powerKw: number): number {
  // Higher power increases thermal load and accelerates wear
  // Baseline: 6kW = 1.0
  return Math.max(0.5, Math.min(2.5, Math.pow(powerKw / 6, 0.7)));
}

/**
 * Material Thickness Wear Factor
 */
function getThicknessWearFactor(thicknessMm: number): number {
  // Thick plate cutting takes longer, nozzle exposed to high temperature longer
  if (thicknessMm <= 3) return 0.8;
  if (thicknessMm <= 10) return 1.0;
  if (thicknessMm <= 20) return 1.3;
  return 1.6;
}

/**
 * Cutting Material Wear Factor
 */
const MATERIAL_WEAR_FACTOR: Record<CuttingMaterial, number> = {
  carbon_steel: 1.0,      // Carbon steel baseline
  stainless_steel: 1.2,   // Stainless steel produces more spatter
  aluminum: 0.9,          // Aluminum relatively mild
  copper: 1.4,            // Copper has high reflectivity, greater energy loss
};

/**
 * Assist Gas Wear Factor
 */
const GAS_WEAR_FACTOR: Record<AssistGas, number> = {
  oxygen: 1.3,      // Oxygen cutting high temperature, oxidation corrosion
  nitrogen: 0.9,    // Nitrogen provides better protection
  air: 1.0,         // Air baseline
};

/**
 * Nozzle Unit Price (USD)
 * Source: Market average prices 2025
 */
const NOZZLE_PRICE: Record<NozzleMaterial, Record<NozzleType, number>> = {
  copper: {
    single_layer: 35,
    double_layer: 55,
    high_speed: 75,
  },
  chrome_copper: {
    single_layer: 55,
    double_layer: 85,
    high_speed: 110,
  },
  alloy: {
    single_layer: 90,
    double_layer: 130,
    high_speed: 160,
  },
};

export type NozzleLifeInput = {
  nozzleMaterial: NozzleMaterial;
  nozzleType: NozzleType;
  cuttingMaterial: CuttingMaterial;
  thicknessMm: number;         // 0.5-50
  powerKw: number;              // 1-30
  dailyHours: number;           // 1-24
  assistGas: AssistGas;
};

export type NozzleLifeOutput = {
  lifespanHours: number;        // Estimated service life (hours)
  lifespanDays: number;         // Recommended replacement cycle (days)
  monthlyCostYuan: number;      // Monthly consumable cost (USD)
  nozzlePriceYuan: number;      // Single nozzle price (USD)
  tips: string[];               // Life extension recommendations
  breakdown: {                  // Calculation breakdown
    baseLife: number;
    powerFactor: number;
    thicknessFactor: number;
    materialFactor: number;
    gasFactor: number;
  };
};

export function calculateNozzleLife(input: NozzleLifeInput): NozzleLifeOutput {
  validateInput(input);

  // 1. Base life
  const baseLife = BASE_LIFE[input.nozzleMaterial] * TYPE_FACTOR[input.nozzleType];

  // 2. Wear factors
  const powerFactor = getPowerWearFactor(input.powerKw);
  const thicknessFactor = getThicknessWearFactor(input.thicknessMm);
  const materialFactor = MATERIAL_WEAR_FACTOR[input.cuttingMaterial];
  const gasFactor = GAS_WEAR_FACTOR[input.assistGas];

  // 3. Combined wear factor
  const totalWearFactor = powerFactor * thicknessFactor * materialFactor * gasFactor;

  // 4. Adjusted life
  const lifespanHours = round(baseLife / totalWearFactor, 1);

  // 5. Replacement cycle (days)
  const lifespanDays = Math.floor(lifespanHours / input.dailyHours);

  // 6. Monthly cost
  const nozzlePrice = NOZZLE_PRICE[input.nozzleMaterial][input.nozzleType];
  const monthlyHours = input.dailyHours * 30;
  const nozzlesPerMonth = monthlyHours / lifespanHours;
  const monthlyCost = round(nozzlesPerMonth * nozzlePrice, 0);

  // 7. Generate recommendations
  const tips = generateTips(input, totalWearFactor);

  return {
    lifespanHours,
    lifespanDays: Math.max(1, lifespanDays),
    monthlyCostYuan: monthlyCost,
    nozzlePriceYuan: nozzlePrice,
    tips,
    breakdown: {
      baseLife: round(baseLife, 1),
      powerFactor: round(powerFactor, 2),
      thicknessFactor: round(thicknessFactor, 2),
      materialFactor: round(materialFactor, 2),
      gasFactor: round(gasFactor, 2),
    },
  };
}

function generateTips(input: NozzleLifeInput, totalWearFactor: number): string[] {
  const tips: string[] = [];

  // Provide recommendations when wear is severe
  if (totalWearFactor > 1.5) {
    tips.push('Current operating conditions show significant wear. Consider the following measures:');
  }

  // Power recommendations
  if (input.powerKw > 10) {
    tips.push('• High power cutting: Consider reducing power or increasing speed to reduce thermal load');
  }

  // Gas recommendations
  if (input.assistGas === 'oxygen') {
    tips.push('• Oxygen cutting produces high temperatures: Regularly check nozzle oxidation and clean promptly');
    if (input.cuttingMaterial === 'stainless_steel') {
      tips.push('• Stainless steel cutting: Consider switching to nitrogen, can extend nozzle life by 30% or more');
    }
  }

  // Material upgrade recommendations
  if (input.nozzleMaterial === 'copper' && totalWearFactor > 1.3) {
    tips.push('• Consider upgrading to chrome-plated copper nozzle: 50% longer life, ~60% cost increase');
  }

  // Thick plate recommendations
  if (input.thicknessMm > 15) {
    tips.push('• Thick plate cutting takes longer: Increase inspection frequency to avoid nozzle deformation affecting cut quality');
  }

  // Copper material recommendations
  if (input.cuttingMaterial === 'copper') {
    tips.push('• Copper has high reflectivity: Consider using anti-reflective nozzle to reduce thermal load');
  }

  // General recommendations
  if (tips.length === 0 || totalWearFactor <= 1.2) {
    tips.push('• Regularly clean nozzle and maintain concentricity to extend service life');
    tips.push('• Avoid nozzle collision with workpiece: Collisions are the primary cause of nozzle damage');
    tips.push('• Keep multiple spare nozzles on hand to avoid downtime');
  }

  return tips;
}

function validateInput(i: NozzleLifeInput) {
  if (i.thicknessMm < 0.5 || i.thicknessMm > 50) {
    throw new Error('Thickness range should be 0.5-50 mm');
  }
  if (i.powerKw < 1 || i.powerKw > 30) {
    throw new Error('Power range should be 1-30 kW');
  }
  if (i.dailyHours < 1 || i.dailyHours > 24) {
    throw new Error('Daily operating hours should be 1-24 hours');
  }
}

function round(n: number, digits = 2): number {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}


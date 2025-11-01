export type SupportedMaterialForCost =
  | 'carbon_steel'
  | 'stainless_steel'
  | 'aluminum'
  | 'copper';

export const MATERIAL_DENSITY_G_PER_CM3: Record<SupportedMaterialForCost, number> = {
  carbon_steel: 7.85,
  stainless_steel: 7.90,
  aluminum: 2.70,
  copper: 8.96,
};

export const MATERIAL_LABELS_FOR_COST: Record<SupportedMaterialForCost, string> = {
  carbon_steel: 'Carbon Steel',
  stainless_steel: 'Stainless Steel',
  aluminum: 'Aluminum',
  copper: 'Copper',
};

export type CostEstimatorInput = {
  // Workpiece & Material
  totalCutLengthM: number; // Total cutting length (m)
  sheetAreaM2: number; // Sheet material area (m²), for material volume estimation
  thicknessMm: number; // Sheet thickness (mm)
  material: SupportedMaterialForCost;
  materialPricePerKg: number; // Material price (USD/kg)

  // Energy & Equipment
  laserPowerKw: number; // Equipment rated power (kW)
  electricalPricePerKwh: number; // Electricity price (USD/kWh)
  processEfficiency: number; // Processing efficiency factor (0-1), reflects load utilization

  // Assist Gas
  assistGas: 'oxygen' | 'nitrogen' | 'air';
  gasPricePerM3: number; // Gas price (USD/m³)
  gasFlowM3PerH: number; // Typical operating flow rate (m³/h)

  // Depreciation & Labor
  machinePrice: number; // Machine price (USD)
  machineLifeHours: number; // Total life hours (h)
  laborPricePerHour: number; // Labor rate (USD/h)
  operatorShare: number; // Operator occupancy factor (0-1), e.g., 0.5 means half-time operator

  // Time Estimation
  averageSpeedMmPerMin: number; // Average cutting speed (mm/min)
  piercingTimePerHoleSec?: number; // Optional piercing time estimation (s/hole)
  holesCount?: number; // Number of holes
};

export type CostEstimatorOutput = {
  processingTimeMin: number;
  materialCost: number;
  electricityCost: number;
  gasCost: number;
  depreciationCost: number;
  laborCost: number;
  totalCost: number;
  breakdownPct: {
    material: number;
    electricity: number;
    gas: number;
    depreciation: number;
    labor: number;
  };
};

export function estimateCost(input: CostEstimatorInput): CostEstimatorOutput {
  validate(input);

  // Time: cutting length / average speed + piercing time
  const baseMinutes = (input.totalCutLengthM * 1000) / Math.max(1, input.averageSpeedMmPerMin);
  const piercingMinutes = ((input.piercingTimePerHoleSec ?? 0) * (input.holesCount ?? 0)) / 60;
  const processingTimeMin = round(baseMinutes + piercingMinutes, 2);
  const processingTimeHours = processingTimeMin / 60;

  // Material cost: volume = area (m²) * thickness (m), mass = volume * density (kg/m³)
  // Convert g/cm³ → kg/m³: multiply by 1000
  const densityKgPerM3 = MATERIAL_DENSITY_G_PER_CM3[input.material] * 1000;
  const thicknessM = input.thicknessMm / 1000;
  const volumeM3 = input.sheetAreaM2 * thicknessM;
  const massKg = volumeM3 * densityKgPerM3;
  const materialCost = round(massKg * input.materialPricePerKg, 2);

  // Electricity cost: power (kW) * time (h) * electricity price * efficiency factor
  const electricityCost = round(
    input.laserPowerKw * processingTimeHours * input.electricalPricePerKwh * clamp(input.processEfficiency, 0.1, 1),
    2
  );

  // Gas cost: flow rate (m³/h) * time (h) * unit price
  const gasCost = round(input.gasFlowM3PerH * processingTimeHours * input.gasPricePerM3, 2);

  // Depreciation: machine price / total life hours * processing time
  const depreciationCost = round((input.machinePrice / Math.max(1, input.machineLifeHours)) * processingTimeHours, 2);

  // Labor: unit price * time * occupancy factor
  const laborCost = round(input.laborPricePerHour * processingTimeHours * clamp(input.operatorShare, 0, 1), 2);

  const totalCost = round(materialCost + electricityCost + gasCost + depreciationCost + laborCost, 2);

  const pct = (n: number) => (totalCost > 0 ? round((n / totalCost) * 100, 2) : 0);

  return {
    processingTimeMin,
    materialCost,
    electricityCost,
    gasCost,
    depreciationCost,
    laborCost,
    totalCost,
    breakdownPct: {
      material: pct(materialCost),
      electricity: pct(electricityCost),
      gas: pct(gasCost),
      depreciation: pct(depreciationCost),
      labor: pct(laborCost),
    },
  };
}

function validate(i: CostEstimatorInput) {
  if (i.totalCutLengthM <= 0) throw new Error('Cutting length must be greater than 0');
  if (i.sheetAreaM2 <= 0) throw new Error('Sheet area must be greater than 0');
  if (i.thicknessMm <= 0) throw new Error('Thickness must be greater than 0');
  if (i.materialPricePerKg <= 0) throw new Error('Material price must be greater than 0');
  if (i.laserPowerKw <= 0) throw new Error('Laser power must be greater than 0');
  if (i.electricalPricePerKwh <= 0) throw new Error('Electricity price must be greater than 0');
  if (i.gasPricePerM3 < 0) throw new Error('Gas price cannot be negative');
  if (i.gasFlowM3PerH < 0) throw new Error('Gas flow rate cannot be negative');
  if (i.machinePrice < 0) throw new Error('Machine price cannot be negative');
  if (i.machineLifeHours <= 0) throw new Error('Machine life hours must be greater than 0');
  if (i.laborPricePerHour < 0) throw new Error('Labor rate cannot be negative');
  if (i.averageSpeedMmPerMin <= 0) throw new Error('Average cutting speed must be greater than 0');
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}






















export type SupportedMaterial =
  | 'carbon_steel'
  | 'stainless_steel'
  | 'aluminum'
  | 'copper'
  | 'brass';

export const MATERIAL_LABELS: Record<SupportedMaterial, string> = {
  carbon_steel: 'Carbon Steel',
  stainless_steel: 'Stainless Steel',
  aluminum: 'Aluminum',
  copper: 'Copper',
  brass: 'Brass',
};

// Empirical coefficients based on published process data (for estimation purposes)
// Note: Results vary significantly with different equipment, lenses, and gas conditions. Verify with actual test cuts.
const MATERIAL_FACTOR: Record<SupportedMaterial, number> = {
  carbon_steel: 1.00,
  stainless_steel: 1.15,
  aluminum: 1.25,
  copper: 1.30,
  brass: 1.20,
};

export type KerfInput = {
  powerKw: number; // 1-30
  material: SupportedMaterial;
  thicknessMm: number; // 0.5-50
  nozzleDiameterMm: number; // 0.8-5.0
  speedMmPerMin: number; // 100-20000
};

export type KerfOutput = {
  kerfMm: number;
  compensationMm: number;
  recommendedSpacingMm: number;
  utilizationImpactPct: number;
};

export function calculateKerf(input: KerfInput): KerfOutput {
  validateInput(input);

  const materialFactor = MATERIAL_FACTOR[input.material];

  // Simplified estimation model: Based on nozzle diameter, with energy-thickness-speed influence terms added.
  // This reflects the effect of energy density on melt pool lateral expansion, varying with material thermal properties.
  const influence = (input.powerKw * 1000) / (input.thicknessMm * Math.max(input.speedMmPerMin, 1));
  const kerf = input.nozzleDiameterMm + influence * materialFactor * 0.12; // Empirical scaling factor (dimensionally constrained)

  // Result constraints: Typical thin plate 0.8-1.6mm nozzles produce kerf in 0.8-2.2mm range
  const kerfClamped = clamp(kerf, input.nozzleDiameterMm * 0.8, input.nozzleDiameterMm * 2.2);

  const compensation = round(kerfClamped / 2, 3);
  const spacing = round(Math.max(kerfClamped * 1.5, 0.5), 3);
  // Simplified utilization impact: Based on spacing increase relative to minimum safe spacing of 0.5mm
  const utilizationImpact = round(
    -Math.min(20, Math.max(0, (spacing - 0.5) * 3)),
    2
  );

  return {
    kerfMm: round(kerfClamped, 3),
    compensationMm: compensation,
    recommendedSpacingMm: spacing,
    utilizationImpactPct: utilizationImpact,
  };
}

function validateInput(i: KerfInput) {
  if (i.powerKw < 0.5 || i.powerKw > 30) throw new Error('Power range should be 0.5-30 kW');
  if (i.thicknessMm < 0.5 || i.thicknessMm > 50) throw new Error('Thickness range should be 0.5-50 mm');
  if (i.nozzleDiameterMm < 0.8 || i.nozzleDiameterMm > 5.0) throw new Error('Nozzle diameter should be 0.8-5.0 mm');
  if (i.speedMmPerMin < 100 || i.speedMmPerMin > 20000) throw new Error('Speed range should be 100-20000 mm/min');
}

function round(n: number, digits = 2): number {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}






















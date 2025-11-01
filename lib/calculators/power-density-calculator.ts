export type PowerDensityInput = {
  powerW: number; // 100 - 30000
  spotDiameterMm: number; // 0.05 - 0.5
  wavelengthNm?: number; // Optional, commonly 1064nm/1070nm
  mSquared?: number; // 1.0 - 10.0 (for hints, not used in basic power density calculation)
};

export type PowerDensityOutput = {
  spotAreaMm2: number;
  powerDensityWPerMm2: number;
  processHint: 'cutting' | 'welding' | 'marking' | 'unknown';
  focalDepthEstimateMm: number; // Simplified estimation
};

export function calculatePowerDensity(input: PowerDensityInput): PowerDensityOutput {
  validate(input);
  const r = input.spotDiameterMm / 2;
  const area = Math.PI * r * r; // mm^2
  const density = input.powerW / area; // W/mm^2

  // Simplified process hint thresholds (typical empirical ranges)
  const hint: PowerDensityOutput['processHint'] = density > 1000
    ? 'cutting'
    : density > 100
    ? 'welding'
    : density > 10
    ? 'marking'
    : 'unknown';

  // Simplified depth of focus estimation: Empirical scale based on spot diameter
  const focalDepth = clamp(input.spotDiameterMm * 2.5, 0.05, 5);

  return {
    spotAreaMm2: round(area, 4),
    powerDensityWPerMm2: round(density, 2),
    processHint: hint,
    focalDepthEstimateMm: round(focalDepth, 3),
  };
}

function validate(i: PowerDensityInput) {
  if (i.powerW < 100 || i.powerW > 30000) throw new Error('Power range should be 100-30000 W');
  if (i.spotDiameterMm < 0.05 || i.spotDiameterMm > 0.5) throw new Error('Spot diameter should be 0.05-0.5 mm');
  if (i.mSquared !== undefined && (i.mSquared < 1.0 || i.mSquared > 10.0)) throw new Error('M² range should be 1.0-10.0');
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}






















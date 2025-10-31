export type PowerDensityInput = {
  powerW: number; // 100 - 30000
  spotDiameterMm: number; // 0.05 - 0.5
  wavelengthNm?: number; // 可选，常用1064nm/1070nm
  mSquared?: number; // 1.0 - 10.0（用于提示，不参与基础功率密度计算）
};

export type PowerDensityOutput = {
  spotAreaMm2: number;
  powerDensityWPerMm2: number;
  processHint: 'cutting' | 'welding' | 'marking' | 'unknown';
  focalDepthEstimateMm: number; // 简化估算
};

export function calculatePowerDensity(input: PowerDensityInput): PowerDensityOutput {
  validate(input);
  const r = input.spotDiameterMm / 2;
  const area = Math.PI * r * r; // mm^2
  const density = input.powerW / area; // W/mm^2

  // 简化工艺提示阈值（典型经验区间）
  const hint: PowerDensityOutput['processHint'] = density > 1000
    ? 'cutting'
    : density > 100
    ? 'welding'
    : density > 10
    ? 'marking'
    : 'unknown';

  // 简化焦深估算：按经验以光斑直径为尺度量级
  const focalDepth = clamp(input.spotDiameterMm * 2.5, 0.05, 5);

  return {
    spotAreaMm2: round(area, 4),
    powerDensityWPerMm2: round(density, 2),
    processHint: hint,
    focalDepthEstimateMm: round(focalDepth, 3),
  };
}

function validate(i: PowerDensityInput) {
  if (i.powerW < 100 || i.powerW > 30000) throw new Error('功率范围应在 100-30000 W');
  if (i.spotDiameterMm < 0.05 || i.spotDiameterMm > 0.5) throw new Error('光斑直径应在 0.05-0.5 mm');
  if (i.mSquared !== undefined && (i.mSquared < 1.0 || i.mSquared > 10.0)) throw new Error('M²范围应在 1.0-10.0');
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}








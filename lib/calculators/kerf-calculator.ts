export type SupportedMaterial =
  | 'carbon_steel'
  | 'stainless_steel'
  | 'aluminum'
  | 'copper'
  | 'brass';

export const MATERIAL_LABELS: Record<SupportedMaterial, string> = {
  carbon_steel: '碳钢',
  stainless_steel: '不锈钢',
  aluminum: '铝',
  copper: '铜',
  brass: '黄铜',
};

// 基于公开工艺资料的经验系数（范围内估算用途）
// 注意：不同设备/镜头/气体条件会有显著差异，结果需结合实测校验。
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

  // 简化估算模型：以喷嘴直径为基础，叠加能量-厚度-速度的影响项。
  // 该项反映能量密度对熔池横向扩展的影响，随材料热物性差异而变。
  const influence = (input.powerKw * 1000) / (input.thicknessMm * Math.max(input.speedMmPerMin, 1));
  const kerf = input.nozzleDiameterMm + influence * materialFactor * 0.12; // 经验比例系数（量纲化后约束）

  // 结果约束：典型薄板0.8-1.6mm喷嘴对应kerf一般在0.8-2.2mm区间
  const kerfClamped = clamp(kerf, input.nozzleDiameterMm * 0.8, input.nozzleDiameterMm * 2.2);

  const compensation = round(kerfClamped / 2, 3);
  const spacing = round(Math.max(kerfClamped * 1.5, 0.5), 3);
  // 简化的利用率影响：以间距相对最小安全间距0.5mm的增加量估算
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
  if (i.powerKw < 0.5 || i.powerKw > 30) throw new Error('功率范围应在 0.5-30 kW');
  if (i.thicknessMm < 0.5 || i.thicknessMm > 50) throw new Error('厚度范围应在 0.5-50 mm');
  if (i.nozzleDiameterMm < 0.8 || i.nozzleDiameterMm > 5.0) throw new Error('喷嘴直径应在 0.8-5.0 mm');
  if (i.speedMmPerMin < 100 || i.speedMmPerMin > 20000) throw new Error('速度范围应在 100-20000 mm/min');
}

function round(n: number, digits = 2): number {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}






















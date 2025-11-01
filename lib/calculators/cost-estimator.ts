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
  carbon_steel: '碳钢',
  stainless_steel: '不锈钢',
  aluminum: '铝',
  copper: '铜',
};

export type CostEstimatorInput = {
  // 工件与材料
  totalCutLengthM: number; // 切割总长度（m）
  sheetAreaM2: number; // 用料板材面积（m²），用于材料体积估算
  thicknessMm: number; // 板厚（mm）
  material: SupportedMaterialForCost;
  materialPricePerKg: number; // 材料单价（元/kg）

  // 能源与设备
  laserPowerKw: number; // 设备标称功率（kW）
  electricalPricePerKwh: number; // 电价（元/kWh）
  processEfficiency: number; // 加工能效系数（0-1），反映负载利用

  // 气体
  assistGas: 'oxygen' | 'nitrogen' | 'air';
  gasPricePerM3: number; // 气体单价（元/m³）
  gasFlowM3PerH: number; // 典型工况流量（m³/h）

  // 折旧与人工
  machinePrice: number; // 设备价格（元）
  machineLifeHours: number; // 总寿命小时（h）
  laborPricePerHour: number; // 人工单价（元/h）
  operatorShare: number; // 人员占用系数（0-1），如0.5表示半人值守

  // 时间估算
  averageSpeedMmPerMin: number; // 平均切割速度（mm/min）
  piercingTimePerHoleSec?: number; // 可选穿孔时间估算（s/孔）
  holesCount?: number; // 孔数量（个）
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

  // 时间：切割长度/平均速度 + 穿孔时间
  const baseMinutes = (input.totalCutLengthM * 1000) / Math.max(1, input.averageSpeedMmPerMin);
  const piercingMinutes = ((input.piercingTimePerHoleSec ?? 0) * (input.holesCount ?? 0)) / 60;
  const processingTimeMin = round(baseMinutes + piercingMinutes, 2);
  const processingTimeHours = processingTimeMin / 60;

  // 材料成本：体积 = 面积(m²) * 厚度(m)，质量 = 体积 * 密度(kg/m³)
  // 将 g/cm³ → kg/m³：乘以1000
  const densityKgPerM3 = MATERIAL_DENSITY_G_PER_CM3[input.material] * 1000;
  const thicknessM = input.thicknessMm / 1000;
  const volumeM3 = input.sheetAreaM2 * thicknessM;
  const massKg = volumeM3 * densityKgPerM3;
  const materialCost = round(massKg * input.materialPricePerKg, 2);

  // 电力成本：功率(kW) * 时间(h) * 电价 * 能效系数
  const electricityCost = round(
    input.laserPowerKw * processingTimeHours * input.electricalPricePerKwh * clamp(input.processEfficiency, 0.1, 1),
    2
  );

  // 气体成本：流量(m³/h) * 时间(h) * 单价
  const gasCost = round(input.gasFlowM3PerH * processingTimeHours * input.gasPricePerM3, 2);

  // 折旧：设备价 / 总寿命小时 * 加工时间
  const depreciationCost = round((input.machinePrice / Math.max(1, input.machineLifeHours)) * processingTimeHours, 2);

  // 人工：单价 * 时间 * 占用系数
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
  if (i.totalCutLengthM <= 0) throw new Error('切割长度必须大于0');
  if (i.sheetAreaM2 <= 0) throw new Error('板材面积必须大于0');
  if (i.thicknessMm <= 0) throw new Error('厚度必须大于0');
  if (i.materialPricePerKg <= 0) throw new Error('材料单价必须大于0');
  if (i.laserPowerKw <= 0) throw new Error('功率必须大于0');
  if (i.electricalPricePerKwh <= 0) throw new Error('电价必须大于0');
  if (i.gasPricePerM3 < 0) throw new Error('气体单价不能为负');
  if (i.gasFlowM3PerH < 0) throw new Error('气体流量不能为负');
  if (i.machinePrice < 0) throw new Error('设备价格不能为负');
  if (i.machineLifeHours <= 0) throw new Error('设备寿命小时必须大于0');
  if (i.laborPricePerHour < 0) throw new Error('人工单价不能为负');
  if (i.averageSpeedMmPerMin <= 0) throw new Error('平均切割速度必须大于0');
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}






















export type LaserType = 'fiber' | 'co2' | 'solid_state';

export type ChillerInput = {
  laserType: LaserType;
  laserPowerKw: number; // 1 - 30
  ambientC: number; // 15 - 40
  dutyCyclePct: number; // 20 - 100
  safetyFactor: number; // 1.1 - 1.6
};

export type ChillerOutput = {
  coolingCapacityKw: number; // 目标制冷量
  coolingCapacityKcalPerH: number; // 换算
  suggestedFlowLpm: number; // 水流量估算（L/min）
};

export function calculateChiller(input: ChillerInput): ChillerOutput {
  validate(input);

  // 激光器有效散热需求估算系数（热负载占比）
  // 说明：光纤转换效率较高，CO2较低；固体介于两者之间。
  const heatLoadFactor = input.laserType === 'fiber' ? 0.35 : input.laserType === 'co2' ? 1.2 : 0.6;

  // 环境温度修正（相对25°C）
  const ambientAdj = 1 + Math.max(-0.1, Math.min(0.25, (input.ambientC - 25) * 0.015));

  const duty = input.dutyCyclePct / 100;

  const baseKw = input.laserPowerKw * heatLoadFactor * duty * ambientAdj;
  const capacityKw = round(baseKw * input.safetyFactor, 2);

  // kcal/h 换算（1 kW ≈ 860 kcal/h）
  const capacityKcal = round(capacityKw * 860, 0);

  // 流量估算：经验范围 3-6 L/min 每kW热负载（取中值4.5）
  const flow = round(Math.max(3, Math.min(6, 4.5)) * baseKw, 2);

  return {
    coolingCapacityKw: capacityKw,
    coolingCapacityKcalPerH: capacityKcal,
    suggestedFlowLpm: flow,
  };
}

function validate(i: ChillerInput) {
  if (i.laserPowerKw < 1 || i.laserPowerKw > 30) throw new Error('激光功率范围应在 1-30 kW');
  if (i.ambientC < 10 || i.ambientC > 45) throw new Error('环境温度范围应在 10-45 ℃');
  if (i.dutyCyclePct < 10 || i.dutyCyclePct > 100) throw new Error('占空比范围应在 10-100 %');
  if (i.safetyFactor < 1.05 || i.safetyFactor > 1.8) throw new Error('安全系数范围应在 1.05-1.8');
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}








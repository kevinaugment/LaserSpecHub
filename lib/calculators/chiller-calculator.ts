export type LaserType = 'fiber' | 'co2' | 'solid_state';

export type ChillerInput = {
  laserType: LaserType;
  laserPowerKw: number; // 1 - 30
  ambientC: number; // 15 - 40
  dutyCyclePct: number; // 20 - 100
  safetyFactor: number; // 1.1 - 1.6
};

export type ChillerOutput = {
  coolingCapacityKw: number; // Target cooling capacity
  coolingCapacityKcalPerH: number; // Conversion
  suggestedFlowLpm: number; // Estimated water flow rate (L/min)
};

export function calculateChiller(input: ChillerInput): ChillerOutput {
  validate(input);

  // Laser effective heat dissipation requirement estimation coefficient (heat load ratio)
  // Note: Fiber lasers have higher conversion efficiency, CO2 lower; solid-state between the two.
  const heatLoadFactor = input.laserType === 'fiber' ? 0.35 : input.laserType === 'co2' ? 1.2 : 0.6;

  // Ambient temperature adjustment (relative to 25°C)
  const ambientAdj = 1 + Math.max(-0.1, Math.min(0.25, (input.ambientC - 25) * 0.015));

  const duty = input.dutyCyclePct / 100;

  const baseKw = input.laserPowerKw * heatLoadFactor * duty * ambientAdj;
  const capacityKw = round(baseKw * input.safetyFactor, 2);

  // kcal/h conversion (1 kW ≈ 860 kcal/h)
  const capacityKcal = round(capacityKw * 860, 0);

  // Flow estimation: Empirical range 3-6 L/min per kW heat load (using median 4.5)
  const flow = round(Math.max(3, Math.min(6, 4.5)) * baseKw, 2);

  return {
    coolingCapacityKw: capacityKw,
    coolingCapacityKcalPerH: capacityKcal,
    suggestedFlowLpm: flow,
  };
}

function validate(i: ChillerInput) {
  if (i.laserPowerKw < 1 || i.laserPowerKw > 30) throw new Error('Laser power range should be 1-30 kW');
  if (i.ambientC < 10 || i.ambientC > 45) throw new Error('Ambient temperature range should be 10-45°C');
  if (i.dutyCyclePct < 10 || i.dutyCyclePct > 100) throw new Error('Duty cycle range should be 10-100%');
  if (i.safetyFactor < 1.05 || i.safetyFactor > 1.8) throw new Error('Safety factor range should be 1.05-1.8');
}

function round(n: number, d = 2) {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
}






















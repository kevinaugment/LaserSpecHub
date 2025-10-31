/**
 * 激光切割喷嘴寿命预测计算器
 * 数据来源: Precitec技术手册、Raytools产品目录、行业实践经验
 * 更新日期: 2025-10-31
 */

export type NozzleMaterial = 'copper' | 'chrome_copper' | 'alloy';
export type NozzleType = 'single_layer' | 'double_layer' | 'high_speed';
export type CuttingMaterial = 'carbon_steel' | 'stainless_steel' | 'aluminum' | 'copper';
export type AssistGas = 'oxygen' | 'nitrogen' | 'air';

export const NOZZLE_MATERIAL_LABELS: Record<NozzleMaterial, string> = {
  copper: '纯铜',
  chrome_copper: '镀铬铜',
  alloy: '合金',
};

export const NOZZLE_TYPE_LABELS: Record<NozzleType, string> = {
  single_layer: '单层喷嘴',
  double_layer: '双层喷嘴',
  high_speed: '高速喷嘴',
};

export const CUTTING_MATERIAL_LABELS: Record<CuttingMaterial, string> = {
  carbon_steel: '碳钢',
  stainless_steel: '不锈钢',
  aluminum: '铝合金',
  copper: '铜',
};

export const ASSIST_GAS_LABELS: Record<AssistGas, string> = {
  oxygen: '氧气',
  nitrogen: '氮气',
  air: '压缩空气',
};

/**
 * 基础寿命系数 (小时)
 * 来源: Precitec技术手册 & Raytools产品数据
 */
const BASE_LIFE: Record<NozzleMaterial, number> = {
  copper: 120,          // 纯铜基础寿命
  chrome_copper: 180,   // 镀铬铜延长50%寿命
  alloy: 240,          // 合金寿命最长
};

/**
 * 喷嘴类型系数
 */
const TYPE_FACTOR: Record<NozzleType, number> = {
  single_layer: 1.0,    // 标准单层
  double_layer: 1.3,    // 双层结构延长30%
  high_speed: 0.8,      // 高速喷嘴磨损更快
};

/**
 * 功率磨损系数 (归一化到6kW)
 */
function getPowerWearFactor(powerKw: number): number {
  // 功率越高,热负荷越大,磨损越快
  // 基准: 6kW = 1.0
  return Math.max(0.5, Math.min(2.5, Math.pow(powerKw / 6, 0.7)));
}

/**
 * 材料厚度磨损系数
 */
function getThicknessWearFactor(thicknessMm: number): number {
  // 厚板切割时间长,喷嘴暴露在高温环境更久
  if (thicknessMm <= 3) return 0.8;
  if (thicknessMm <= 10) return 1.0;
  if (thicknessMm <= 20) return 1.3;
  return 1.6;
}

/**
 * 切割材料磨损系数
 */
const MATERIAL_WEAR_FACTOR: Record<CuttingMaterial, number> = {
  carbon_steel: 1.0,      // 碳钢标准
  stainless_steel: 1.2,   // 不锈钢喷溅多
  aluminum: 0.9,          // 铝相对温和
  copper: 1.4,            // 铜反射率高,能量损失大
};

/**
 * 辅助气体磨损系数
 */
const GAS_WEAR_FACTOR: Record<AssistGas, number> = {
  oxygen: 1.3,      // 氧气切割温度高,氧化腐蚀
  nitrogen: 0.9,    // 氮气保护性好
  air: 1.0,         // 空气标准
};

/**
 * 喷嘴单价 (元)
 * 来源: 市场平均价格 2025年
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
  lifespanHours: number;        // 预估使用寿命(小时)
  lifespanDays: number;         // 建议更换周期(天)
  monthlyCostYuan: number;      // 月度消耗成本(元)
  nozzlePriceYuan: number;      // 单个喷嘴价格(元)
  tips: string[];               // 延长寿命建议
  breakdown: {                  // 计算明细
    baseLife: number;
    powerFactor: number;
    thicknessFactor: number;
    materialFactor: number;
    gasFactor: number;
  };
};

export function calculateNozzleLife(input: NozzleLifeInput): NozzleLifeOutput {
  validateInput(input);

  // 1. 基础寿命
  const baseLife = BASE_LIFE[input.nozzleMaterial] * TYPE_FACTOR[input.nozzleType];

  // 2. 各项磨损因子
  const powerFactor = getPowerWearFactor(input.powerKw);
  const thicknessFactor = getThicknessWearFactor(input.thicknessMm);
  const materialFactor = MATERIAL_WEAR_FACTOR[input.cuttingMaterial];
  const gasFactor = GAS_WEAR_FACTOR[input.assistGas];

  // 3. 综合磨损系数
  const totalWearFactor = powerFactor * thicknessFactor * materialFactor * gasFactor;

  // 4. 调整后寿命
  const lifespanHours = round(baseLife / totalWearFactor, 1);

  // 5. 更换周期(天)
  const lifespanDays = Math.floor(lifespanHours / input.dailyHours);

  // 6. 月度成本
  const nozzlePrice = NOZZLE_PRICE[input.nozzleMaterial][input.nozzleType];
  const monthlyHours = input.dailyHours * 30;
  const nozzlesPerMonth = monthlyHours / lifespanHours;
  const monthlyCost = round(nozzlesPerMonth * nozzlePrice, 0);

  // 7. 生成建议
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

  // 磨损严重时给出建议
  if (totalWearFactor > 1.5) {
    tips.push('当前工况磨损较严重,建议采取以下措施:');
  }

  // 功率建议
  if (input.powerKw > 10) {
    tips.push('• 高功率切割可考虑降低功率或提高速度,减少热负荷');
  }

  // 气体建议
  if (input.assistGas === 'oxygen') {
    tips.push('• 氧气切割温度高,建议定期检查喷嘴氧化情况,及时清洁');
    if (input.cuttingMaterial === 'stainless_steel') {
      tips.push('• 不锈钢切割建议改用氮气,可延长喷嘴寿命30%以上');
    }
  }

  // 材质升级建议
  if (input.nozzleMaterial === 'copper' && totalWearFactor > 1.3) {
    tips.push('• 建议升级为镀铬铜喷嘴,寿命延长50%,成本增加约60%');
  }

  // 厚板建议
  if (input.thicknessMm > 15) {
    tips.push('• 厚板切割时间长,建议增加检查频率,避免喷嘴变形影响切割质量');
  }

  // 铜材料建议
  if (input.cuttingMaterial === 'copper') {
    tips.push('• 铜材料反射率高,建议使用专用防反射喷嘴,降低热负荷');
  }

  // 通用建议
  if (tips.length === 0 || totalWearFactor <= 1.2) {
    tips.push('• 定期清洁喷嘴,保持同心度,延长使用寿命');
    tips.push('• 避免喷嘴与工件碰撞,碰撞是喷嘴损坏的主要原因');
    tips.push('• 建议备用多个喷嘴,避免停机等待');
  }

  return tips;
}

function validateInput(i: NozzleLifeInput) {
  if (i.thicknessMm < 0.5 || i.thicknessMm > 50) {
    throw new Error('厚度范围应在 0.5-50 mm');
  }
  if (i.powerKw < 1 || i.powerKw > 30) {
    throw new Error('功率范围应在 1-30 kW');
  }
  if (i.dailyHours < 1 || i.dailyHours > 24) {
    throw new Error('日均工作时间应在 1-24 小时');
  }
}

function round(n: number, digits = 2): number {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}


/**
 * 激光切割材料厚度参数速查表
 * 完整的切割参数数据库，包含速度、气压、喷嘴、焦点等参数
 * 
 * 数据来源:
 * - TRUMPF工艺手册 2024版
 * - Bystronic切割参数数据库
 * - Amada技术规格
 * - Mazak工艺指南
 * 
 * 更新日期: 2025-10-31
 * 下次审核: 2026-04-30
 */

export const MATERIAL_PARAMETERS_VERSION = "1.0.0";
export const MATERIAL_PARAMETERS_LAST_UPDATE = "2025-10-31";

export interface CuttingParameter {
  thickness: number;              // 厚度 (mm)
  speedMPerMin: number;           // 切割速度 (m/min)
  gasPressureBar: number;         // 气体压力 (bar)
  nozzleDiameterMm: number;       // 喷嘴直径 (mm)
  focusPositionMm: number;        // 焦点位置 (mm, 负值=材料内部, 正值=材料上方)
  notes?: string;                 // 备注
}

export interface PowerLevelParameters {
  power: string;                  // 功率 (e.g., "1kW", "3kW")
  parameters: CuttingParameter[];
}

export interface MaterialParametersData {
  materialName: string;
  materialId: string;
  assistGas: string;              // 辅助气体
  gasPurity?: string;             // 气体纯度要求
  powerLevels: PowerLevelParameters[];
  generalNotes?: string[];
}

/**
 * 碳钢切割参数 (氧气辅助)
 * 氧气切割利用氧化反应热量，速度快，成本低
 */
export const CARBON_STEEL_OXYGEN: MaterialParametersData = {
  materialName: "碳钢 (Mild Steel)",
  materialId: "carbon-steel-o2",
  assistGas: "氧气 (O₂)",
  gasPurity: "≥99.5%",
  generalNotes: [
    "氧气切割速度快，但切口会有氧化层",
    "适合后续焊接或喷涂的工件",
    "低碳钢(Q235)切割效果最佳"
  ],
  powerLevels: [
    {
      power: "1kW",
      parameters: [
        { thickness: 1, speedMPerMin: 3.8, gasPressureBar: 0.3, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 2.2, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 1.6, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 4, speedMPerMin: 1.2, gasPressureBar: 0.5, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 0.9, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
      ],
    },
    {
      power: "2kW",
      parameters: [
        { thickness: 1, speedMPerMin: 6.5, gasPressureBar: 0.3, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 4.0, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 2.8, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 1.8, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 1.0, gasPressureBar: 0.6, nozzleDiameterMm: 1.8, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 0.7, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -2.5 },
      ],
    },
    {
      power: "3kW",
      parameters: [
        { thickness: 1, speedMPerMin: 9.5, gasPressureBar: 0.3, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 5.5, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 4.0, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 2.5, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 1.5, gasPressureBar: 0.6, nozzleDiameterMm: 1.8, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 1.1, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -2.5 },
        { thickness: 12, speedMPerMin: 0.8, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -3.0 },
      ],
    },
    {
      power: "4kW",
      parameters: [
        { thickness: 1, speedMPerMin: 12.0, gasPressureBar: 0.3, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 7.0, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 5.0, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 3.2, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 2.0, gasPressureBar: 0.6, nozzleDiameterMm: 1.8, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 1.5, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -2.5 },
        { thickness: 12, speedMPerMin: 1.1, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -3.0 },
        { thickness: 15, speedMPerMin: 0.8, gasPressureBar: 0.6, nozzleDiameterMm: 2.5, focusPositionMm: -4.0 },
      ],
    },
    {
      power: "6kW",
      parameters: [
        { thickness: 1, speedMPerMin: 16.0, gasPressureBar: 0.3, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 10.0, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 7.0, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 4.5, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 2.8, gasPressureBar: 0.6, nozzleDiameterMm: 1.8, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 2.1, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -2.5 },
        { thickness: 12, speedMPerMin: 1.6, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -3.0 },
        { thickness: 15, speedMPerMin: 1.2, gasPressureBar: 0.6, nozzleDiameterMm: 2.5, focusPositionMm: -4.0 },
        { thickness: 20, speedMPerMin: 0.8, gasPressureBar: 0.6, nozzleDiameterMm: 3.0, focusPositionMm: -5.0 },
      ],
    },
    {
      power: "12kW",
      parameters: [
        { thickness: 2, speedMPerMin: 18.0, gasPressureBar: 0.4, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 12.0, gasPressureBar: 0.5, nozzleDiameterMm: 1.4, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 7.5, gasPressureBar: 0.6, nozzleDiameterMm: 1.5, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 4.5, gasPressureBar: 0.6, nozzleDiameterMm: 1.8, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 3.5, gasPressureBar: 0.6, nozzleDiameterMm: 2.0, focusPositionMm: -2.5 },
        { thickness: 15, speedMPerMin: 2.2, gasPressureBar: 0.6, nozzleDiameterMm: 2.5, focusPositionMm: -4.0 },
        { thickness: 20, speedMPerMin: 1.6, gasPressureBar: 0.6, nozzleDiameterMm: 3.0, focusPositionMm: -5.0 },
        { thickness: 25, speedMPerMin: 1.1, gasPressureBar: 0.6, nozzleDiameterMm: 3.5, focusPositionMm: -6.0 },
      ],
    },
  ],
};

/**
 * 不锈钢切割参数 (氮气辅助)
 * 氮气切割无氧化，切口光亮，适合高质量要求
 */
export const STAINLESS_STEEL_NITROGEN: MaterialParametersData = {
  materialName: "不锈钢 (Stainless Steel)",
  materialId: "stainless-steel-n2",
  assistGas: "氮气 (N₂)",
  gasPurity: "≥99.99%",
  generalNotes: [
    "氮气切割无氧化层，切口光亮",
    "需要较高气体压力(10-20 bar)",
    "适合304、316等奥氏体不锈钢"
  ],
  powerLevels: [
    {
      power: "1kW",
      parameters: [
        { thickness: 1, speedMPerMin: 3.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 1.7, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 1.2, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
      ],
    },
    {
      power: "2kW",
      parameters: [
        { thickness: 1, speedMPerMin: 5.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 3.2, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 2.2, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 1.3, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
      ],
    },
    {
      power: "3kW",
      parameters: [
        { thickness: 1, speedMPerMin: 7.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 4.5, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 3.2, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 1.9, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 1.1, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
      ],
    },
    {
      power: "4kW",
      parameters: [
        { thickness: 1, speedMPerMin: 9.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 6.0, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 4.2, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 2.5, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 1.5, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 1.1, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.5 },
      ],
    },
    {
      power: "6kW",
      parameters: [
        { thickness: 1, speedMPerMin: 13.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 8.5, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 6.0, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 3.5, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 2.2, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 1.6, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.5 },
        { thickness: 12, speedMPerMin: 1.2, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -3.0 },
      ],
    },
    {
      power: "12kW",
      parameters: [
        { thickness: 2, speedMPerMin: 14.0, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 10.0, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 6.0, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 3.8, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 2.8, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.5 },
        { thickness: 15, speedMPerMin: 1.8, gasPressureBar: 20, nozzleDiameterMm: 3.0, focusPositionMm: -4.0 },
        { thickness: 20, speedMPerMin: 1.2, gasPressureBar: 20, nozzleDiameterMm: 3.5, focusPositionMm: -5.0 },
      ],
    },
  ],
};

/**
 * 铝合金切割参数 (氮气辅助)
 * 铝反射率高，需要足够功率密度
 */
export const ALUMINUM_NITROGEN: MaterialParametersData = {
  materialName: "铝合金 (Aluminum Alloy)",
  materialId: "aluminum-n2",
  assistGas: "氮气 (N₂)",
  gasPurity: "≥99.99%",
  generalNotes: [
    "铝材料反射率高，推荐使用3kW以上功率",
    "需要较高气体压力防止氧化",
    "适合5052、6061等常用铝合金"
  ],
  powerLevels: [
    {
      power: "2kW",
      parameters: [
        { thickness: 1, speedMPerMin: 4.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: +0.5 },
        { thickness: 2, speedMPerMin: 2.8, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: 0 },
        { thickness: 3, speedMPerMin: 1.8, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -0.5 },
      ],
    },
    {
      power: "3kW",
      parameters: [
        { thickness: 1, speedMPerMin: 6.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: +0.5 },
        { thickness: 2, speedMPerMin: 4.2, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: 0 },
        { thickness: 3, speedMPerMin: 2.8, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -0.5 },
        { thickness: 5, speedMPerMin: 1.7, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.0 },
      ],
    },
    {
      power: "4kW",
      parameters: [
        { thickness: 1, speedMPerMin: 8.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: +0.5 },
        { thickness: 2, speedMPerMin: 5.5, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: 0 },
        { thickness: 3, speedMPerMin: 3.8, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -0.5 },
        { thickness: 5, speedMPerMin: 2.3, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.0 },
        { thickness: 8, speedMPerMin: 1.3, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -1.5 },
      ],
    },
    {
      power: "6kW",
      parameters: [
        { thickness: 1, speedMPerMin: 12.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: +0.5 },
        { thickness: 2, speedMPerMin: 8.0, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: 0 },
        { thickness: 3, speedMPerMin: 5.5, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -0.5 },
        { thickness: 5, speedMPerMin: 3.3, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.0 },
        { thickness: 8, speedMPerMin: 2.0, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -1.5 },
        { thickness: 10, speedMPerMin: 1.5, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.0 },
      ],
    },
    {
      power: "12kW",
      parameters: [
        { thickness: 2, speedMPerMin: 13.0, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: 0 },
        { thickness: 3, speedMPerMin: 9.0, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -0.5 },
        { thickness: 5, speedMPerMin: 5.5, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.0 },
        { thickness: 8, speedMPerMin: 3.5, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -1.5 },
        { thickness: 10, speedMPerMin: 2.6, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.0 },
        { thickness: 15, speedMPerMin: 1.7, gasPressureBar: 20, nozzleDiameterMm: 3.0, focusPositionMm: -3.0 },
      ],
    },
  ],
};

export const ALL_MATERIAL_PARAMETERS = [
  CARBON_STEEL_OXYGEN,
  STAINLESS_STEEL_NITROGEN,
  ALUMINUM_NITROGEN,
];


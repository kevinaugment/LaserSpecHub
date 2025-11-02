/**
 * Laser Cutting Material Thickness Parameters Reference
 * Complete cutting parameter database including speed, pressure, nozzle, and focus parameters
 * 
 * Data Sources:
 * - TRUMPF Process Manual 2024 Edition
 * - Bystronic Cutting Parameter Database
 * - Amada Technical Specifications
 * - Mazak Process Guidelines
 * 
 * Last Updated: 2025-11-02
 * Next Review: 2026-05-02
 */

export const MATERIAL_PARAMETERS_VERSION = "2.0.0";
export const MATERIAL_PARAMETERS_LAST_UPDATE = "2025-11-02";

export interface CuttingParameter {
  thickness: number;              // Thickness (mm)
  speedMPerMin: number;           // Cutting speed (m/min)
  speedRange?: string;            // Optional speed range for tolerance
  gasPressureBar: number;         // Gas pressure (bar)
  nozzleDiameterMm: number;       // Nozzle diameter (mm)
  focusPositionMm: number;        // Focus position (mm, negative=inside material, positive=above material)
  notes?: string;                 // Additional notes
}

export interface PowerLevelParameters {
  power: string;                  // Power level (e.g., "1kW", "3kW")
  parameters: CuttingParameter[];
}

export interface MaterialParametersData {
  materialName: string;
  materialId: string;
  assistGas: string;              // Assist gas type
  gasPurity?: string;             // Gas purity requirement
  powerLevels: PowerLevelParameters[];
  generalNotes?: string[];
}

/**
 * Carbon Steel Cutting Parameters (Oxygen Assist)
 * Oxygen cutting utilizes exothermic reaction heat for fast speeds and low cost
 */
export const CARBON_STEEL_OXYGEN: MaterialParametersData = {
  materialName: "Mild Steel (Carbon Steel)",
  materialId: "carbon-steel-o2",
  assistGas: "Oxygen (O₂)",
  gasPurity: "≥99.5%",
  generalNotes: [
    "Oxygen cutting provides fast speeds but produces oxide layer on cut edge",
    "Suitable for parts requiring subsequent welding or coating",
    "Best results with low-carbon steel (Q235, SPCC, A36)"
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
 * Stainless Steel Cutting Parameters (Nitrogen Assist)
 * Nitrogen cutting produces oxide-free, bright cut edges suitable for high-quality requirements
 */
export const STAINLESS_STEEL_NITROGEN: MaterialParametersData = {
  materialName: "Stainless Steel (Austenitic)",
  materialId: "stainless-steel-n2",
  assistGas: "Nitrogen (N₂)",
  gasPurity: "≥99.99%",
  generalNotes: [
    "Nitrogen cutting produces oxide-free, bright cut edges",
    "Requires higher gas pressure (10-20 bar) for clean cuts",
    "Suitable for 304, 316, and other austenitic stainless steel grades"
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
 * Stainless Steel Cutting Parameters (Compressed Air Assist)
 * Air cutting offers 80% cost savings vs nitrogen with slight edge oxidation
 */
export const STAINLESS_STEEL_AIR: MaterialParametersData = {
  materialName: "Stainless Steel (Air Cutting)",
  materialId: "stainless-steel-air",
  assistGas: "Compressed Air",
  gasPurity: "Filtered, oil-free",
  generalNotes: [
    "Air cutting offers 80% cost savings compared to nitrogen",
    "Produces slight edge oxidation acceptable for structural applications",
    "Requires higher power (typically 20-30% more than nitrogen cutting)",
    "Not recommended for food processing, medical, or high-aesthetic applications"
  ],
  powerLevels: [
    {
      power: "3kW",
      parameters: [
        { thickness: 1, speedMPerMin: 6.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0, notes: "Minimal oxidation" },
        { thickness: 2, speedMPerMin: 3.5, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5, notes: "Light edge discoloration" },
        { thickness: 3, speedMPerMin: 2.5, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0, notes: "Visible oxidation" },
      ],
    },
    {
      power: "4kW",
      parameters: [
        { thickness: 1, speedMPerMin: 7.5, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 4.8, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 3.3, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 2.0, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
      ],
    },
    {
      power: "6kW",
      parameters: [
        { thickness: 1, speedMPerMin: 10.0, gasPressureBar: 10, nozzleDiameterMm: 1.0, focusPositionMm: 0 },
        { thickness: 2, speedMPerMin: 6.8, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 4.8, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 2.8, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 1.7, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
      ],
    },
    {
      power: "12kW",
      parameters: [
        { thickness: 2, speedMPerMin: 11.0, gasPressureBar: 12, nozzleDiameterMm: 1.2, focusPositionMm: -0.5 },
        { thickness: 3, speedMPerMin: 8.0, gasPressureBar: 14, nozzleDiameterMm: 1.5, focusPositionMm: -1.0 },
        { thickness: 5, speedMPerMin: 4.8, gasPressureBar: 16, nozzleDiameterMm: 1.8, focusPositionMm: -1.5 },
        { thickness: 8, speedMPerMin: 3.0, gasPressureBar: 18, nozzleDiameterMm: 2.0, focusPositionMm: -2.0 },
        { thickness: 10, speedMPerMin: 2.2, gasPressureBar: 20, nozzleDiameterMm: 2.5, focusPositionMm: -2.5 },
      ],
    },
  ],
};

/**
 * Aluminum Alloy Cutting Parameters (Nitrogen Assist)
 * High reflectivity requires sufficient power density for reliable cutting
 */
export const ALUMINUM_NITROGEN: MaterialParametersData = {
  materialName: "Aluminum Alloy",
  materialId: "aluminum-n2",
  assistGas: "Nitrogen (N₂)",
  gasPurity: "≥99.99%",
  generalNotes: [
    "High reflectivity requires 3kW+ power for reliable cutting",
    "Requires higher gas pressure to prevent oxidation",
    "Suitable for 5052, 6061, and other common aluminum alloys"
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
  STAINLESS_STEEL_AIR,
  ALUMINUM_NITROGEN,
];

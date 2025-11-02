/**
 * Assist Gas Cutting Parameters Data
 * Data Sources:
 * - Linde Gas Technical Handbook for Laser Cutting
 * - Air Liquide Laser Gas Application Guide
 * - Industry Best Practices 2024
 * - Equipment Manufacturer Guidelines
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const ASSIST_GAS_VERSION = "1.0.0";
export const ASSIST_GAS_LAST_UPDATE = "2025-10-30";

export interface GasApplication {
  material: string;
  thickness: string;
  pressure: string; // MPa or bar
  flowRate?: string; // L/min
  advantages: string[];
  disadvantages: string[];
  edgeQuality: string;
  typicalSpeed: string;
  costPerMeter?: string;
}

export interface AssistGasData {
  gasName: string;
  gasId: string;
  chemicalFormula: string;
  purity: string;
  color?: string;
  properties: {
    density: string;
    molarMass: string;
    boilingPoint: string;
  };
  applications: GasApplication[];
  safetyNotes: string[];
  storageRequirements: string[];
  costPerCubicMeter: string;
  relativeCost: number; // 1 = baseline (oxygen)
}

export const ASSIST_GAS_DATA: AssistGasData[] = [
  {
    gasName: "Oxygen",
    gasId: "oxygen",
    chemicalFormula: "O₂",
    purity: "≥99.5% (Industrial grade)",
    color: "Colorless",
    properties: {
      density: "1.429 kg/m³ (at STP)",
      molarMass: "32.00 g/mol",
      boilingPoint: "-183°C"
    },
    applications: [
      {
        material: "Carbon Steel (Mild Steel)",
        thickness: "3-20mm",
        pressure: "0.2-0.4 MPa (2-4 bar)",
        flowRate: "100-300 L/min",
        advantages: [
          "Maximum cutting speed (exothermic reaction)",
          "Thick material capability up to 25mm+",
          "Lowest cost per cut",
          "Wide availability",
          "Good for rough cutting"
        ],
        disadvantages: [
          "Oxidized cut edge (rust-colored)",
          "Not suitable for stainless steel",
          "Edge requires deburring",
          "Heat affected zone larger"
        ],
        edgeQuality: "Oxidized edge with slight dross",
        typicalSpeed: "Fast (100-150% of nitrogen)",
        costPerMeter: "$0.05-0.15"
      },
      {
        material: "Low Alloy Steel",
        thickness: "5-25mm",
        pressure: "0.3-0.5 MPa (3-5 bar)",
        flowRate: "150-400 L/min",
        advantages: [
          "High cutting speed",
          "Economical for thick plates",
          "Exothermic assist increases efficiency"
        ],
        disadvantages: [
          "Oxidation on cut surface",
          "May affect weldability",
          "Post-processing often needed"
        ],
        edgeQuality: "Oxidized, acceptable for structural use",
        typicalSpeed: "Very fast",
        costPerMeter: "$0.08-0.20"
      }
    ],
    safetyNotes: [
      "Oxidizer - increases fire risk",
      "Keep away from oil and grease",
      "Use oxygen-compatible equipment only",
      "Proper ventilation required"
    ],
    storageRequirements: [
      "Store in well-ventilated area",
      "Keep cylinders upright and secured",
      "Separate from flammable materials",
      "Temperature: -20°C to 50°C"
    ],
    costPerCubicMeter: "$0.15",
    relativeCost: 1.0
  },
  {
    gasName: "Nitrogen",
    gasId: "nitrogen",
    chemicalFormula: "N₂",
    purity: "≥99.99% (High purity) or ≥99.999% (Ultra-high purity)",
    color: "Colorless",
    properties: {
      density: "1.251 kg/m³ (at STP)",
      molarMass: "28.01 g/mol",
      boilingPoint: "-196°C"
    },
    applications: [
      {
        material: "Stainless Steel (304/316)",
        thickness: "0.5-12mm",
        pressure: "0.8-2.0 MPa (8-20 bar)",
        flowRate: "200-600 L/min",
        advantages: [
          "Oxidation-free bright edge",
          "No post-processing needed",
          "Excellent for welding preparation",
          "Clean, burr-free cuts",
          "Maintains material properties"
        ],
        disadvantages: [
          "Higher gas cost (3x oxygen)",
          "Requires high pressure (expensive equipment)",
          "Slower cutting speed than oxygen",
          "High gas consumption"
        ],
        edgeQuality: "Bright, oxide-free, mirror-like",
        typicalSpeed: "Medium (60-70% of oxygen speed)",
        costPerMeter: "$0.30-0.80"
      },
      {
        material: "Aluminum (5000/6000 Series)",
        thickness: "0.5-10mm",
        pressure: "0.6-1.5 MPa (6-15 bar)",
        flowRate: "150-500 L/min",
        advantages: [
          "Prevents oxidation",
          "Clean cut surface",
          "No discoloration",
          "Good for anodizing prep"
        ],
        disadvantages: [
          "High gas consumption",
          "Expensive for thick materials",
          "Requires high laser power"
        ],
        edgeQuality: "Smooth, oxide-free",
        typicalSpeed: "Medium",
        costPerMeter: "$0.25-0.70"
      },
      {
        material: "Titanium",
        thickness: "0.5-8mm",
        pressure: "0.8-1.5 MPa (8-15 bar)",
        flowRate: "200-500 L/min",
        advantages: [
          "Prevents titanium oxidation",
          "Maintains corrosion resistance",
          "Clean edges for aerospace applications"
        ],
        disadvantages: [
          "Very expensive",
          "High pressure requirements",
          "Slow cutting speed"
        ],
        edgeQuality: "Clean, no oxidation",
        typicalSpeed: "Slow to medium",
        costPerMeter: "$0.40-1.00"
      },
      {
        material: "Copper/Brass",
        thickness: "0.5-6mm",
        pressure: "0.8-1.8 MPa (8-18 bar)",
        flowRate: "250-600 L/min",
        advantages: [
          "Prevents tarnishing",
          "Clean bright surface",
          "Good for decorative parts"
        ],
        disadvantages: [
          "Very high pressure needed",
          "Expensive",
          "Requires high laser power"
        ],
        edgeQuality: "Bright, clean",
        typicalSpeed: "Slow",
        costPerMeter: "$0.50-1.20"
      }
    ],
    safetyNotes: [
      "Inert gas - can cause asphyxiation in confined spaces",
      "Ensure adequate ventilation",
      "Use oxygen monitors in enclosed areas",
      "High pressure requires proper regulators"
    ],
    storageRequirements: [
      "Store in cool, dry, well-ventilated area",
      "Keep cylinders secured",
      "Protect from physical damage",
      "Temperature: -20°C to 50°C"
    ],
    costPerCubicMeter: "$0.45",
    relativeCost: 3.0
  },
  {
    gasName: "Compressed Air",
    gasId: "compressed-air",
    chemicalFormula: "~78% N₂, 21% O₂, 1% other",
    purity: "Filtered and dried (oil-free)",
    color: "Colorless",
    properties: {
      density: "1.293 kg/m³ (at STP)",
      molarMass: "28.97 g/mol (average)",
      boilingPoint: "N/A (mixture)"
    },
    applications: [
      {
        material: "Thin Carbon Steel",
        thickness: "0.5-3mm",
        pressure: "0.6-1.0 MPa (6-10 bar)",
        flowRate: "100-300 L/min",
        advantages: [
          "Extremely low cost (on-site compressor)",
          "Environmentally friendly",
          "Suitable for high-volume thin material",
          "No gas supply logistics"
        ],
        disadvantages: [
          "Slight oxidation on cut edge",
          "Limited thickness capability",
          "Requires oil-free compressor",
          "Quality lower than pure gases"
        ],
        edgeQuality: "Slight oxidation, acceptable",
        typicalSpeed: "Fast (similar to oxygen for thin materials)",
        costPerMeter: "$0.02-0.05"
      },
      {
        material: "Non-Metals (Acrylic, Wood, Plastics)",
        thickness: "Any",
        pressure: "0.1-0.3 MPa (1-3 bar)",
        flowRate: "50-150 L/min",
        advantages: [
          "Very low cost",
          "Sufficient for non-metals",
          "Removes smoke and debris",
          "Prevents charring"
        ],
        disadvantages: [
          "Must be oil-free and dry",
          "Compressor maintenance required"
        ],
        edgeQuality: "Clean for non-metals",
        typicalSpeed: "Standard",
        costPerMeter: "$0.01-0.03"
      },
      {
        material: "Stainless Steel (Thin)",
        thickness: "0.5-2mm",
        pressure: "0.8-1.2 MPa (8-12 bar)",
        flowRate: "150-400 L/min",
        advantages: [
          "Cost-effective for thin materials",
          "Acceptable edge quality",
          "High-volume production"
        ],
        disadvantages: [
          "Slight discoloration",
          "Not for critical applications",
          "Thickness limited"
        ],
        edgeQuality: "Slight oxidation, usable",
        typicalSpeed: "Medium-fast",
        costPerMeter: "$0.03-0.08"
      }
    ],
    safetyNotes: [
      "Ensure compressor is oil-free for laser cutting",
      "Install proper filtration (particulate and moisture)",
      "Regular maintenance of air dryer",
      "Monitor air quality"
    ],
    storageRequirements: [
      "On-site generation via compressor",
      "Requires compressed air tank",
      "Filtration system maintenance",
      "Dryer system required"
    ],
    costPerCubicMeter: "$0.05",
    relativeCost: 0.33
  },
  {
    gasName: "Argon",
    gasId: "argon",
    chemicalFormula: "Ar",
    purity: "≥99.999% (Ultra-high purity)",
    color: "Colorless",
    properties: {
      density: "1.784 kg/m³ (at STP)",
      molarMass: "39.95 g/mol",
      boilingPoint: "-186°C"
    },
    applications: [
      {
        material: "Titanium (Aerospace Grade)",
        thickness: "0.5-5mm",
        pressure: "0.5-1.0 MPa (5-10 bar)",
        flowRate: "150-400 L/min",
        advantages: [
          "Complete oxidation prevention",
          "Protects reactive metals",
          "Aerospace quality cuts",
          "No contamination"
        ],
        disadvantages: [
          "Very expensive (15-20x oxygen)",
          "Slow cutting speed",
          "Limited suppliers",
          "High purity requirements"
        ],
        edgeQuality: "Perfect, no oxidation",
        typicalSpeed: "Slow",
        costPerMeter: "$2.00-5.00"
      },
      {
        material: "Reactive Metals (Zirconium, Hafnium)",
        thickness: "0.5-3mm",
        pressure: "0.6-1.2 MPa (6-12 bar)",
        flowRate: "200-500 L/min",
        advantages: [
          "Only suitable gas for highly reactive metals",
          "Prevents combustion",
          "Ultra-clean cuts"
        ],
        disadvantages: [
          "Extremely expensive",
          "Special handling required",
          "Very slow process"
        ],
        edgeQuality: "Pristine, contamination-free",
        typicalSpeed: "Very slow",
        costPerMeter: "$3.00-8.00"
      }
    ],
    safetyNotes: [
      "Inert gas - asphyxiation hazard",
      "Use in well-ventilated areas only",
      "Oxygen monitors mandatory",
      "Heavier than air - accumulates in low areas"
    ],
    storageRequirements: [
      "High-pressure cylinders",
      "Store upright and secured",
      "Cool, dry storage",
      "Special regulators required"
    ],
    costPerCubicMeter: "$2.50",
    relativeCost: 16.7
  },
  {
    gasName: "Nitrogen-Oxygen Mix",
    gasId: "nitrogen-oxygen-mix",
    chemicalFormula: "N₂ + O₂ (various ratios)",
    purity: "Custom blend (typically 90% N₂ + 10% O₂)",
    color: "Colorless",
    properties: {
      density: "~1.3 kg/m³ (varies by ratio)",
      molarMass: "~29 g/mol (varies)",
      boilingPoint: "N/A (mixture)"
    },
    applications: [
      {
        material: "Stainless Steel (Compromise)",
        thickness: "2-8mm",
        pressure: "0.8-1.5 MPa (8-15 bar)",
        flowRate: "200-500 L/min",
        advantages: [
          "Balance between speed and quality",
          "Lower cost than pure nitrogen",
          "Faster than pure nitrogen",
          "Acceptable edge quality"
        ],
        disadvantages: [
          "Slight oxidation possible",
          "Not for critical applications",
          "Custom mixing required",
          "Quality varies with ratio"
        ],
        edgeQuality: "Minimal oxidation",
        typicalSpeed: "Medium-fast",
        costPerMeter: "$0.20-0.50"
      }
    ],
    safetyNotes: [
      "Follow safety guidelines for both gases",
      "Ensure proper mixing equipment",
      "Monitor oxygen concentration"
    ],
    storageRequirements: [
      "Requires gas mixing system",
      "Store component gases separately",
      "Calibrate mixing ratios regularly"
    ],
    costPerCubicMeter: "$0.30",
    relativeCost: 2.0
  }
];

export interface GasCostComparison {
  gasId: string;
  gasName: string;
  costPerM3: string;
  relativeCost: number;
  typicalConsumption: string; // m³/hour at typical settings
  costPerHour: string;
}

export const GAS_COST_COMPARISON: GasCostComparison[] = [
  {
    gasId: "compressed-air",
    gasName: "Compressed Air",
    costPerM3: "$0.05",
    relativeCost: 0.33,
    typicalConsumption: "10-20 m³/hr",
    costPerHour: "$0.50-1.00"
  },
  {
    gasId: "oxygen",
    gasName: "Oxygen",
    costPerM3: "$0.15",
    relativeCost: 1.0,
    typicalConsumption: "8-15 m³/hr",
    costPerHour: "$1.20-2.25"
  },
  {
    gasId: "nitrogen-oxygen-mix",
    gasName: "N₂/O₂ Mix",
    costPerM3: "$0.30",
    relativeCost: 2.0,
    typicalConsumption: "12-20 m³/hr",
    costPerHour: "$3.60-6.00"
  },
  {
    gasId: "nitrogen",
    gasName: "Nitrogen",
    costPerM3: "$0.45",
    relativeCost: 3.0,
    typicalConsumption: "15-30 m³/hr",
    costPerHour: "$6.75-13.50"
  },
  {
    gasId: "argon",
    gasName: "Argon",
    costPerM3: "$2.50",
    relativeCost: 16.7,
    typicalConsumption: "10-20 m³/hr",
    costPerHour: "$25.00-50.00"
  }
];

export function getGasById(gasId: string): AssistGasData | null {
  return ASSIST_GAS_DATA.find(g => g.gasId === gasId) || null;
}

export function getGasForMaterial(material: string): AssistGasData[] {
  return ASSIST_GAS_DATA.filter(gas =>
    gas.applications.some(app => 
      app.material.toLowerCase().includes(material.toLowerCase())
    )
  );
}

export const DATA_DISCLAIMER = `Data Disclaimer: This assist gas parameter data is compiled from industrial gas supplier technical handbooks and equipment manufacturer guidelines, for reference only. Actual gas parameters should be optimized based on specific equipment, material batch, and quality requirements. Always follow equipment manufacturer recommendations and conduct test cuts. Data last updated: ${ASSIST_GAS_LAST_UPDATE}.`;

// Nozzle-Gas Pairing Recommendations
export interface NozzleGasPairing {
  gasType: string;
  nozzleType: string; // single, double, high-flow, conical
  nozzleDiameter: string; // mm
  recommendedPressure: string;
  optimalThickness: string;
  advantages: string[];
}

export const NOZZLE_GAS_PAIRING: NozzleGasPairing[] = [
  {
    gasType: "Oxygen",
    nozzleType: "Single conical",
    nozzleDiameter: "1.0-1.5mm",
    recommendedPressure: "0.2-0.4 MPa (2-4 bar)",
    optimalThickness: "3-10mm carbon steel",
    advantages: ["Maximum speed", "Good dross removal", "Economical"]
  },
  {
    gasType: "Oxygen",
    nozzleType: "Single conical",
    nozzleDiameter: "1.5-2.0mm",
    recommendedPressure: "0.3-0.5 MPa (3-5 bar)",
    optimalThickness: "10-20mm carbon steel",
    advantages: ["Thick material capability", "High flow rate", "Fast cutting"]
  },
  {
    gasType: "Nitrogen",
    nozzleType: "High-flow conical",
    nozzleDiameter: "2.0-3.0mm",
    recommendedPressure: "0.8-1.5 MPa (8-15 bar)",
    optimalThickness: "0.5-6mm stainless steel",
    advantages: ["Clean edge", "High pressure delivery", "Minimal dross"]
  },
  {
    gasType: "Nitrogen",
    nozzleType: "High-flow conical",
    nozzleDiameter: "3.0-4.0mm",
    recommendedPressure: "1.2-2.0 MPa (12-20 bar)",
    optimalThickness: "6-12mm stainless steel",
    advantages: ["Very high pressure", "Thick stainless capability", "Excellent edge quality"]
  },
  {
    gasType: "Nitrogen",
    nozzleType: "Double nozzle",
    nozzleDiameter: "2.5mm",
    recommendedPressure: "1.0-1.8 MPa (10-18 bar)",
    optimalThickness: "3-10mm aluminum",
    advantages: ["Enhanced gas coverage", "Better heat dissipation", "Improved edge quality"]
  },
  {
    gasType: "Compressed Air",
    nozzleType: "Single conical",
    nozzleDiameter: "1.5-2.5mm",
    recommendedPressure: "0.6-1.0 MPa (6-10 bar)",
    optimalThickness: "0.5-3mm thin materials",
    advantages: ["Low cost", "Simple setup", "Good for high volume"]
  },
  {
    gasType: "Compressed Air",
    nozzleType: "High-flow conical",
    nozzleDiameter: "2.5-3.5mm",
    recommendedPressure: "0.8-1.2 MPa (8-12 bar)",
    optimalThickness: "0.5-2mm stainless steel",
    advantages: ["Cost effective", "Acceptable quality", "High pressure capable"]
  },
  {
    gasType: "Argon",
    nozzleType: "High-purity conical",
    nozzleDiameter: "1.5-2.5mm",
    recommendedPressure: "0.5-1.0 MPa (5-10 bar)",
    optimalThickness: "0.5-5mm titanium",
    advantages: ["Complete oxidation prevention", "Aerospace quality", "Reactive metal safe"]
  }
];

// Gas Purity Level Comparisons
export interface GasPurityComparison {
  gasName: string;
  purityLevel: string;
  edgeQualityImpact: string;
  costMultiplier: number;
  typicalUse: string;
  oxidationRisk: string;
}

export const GAS_PURITY_LEVELS: GasPurityComparison[] = [
  {
    gasName: "Nitrogen",
    purityLevel: "99.5% (Industrial)",
    edgeQualityImpact: "Slight oxidation possible on stainless steel",
    costMultiplier: 1.0,
    typicalUse: "Carbon steel, non-critical applications",
    oxidationRisk: "Moderate"
  },
  {
    gasName: "Nitrogen",
    purityLevel: "99.99% (High Purity)",
    edgeQualityImpact: "Clean, oxide-free edges on stainless steel",
    costMultiplier: 1.3,
    typicalUse: "Stainless steel, aluminum, standard quality",
    oxidationRisk: "Low"
  },
  {
    gasName: "Nitrogen",
    purityLevel: "99.999% (Ultra-High Purity)",
    edgeQualityImpact: "Perfect mirror finish, zero oxidation",
    costMultiplier: 1.8,
    typicalUse: "Aerospace, medical, critical applications",
    oxidationRisk: "Minimal"
  },
  {
    gasName: "Oxygen",
    purityLevel: "99.5% (Industrial)",
    edgeQualityImpact: "Standard oxidized edge, acceptable for most uses",
    costMultiplier: 1.0,
    typicalUse: "General carbon steel cutting",
    oxidationRisk: "Expected (intentional)"
  },
  {
    gasName: "Oxygen",
    purityLevel: "99.9% (High Purity)",
    edgeQualityImpact: "Consistent oxidation, cleaner reaction",
    costMultiplier: 1.2,
    typicalUse: "High-speed carbon steel, precision cutting",
    oxidationRisk: "Expected (controlled)"
  },
  {
    gasName: "Argon",
    purityLevel: "99.999% (Ultra-High Purity)",
    edgeQualityImpact: "Pristine, contamination-free edges",
    costMultiplier: 1.0,
    typicalUse: "Titanium, reactive metals only",
    oxidationRisk: "None"
  },
  {
    gasName: "Argon",
    purityLevel: "99.9999% (Six-Nine)",
    edgeQualityImpact: "Absolute purity, aerospace standard",
    costMultiplier: 1.5,
    typicalUse: "Critical aerospace, medical implants",
    oxidationRisk: "None"
  }
];

// Pressure-Thickness Relationship Data
export interface PressureThicknessPoint {
  thickness: number; // mm
  pressure: string; // bar
  flowRate: string; // L/min
  speed: string; // mm/s
}

export interface PressureThicknessData {
  material: string;
  gasType: string;
  dataPoints: PressureThicknessPoint[];
}

export const PRESSURE_THICKNESS_CURVES: PressureThicknessData[] = [
  {
    material: "Carbon Steel",
    gasType: "Oxygen",
    dataPoints: [
      { thickness: 1, pressure: "2-3 bar", flowRate: "80-120 L/min", speed: "80-100 mm/s" },
      { thickness: 2, pressure: "2-3 bar", flowRate: "100-150 L/min", speed: "60-80 mm/s" },
      { thickness: 3, pressure: "2.5-3.5 bar", flowRate: "120-180 L/min", speed: "40-60 mm/s" },
      { thickness: 5, pressure: "3-4 bar", flowRate: "150-220 L/min", speed: "25-40 mm/s" },
      { thickness: 8, pressure: "3.5-4.5 bar", flowRate: "180-280 L/min", speed: "15-25 mm/s" },
      { thickness: 10, pressure: "3.5-5 bar", flowRate: "200-320 L/min", speed: "10-20 mm/s" },
      { thickness: 15, pressure: "4-5 bar", flowRate: "250-400 L/min", speed: "6-12 mm/s" },
      { thickness: 20, pressure: "4-5 bar", flowRate: "300-450 L/min", speed: "3-8 mm/s" }
    ]
  },
  {
    material: "Stainless Steel",
    gasType: "Nitrogen",
    dataPoints: [
      { thickness: 0.5, pressure: "6-8 bar", flowRate: "120-180 L/min", speed: "80-120 mm/s" },
      { thickness: 1, pressure: "8-10 bar", flowRate: "150-220 L/min", speed: "50-80 mm/s" },
      { thickness: 2, pressure: "10-12 bar", flowRate: "200-300 L/min", speed: "30-50 mm/s" },
      { thickness: 3, pressure: "12-14 bar", flowRate: "250-380 L/min", speed: "20-35 mm/s" },
      { thickness: 4, pressure: "14-16 bar", flowRate: "300-450 L/min", speed: "15-25 mm/s" },
      { thickness: 6, pressure: "15-18 bar", flowRate: "350-520 L/min", speed: "10-18 mm/s" },
      { thickness: 8, pressure: "16-20 bar", flowRate: "400-600 L/min", speed: "6-12 mm/s" },
      { thickness: 10, pressure: "18-20 bar", flowRate: "450-650 L/min", speed: "4-10 mm/s" }
    ]
  },
  {
    material: "Aluminum",
    gasType: "Nitrogen",
    dataPoints: [
      { thickness: 0.5, pressure: "6-8 bar", flowRate: "100-160 L/min", speed: "100-150 mm/s" },
      { thickness: 1, pressure: "8-10 bar", flowRate: "130-200 L/min", speed: "60-100 mm/s" },
      { thickness: 2, pressure: "10-12 bar", flowRate: "180-270 L/min", speed: "40-65 mm/s" },
      { thickness: 3, pressure: "11-13 bar", flowRate: "220-330 L/min", speed: "25-45 mm/s" },
      { thickness: 4, pressure: "12-14 bar", flowRate: "260-400 L/min", speed: "18-32 mm/s" },
      { thickness: 5, pressure: "13-15 bar", flowRate: "300-450 L/min", speed: "12-25 mm/s" },
      { thickness: 6, pressure: "14-16 bar", flowRate: "340-500 L/min", speed: "8-18 mm/s" },
      { thickness: 8, pressure: "15-17 bar", flowRate: "380-550 L/min", speed: "5-12 mm/s" }
    ]
  },
  {
    material: "Carbon Steel",
    gasType: "Compressed Air",
    dataPoints: [
      { thickness: 0.5, pressure: "6-8 bar", flowRate: "80-130 L/min", speed: "80-120 mm/s" },
      { thickness: 1, pressure: "8-10 bar", flowRate: "100-160 L/min", speed: "50-80 mm/s" },
      { thickness: 1.5, pressure: "9-11 bar", flowRate: "130-200 L/min", speed: "35-60 mm/s" },
      { thickness: 2, pressure: "10-12 bar", flowRate: "150-240 L/min", speed: "25-45 mm/s" },
      { thickness: 2.5, pressure: "10-12 bar", flowRate: "170-270 L/min", speed: "18-35 mm/s" },
      { thickness: 3, pressure: "11-13 bar", flowRate: "200-300 L/min", speed: "12-28 mm/s" }
    ]
  }
];

// Material-Gas Compatibility Matrix
export interface MaterialGasCompatibility {
  material: string;
  gas: string;
  compatibility: "optimal" | "acceptable" | "limited" | "not-recommended";
  thicknessRange: string;
  edgeQuality: string;
  notes: string;
}

export const MATERIAL_GAS_MATRIX: MaterialGasCompatibility[] = [
  { material: "Carbon Steel", gas: "Oxygen", compatibility: "optimal", thicknessRange: "3-25mm", edgeQuality: "Oxidized", notes: "Maximum speed, lowest cost" },
  { material: "Carbon Steel", gas: "Nitrogen", compatibility: "acceptable", thicknessRange: "0.5-12mm", edgeQuality: "Clean", notes: "Slower, higher cost, oxide-free" },
  { material: "Carbon Steel", gas: "Compressed Air", compatibility: "acceptable", thicknessRange: "0.5-3mm", edgeQuality: "Slight oxidation", notes: "Very economical for thin materials" },
  { material: "Carbon Steel", gas: "Argon", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "N/A", notes: "Unnecessarily expensive" },
  
  { material: "Stainless Steel", gas: "Oxygen", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "Heavy oxidation", notes: "Causes severe oxidation" },
  { material: "Stainless Steel", gas: "Nitrogen", compatibility: "optimal", thicknessRange: "0.5-12mm", edgeQuality: "Bright, oxide-free", notes: "Industry standard, high pressure required" },
  { material: "Stainless Steel", gas: "Compressed Air", compatibility: "limited", thicknessRange: "0.5-2mm", edgeQuality: "Slight discoloration", notes: "Thin materials only, cost-effective" },
  { material: "Stainless Steel", gas: "Argon", compatibility: "acceptable", thicknessRange: "0.5-6mm", edgeQuality: "Perfect", notes: "Expensive, used for critical applications" },
  
  { material: "Aluminum", gas: "Oxygen", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "Poor", notes: "Oxidation issues" },
  { material: "Aluminum", gas: "Nitrogen", compatibility: "optimal", thicknessRange: "0.5-10mm", edgeQuality: "Clean, smooth", notes: "Standard choice, prevents oxidation" },
  { material: "Aluminum", gas: "Compressed Air", compatibility: "acceptable", thicknessRange: "0.5-3mm", edgeQuality: "Acceptable", notes: "Economical for non-critical parts" },
  { material: "Aluminum", gas: "Argon", compatibility: "limited", thicknessRange: "0.5-5mm", edgeQuality: "Excellent", notes: "Too expensive for standard use" },
  
  { material: "Titanium", gas: "Oxygen", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "N/A", notes: "Fire risk, severe oxidation" },
  { material: "Titanium", gas: "Nitrogen", compatibility: "limited", thicknessRange: "0.5-6mm", edgeQuality: "Acceptable", notes: "Can cause some oxidation" },
  { material: "Titanium", gas: "Compressed Air", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "N/A", notes: "Oxygen content causes issues" },
  { material: "Titanium", gas: "Argon", compatibility: "optimal", thicknessRange: "0.5-8mm", edgeQuality: "Perfect", notes: "Only recommended gas for aerospace quality" },
  
  { material: "Copper/Brass", gas: "Oxygen", compatibility: "not-recommended", thicknessRange: "N/A", edgeQuality: "Tarnished", notes: "Heavy oxidation, tarnishing" },
  { material: "Copper/Brass", gas: "Nitrogen", compatibility: "optimal", thicknessRange: "0.5-6mm", edgeQuality: "Bright, clean", notes: "High pressure required, best quality" },
  { material: "Copper/Brass", gas: "Compressed Air", compatibility: "limited", thicknessRange: "0.5-2mm", edgeQuality: "Some tarnishing", notes: "Budget option, quality varies" },
  { material: "Copper/Brass", gas: "Argon", compatibility: "acceptable", thicknessRange: "0.5-4mm", edgeQuality: "Excellent", notes: "Very expensive, pristine finish" }
];

export function getNozzleRecommendation(gasType: string, thickness: number): NozzleGasPairing[] {
  return NOZZLE_GAS_PAIRING.filter(pairing => pairing.gasType === gasType);
}

export function getPurityComparison(gasName: string): GasPurityComparison[] {
  return GAS_PURITY_LEVELS.filter(purity => purity.gasName === gasName);
}

export function getPressureForThickness(material: string, gasType: string, thickness: number): PressureThicknessPoint | null {
  const curve = PRESSURE_THICKNESS_CURVES.find(
    c => c.material === material && c.gasType === gasType
  );
  if (!curve) return null;
  
  // Find closest thickness
  const closest = curve.dataPoints.reduce((prev, curr) => 
    Math.abs(curr.thickness - thickness) < Math.abs(prev.thickness - thickness) ? curr : prev
  );
  return closest;
}

export function getCompatibility(material: string, gas: string): MaterialGasCompatibility | null {
  return MATERIAL_GAS_MATRIX.find(
    m => m.material === material && m.gas === gas
  ) || null;
}



























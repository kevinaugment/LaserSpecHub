/**
 * Nozzle Selection Data
 * Sources: Precitec Technical Manuals, Raytools Product Catalogs, Industry Standards
 * Last Updated: 2025-11-02
 */

export interface NozzleRecommendation {
  material: string;
  materialLabel: string;
  thicknessRange: string;
  assistGas: string;
  nozzleType: 'single_layer' | 'double_layer' | 'high_speed';
  nozzleTypeLabel: string;
  diameterMm: number;
  standoffMm: number;
  pressureBar: string;
  flowRateLMin: string;
  tips: string[];
}

export const NOZZLE_RECOMMENDATIONS: NozzleRecommendation[] = [
  // Carbon Steel + Oxygen
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel',
    thicknessRange: '0.5-3mm',
    assistGas: 'Oxygen',
    nozzleType: 'single_layer',
    nozzleTypeLabel: 'Single Layer',
    diameterMm: 1.0,
    standoffMm: 0.7,
    pressureBar: '0.5-1.0',
    flowRateLMin: '50-100',
    tips: [
      'Single-layer nozzle provides cost efficiency',
      'Keep standoff low to maintain gas pressure',
      'Monitor for spatter buildup on nozzle tip',
    ],
  },
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel',
    thicknessRange: '3-8mm',
    assistGas: 'Oxygen',
    nozzleType: 'single_layer',
    nozzleTypeLabel: 'Single Layer',
    diameterMm: 1.5,
    standoffMm: 0.8,
    pressureBar: '1.0-1.5',
    flowRateLMin: '100-200',
    tips: [
      'Most common nozzle size for general cutting',
      'Adjust pressure based on material surface condition',
      'Clean nozzle every 4-6 hours of operation',
    ],
  },
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel',
    thicknessRange: '8-15mm',
    assistGas: 'Oxygen',
    nozzleType: 'single_layer',
    nozzleTypeLabel: 'Single Layer',
    diameterMm: 2.0,
    standoffMm: 1.0,
    pressureBar: '1.5-2.0',
    flowRateLMin: '200-350',
    tips: [
      'Increase standoff slightly for thicker materials',
      'Higher gas flow required for slag removal',
      'Consider double-layer nozzle for better quality',
    ],
  },
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel',
    thicknessRange: '15-25mm',
    assistGas: 'Oxygen',
    nozzleType: 'single_layer',
    nozzleTypeLabel: 'Single Layer',
    diameterMm: 2.5,
    standoffMm: 1.2,
    pressureBar: '1.8-2.5',
    flowRateLMin: '350-500',
    tips: [
      'Thick plate requires larger nozzle diameter',
      'Ensure adequate laser power (8kW+)',
      'Slower cutting speed, longer nozzle exposure time',
    ],
  },
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel',
    thicknessRange: '25mm+',
    assistGas: 'Oxygen',
    nozzleType: 'single_layer',
    nozzleTypeLabel: 'Single Layer',
    diameterMm: 3.0,
    standoffMm: 1.5,
    pressureBar: '2.0-3.0',
    flowRateLMin: '500-700',
    tips: [
      'Ultra-thick plate cutting requires specialized setup',
      'High power laser (12kW+) recommended',
      'Nozzle wear accelerates, check frequently',
    ],
  },

  // Stainless Steel + Nitrogen
  {
    material: 'stainless_steel',
    materialLabel: 'Stainless Steel',
    thicknessRange: '0.5-3mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.2,
    standoffMm: 1.0,
    pressureBar: '10-12',
    flowRateLMin: '100-150',
    tips: [
      'Double-layer nozzle provides better gas flow stability',
      'High nitrogen pressure required for oxide-free edge',
      'Slightly larger diameter than oxygen cutting',
    ],
  },
  {
    material: 'stainless_steel',
    materialLabel: 'Stainless Steel',
    thicknessRange: '3-8mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.5,
    standoffMm: 1.2,
    pressureBar: '12-15',
    flowRateLMin: '200-300',
    tips: [
      'Most common setup for stainless steel fabrication',
      'Maintain consistent standoff for quality',
      'Check gas purity (99.99%+ recommended)',
    ],
  },
  {
    material: 'stainless_steel',
    materialLabel: 'Stainless Steel',
    thicknessRange: '8-15mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 2.0,
    standoffMm: 1.5,
    pressureBar: '15-18',
    flowRateLMin: '300-500',
    tips: [
      'High pressure nitrogen cutting requires robust gas supply',
      'Double-layer design reduces turbulence',
      'Consider gas consumption costs for production',
    ],
  },
  {
    material: 'stainless_steel',
    materialLabel: 'Stainless Steel',
    thicknessRange: '15-25mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 2.5,
    standoffMm: 1.8,
    pressureBar: '18-22',
    flowRateLMin: '500-800',
    tips: [
      'Thick stainless requires very high nitrogen pressure',
      'Gas costs significant, optimize parameters carefully',
      'Alternative: oxygen cutting with post-processing',
    ],
  },

  // Aluminum + Nitrogen
  {
    material: 'aluminum',
    materialLabel: 'Aluminum',
    thicknessRange: '0.5-3mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.2,
    standoffMm: 1.5,
    pressureBar: '8-10',
    flowRateLMin: '100-150',
    tips: [
      'Higher standoff reduces reflection damage risk',
      'Use anti-reflective nozzle coating if available',
      'Monitor nozzle temperature during cutting',
    ],
  },
  {
    material: 'aluminum',
    materialLabel: 'Aluminum',
    thicknessRange: '3-8mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.5,
    standoffMm: 1.8,
    pressureBar: '10-12',
    flowRateLMin: '150-250',
    tips: [
      'Aluminum has high reflectivity, use caution',
      'Ensure cutting head has proper protection',
      'Lower pressure than stainless steel',
    ],
  },
  {
    material: 'aluminum',
    materialLabel: 'Aluminum',
    thicknessRange: '8-15mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 2.0,
    standoffMm: 2.0,
    pressureBar: '12-15',
    flowRateLMin: '250-400',
    tips: [
      'Thick aluminum challenging to cut cleanly',
      'May require multiple passes for best quality',
      'Keep standoff higher to protect optics',
    ],
  },

  // Copper + Nitrogen
  {
    material: 'copper',
    materialLabel: 'Copper/Brass',
    thicknessRange: '0.5-3mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.2,
    standoffMm: 2.0,
    pressureBar: '10-12',
    flowRateLMin: '100-150',
    tips: [
      'Copper extremely reflective, use specialized equipment',
      'High standoff essential for safety',
      'Anti-reflective nozzle strongly recommended',
    ],
  },
  {
    material: 'copper',
    materialLabel: 'Copper/Brass',
    thicknessRange: '3-8mm',
    assistGas: 'Nitrogen',
    nozzleType: 'double_layer',
    nozzleTypeLabel: 'Double Layer',
    diameterMm: 1.5,
    standoffMm: 2.0,
    pressureBar: '12-15',
    flowRateLMin: '150-250',
    tips: [
      'Fiber lasers work better than CO2 for copper',
      'Expect higher nozzle wear due to reflectivity',
      'Monitor cutting head temperature closely',
    ],
  },

  // Thin Sheet High-Speed Cutting
  {
    material: 'carbon_steel',
    materialLabel: 'Carbon Steel (Thin)',
    thicknessRange: '0.5-2mm',
    assistGas: 'Oxygen',
    nozzleType: 'high_speed',
    nozzleTypeLabel: 'High-Speed',
    diameterMm: 0.8,
    standoffMm: 0.5,
    pressureBar: '0.8-1.2',
    flowRateLMin: '80-120',
    tips: [
      'High-speed nozzle for maximum cutting speed',
      'Laval design creates supersonic gas flow',
      'Higher cost but significantly faster',
    ],
  },
  {
    material: 'stainless_steel',
    materialLabel: 'Stainless Steel (Thin)',
    thicknessRange: '0.5-2mm',
    assistGas: 'Nitrogen',
    nozzleType: 'high_speed',
    nozzleTypeLabel: 'High-Speed',
    diameterMm: 1.0,
    standoffMm: 0.8,
    pressureBar: '12-15',
    flowRateLMin: '150-200',
    tips: [
      'Optimized for high-speed production lines',
      'Shorter lifespan than standard nozzles',
      'Requires precise standoff control',
    ],
  },
];

export interface KerfWidthData {
  nozzleDiameterMm: number;
  typicalKerfMm: string;
  toleranceMm: string;
  applications: string;
}

export const KERF_WIDTH_TABLE: KerfWidthData[] = [
  {
    nozzleDiameterMm: 0.8,
    typicalKerfMm: '0.08-0.12',
    toleranceMm: '±0.02',
    applications: 'Ultra-thin sheet, high precision',
  },
  {
    nozzleDiameterMm: 1.0,
    typicalKerfMm: '0.10-0.15',
    toleranceMm: '±0.02',
    applications: 'Thin sheet, precision cutting',
  },
  {
    nozzleDiameterMm: 1.2,
    typicalKerfMm: '0.12-0.18',
    toleranceMm: '±0.03',
    applications: 'General thin to medium sheet',
  },
  {
    nozzleDiameterMm: 1.5,
    typicalKerfMm: '0.15-0.25',
    toleranceMm: '±0.03',
    applications: 'Most common general purpose',
  },
  {
    nozzleDiameterMm: 1.8,
    typicalKerfMm: '0.20-0.30',
    toleranceMm: '±0.04',
    applications: 'Medium thickness cutting',
  },
  {
    nozzleDiameterMm: 2.0,
    typicalKerfMm: '0.25-0.35',
    toleranceMm: '±0.04',
    applications: 'Medium to thick plate',
  },
  {
    nozzleDiameterMm: 2.5,
    typicalKerfMm: '0.30-0.45',
    toleranceMm: '±0.05',
    applications: 'Thick plate cutting',
  },
  {
    nozzleDiameterMm: 3.0,
    typicalKerfMm: '0.35-0.50',
    toleranceMm: '±0.05',
    applications: 'Ultra-thick plate',
  },
];

export interface GasFlowData {
  nozzleDiameterMm: number;
  oxygenFlowLMin: string;
  oxygenPressureBar: string;
  nitrogenFlowLMin: string;
  nitrogenPressureBar: string;
  airFlowLMin: string;
  airPressureBar: string;
}

export const GAS_FLOW_TABLE: GasFlowData[] = [
  {
    nozzleDiameterMm: 0.8,
    oxygenFlowLMin: '40-80',
    oxygenPressureBar: '0.5-0.8',
    nitrogenFlowLMin: '80-120',
    nitrogenPressureBar: '8-10',
    airFlowLMin: '60-100',
    airPressureBar: '6-8',
  },
  {
    nozzleDiameterMm: 1.0,
    oxygenFlowLMin: '50-100',
    oxygenPressureBar: '0.5-1.0',
    nitrogenFlowLMin: '100-150',
    nitrogenPressureBar: '10-12',
    airFlowLMin: '80-120',
    airPressureBar: '8-10',
  },
  {
    nozzleDiameterMm: 1.2,
    oxygenFlowLMin: '80-120',
    oxygenPressureBar: '0.8-1.2',
    nitrogenFlowLMin: '120-180',
    nitrogenPressureBar: '10-12',
    airFlowLMin: '100-150',
    airPressureBar: '8-10',
  },
  {
    nozzleDiameterMm: 1.5,
    oxygenFlowLMin: '100-200',
    oxygenPressureBar: '1.0-1.5',
    nitrogenFlowLMin: '150-300',
    nitrogenPressureBar: '12-15',
    airFlowLMin: '120-200',
    airPressureBar: '10-12',
  },
  {
    nozzleDiameterMm: 1.8,
    oxygenFlowLMin: '150-250',
    oxygenPressureBar: '1.2-1.8',
    nitrogenFlowLMin: '250-400',
    nitrogenPressureBar: '12-16',
    airFlowLMin: '180-280',
    airPressureBar: '10-14',
  },
  {
    nozzleDiameterMm: 2.0,
    oxygenFlowLMin: '200-350',
    oxygenPressureBar: '1.5-2.0',
    nitrogenFlowLMin: '300-500',
    nitrogenPressureBar: '15-18',
    airFlowLMin: '250-400',
    airPressureBar: '12-16',
  },
  {
    nozzleDiameterMm: 2.5,
    oxygenFlowLMin: '300-500',
    oxygenPressureBar: '1.8-2.5',
    nitrogenFlowLMin: '500-800',
    nitrogenPressureBar: '18-22',
    airFlowLMin: '400-600',
    airPressureBar: '15-20',
  },
  {
    nozzleDiameterMm: 3.0,
    oxygenFlowLMin: '400-700',
    oxygenPressureBar: '2.0-3.0',
    nitrogenFlowLMin: '700-1000',
    nitrogenPressureBar: '20-25',
    airFlowLMin: '500-800',
    airPressureBar: '18-22',
  },
];

export interface ThreadSpec {
  brand: string;
  threadSpec: string;
  compatibleWith: string[];
  notes: string;
}

export const THREAD_SPECIFICATIONS: ThreadSpec[] = [
  {
    brand: 'Precitec ProCutter',
    threadSpec: 'M11×1',
    compatibleWith: ['WSX M11 series', 'Generic M11 nozzles'],
    notes: 'Most common standard, widely available',
  },
  {
    brand: 'Raytools BM Series',
    threadSpec: 'M14×1',
    compatibleWith: ['Bodor OEM', 'Generic M14 nozzles'],
    notes: 'Second most common, good availability',
  },
  {
    brand: 'WSX Standard',
    threadSpec: 'M11×1 / M12×1',
    compatibleWith: ['Precitec M11 (if M11 thread)', 'Generic equivalents'],
    notes: 'Check specific model, varies by series',
  },
  {
    brand: 'Bodor OEM',
    threadSpec: 'M14×1',
    compatibleWith: ['Raytools BM', 'Generic M14 nozzles'],
    notes: 'Usually compatible with Raytools',
  },
  {
    brand: 'Legacy Equipment',
    threadSpec: 'M16×1.5',
    compatibleWith: ['Older model specific nozzles'],
    notes: 'Less common, check manufacturer specs',
  },
];

export const NOZZLE_MATERIALS = [
  {
    material: 'Copper',
    thermalConductivity: 'Excellent',
    wearResistance: 'Fair',
    typicalLifeHours: 120,
    relativeCost: 'Low',
    applications: 'General cutting, cost-sensitive applications',
  },
  {
    material: 'Chrome-Plated Copper',
    thermalConductivity: 'Excellent',
    wearResistance: 'Good',
    typicalLifeHours: 180,
    relativeCost: 'Medium',
    applications: 'High-intensity production, best cost-performance ratio',
  },
  {
    material: 'Alloy (Brass/Bronze)',
    thermalConductivity: 'Good',
    wearResistance: 'Excellent',
    typicalLifeHours: 240,
    relativeCost: 'High',
    applications: 'Extreme conditions, specialized applications',
  },
];

export const ALIGNMENT_PROCEDURE = [
  {
    step: 1,
    title: 'Install Nozzle',
    description: 'Thread nozzle onto cutting head and tighten to manufacturer specified torque',
    details: 'Typical torque: 5-8 Nm. Do not overtighten.',
  },
  {
    step: 2,
    title: 'Red Light Pointer Check',
    description: 'Activate red light pointer and verify beam passes through nozzle center',
    details: 'Red dot should be centered in nozzle orifice when viewed from below',
  },
  {
    step: 3,
    title: 'Tape Burn Test',
    description: 'Place masking tape over nozzle, fire low power pulse (50-100W, 1-2ms)',
    details: 'Burn mark should be circular and centered. Elliptical or off-center indicates misalignment.',
  },
  {
    step: 4,
    title: 'Inspect Pattern',
    description: 'Examine burn pattern for concentricity',
    details: 'Perfect circle = aligned. Oval or eccentric = adjust cutting head.',
  },
  {
    step: 5,
    title: 'Adjust if Needed',
    description: 'Use cutting head adjustment screws to center beam',
    details: 'Refer to cutting head manual for specific adjustment procedure',
  },
  {
    step: 6,
    title: 'Re-verify',
    description: 'Repeat tape burn test after adjustment',
    details: 'Continue adjusting until burn pattern is perfectly centered',
  },
  {
    step: 7,
    title: 'Document',
    description: 'Record alignment date and nozzle serial number',
    details: 'Maintain alignment log for quality control',
  },
];


/**
 * Laser Cutting Process Optimization Data
 * Data Sources: 
 * - TRUMPF Process Optimization Guide 2024
 * - Bystronic Cutting Parameter Handbook 2024
 * - ISO 9013:2017 Thermal Cutting Classification
 * - Industry Best Practices and Field Data
 * Last Update: 2025-11-02
 * Next Review: 2026-05-02
 */

export const PROCESS_OPTIMIZATION_VERSION = "1.0.0";
export const PROCESS_OPTIMIZATION_LAST_UPDATE = "2025-11-02";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ParameterRange {
  parameter: string;
  unit: string;
  minimum: number;
  optimal: number;
  maximum: number;
  tolerance: number;
  notes: string;
}

export interface ParameterAdjustment {
  parameter: string;
  direction: 'increase' | 'decrease' | 'adjust';
  amount: string;
  priority: number;
}

export interface RootCause {
  cause: string;
  likelihood: number; // percentage
  diagnosis: string;
}

export interface Solution {
  solution: string;
  parameterAdjustments: ParameterAdjustment[];
  effectivenessProbability: number; // percentage
  implementationTime: string;
}

export interface QualityIssue {
  issueId: string;
  symptom: string;
  severity: 'critical' | 'major' | 'minor';
  frequency: number; // percentage occurrence in field
  rootCauses: RootCause[];
  solutions: Solution[];
  quantitativeMetrics?: {
    measurementMethod: string;
    acceptableRange: string;
    rejectionThreshold: string;
  };
}

export interface MaterialOptimizationGuideline {
  materialName: string;
  materialId: string;
  assistGas: string;
  gasPurity?: string;
  pressureRange: {
    minimum: number;
    optimal: number;
    maximum: number;
    unit: string;
  };
  focusRange: {
    minimum: number;
    optimal: number;
    maximum: number;
    unit: string;
  };
  speedAdjustment: string;
  powerAdjustment: string;
  qualityGradeAchievable: string;
  specialConsiderations: string[];
  commonChallenges: string[];
}

export interface SpeedQualityCostTradeoff {
  scenario: string;
  speedLevel: 'low' | 'medium' | 'high' | 'maximum';
  qualityGrade: string;
  relativeCost: number; // percentage, 100 = baseline
  gasConsumption: number; // relative
  powerConsumption: number; // relative
  consumableWear: number; // relative
  throughput: number; // parts per hour, relative
  bestFor: string;
}

export interface CostComponent {
  component: string;
  percentageMin: number;
  percentageMax: number;
  typicalPercentage: number;
  optimizationStrategies: string[];
  savingsPotential: string;
}

export interface ProcessDatabaseField {
  fieldName: string;
  dataType: string;
  required: boolean;
  description: string;
  exampleValue: string;
}

export interface KPIMetric {
  metricName: string;
  description: string;
  calculationMethod: string;
  targetValue: string;
  measurementFrequency: string;
  improvementActions: string[];
}

// ============================================================================
// PARAMETER OPTIMIZATION RANGES
// ============================================================================

export const PARAMETER_OPTIMIZATION_RANGES: Record<string, ParameterRange[]> = {
  'mild-steel-oxygen': [
    {
      parameter: 'Cutting Speed',
      unit: 'm/min',
      minimum: 0.5,
      optimal: 3.5,
      maximum: 15.0,
      tolerance: 0.5,
      notes: 'Thickness and power dependent. Higher speeds possible with high power lasers.'
    },
    {
      parameter: 'Gas Pressure',
      unit: 'bar',
      minimum: 0.5,
      optimal: 2.5,
      maximum: 6.0,
      tolerance: 0.3,
      notes: 'Increases with thickness. 0.5-1.5 bar for thin (<3mm), 2-4 bar for medium (3-10mm), 4-6 bar for thick (>10mm).'
    },
    {
      parameter: 'Focus Position',
      unit: 'mm',
      minimum: -4.0,
      optimal: -1.0,
      maximum: 1.0,
      tolerance: 0.5,
      notes: 'Negative (below surface) for thick plates. Zero to slightly negative for thin plates.'
    },
    {
      parameter: 'Nozzle Diameter',
      unit: 'mm',
      minimum: 1.0,
      optimal: 1.5,
      maximum: 3.0,
      tolerance: 0.1,
      notes: 'Smaller nozzles (1.0-1.5mm) for thin material, larger (2.0-3.0mm) for thick plates.'
    },
    {
      parameter: 'Nozzle Standoff',
      unit: 'mm',
      minimum: 0.5,
      optimal: 1.0,
      maximum: 2.0,
      tolerance: 0.2,
      notes: 'Distance from nozzle to workpiece. Closer for thin, farther for thick material.'
    }
  ],
  'stainless-steel-nitrogen': [
    {
      parameter: 'Cutting Speed',
      unit: 'm/min',
      minimum: 0.4,
      optimal: 2.5,
      maximum: 10.0,
      tolerance: 0.4,
      notes: '30-40% slower than oxygen cutting due to inert gas. High-pressure nitrogen enables faster speeds.'
    },
    {
      parameter: 'Gas Pressure',
      unit: 'bar',
      minimum: 10.0,
      optimal: 16.0,
      maximum: 22.0,
      tolerance: 1.0,
      notes: 'High pressure critical for melt ejection. 12-16 bar for thin, 16-20 bar for thick. Grade 1 quality requires 99.9%+ purity.'
    },
    {
      parameter: 'Focus Position',
      unit: 'mm',
      minimum: -1.0,
      optimal: 0.0,
      maximum: 1.0,
      tolerance: 0.3,
      notes: 'Zero or slightly positive optimal. Positive focus reduces heat input and discoloration.'
    },
    {
      parameter: 'Nozzle Diameter',
      unit: 'mm',
      minimum: 1.5,
      optimal: 2.0,
      maximum: 3.5,
      tolerance: 0.1,
      notes: 'Larger nozzles than oxygen cutting due to high gas flow requirements.'
    },
    {
      parameter: 'Nozzle Standoff',
      unit: 'mm',
      minimum: 0.8,
      optimal: 1.2,
      maximum: 2.5,
      tolerance: 0.2,
      notes: 'Slightly larger standoff for high-pressure gas flow.'
    }
  ],
  'aluminum-nitrogen': [
    {
      parameter: 'Cutting Speed',
      unit: 'm/min',
      minimum: 0.3,
      optimal: 2.0,
      maximum: 8.0,
      tolerance: 0.4,
      notes: '30-50% slower than steel due to high reflectivity and thermal conductivity. Fiber lasers strongly recommended.'
    },
    {
      parameter: 'Gas Pressure',
      unit: 'bar',
      minimum: 14.0,
      optimal: 18.0,
      maximum: 24.0,
      tolerance: 1.5,
      notes: 'Very high pressure required. 99.9%+ nitrogen purity mandatory to prevent oxidation.'
    },
    {
      parameter: 'Focus Position',
      unit: 'mm',
      minimum: 0.0,
      optimal: 0.5,
      maximum: 2.0,
      tolerance: 0.3,
      notes: 'Positive focus preferred to reduce heat accumulation and improve edge quality.'
    },
    {
      parameter: 'Nozzle Diameter',
      unit: 'mm',
      minimum: 2.0,
      optimal: 2.5,
      maximum: 4.0,
      tolerance: 0.1,
      notes: 'Large nozzles for high gas flow. Critical for reflectivity management.'
    },
    {
      parameter: 'Nozzle Standoff',
      unit: 'mm',
      minimum: 1.0,
      optimal: 1.5,
      maximum: 3.0,
      tolerance: 0.3,
      notes: 'Larger standoff for high-pressure, high-flow gas delivery.'
    }
  ]
};

// ============================================================================
// QUALITY TROUBLESHOOTING MATRIX
// ============================================================================

export const QUALITY_TROUBLESHOOTING_MATRIX: QualityIssue[] = [
  {
    issueId: 'Q001',
    symptom: 'Burrs on Cut Edge',
    severity: 'major',
    frequency: 35,
    rootCauses: [
      {
        cause: 'Incorrect focus position',
        likelihood: 40,
        diagnosis: 'Perform focus test cut with stepped focus positions (-2mm to +2mm in 0.5mm increments). Optimal focus shows minimal burr formation.'
      },
      {
        cause: 'Insufficient assist gas pressure',
        likelihood: 30,
        diagnosis: 'Check pressure gauge reading. Perform test cuts at +2 bar increments. Insufficient pressure leaves molten material on bottom edge.'
      },
      {
        cause: 'Cutting speed too high',
        likelihood: 20,
        diagnosis: 'Reduce speed by 15-20% and retest. High speed prevents complete melt ejection.'
      },
      {
        cause: 'Worn or contaminated nozzle',
        likelihood: 10,
        diagnosis: 'Inspect nozzle for damage, contamination, or wear. Replace if orifice is not perfectly round or has deposits.'
      }
    ],
    solutions: [
      {
        solution: 'Adjust focus position to optimal range',
        parameterAdjustments: [
          { parameter: 'Focus Position', direction: 'adjust', amount: '±0.5mm increments', priority: 1 }
        ],
        effectivenessProbability: 85,
        implementationTime: '5-10 minutes'
      },
      {
        solution: 'Increase gas pressure',
        parameterAdjustments: [
          { parameter: 'Gas Pressure', direction: 'increase', amount: '+2-4 bar', priority: 2 }
        ],
        effectivenessProbability: 75,
        implementationTime: '2-3 minutes'
      },
      {
        solution: 'Reduce cutting speed',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'decrease', amount: '-15-20%', priority: 3 }
        ],
        effectivenessProbability: 70,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Clean or replace nozzle',
        parameterAdjustments: [],
        effectivenessProbability: 90,
        implementationTime: '5-15 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Visual inspection and tactile test. Measure burr height with micrometer or caliper.',
      acceptableRange: 'Burr height <0.1mm for Grade 1, <0.3mm for Grade 2',
      rejectionThreshold: 'Burr height >0.5mm or burrs requiring secondary deburring operation'
    }
  },
  {
    issueId: 'Q002',
    symptom: 'Dross Formation on Bottom Edge',
    severity: 'major',
    frequency: 28,
    rootCauses: [
      {
        cause: 'Insufficient gas pressure or flow',
        likelihood: 45,
        diagnosis: 'Check gas supply pressure and flow rate. Verify no restrictions in gas lines or filters.'
      },
      {
        cause: 'Cutting speed too slow',
        likelihood: 25,
        diagnosis: 'Slow speed causes excessive heat buildup and melt pool accumulation. Test at +20% speed.'
      },
      {
        cause: 'Focus position too low (too negative)',
        likelihood: 20,
        diagnosis: 'Excessive negative focus concentrates energy at bottom, causing heavy melting.'
      },
      {
        cause: 'Nozzle standoff too large',
        likelihood: 10,
        diagnosis: 'Excessive standoff reduces gas pressure at cut front, reducing melt ejection efficiency.'
      }
    ],
    solutions: [
      {
        solution: 'Increase gas pressure significantly',
        parameterAdjustments: [
          { parameter: 'Gas Pressure', direction: 'increase', amount: '+3-5 bar', priority: 1 }
        ],
        effectivenessProbability: 80,
        implementationTime: '2-3 minutes'
      },
      {
        solution: 'Increase cutting speed',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'increase', amount: '+15-25%', priority: 2 }
        ],
        effectivenessProbability: 70,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Raise focus position',
        parameterAdjustments: [
          { parameter: 'Focus Position', direction: 'increase', amount: '+1 to +2mm', priority: 3 }
        ],
        effectivenessProbability: 65,
        implementationTime: '5 minutes'
      },
      {
        solution: 'Reduce nozzle standoff',
        parameterAdjustments: [
          { parameter: 'Nozzle Standoff', direction: 'decrease', amount: '-0.5mm', priority: 4 }
        ],
        effectivenessProbability: 60,
        implementationTime: '3 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Weigh dross per meter of cut or measure dross thickness with caliper.',
      acceptableRange: 'Dross mass <2g/m for Grade 1, <5g/m for Grade 2, easily removable for Grade 3',
      rejectionThreshold: 'Dross mass >10g/m or dross requiring grinding removal'
    }
  },
  {
    issueId: 'Q003',
    symptom: 'Non-Perpendicular Cut Surface (Taper)',
    severity: 'critical',
    frequency: 15,
    rootCauses: [
      {
        cause: 'Beam axis misalignment',
        likelihood: 35,
        diagnosis: 'Perform beam alignment check using alignment targets at multiple Z-heights. Beam should hit same spot.'
      },
      {
        cause: 'Nozzle not concentric with beam',
        likelihood: 30,
        diagnosis: 'Check nozzle centering using nozzle centering tool or burn pattern test on tape.'
      },
      {
        cause: 'Cutting speed too high for thickness',
        likelihood: 20,
        diagnosis: 'High speed on thick material causes lag in melt ejection, resulting in angled cut.'
      },
      {
        cause: 'Insufficient power or power density',
        likelihood: 15,
        diagnosis: 'Calculate power density. Should be >1 MW/cm² for clean cutting.'
      }
    ],
    solutions: [
      {
        solution: 'Perform full beam alignment calibration',
        parameterAdjustments: [],
        effectivenessProbability: 95,
        implementationTime: '30-60 minutes'
      },
      {
        solution: 'Center nozzle or replace with new nozzle',
        parameterAdjustments: [],
        effectivenessProbability: 85,
        implementationTime: '10-15 minutes'
      },
      {
        solution: 'Reduce cutting speed',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'decrease', amount: '-20-30%', priority: 1 }
        ],
        effectivenessProbability: 70,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Increase laser power',
        parameterAdjustments: [
          { parameter: 'Laser Power', direction: 'increase', amount: '+15-25%', priority: 2 }
        ],
        effectivenessProbability: 65,
        implementationTime: '2 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Measure perpendicularity with square or angle gauge. Calculate angle deviation from vertical.',
      acceptableRange: 'Perpendicularity tolerance u ≤0.3mm for Grade 1, ≤0.5mm for Grade 2 (per ISO 9013)',
      rejectionThreshold: 'Perpendicularity deviation >1.0mm or angle >2° from vertical'
    }
  },
  {
    issueId: 'Q004',
    symptom: 'Rough Edge Surface (Excessive Striations)',
    severity: 'major',
    frequency: 22,
    rootCauses: [
      {
        cause: 'Power instability or fluctuation',
        likelihood: 35,
        diagnosis: 'Monitor laser power output with power meter. Check for voltage fluctuations in facility power supply.'
      },
      {
        cause: 'Incorrect focus position',
        likelihood: 30,
        diagnosis: 'Focus too far from optimal creates larger spot size and reduced energy density.'
      },
      {
        cause: 'Gas pressure fluctuation',
        likelihood: 20,
        diagnosis: 'Check pressure regulator stability. Verify adequate gas supply volume.'
      },
      {
        cause: 'Cutting speed too fast',
        likelihood: 15,
        diagnosis: 'Excessive speed prevents smooth melt flow, creating wave patterns.'
      }
    ],
    solutions: [
      {
        solution: 'Stabilize laser power output',
        parameterAdjustments: [],
        effectivenessProbability: 85,
        implementationTime: '15-30 minutes (check power supply, laser cooling)'
      },
      {
        solution: 'Optimize focus position',
        parameterAdjustments: [
          { parameter: 'Focus Position', direction: 'adjust', amount: '±0.3mm increments', priority: 1 }
        ],
        effectivenessProbability: 75,
        implementationTime: '5-10 minutes'
      },
      {
        solution: 'Stabilize gas pressure',
        parameterAdjustments: [
          { parameter: 'Gas Pressure', direction: 'adjust', amount: 'Install pressure regulator or upgrade supply', priority: 2 }
        ],
        effectivenessProbability: 70,
        implementationTime: '10-20 minutes'
      },
      {
        solution: 'Reduce cutting speed',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'decrease', amount: '-10-15%', priority: 3 }
        ],
        effectivenessProbability: 65,
        implementationTime: '2 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Measure surface roughness Ra with profilometer or roughness tester.',
      acceptableRange: 'Ra ≤6.3μm for Grade 1, ≤10μm for Grade 2, ≤12.5μm for Grade 3 (ISO 9013)',
      rejectionThreshold: 'Ra >20μm or visible striation depth >0.2mm'
    }
  },
  {
    issueId: 'Q005',
    symptom: 'Heat-Affected Zone (HAZ) Too Large',
    severity: 'minor',
    frequency: 12,
    rootCauses: [
      {
        cause: 'Cutting speed too slow',
        likelihood: 45,
        diagnosis: 'Slow speed increases heat input per unit length, expanding HAZ.'
      },
      {
        cause: 'Excessive laser power',
        likelihood: 30,
        diagnosis: 'Power higher than necessary for thickness creates excess thermal energy.'
      },
      {
        cause: 'Using oxygen instead of nitrogen',
        likelihood: 15,
        diagnosis: 'Exothermic oxygen reaction adds significant heat compared to inert nitrogen.'
      },
      {
        cause: 'Multiple passes on same area',
        likelihood: 10,
        diagnosis: 'Repeated heating from multiple passes accumulates thermal energy.'
      }
    ],
    solutions: [
      {
        solution: 'Increase cutting speed',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'increase', amount: '+20-30%', priority: 1 }
        ],
        effectivenessProbability: 80,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Reduce laser power',
        parameterAdjustments: [
          { parameter: 'Laser Power', direction: 'decrease', amount: '-10-20%', priority: 2 }
        ],
        effectivenessProbability: 70,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Switch to nitrogen assist gas',
        parameterAdjustments: [
          { parameter: 'Assist Gas', direction: 'adjust', amount: 'Change from O2 to N2', priority: 3 }
        ],
        effectivenessProbability: 85,
        implementationTime: '5 minutes'
      },
      {
        solution: 'Use positive focus position',
        parameterAdjustments: [
          { parameter: 'Focus Position', direction: 'increase', amount: '+0.5 to +1.5mm', priority: 4 }
        ],
        effectivenessProbability: 60,
        implementationTime: '5 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Measure HAZ width under microscope or with metallographic analysis. Etch sample to reveal HAZ boundary.',
      acceptableRange: 'HAZ width <0.3mm for precision work, <0.5mm for general fabrication',
      rejectionThreshold: 'HAZ width >1.0mm or visible discoloration >2mm from cut edge'
    }
  },
  {
    issueId: 'Q006',
    symptom: 'Incomplete Penetration (Breakthrough Failure)',
    severity: 'critical',
    frequency: 18,
    rootCauses: [
      {
        cause: 'Insufficient laser power',
        likelihood: 40,
        diagnosis: 'Power too low for material thickness. Check power meter reading vs. specification.'
      },
      {
        cause: 'Cutting speed too fast',
        likelihood: 30,
        diagnosis: 'Insufficient dwell time for beam to penetrate full thickness.'
      },
      {
        cause: 'Focus position too high above surface',
        likelihood: 20,
        diagnosis: 'Focus above surface reduces power density at bottom of cut.'
      },
      {
        cause: 'Contaminated or damaged optics',
        likelihood: 10,
        diagnosis: 'Dirty lens or protective window reduces transmitted power by 10-30%.'
      }
    ],
    solutions: [
      {
        solution: 'Increase laser power',
        parameterAdjustments: [
          { parameter: 'Laser Power', direction: 'increase', amount: '+20-40%', priority: 1 }
        ],
        effectivenessProbability: 90,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Reduce cutting speed significantly',
        parameterAdjustments: [
          { parameter: 'Cutting Speed', direction: 'decrease', amount: '-30-50%', priority: 2 }
        ],
        effectivenessProbability: 85,
        implementationTime: '2 minutes'
      },
      {
        solution: 'Lower focus position',
        parameterAdjustments: [
          { parameter: 'Focus Position', direction: 'decrease', amount: '-1 to -3mm', priority: 3 }
        ],
        effectivenessProbability: 70,
        implementationTime: '5 minutes'
      },
      {
        solution: 'Clean or replace optics',
        parameterAdjustments: [],
        effectivenessProbability: 95,
        implementationTime: '15-30 minutes'
      }
    ],
    quantitativeMetrics: {
      measurementMethod: 'Visual inspection of bottom edge. Check for uncut sections or partial penetration.',
      acceptableRange: '100% penetration with clean through-cut',
      rejectionThreshold: 'Any section with incomplete penetration or requiring secondary cutting'
    }
  }
];

// ============================================================================
// MATERIAL-SPECIFIC OPTIMIZATION GUIDELINES
// ============================================================================

export const MATERIAL_OPTIMIZATION_GUIDELINES: MaterialOptimizationGuideline[] = [
  {
    materialName: 'Mild Steel (Carbon Steel)',
    materialId: 'mild-steel',
    assistGas: 'Oxygen (O2)',
    gasPurity: '99.5%+ recommended',
    pressureRange: {
      minimum: 0.5,
      optimal: 2.5,
      maximum: 6.0,
      unit: 'bar'
    },
    focusRange: {
      minimum: -4.0,
      optimal: -1.0,
      maximum: 1.0,
      unit: 'mm'
    },
    speedAdjustment: 'Baseline speed. Up to 50% faster than nitrogen cutting on same material.',
    powerAdjustment: 'Standard power levels. Exothermic oxygen reaction reduces power requirement by 20-30% vs nitrogen.',
    qualityGradeAchievable: 'ISO 9013 Grade 2-3 typical. Grade 1 difficult due to oxidation layer.',
    specialConsiderations: [
      'Oxidation layer on cut edge is normal and acceptable for most applications',
      'Oxide layer can be painted or powder coated without removal',
      'Exothermic reaction generates additional heat - monitor HAZ on thin materials',
      'Lower gas cost compared to nitrogen (typically 90-95% savings)',
      'Edge may require deburring for precision assemblies'
    ],
    commonChallenges: [
      'Dross formation on bottom edge at high speeds',
      'Overburn at sharp corners due to exothermic reaction',
      'Oxide layer thickness varies with cutting parameters',
      'Material composition variations affect cutting consistency'
    ]
  },
  {
    materialName: 'Stainless Steel (304/316)',
    materialId: 'stainless-steel',
    assistGas: 'Nitrogen (N2)',
    gasPurity: '99.5%+ required, 99.9%+ for Grade 1 quality',
    pressureRange: {
      minimum: 10.0,
      optimal: 16.0,
      maximum: 22.0,
      unit: 'bar'
    },
    focusRange: {
      minimum: -1.0,
      optimal: 0.0,
      maximum: 1.0,
      unit: 'mm'
    },
    speedAdjustment: '30-40% slower than oxygen cutting due to inert gas. High-pressure nitrogen enables faster speeds.',
    powerAdjustment: 'Standard to +10% higher power vs mild steel due to higher melting point and thermal conductivity.',
    qualityGradeAchievable: 'ISO 9013 Grade 1-2 achievable with proper parameters. Bright, oxide-free edges.',
    specialConsiderations: [
      'High nitrogen pressure critical for melt ejection without oxidation',
      'Nitrogen purity directly affects edge quality and discoloration',
      'Yellow/blue discoloration indicates insufficient pressure or purity',
      'Larger nozzle diameters required for high gas flow (2.0-3.5mm)',
      'Gas cost 10-20x higher than oxygen cutting - optimize for efficiency',
      'Positive or zero focus reduces heat input and discoloration risk'
    ],
    commonChallenges: [
      'Discoloration (yellow/blue tint) from insufficient nitrogen purity',
      'High gas consumption increases operating costs significantly',
      'Dross formation if pressure too low',
      'Reflectivity can cause power instability on highly polished surfaces',
      'Thick plates (>12mm) require very high pressure (18-22 bar)'
    ]
  },
  {
    materialName: 'Aluminum (5000/6000 Series)',
    materialId: 'aluminum',
    assistGas: 'Nitrogen (N2)',
    gasPurity: '99.9%+ mandatory',
    pressureRange: {
      minimum: 14.0,
      optimal: 18.0,
      maximum: 24.0,
      unit: 'bar'
    },
    focusRange: {
      minimum: 0.0,
      optimal: 0.5,
      maximum: 2.0,
      unit: 'mm'
    },
    speedAdjustment: '30-50% slower than steel of equivalent thickness due to high reflectivity and thermal conductivity.',
    powerAdjustment: '+30-50% higher power required vs steel. High-power fiber lasers (6kW+) strongly recommended.',
    qualityGradeAchievable: 'ISO 9013 Grade 2-3 typical. Grade 1 achievable with optimized parameters and high-power lasers.',
    specialConsiderations: [
      'Very high reflectivity (90%+) requires fiber laser wavelength (1064nm)',
      'High thermal conductivity spreads heat rapidly - requires concentrated energy',
      'Mandatory high-purity nitrogen (99.9%+) to prevent black oxidation edges',
      'Very high gas pressure (16-24 bar) essential for melt ejection',
      'Positive focus position preferred to manage heat accumulation',
      'Material purity and alloy composition significantly affect cut quality',
      'Anodized or coated aluminum may require different parameters'
    ],
    commonChallenges: [
      'Power instability from high reflectivity - can damage laser source',
      'Black oxidation edges if nitrogen purity insufficient',
      'Dross formation more common than steel due to low melting point',
      'Heat accumulation on thin sheets can cause warping',
      'Edge quality highly sensitive to material batch variations',
      'Thick aluminum (>10mm) very difficult - consider alternative processes'
    ]
  },
  {
    materialName: 'Copper and Brass',
    materialId: 'copper-brass',
    assistGas: 'Nitrogen (N2)',
    gasPurity: '99.9%+ required',
    pressureRange: {
      minimum: 16.0,
      optimal: 20.0,
      maximum: 26.0,
      unit: 'bar'
    },
    focusRange: {
      minimum: 0.0,
      optimal: 1.0,
      maximum: 2.5,
      unit: 'mm'
    },
    speedAdjustment: '40-60% slower than aluminum. Very slow cutting speeds required.',
    powerAdjustment: '+50-100% higher power than aluminum. High-power lasers (10kW+) or green lasers (532nm) recommended.',
    qualityGradeAchievable: 'ISO 9013 Grade 2-3 typical. Grade 1 difficult to achieve consistently.',
    specialConsiderations: [
      'Extremely high reflectivity (95%+) and thermal conductivity',
      'Fiber lasers (1064nm) have poor absorption - green lasers (532nm) preferred',
      'Very high power density required - often at limit of laser capability',
      'Positive focus essential to manage extreme heat accumulation',
      'Consider alternative processes (waterjet, plasma) for thick sections',
      'Brass easier to cut than pure copper due to lower thermal conductivity',
      'Material composition (copper content) dramatically affects cutting'
    ],
    commonChallenges: [
      'Extreme reflectivity risk to laser source - protective measures essential',
      'Very slow cutting speeds make process economically challenging',
      'Inconsistent cut quality due to material property variations',
      'Heavy dross formation common',
      'Thick sections (>6mm) often not feasible with standard fiber lasers',
      'High operating costs due to power and gas consumption'
    ]
  }
];

// ============================================================================
// SPEED-QUALITY-COST TRADEOFF MATRICES
// ============================================================================

export const SPEED_QUALITY_COST_TRADEOFFS: SpeedQualityCostTradeoff[] = [
  {
    scenario: 'Maximum Quality Priority',
    speedLevel: 'low',
    qualityGrade: 'ISO 9013 Grade 1',
    relativeCost: 140,
    gasConsumption: 130,
    powerConsumption: 120,
    consumableWear: 80,
    throughput: 60,
    bestFor: 'Precision parts, aerospace components, medical devices, parts requiring secondary assembly without deburring'
  },
  {
    scenario: 'Balanced Quality-Speed',
    speedLevel: 'medium',
    qualityGrade: 'ISO 9013 Grade 2',
    relativeCost: 100,
    gasConsumption: 100,
    powerConsumption: 100,
    consumableWear: 100,
    throughput: 100,
    bestFor: 'General fabrication, structural components, most industrial applications, good balance of quality and economics'
  },
  {
    scenario: 'Maximum Throughput',
    speedLevel: 'high',
    qualityGrade: 'ISO 9013 Grade 3',
    relativeCost: 85,
    gasConsumption: 80,
    powerConsumption: 110,
    consumableWear: 140,
    throughput: 160,
    bestFor: 'High-volume production, parts with secondary finishing, non-critical applications, cost-sensitive projects'
  },
  {
    scenario: 'Extreme Speed (Oxygen Cutting)',
    speedLevel: 'maximum',
    qualityGrade: 'ISO 9013 Grade 3-4',
    relativeCost: 70,
    gasConsumption: 50,
    powerConsumption: 120,
    consumableWear: 180,
    throughput: 200,
    bestFor: 'Mild steel only, parts requiring painting/coating (oxide acceptable), maximum throughput priority, low gas cost critical'
  }
];

// ============================================================================
// COST BREAKDOWN DATA
// ============================================================================

export const COST_BREAKDOWN_DATA: CostComponent[] = [
  {
    component: 'Assist Gas',
    percentageMin: 25,
    percentageMax: 50,
    typicalPercentage: 38,
    optimizationStrategies: [
      'Switch from nitrogen to oxygen for mild steel (90-95% gas cost reduction)',
      'Optimize gas pressure - avoid over-pressurization (each 2 bar excess = 15-20% waste)',
      'Implement gas flow monitoring and leak detection',
      'Consider on-site nitrogen generation for high-volume operations (payback 1-3 years)',
      'Use air assist for non-metals and non-critical applications'
    ],
    savingsPotential: '30-60% reduction possible through gas strategy optimization'
  },
  {
    component: 'Electrical Power',
    percentageMin: 18,
    percentageMax: 32,
    typicalPercentage: 24,
    optimizationStrategies: [
      'Maximize cutting speed to reduce cycle time per part',
      'Minimize idle time - implement job scheduling to reduce laser-on standby',
      'Use power-saving mode during extended breaks',
      'Optimize laser power - avoid using more power than necessary for thickness',
      'Consider time-of-use electricity rates for scheduling production'
    ],
    savingsPotential: '15-25% reduction through speed optimization and idle time management'
  },
  {
    component: 'Consumables (Nozzles, Lenses, Windows)',
    percentageMin: 12,
    percentageMax: 22,
    typicalPercentage: 17,
    optimizationStrategies: [
      'Implement preventive maintenance schedule to avoid catastrophic failures',
      'Optimize pierce strategies - reduce pierce count through common-line cutting',
      'Use protective film on lenses to extend cleaning intervals',
      'Track consumable life hours - replace based on data not guesswork',
      'Train operators on proper nozzle handling to prevent damage',
      'Maintain clean work environment to reduce lens contamination'
    ],
    savingsPotential: '20-40% reduction through lifecycle management and pierce optimization'
  },
  {
    component: 'Labor (Operator and Programming)',
    percentageMin: 8,
    percentageMax: 18,
    typicalPercentage: 12,
    optimizationStrategies: [
      'Invest in CAM/nesting software to reduce programming time by 40-60%',
      'Standardize parameter libraries - eliminate trial-and-error programming',
      'Train operators for multi-tasking (operate multiple machines)',
      'Implement automated loading/unloading for lights-out operation',
      'Use remote monitoring to reduce operator attendance time'
    ],
    savingsPotential: '25-50% reduction through automation and software tools'
  },
  {
    component: 'Machine Depreciation',
    percentageMin: 6,
    percentageMax: 15,
    typicalPercentage: 9,
    optimizationStrategies: [
      'Maximize machine utilization - aim for 60-80% productive time',
      'Extend machine life through preventive maintenance',
      'Consider leasing vs purchasing for tax and cash flow benefits',
      'Right-size equipment - avoid over-capability for typical jobs'
    ],
    savingsPotential: 'Fixed cost - optimize through utilization maximization'
  }
];

// ============================================================================
// PROCESS DATABASE SCHEMA
// ============================================================================

export const PROCESS_DATABASE_SCHEMA: ProcessDatabaseField[] = [
  { fieldName: 'Material Type', dataType: 'string', required: true, description: 'Material category', exampleValue: 'Mild Steel' },
  { fieldName: 'Material Grade', dataType: 'string', required: true, description: 'Specific grade or alloy', exampleValue: 'ASTM A36' },
  { fieldName: 'Thickness', dataType: 'number', required: true, description: 'Material thickness in mm', exampleValue: '3.0' },
  { fieldName: 'Laser Type', dataType: 'string', required: true, description: 'Laser technology', exampleValue: 'Fiber Laser' },
  { fieldName: 'Laser Power', dataType: 'string', required: true, description: 'Rated laser power', exampleValue: '6kW' },
  { fieldName: 'Cutting Speed', dataType: 'number', required: true, description: 'Cutting speed in m/min', exampleValue: '3.5' },
  { fieldName: 'Assist Gas Type', dataType: 'string', required: true, description: 'Type of assist gas', exampleValue: 'Oxygen' },
  { fieldName: 'Gas Pressure', dataType: 'number', required: true, description: 'Gas pressure in bar', exampleValue: '2.5' },
  { fieldName: 'Gas Purity', dataType: 'string', required: false, description: 'Gas purity percentage', exampleValue: '99.5%' },
  { fieldName: 'Focus Position', dataType: 'number', required: true, description: 'Focus position in mm (negative = below surface)', exampleValue: '-1.0' },
  { fieldName: 'Nozzle Type', dataType: 'string', required: true, description: 'Nozzle design type', exampleValue: 'Single-layer conical' },
  { fieldName: 'Nozzle Diameter', dataType: 'number', required: true, description: 'Nozzle orifice diameter in mm', exampleValue: '1.5' },
  { fieldName: 'Nozzle Standoff', dataType: 'number', required: true, description: 'Nozzle-to-workpiece distance in mm', exampleValue: '1.0' },
  { fieldName: 'Pierce Time', dataType: 'number', required: false, description: 'Pierce/breakthrough time in seconds', exampleValue: '0.8' },
  { fieldName: 'Pierce Power', dataType: 'number', required: false, description: 'Pierce power as % of cutting power', exampleValue: '80' },
  { fieldName: 'Lead-in Type', dataType: 'string', required: false, description: 'Lead-in approach strategy', exampleValue: 'Linear 2mm' },
  { fieldName: 'Lead-out Type', dataType: 'string', required: false, description: 'Lead-out exit strategy', exampleValue: 'Arc 1mm radius' },
  { fieldName: 'Quality Grade Achieved', dataType: 'string', required: true, description: 'ISO 9013 quality grade', exampleValue: 'Grade 2' },
  { fieldName: 'Edge Roughness Ra', dataType: 'number', required: false, description: 'Measured surface roughness in μm', exampleValue: '8.5' },
  { fieldName: 'Perpendicularity', dataType: 'number', required: false, description: 'Perpendicularity tolerance in mm', exampleValue: '0.15' },
  { fieldName: 'HAZ Width', dataType: 'number', required: false, description: 'Heat-affected zone width in mm', exampleValue: '0.3' },
  { fieldName: 'First-Pass Yield', dataType: 'number', required: false, description: 'Percentage of parts meeting spec without rework', exampleValue: '98' },
  { fieldName: 'Validation Date', dataType: 'date', required: true, description: 'Date parameters were validated', exampleValue: '2025-11-02' },
  { fieldName: 'Validated By', dataType: 'string', required: true, description: 'Operator or engineer who validated', exampleValue: 'J. Smith' },
  { fieldName: 'Notes', dataType: 'text', required: false, description: 'Additional observations or special conditions', exampleValue: 'Slight dross at corners, acceptable for application' },
  { fieldName: 'Parameter Version', dataType: 'string', required: true, description: 'Version number for change tracking', exampleValue: 'v2.1' }
];

// ============================================================================
// KPI METRICS FOR CONTINUOUS IMPROVEMENT
// ============================================================================

export const KPI_METRICS: KPIMetric[] = [
  {
    metricName: 'First-Pass Yield Rate',
    description: 'Percentage of parts that meet quality specifications without rework or scrap',
    calculationMethod: '(Parts Meeting Spec / Total Parts Produced) × 100%',
    targetValue: '≥95% for established processes, ≥90% for new processes',
    measurementFrequency: 'Daily or per job',
    improvementActions: [
      'Analyze root causes of rejects using Pareto analysis',
      'Validate and lock parameter database for proven materials',
      'Implement first-article inspection protocol',
      'Train operators on quality checkpoints',
      'Review and update parameters quarterly based on yield data'
    ]
  },
  {
    metricName: 'Average Cycle Time',
    description: 'Total time from job start to completion including setup, cutting, and part removal',
    calculationMethod: 'Total Job Time / Number of Parts Produced',
    targetValue: 'Trend downward over time. Benchmark against similar jobs.',
    measurementFrequency: 'Per job',
    improvementActions: [
      'Optimize nesting to reduce cutting path length',
      'Implement common-line cutting to reduce pierce count',
      'Standardize setups to reduce changeover time',
      'Use automated loading/unloading where feasible',
      'Analyze time breakdown: setup vs cutting vs handling'
    ]
  },
  {
    metricName: 'Material Utilization Rate',
    description: 'Percentage of sheet material converted to finished parts vs scrap',
    calculationMethod: '(Part Area / Sheet Area) × 100%',
    targetValue: '≥85% for automated nesting, ≥80% for manual nesting',
    measurementFrequency: 'Per sheet or per job',
    improvementActions: [
      'Invest in advanced nesting software',
      'Implement remnant tracking and reuse system',
      'Batch similar parts to improve nesting density',
      'Use common-line cutting where possible',
      'Track utilization by material type to identify improvement opportunities'
    ]
  },
  {
    metricName: 'Scrap Rate',
    description: 'Percentage of material or parts that become scrap due to quality defects',
    calculationMethod: '(Scrap Weight or Value / Total Material Weight or Value) × 100%',
    targetValue: '≤2% for established processes, ≤5% for new processes',
    measurementFrequency: 'Weekly or monthly',
    improvementActions: [
      'Categorize scrap by root cause (setup error, parameter issue, material defect, operator error)',
      'Implement corrective actions for top 3 scrap causes',
      'Improve first-article inspection to catch issues early',
      'Validate material certifications match parameter database',
      'Consider material testing for suspect batches'
    ]
  },
  {
    metricName: 'Parameter Drift Rate',
    description: 'Frequency of parameter adjustments required to maintain quality',
    calculationMethod: 'Number of Parameter Changes / Total Jobs × 100%',
    targetValue: '≤10% for established materials (indicates stable process)',
    measurementFrequency: 'Monthly',
    improvementActions: [
      'Investigate high drift rates - may indicate equipment issues',
      'Check for consumable wear patterns (lens contamination, nozzle wear)',
      'Verify material batch consistency with supplier',
      'Implement preventive maintenance schedule',
      'Document all parameter changes with justification for trend analysis'
    ]
  },
  {
    metricName: 'Consumable Cost per Part',
    description: 'Total consumable costs (nozzles, lenses, windows, gas) divided by parts produced',
    calculationMethod: 'Total Consumable Costs / Number of Parts',
    targetValue: 'Trend downward. Benchmark against similar parts.',
    measurementFrequency: 'Weekly or monthly',
    improvementActions: [
      'Track consumable life hours to optimize replacement timing',
      'Reduce pierce count through nesting optimization',
      'Optimize gas pressure to avoid over-consumption',
      'Implement proper handling procedures to prevent damage',
      'Consider bulk purchasing or alternative suppliers for cost reduction'
    ]
  }
];

export const DATA_DISCLAIMER = `Data Disclaimer: This process optimization data is compiled from TRUMPF Process Optimization Guide 2024, Bystronic Cutting Parameter Handbook 2024, ISO 9013:2017 standards, and industry field data. All information is for reference only. Actual parameters must be validated through testing on your specific equipment, material batches, and environmental conditions. Always refer to equipment manufacturer technical manuals and conduct first-article inspection before production runs. Data last updated: ${PROCESS_OPTIMIZATION_LAST_UPDATE}.`;


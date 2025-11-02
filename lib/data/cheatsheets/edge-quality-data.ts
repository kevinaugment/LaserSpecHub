/**
 * Laser Cutting Edge Quality Standards Data
 * Data Sources:
 * - ISO 9013:2017 - Thermal cutting classification
 * - AWS D1.1 Structural Welding Code
 * - Industry Best Practices 2024
 * - Equipment Manufacturer Quality Guidelines
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const EDGE_QUALITY_VERSION = "2.0.0";
export const EDGE_QUALITY_LAST_UPDATE = "2025-11-02";

export interface QualityCharacteristics {
  perpendicularity: string;
  roughnessRa: string;
  roughnessRz5: string; // ISO 9013:2017 primary metric
  dross: string;
  kerfWidth: string;
  heatAffectedZone: string;
}

export interface ThicknessTolerance {
  thicknessRange: string;
  grade1: string;
  grade2: string;
  grade3: string;
  grade4: string;
}

export interface MaterialQualityAffinity {
  material: string;
  easiestGrade: number;
  typicalGrade: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  notes: string;
}

export interface InternationalStandard {
  name: string;
  fullName: string;
  region: string;
  grade1Equivalent: string;
  grade2Equivalent: string;
  grade3Equivalent: string;
  grade4Equivalent: string;
  keyDifferences: string[];
}

export interface IndustryAcceptance {
  industry: string;
  typicalGrade: number;
  minimumGrade: number;
  criticalParameters: string[];
  notes: string;
}

export interface WeldingPreparation {
  weldingProcess: string;
  minimumGrade: number;
  maxRoughness: string;
  edgePreparation: string;
  requirements: string[];
}

export interface RoughnessExplanation {
  parameter: string;
  definition: string;
  measurement: string;
  typicalUse: string;
}

export interface InspectionStep {
  step: number;
  parameter: string;
  method: string;
  equipment: string;
  acceptanceCriteria: string;
  frequency: string;
}

export interface QualityGrade {
  grade: string;
  gradeNumber: number;
  description: string;
  characteristics: QualityCharacteristics;
  applications: string[];
  cuttingSpeed: 'very slow' | 'slow' | 'medium' | 'fast' | 'very fast';
  costFactor: string;
  laserParameters: {
    power: string;
    speed: string;
    focus: string;
    gas: string;
  };
  postProcessing: string;
  visualAppearance: string;
}

export interface VisualDefect {
  defect: string;
  cause: string[];
  impact: string;
  solution: string[];
  severity: 'critical' | 'major' | 'minor';
}

export interface ImprovementMethod {
  method: string;
  qualityImprovement: string;
  costIncrease: string;
  suitableFor: string[];
  result: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const ISO_9013_QUALITY_GRADES: QualityGrade[] = [
  {
    grade: "Grade 1 (Precision)",
    gradeNumber: 1,
    description: "Highest quality - precision cutting with near-mirror finish",
    characteristics: {
      perpendicularity: "±0.05mm",
      roughnessRa: "Ra 1.6-3.2 μm",
      roughnessRz5: "Rz5 10-20 μm",
      dross: "None",
      kerfWidth: "Minimal (0.1-0.2mm)",
      heatAffectedZone: "< 0.1mm"
    },
    applications: [
      "Precision mechanical parts",
      "Medical devices and instruments",
      "Aerospace components",
      "High-end jewelry",
      "Optical component frames",
      "Critical tolerance parts"
    ],
    cuttingSpeed: "slow",
    costFactor: "1.8x standard",
    laserParameters: {
      power: "Medium (optimized for quality)",
      speed: "Slow (30-50% of max)",
      focus: "Precise positioning",
      gas: "High-purity nitrogen (99.999%)"
    },
    postProcessing: "None or minimal polishing",
    visualAppearance: "Smooth, bright, nearly mirror-like edge"
  },
  {
    grade: "Grade 2 (Fine)",
    gradeNumber: 2,
    description: "High quality with excellent edge finish",
    characteristics: {
      perpendicularity: "±0.15mm",
      roughnessRa: "Ra 3.2-6.3 μm",
      roughnessRz5: "Rz5 20-40 μm",
      dross: "Minimal/trace amounts",
      kerfWidth: "Small (0.2-0.3mm)",
      heatAffectedZone: "0.1-0.2mm"
    },
    applications: [
      "Automotive parts",
      "Electronic enclosures",
      "High-grade sheet metal",
      "Appliance components",
      "Premium furniture parts",
      "Exhibition displays"
    ],
    cuttingSpeed: "medium",
    costFactor: "1.3x standard",
    laserParameters: {
      power: "Medium",
      speed: "Medium-slow (50-70% of max)",
      focus: "Standard positioning",
      gas: "Nitrogen or high-pressure air"
    },
    postProcessing: "Light deburring if needed",
    visualAppearance: "Clean, smooth edge with good finish"
  },
  {
    grade: "Grade 3 (Standard)",
    gradeNumber: 3,
    description: "Production quality - acceptable for most applications",
    characteristics: {
      perpendicularity: "±0.30mm",
      roughnessRa: "Ra 6.3-12.5 μm",
      roughnessRz5: "Rz5 40-100 μm",
      dross: "Small amount acceptable",
      kerfWidth: "Normal (0.3-0.5mm)",
      heatAffectedZone: "0.2-0.5mm"
    },
    applications: [
      "Construction hardware",
      "Mechanical frames",
      "Standard sheet metal parts",
      "HVAC components",
      "General fabrication",
      "Structural supports"
    ],
    cuttingSpeed: "fast",
    costFactor: "1.0x (baseline)",
    laserParameters: {
      power: "Medium-high",
      speed: "Fast (70-90% of max)",
      focus: "Standard",
      gas: "Oxygen or compressed air"
    },
    postProcessing: "Standard deburring",
    visualAppearance: "Acceptable edge with visible striations"
  },
  {
    grade: "Grade 4 (Economy)",
    gradeNumber: 4,
    description: "Rough cutting for non-critical applications",
    characteristics: {
      perpendicularity: "±0.50mm",
      roughnessRa: "Ra 12.5-25 μm",
      roughnessRz5: "Rz5 100-160 μm",
      dross: "Moderate amount",
      kerfWidth: "Wide (0.5-0.8mm)",
      heatAffectedZone: "0.5-1.0mm"
    },
    applications: [
      "Construction site temporary parts",
      "Raw material blanking",
      "Non-critical components",
      "Rough prototypes",
      "Scrap processing",
      "Internal support structures"
    ],
    cuttingSpeed: "very fast",
    costFactor: "0.6x standard",
    laserParameters: {
      power: "High",
      speed: "Very fast (90-100% of max)",
      focus: "Loose tolerance",
      gas: "Oxygen or low-pressure air"
    },
    postProcessing: "Heavy grinding/machining required",
    visualAppearance: "Rough edge with significant dross"
  }
];

export const VISUAL_DEFECTS: VisualDefect[] = [
  {
    defect: "Dross/Slag Attachment",
    cause: [
      "Insufficient assist gas pressure",
      "Cutting speed too slow",
      "Gas nozzle too far from workpiece",
      "Worn or damaged nozzle",
      "Laser power too high"
    ],
    impact: "Requires manual removal, poor edge quality, welding preparation needed",
    solution: [
      "Increase assist gas pressure by 10-20%",
      "Increase cutting speed by 5-10%",
      "Reduce nozzle-to-workpiece distance",
      "Replace nozzle if damaged",
      "Optimize focus position"
    ],
    severity: "major"
  },
  {
    defect: "Excessive Striations (Drag Lines)",
    cause: [
      "Cutting speed too fast",
      "Laser power insufficient",
      "Poor gas flow dynamics",
      "Incorrect focus position",
      "Material thickness near limit"
    ],
    impact: "Poor surface finish, reduced part quality, cosmetic issues",
    solution: [
      "Reduce cutting speed by 10-15%",
      "Increase laser power",
      "Check and optimize gas flow",
      "Adjust focus to optimal position",
      "Use higher power laser for thick materials"
    ],
    severity: "minor"
  },
  {
    defect: "Edge Burning/Oxidation",
    cause: [
      "Oxygen assist gas on stainless steel",
      "Excessive heat input",
      "Cutting speed too slow",
      "Laser power too high",
      "Poor material quality"
    ],
    impact: "Discoloration, oxidation, material property degradation, welding issues",
    solution: [
      "Switch to nitrogen assist gas",
      "Increase cutting speed",
      "Reduce laser power",
      "Optimize parameters for material",
      "Use compressed air for thin materials"
    ],
    severity: "major"
  },
  {
    defect: "Non-Perpendicular Cut (Taper)",
    cause: [
      "Focus lens misalignment",
      "Cutting head not level",
      "Material warping during cut",
      "Thermal distortion",
      "Beam quality issues"
    ],
    impact: "Assembly difficulties, dimensional inaccuracy, welding problems",
    solution: [
      "Calibrate and align optical path",
      "Level cutting head properly",
      "Use fixturing to prevent warping",
      "Adjust cutting parameters",
      "Service laser resonator if needed"
    ],
    severity: "critical"
  },
  {
    defect: "Kerf Width Variation",
    cause: [
      "Inconsistent material thickness",
      "Power fluctuations",
      "Speed variations",
      "Machine mechanical issues",
      "Thermal lens effects"
    ],
    impact: "Dimensional inaccuracy, assembly issues, part rejection",
    solution: [
      "Use consistent material stock",
      "Check power supply stability",
      "Verify motion system accuracy",
      "Regular machine maintenance",
      "Monitor and control laser temperature"
    ],
    severity: "major"
  },
  {
    defect: "Micro-Cracks at Edge",
    cause: [
      "Excessive thermal stress",
      "Rapid cooling",
      "Material susceptibility (high carbon steel)",
      "Thick material sections",
      "Improper gas selection"
    ],
    impact: "Structural weakness, crack propagation, part failure risk",
    solution: [
      "Preheat material if possible",
      "Reduce cutting speed for controlled cooling",
      "Use nitrogen to reduce oxidation stress",
      "Material pre-selection",
      "Post-cut stress relief if needed"
    ],
    severity: "critical"
  },
  {
    defect: "Burr Formation",
    cause: [
      "Low assist gas pressure",
      "Dull or contaminated lens",
      "Incorrect focus position",
      "Material properties (sticky materials)",
      "Cutting speed-power mismatch"
    ],
    impact: "Requires deburring, handling hazards, assembly interference",
    solution: [
      "Increase gas pressure",
      "Clean or replace focusing lens",
      "Optimize focus position",
      "Adjust speed-power relationship",
      "Use nitrogen for cleaner cuts"
    ],
    severity: "minor"
  }
];

export const IMPROVEMENT_METHODS: ImprovementMethod[] = [
  {
    method: "High-Pressure Nitrogen Cutting",
    qualityImprovement: "Grade 3 → Grade 1-2",
    costIncrease: "+40-60% (gas cost)",
    suitableFor: ["Stainless steel", "Aluminum", "Titanium"],
    result: "Oxide-free, bright edge with minimal post-processing",
    difficulty: "easy"
  },
  {
    method: "Multiple-Pass Cutting",
    qualityImprovement: "Grade 3 → Grade 2",
    costIncrease: "+30-50% (time)",
    suitableFor: ["Thick materials >15mm", "High-precision requirements"],
    result: "Improved perpendicularity and reduced HAZ",
    difficulty: "medium"
  },
  {
    method: "Pierce-Away Strategy",
    qualityImprovement: "Eliminates pierce damage",
    costIncrease: "+10-15% (material waste)",
    suitableFor: ["Precision parts", "Visible surfaces"],
    result: "No pierce marks on finished part",
    difficulty: "easy"
  },
  {
    method: "Adaptive Power Control",
    qualityImprovement: "Grade 3 → Grade 2",
    costIncrease: "+5-10% (programming time)",
    suitableFor: ["Corners and complex shapes", "Variable thickness"],
    result: "Consistent quality through entire cut path",
    difficulty: "hard"
  },
  {
    method: "Beam Shaping Optics",
    qualityImprovement: "Grade 2 → Grade 1",
    costIncrease: "+$5,000-15,000 (equipment)",
    suitableFor: ["High-volume precision cutting"],
    result: "Ultra-fine edge quality and minimal HAZ",
    difficulty: "hard"
  },
  {
    method: "Pre-Heating Material",
    qualityImprovement: "Reduces thermal stress cracks",
    costIncrease: "+20-30% (time + equipment)",
    suitableFor: ["Thick steel >20mm", "High-carbon materials"],
    result: "Crack-free edges and reduced distortion",
    difficulty: "medium"
  }
];

export const MEASUREMENT_METHODS = [
  {
    parameter: "Surface Roughness (Ra)",
    method: "Contact or optical profilometer",
    standard: "ISO 4287",
    frequency: "Sample-based QC or every batch"
  },
  {
    parameter: "Perpendicularity",
    method: "Dial indicator or CMM measurement",
    standard: "ISO 9013",
    frequency: "First article and periodic checks"
  },
  {
    parameter: "Dross Height",
    method: "Visual inspection and go/no-go gauge",
    standard: "ISO 9013",
    frequency: "Every part or sampling"
  },
  {
    parameter: "Heat Affected Zone",
    method: "Metallographic cross-section analysis",
    standard: "Microscopy per ASTM E3",
    frequency: "Qualification and periodic audits"
  },
  {
    parameter: "Kerf Width",
    method: "Optical microscope or caliper",
    standard: "Company specification",
    frequency: "First article and process control"
  }
];

export function getGradeByNumber(gradeNumber: number): QualityGrade | null {
  return ISO_9013_QUALITY_GRADES.find(g => g.gradeNumber === gradeNumber) || null;
}

export function getDefectsBySeverity(severity: 'critical' | 'major' | 'minor'): VisualDefect[] {
  return VISUAL_DEFECTS.filter(d => d.severity === severity);
}

export const DATA_DISCLAIMER = `Data Disclaimer: This edge quality data is based on ISO 9013:2017 international standard and industry best practices, for reference only. Actual quality grades and acceptance criteria depend on specific application requirements, customer specifications, and industry standards. Always refer to applicable standards and customer drawings. Data last updated: ${EDGE_QUALITY_LAST_UPDATE}.`;

// Roughness Measurement Comparison
export const ROUGHNESS_COMPARISON: RoughnessExplanation[] = [
  {
    parameter: "Ra (Arithmetic Average)",
    definition: "Average of absolute values of profile heights over evaluation length",
    measurement: "Most common roughness parameter, easy to measure with contact profilometer",
    typicalUse: "General surface finish specification, machining quality control"
  },
  {
    parameter: "Rz5 (Mean Height)",
    definition: "Average of 5 largest peak-to-valley heights within sampling length",
    measurement: "ISO 9013:2017 primary metric for thermal cutting edge quality",
    typicalUse: "Thermal cutting quality classification, captures extreme variations"
  }
];

// Thickness-Dependent Perpendicularity Tolerances (ISO 9013:2017)
export const THICKNESS_TOLERANCES: ThicknessTolerance[] = [
  {
    thicknessRange: "0.5 - 3mm",
    grade1: "±0.05mm",
    grade2: "±0.10mm",
    grade3: "±0.20mm",
    grade4: "±0.40mm"
  },
  {
    thicknessRange: "3 - 10mm",
    grade1: "±0.05mm",
    grade2: "±0.15mm",
    grade3: "±0.30mm",
    grade4: "±0.50mm"
  },
  {
    thicknessRange: "10 - 20mm",
    grade1: "±0.08mm",
    grade2: "±0.20mm",
    grade3: "±0.40mm",
    grade4: "±0.70mm"
  },
  {
    thicknessRange: "20 - 32mm",
    grade1: "±0.10mm",
    grade2: "±0.25mm",
    grade3: "±0.50mm",
    grade4: "±0.90mm"
  }
];

// Material-Specific Quality Affinity
export const MATERIAL_QUALITY_MATRIX: MaterialQualityAffinity[] = [
  {
    material: "Mild Steel",
    easiestGrade: 3,
    typicalGrade: 3,
    difficulty: 'easy',
    notes: "Excellent cut quality with oxygen assist. Grade 2-3 achievable with standard parameters"
  },
  {
    material: "Stainless Steel 304/316",
    easiestGrade: 2,
    typicalGrade: 2,
    difficulty: 'medium',
    notes: "Requires nitrogen for Grade 1-2. Prone to oxidation with oxygen assist"
  },
  {
    material: "Aluminum 5052/6061",
    easiestGrade: 2,
    typicalGrade: 2,
    difficulty: 'medium',
    notes: "Nitrogen or high-pressure air recommended. Reflective surface requires beam control"
  },
  {
    material: "Copper/Brass",
    easiestGrade: 3,
    typicalGrade: 3,
    difficulty: 'difficult',
    notes: "High thermal conductivity and reflectivity. Fiber laser preferred over CO₂"
  },
  {
    material: "Titanium",
    easiestGrade: 2,
    typicalGrade: 2,
    difficulty: 'medium',
    notes: "Argon or nitrogen assist required. Careful parameter control to prevent ignition"
  },
  {
    material: "Galvanized Steel",
    easiestGrade: 3,
    typicalGrade: 3,
    difficulty: 'easy',
    notes: "Zinc coating vaporization affects cut quality. Air or nitrogen recommended"
  }
];

// International Standards Comparison
export const INTERNATIONAL_STANDARDS: InternationalStandard[] = [
  {
    name: "ISO 9013:2017",
    fullName: "ISO 9013:2017 Thermal Cutting - Classification of thermal cuts",
    region: "International",
    grade1Equivalent: "Grade 1",
    grade2Equivalent: "Grade 2",
    grade3Equivalent: "Grade 3",
    grade4Equivalent: "Grade 4",
    keyDifferences: [
      "Primary standard for thermal cutting worldwide",
      "Uses Rz5 as primary roughness metric",
      "Applies to laser, plasma, and oxyfuel cutting",
      "Thickness range: 0.5-32mm for laser"
    ]
  },
  {
    name: "AWS D1.1",
    fullName: "AWS D1.1 Structural Welding Code - Steel",
    region: "North America",
    grade1Equivalent: "N/A",
    grade2Equivalent: "Acceptable for welding",
    grade3Equivalent: "May require prep",
    grade4Equivalent: "Requires preparation",
    keyDifferences: [
      "Focus on weldability, not cutting quality",
      "Specifies edge preparation requirements",
      "Dross must be removed for welding",
      "Perpendicularity critical for groove welds"
    ]
  },
  {
    name: "EN 1090",
    fullName: "EN 1090 Execution of steel structures",
    region: "Europe",
    grade1Equivalent: "EXC4",
    grade2Equivalent: "EXC3",
    grade3Equivalent: "EXC2",
    grade4Equivalent: "EXC1",
    keyDifferences: [
      "Execution class system (EXC1-4)",
      "Higher numbers = higher quality requirements",
      "Covers entire fabrication process",
      "CE marking compliance required"
    ]
  },
  {
    name: "JIS B0417",
    fullName: "JIS B0417 Laser processing machines - Vocabulary",
    region: "Japan",
    grade1Equivalent: "Class A",
    grade2Equivalent: "Class B",
    grade3Equivalent: "Class C",
    grade4Equivalent: "Class D",
    keyDifferences: [
      "Japanese Industrial Standard",
      "Similar criteria to ISO 9013",
      "Widely used in Asia-Pacific",
      "Compatible with ISO standards"
    ]
  }
];

// Industry-Specific Acceptance Criteria
export const INDUSTRY_ACCEPTANCE: IndustryAcceptance[] = [
  {
    industry: "Aerospace",
    typicalGrade: 1,
    minimumGrade: 1,
    criticalParameters: ["Perpendicularity", "HAZ depth", "Micro-cracks", "Surface roughness"],
    notes: "Strictest requirements. Grade 1 mandatory. 100% edge inspection required. Metallurgical analysis for critical parts"
  },
  {
    industry: "Medical Devices",
    typicalGrade: 1,
    minimumGrade: 1,
    criticalParameters: ["Surface finish", "Cleanliness", "Burr-free edges", "HAZ minimal"],
    notes: "Grade 1 required for surgical instruments and implants. Biocompatibility and sterilization considerations"
  },
  {
    industry: "Automotive (Structural)",
    typicalGrade: 2,
    minimumGrade: 2,
    criticalParameters: ["Perpendicularity", "Weldability", "Dross removal"],
    notes: "Grade 2 for safety-critical components. Grade 3 acceptable for non-structural parts"
  },
  {
    industry: "Electronics Enclosures",
    typicalGrade: 2,
    minimumGrade: 2,
    criticalParameters: ["Burr-free edges", "Dimensional accuracy", "Surface appearance"],
    notes: "Grade 2 for visible surfaces. Grade 3 acceptable for internal brackets"
  },
  {
    industry: "Construction & HVAC",
    typicalGrade: 3,
    minimumGrade: 3,
    criticalParameters: ["Weldability", "Structural integrity", "Cost efficiency"],
    notes: "Grade 3 standard for most applications. Grade 4 acceptable for rough blanking"
  },
  {
    industry: "Furniture & Displays",
    typicalGrade: 2,
    minimumGrade: 2,
    criticalParameters: ["Surface appearance", "Burr-free", "Minimal oxidation"],
    notes: "Grade 2 for visible edges. Nitrogen cutting for stainless steel displays"
  }
];

// Welding Edge Preparation Requirements
export const WELDING_EDGE_REQUIREMENTS: WeldingPreparation[] = [
  {
    weldingProcess: "GMAW (MIG/MAG)",
    minimumGrade: 2,
    maxRoughness: "Ra 12.5 μm",
    edgePreparation: "Dross-free, light deburring",
    requirements: [
      "Remove all dross and slag",
      "Smooth burrs that interfere with fit-up",
      "Clean oxidation for critical welds",
      "Grade 2-3 acceptable for most applications"
    ]
  },
  {
    weldingProcess: "GTAW (TIG)",
    minimumGrade: 1,
    maxRoughness: "Ra 6.3 μm",
    edgePreparation: "Mirror-smooth, zero dross",
    requirements: [
      "Grade 1-2 mandatory for quality welds",
      "Absolutely no dross or contamination",
      "Minimal HAZ to prevent brittleness",
      "Nitrogen cutting recommended for stainless"
    ]
  },
  {
    weldingProcess: "SMAW (Stick)",
    minimumGrade: 3,
    maxRoughness: "Ra 25 μm",
    edgePreparation: "Basic cleaning adequate",
    requirements: [
      "Grade 3-4 acceptable",
      "Remove loose dross only",
      "Flux compensates for surface contamination",
      "Most forgiving welding process"
    ]
  },
  {
    weldingProcess: "Laser/Electron Beam",
    minimumGrade: 1,
    maxRoughness: "Ra 3.2 μm",
    edgePreparation: "Perfect cleanliness required",
    requirements: [
      "Grade 1 mandatory",
      "Zero dross, oxidation, or contamination",
      "Precise edge geometry critical",
      "Tight fit-up tolerances < 0.1mm"
    ]
  },
  {
    weldingProcess: "Resistance (Spot/Seam)",
    minimumGrade: 2,
    maxRoughness: "Ra 12.5 μm",
    edgePreparation: "Clean surface contact",
    requirements: [
      "Grade 2-3 acceptable",
      "Remove oxidation and scale",
      "Edge quality less critical than surface",
      "Focus on metal-to-metal contact"
    ]
  }
];

// Quality Inspection Checklist
export const QUALITY_INSPECTION_STEPS: InspectionStep[] = [
  {
    step: 1,
    parameter: "Visual Inspection",
    method: "Naked eye and magnifying glass",
    equipment: "10x magnifier, adequate lighting",
    acceptanceCriteria: "No visible cracks, burns, or excessive dross per grade specification",
    frequency: "Every part or 100% sampling"
  },
  {
    step: 2,
    parameter: "Dross Height",
    method: "Go/no-go gauge or scraper test",
    equipment: "Dross gauge, scraper",
    acceptanceCriteria: "Grade 1: None, Grade 2: <0.1mm, Grade 3: <0.3mm, Grade 4: <0.5mm",
    frequency: "Every part or statistical sampling"
  },
  {
    step: 3,
    parameter: "Perpendicularity",
    method: "Dial indicator or square measurement",
    equipment: "Dial indicator, engineer's square, CMM",
    acceptanceCriteria: "Within tolerance for material thickness and grade (see THICKNESS_TOLERANCES)",
    frequency: "First article, then every 50 parts or shift"
  },
  {
    step: 4,
    parameter: "Surface Roughness (Ra/Rz5)",
    method: "Contact or optical profilometer",
    equipment: "Surface profilometer (Mitutoyo, Mahr, etc.)",
    acceptanceCriteria: "Within specified Ra/Rz5 range for grade",
    frequency: "Sample basis: 1 per batch or process validation"
  },
  {
    step: 5,
    parameter: "Dimensional Accuracy",
    method: "Caliper or CMM measurement",
    equipment: "Digital caliper, CMM, optical comparator",
    acceptanceCriteria: "Within drawing tolerances ±0.1mm typical",
    frequency: "First article, then sampling per quality plan"
  },
  {
    step: 6,
    parameter: "Kerf Width Consistency",
    method: "Measure kerf at multiple locations",
    equipment: "Optical microscope or caliper",
    acceptanceCriteria: "Variation <10% along cut length",
    frequency: "Process validation and troubleshooting"
  },
  {
    step: 7,
    parameter: "Heat Affected Zone",
    method: "Metallographic cross-section",
    equipment: "Microscope, etching chemicals, polishing equipment",
    acceptanceCriteria: "HAZ depth within grade specification",
    frequency: "Initial qualification, then periodic audit"
  },
  {
    step: 8,
    parameter: "Burr Height",
    method: "Tactile inspection and measurement",
    equipment: "Micrometer, burr gauge",
    acceptanceCriteria: "Grade 1-2: <0.05mm, Grade 3: <0.15mm, Grade 4: <0.30mm",
    frequency: "Every part for safety and assembly concerns"
  }
];



























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

export const EDGE_QUALITY_VERSION = "1.0.0";
export const EDGE_QUALITY_LAST_UPDATE = "2025-10-30";

export interface QualityCharacteristics {
  perpendicularity: string;
  roughnessRa: string;
  dross: string;
  kerfWidth: string;
  heatAffectedZone: string;
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



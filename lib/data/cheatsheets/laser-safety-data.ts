/**
 * Laser Safety Classes and Protection Standards
 * Data Sources:
 * - IEC 60825-1:2014/2021 (Safety of laser products)
 * - EN 60825-1 (EU), 21 CFR 1040.10 (FDA, US)
 * - ANSI Z136 series (US), GB 7247.1-2012 (CN)
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const LASER_SAFETY_VERSION = "1.0.0";
export const LASER_SAFETY_LAST_UPDATE = "2025-10-30";

export interface LaserSafetyClass {
  class: string;
  dangerLevel: string;
  powerLimit: string;
  description: string;
  examples: string[];
  protectionRequired: string;
  workplaceRequirements: string[];
}

export interface EyeProtection {
  laserType: string;
  requiredOD: string;
  material: string;
  notes?: string;
}

export interface RegulatoryStandard {
  region: string;
  standard: string;
  authority: string;
}

export const LASER_SAFETY_CLASSES: LaserSafetyClass[] = [
  {
    class: "Class 1",
    dangerLevel: "No hazard under normal operation",
    powerLimit: "< 0.39 mW (visible)",
    description: "Safe under all reasonably foreseeable conditions of operation",
    examples: ["Laser printers", "CD/DVD players", "Fully enclosed laser systems"],
    protectionRequired: "None",
    workplaceRequirements: []
  },
  {
    class: "Class 1M",
    dangerLevel: "Hazard when viewed with optical aids",
    powerLimit: "< 0.39 mW (visible, expanded beam)",
    description: "Safe to the naked eye, hazardous with magnifiers/telescopes",
    examples: ["Some measurement devices", "Fiber communication"],
    protectionRequired: "Avoid optical viewing aids",
    workplaceRequirements: ["Warning labels"]
  },
  {
    class: "Class 2",
    dangerLevel: "Low hazard (visible only)",
    powerLimit: "< 1 mW (visible)",
    description: "Blink reflex (≤0.25 s) provides protection",
    examples: ["Pointers", "Barcode scanners"],
    protectionRequired: "Avoid deliberate staring",
    workplaceRequirements: ["Warning labels"]
  },
  {
    class: "Class 2M",
    dangerLevel: "Hazard with optical aids (visible)",
    powerLimit: "< 1 mW (visible, expanded beam)",
    description: "Blink reflex protects naked eye; optics increase hazard",
    examples: ["Construction level lasers"],
    protectionRequired: "Do not view with optical instruments",
    workplaceRequirements: ["Warning labels", "Training"]
  },
  {
    class: "Class 3R",
    dangerLevel: "Moderate risk",
    powerLimit: "< 5 mW (visible)",
    description: "Direct eye exposure hazardous; lower risk than 3B",
    examples: ["Demonstration lasers", "Alignment tools"],
    protectionRequired: "Avoid direct eye exposure",
    workplaceRequirements: ["Warning labels", "Controlled access", "Training"]
  },
  {
    class: "Class 3B",
    dangerLevel: "High hazard",
    powerLimit: "5 mW – 500 mW",
    description: "Direct eye exposure very hazardous; diffuse reflection usually safe",
    examples: ["Research lasers", "Medical lasers"],
    protectionRequired: "Laser safety eyewear required",
    workplaceRequirements: [
      "Warning signage",
      "Restricted area",
      "Key switch",
      "Interlocks",
      "Training and SOPs",
      "Laser Safety Officer"
    ]
  },
  {
    class: "Class 4",
    dangerLevel: "Extreme hazard",
    powerLimit: "> 500 mW",
    description: "Direct and diffuse reflections dangerous; fire hazard",
    examples: ["Industrial cutting/welding", "Surgical lasers"],
    protectionRequired: "Certified eyewear and PPE",
    workplaceRequirements: [
      "Enclosed cell or curtains (rated)",
      "Interlocks and E‑stop",
      "Access control",
      "Fume extraction",
      "Fire safety measures",
      "Comprehensive training",
      "LSO oversight"
    ]
  }
];

export const EYE_PROTECTION: EyeProtection[] = [
  { laserType: "CO2 (10.6 μm)", requiredOD: "OD 5+ @ 10.6 μm", material: "Polycarbonate / acrylic", notes: "Visible-light transparent" },
  { laserType: "Fiber/Nd:YAG (1064 nm)", requiredOD: "OD 7+ @ 1064 nm", material: "Special NIR filter", notes: "Near‑IR protection" },
  { laserType: "Green (532 nm)", requiredOD: "OD 4+ @ 532 nm", material: "Dyed polycarbonate", notes: "Blocks green" },
  { laserType: "UV (355 nm)", requiredOD: "OD 5+ @ 355 nm", material: "UV filter", notes: "UV protection" }
];

export const REGULATORY_STANDARDS: RegulatoryStandard[] = [
  { region: "International", standard: "IEC 60825-1:2014/2021", authority: "IEC" },
  { region: "USA", standard: "21 CFR 1040.10/.11", authority: "FDA" },
  { region: "USA", standard: "ANSI Z136 series", authority: "ANSI" },
  { region: "EU", standard: "EN 60825-1", authority: "CENELEC" },
  { region: "China", standard: "GB 7247.1-2012", authority: "SAC" }
];

export const DATA_DISCLAIMER = `Safety Notice: This information summarizes major standards (IEC 60825-1 et al.) and is for reference. Always perform a hazard evaluation, implement controls (engineering, administrative, PPE), and comply with local regulations. Last updated: ${LASER_SAFETY_LAST_UPDATE}.`;


























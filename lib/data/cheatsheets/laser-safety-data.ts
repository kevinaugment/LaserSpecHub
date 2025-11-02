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

export interface WavelengthEffect {
  wavelength: string;
  range: string;
  laserType: string;
  primaryHazard: string;
  tissueAbsorption: string;
  biologicalEffect: string;
}

export interface MPEData {
  wavelength: string;
  exposureDuration: string;
  mpeValue: string;
  unit: string;
  applicableClass: string;
}

export interface HazardDistance {
  laserClass: string;
  typicalPower: string;
  wavelength: string;
  nohdRange: string;
  notes: string;
}

export const LASER_SAFETY_CLASSES: LaserSafetyClass[] = [
  {
    class: "Class 1",
    dangerLevel: "No hazard under normal operation",
    powerLimit: "< 0.39 mW (visible)",
    description: "Safe under all reasonably foreseeable conditions of operation including use of optical instruments",
    examples: ["Laser printers", "CD/DVD players", "Enclosed fiber laser cutters", "Automated welding cells", "Barcode readers (enclosed)"],
    protectionRequired: "None",
    workplaceRequirements: []
  },
  {
    class: "Class 1M",
    dangerLevel: "Hazard when viewed with optical aids",
    powerLimit: "< 0.39 mW (visible, expanded beam)",
    description: "Safe to the naked eye, hazardous when viewed with magnifying optics or telescopes",
    examples: ["Fiber optic communication systems", "Long-distance measurement devices", "Expanded beam laser systems"],
    protectionRequired: "Avoid optical viewing aids",
    workplaceRequirements: ["Warning labels"]
  },
  {
    class: "Class 2",
    dangerLevel: "Low hazard (visible only)",
    powerLimit: "< 1 mW (visible)",
    description: "Aversion response including blink reflex (≤0.25 s) provides adequate protection",
    examples: ["Laser pointers", "Retail barcode scanners", "Alignment lasers (low power)"],
    protectionRequired: "Avoid deliberate staring",
    workplaceRequirements: ["Warning labels"]
  },
  {
    class: "Class 2M",
    dangerLevel: "Hazard with optical aids (visible)",
    powerLimit: "< 1 mW (visible, expanded beam)",
    description: "Blink reflex protects naked eye; viewing with optical instruments increases hazard",
    examples: ["Construction level lasers", "Rotary laser levels", "Line projection lasers"],
    protectionRequired: "Do not view with optical instruments",
    workplaceRequirements: ["Warning labels", "Training"]
  },
  {
    class: "Class 3R",
    dangerLevel: "Moderate risk",
    powerLimit: "< 5 mW (visible)",
    description: "Direct intrabeam viewing hazardous; risk lower than Class 3B due to power limit",
    examples: ["Laser pointers (high power)", "Demonstration lasers", "Alignment tools", "Surveying equipment"],
    protectionRequired: "Avoid direct eye exposure",
    workplaceRequirements: ["Warning labels", "Controlled access", "Training"]
  },
  {
    class: "Class 3B",
    dangerLevel: "High hazard",
    powerLimit: "5 mW – 500 mW",
    description: "Direct beam viewing extremely hazardous; diffuse reflections normally safe",
    examples: ["Laser marking systems (open beam)", "Phototherapy devices", "Research lasers", "Spectroscopy systems"],
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
    description: "Direct beam, specular and diffuse reflections hazardous; skin and fire hazard present",
    examples: ["Fiber laser cutters (3-30kW)", "CO2 laser cutters", "Nd:YAG welding lasers", "Surgical lasers", "Material processing systems"],
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

export const WAVELENGTH_EFFECTS: WavelengthEffect[] = [
  {
    wavelength: "180-280 nm",
    range: "UV-C",
    laserType: "Excimer (ArF, KrF)",
    primaryHazard: "Cornea",
    tissueAbsorption: "Corneal surface",
    biologicalEffect: "Photokeratitis, corneal burns"
  },
  {
    wavelength: "280-315 nm",
    range: "UV-B",
    laserType: "Excimer (XeCl)",
    primaryHazard: "Lens",
    tissueAbsorption: "Lens absorption",
    biologicalEffect: "Cataract formation (chronic)"
  },
  {
    wavelength: "315-400 nm",
    range: "UV-A",
    laserType: "Nd:YAG (3rd harmonic)",
    primaryHazard: "Lens/Retina",
    tissueAbsorption: "Lens and retina",
    biologicalEffect: "Photochemical retinal damage"
  },
  {
    wavelength: "400-700 nm",
    range: "Visible",
    laserType: "Diode, DPSS, Argon",
    primaryHazard: "Retina",
    tissueAbsorption: "Retinal tissue",
    biologicalEffect: "Thermal retinal burns, scotoma"
  },
  {
    wavelength: "700-1400 nm",
    range: "Near-IR",
    laserType: "Fiber, Nd:YAG, Diode",
    primaryHazard: "Retina/Lens",
    tissueAbsorption: "Retina and lens",
    biologicalEffect: "Thermal damage, cataract risk"
  },
  {
    wavelength: "1400-3000 nm",
    range: "Mid-IR",
    laserType: "Er:YAG, Tm:YAG",
    primaryHazard: "Cornea",
    tissueAbsorption: "Corneal surface",
    biologicalEffect: "Corneal burns, opacity"
  },
  {
    wavelength: "3000-10600 nm",
    range: "Far-IR",
    laserType: "CO2",
    primaryHazard: "Cornea",
    tissueAbsorption: "Corneal surface",
    biologicalEffect: "Thermal burns, scarring"
  }
];

export const MPE_DATA: MPEData[] = [
  {
    wavelength: "1064 nm",
    exposureDuration: "0.25 s (blink reflex)",
    mpeValue: "5 × 10⁻⁶",
    unit: "J/cm²",
    applicableClass: "Fiber/Nd:YAG lasers"
  },
  {
    wavelength: "1064 nm",
    exposureDuration: "10 s",
    mpeValue: "1.6 × 10⁻⁵",
    unit: "J/cm²",
    applicableClass: "Extended exposure"
  },
  {
    wavelength: "532 nm",
    exposureDuration: "0.25 s",
    mpeValue: "2.5 × 10⁻⁷",
    unit: "J/cm²",
    applicableClass: "Green lasers (visible)"
  },
  {
    wavelength: "10.6 μm",
    exposureDuration: "10 s",
    mpeValue: "100",
    unit: "mW/cm²",
    applicableClass: "CO2 lasers"
  },
  {
    wavelength: "10.6 μm",
    exposureDuration: "0.1 s",
    mpeValue: "1000",
    unit: "mW/cm²",
    applicableClass: "CO2 lasers (short pulse)"
  },
  {
    wavelength: "355 nm",
    exposureDuration: "1 ns - 10 s",
    mpeValue: "5.6 × 10⁻⁷",
    unit: "J/cm²",
    applicableClass: "UV lasers"
  }
];

export const HAZARD_DISTANCES: HazardDistance[] = [
  {
    laserClass: "Class 1",
    typicalPower: "< 0.39 mW",
    wavelength: "Any",
    nohdRange: "0 m (enclosed)",
    notes: "No hazard distance; fully enclosed systems"
  },
  {
    laserClass: "Class 2",
    typicalPower: "1 mW",
    wavelength: "Visible",
    nohdRange: "< 1 m",
    notes: "Blink reflex provides protection"
  },
  {
    laserClass: "Class 3R",
    typicalPower: "5 mW",
    wavelength: "532 nm",
    nohdRange: "10-50 m",
    notes: "Depends on beam divergence"
  },
  {
    laserClass: "Class 3B",
    typicalPower: "100 mW",
    wavelength: "1064 nm",
    nohdRange: "100-500 m",
    notes: "Requires controlled area"
  },
  {
    laserClass: "Class 4",
    typicalPower: "6 kW",
    wavelength: "1064 nm",
    nohdRange: "> 1000 m",
    notes: "Enclosure mandatory; diffuse reflection hazard"
  },
  {
    laserClass: "Class 4",
    typicalPower: "12 kW",
    wavelength: "10.6 μm",
    nohdRange: "> 500 m",
    notes: "Atmospheric absorption reduces range for CO2"
  }
];

export const DATA_DISCLAIMER = `Safety Notice: This information summarizes major standards (IEC 60825-1 et al.) and is for reference. Always perform a hazard evaluation, implement controls (engineering, administrative, PPE), and comply with local regulations. Last updated: ${LASER_SAFETY_LAST_UPDATE}.`;


























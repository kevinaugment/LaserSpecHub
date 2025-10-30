/**
 * Laser Focusing Lens Specifications Data
 * Data Sources:
 * - II-VI Incorporated Optics Catalog 2024
 * - Ophir Optronics Laser Optics Handbook
 * - Thorlabs Optics Specifications
 * - Industry Standard Practice for Laser Processing
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const LENS_SPECS_VERSION = "1.0.0";
export const LENS_SPECS_LAST_UPDATE = "2025-10-30";

export interface ThicknessCapability {
  metal: string;
  nonMetal: string;
}

export interface LensSpecification {
  focalLength: string;
  focalLengthMm: number;
  spotSize: string;
  depthOfFocus: string;
  bestFor: string;
  applications: string[];
  maxThickness: ThicknessCapability;
  advantages: string[];
  disadvantages: string[];
  typicalUse: string;
  powerDensity: string;
  workingDistance: string;
}

export interface LensMaterial {
  material: string;
  wavelength: string;
  transmittance: string;
  durability: 'low' | 'medium' | 'high';
  cost: 'low' | 'medium' | 'high';
  notes: string;
}

export const LENS_FOCAL_LENGTHS: LensSpecification[] = [
  {
    focalLength: "50mm (2 inch)",
    focalLengthMm: 50,
    spotSize: "0.05-0.08mm",
    depthOfFocus: "±0.5mm",
    bestFor: "Precision cutting of thin materials",
    applications: [
      "Electronic components (PCB)",
      "Precision mechanical parts",
      "Thin stainless steel (<2mm)",
      "Medical devices",
      "Jewelry and fine details",
      "Micro-cutting applications"
    ],
    maxThickness: {
      metal: "1-3mm",
      nonMetal: "5mm"
    },
    advantages: [
      "Smallest spot size - highest precision",
      "Excellent for fine details",
      "Minimal heat affected zone",
      "Clean, narrow kerf width",
      "Ideal for intricate patterns"
    ],
    disadvantages: [
      "Very small depth of focus",
      "Highly sensitive to height variations",
      "Not suitable for thick materials",
      "Requires precise height control",
      "Limited production speed"
    ],
    typicalUse: "High-precision, thin material applications",
    powerDensity: "Very High (>5 MW/mm²)",
    workingDistance: "~40-45mm"
  },
  {
    focalLength: "75mm (3 inch)",
    focalLengthMm: 75,
    spotSize: "0.08-0.12mm",
    depthOfFocus: "±0.8mm",
    bestFor: "Thin to medium thickness with good precision",
    applications: [
      "Sheet metal fabrication",
      "Signage and branding",
      "Decorative metalwork",
      "Thin structural components",
      "Prototype manufacturing",
      "Small batch production"
    ],
    maxThickness: {
      metal: "3-6mm",
      nonMetal: "10mm"
    },
    advantages: [
      "Good balance of precision and tolerance",
      "Suitable for most thin materials",
      "Moderate depth of focus",
      "Versatile for various applications",
      "Cost-effective"
    ],
    disadvantages: [
      "Not optimal for very thin or very thick",
      "Moderate power density",
      "May be too precise for rough work"
    ],
    typicalUse: "General thin-medium material cutting",
    powerDensity: "High (3-5 MW/mm²)",
    workingDistance: "~65-70mm"
  },
  {
    focalLength: "127mm (5 inch)",
    focalLengthMm: 127,
    spotSize: "0.12-0.18mm",
    depthOfFocus: "±1.5mm",
    bestFor: "Universal cutting - most common choice",
    applications: [
      "General sheet metal work",
      "Mechanical parts fabrication",
      "Mixed thickness production",
      "Job shop operations",
      "Structural steel cutting",
      "Standard industrial applications"
    ],
    maxThickness: {
      metal: "6-15mm",
      nonMetal: "20mm"
    },
    advantages: [
      "Industry standard - most versatile",
      "Good depth of focus tolerance",
      "Suitable for wide thickness range",
      "Balanced power density",
      "Easy to operate and maintain",
      "Best all-around performance"
    ],
    disadvantages: [
      "Not as precise as shorter focal lengths",
      "Larger kerf width than 50-75mm",
      "May be overkill for thin materials"
    ],
    typicalUse: "Standard industrial cutting (most popular)",
    powerDensity: "Medium-High (2-3 MW/mm²)",
    workingDistance: "~110-120mm"
  },
  {
    focalLength: "190mm (7.5 inch)",
    focalLengthMm: 190,
    spotSize: "0.18-0.25mm",
    depthOfFocus: "±2.5mm",
    bestFor: "Thick plate cutting and deep engraving",
    applications: [
      "Thick steel plate (15-25mm)",
      "Heavy machinery parts",
      "Deep engraving",
      "Structural fabrication",
      "Bridge and construction steel",
      "Marine applications"
    ],
    maxThickness: {
      metal: "15-25mm",
      nonMetal: "30mm+"
    },
    advantages: [
      "Large depth of focus",
      "Cuts thick plates effectively",
      "Tolerant to surface irregularities",
      "Good for warped materials",
      "Longer working distance"
    ],
    disadvantages: [
      "Larger spot size - lower precision",
      "Wider kerf width",
      "Lower power density",
      "Edge quality not as good",
      "Slower for thin materials"
    ],
    typicalUse: "Thick plate and heavy industrial cutting",
    powerDensity: "Medium (1-2 MW/mm²)",
    workingDistance: "~170-180mm"
  },
  {
    focalLength: "254mm (10 inch)",
    focalLengthMm: 254,
    spotSize: "0.25-0.35mm",
    depthOfFocus: "±3.5mm",
    bestFor: "Ultra-thick materials and special applications",
    applications: [
      "Extremely thick steel (>25mm)",
      "3D laser cutting (tube/pipe)",
      "Deep 3D engraving",
      "Remote laser processing",
      "Special industrial applications"
    ],
    maxThickness: {
      metal: "25mm+",
      nonMetal: "50mm+"
    },
    advantages: [
      "Maximum depth of focus",
      "Can cut extremely thick materials",
      "Very long working distance",
      "Tolerates large height variations",
      "Good for 3D cutting"
    ],
    disadvantages: [
      "Largest spot size - lowest precision",
      "Very wide kerf",
      "Lowest power density",
      "Poor edge quality",
      "Not suitable for thin materials",
      "Expensive lens"
    ],
    typicalUse: "Special applications - ultra-thick or 3D cutting",
    powerDensity: "Low (<1 MW/mm²)",
    workingDistance: "~230-240mm"
  }
];

export const LENS_MATERIALS: LensMaterial[] = [
  {
    material: "ZnSe (Zinc Selenide)",
    wavelength: "10600nm (CO2 Laser)",
    transmittance: "≥99.5%",
    durability: "medium",
    cost: "medium",
    notes: "Standard material for CO2 lasers. Good transmission, but requires regular cleaning due to coating sensitivity. Susceptible to thermal shock."
  },
  {
    material: "Fused Silica (Quartz)",
    wavelength: "1064nm (Fiber/Nd:YAG)",
    transmittance: "≥99%",
    durability: "high",
    cost: "low",
    notes: "Standard for fiber lasers. Excellent durability, resistant to thermal shock. Most cost-effective option for near-IR wavelengths."
  },
  {
    material: "BK7 Glass",
    wavelength: "532-1064nm (Visible/Near-IR)",
    transmittance: "≥98%",
    durability: "medium",
    cost: "low",
    notes: "Economic option for lower power applications. Good optical quality but lower damage threshold than fused silica."
  },
  {
    material: "Sapphire (Al₂O₃)",
    wavelength: "Multiple wavelengths",
    transmittance: "≥95%",
    durability: "high",
    cost: "high",
    notes: "Extremely durable, resistant to scratches. Used in harsh environments. Higher cost limits use to special applications."
  },
  {
    material: "Calcium Fluoride (CaF₂)",
    wavelength: "193-7000nm (UV-IR)",
    transmittance: "≥95%",
    durability: "medium",
    cost: "high",
    notes: "Excellent for UV lasers. Low absorption across wide spectrum. Hygroscopic - requires special handling."
  },
  {
    material: "Fused Silica (UV Grade)",
    wavelength: "355nm (UV Laser)",
    transmittance: "≥90%",
    durability: "high",
    cost: "high",
    notes: "Special UV-grade material for UV lasers. High purity required. Must be kept clean to prevent UV damage."
  }
];

export interface MaintenanceGuide {
  cleaningFrequency: {
    lightUse: string;
    normalUse: string;
    heavyUse: string;
  };
  cleaningMethod: string[];
  replacementIndicators: string[];
  storageGuidelines: string[];
}

export const LENS_MAINTENANCE: MaintenanceGuide = {
  cleaningFrequency: {
    lightUse: "Monthly",
    normalUse: "Weekly",
    heavyUse: "Daily or every shift"
  },
  cleaningMethod: [
    "Use lint-free optical cleaning tissue or cotton swabs",
    "Apply optical cleaning solution (isopropyl alcohol or acetone)",
    "Wipe from center outward in circular motion",
    "Never touch lens surface with fingers",
    "Inspect under bright light for scratches or pits",
    "Check coating integrity (no peeling or discoloration)"
  ],
  replacementIndicators: [
    "Visible scratches, pits, or cracks on surface",
    "Coating damage (peeling, discoloration, bubbling)",
    "Transmittance drop >10% (measured with power meter)",
    "Cutting quality degradation despite cleaning",
    "Increased power requirements for same results",
    "Frequent lens contamination"
  ],
  storageGuidelines: [
    "Store in protective case when not installed",
    "Keep in dry environment (use desiccant if needed)",
    "Avoid temperature extremes (10-30°C optimal)",
    "Label lenses with date of first use",
    "Maintain spare lenses for critical production",
    "Store away from dust and contaminants"
  ]
};

export interface LensSelectionGuide {
  material: string;
  thickness: string;
  recommendedFL: number[];
  reason: string;
}

export const LENS_SELECTION_GUIDE: LensSelectionGuide[] = [
  {
    material: "Stainless Steel",
    thickness: "0.5-2mm",
    recommendedFL: [50, 75],
    reason: "Thin material requires precision, small spot for clean cuts"
  },
  {
    material: "Stainless Steel",
    thickness: "3-8mm",
    recommendedFL: [127],
    reason: "Standard thickness - 127mm provides best balance"
  },
  {
    material: "Stainless Steel",
    thickness: "10-15mm",
    recommendedFL: [127, 190],
    reason: "Thick material needs larger depth of focus"
  },
  {
    material: "Mild Steel",
    thickness: "0.5-3mm",
    recommendedFL: [75, 127],
    reason: "Fast cutting benefits from moderate spot size"
  },
  {
    material: "Mild Steel",
    thickness: "5-12mm",
    recommendedFL: [127],
    reason: "Universal standard for common thicknesses"
  },
  {
    material: "Mild Steel",
    thickness: "15-25mm",
    recommendedFL: [190, 254],
    reason: "Thick plates require large depth of focus"
  },
  {
    material: "Aluminum",
    thickness: "0.5-3mm",
    recommendedFL: [75, 127],
    reason: "Reflective material benefits from moderate density"
  },
  {
    material: "Aluminum",
    thickness: "5-12mm",
    recommendedFL: [127, 190],
    reason: "Thicker aluminum needs tolerance for thermal distortion"
  },
  {
    material: "Acrylic/Wood",
    thickness: "Any",
    recommendedFL: [50, 75, 127],
    reason: "Non-metals flexible - choose based on detail level needed"
  }
];

// Helper functions
export function getLensByFocalLength(focalLengthMm: number): LensSpecification | null {
  return LENS_FOCAL_LENGTHS.find(l => l.focalLengthMm === focalLengthMm) || null;
}

export function getRecommendedLens(material: string, thickness: number): LensSpecification[] {
  const guides = LENS_SELECTION_GUIDE.filter(g => 
    g.material.toLowerCase().includes(material.toLowerCase())
  );
  
  const recommendations: LensSpecification[] = [];
  guides.forEach(guide => {
    guide.recommendedFL.forEach(fl => {
      const lens = getLensByFocalLength(fl);
      if (lens && !recommendations.includes(lens)) {
        recommendations.push(lens);
      }
    });
  });
  
  return recommendations;
}

export const DATA_DISCLAIMER = `Data Disclaimer: This lens specification data is compiled from major optical component manufacturers' catalogs and industry standards, for reference only. Actual performance depends on laser power, material properties, cutting parameters, and lens quality. Always follow lens manufacturer specifications and conduct test cuts. Data last updated: ${LENS_SPECS_LAST_UPDATE}.`;



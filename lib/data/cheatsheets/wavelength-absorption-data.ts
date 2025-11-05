/**
 * Laser Wavelength and Material Absorption Data
 * Data Sources:
 * - "Laser Materials Processing" by William M. Steen
 * - "Handbook of Laser Technology and Applications" Vol. II
 * - NIST Physical Reference Data
 * - Academic Research Papers on Laser-Material Interaction
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const WAVELENGTH_ABSORPTION_VERSION = "1.0.0";
export const WAVELENGTH_ABSORPTION_LAST_UPDATE = "2025-10-30";

export interface WavelengthAbsorption {
  wavelength: string;
  wavelengthNm: number;
  absorptionRate: number; // 0-100%
  quality: 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor' | 'Very Poor';
  notes?: string;
}

export interface MaterialAbsorptionData {
  materialName: string;
  materialId: string;
  category: 'ferrous-metal' | 'non-ferrous-metal' | 'non-metal';
  description: string;
  absorptionByWavelength: WavelengthAbsorption[];
  recommendedLaser: string[];
  notRecommended: string[];
}

export interface LaserTypeInfo {
  name: string;
  wavelength: string;
  wavelengthNm: number;
  color: string;
  typicalSources: string[];
  commonUses: string[];
}

// Laser Types Reference
export const LASER_TYPES: LaserTypeInfo[] = [
  {
    name: "CO2 Laser",
    wavelength: "10600nm",
    wavelengthNm: 10600,
    color: "Far Infrared",
    typicalSources: ["CO2 gas laser tube", "RF-excited CO2 laser"],
    commonUses: ["Non-metal cutting", "Acrylic", "Wood", "Plastics", "Fabrics"]
  },
  {
    name: "Fiber Laser",
    wavelength: "1064nm",
    wavelengthNm: 1064,
    color: "Near Infrared",
    typicalSources: ["Ytterbium-doped fiber", "IPG fiber laser"],
    commonUses: ["Metal cutting", "Steel", "Stainless steel", "Aluminum", "Marking"]
  },
  {
    name: "Nd:YAG Laser",
    wavelength: "1064nm",
    wavelengthNm: 1064,
    color: "Near Infrared",
    typicalSources: ["Neodymium-doped YAG crystal", "Lamp or diode pumped"],
    commonUses: ["Metal cutting", "Welding", "Deep engraving", "Medical applications"]
  },
  {
    name: "Green Laser (Frequency Doubled)",
    wavelength: "532nm",
    wavelengthNm: 532,
    color: "Green (Visible)",
    typicalSources: ["Frequency-doubled Nd:YAG", "Diode-pumped solid state"],
    commonUses: ["Copper processing", "Gold jewelry", "Precision marking", "PCB manufacturing"]
  },
  {
    name: "Blue Laser",
    wavelength: "450nm",
    wavelengthNm: 450,
    color: "Blue (Visible)",
    typicalSources: ["Gallium nitride diode laser"],
    commonUses: ["Copper welding", "Reflective materials", "Display technology"]
  },
  {
    name: "UV Laser",
    wavelength: "355nm",
    wavelengthNm: 355,
    color: "Ultraviolet (Invisible)",
    typicalSources: ["Frequency-tripled Nd:YAG", "Excimer laser"],
    commonUses: ["Micro-machining", "Silicon processing", "Medical devices", "Electronics"]
  }
];

// Material Absorption Data
export const MATERIAL_ABSORPTION_DATA: MaterialAbsorptionData[] = [
  {
    materialName: "Mild Steel (Carbon Steel)",
    materialId: "mild-steel",
    category: "ferrous-metal",
    description: "Most common structural metal, excellent laser absorption in near-IR",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 10, quality: "Poor", notes: "Requires high power" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 92, quality: "Excellent" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 65, quality: "Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 75, quality: "Very Good" }
    ],
    recommendedLaser: ["Fiber Laser (1064nm)", "Nd:YAG Laser"],
    notRecommended: ["CO2 Laser for thin sheets"]
  },
  {
    materialName: "Stainless Steel (304/316)",
    materialId: "stainless-steel",
    category: "ferrous-metal",
    description: "Corrosion-resistant alloy, similar absorption to mild steel",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 8, quality: "Poor" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 88, quality: "Excellent" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 60, quality: "Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 72, quality: "Very Good" }
    ],
    recommendedLaser: ["Fiber Laser (1064nm)", "Nd:YAG Laser"],
    notRecommended: ["CO2 Laser"]
  },
  {
    materialName: "Aluminum (5000/6000 Series)",
    materialId: "aluminum",
    category: "non-ferrous-metal",
    description: "Highly reflective, challenging for infrared lasers",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 3, quality: "Very Poor", notes: "Very high reflectivity" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 25, quality: "Fair", notes: "Requires high power" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 55, quality: "Good" },
      { wavelength: "450nm (Blue)", wavelengthNm: 450, absorptionRate: 62, quality: "Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 75, quality: "Very Good" }
    ],
    recommendedLaser: ["High-power Fiber Laser (6kW+)", "Green Laser (532nm)", "Blue Laser (450nm)"],
    notRecommended: ["Low-power CO2", "Low-power Fiber (<3kW)"]
  },
  {
    materialName: "Copper",
    materialId: "copper",
    category: "non-ferrous-metal",
    description: "Extremely reflective, requires short wavelengths or very high power",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 2, quality: "Very Poor", notes: "Nearly impossible" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 18, quality: "Poor", notes: "Requires 10kW+" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 50, quality: "Good" },
      { wavelength: "450nm (Blue)", wavelengthNm: 450, absorptionRate: 65, quality: "Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 70, quality: "Very Good" }
    ],
    recommendedLaser: ["Green Laser (532nm)", "Blue Laser (450nm)", "UV Laser (355nm)", "Ultra-high-power Fiber (15kW+)"],
    notRecommended: ["Standard Fiber Laser (<10kW)", "CO2 Laser"]
  },
  {
    materialName: "Brass (CuZn)",
    materialId: "brass",
    category: "non-ferrous-metal",
    description: "Copper-zinc alloy, slightly better absorption than pure copper",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 5, quality: "Very Poor" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 28, quality: "Fair", notes: "Possible with 6kW+" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 52, quality: "Good" },
      { wavelength: "450nm (Blue)", wavelengthNm: 450, absorptionRate: 60, quality: "Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 68, quality: "Very Good" }
    ],
    recommendedLaser: ["High-power Fiber Laser (6kW+)", "Green Laser (532nm)", "Blue Laser"],
    notRecommended: ["CO2 Laser", "Low-power Fiber"]
  },
  {
    materialName: "Titanium",
    materialId: "titanium",
    category: "non-ferrous-metal",
    description: "Excellent laser absorption, but requires inert atmosphere",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 12, quality: "Poor" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 90, quality: "Excellent", notes: "Use argon gas" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 68, quality: "Very Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 78, quality: "Very Good" }
    ],
    recommendedLaser: ["Fiber Laser with argon", "Nd:YAG Laser"],
    notRecommended: ["CO2 Laser"]
  },
  {
    materialName: "Acrylic (PMMA)",
    materialId: "acrylic",
    category: "non-metal",
    description: "Ideal material for CO2 lasers, excellent absorption and edge quality",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 95, quality: "Excellent", notes: "Polished flame-cut edges" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 5, quality: "Very Poor", notes: "Material damage" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 8, quality: "Very Poor" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 35, quality: "Fair", notes: "For marking only" }
    ],
    recommendedLaser: ["CO2 Laser (10600nm)"],
    notRecommended: ["Fiber Laser", "Nd:YAG Laser", "Green Laser"]
  },
  {
    materialName: "Polycarbonate (PC)",
    materialId: "polycarbonate",
    category: "non-metal",
    description: "Clear plastic with good CO2 absorption, but prone to yellowing",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 88, quality: "Good", notes: "May discolor" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 8, quality: "Very Poor" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 12, quality: "Poor" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 42, quality: "Fair", notes: "Marking/engraving" }
    ],
    recommendedLaser: ["CO2 Laser (caution with discoloration)"],
    notRecommended: ["Fiber Laser", "Near-IR lasers"]
  },
  {
    materialName: "Wood (Hardwood/Softwood)",
    materialId: "wood",
    category: "non-metal",
    description: "Natural material with excellent CO2 absorption",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 90, quality: "Excellent" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 12, quality: "Poor", notes: "Charring" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 18, quality: "Poor" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 38, quality: "Fair", notes: "Engraving only" }
    ],
    recommendedLaser: ["CO2 Laser"],
    notRecommended: ["Fiber Laser", "Nd:YAG Laser"]
  },
  {
    materialName: "Leather",
    materialId: "leather",
    category: "non-metal",
    description: "Organic material, ideal for CO2 laser engraving and cutting",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 92, quality: "Excellent" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 10, quality: "Very Poor" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 15, quality: "Poor" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 35, quality: "Fair" }
    ],
    recommendedLaser: ["CO2 Laser"],
    notRecommended: ["Fiber Laser", "Near-IR lasers"]
  },
  {
    materialName: "Silicon (Si)",
    materialId: "silicon",
    category: "non-metal",
    description: "Semiconductor material, wavelength-dependent absorption",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 55, quality: "Good" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 65, quality: "Good" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 75, quality: "Very Good" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 85, quality: "Excellent", notes: "Precision processing" }
    ],
    recommendedLaser: ["UV Laser (355nm)", "Green Laser", "Fiber Laser"],
    notRecommended: []
  },
  {
    materialName: "Glass (Soda-lime)",
    materialId: "glass",
    category: "non-metal",
    description: "Transparent material with selective absorption",
    absorptionByWavelength: [
      { wavelength: "10600nm (CO2)", wavelengthNm: 10600, absorptionRate: 75, quality: "Good", notes: "Heat cracking risk" },
      { wavelength: "1064nm (Fiber/Nd:YAG)", wavelengthNm: 1064, absorptionRate: 5, quality: "Very Poor", notes: "Transparent" },
      { wavelength: "532nm (Green)", wavelengthNm: 532, absorptionRate: 8, quality: "Very Poor" },
      { wavelength: "355nm (UV)", wavelengthNm: 355, absorptionRate: 45, quality: "Fair", notes: "Engraving possible" }
    ],
    recommendedLaser: ["CO2 Laser (controlled heating)", "UV Laser (marking)"],
    notRecommended: ["Fiber Laser", "Near-IR lasers"]
  }
];

// Helper functions
export function getMaterialAbsorption(materialId: string): MaterialAbsorptionData | null {
  return MATERIAL_ABSORPTION_DATA.find(m => m.materialId === materialId) || null;
}

export function getLaserTypeInfo(wavelengthNm: number): LaserTypeInfo | null {
  return LASER_TYPES.find(l => l.wavelengthNm === wavelengthNm) || null;
}

export function getBestLaserForMaterial(materialId: string): LaserTypeInfo[] {
  const material = getMaterialAbsorption(materialId);
  if (!material) return [];
  
  // Sort by absorption rate and return corresponding laser types
  const sortedAbsorptions = [...material.absorptionByWavelength]
    .filter(a => a.absorptionRate > 50)
    .sort((a, b) => b.absorptionRate - a.absorptionRate);
  
  return sortedAbsorptions
    .map(a => getLaserTypeInfo(a.wavelengthNm))
    .filter((l): l is LaserTypeInfo => l !== null);
}

export const DATA_DISCLAIMER = `Data Disclaimer: This wavelength absorption data is based on published scientific literature and laser physics principles, for reference only. Actual absorption rates vary with surface condition, temperature, material purity, and specific alloy composition. Always conduct material tests before production. Data last updated: ${WAVELENGTH_ABSORPTION_LAST_UPDATE}.`;






























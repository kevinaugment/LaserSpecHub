/**
 * Laser Power Selection Guide Data
 * Data Sources:
 * - OPMT Laser Product Line 2024
 * - Trumpf Power Selection Guide
 * - Bystronic Application Guide
 * - Industry Market Research 2024
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const POWER_SELECTION_VERSION = "1.0.0";
export const POWER_SELECTION_LAST_UPDATE = "2025-10-30";

export interface ThicknessRange {
  mild_steel?: string;
  stainless_steel?: string;
  aluminum?: string;
  copper_brass?: string;
}

export interface PowerLevelGuide {
  power: string;
  powerRange: string;
  idealFor: string;
  thicknessRange: ThicknessRange;
  applications: string[];
  typicalPrice: string;
  runningCost: 'low' | 'medium' | 'medium-high' | 'high';
  recommendedFor: string;
  productionVolume: string;
  floorSpace: string;
  electricalRequirement: string;
  pros: string[];
  cons: string[];
}

export interface PowerCategory {
  category: string;
  categoryId: string;
  laserType: 'fiber' | 'co2';
  wavelength: string;
  levels: PowerLevelGuide[];
}

// Fiber Laser Power Selection Guide
export const FIBER_LASER_POWER_GUIDE: PowerCategory = {
  category: "Fiber Laser - Metal Cutting",
  categoryId: "fiber-metal",
  laserType: "fiber",
  wavelength: "1064nm",
  levels: [
    {
      power: "1kW - 2kW",
      powerRange: "1000W - 2000W",
      idealFor: "Thin sheet metal cutting and engraving",
      thicknessRange: {
        mild_steel: "0.5-5mm",
        stainless_steel: "0.5-4mm",
        aluminum: "0.5-3mm",
        copper_brass: "Not recommended"
      },
      applications: [
        "Electronic enclosures",
        "Sheet metal fabrication",
        "Signage and branding",
        "Decorative items",
        "Jewelry and crafts",
        "Thin stainless steel kitchenware"
      ],
      typicalPrice: "$35,000 - $60,000",
      runningCost: "low",
      recommendedFor: "Small fabrication shops, startups, prototype makers",
      productionVolume: "Low to medium (1-3 shifts)",
      floorSpace: "Compact (3m x 2m typical)",
      electricalRequirement: "208-240V, 20-30A",
      pros: [
        "Lower initial investment",
        "Compact footprint",
        "Low operating costs",
        "Easy to operate and maintain",
        "Excellent for thin materials",
        "Fast ROI for small businesses"
      ],
      cons: [
        "Limited thickness capacity",
        "Slower on thick materials",
        "Not suitable for copper/brass",
        "Limited production scalability"
      ]
    },
    {
      power: "3kW - 4kW",
      powerRange: "3000W - 4000W",
      idealFor: "Medium thickness metal cutting and versatile fabrication",
      thicknessRange: {
        mild_steel: "0.5-12mm",
        stainless_steel: "0.5-8mm",
        aluminum: "0.5-6mm",
        copper_brass: "0.5-3mm (with care)"
      },
      applications: [
        "Mechanical parts and components",
        "Automotive parts fabrication",
        "Construction hardware",
        "HVAC ducting",
        "Tube and pipe cutting",
        "General job shop work"
      ],
      typicalPrice: "$60,000 - $100,000",
      runningCost: "medium",
      recommendedFor: "Medium manufacturers, job shops, diverse requirements",
      productionVolume: "Medium to high (2-3 shifts)",
      floorSpace: "Medium (4m x 3m typical)",
      electricalRequirement: "208-480V, 40-60A",
      pros: [
        "Versatile thickness range",
        "Good balance of speed and capability",
        "Handles most common materials",
        "Reasonable operating costs",
        "Strong ROI for medium production",
        "Expandable workflow"
      ],
      cons: [
        "Higher investment than 1-2kW",
        "May be overkill for thin-only work",
        "Electrical requirements increase",
        "Larger footprint needed"
      ]
    },
    {
      power: "6kW - 8kW",
      powerRange: "6000W - 8000W",
      idealFor: "Thick plate cutting and high-efficiency production",
      thicknessRange: {
        mild_steel: "0.5-20mm",
        stainless_steel: "0.5-15mm",
        aluminum: "0.5-12mm",
        copper_brass: "0.5-8mm"
      },
      applications: [
        "Heavy machinery fabrication",
        "Marine and shipbuilding components",
        "Structural steel",
        "Engineering construction",
        "High-volume production",
        "Automotive manufacturing"
      ],
      typicalPrice: "$100,000 - $150,000",
      runningCost: "medium-high",
      recommendedFor: "Large manufacturers, high-volume production, thick materials",
      productionVolume: "High (2-3 shifts continuous)",
      floorSpace: "Large (5m x 4m typical)",
      electricalRequirement: "480V, 80-120A",
      pros: [
        "Excellent thick plate capability",
        "Very high cutting speeds",
        "Superior production throughput",
        "Handles all common metals",
        "Future-proof investment",
        "Can run 24/7 production"
      ],
      cons: [
        "Significant capital investment",
        "Higher electricity costs",
        "Requires skilled operators",
        "Larger facility requirements",
        "Overkill for thin materials only"
      ]
    },
    {
      power: "12kW - 20kW+",
      powerRange: "12000W - 20000W+",
      idealFor: "Ultra-thick plate and extreme high-speed cutting",
      thicknessRange: {
        mild_steel: "0.5-30mm+",
        stainless_steel: "0.5-25mm",
        aluminum: "0.5-20mm",
        copper_brass: "0.5-15mm"
      },
      applications: [
        "Heavy industrial fabrication",
        "Shipbuilding and offshore",
        "Bridge and infrastructure",
        "Mining equipment",
        "24/7 production lines",
        "Extreme thickness requirements"
      ],
      typicalPrice: "$180,000 - $350,000+",
      runningCost: "high",
      recommendedFor: "Industrial giants, continuous production, extreme requirements",
      productionVolume: "Very high (24/7 operation)",
      floorSpace: "Very large (6m x 5m+)",
      electricalRequirement: "480V, 150-250A+",
      pros: [
        "Cuts extremely thick materials",
        "Maximum production speed",
        "Can handle any metal cutting job",
        "Ultimate productivity",
        "Long-term scalability",
        "Premium brand prestige"
      ],
      cons: [
        "Very high capital cost",
        "Substantial operating expenses",
        "Requires expert operators",
        "Large facility needed",
        "Long ROI period",
        "Complex maintenance"
      ]
    }
  ]
};

// CO2 Laser Power Selection Guide
export const CO2_LASER_POWER_GUIDE: PowerCategory = {
  category: "CO2 Laser - Non-Metal Cutting",
  categoryId: "co2-nonmetal",
  laserType: "co2",
  wavelength: "10600nm",
  levels: [
    {
      power: "40W - 80W",
      powerRange: "40W - 80W",
      idealFor: "Small engraving and thin material cutting",
      thicknessRange: {
        mild_steel: "Not applicable"
      },
      applications: [
        "Craft and hobby projects",
        "Personal creation",
        "Educational use",
        "Prototyping",
        "Small business startup",
        "Wood engraving"
      ],
      typicalPrice: "$3,000 - $8,000",
      runningCost: "low",
      recommendedFor: "Hobbyists, small workshops, education, startups",
      productionVolume: "Low (occasional use)",
      floorSpace: "Very compact (1.5m x 1m)",
      electricalRequirement: "110-120V, 15A standard outlet",
      pros: [
        "Very affordable entry point",
        "Minimal setup required",
        "Low operating costs",
        "Perfect for learning",
        "Home/garage friendly",
        "Easy maintenance"
      ],
      cons: [
        "Limited cutting thickness",
        "Slow for production",
        "Small work area",
        "Not for business scale",
        "Shorter tube life"
      ]
    },
    {
      power: "100W - 150W",
      powerRange: "100W - 150W",
      idealFor: "Medium cutting and engraving for small business",
      thicknessRange: {
        mild_steel: "Not applicable"
      },
      applications: [
        "Signage fabrication",
        "Advertising industry",
        "Packaging samples",
        "Product prototyping",
        "Small furniture parts",
        "Leather goods"
      ],
      typicalPrice: "$10,000 - $25,000",
      runningCost: "low",
      recommendedFor: "Small businesses, design studios, sign shops",
      productionVolume: "Medium (1-2 shifts)",
      floorSpace: "Medium (2.5m x 1.5m)",
      electricalRequirement: "208-240V, 20-30A",
      pros: [
        "Good balance of price and capability",
        "Handles most non-metals well",
        "Reasonable production speed",
        "Moderate operating costs",
        "Suitable for small business",
        "Wide material compatibility"
      ],
      cons: [
        "Limited to medium thickness",
        "Regular maintenance needed",
        "Tube replacement every 2-4 years",
        "Not for heavy production"
      ]
    },
    {
      power: "180W - 300W",
      powerRange: "180W - 300W",
      idealFor: "Thick materials and high-speed production",
      thicknessRange: {
        mild_steel: "Not applicable"
      },
      applications: [
        "Furniture manufacturing",
        "Architectural models",
        "Industrial packaging",
        "High-volume production",
        "Thick acrylic fabrication",
        "Textile industry"
      ],
      typicalPrice: "$30,000 - $60,000",
      runningCost: "medium",
      recommendedFor: "Medium manufacturers, high-volume needs, thick materials",
      productionVolume: "High (2-3 shifts)",
      floorSpace: "Large (3.5m x 2m)",
      electricalRequirement: "240-480V, 40-60A",
      pros: [
        "Cuts thick non-metals",
        "High production speed",
        "Professional grade",
        "Long-term reliability",
        "Good for scaling business",
        "Versatile applications"
      ],
      cons: [
        "Higher investment",
        "More complex maintenance",
        "Larger facility needed",
        "Higher electricity usage",
        "Tube replacement costs"
      ]
    }
  ]
};

export const ALL_POWER_GUIDES: PowerCategory[] = [
  FIBER_LASER_POWER_GUIDE,
  CO2_LASER_POWER_GUIDE
];

// Helper functions
export function getPowerLevelsByCategory(categoryId: string): PowerLevelGuide[] {
  const category = ALL_POWER_GUIDES.find(c => c.categoryId === categoryId);
  return category ? category.levels : [];
}

export function findPowerLevelByThickness(
  categoryId: string,
  material: 'mild_steel' | 'stainless_steel' | 'aluminum' | 'copper_brass',
  thickness: number
): PowerLevelGuide | null {
  const levels = getPowerLevelsByCategory(categoryId);
  
  for (const level of levels) {
    const range = level.thicknessRange[material];
    if (!range || range === "Not applicable" || range === "Not recommended") continue;
    
    // Parse range like "0.5-5mm"
    const match = range.match(/([\d.]+)-([\d.]+)mm/);
    if (match && match[1] && match[2]) {
      const min = parseFloat(match[1]);
      const max = parseFloat(match[2]);
      if (thickness >= min && thickness <= max) {
        return level;
      }
    }
  }
  
  return null;
}

export const DATA_DISCLAIMER = `Data Disclaimer: This power selection guide is based on mainstream laser equipment specifications and industry experience, for reference only. Actual equipment selection should consider specific application requirements, budget constraints, production volume, and facility conditions. Consult with equipment manufacturers for detailed specifications. Data last updated: ${POWER_SELECTION_LAST_UPDATE}.`;



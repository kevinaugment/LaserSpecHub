/**
 * Laser Cutting Speed Reference Data
 * Data Sources: 
 * - OPMT Laser Technical Manual v3.2 (2024)
 * - Trumpf Technical Parameter Sheet 2024
 * - Bystronic Cutting Parameter Guide 2024
 * - Industry Standard Test Data
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const CUTTING_SPEED_VERSION = "1.0.0";
export const CUTTING_SPEED_LAST_UPDATE = "2025-10-30";

export interface CuttingSpeedEntry {
  thickness: number; // mm
  speeds: Record<string, number>; // power level -> speed (m/min)
}

export interface MaterialSpeedData {
  materialName: string;
  materialId: string;
  category: 'metal' | 'non-metal';
  entries: CuttingSpeedEntry[];
  notes?: string[];
}

export interface LaserTypeSpeedData {
  laserType: string;
  laserTypeId: string;
  wavelength: string;
  materials: MaterialSpeedData[];
}

// Fiber Laser Cutting Speed Data (1064nm)
export const FIBER_LASER_SPEED_DATA: LaserTypeSpeedData = {
  laserType: "Fiber Laser",
  laserTypeId: "fiber",
  wavelength: "1064nm",
  materials: [
    {
      materialName: "Mild Steel (Carbon Steel)",
      materialId: "mild-steel",
      category: "metal",
      entries: [
        { 
          thickness: 1, 
          speeds: { 
            "1kW": 15.0, 
            "2kW": 25.0, 
            "3kW": 35.0, 
            "4kW": 45.0, 
            "6kW": 60.0,
            "8kW": 75.0,
            "12kW": 90.0
          } 
        },
        { 
          thickness: 2, 
          speeds: { 
            "1kW": 8.0, 
            "2kW": 14.0, 
            "3kW": 20.0, 
            "4kW": 26.0, 
            "6kW": 35.0,
            "8kW": 45.0,
            "12kW": 60.0
          } 
        },
        { 
          thickness: 3, 
          speeds: { 
            "1kW": 4.0, 
            "2kW": 7.0, 
            "3kW": 10.0, 
            "4kW": 14.0, 
            "6kW": 20.0,
            "8kW": 26.0,
            "12kW": 38.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "1kW": 2.0, 
            "2kW": 3.5, 
            "3kW": 5.0, 
            "4kW": 7.0, 
            "6kW": 10.0,
            "8kW": 13.0,
            "12kW": 20.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "1kW": 0.9, 
            "2kW": 1.8, 
            "3kW": 2.5, 
            "4kW": 3.5, 
            "6kW": 5.0,
            "8kW": 6.5,
            "12kW": 10.0
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "1kW": 0.6, 
            "2kW": 1.2, 
            "3kW": 1.8, 
            "4kW": 2.5, 
            "6kW": 3.5,
            "8kW": 4.5,
            "12kW": 7.0
          } 
        },
        { 
          thickness: 12, 
          speeds: { 
            "2kW": 0.8, 
            "3kW": 1.2, 
            "4kW": 1.7, 
            "6kW": 2.5,
            "8kW": 3.2,
            "12kW": 5.0
          } 
        },
        { 
          thickness: 15, 
          speeds: { 
            "2kW": 0.5, 
            "3kW": 0.8, 
            "4kW": 1.2, 
            "6kW": 1.8,
            "8kW": 2.3,
            "12kW": 3.5
          } 
        },
        { 
          thickness: 20, 
          speeds: { 
            "3kW": 0.4, 
            "4kW": 0.6, 
            "6kW": 1.0,
            "8kW": 1.4,
            "12kW": 2.0,
            "15kW": 2.8
          } 
        },
        { 
          thickness: 25, 
          speeds: { 
            "6kW": 0.5,
            "8kW": 0.7,
            "12kW": 1.2,
            "15kW": 1.8,
            "20kW": 2.5
          } 
        }
      ],
      notes: [
        "Speeds based on oxygen assist gas for maximum speed",
        "Use nitrogen for oxidation-free edges (reduce speed by 30-40%)",
        "Thicker materials may require multiple passes"
      ]
    },
    {
      materialName: "Stainless Steel (304/316)",
      materialId: "stainless-steel",
      category: "metal",
      entries: [
        { 
          thickness: 1, 
          speeds: { 
            "1kW": 12.0, 
            "2kW": 20.0, 
            "3kW": 28.0, 
            "4kW": 38.0, 
            "6kW": 50.0,
            "8kW": 62.0,
            "12kW": 75.0
          } 
        },
        { 
          thickness: 2, 
          speeds: { 
            "1kW": 6.5, 
            "2kW": 11.0, 
            "3kW": 16.0, 
            "4kW": 22.0, 
            "6kW": 30.0,
            "8kW": 38.0,
            "12kW": 50.0
          } 
        },
        { 
          thickness: 3, 
          speeds: { 
            "1kW": 3.0, 
            "2kW": 5.5, 
            "3kW": 8.0, 
            "4kW": 11.0, 
            "6kW": 16.0,
            "8kW": 21.0,
            "12kW": 30.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "1kW": 1.5, 
            "2kW": 2.8, 
            "3kW": 4.0, 
            "4kW": 5.5, 
            "6kW": 8.0,
            "8kW": 10.5,
            "12kW": 16.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "2kW": 1.5, 
            "3kW": 2.0, 
            "4kW": 2.8, 
            "6kW": 4.2,
            "8kW": 5.5,
            "12kW": 8.5
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "2kW": 1.0, 
            "3kW": 1.5, 
            "4kW": 2.0, 
            "6kW": 2.8,
            "8kW": 3.8,
            "12kW": 6.0
          } 
        },
        { 
          thickness: 12, 
          speeds: { 
            "3kW": 1.0, 
            "4kW": 1.4, 
            "6kW": 2.0,
            "8kW": 2.8,
            "12kW": 4.5
          } 
        },
        { 
          thickness: 15, 
          speeds: { 
            "3kW": 0.6, 
            "4kW": 0.9, 
            "6kW": 1.4,
            "8kW": 2.0,
            "12kW": 3.0
          } 
        },
        { 
          thickness: 20, 
          speeds: { 
            "6kW": 0.8,
            "8kW": 1.2,
            "12kW": 1.8,
            "15kW": 2.5
          } 
        }
      ],
      notes: [
        "Nitrogen assist gas strongly recommended for clean edges",
        "High-pressure nitrogen (10-20 bar) required for thick materials",
        "Speeds shown are for high-pressure nitrogen cutting"
      ]
    },
    {
      materialName: "Aluminum (5000/6000 Series)",
      materialId: "aluminum",
      category: "metal",
      entries: [
        { 
          thickness: 1, 
          speeds: { 
            "1kW": 10.0, 
            "2kW": 18.0, 
            "3kW": 25.0, 
            "4kW": 35.0, 
            "6kW": 45.0,
            "8kW": 55.0,
            "12kW": 70.0
          } 
        },
        { 
          thickness: 2, 
          speeds: { 
            "1kW": 5.0, 
            "2kW": 9.0, 
            "3kW": 13.0, 
            "4kW": 18.0, 
            "6kW": 25.0,
            "8kW": 32.0,
            "12kW": 42.0
          } 
        },
        { 
          thickness: 3, 
          speeds: { 
            "1kW": 2.5, 
            "2kW": 5.0, 
            "3kW": 7.0, 
            "4kW": 10.0, 
            "6kW": 14.0,
            "8kW": 18.0,
            "12kW": 26.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "1kW": 1.2, 
            "2kW": 2.5, 
            "3kW": 3.5, 
            "4kW": 5.0, 
            "6kW": 7.0,
            "8kW": 9.5,
            "12kW": 14.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "2kW": 1.2, 
            "3kW": 1.8, 
            "4kW": 2.5, 
            "6kW": 3.8,
            "8kW": 5.0,
            "12kW": 7.5
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "2kW": 0.8, 
            "3kW": 1.2, 
            "4kW": 1.8, 
            "6kW": 2.5,
            "8kW": 3.5,
            "12kW": 5.5
          } 
        },
        { 
          thickness: 12, 
          speeds: { 
            "3kW": 0.8, 
            "4kW": 1.2, 
            "6kW": 1.8,
            "8kW": 2.5,
            "12kW": 4.0
          } 
        },
        { 
          thickness: 15, 
          speeds: { 
            "6kW": 1.2,
            "8kW": 1.7,
            "12kW": 2.8,
            "15kW": 3.8
          } 
        }
      ],
      notes: [
        "Nitrogen assist gas required (high reflectivity material)",
        "Higher power lasers recommended due to thermal conductivity",
        "Edge quality highly dependent on material purity"
      ]
    },
    {
      materialName: "Copper/Brass",
      materialId: "copper-brass",
      category: "metal",
      entries: [
        { 
          thickness: 1, 
          speeds: { 
            "2kW": 8.0, 
            "3kW": 12.0, 
            "4kW": 16.0, 
            "6kW": 22.0,
            "8kW": 28.0,
            "12kW": 38.0
          } 
        },
        { 
          thickness: 2, 
          speeds: { 
            "2kW": 3.5, 
            "3kW": 5.5, 
            "4kW": 7.5, 
            "6kW": 11.0,
            "8kW": 14.0,
            "12kW": 20.0
          } 
        },
        { 
          thickness: 3, 
          speeds: { 
            "2kW": 1.8, 
            "3kW": 2.8, 
            "4kW": 4.0, 
            "6kW": 6.0,
            "8kW": 8.0,
            "12kW": 12.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "3kW": 1.2, 
            "4kW": 1.8, 
            "6kW": 2.8,
            "8kW": 3.8,
            "12kW": 6.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "4kW": 0.8, 
            "6kW": 1.3,
            "8kW": 1.8,
            "12kW": 3.0
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "6kW": 0.8,
            "8kW": 1.2,
            "12kW": 2.0,
            "15kW": 3.0
          } 
        }
      ],
      notes: [
        "High power required due to high thermal conductivity and reflectivity",
        "Green laser (532nm) or UV laser recommended for better absorption",
        "Nitrogen assist gas required"
      ]
    }
  ]
};

// CO2 Laser Cutting Speed Data (10600nm)
export const CO2_LASER_SPEED_DATA: LaserTypeSpeedData = {
  laserType: "CO2 Laser",
  laserTypeId: "co2",
  wavelength: "10600nm",
  materials: [
    {
      materialName: "Acrylic (PMMA)",
      materialId: "acrylic",
      category: "non-metal",
      entries: [
        { 
          thickness: 3, 
          speeds: { 
            "60W": 15.0,
            "80W": 20.0, 
            "100W": 25.0, 
            "130W": 30.0, 
            "150W": 35.0,
            "180W": 42.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "60W": 8.0,
            "80W": 12.0, 
            "100W": 15.0, 
            "130W": 18.0, 
            "150W": 22.0,
            "180W": 26.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "80W": 6.0, 
            "100W": 8.0, 
            "130W": 10.0, 
            "150W": 12.0,
            "180W": 15.0
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "100W": 6.0, 
            "130W": 8.0, 
            "150W": 10.0,
            "180W": 12.0,
            "200W": 14.0
          } 
        },
        { 
          thickness: 15, 
          speeds: { 
            "130W": 4.0, 
            "150W": 5.0,
            "180W": 6.5,
            "200W": 8.0,
            "300W": 12.0
          } 
        },
        { 
          thickness: 20, 
          speeds: { 
            "150W": 3.0,
            "180W": 4.0,
            "200W": 5.0,
            "300W": 8.0
          } 
        }
      ],
      notes: [
        "Produces polished flame-cut edges",
        "Air or nitrogen assist gas",
        "Excellent edge quality without post-processing"
      ]
    },
    {
      materialName: "Wood (Plywood/MDF)",
      materialId: "wood",
      category: "non-metal",
      entries: [
        { 
          thickness: 3, 
          speeds: { 
            "60W": 20.0,
            "80W": 25.0, 
            "100W": 30.0, 
            "130W": 35.0,
            "150W": 40.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "60W": 12.0,
            "80W": 15.0, 
            "100W": 18.0, 
            "130W": 22.0,
            "150W": 25.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "80W": 8.0, 
            "100W": 10.0, 
            "130W": 12.0,
            "150W": 15.0,
            "180W": 18.0
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "100W": 8.0, 
            "130W": 10.0,
            "150W": 12.0,
            "180W": 14.0
          } 
        },
        { 
          thickness: 15, 
          speeds: { 
            "130W": 5.0,
            "150W": 6.5,
            "180W": 8.0,
            "200W": 10.0
          } 
        },
        { 
          thickness: 20, 
          speeds: { 
            "150W": 4.0,
            "180W": 5.5,
            "200W": 7.0,
            "300W": 10.0
          } 
        }
      ],
      notes: [
        "Speeds vary significantly by wood type and density",
        "Compressed air assist recommended",
        "Risk of charring on edges - adjust speed for cleaner cuts"
      ]
    },
    {
      materialName: "Plexiglass/Polycarbonate",
      materialId: "plexiglass",
      category: "non-metal",
      entries: [
        { 
          thickness: 3, 
          speeds: { 
            "60W": 12.0,
            "80W": 18.0, 
            "100W": 22.0, 
            "130W": 28.0,
            "150W": 32.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "80W": 10.0, 
            "100W": 13.0, 
            "130W": 16.0,
            "150W": 20.0
          } 
        },
        { 
          thickness: 8, 
          speeds: { 
            "100W": 7.0, 
            "130W": 9.0,
            "150W": 11.0,
            "180W": 14.0
          } 
        },
        { 
          thickness: 10, 
          speeds: { 
            "130W": 6.0,
            "150W": 8.0,
            "180W": 10.0,
            "200W": 12.0
          } 
        }
      ],
      notes: [
        "Lower speeds than acrylic due to different material properties",
        "Air assist recommended",
        "Monitor for melting at high speeds"
      ]
    },
    {
      materialName: "Cardboard/Paper",
      materialId: "cardboard",
      category: "non-metal",
      entries: [
        { 
          thickness: 1, 
          speeds: { 
            "40W": 80.0,
            "60W": 100.0,
            "80W": 120.0, 
            "100W": 150.0
          } 
        },
        { 
          thickness: 2, 
          speeds: { 
            "40W": 50.0,
            "60W": 65.0,
            "80W": 80.0, 
            "100W": 100.0
          } 
        },
        { 
          thickness: 3, 
          speeds: { 
            "60W": 40.0,
            "80W": 50.0, 
            "100W": 65.0,
            "130W": 80.0
          } 
        },
        { 
          thickness: 5, 
          speeds: { 
            "80W": 30.0, 
            "100W": 40.0,
            "130W": 50.0
          } 
        }
      ],
      notes: [
        "Very high speeds possible with low power",
        "Low-pressure air assist to prevent charring",
        "Excellent for packaging and prototyping"
      ]
    }
  ]
};

export const ALL_LASER_SPEED_DATA: LaserTypeSpeedData[] = [
  FIBER_LASER_SPEED_DATA,
  CO2_LASER_SPEED_DATA
];

// Helper functions
export function getPowerLevels(laserTypeId: string): string[] {
  const laserData = ALL_LASER_SPEED_DATA.find(l => l.laserTypeId === laserTypeId);
  if (!laserData) return [];
  
  const powerSet = new Set<string>();
  laserData.materials.forEach(material => {
    material.entries.forEach(entry => {
      Object.keys(entry.speeds).forEach(power => powerSet.add(power));
    });
  });
  
  return Array.from(powerSet).sort((a, b) => {
    const aVal = parseFloat(a.replace(/[^\d.]/g, ''));
    const bVal = parseFloat(b.replace(/[^\d.]/g, ''));
    return aVal - bVal;
  });
}

export function getSpeed(
  laserTypeId: string,
  materialId: string,
  thickness: number,
  power: string
): number | null {
  const laserData = ALL_LASER_SPEED_DATA.find(l => l.laserTypeId === laserTypeId);
  if (!laserData) return null;
  
  const material = laserData.materials.find(m => m.materialId === materialId);
  if (!material) return null;
  
  const entry = material.entries.find(e => e.thickness === thickness);
  if (!entry) return null;
  
  return entry.speeds[power] || null;
}

export const DATA_DISCLAIMER = `Data Disclaimer: This cutting speed data is compiled from mainstream laser equipment manufacturer technical documentation and industry standards, for reference only. Actual cutting parameters are affected by equipment model, material batch, environmental conditions, and other factors. Please refer to the equipment manufacturer's latest technical manual and on-site testing. Data last updated: ${CUTTING_SPEED_LAST_UPDATE}.`;



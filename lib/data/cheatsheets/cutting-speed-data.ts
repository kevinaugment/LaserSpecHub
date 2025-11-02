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

export const CUTTING_SPEED_VERSION = "2.0.0";
export const CUTTING_SPEED_LAST_UPDATE = "2025-11-02";

export interface CuttingSpeedEntry {
  thickness: number; // mm
  speeds: Record<string, number>; // power level -> speed (m/min)
  piercingTime?: Record<string, number>; // power level -> piercing time (seconds)
  gasPressure?: {
    oxygen?: string; // pressure range in bar
    nitrogen?: string; // pressure range in bar
    air?: string; // pressure range in bar
  };
  kerfWidth?: Record<string, number>; // power level -> kerf width (mm)
  edgeQuality?: 'excellent' | 'good' | 'fair'; // typical edge quality at standard speeds
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
          },
          piercingTime: {
            "1kW": 0.3,
            "2kW": 0.2,
            "3kW": 0.15,
            "4kW": 0.12,
            "6kW": 0.10,
            "8kW": 0.08,
            "12kW": 0.06
          },
          gasPressure: {
            oxygen: "0.5-1.0 bar",
            nitrogen: "8-12 bar"
          },
          kerfWidth: {
            "1kW": 0.15,
            "2kW": 0.18,
            "3kW": 0.20,
            "4kW": 0.22,
            "6kW": 0.25,
            "8kW": 0.28,
            "12kW": 0.32
          },
          edgeQuality: "excellent"
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
          },
          piercingTime: {
            "1kW": 0.5,
            "2kW": 0.3,
            "3kW": 0.25,
            "4kW": 0.20,
            "6kW": 0.15,
            "8kW": 0.12,
            "12kW": 0.10
          },
          gasPressure: {
            oxygen: "0.6-1.2 bar",
            nitrogen: "10-14 bar"
          },
          kerfWidth: {
            "1kW": 0.16,
            "2kW": 0.19,
            "3kW": 0.21,
            "4kW": 0.23,
            "6kW": 0.26,
            "8kW": 0.29,
            "12kW": 0.33
          },
          edgeQuality: "excellent"
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
          },
          piercingTime: {
            "1kW": 0.8,
            "2kW": 0.5,
            "3kW": 0.35,
            "4kW": 0.28,
            "6kW": 0.22,
            "8kW": 0.18,
            "12kW": 0.15
          },
          gasPressure: {
            oxygen: "0.8-1.5 bar",
            nitrogen: "12-16 bar"
          },
          kerfWidth: {
            "1kW": 0.17,
            "2kW": 0.20,
            "3kW": 0.22,
            "4kW": 0.24,
            "6kW": 0.27,
            "8kW": 0.30,
            "12kW": 0.34
          },
          edgeQuality: "excellent"
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
          },
          piercingTime: {
            "1kW": 1.5,
            "2kW": 0.9,
            "3kW": 0.6,
            "4kW": 0.5,
            "6kW": 0.38,
            "8kW": 0.30,
            "12kW": 0.25
          },
          gasPressure: {
            oxygen: "1.0-2.0 bar",
            nitrogen: "14-18 bar"
          },
          kerfWidth: {
            "1kW": 0.18,
            "2kW": 0.21,
            "3kW": 0.23,
            "4kW": 0.26,
            "6kW": 0.29,
            "8kW": 0.32,
            "12kW": 0.36
          },
          edgeQuality: "good"
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
          },
          piercingTime: {
            "1kW": 2.5,
            "2kW": 1.5,
            "3kW": 1.0,
            "4kW": 0.8,
            "6kW": 0.6,
            "8kW": 0.5,
            "12kW": 0.4
          },
          gasPressure: {
            oxygen: "1.2-2.5 bar",
            nitrogen: "16-20 bar"
          },
          kerfWidth: {
            "1kW": 0.20,
            "2kW": 0.23,
            "3kW": 0.25,
            "4kW": 0.28,
            "6kW": 0.31,
            "8kW": 0.34,
            "12kW": 0.38
          },
          edgeQuality: "good"
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
          },
          piercingTime: {
            "1kW": 3.5,
            "2kW": 2.0,
            "3kW": 1.4,
            "4kW": 1.1,
            "6kW": 0.8,
            "8kW": 0.65,
            "12kW": 0.5
          },
          gasPressure: {
            oxygen: "1.5-3.0 bar",
            nitrogen: "18-22 bar"
          },
          kerfWidth: {
            "1kW": 0.22,
            "2kW": 0.24,
            "3kW": 0.27,
            "4kW": 0.30,
            "6kW": 0.33,
            "8kW": 0.36,
            "12kW": 0.40
          },
          edgeQuality: "good"
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
          },
          piercingTime: {
            "2kW": 3.0,
            "3kW": 2.0,
            "4kW": 1.5,
            "6kW": 1.1,
            "8kW": 0.9,
            "12kW": 0.7
          },
          gasPressure: {
            oxygen: "2.0-3.5 bar",
            nitrogen: "20-25 bar"
          },
          kerfWidth: {
            "2kW": 0.26,
            "3kW": 0.29,
            "4kW": 0.32,
            "6kW": 0.35,
            "8kW": 0.38,
            "12kW": 0.42
          },
          edgeQuality: "fair"
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
          },
          piercingTime: {
            "2kW": 4.0,
            "3kW": 2.8,
            "4kW": 2.0,
            "6kW": 1.5,
            "8kW": 1.2,
            "12kW": 0.9
          },
          gasPressure: {
            oxygen: "2.5-4.0 bar",
            nitrogen: "22-28 bar"
          },
          kerfWidth: {
            "2kW": 0.28,
            "3kW": 0.31,
            "4kW": 0.34,
            "6kW": 0.37,
            "8kW": 0.40,
            "12kW": 0.44
          },
          edgeQuality: "fair"
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
          },
          piercingTime: {
            "3kW": 4.5,
            "4kW": 3.2,
            "6kW": 2.3,
            "8kW": 1.8,
            "12kW": 1.3,
            "15kW": 1.0
          },
          gasPressure: {
            oxygen: "3.0-5.0 bar",
            nitrogen: "25-30 bar"
          },
          kerfWidth: {
            "3kW": 0.33,
            "4kW": 0.36,
            "6kW": 0.39,
            "8kW": 0.42,
            "12kW": 0.46,
            "15kW": 0.50
          },
          edgeQuality: "fair"
        },
        { 
          thickness: 25, 
          speeds: { 
            "6kW": 0.5,
            "8kW": 0.7,
            "12kW": 1.2,
            "15kW": 1.8,
            "20kW": 2.5
          },
          piercingTime: {
            "6kW": 3.5,
            "8kW": 2.8,
            "12kW": 2.0,
            "15kW": 1.5,
            "20kW": 1.2
          },
          gasPressure: {
            oxygen: "3.5-6.0 bar",
            nitrogen: "28-35 bar"
          },
          kerfWidth: {
            "6kW": 0.41,
            "8kW": 0.44,
            "12kW": 0.48,
            "15kW": 0.52,
            "20kW": 0.56
          },
          edgeQuality: "fair"
        }
      ],
      notes: [
        "Speeds based on oxygen assist gas for maximum speed",
        "Use nitrogen for oxidation-free edges (reduce speed by 30-40%)",
        "Piercing times increase significantly with thickness",
        "Gas pressure must increase with thickness for effective melt ejection",
        "Kerf width increases with laser power due to larger focus spot"
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
          },
          piercingTime: {
            "1kW": 0.4,
            "2kW": 0.25,
            "3kW": 0.18,
            "4kW": 0.15,
            "6kW": 0.12,
            "8kW": 0.10,
            "12kW": 0.08
          },
          gasPressure: {
            nitrogen: "10-14 bar"
          },
          kerfWidth: {
            "1kW": 0.16,
            "2kW": 0.19,
            "3kW": 0.21,
            "4kW": 0.23,
            "6kW": 0.26,
            "8kW": 0.29,
            "12kW": 0.33
          },
          edgeQuality: "excellent"
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



























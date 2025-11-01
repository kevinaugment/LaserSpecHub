/**
 * Laser Equipment Maintenance Schedules and Costs
 * Data Sources:
 * - Manufacturer maintenance manuals (fiber & CO2)
 * - Industry service guidelines (2024-2025)
 * Last Update: 2025-10-30
 * Next Review: 2026-04-30
 */

export const MAINTENANCE_VERSION = "1.0.0";
export const MAINTENANCE_LAST_UPDATE = "2025-10-30";

export interface MaintenanceTask {
  task: string;
  time: string;
  cost: string;
  critical: boolean;
}

export interface MaintenanceGroup {
  daily: MaintenanceTask[];
  weekly: MaintenanceTask[];
  monthly: MaintenanceTask[];
  quarterly: MaintenanceTask[];
  annually: MaintenanceTask[];
  annualCostEstimate: {
    consumables: string;
    service: string;
    total: string;
  };
  lifespan: Record<string, string>;
}

export interface MaintenanceDataset {
  type: 'fiber' | 'co2';
  title: string;
  schedule: MaintenanceGroup;
}

export const FIBER_LASER_MAINTENANCE: MaintenanceDataset = {
  type: 'fiber',
  title: 'Fiber Laser Maintenance',
  schedule: {
    daily: [
      { task: 'Check chiller temperature and flow rate', time: '2 min', cost: '$0', critical: true },
      { task: 'Remove slag and cutting waste from table', time: '10 min', cost: '$0', critical: true },
      { task: 'Inspect protective window for contamination', time: '3 min', cost: '$0', critical: true },
      { task: 'Verify assist gas pressure levels', time: '2 min', cost: '$0', critical: true }
    ],
    weekly: [
      { task: 'Clean protective window with lens cleaner', time: '15 min', cost: '$5', critical: true },
      { task: 'Inspect cutting nozzle condition and alignment', time: '5 min', cost: '$0', critical: true },
      { task: 'Check beam path for contamination', time: '10 min', cost: '$0', critical: true },
      { task: 'Clean air filter and ventilation system', time: '15 min', cost: '$0', critical: false }
    ],
    monthly: [
      { task: 'Replace protective window', time: '10 min', cost: '$80-150', critical: true },
      { task: 'Clean focusing lens with proper solution', time: '20 min', cost: '$10', critical: true },
      { task: 'Clean and inspect chiller filters', time: '15 min', cost: '$0', critical: true },
      { task: 'Lubricate linear guides and ball screws', time: '25 min', cost: '$20', critical: false },
      { task: 'Check and tighten mechanical fasteners', time: '20 min', cost: '$0', critical: false }
    ],
    quarterly: [
      { task: 'Replace chiller coolant (distilled water)', time: '45 min', cost: '$100-150', critical: true },
      { task: 'Inspect fiber cable and connectors', time: '20 min', cost: '$0', critical: true },
      { task: 'Calibrate cutting head parallelism', time: '60 min', cost: '$0', critical: true },
      { task: 'Replace cutting nozzles (full set)', time: '30 min', cost: '$200-400', critical: false }
    ],
    annually: [
      { task: 'Professional laser source inspection and service', time: '4-6 h', cost: '$2,500-5,000', critical: true },
      { task: 'Replace focusing lens assembly', time: '45 min', cost: '$400-900', critical: true },
      { task: 'Complete optical path inspection and cleaning', time: '2 h', cost: '$500-800', critical: true },
      { task: 'Precision calibration and beam quality test', time: '3 h', cost: '$800-1,500', critical: true },
      { task: 'Replace servo motor encoders (if needed)', time: '2 h', cost: '$600-1,200', critical: false }
    ],
    annualCostEstimate: {
      consumables: '$2,000-3,500',
      service: '$3,800-7,500',
      total: '$5,800-11,000'
    },
    lifespan: {
      'Laser source module': '100,000 h (11-14 years)',
      'Protective window': '1-3 months',
      'Focusing lens': '12-24 months',
      'Cutting nozzles': '1-6 months',
      'Chiller system': '50,000 h (6-8 years)'
    }
  }
};

export const CO2_LASER_MAINTENANCE: MaintenanceDataset = {
  type: 'co2',
  title: 'CO2 Laser Maintenance',
  schedule: {
    daily: [
      { task: 'Check chiller temperature and flow rate', time: '3 min', cost: '$0', critical: true },
      { task: 'Remove slag and cutting waste from table', time: '10 min', cost: '$0', critical: true },
      { task: 'Inspect protective window for contamination', time: '3 min', cost: '$0', critical: true },
      { task: 'Verify laser tube gas pressure (sealed tubes)', time: '2 min', cost: '$0', critical: true }
    ],
    weekly: [
      { task: 'Clean all optical mirrors (M1, M2, M3)', time: '30 min', cost: '$15', critical: true },
      { task: 'Clean focusing lens with acetone/methanol', time: '20 min', cost: '$10', critical: true },
      { task: 'Inspect beam alignment through optical path', time: '15 min', cost: '$0', critical: true },
      { task: 'Clean extraction fan and exhaust system', time: '20 min', cost: '$0', critical: false }
    ],
    monthly: [
      { task: 'Replace protective window', time: '10 min', cost: '$40-100', critical: true },
      { task: 'Deep clean complete optical path', time: '60 min', cost: '$20', critical: true },
      { task: 'Inspect cooling system and water quality', time: '25 min', cost: '$0', critical: true },
      { task: 'Perform optical alignment verification', time: '45 min', cost: '$0', critical: true },
      { task: 'Lubricate motion system components', time: '20 min', cost: '$15', critical: false }
    ],
    quarterly: [
      { task: 'Replace chiller coolant completely', time: '45 min', cost: '$80-120', critical: true },
      { task: 'Inspect laser tube condition and power output', time: '30 min', cost: '$0', critical: true },
      { task: 'Clean and service exhaust fan motor', time: '60 min', cost: '$50', critical: false },
      { task: 'Replace air filter elements', time: '15 min', cost: '$30-60', critical: false }
    ],
    annually: [
      { task: 'Replace CO2 laser tube (sealed, as needed)', time: '3 h', cost: '$1,500-4,000', critical: true },
      { task: 'Replace focusing lens assembly', time: '30 min', cost: '$200-500', critical: true },
      { task: 'Replace complete mirror set (M1, M2, M3)', time: '90 min', cost: '$400-800', critical: true },
      { task: 'Professional optical alignment and calibration', time: '4 h', cost: '$800-1,500', critical: true },
      { task: 'RF power supply inspection and service', time: '2 h', cost: '$500-1,000', critical: false }
    ],
    annualCostEstimate: {
      consumables: '$2,500-5,000',
      service: '$2,000-4,000',
      total: '$4,500-9,000'
    },
    lifespan: {
      'CO2 laser tube (sealed)': '10,000-20,000 h (2-4 years)',
      'Protective window': '2-8 weeks',
      'Focusing lens': '6-18 months',
      'Optical mirrors': '12-24 months',
      'Cutting nozzles': '2-8 weeks',
      'RF power supply': '30,000-50,000 h (5-8 years)'
    }
  }
};

export const MAINTENANCE_COMPARISON = {
  headers: ['Item', 'Fiber Laser', 'CO2 Laser'],
  rows: [
    ['Daily maintenance time', '17 min', '18 min'],
    ['Weekly maintenance time', '45 min', '85 min'],
    ['Monthly maintenance time', '90 min', '150 min'],
    ['Annual total maintenance cost', '$5,800-11,000', '$4,500-9,000'],
    ['Laser source lifespan', '100,000 h (11-14 years)', '10,000-20,000 h (2-4 years)'],
    ['Optical maintenance frequency', 'Low (monthly)', 'High (weekly)'],
    ['Skill requirement', 'Low-Medium', 'Medium-High'],
    ['Unplanned downtime risk', 'Very Low', 'Medium'],
    ['Environmental sensitivity', 'Low', 'High'],
    ['Consumables cost (annual)', '$2,000-3,500', '$2,500-5,000']
  ]
};

export const DATA_DISCLAIMER = `Maintenance guidance compiled from manufacturer manuals and industry practice. Actual schedules depend on usage intensity, environment and model. Last updated: ${MAINTENANCE_LAST_UPDATE}.`;


























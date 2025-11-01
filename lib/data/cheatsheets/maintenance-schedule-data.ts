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
      { task: 'Check chiller temperature', time: '2 min', cost: '$0', critical: true },
      { task: 'Clean slag/waste', time: '10 min', cost: '$0', critical: true },
      { task: 'Inspect protective window cleanliness', time: '3 min', cost: '$0', critical: true }
    ],
    weekly: [
      { task: 'Clean protective window', time: '15 min', cost: '$5 (cleaner)', critical: true },
      { task: 'Check assist gas pressure', time: '5 min', cost: '$0', critical: true },
      { task: 'Inspect nozzle wear', time: '5 min', cost: '$0', critical: true }
    ],
    monthly: [
      { task: 'Replace protective window', time: '10 min', cost: '$50-150', critical: true },
      { task: 'Clean focusing lens', time: '20 min', cost: '$10', critical: true },
      { task: 'Clean chiller filters', time: '15 min', cost: '$0', critical: false },
      { task: 'Lubricate motion axes', time: '20 min', cost: '$20', critical: false }
    ],
    quarterly: [
      { task: 'Replace coolant', time: '30 min', cost: '$80-120', critical: true },
      { task: 'Inspect fiber connectors', time: '15 min', cost: '$0', critical: true },
      { task: 'Calibrate head parallelism', time: '45 min', cost: '$0', critical: false }
    ],
    annually: [
      { task: 'Full laser service', time: '4 h', cost: '$2,000-5,000', critical: true },
      { task: 'Replace focusing lens', time: '30 min', cost: '$300-800', critical: true },
      { task: 'Inspect all optics path', time: '2 h', cost: '$500', critical: true },
      { task: 'Precision calibration', time: '3 h', cost: '$800-1,500', critical: false }
    ],
    annualCostEstimate: {
      consumables: '$1,500-3,000',
      service: '$3,000-6,000',
      total: '$4,500-9,000'
    },
    lifespan: {
      'laser module': '100,000 h (10-12 years)',
      'protection window': '1-3 months',
      'focus lens': '12-24 months',
      nozzles: '1-6 months'
    }
  }
};

export const CO2_LASER_MAINTENANCE: MaintenanceDataset = {
  type: 'co2',
  title: 'CO2 Laser Maintenance',
  schedule: {
    daily: [
      { task: 'Check chiller temperature & flow', time: '3 min', cost: '$0', critical: true },
      { task: 'Clean slag/waste', time: '10 min', cost: '$0', critical: true },
      { task: 'Inspect protective window', time: '3 min', cost: '$0', critical: true }
    ],
    weekly: [
      { task: 'Clean all mirrors', time: '30 min', cost: '$15', critical: true },
      { task: 'Clean focusing lens', time: '20 min', cost: '$10', critical: true },
      { task: 'Check laser tube pressure', time: '5 min', cost: '$0', critical: true }
    ],
    monthly: [
      { task: 'Replace protective window', time: '10 min', cost: '$30-80', critical: true },
      { task: 'Deep clean optical path', time: '1 h', cost: '$20', critical: true },
      { task: 'Inspect cooling system', time: '20 min', cost: '$0', critical: true },
      { task: 'Optical alignment check', time: '45 min', cost: '$0', critical: false }
    ],
    quarterly: [
      { task: 'Replace coolant', time: '45 min', cost: '$60-100', critical: true },
      { task: 'Inspect laser tube health', time: '30 min', cost: '$0', critical: true },
      { task: 'Clean fan and exhaust', time: '1 h', cost: '$50', critical: false }
    ],
    annually: [
      { task: 'Replace laser tube (as needed)', time: '2 h', cost: '$800-3,000', critical: true },
      { task: 'Replace focusing lens', time: '30 min', cost: '$150-400', critical: true },
      { task: 'Replace mirrors set', time: '1.5 h', cost: '$300-600', critical: false },
      { task: 'Full optical alignment', time: '3 h', cost: '$600-1,200', critical: true }
    ],
    annualCostEstimate: {
      consumables: '$2,000-4,000',
      service: '$1,500-3,000',
      total: '$4,300-10,000'
    },
    lifespan: {
      'laser tube': '2,000-8,000 h (1-4 years)',
      'protection window': '1-2 months',
      'focus lens': '6-12 months',
      mirrors: '12-24 months',
      nozzles: '1-3 months'
    }
  }
};

export const MAINTENANCE_COMPARISON = {
  headers: ['Item', 'Fiber Laser', 'CO2 Laser'],
  rows: [
    ['Daily maintenance time', '15 min', '30 min'],
    ['Weekly maintenance time', '25 min', '55 min'],
    ['Annual total maintenance cost', '$4,500-9,000', '$4,300-10,000'],
    ['Main consumables life', '12-24 months', '1-4 years (tube)'],
    ['Skill requirement', 'Low', 'Medium-High'],
    ['Unplanned downtime risk', 'Low', 'Medium']
  ]
};

export const DATA_DISCLAIMER = `Maintenance guidance compiled from manufacturer manuals and industry practice. Actual schedules depend on usage intensity, environment and model. Last updated: ${MAINTENANCE_LAST_UPDATE}.`;





















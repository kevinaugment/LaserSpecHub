/**
 * Material Characteristics Comparison Data
 * Provides comparative analysis of different materials for laser cutting
 */

export interface MaterialCharacteristics {
  materialId: string;
  materialName: string;
  cuttingDifficulty: 'easy' | 'medium' | 'hard';
  reflectivity: 'low' | 'medium' | 'high';
  thermalConductivity: 'low' | 'medium' | 'high';
  edgeQuality: 'excellent' | 'good' | 'fair';
  oxidationRisk: 'none' | 'low' | 'high';
  gasCostLevel: 'low' | 'medium' | 'high';
  typicalApplications: string[];
  keyConsiderations: string[];
}

export const MATERIAL_CHARACTERISTICS: MaterialCharacteristics[] = [
  {
    materialId: 'carbon-steel-o2',
    materialName: 'Mild Steel (Oxygen)',
    cuttingDifficulty: 'easy',
    reflectivity: 'low',
    thermalConductivity: 'medium',
    edgeQuality: 'good',
    oxidationRisk: 'high',
    gasCostLevel: 'low',
    typicalApplications: [
      'Structural components',
      'Machinery parts',
      'Automotive frames',
      'General fabrication',
    ],
    keyConsiderations: [
      'Oxide layer forms on cut edge',
      'Fast cutting speeds achievable',
      'Most economical option',
      'Suitable for welded assemblies',
    ],
  },
  {
    materialId: 'stainless-steel-n2',
    materialName: 'Stainless Steel (Nitrogen)',
    cuttingDifficulty: 'medium',
    reflectivity: 'medium',
    thermalConductivity: 'low',
    edgeQuality: 'excellent',
    oxidationRisk: 'none',
    gasCostLevel: 'high',
    typicalApplications: [
      'Food processing equipment',
      'Medical devices',
      'Architectural panels',
      'High-aesthetic applications',
    ],
    keyConsiderations: [
      'Oxide-free, bright edges',
      'High nitrogen pressure required (10-20 bar)',
      'Higher operating costs',
      'Excellent corrosion resistance',
    ],
  },
  {
    materialId: 'stainless-steel-air',
    materialName: 'Stainless Steel (Air)',
    cuttingDifficulty: 'medium',
    reflectivity: 'medium',
    thermalConductivity: 'low',
    edgeQuality: 'good',
    oxidationRisk: 'low',
    gasCostLevel: 'low',
    typicalApplications: [
      'Structural stainless',
      'Industrial enclosures',
      'Non-aesthetic parts',
      'Cost-sensitive projects',
    ],
    keyConsiderations: [
      '80% cost savings vs nitrogen',
      'Slight edge discoloration',
      'Requires 20-30% more power',
      'Not for food/medical applications',
    ],
  },
  {
    materialId: 'aluminum-n2',
    materialName: 'Aluminum Alloy',
    cuttingDifficulty: 'hard',
    reflectivity: 'high',
    thermalConductivity: 'high',
    edgeQuality: 'good',
    oxidationRisk: 'low',
    gasCostLevel: 'medium',
    typicalApplications: [
      'Aerospace components',
      'Automotive parts',
      'Electronics enclosures',
      'Lightweight structures',
    ],
    keyConsiderations: [
      'Requires 30-40% more power than steel',
      'High reflectivity challenges',
      'Excellent weight-to-strength ratio',
      'Prone to dross formation',
    ],
  },
];

export const ALL_MATERIAL_CHARACTERISTICS = MATERIAL_CHARACTERISTICS;


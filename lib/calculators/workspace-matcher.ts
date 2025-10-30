/**
 * Workspace Size Matcher Logic
 * Matches workpiece dimensions with optimal laser equipment workspace sizes
 */

export interface WorkpieceInput {
  length: number; // mm
  width: number; // mm
  quantity: number;
  margin: number; // mm - spacing between parts
  rotationAllowed: boolean;
  unit: 'metric' | 'imperial';
}

export interface WorkspaceSize {
  length: number; // mm
  width: number; // mm
  commonName: string;
  category: 'small' | 'medium' | 'large' | 'industrial';
}

export const COMMON_WORKSPACE_SIZES: WorkspaceSize[] = [
  { length: 600, width: 400, commonName: '600x400mm', category: 'small' },
  { length: 900, width: 600, commonName: '900x600mm', category: 'small' },
  { length: 1300, width: 900, commonName: '1300x900mm', category: 'medium' },
  { length: 1500, width: 1000, commonName: '1500x1000mm', category: 'medium' },
  { length: 2000, width: 1000, commonName: '2000x1000mm', category: 'medium' },
  { length: 2500, width: 1300, commonName: '2500x1300mm', category: 'medium' },
  { length: 3000, width: 1500, commonName: '3000x1500mm', category: 'large' },
  { length: 4000, width: 2000, commonName: '4000x2000mm', category: 'large' },
  { length: 6000, width: 2000, commonName: '6000x2000mm', category: 'industrial' },
  { length: 8000, width: 2500, commonName: '8000x2500mm', category: 'industrial' },
];

export interface LayoutResult {
  partsPerRow: number;
  rows: number;
  totalParts: number;
  utilizationPercent: number;
  actualUsedArea: number; // mm²
  totalWorkspace: number; // mm²
  wastagePercent: number;
}

export interface WorkspaceMatchResult {
  workspace: WorkspaceSize;
  layout: LayoutResult;
  matchScore: number; // 0-100
  isOptimal: boolean;
  recommendations: string[];
  warnings: string[];
}

/**
 * Calculate optimal layout for given workspace
 */
function calculateLayout(
  workpiece: WorkpieceInput,
  workspace: WorkspaceSize
): LayoutResult {
  const { length: partL, width: partW, margin, rotationAllowed } = workpiece;
  const { length: wsL, width: wsW } = workspace;

  // Try both orientations
  const layouts: LayoutResult[] = [];

  // Orientation 1: Normal
  const partsPerRow1 = Math.floor((wsL + margin) / (partL + margin));
  const rows1 = Math.floor((wsW + margin) / (partW + margin));
  const total1 = partsPerRow1 * rows1;
  const usedArea1 = total1 * partL * partW;
  const wsArea = wsL * wsW;

  layouts.push({
    partsPerRow: partsPerRow1,
    rows: rows1,
    totalParts: total1,
    utilizationPercent: Math.round((usedArea1 / wsArea) * 100 * 10) / 10,
    actualUsedArea: usedArea1,
    totalWorkspace: wsArea,
    wastagePercent: Math.round(((wsArea - usedArea1) / wsArea) * 100 * 10) / 10,
  });

  // Orientation 2: Rotated 90°
  if (rotationAllowed) {
    const partsPerRow2 = Math.floor((wsL + margin) / (partW + margin));
    const rows2 = Math.floor((wsW + margin) / (partL + margin));
    const total2 = partsPerRow2 * rows2;
    const usedArea2 = total2 * partL * partW;

    layouts.push({
      partsPerRow: partsPerRow2,
      rows: rows2,
      totalParts: total2,
      utilizationPercent: Math.round((usedArea2 / wsArea) * 100 * 10) / 10,
      actualUsedArea: usedArea2,
      totalWorkspace: wsArea,
      wastagePercent: Math.round(((wsArea - usedArea2) / wsArea) * 100 * 10) / 10,
    });
  }

  // Return best layout
  return layouts.reduce((best, current) =>
    current.utilizationPercent > best.utilizationPercent ? current : best
  );
}

/**
 * Calculate match score for workspace
 */
function calculateMatchScore(layout: LayoutResult, requiredQty: number): number {
  let score = 0;

  // Utilization score (0-40 points)
  score += Math.min(layout.utilizationPercent * 0.4, 40);

  // Quantity coverage (0-30 points)
  if (layout.totalParts >= requiredQty) {
    const excess = layout.totalParts - requiredQty;
    const excessRatio = excess / requiredQty;
    // Penalize too much excess
    score += excessRatio < 0.3 ? 30 : 30 - Math.min(excessRatio * 20, 15);
  } else {
    // Penalize not meeting quantity
    score += (layout.totalParts / requiredQty) * 15;
  }

  // Wastage penalty (0-30 points)
  score += Math.max(30 - layout.wastagePercent * 0.5, 0);

  return Math.round(score);
}

/**
 * Match workpiece with optimal workspace sizes
 */
export function matchWorkspace(input: WorkpieceInput): WorkspaceMatchResult[] {
  // Convert imperial to metric
  const length = input.unit === 'imperial' ? input.length * 25.4 : input.length;
  const width = input.unit === 'imperial' ? input.width * 25.4 : input.width;
  const margin = input.unit === 'imperial' ? input.margin * 25.4 : input.margin;

  const normalizedInput: WorkpieceInput = {
    ...input,
    length,
    width,
    margin,
    unit: 'metric',
  };

  const results: WorkspaceMatchResult[] = [];

  for (const workspace of COMMON_WORKSPACE_SIZES) {
    const layout = calculateLayout(normalizedInput, workspace);
    const matchScore = calculateMatchScore(layout, input.quantity);

    const recommendations: string[] = [];
    const warnings: string[] = [];

    // Generate recommendations
    if (layout.totalParts >= input.quantity) {
      const excess = layout.totalParts - input.quantity;
      if (excess > 0) {
        recommendations.push(
          `Can fit ${layout.totalParts} parts per sheet (${excess} extra beyond required ${input.quantity})`
        );
      }
    }

    if (layout.utilizationPercent > 75) {
      recommendations.push('Excellent material utilization - minimal waste');
    } else if (layout.utilizationPercent > 60) {
      recommendations.push('Good material utilization');
    }

    if (layout.totalParts >= input.quantity * 2) {
      recommendations.push(
        'Consider batch processing - can fit multiple production runs'
      );
    }

    // Generate warnings
    if (layout.totalParts < input.quantity) {
      warnings.push(
        `Cannot fit required quantity in single sheet - need ${Math.ceil(
          input.quantity / layout.totalParts
        )} sheets`
      );
    }

    if (layout.utilizationPercent < 40) {
      warnings.push('Low utilization - consider smaller workspace or nested layouts');
    }

    if (layout.wastagePercent > 50) {
      warnings.push('High material wastage - consider alternative part orientation');
    }

    const isOptimal =
      matchScore >= 70 &&
      layout.totalParts >= input.quantity &&
      layout.utilizationPercent >= 60;

    results.push({
      workspace,
      layout,
      matchScore,
      isOptimal,
      recommendations,
      warnings,
    });
  }

  // Sort by match score
  return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Calculate number of sheets needed
 */
export function calculateSheetsNeeded(
  totalParts: number,
  partsPerSheet: number
): number {
  return Math.ceil(totalParts / partsPerSheet);
}

/**
 * Calculate cost estimation
 */
export interface CostEstimate {
  sheetsNeeded: number;
  totalMaterialArea: number; // m²
  usedMaterialArea: number; // m²
  wastedMaterialArea: number; // m²
  estimatedCostPerSheet?: number;
  totalEstimatedCost?: number;
}

export function calculateCostEstimate(
  result: WorkspaceMatchResult,
  requiredQty: number,
  costPerSheet?: number
): CostEstimate {
  const sheetsNeeded = calculateSheetsNeeded(requiredQty, result.layout.totalParts);
  const sheetAreaM2 = (result.workspace.length * result.workspace.width) / 1_000_000;
  const totalMaterialArea = sheetsNeeded * sheetAreaM2;
  const usedMaterialArea =
    (result.layout.actualUsedArea / 1_000_000) * sheetsNeeded;
  const wastedMaterialArea = totalMaterialArea - usedMaterialArea;

  return {
    sheetsNeeded,
    totalMaterialArea,
    usedMaterialArea,
    wastedMaterialArea,
    estimatedCostPerSheet: costPerSheet,
    totalEstimatedCost: costPerSheet ? costPerSheet * sheetsNeeded : undefined,
  };
}

/**
 * Validate workspace input
 */
export function validateWorkspaceInput(input: Partial<WorkpieceInput>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!input.length || input.length <= 0) {
    errors.push('Length must be greater than 0');
  } else if (input.length > 10000) {
    errors.push('Length exceeds maximum limit (10000mm)');
  }

  if (!input.width || input.width <= 0) {
    errors.push('Width must be greater than 0');
  } else if (input.width > 10000) {
    errors.push('Width exceeds maximum limit (10000mm)');
  }

  if (!input.quantity || input.quantity <= 0) {
    errors.push('Quantity must be at least 1');
  } else if (input.quantity > 10000) {
    errors.push('Quantity exceeds reasonable limit (10000 parts)');
  }

  if (input.margin === undefined || input.margin < 0) {
    errors.push('Margin must be 0 or greater');
  } else if (input.margin > 100) {
    errors.push('Margin seems excessive (>100mm)');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Format dimensions for display
 */
export function formatDimension(mm: number, unit: 'metric' | 'imperial'): string {
  if (unit === 'imperial') {
    const inches = mm / 25.4;
    return `${inches.toFixed(2)}"`;
  }
  return `${mm.toFixed(0)}mm`;
}

/**
 * Format area for display
 */
export function formatArea(mm2: number, unit: 'metric' | 'imperial'): string {
  if (unit === 'imperial') {
    const sqInches = mm2 / (25.4 * 25.4);
    if (sqInches > 144) {
      return `${(sqInches / 144).toFixed(2)} sq ft`;
    }
    return `${sqInches.toFixed(2)} sq in`;
  }
  const sqMeters = mm2 / 1_000_000;
  if (sqMeters > 1) {
    return `${sqMeters.toFixed(2)} m²`;
  }
  return `${(mm2 / 100).toFixed(0)} cm²`;
}




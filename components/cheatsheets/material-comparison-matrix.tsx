'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MaterialCharacteristics } from '@/lib/data/cheatsheets/material-comparison-data';

interface MaterialComparisonMatrixProps {
  materials: MaterialCharacteristics[];
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    case 'hard':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'low':
    case 'none':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'medium':
    case 'good':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    case 'high':
    case 'excellent':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'fair':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  }
};

export function MaterialComparisonMatrix({ materials }: MaterialComparisonMatrixProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Material Characteristics Comparison</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Quick comparison of cutting characteristics across different materials
        </p>
      </CardHeader>
      <CardContent>
        {/* Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold">Material</th>
                <th className="text-left py-3 px-4 font-semibold">Difficulty</th>
                <th className="text-left py-3 px-4 font-semibold">Reflectivity</th>
                <th className="text-left py-3 px-4 font-semibold">Thermal Conductivity</th>
                <th className="text-left py-3 px-4 font-semibold">Edge Quality</th>
                <th className="text-left py-3 px-4 font-semibold">Oxidation</th>
                <th className="text-left py-3 px-4 font-semibold">Gas Cost</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.materialId} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium">{material.materialName}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(material.cuttingDifficulty)}`}>
                      {material.cuttingDifficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.reflectivity)}`}>
                      {material.reflectivity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.thermalConductivity)}`}>
                      {material.thermalConductivity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.edgeQuality)}`}>
                      {material.edgeQuality}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.oxidationRisk)}`}>
                      {material.oxidationRisk}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.gasCostLevel)}`}>
                      {material.gasCostLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {materials.map((material) => (
            <Card key={material.materialId}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{material.materialName}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Cutting Difficulty:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(material.cuttingDifficulty)}`}>
                    {material.cuttingDifficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Reflectivity:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.reflectivity)}`}>
                    {material.reflectivity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Thermal Conductivity:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.thermalConductivity)}`}>
                    {material.thermalConductivity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Edge Quality:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.edgeQuality)}`}>
                    {material.edgeQuality}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Oxidation Risk:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.oxidationRisk)}`}>
                    {material.oxidationRisk}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Gas Cost:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(material.gasCostLevel)}`}>
                    {material.gasCostLevel}
                  </span>
                </div>
                
                {/* Applications */}
                <div className="pt-2 border-t mt-3">
                  <p className="font-medium text-xs mb-1">Typical Applications:</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {material.typicalApplications.slice(0, 3).map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t">
          <p className="text-sm font-medium mb-2">Legend:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              <span>Low/Easy/None</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
              <span>Medium/Good</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              <span>High/Excellent</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
              <span>Hard/Challenging</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


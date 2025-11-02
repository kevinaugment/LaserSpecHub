'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ALL_MATERIAL_PARAMETERS, type CuttingParameter } from '@/lib/data/cheatsheets/material-thickness-parameters-data';
import { Search } from 'lucide-react';

export function QuickParameterFinder() {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedPower, setSelectedPower] = useState<string>('');
  const [selectedThickness, setSelectedThickness] = useState<number | null>(null);

  // Get available power levels for selected material
  const availablePowers = useMemo(() => {
    if (!selectedMaterial) return [];
    const material = ALL_MATERIAL_PARAMETERS.find(m => m.materialId === selectedMaterial);
    return material?.powerLevels.map(pl => pl.power) || [];
  }, [selectedMaterial]);

  // Get available thicknesses for selected material and power
  const availableThicknesses = useMemo(() => {
    if (!selectedMaterial || !selectedPower) return [];
    const material = ALL_MATERIAL_PARAMETERS.find(m => m.materialId === selectedMaterial);
    const powerLevel = material?.powerLevels.find(pl => pl.power === selectedPower);
    return powerLevel?.parameters.map(p => p.thickness) || [];
  }, [selectedMaterial, selectedPower]);

  // Get parameters for selection
  const parameters = useMemo((): CuttingParameter | null => {
    if (!selectedMaterial || !selectedPower || selectedThickness === null) return null;
    const material = ALL_MATERIAL_PARAMETERS.find(m => m.materialId === selectedMaterial);
    const powerLevel = material?.powerLevels.find(pl => pl.power === selectedPower);
    return powerLevel?.parameters.find(p => p.thickness === selectedThickness) || null;
  }, [selectedMaterial, selectedPower, selectedThickness]);

  // Get material info
  const materialInfo = useMemo(() => {
    if (!selectedMaterial) return null;
    return ALL_MATERIAL_PARAMETERS.find(m => m.materialId === selectedMaterial);
  }, [selectedMaterial]);

  // Reset dependent selections when parent changes
  const handleMaterialChange = (value: string) => {
    setSelectedMaterial(value);
    setSelectedPower('');
    setSelectedThickness(null);
  };

  const handlePowerChange = (value: string) => {
    setSelectedPower(value);
    setSelectedThickness(null);
  };

  return (
    <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-800">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Search className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <CardTitle className="text-2xl">Quick Parameter Finder</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Select material, power, and thickness to instantly find recommended cutting parameters
        </p>
      </CardHeader>
      <CardContent>
        {/* Selection Controls */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {/* Material Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">1. Select Material</label>
            <select
              value={selectedMaterial}
              onChange={(e) => handleMaterialChange(e.target.value)}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring text-sm"
            >
              <option value="">Choose material...</option>
              {ALL_MATERIAL_PARAMETERS.map((material) => (
                <option key={material.materialId} value={material.materialId}>
                  {material.materialName}
                </option>
              ))}
            </select>
          </div>

          {/* Power Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">2. Select Power</label>
            <select
              value={selectedPower}
              onChange={(e) => handlePowerChange(e.target.value)}
              disabled={!selectedMaterial}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Choose power...</option>
              {availablePowers.map((power) => (
                <option key={power} value={power}>
                  {power}
                </option>
              ))}
            </select>
          </div>

          {/* Thickness Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">3. Select Thickness</label>
            <select
              value={selectedThickness ?? ''}
              onChange={(e) => setSelectedThickness(Number(e.target.value))}
              disabled={!selectedPower}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Choose thickness...</option>
              {availableThicknesses.map((thickness) => (
                <option key={thickness} value={thickness}>
                  {thickness} mm
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Display */}
        {parameters && materialInfo ? (
          <div className="space-y-4">
            {/* Material Info Banner */}
            <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Assist Gas:</span>
                <span className="font-medium">{materialInfo.assistGas}</span>
              </div>
              {materialInfo.gasPurity && (
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Gas Purity:</span>
                  <span className="font-medium">{materialInfo.gasPurity}</span>
                </div>
              )}
            </div>

            {/* Parameter Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-xs text-muted-foreground mb-1">Cutting Speed</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {parameters.speedMPerMin}
                </div>
                <div className="text-xs text-muted-foreground mt-1">m/min</div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-xs text-muted-foreground mb-1">Gas Pressure</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {parameters.gasPressureBar}
                </div>
                <div className="text-xs text-muted-foreground mt-1">bar</div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="text-xs text-muted-foreground mb-1">Nozzle Diameter</div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  ø {parameters.nozzleDiameterMm}
                </div>
                <div className="text-xs text-muted-foreground mt-1">mm</div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-red-200 dark:border-red-800">
                <div className="text-xs text-muted-foreground mb-1">Focus Position</div>
                <div className={`text-2xl font-bold ${parameters.focusPositionMm < 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                  {parameters.focusPositionMm > 0 ? '+' : ''}{parameters.focusPositionMm}
                </div>
                <div className="text-xs text-muted-foreground mt-1">mm</div>
              </div>
            </div>

            {/* Notes */}
            {parameters.notes && (
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Note:</strong> {parameters.notes}
                </p>
              </div>
            )}

            {/* Optimization Tip */}
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                💡 <strong>Tip:</strong> These are baseline parameters. Adjust ±10-15% based on your equipment condition, material batch, and quality requirements.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Select material, power, and thickness to view parameters</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


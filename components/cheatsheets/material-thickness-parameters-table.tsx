'use client';

import { useState } from 'react';
import type { MaterialParametersData } from '@/lib/data/cheatsheets/material-thickness-parameters-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MaterialParametersTableProps {
  materialData: MaterialParametersData;
}

export function MaterialParametersTable({ materialData }: MaterialParametersTableProps) {
  const [selectedPower, setSelectedPower] = useState<string>(
    materialData.powerLevels[0]?.power || ''
  );

  const powerLevel = materialData.powerLevels.find(p => p.power === selectedPower);
  
  if (!powerLevel) return null;

  return (
    <div className="space-y-4">
      {/* Power Selector */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{materialData.materialName}</h3>
          <p className="text-sm text-muted-foreground">
            辅助气体: {materialData.assistGas}
            {materialData.gasPurity && ` | 纯度: ${materialData.gasPurity}`}
          </p>
        </div>
        
        <div className="w-full sm:w-auto">
          <label className="block text-sm font-medium mb-1.5">激光功率</label>
          <select
            value={selectedPower}
            onChange={(e) => setSelectedPower(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring"
          >
            {materialData.powerLevels.map((pl) => (
              <option key={pl.power} value={pl.power}>
                {pl.power}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                厚度 (mm)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                切割速度<br />(m/min)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                气体压力<br />(bar)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                喷嘴直径<br />(mm)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                焦点位置<br />(mm)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                备注
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {powerLevel.parameters.map((param, idx) => (
              <tr 
                key={idx} 
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3 text-sm font-medium">
                  {param.thickness}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {param.speedMPerMin}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {param.gasPressureBar}
                </td>
                <td className="px-4 py-3 text-sm">
                  ø {param.nozzleDiameterMm}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={param.focusPositionMm < 0 ? 'text-red-600 dark:text-red-400' : param.focusPositionMm > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-600'}>
                    {param.focusPositionMm > 0 ? '+' : ''}{param.focusPositionMm}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {param.notes || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-3">
        {powerLevel.parameters.map((param, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">厚度: {param.thickness} mm</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">切割速度:</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  {param.speedMPerMin} m/min
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">气体压力:</span>
                <span className="font-medium">{param.gasPressureBar} bar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">喷嘴直径:</span>
                <span className="font-medium">ø {param.nozzleDiameterMm} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">焦点位置:</span>
                <span className={`font-medium ${param.focusPositionMm < 0 ? 'text-red-600 dark:text-red-400' : param.focusPositionMm > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-600'}`}>
                  {param.focusPositionMm > 0 ? '+' : ''}{param.focusPositionMm} mm
                </span>
              </div>
              {param.notes && (
                <div className="pt-2 border-t">
                  <span className="text-xs text-muted-foreground">{param.notes}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* General Notes */}
      {materialData.generalNotes && materialData.generalNotes.length > 0 && (
        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-4">
            <h4 className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-200">
              重要提示
            </h4>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
              {materialData.generalNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}


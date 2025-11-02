'use client';

import { useState } from 'react';
import { PRESSURE_THICKNESS_CURVES } from '@/lib/data/cheatsheets/assist-gas-data';

export function PressureThicknessChart() {
  const materials = Array.from(new Set(PRESSURE_THICKNESS_CURVES.map(c => c.material)));
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  const materialData = PRESSURE_THICKNESS_CURVES.filter(c => c.material === selectedMaterial);

  // Get all unique gas types for this material
  const gasTypes = materialData.map(d => d.gasType);

  const gasColors: { [key: string]: string } = {
    'Oxygen': '#ef4444',
    'Nitrogen': '#3b82f6',
    'Compressed Air': '#10b981',
    'Argon': '#8b5cf6'
  };

  return (
    <div className="space-y-6">
      {/* Material Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Material
        </label>
        <div className="flex flex-wrap gap-2">
          {materials.map((material) => (
            <button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedMaterial === material
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Display */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Pressure vs Thickness for {selectedMaterial}
        </h3>

        {/* Custom Chart using CSS/SVG */}
        <div className="space-y-6">
          {materialData.map((gasData) => (
            <div key={gasData.gasType} className="space-y-3">
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: gasColors[gasData.gasType] || '#6b7280' }}
                ></div>
                <h4 className="text-sm font-semibold text-gray-900">{gasData.gasType}</h4>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                        Thickness
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                        Pressure
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                        Flow Rate
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                        Speed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {gasData.dataPoints.map((point, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium text-gray-900">
                          {point.thickness} mm
                        </td>
                        <td className="px-3 py-2 text-gray-700">{point.pressure}</td>
                        <td className="px-3 py-2 text-gray-700">{point.flowRate}</td>
                        <td className="px-3 py-2 text-gray-700">{point.speed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Visual Bar Representation */}
              <div className="space-y-2">
                {gasData.dataPoints.map((point, idx) => {
                  // Parse pressure range (e.g., "2-3 bar" -> average 2.5)
                  const pressureMatch = point.pressure.match(/(\d+)-(\d+)/);
                  const avgPressure = pressureMatch
                    ? (parseInt(pressureMatch[1]) + parseInt(pressureMatch[2])) / 2
                    : 10;
                  const maxPressure = 25; // Max bar for visualization
                  const widthPercent = (avgPressure / maxPressure) * 100;

                  return (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-12 text-xs text-gray-600 flex-shrink-0">
                        {point.thickness}mm
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="h-full rounded-full flex items-center px-2 text-xs font-medium text-white transition-all"
                          style={{
                            width: `${Math.max(widthPercent, 10)}%`,
                            backgroundColor: gasColors[gasData.gasType] || '#6b7280'
                          }}
                        >
                          <span className="whitespace-nowrap">{point.pressure}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend and Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">📊 How to Read This Chart</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Thickness</strong>: Material thickness in millimeters</li>
          <li>• <strong>Pressure</strong>: Recommended assist gas pressure range in bar</li>
          <li>• <strong>Flow Rate</strong>: Gas consumption in liters per minute</li>
          <li>• <strong>Speed</strong>: Typical cutting speed in millimeters per second</li>
        </ul>
        <p className="text-xs text-blue-700 mt-3">
          Note: These are reference values. Always start with manufacturer recommendations and adjust
          based on actual cut quality. Thicker materials generally require higher pressure and flow rates.
        </p>
      </div>
    </div>
  );
}


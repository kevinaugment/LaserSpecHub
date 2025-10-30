'use client';

import { useState } from 'react';
import { 
  LaserTypeSpeedData, 
  MaterialSpeedData,
  CuttingSpeedEntry 
} from '@/lib/data/cheatsheets/cutting-speed-data';

interface CuttingSpeedTableProps {
  laserData: LaserTypeSpeedData;
}

export function CuttingSpeedTable({ laserData }: CuttingSpeedTableProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    laserData.materials[0]?.materialId || ''
  );
  const [selectedThickness, setSelectedThickness] = useState<number | 'all'>('all');

  const material = laserData.materials.find(m => m.materialId === selectedMaterial);
  
  if (!material) return null;

  // Get all power levels for this material
  const powerLevels = Array.from(
    new Set(
      material.entries.flatMap(entry => Object.keys(entry.speeds))
    )
  ).sort((a, b) => {
    const aVal = parseFloat(a.replace(/[^\d.]/g, ''));
    const bVal = parseFloat(b.replace(/[^\d.]/g, ''));
    return aVal - bVal;
  });

  // Filter entries by thickness
  const displayEntries = selectedThickness === 'all' 
    ? material.entries 
    : material.entries.filter(e => e.thickness === selectedThickness);

  // Get max speed for color coding
  const allSpeeds = displayEntries.flatMap(entry => Object.values(entry.speeds));
  const maxSpeed = Math.max(...allSpeeds);

  // Color intensity based on speed
  const getSpeedColor = (speed: number | undefined) => {
    if (!speed) return 'bg-gray-100 text-gray-400';
    const intensity = Math.min((speed / maxSpeed) * 100, 100);
    if (intensity > 70) return 'bg-green-100 text-green-900 font-semibold';
    if (intensity > 40) return 'bg-blue-100 text-blue-900';
    if (intensity > 20) return 'bg-yellow-100 text-yellow-900';
    return 'bg-orange-100 text-orange-900';
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Material Selector */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material
          </label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {laserData.materials.map((mat) => (
              <option key={mat.materialId} value={mat.materialId}>
                {mat.materialName}
              </option>
            ))}
          </select>
        </div>

        {/* Thickness Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Thickness Filter
          </label>
          <select
            value={selectedThickness}
            onChange={(e) => setSelectedThickness(
              e.target.value === 'all' ? 'all' : parseInt(e.target.value)
            )}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="all">All Thicknesses</option>
            {material.entries.map((entry) => (
              <option key={entry.thickness} value={entry.thickness}>
                {entry.thickness}mm
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10"
                  >
                    Thickness (mm)
                  </th>
                  {powerLevels.map((power) => (
                    <th 
                      key={power}
                      scope="col" 
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {power}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayEntries.map((entry) => (
                  <tr key={entry.thickness} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      {entry.thickness}mm
                    </td>
                    {powerLevels.map((power) => {
                      const speed = entry.speeds[power];
                      return (
                        <td 
                          key={`${entry.thickness}-${power}`}
                          className={`px-6 py-4 whitespace-nowrap text-sm text-center ${getSpeedColor(speed)}`}
                        >
                          {speed ? `${speed} m/min` : '—'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {displayEntries.map((entry) => (
          <div 
            key={entry.thickness}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Thickness: {entry.thickness}mm
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {powerLevels.map((power) => {
                const speed = entry.speeds[power];
                if (!speed) return null;
                return (
                  <div 
                    key={`${entry.thickness}-${power}`}
                    className={`p-3 rounded-lg ${getSpeedColor(speed)}`}
                  >
                    <div className="text-xs font-medium opacity-75">{power}</div>
                    <div className="text-lg font-bold">{speed} m/min</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Material Notes */}
      {material.notes && material.notes.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            📝 Notes for {material.materialName}
          </h4>
          <ul className="space-y-1 text-sm text-blue-800">
            {material.notes.map((note, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Legend */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Speed Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-100 border border-green-200 rounded mr-2"></div>
            <span>High Speed (70%+)</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-100 border border-blue-200 rounded mr-2"></div>
            <span>Medium Speed (40-70%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-yellow-100 border border-yellow-200 rounded mr-2"></div>
            <span>Low Speed (20-40%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-orange-100 border border-orange-200 rounded mr-2"></div>
            <span>Very Low (&lt;20%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}



'use client';

import { useState } from 'react';
import { 
  MATERIAL_ABSORPTION_DATA,
  LASER_TYPES,
  MaterialAbsorptionData,
  LaserTypeInfo
} from '@/lib/data/cheatsheets/wavelength-absorption-data';

export function WavelengthAbsorptionMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLaser, setSelectedLaser] = useState<number | 'all'>('all');

  // Filter materials
  const filteredMaterials = selectedCategory === 'all'
    ? MATERIAL_ABSORPTION_DATA
    : MATERIAL_ABSORPTION_DATA.filter(m => m.category === selectedCategory);

  // Filter laser types
  const displayLasers = selectedLaser === 'all'
    ? LASER_TYPES
    : LASER_TYPES.filter(l => l.wavelengthNm === selectedLaser);

  const getAbsorptionColor = (rate: number) => {
    if (rate >= 80) return 'bg-green-500 text-white';
    if (rate >= 60) return 'bg-green-400 text-white';
    if (rate >= 40) return 'bg-yellow-400 text-gray-900';
    if (rate >= 20) return 'bg-orange-400 text-white';
    return 'bg-red-400 text-white';
  };

  const getQualityBadge = (quality: string) => {
    const colors: Record<string, string> = {
      'Excellent': 'bg-green-600 text-white',
      'Very Good': 'bg-green-500 text-white',
      'Good': 'bg-blue-500 text-white',
      'Fair': 'bg-yellow-500 text-gray-900',
      'Poor': 'bg-orange-500 text-white',
      'Very Poor': 'bg-red-500 text-white'
    };
    return colors[quality] || 'bg-gray-500 text-white';
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="all">All Materials</option>
            <option value="ferrous-metal">Ferrous Metals (Steel)</option>
            <option value="non-ferrous-metal">Non-Ferrous Metals (Al, Cu, Ti)</option>
            <option value="non-metal">Non-Metals (Plastics, Wood)</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Laser Wavelength
          </label>
          <select
            value={selectedLaser}
            onChange={(e) => setSelectedLaser(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="all">All Wavelengths</option>
            {LASER_TYPES.map((laser) => (
              <option key={laser.wavelengthNm} value={laser.wavelengthNm}>
                {laser.name} ({laser.wavelength})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Matrix View */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                    Material
                  </th>
                  {displayLasers.map((laser) => (
                    <th 
                      key={laser.wavelengthNm}
                      className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div>{laser.name}</div>
                      <div className="text-xs text-gray-400 normal-case">{laser.wavelength}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMaterials.map((material) => (
                  <tr key={material.materialId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      <div>{material.materialName}</div>
                      <div className="text-xs text-gray-500 font-normal">{material.description}</div>
                    </td>
                    {displayLasers.map((laser) => {
                      const absorption = material.absorptionByWavelength.find(
                        a => a.wavelengthNm === laser.wavelengthNm
                      );
                      
                      if (!absorption) {
                        return (
                          <td key={`${material.materialId}-${laser.wavelengthNm}`} className="px-4 py-4 text-center">
                            <span className="text-gray-400 text-sm">N/A</span>
                          </td>
                        );
                      }

                      return (
                        <td 
                          key={`${material.materialId}-${laser.wavelengthNm}`}
                          className="px-4 py-4"
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <div className={`px-3 py-1 rounded-full text-sm font-bold ${getAbsorptionColor(absorption.absorptionRate)}`}>
                              {absorption.absorptionRate}%
                            </div>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getQualityBadge(absorption.quality)}`}>
                              {absorption.quality}
                            </span>
                            {absorption.notes && (
                              <span className="text-xs text-gray-500 text-center">{absorption.notes}</span>
                            )}
                          </div>
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
        {filteredMaterials.map((material) => (
          <div 
            key={material.materialId}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {material.materialName}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{material.description}</p>
            
            <div className="space-y-3">
              {material.absorptionByWavelength
                .filter(a => selectedLaser === 'all' || a.wavelengthNm === selectedLaser)
                .map((absorption) => {
                  const laser = LASER_TYPES.find(l => l.wavelengthNm === absorption.wavelengthNm);
                  return (
                    <div 
                      key={`${material.materialId}-${absorption.wavelengthNm}`}
                      className="border border-gray-200 rounded-lg p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-medium text-gray-900">{laser?.name}</div>
                          <div className="text-xs text-gray-500">{absorption.wavelength}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getAbsorptionColor(absorption.absorptionRate)}`}>
                          {absorption.absorptionRate}%
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getQualityBadge(absorption.quality)}`}>
                          {absorption.quality}
                        </span>
                        {absorption.notes && (
                          <span className="text-xs text-gray-600">{absorption.notes}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            {material.recommendedLaser.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="text-xs font-medium text-green-700 mb-1">✓ Recommended:</div>
                <div className="text-xs text-gray-700">{material.recommendedLaser.join(', ')}</div>
              </div>
            )}
            {material.notRecommended.length > 0 && (
              <div className="mt-2">
                <div className="text-xs font-medium text-red-700 mb-1">✗ Not Recommended:</div>
                <div className="text-xs text-gray-700">{material.notRecommended.join(', ')}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Absorption Rate Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded mr-2"></div>
            <div>
              <div className="font-medium">80-100%</div>
              <div className="text-gray-600">Excellent</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded mr-2"></div>
            <div>
              <div className="font-medium">60-79%</div>
              <div className="text-gray-600">Very Good</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 rounded mr-2"></div>
            <div>
              <div className="font-medium">40-59%</div>
              <div className="text-gray-600">Good</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-400 rounded mr-2"></div>
            <div>
              <div className="font-medium">20-39%</div>
              <div className="text-gray-600">Fair/Poor</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-400 rounded mr-2"></div>
            <div>
              <div className="font-medium">&lt;20%</div>
              <div className="text-gray-600">Very Poor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



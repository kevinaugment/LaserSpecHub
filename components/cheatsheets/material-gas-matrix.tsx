'use client';

import { useState } from 'react';
import { MATERIAL_GAS_MATRIX, MaterialGasCompatibility } from '@/lib/data/cheatsheets/assist-gas-data';

export function MaterialGasMatrix() {
  const [selectedCell, setSelectedCell] = useState<MaterialGasCompatibility | null>(null);

  const materials = Array.from(new Set(MATERIAL_GAS_MATRIX.map(m => m.material)));
  const gases = Array.from(new Set(MATERIAL_GAS_MATRIX.map(m => m.gas)));

  const getCompatibilityColor = (compatibility: string) => {
    switch (compatibility) {
      case 'optimal':
        return 'bg-green-500 hover:bg-green-600';
      case 'acceptable':
        return 'bg-yellow-400 hover:bg-yellow-500';
      case 'limited':
        return 'bg-orange-400 hover:bg-orange-500';
      case 'not-recommended':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-300 hover:bg-gray-400';
    }
  };

  const getCompatibilitySymbol = (compatibility: string) => {
    switch (compatibility) {
      case 'optimal':
        return '✓✓';
      case 'acceptable':
        return '✓';
      case 'limited':
        return '△';
      case 'not-recommended':
        return '✗';
      default:
        return '?';
    }
  };

  const getCellData = (material: string, gas: string): MaterialGasCompatibility | null => {
    return MATERIAL_GAS_MATRIX.find(m => m.material === material && m.gas === gas) || null;
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-200">
                  Material / Gas
                </th>
                {gases.map((gas) => (
                  <th
                    key={gas}
                    className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-200 last:border-r-0"
                  >
                    {gas}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((material) => (
                <tr key={material} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
                    {material}
                  </td>
                  {gases.map((gas) => {
                    const cellData = getCellData(material, gas);
                    if (!cellData) {
                      return (
                        <td
                          key={gas}
                          className="px-4 py-3 text-center border-r border-gray-200 last:border-r-0"
                        >
                          <div className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500">
                            N/A
                          </div>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={gas}
                        className="px-4 py-3 text-center border-r border-gray-200 last:border-r-0"
                      >
                        <button
                          onClick={() => setSelectedCell(cellData)}
                          className={`${getCompatibilityColor(
                            cellData.compatibility
                          )} text-white font-bold rounded px-3 py-2 text-sm transition-all cursor-pointer w-full`}
                          title={`Click for details: ${material} + ${gas}`}
                        >
                          {getCompatibilitySymbol(cellData.compatibility)}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 text-white font-bold rounded px-2 py-1 text-xs">✓✓</div>
            <span className="text-xs text-gray-700">Optimal Choice</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 text-white font-bold rounded px-2 py-1 text-xs">✓</div>
            <span className="text-xs text-gray-700">Acceptable</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-orange-400 text-white font-bold rounded px-2 py-1 text-xs">△</div>
            <span className="text-xs text-gray-700">Limited Use</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 text-white font-bold rounded px-2 py-1 text-xs">✗</div>
            <span className="text-xs text-gray-700">Not Recommended</span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCell && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedCell.material} + {selectedCell.gas}
                  </h3>
                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedCell.compatibility === 'optimal'
                          ? 'bg-green-100 text-green-800'
                          : selectedCell.compatibility === 'acceptable'
                          ? 'bg-yellow-100 text-yellow-800'
                          : selectedCell.compatibility === 'limited'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {selectedCell.compatibility.charAt(0).toUpperCase() +
                        selectedCell.compatibility.slice(1)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCell(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Thickness Range</h4>
                  <p className="text-gray-900">{selectedCell.thicknessRange}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Edge Quality</h4>
                  <p className="text-gray-900">{selectedCell.edgeQuality}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Notes</h4>
                  <p className="text-gray-900">{selectedCell.notes}</p>
                </div>

                {selectedCell.compatibility === 'optimal' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      <strong>✓ Recommended:</strong> This gas-material combination is the industry
                      standard and will provide the best results for most applications.
                    </p>
                  </div>
                )}

                {selectedCell.compatibility === 'not-recommended' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">
                      <strong>⚠ Warning:</strong> This combination is not recommended and may result
                      in poor quality, safety issues, or equipment damage. Consider alternative gases.
                    </p>
                  </div>
                )}

                {selectedCell.compatibility === 'limited' && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-800">
                      <strong>△ Limited:</strong> This combination can work but has significant
                      limitations. Consider only if budget or availability constraints exist.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setSelectedCell(null)}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


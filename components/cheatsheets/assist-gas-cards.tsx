'use client';

import { useState } from 'react';
import { AssistGasData, GAS_COST_COMPARISON } from '@/lib/data/cheatsheets/assist-gas-data';

interface AssistGasCardsProps {
  gasData: AssistGasData[];
}

export function AssistGasCards({ gasData }: AssistGasCardsProps) {
  const [selectedGas, setSelectedGas] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const selectedGasData = selectedGas ? gasData.find(g => g.gasId === selectedGas) : null;

  // Get unique materials across all gases
  const allMaterials = Array.from(
    new Set(
      gasData.flatMap(gas => 
        gas.applications.map(app => app.material)
      )
    )
  );

  const getCostColor = (relativeCost: number) => {
    if (relativeCost <= 0.5) return 'bg-green-100 text-green-800';
    if (relativeCost <= 1.5) return 'bg-blue-100 text-blue-800';
    if (relativeCost <= 5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      {/* Material Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Material
        </label>
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="all">All Materials</option>
          {allMaterials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      </div>

      {/* Gas Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gasData.map((gas) => {
          // Filter applications by selected material
          const filteredApps = selectedMaterial === 'all' 
            ? gas.applications 
            : gas.applications.filter(app => app.material === selectedMaterial);

          if (filteredApps.length === 0 && selectedMaterial !== 'all') return null;

          return (
            <div
              key={gas.gasId}
              className={`border-2 rounded-lg p-5 cursor-pointer transition-all ${
                selectedGas === gas.gasId
                  ? 'border-primary-600 bg-primary-50 shadow-lg'
                  : 'border-gray-200 hover:border-primary-400 hover:shadow-md'
              }`}
              onClick={() => setSelectedGas(selectedGas === gas.gasId ? null : gas.gasId)}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {gas.gasName}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCostColor(gas.relativeCost)}`}>
                    {gas.relativeCost}x cost
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Formula: <span className="font-medium">{gas.chemicalFormula}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Purity: <span className="font-medium">{gas.purity}</span>
                </div>
              </div>

              {/* Cost Info */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-600 mb-1">Cost per m³</div>
                <div className="text-lg font-bold text-primary-600">{gas.costPerCubicMeter}</div>
              </div>

              {/* Applications Count */}
              <div className="text-sm text-gray-700 mb-3">
                <strong>{filteredApps.length}</strong> application{filteredApps.length !== 1 ? 's' : ''} 
                {selectedMaterial !== 'all' && ` for ${selectedMaterial}`}
              </div>

              {/* Quick Preview */}
              <div className="text-xs text-gray-600">
                {filteredApps.slice(0, 2).map((app, i) => (
                  <div key={i} className="mb-1">
                    • {app.material} ({app.thickness})
                  </div>
                ))}
                {filteredApps.length > 2 && (
                  <div className="text-primary-600 font-medium">
                    +{filteredApps.length - 2} more...
                  </div>
                )}
              </div>

              {/* Expand indicator */}
              <div className="text-center text-sm text-primary-600 font-medium mt-3 pt-3 border-t border-gray-200">
                {selectedGas === gas.gasId ? '▼ Click to collapse' : '▶ Click for details'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed View */}
      {selectedGasData && (
        <div className="bg-white border-2 border-primary-600 rounded-lg p-6 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedGasData.gasName} ({selectedGasData.chemicalFormula})
              </h2>
              <p className="text-gray-600">Detailed parameters and applications</p>
            </div>
            <button
              onClick={() => setSelectedGas(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Properties */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Density</div>
              <div className="font-medium text-gray-900">{selectedGasData.properties.density}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Molar Mass</div>
              <div className="font-medium text-gray-900">{selectedGasData.properties.molarMass}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Boiling Point</div>
              <div className="font-medium text-gray-900">{selectedGasData.properties.boilingPoint}</div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
            <div className="space-y-4">
              {selectedGasData.applications
                .filter(app => selectedMaterial === 'all' || app.material === selectedMaterial)
                .map((app, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{app.material}</h4>
                      <div className="text-sm text-gray-600 mt-1">
                        Thickness: {app.thickness} • Pressure: {app.pressure}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {app.edgeQuality}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Parameters</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Pressure: <strong>{app.pressure}</strong></div>
                        {app.flowRate && <div>Flow Rate: <strong>{app.flowRate}</strong></div>}
                        <div>Speed: <strong>{app.typicalSpeed}</strong></div>
                        {app.costPerMeter && <div>Cost/meter: <strong>{app.costPerMeter}</strong></div>}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Edge Quality</div>
                      <div className="text-sm text-gray-600">
                        {app.edgeQuality}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <div className="text-sm font-medium text-green-900 mb-2">✓ Advantages</div>
                      <ul className="text-xs text-green-800 space-y-1">
                        {app.advantages.map((adv, j) => (
                          <li key={j}>• {adv}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded p-3">
                      <div className="text-sm font-medium text-orange-900 mb-2">⚠ Disadvantages</div>
                      <ul className="text-xs text-orange-800 space-y-1">
                        {app.disadvantages.map((dis, j) => (
                          <li key={j}>• {dis}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Notes */}
          {selectedGasData.safetyNotes.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-red-900 mb-2">⚠️ Safety Notes</h4>
              <ul className="text-sm text-red-800 space-y-1">
                {selectedGasData.safetyNotes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Storage */}
          {selectedGasData.storageRequirements.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">📦 Storage Requirements</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {selectedGasData.storageRequirements.map((req, i) => (
                  <li key={i}>• {req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Cost Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Cost Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gas Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost/m³</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Relative Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consumption</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost/Hour</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {GAS_COST_COMPARISON.map((gas) => (
                <tr key={gas.gasId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {gas.gasName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {gas.costPerM3}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCostColor(gas.relativeCost)}`}>
                      {gas.relativeCost}x
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {gas.typicalConsumption}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {gas.costPerHour}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}



























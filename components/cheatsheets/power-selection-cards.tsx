'use client';

import { useState } from 'react';
import type { PowerCategory } from '@/lib/data/cheatsheets/power-selection-data';

interface PowerSelectionCardsProps {
  categoryData: PowerCategory;
}

export function PowerSelectionCards({ categoryData }: PowerSelectionCardsProps) {
  const [selectedPower, setSelectedPower] = useState<string | null>(null);

  const selectedLevel = selectedPower 
    ? categoryData.levels.find(l => l.power === selectedPower)
    : null;

  const getCostBadgeColor = (cost: string) => {
    switch (cost) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'medium-high':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Power Level Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categoryData.levels.map((level) => (
          <div
            key={level.power}
            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
              selectedPower === level.power
                ? 'border-primary-600 bg-primary-50 shadow-lg'
                : 'border-gray-200 hover:border-primary-400 hover:shadow-md'
            }`}
            onClick={() => setSelectedPower(
              selectedPower === level.power ? null : level.power
            )}
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {level.power}
              </h3>
              <p className="text-gray-600 mb-3">{level.idealFor}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                  {level.typicalPrice}
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCostBadgeColor(level.runningCost)}`}>
                  {level.runningCost.replace('-', ' ')} operating cost
                </span>
              </div>
            </div>

            {/* Thickness Range */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Cutting Capacity
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(level.thicknessRange).map(([material, range]) => {
                  if (!range || range === "Not applicable") return null;
                  return (
                    <div key={material} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">
                        {material.replace('_', ' ')}: <strong>{range}</strong>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
              <div>
                <div className="font-medium text-gray-700">Production Volume</div>
                <div>{level.productionVolume}</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Floor Space</div>
                <div>{level.floorSpace}</div>
              </div>
            </div>

            {/* Expand indicator */}
            <div className="text-center text-sm text-primary-600 font-medium">
              {selectedPower === level.power ? '▼ Click to collapse' : '▶ Click for details'}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed View */}
      {selectedLevel && (
        <div className="bg-white border-2 border-primary-600 rounded-lg p-6 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedLevel.power} Detailed Specifications
              </h2>
              <p className="text-lg text-gray-600">{selectedLevel.idealFor}</p>
            </div>
            <button
              onClick={() => setSelectedPower(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Advantages */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Advantages
              </h3>
              <ul className="space-y-2">
                {selectedLevel.pros.map((pro, i) => (
                  <li key={i} className="flex items-start text-sm text-green-800">
                    <span className="mr-2">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Considerations */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Considerations
              </h3>
              <ul className="space-y-2">
                {selectedLevel.cons.map((con, i) => (
                  <li key={i} className="flex items-start text-sm text-orange-800">
                    <span className="mr-2">⚠</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Typical Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedLevel.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Recommended For</div>
              <div className="font-medium text-gray-900">{selectedLevel.recommendedFor}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Electrical Requirement</div>
              <div className="font-medium text-gray-900">{selectedLevel.electricalRequirement}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Operating Cost Level</div>
              <div className="font-medium text-gray-900 capitalize">{selectedLevel.runningCost.replace('-', ' ')}</div>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Power Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price Range
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Running Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categoryData.levels.map((level) => (
                <tr 
                  key={level.power}
                  className={`hover:bg-gray-50 cursor-pointer ${
                    selectedPower === level.power ? 'bg-primary-50' : ''
                  }`}
                  onClick={() => setSelectedPower(level.power)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {level.power}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {level.typicalPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCostBadgeColor(level.runningCost)}`}>
                      {level.runningCost}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {level.recommendedFor}
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



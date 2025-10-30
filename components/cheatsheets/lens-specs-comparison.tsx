'use client';

import { useState } from 'react';
import { LensSpecification, LENS_MATERIALS } from '@/lib/data/cheatsheets/lens-specifications-data';

interface LensSpecsComparisonProps {
  lensData: LensSpecification[];
}

export function LensSpecsComparison({ lensData }: LensSpecsComparisonProps) {
  const [selectedLens, setSelectedLens] = useState<number | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>([]);

  const selectedLensData = selectedLens !== null ? lensData[selectedLens] : null;

  const toggleCompareSelection = (index: number) => {
    if (selectedForCompare.includes(index)) {
      setSelectedForCompare(selectedForCompare.filter(i => i !== index));
    } else if (selectedForCompare.length < 3) {
      setSelectedForCompare([...selectedForCompare, index]);
    }
  };

  const getDurabilityColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-green-700 bg-green-100';
      case 'medium': return 'text-yellow-700 bg-yellow-100';
      case 'low': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getCostColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-700 bg-green-100';
      case 'medium': return 'text-blue-700 bg-blue-100';
      case 'high': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Focal Length Comparison</h3>
          <p className="text-sm text-gray-600">Select lenses to compare their specifications</p>
        </div>
        <button
          onClick={() => {
            setCompareMode(!compareMode);
            if (!compareMode) {
              setSelectedLens(null);
              setSelectedForCompare([]);
            }
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            compareMode
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {compareMode ? 'Exit Compare Mode' : 'Compare Mode'}
        </button>
      </div>

      {compareMode && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Compare Mode Active:</strong> Select up to 3 lenses to compare side-by-side. 
            {selectedForCompare.length > 0 && ` (${selectedForCompare.length}/3 selected)`}
          </p>
        </div>
      )}

      {/* Lens Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lensData.map((lens, index) => (
          <div
            key={lens.focalLengthMm}
            className={`border-2 rounded-lg p-5 transition-all ${
              compareMode
                ? selectedForCompare.includes(index)
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-400 cursor-pointer'
                : selectedLens === index
                ? 'border-primary-600 bg-primary-50 shadow-lg'
                : 'border-gray-200 hover:border-primary-400 hover:shadow-md cursor-pointer'
            }`}
            onClick={() => {
              if (compareMode) {
                toggleCompareSelection(index);
              } else {
                setSelectedLens(selectedLens === index ? null : index);
              }
            }}
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {lens.focalLength}
                </h3>
                {compareMode && (
                  <input
                    type="checkbox"
                    checked={selectedForCompare.includes(index)}
                    readOnly
                    className="w-5 h-5"
                  />
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{lens.bestFor}</p>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Spot: {lens.spotSize}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  DOF: {lens.depthOfFocus}
                </span>
              </div>
            </div>

            {/* Key Specs */}
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Metal Thickness:</span>
                <span className="font-medium text-gray-900">{lens.maxThickness.metal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Power Density:</span>
                <span className="font-medium text-gray-900">{lens.powerDensity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Working Distance:</span>
                <span className="font-medium text-gray-900">{lens.workingDistance}</span>
              </div>
            </div>

            {/* Applications Preview */}
            <div className="text-xs text-gray-600">
              <strong>Applications:</strong>
              <div className="mt-1">
                {lens.applications.slice(0, 2).map((app, i) => (
                  <div key={i}>• {app}</div>
                ))}
                {lens.applications.length > 2 && (
                  <div className="text-primary-600 font-medium mt-1">
                    +{lens.applications.length - 2} more
                  </div>
                )}
              </div>
            </div>

            {!compareMode && (
              <div className="text-center text-sm text-primary-600 font-medium mt-3 pt-3 border-t border-gray-200">
                {selectedLens === index ? '▼ Click to collapse' : '▶ Click for details'}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison View */}
      {compareMode && selectedForCompare.length > 0 && (
        <div className="bg-white border-2 border-primary-600 rounded-lg p-6 shadow-lg overflow-x-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Side-by-Side Comparison</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Specification</th>
                {selectedForCompare.map((index) => (
                  <th key={index} className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                    {lensData[index].focalLength}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Spot Size</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].spotSize}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Depth of Focus</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].depthOfFocus}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Metal Thickness</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].maxThickness.metal}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Power Density</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].powerDensity}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Working Distance</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].workingDistance}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-700">Best For</td>
                {selectedForCompare.map((index) => (
                  <td key={index} className="px-4 py-3 text-sm text-gray-900">{lensData[index].bestFor}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Detailed View */}
      {!compareMode && selectedLensData && (
        <div className="bg-white border-2 border-primary-600 rounded-lg p-6 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedLensData.focalLength}
              </h2>
              <p className="text-lg text-gray-600">{selectedLensData.bestFor}</p>
            </div>
            <button
              onClick={() => setSelectedLens(null)}
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
              <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Advantages</h3>
              <ul className="space-y-2 text-sm text-green-800">
                {selectedLensData.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠ Disadvantages</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                {selectedLensData.disadvantages.map((dis, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Typical Applications</h3>
            <div className="flex flex-wrap gap-2">
              {selectedLensData.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-600 mb-1">Typical Use</div>
              <div className="text-sm font-medium text-gray-900">{selectedLensData.typicalUse}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-600 mb-1">Metal Capacity</div>
              <div className="text-sm font-medium text-gray-900">{selectedLensData.maxThickness.metal}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-600 mb-1">Non-Metal Capacity</div>
              <div className="text-sm font-medium text-gray-900">{selectedLensData.maxThickness.nonMetal}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs text-gray-600 mb-1">Power Density</div>
              <div className="text-sm font-medium text-gray-900">{selectedLensData.powerDensity}</div>
            </div>
          </div>
        </div>
      )}

      {/* Lens Materials Reference */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Lens Materials by Wavelength</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {LENS_MATERIALS.map((material, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{material.material}</h4>
                  <div className="text-sm text-gray-600">{material.wavelength}</div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCostColor(material.cost)}`}>
                    {material.cost} cost
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDurabilityColor(material.durability)}`}>
                    {material.durability} durability
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Transmittance:</strong> {material.transmittance}
              </div>
              <div className="text-xs text-gray-600">{material.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



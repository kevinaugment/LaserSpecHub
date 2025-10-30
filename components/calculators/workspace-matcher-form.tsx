'use client';

import { useState } from 'react';
import {
  matchWorkspace,
  validateWorkspaceInput,
  calculateCostEstimate,
  formatArea,
  type WorkpieceInput,
  type WorkspaceMatchResult,
} from '@/lib/calculators/workspace-matcher';

export function WorkspaceMatcherForm() {
  const [input, setInput] = useState<Partial<WorkpieceInput>>({
    unit: 'metric',
    margin: 5,
    rotationAllowed: true,
  });
  const [results, setResults] = useState<WorkspaceMatchResult[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const validation = validateWorkspaceInput(input);

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors([]);
    const matchResults = matchWorkspace(input as WorkpieceInput);
    setResults(matchResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setInput({ unit: 'metric', margin: 5, rotationAllowed: true });
    setResults([]);
    setShowResults(false);
    setErrors([]);
  };

  if (showResults && results.length > 0) {
    const topResults = results.slice(0, 5);
    const optimalResult = results.find((r) => r.isOptimal) || results[0];
    
    if (!optimalResult) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Workspace Match Results</h2>
          <button onClick={handleReset} className="btn-secondary">
            New Calculation
          </button>
        </div>

        {/* Optimal Recommendation */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-1">
                Recommended Workspace
              </h3>
              <p className="text-sm text-primary-700">
                Best match for your requirements
              </p>
            </div>
            {optimalResult.isOptimal && (
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                Optimal
              </span>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary-700 mb-2">
                {optimalResult.workspace.commonName}
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Parts per sheet:</span>
                  <span className="font-semibold">
                    {optimalResult.layout.totalParts}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Layout:</span>
                  <span className="font-semibold">
                    {optimalResult.layout.partsPerRow} × {optimalResult.layout.rows}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Utilization:</span>
                  <span className="font-semibold text-green-600">
                    {optimalResult.layout.utilizationPercent}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Match Score:</span>
                  <span className="font-semibold">{optimalResult.matchScore}/100</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Material Requirements
              </h4>
              {(() => {
                const cost = calculateCostEstimate(
                  optimalResult,
                  input.quantity || 0
                );
                return (
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Sheets needed:</span>
                      <span className="font-semibold">{cost.sheetsNeeded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total area:</span>
                      <span className="font-semibold">
                        {formatArea(cost.totalMaterialArea * 1_000_000, input.unit || 'metric')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Used area:</span>
                      <span className="font-semibold text-green-600">
                        {formatArea(cost.usedMaterialArea * 1_000_000, input.unit || 'metric')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wasted:</span>
                      <span className="font-semibold text-orange-600">
                        {formatArea(cost.wastedMaterialArea * 1_000_000, input.unit || 'metric')}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Recommendations */}
          {optimalResult.recommendations.length > 0 && (
            <div className="mt-4 pt-4 border-t border-primary-200">
              <ul className="space-y-1 text-sm text-primary-800">
                {optimalResult.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {optimalResult.warnings.length > 0 && (
            <div className="mt-4 pt-4 border-t border-primary-200">
              <ul className="space-y-1 text-sm text-yellow-800">
                {optimalResult.warnings.map((warn, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {warn}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* All Results Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">All Workspace Options</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-xs font-medium text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Workspace Size</th>
                  <th className="px-4 py-3 text-center">Layout</th>
                  <th className="px-4 py-3 text-center">Parts/Sheet</th>
                  <th className="px-4 py-3 text-center">Utilization</th>
                  <th className="px-4 py-3 text-center">Wastage</th>
                  <th className="px-4 py-3 text-center">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topResults.map((result, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      result.isOptimal ? 'bg-primary-50' : 'hover:bg-gray-50'
                    } transition-colors`}
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">
                        {result.workspace.commonName}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {result.workspace.category}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      {result.layout.partsPerRow} × {result.layout.rows}
                    </td>
                    <td className="px-4 py-3 text-center font-medium">
                      {result.layout.totalParts}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          result.layout.utilizationPercent >= 75
                            ? 'bg-green-100 text-green-800'
                            : result.layout.utilizationPercent >= 60
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {result.layout.utilizationPercent}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">
                      {result.layout.wastagePercent}%
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold text-primary-600">
                        {result.matchScore}
                      </span>
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Workpiece Specifications</h2>

        <div className="space-y-4">
          {/* Unit Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unit System
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setInput({ ...input, unit: 'metric' })}
                className={`px-6 py-2 rounded-lg border-2 transition-colors ${
                  input.unit === 'metric'
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                Metric (mm)
              </button>
              <button
                onClick={() => setInput({ ...input, unit: 'imperial' })}
                className={`px-6 py-2 rounded-lg border-2 transition-colors ${
                  input.unit === 'imperial'
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                Imperial (inches)
              </button>
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Part Length {input.unit === 'metric' ? '(mm)' : '(inches)'}
              </label>
              <input
                type="number"
                value={input.length || ''}
                onChange={(e) =>
                  setInput({ ...input, length: parseFloat(e.target.value) })
                }
                className="input-field"
                placeholder={input.unit === 'metric' ? 'e.g., 500' : 'e.g., 20'}
                step="0.1"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Part Width {input.unit === 'metric' ? '(mm)' : '(inches)'}
              </label>
              <input
                type="number"
                value={input.width || ''}
                onChange={(e) =>
                  setInput({ ...input, width: parseFloat(e.target.value) })
                }
                className="input-field"
                placeholder={input.unit === 'metric' ? 'e.g., 300' : 'e.g., 12'}
                step="0.1"
                min="0"
              />
            </div>
          </div>

          {/* Quantity and Margin */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity Needed
              </label>
              <input
                type="number"
                value={input.quantity || ''}
                onChange={(e) =>
                  setInput({ ...input, quantity: parseInt(e.target.value) })
                }
                className="input-field"
                placeholder="e.g., 100"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Spacing Between Parts {input.unit === 'metric' ? '(mm)' : '(inches)'}
              </label>
              <input
                type="number"
                value={input.margin || ''}
                onChange={(e) =>
                  setInput({ ...input, margin: parseFloat(e.target.value) })
                }
                className="input-field"
                placeholder={input.unit === 'metric' ? 'e.g., 5' : 'e.g., 0.2'}
                step="0.1"
                min="0"
              />
            </div>
          </div>

          {/* Options */}
          <div>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={input.rotationAllowed || false}
                onChange={(e) =>
                  setInput({ ...input, rotationAllowed: e.target.checked })
                }
                className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Allow part rotation for better nesting
              </span>
            </label>
            <p className="mt-1 ml-8 text-xs text-gray-500">
              Enable to test both normal and 90° rotated orientations
            </p>
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-medium text-red-800 mb-2">
            Please correct the following:
          </h3>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleCalculate} className="btn-primary w-full py-3">
        Find Matching Workspaces
      </button>
    </div>
  );
}




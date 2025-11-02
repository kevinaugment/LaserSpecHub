'use client';

import { useState } from 'react';
import { calculateAdjustedSpeed } from '@/lib/data/cheatsheets/cutting-speed-comparison-data';

export function ProductionTimeCalculator() {
  const [cutLength, setCutLength] = useState<string>('5');
  const [pierceCount, setPierceCount] = useState<string>('10');
  const [baseSpeed, setBaseSpeed] = useState<string>('10');
  const [piercingTime, setPiercingTime] = useState<string>('0.5');
  const [qualityLevel, setQualityLevel] = useState<string>('Standard Production (ISO Range 3)');
  const [materialCondition, setMaterialCondition] = useState<string>('Clean, Mill-Finished');
  const [geometryType, setGeometryType] = useState<string>('Straight Lines (>100mm)');

  const calculateTotalTime = () => {
    const length = parseFloat(cutLength) || 0;
    const pierces = parseInt(pierceCount) || 0;
    const speed = parseFloat(baseSpeed) || 0;
    const pierceTime = parseFloat(piercingTime) || 0;

    if (speed === 0) return null;

    // Calculate adjusted speed based on factors
    const adjustedSpeed = calculateAdjustedSpeed(
      speed,
      qualityLevel,
      materialCondition,
      geometryType
    );

    // Calculate cutting time (convert m/min to seconds)
    const cuttingTime = (length / adjustedSpeed) * 60;

    // Calculate total piercing time
    const totalPiercingTime = pierces * pierceTime;

    // Add positioning time estimate (0.5 seconds per pierce)
    const positioningTime = pierces * 0.5;

    // Total time
    const totalTime = cuttingTime + totalPiercingTime + positioningTime;

    return {
      cuttingTime: cuttingTime.toFixed(1),
      piercingTime: totalPiercingTime.toFixed(1),
      positioningTime: positioningTime.toFixed(1),
      totalTime: totalTime.toFixed(1),
      adjustedSpeed: adjustedSpeed.toFixed(1),
      speedReduction: ((1 - adjustedSpeed / speed) * 100).toFixed(0)
    };
  };

  const results = calculateTotalTime();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Advanced Production Time Calculator
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Calculate realistic production time including piercing, positioning, and quality adjustments
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 mb-3">Basic Parameters</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Cut Length (meters)
            </label>
            <input
              type="number"
              value={cutLength}
              onChange={(e) => setCutLength(e.target.value)}
              step="0.1"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Pierces
            </label>
            <input
              type="number"
              value={pierceCount}
              onChange={(e) => setPierceCount(e.target.value)}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Base Cutting Speed (m/min)
            </label>
            <input
              type="number"
              value={baseSpeed}
              onChange={(e) => setBaseSpeed(e.target.value)}
              step="0.1"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <p className="text-xs text-gray-500 mt-1">From speed table above</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Piercing Time per Pierce (seconds)
            </label>
            <input
              type="number"
              value={piercingTime}
              onChange={(e) => setPiercingTime(e.target.value)}
              step="0.1"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <p className="text-xs text-gray-500 mt-1">From piercing time data</p>
          </div>
        </div>

        {/* Adjustment Factors */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 mb-3">Adjustment Factors</h4>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quality Level
            </label>
            <select
              value={qualityLevel}
              onChange={(e) => setQualityLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Rough Cut (ISO Range 4)">Rough Cut (+20% speed)</option>
              <option value="Standard Production (ISO Range 3)">Standard Production (baseline)</option>
              <option value="High Quality (ISO Range 2)">High Quality (-25% speed)</option>
              <option value="Precision (ISO Range 1)">Precision (-45% speed)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Material Condition
            </label>
            <select
              value={materialCondition}
              onChange={(e) => setMaterialCondition(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Clean, Mill-Finished">Clean, Mill-Finished</option>
              <option value="Light Surface Rust">Light Surface Rust (-10%)</option>
              <option value="Heavy Rust or Mill Scale">Heavy Rust (-20%)</option>
              <option value="Painted (Single Coat)">Painted (-15%)</option>
              <option value="Galvanized">Galvanized (-25%)</option>
              <option value="Oil or Grease Coated">Oil/Grease Coated (-15%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Part Geometry
            </label>
            <select
              value={geometryType}
              onChange={(e) => setGeometryType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="Straight Lines (>100mm)">Straight Lines (100%)</option>
              <option value="Large Radius Curves (R>50mm)">Large Curves (-5%)</option>
              <option value="Medium Radius Curves (R=20-50mm)">Medium Curves (-15%)</option>
              <option value="Tight Radius Curves (R=5-20mm)">Tight Curves (-30%)</option>
              <option value="Sharp Corners (90° angles)">Sharp Corners (-40%)</option>
              <option value="Complex Contours (Many small features)">Complex Contours (-50%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-4">Production Time Breakdown</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Cutting Time:</span>
                <span className="text-lg font-semibold text-blue-900">{results.cuttingTime}s</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Piercing Time:</span>
                <span className="text-lg font-semibold text-purple-900">{results.piercingTime}s</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Positioning Time:</span>
                <span className="text-lg font-semibold text-green-900">{results.positioningTime}s</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg">
                <span className="text-sm font-medium text-white">Total Time:</span>
                <span className="text-2xl font-bold text-white">{results.totalTime}s</span>
              </div>
              <div className="text-center text-sm text-gray-600">
                ≈ {(parseFloat(results.totalTime) / 60).toFixed(1)} minutes
              </div>
            </div>

            {/* Speed Adjustment Info */}
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Adjusted Cutting Speed:</div>
                <div className="text-2xl font-bold text-gray-900">{results.adjustedSpeed} m/min</div>
                <div className="text-xs text-gray-500 mt-1">
                  {results.speedReduction !== '0' && (
                    <span className="text-orange-600">
                      {results.speedReduction}% reduction from base speed
                    </span>
                  )}
                  {results.speedReduction === '0' && (
                    <span className="text-green-600">No speed reduction</span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h5 className="text-sm font-semibold text-yellow-900 mb-2">
                  Not Included in Estimate:
                </h5>
                <ul className="text-xs text-yellow-800 space-y-1">
                  <li>• Sheet loading/unloading time</li>
                  <li>• Part removal and sorting time</li>
                  <li>• Quality inspection time</li>
                  <li>• Machine warm-up time</li>
                  <li>• Program setup and testing</li>
                </ul>
                <p className="text-xs text-yellow-700 mt-2">
                  Add 20-30% buffer for complete cycle time
                </p>
              </div>
            </div>
          </div>

          {/* Visual Time Distribution */}
          <div className="mt-6">
            <h5 className="text-sm font-medium text-gray-700 mb-2">Time Distribution</h5>
            <div className="flex h-8 rounded-lg overflow-hidden">
              <div 
                className="bg-blue-500 flex items-center justify-center text-xs text-white font-medium"
                style={{ 
                  width: `${(parseFloat(results.cuttingTime) / parseFloat(results.totalTime)) * 100}%` 
                }}
              >
                {((parseFloat(results.cuttingTime) / parseFloat(results.totalTime)) * 100).toFixed(0)}%
              </div>
              <div 
                className="bg-purple-500 flex items-center justify-center text-xs text-white font-medium"
                style={{ 
                  width: `${(parseFloat(results.piercingTime) / parseFloat(results.totalTime)) * 100}%` 
                }}
              >
                {((parseFloat(results.piercingTime) / parseFloat(results.totalTime)) * 100).toFixed(0)}%
              </div>
              <div 
                className="bg-green-500 flex items-center justify-center text-xs text-white font-medium"
                style={{ 
                  width: `${(parseFloat(results.positioningTime) / parseFloat(results.totalTime)) * 100}%` 
                }}
              >
                {((parseFloat(results.positioningTime) / parseFloat(results.totalTime)) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Cutting</span>
              <span>Piercing</span>
              <span>Positioning</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


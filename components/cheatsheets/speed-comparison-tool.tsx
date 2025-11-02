'use client';

import { useState } from 'react';

interface ComparisonData {
  power: string;
  speed: number;
  piercingTime: number;
  estimatedCost: number; // relative cost per hour
}

export function SpeedComparisonTool() {
  const [material, setMaterial] = useState('mild-steel');
  const [thickness, setThickness] = useState('10');
  const [power1, setPower1] = useState('6kW');
  const [power2, setPower2] = useState('12kW');
  const [cutLength, setCutLength] = useState('100');
  const [pierceCount, setPierceCount] = useState('20');

  // Sample data - in production, this would come from the actual data file
  const speedData: Record<string, Record<string, Record<string, ComparisonData>>> = {
    'mild-steel': {
      '10': {
        '3kW': { power: '3kW', speed: 1.8, piercingTime: 1.4, estimatedCost: 30 },
        '6kW': { power: '6kW', speed: 3.5, piercingTime: 0.8, estimatedCost: 45 },
        '8kW': { power: '8kW', speed: 4.5, piercingTime: 0.65, estimatedCost: 55 },
        '12kW': { power: '12kW', speed: 7.0, piercingTime: 0.5, estimatedCost: 75 },
      }
    }
  };

  const getData = (power: string): ComparisonData | null => {
    return speedData[material]?.[thickness]?.[power] || null;
  };

  const data1 = getData(power1);
  const data2 = getData(power2);

  const calculateProductionTime = (data: ComparisonData | null): number => {
    if (!data) return 0;
    const length = parseFloat(cutLength) || 0;
    const pierces = parseInt(pierceCount) || 0;
    
    const cuttingTime = (length / data.speed) * 60; // seconds
    const totalPiercingTime = pierces * data.piercingTime; // seconds
    const positioningTime = pierces * 0.5; // seconds
    
    return cuttingTime + totalPiercingTime + positioningTime;
  };

  const calculateCostPerPart = (data: ComparisonData | null, time: number): number => {
    if (!data) return 0;
    return (data.estimatedCost / 3600) * time; // cost per second * time
  };

  const time1 = calculateProductionTime(data1);
  const time2 = calculateProductionTime(data2);
  const cost1 = calculateCostPerPart(data1, time1);
  const cost2 = calculateCostPerPart(data2, time2);

  const timeSaved = time1 - time2;
  const costDifference = cost2 - cost1;
  const speedIncrease = data1 && data2 ? ((data2.speed / data1.speed - 1) * 100) : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Power Level Comparison Tool
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Compare production time and costs between different laser power levels
      </p>

      {/* Input Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Material
          </label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="mild-steel">Mild Steel</option>
            <option value="stainless-steel">Stainless Steel</option>
            <option value="aluminum">Aluminum</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Thickness (mm)
          </label>
          <select
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="5">5mm</option>
            <option value="8">8mm</option>
            <option value="10">10mm</option>
            <option value="12">12mm</option>
            <option value="15">15mm</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cut Length (m)
          </label>
          <input
            type="number"
            value={cutLength}
            onChange={(e) => setCutLength(e.target.value)}
            step="1"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Pierces
          </label>
          <input
            type="number"
            value={pierceCount}
            onChange={(e) => setPierceCount(e.target.value)}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Power Selection */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Power Level 1
          </label>
          <select
            value={power1}
            onChange={(e) => setPower1(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="3kW">3kW</option>
            <option value="6kW">6kW</option>
            <option value="8kW">8kW</option>
            <option value="12kW">12kW</option>
          </select>
        </div>

        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <label className="block text-sm font-medium text-green-900 mb-2">
            Power Level 2
          </label>
          <select
            value={power2}
            onChange={(e) => setPower2(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="3kW">3kW</option>
            <option value="6kW">6kW</option>
            <option value="8kW">8kW</option>
            <option value="12kW">12kW</option>
          </select>
        </div>
      </div>

      {/* Comparison Results */}
      {data1 && data2 && (
        <div className="space-y-6">
          {/* Speed Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">{power1} Laser</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Cutting Speed:</span>
                  <span className="font-semibold text-blue-900">{data1.speed} m/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Piercing Time:</span>
                  <span className="font-semibold text-blue-900">{data1.piercingTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Production Time:</span>
                  <span className="font-semibold text-blue-900">{time1.toFixed(1)}s</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-blue-200">
                  <span className="text-sm text-gray-700">Cost per Part:</span>
                  <span className="font-semibold text-blue-900">${cost1.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">{power2} Laser</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Cutting Speed:</span>
                  <span className="font-semibold text-green-900">{data2.speed} m/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Piercing Time:</span>
                  <span className="font-semibold text-green-900">{data2.piercingTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Production Time:</span>
                  <span className="font-semibold text-green-900">{time2.toFixed(1)}s</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-green-200">
                  <span className="text-sm text-gray-700">Cost per Part:</span>
                  <span className="font-semibold text-green-900">${cost2.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis */}
          <div className="p-6 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Comparison Analysis</h4>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Speed Increase</div>
                <div className="text-2xl font-bold text-primary-600">
                  {speedIncrease > 0 ? '+' : ''}{speedIncrease.toFixed(0)}%
                </div>
              </div>
              
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Time Saved</div>
                <div className="text-2xl font-bold text-green-600">
                  {timeSaved > 0 ? '-' : '+'}{Math.abs(timeSaved).toFixed(1)}s
                </div>
              </div>
              
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Cost Difference</div>
                <div className={`text-2xl font-bold ${costDifference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {costDifference > 0 ? '+' : ''}{costDifference.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              {speedIncrease > 0 && (
                <p className="text-gray-700">
                  • The {power2} laser is <strong>{speedIncrease.toFixed(0)}% faster</strong> than the {power1} laser
                </p>
              )}
              {timeSaved > 0 && (
                <p className="text-gray-700">
                  • You save <strong>{timeSaved.toFixed(1)} seconds</strong> per part with the higher power laser
                </p>
              )}
              {costDifference > 0 ? (
                <p className="text-gray-700">
                  • However, the higher power laser costs <strong>${Math.abs(costDifference).toFixed(2)} more</strong> per part due to higher operating costs
                </p>
              ) : (
                <p className="text-gray-700">
                  • The higher power laser is <strong>${Math.abs(costDifference).toFixed(2)} cheaper</strong> per part despite higher operating costs
                </p>
              )}
            </div>
          </div>

          {/* ROI Estimation */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-3">
              💡 ROI Consideration
            </h4>
            <p className="text-sm text-yellow-800 mb-2">
              For high-volume production, time savings can justify higher equipment costs:
            </p>
            <ul className="text-sm text-yellow-800 space-y-1 ml-4">
              <li>• At 100 parts/day: {((timeSaved * 100) / 60).toFixed(0)} minutes saved daily</li>
              <li>• At 1000 parts/month: {((timeSaved * 1000) / 3600).toFixed(1)} hours saved monthly</li>
              <li>• Monthly cost difference: ${(costDifference * 1000).toFixed(0)}</li>
            </ul>
            <p className="text-xs text-yellow-700 mt-3">
              Note: This is a simplified comparison. Actual ROI depends on equipment purchase price,
              financing costs, maintenance, and your specific production volume.
            </p>
          </div>
        </div>
      )}

      {(!data1 || !data2) && (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-600">
          <p>Select material, thickness, and power levels to see comparison</p>
        </div>
      )}
    </div>
  );
}


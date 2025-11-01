'use client';

import { useState } from 'react';

export function KerfEstimator() {
  const [spotSize, setSpotSize] = useState('0.15');
  const [material, setMaterial] = useState('steel');

  const spotNum = parseFloat(spotSize) || 0.15;
  let kerfEstimate = spotNum * 1.5; // Simple estimate: kerf ≈ 1.5 × spot size
  
  if (material === 'aluminum' || material === 'copper') {
    kerfEstimate = spotNum * 1.8; // Reflective materials have wider kerf
  } else if (material === 'stainless') {
    kerfEstimate = spotNum * 1.4; // Stainless slightly narrower
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Spot Size (mm)
          </label>
          <input
            type="number"
            step="0.01"
            min="0.05"
            max="0.5"
            value={spotSize}
            onChange={(e) => setSpotSize(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Type
          </label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="steel">Mild Steel</option>
            <option value="stainless">Stainless Steel</option>
            <option value="aluminum">Aluminum</option>
            <option value="copper">Copper</option>
          </select>
        </div>
      </div>
      <div className="p-4 bg-gray-50 rounded border border-gray-200">
        <div className="text-sm text-gray-600 mb-1">Estimated Kerf Width:</div>
        <div className="text-2xl font-bold text-gray-900">
          {kerfEstimate.toFixed(2)} mm
        </div>
        <div className="text-xs text-gray-500 mt-2">
          * Estimated value. Actual kerf varies with power, speed, and assist gas parameters.
        </div>
      </div>
    </div>
  );
}





'use client';

import { useState } from 'react';

export function PowerDensityMini() {
  const [power, setPower] = useState('6000');
  const [spotDiameter, setSpotDiameter] = useState('0.15');

  const powerNum = parseFloat(power) || 6000;
  const spotNum = parseFloat(spotDiameter) || 0.15;
  const radius = spotNum / 2; // Convert diameter to radius
  const area = Math.PI * radius * radius; // mm²
  const density = powerNum / area; // W/mm²

  let processHint = 'Unknown';
  if (density > 1000) {
    processHint = 'Cutting';
  } else if (density > 100) {
    processHint = 'Welding';
  } else if (density > 10) {
    processHint = 'Marking/Engraving';
  } else {
    processHint = 'Surface Treatment';
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Laser Power (W)
          </label>
          <input
            type="number"
            step="100"
            min="100"
            max="30000"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Spot Diameter (mm)
          </label>
          <input
            type="number"
            step="0.01"
            min="0.05"
            max="0.5"
            value={spotDiameter}
            onChange={(e) => setSpotDiameter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </div>
      <div className="p-4 bg-gray-50 rounded border border-gray-200">
        <div className="text-sm text-gray-600 mb-1">Power Density:</div>
        <div className="text-2xl font-bold text-gray-900">
          {density.toFixed(0).toLocaleString()} W/mm²
        </div>
        <div className="text-sm text-gray-700 mt-2">
          Suggested Process: <span className="font-semibold">{processHint}</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          * Power density = Power / (π × r²), where r = spot radius
        </div>
      </div>
    </div>
  );
}





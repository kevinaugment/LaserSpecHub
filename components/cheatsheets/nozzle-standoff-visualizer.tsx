'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Material = 'carbon_steel' | 'stainless_steel' | 'aluminum';

interface Props {
  defaultStandoff?: number;
  defaultFocalOffset?: number;
  material?: Material;
}

export function NozzleStandoffVisualizer({
  defaultStandoff = 1.0,
  defaultFocalOffset = 0,
  material = 'carbon_steel',
}: Props) {
  const [standoff, setStandoff] = useState(defaultStandoff);
  const [focalOffset, setFocalOffset] = useState(defaultFocalOffset);
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(material);

  // Optimal ranges by material
  const optimalRanges: Record<Material, { min: number; max: number }> = {
    carbon_steel: { min: 0.5, max: 1.0 },
    stainless_steel: { min: 0.8, max: 1.5 },
    aluminum: { min: 1.0, max: 2.0 },
  };

  const isOptimal = () => {
    const range = optimalRanges[selectedMaterial];
    return standoff >= range.min && standoff <= range.max;
  };

  const materialLabels: Record<Material, string> = {
    carbon_steel: 'Carbon Steel',
    stainless_steel: 'Stainless Steel',
    aluminum: 'Aluminum',
  };

  // Calculate positions for SVG (scale: 1mm = 20px)
  const scale = 20;
  const cuttingHeadY = 50;
  const nozzleTipY = 200;
  const workpieceY = nozzleTipY + standoff * scale;
  const focalPointY = nozzleTipY + focalOffset * scale;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Standoff Distance Visualizer</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Adjust standoff distance and focal offset to see optimal positioning
        </p>
      </CardHeader>
      <CardContent>
        {/* Material Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Material Type</label>
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(materialLabels) as Material[]).map((mat) => (
              <button
                key={mat}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedMaterial === mat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {materialLabels[mat]}
              </button>
            ))}
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            Optimal range: {optimalRanges[selectedMaterial].min} - {optimalRanges[selectedMaterial].max} mm
          </div>
        </div>

        {/* Controls */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Standoff Distance: <strong>{standoff.toFixed(1)} mm</strong>
            </label>
            <input
              type="range"
              min="0.5"
              max="3.0"
              step="0.1"
              value={standoff}
              onChange={(e) => setStandoff(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0.5 mm</span>
              <span>3.0 mm</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Focal Offset: <strong>{focalOffset > 0 ? '+' : ''}{focalOffset.toFixed(1)} mm</strong>
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={focalOffset}
              onChange={(e) => setFocalOffset(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>-3 mm</span>
              <span>0</span>
              <span>+3 mm</span>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div
          className={`mb-6 p-3 rounded-lg text-sm font-medium ${
            isOptimal()
              ? 'bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-300'
              : 'bg-orange-100 text-orange-800 dark:bg-orange-950/30 dark:text-orange-300'
          }`}
        >
          {isOptimal() ? (
            <>✓ Standoff is within optimal range for {materialLabels[selectedMaterial]}</>
          ) : (
            <>⚠ Standoff is outside optimal range. Adjust to {optimalRanges[selectedMaterial].min}-{optimalRanges[selectedMaterial].max} mm</>
          )}
        </div>

        {/* Visualization */}
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <svg viewBox="0 0 400 500" className="w-full h-auto">
            {/* Cutting Head */}
            <rect
              x="120"
              y={cuttingHeadY}
              width="160"
              height="80"
              fill="#4A5568"
              stroke="#2D3748"
              strokeWidth="2"
            />
            <text
              x="200"
              y={cuttingHeadY + 45}
              fontSize="12"
              fill="white"
              textAnchor="middle"
            >
              Cutting Head
            </text>

            {/* Nozzle */}
            <path
              d={`M 160 ${cuttingHeadY + 80} L 160 ${nozzleTipY - 20} L 150 ${nozzleTipY} L 250 ${nozzleTipY} L 240 ${nozzleTipY - 20} L 240 ${cuttingHeadY + 80} Z`}
              fill="#B87333"
              stroke="#8B5A2B"
              strokeWidth="2"
            />

            {/* Laser Beam (converging) */}
            <defs>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF0000" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF0000" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d={`M 190 ${cuttingHeadY + 40} L 195 ${focalPointY} L 205 ${focalPointY} L 210 ${cuttingHeadY + 40} Z`}
              fill="url(#beamGradient)"
              stroke="#FF0000"
              strokeWidth="1"
            />

            {/* Focal Point */}
            <circle
              cx="200"
              cy={focalPointY}
              r="4"
              fill="#FF0000"
              stroke="#8B0000"
              strokeWidth="1"
            />
            <text
              x="220"
              y={focalPointY + 5}
              fontSize="11"
              fill="#FF0000"
              fontWeight="bold"
            >
              Focal Point
            </text>

            {/* Nozzle Tip Label */}
            <text
              x="260"
              y={nozzleTipY + 5}
              fontSize="11"
              fill="#B87333"
              fontWeight="bold"
            >
              Nozzle Tip
            </text>

            {/* Standoff Distance Line */}
            <line
              x1="280"
              y1={nozzleTipY}
              x2="280"
              y2={workpieceY}
              stroke={isOptimal() ? '#10B981' : '#F59E0B'}
              strokeWidth="2"
              strokeDasharray="4"
            />
            <line
              x1="275"
              y1={nozzleTipY}
              x2="285"
              y2={nozzleTipY}
              stroke={isOptimal() ? '#10B981' : '#F59E0B'}
              strokeWidth="2"
            />
            <line
              x1="275"
              y1={workpieceY}
              x2="285"
              y2={workpieceY}
              stroke={isOptimal() ? '#10B981' : '#F59E0B'}
              strokeWidth="2"
            />
            <text
              x="290"
              y={(nozzleTipY + workpieceY) / 2 + 5}
              fontSize="12"
              fill={isOptimal() ? '#10B981' : '#F59E0B'}
              fontWeight="bold"
            >
              {standoff.toFixed(1)} mm
            </text>

            {/* Focal Offset Indicator (if not zero) */}
            {Math.abs(focalOffset) > 0.1 && (
              <>
                <line
                  x1="120"
                  y1={nozzleTipY}
                  x2="120"
                  y2={focalPointY}
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeDasharray="2"
                />
                <text
                  x="90"
                  y={(nozzleTipY + focalPointY) / 2 + 5}
                  fontSize="10"
                  fill="#9333EA"
                  fontWeight="bold"
                >
                  {focalOffset > 0 ? '+' : ''}{focalOffset.toFixed(1)}
                </text>
              </>
            )}

            {/* Workpiece */}
            <rect
              x="80"
              y={workpieceY}
              width="240"
              height="30"
              fill="#718096"
              stroke="#4A5568"
              strokeWidth="2"
            />
            <text
              x="200"
              y={workpieceY + 20}
              fontSize="12"
              fill="white"
              textAnchor="middle"
            >
              Workpiece
            </text>

            {/* Optimal Zone Highlight */}
            {isOptimal() && (
              <rect
                x="100"
                y={nozzleTipY + optimalRanges[selectedMaterial].min * scale}
                width="200"
                height={(optimalRanges[selectedMaterial].max - optimalRanges[selectedMaterial].min) * scale}
                fill="#10B981"
                opacity="0.1"
                stroke="#10B981"
                strokeWidth="1"
                strokeDasharray="4"
              />
            )}
          </svg>
        </div>

        {/* Information Panel */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h4 className="font-semibold mb-2">Standoff Distance</h4>
            <p className="text-muted-foreground">
              The distance between the nozzle tip and the workpiece surface. Affects gas pressure
              at the cut point and collision risk.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <h4 className="font-semibold mb-2">Focal Offset</h4>
            <p className="text-muted-foreground">
              Position of the laser focal point relative to the nozzle tip. Negative = above
              surface, Positive = below surface. Typically 0 to +2mm for cutting.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


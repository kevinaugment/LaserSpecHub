'use client';

import { useState } from 'react';

interface GasFlowDiagramProps {
  gasType?: string;
}

export function GasFlowDiagram({ gasType = 'Nitrogen' }: GasFlowDiagramProps) {
  const [selectedGas, setSelectedGas] = useState(gasType);
  const [showLabels, setShowLabels] = useState(true);

  const gases = ['Oxygen', 'Nitrogen', 'Compressed Air', 'Argon'];

  const gasDescriptions: { [key: string]: string } = {
    'Oxygen': 'Exothermic reaction generates additional heat, accelerating cutting',
    'Nitrogen': 'Inert gas prevents oxidation, produces clean edges',
    'Compressed Air': 'Cost-effective mixture, suitable for thin materials',
    'Argon': 'Heavy inert gas, essential for reactive metals like titanium'
  };

  return (
    <div className="space-y-4">
      {/* Gas Type Selector */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-gray-700">Select Gas:</span>
        {gases.map((gas) => (
          <button
            key={gas}
            onClick={() => setSelectedGas(gas)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedGas === gas
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {gas}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>{selectedGas}:</strong> {gasDescriptions[selectedGas]}
        </p>
      </div>

      {/* SVG Diagram */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Gas Flow Dynamics</h4>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showLabels}
              onChange={(e) => setShowLabels(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Show Labels</span>
          </label>
        </div>

        <svg
          viewBox="0 0 600 500"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for gradients and patterns */}
          <defs>
            {/* Laser beam gradient */}
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
            </linearGradient>

            {/* Gas flow gradient */}
            <linearGradient id="gasFlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.3 }} />
            </linearGradient>

            {/* Molten pool gradient */}
            <radialGradient id="moltenPool">
              <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 0.6 }} />
            </radialGradient>

            {/* Animated gas particles */}
            <circle id="gasParticle" r="2" fill="#3b82f6" opacity="0.6" />
          </defs>

          {/* Background */}
          <rect width="600" height="500" fill="#f9fafb" />

          {/* Laser head housing */}
          <rect x="250" y="20" width="100" height="40" fill="#374151" rx="5" />
          <text x="300" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Laser Head
          </text>

          {/* Laser beam */}
          <path
            d="M 295 60 L 295 180"
            stroke="url(#laserBeam)"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M 305 60 L 305 180"
            stroke="url(#laserBeam)"
            strokeWidth="8"
            fill="none"
          />

          {/* Beam center line */}
          <line x1="300" y1="60" x2="300" y2="180" stroke="#fca5a5" strokeWidth="2" strokeDasharray="5,5" />

          {showLabels && (
            <text x="320" y="120" fill="#991b1b" fontSize="11" fontWeight="600">
              Laser Beam
            </text>
          )}

          {/* Nozzle */}
          <path
            d="M 270 180 L 300 220 L 300 280 M 330 180 L 300 220 L 300 280"
            stroke="#1f2937"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 270 180 L 260 200 Q 260 240 280 270 L 300 280 L 320 270 Q 340 240 340 200 L 330 180 Z"
            fill="#9ca3af"
            stroke="#1f2937"
            strokeWidth="2"
            opacity="0.7"
          />

          {showLabels && (
            <text x="350" y="230" fill="#1f2937" fontSize="11" fontWeight="600">
              Nozzle
            </text>
          )}

          {/* Gas flow arrows (animated concept with multiple arrows) */}
          <g className="gas-flow">
            {/* Left gas flow */}
            <path
              d="M 270 190 L 265 240 L 270 285"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowblue)"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            {/* Center gas flow */}
            <path
              d="M 300 190 L 300 285"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.4;1;0.4"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </path>
            {/* Right gas flow */}
            <path
              d="M 330 190 L 335 240 L 330 285"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {showLabels && (
            <text x="210" y="240" fill="#1e40af" fontSize="11" fontWeight="600">
              Assist Gas Flow
            </text>
          )}

          {/* Material surface */}
          <rect x="100" y="320" width="400" height="40" fill="#6b7280" stroke="#374151" strokeWidth="2" />
          <text x="300" y="345" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Material Surface
          </text>

          {/* Molten pool */}
          <ellipse cx="300" cy="320" rx="35" ry="15" fill="url(#moltenPool)">
            <animate
              attributeName="rx"
              values="35;40;35"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </ellipse>

          {showLabels && (
            <text x="220" y="310" fill="#d97706" fontSize="11" fontWeight="600">
              Molten Pool
            </text>
          )}

          {/* Kerf (cut) */}
          <path
            d="M 295 320 L 285 360 L 295 400 M 305 320 L 315 360 L 305 400"
            stroke="#374151"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 295 320 L 285 360 L 295 400 L 305 400 L 315 360 L 305 320 Z"
            fill="#1f2937"
            opacity="0.5"
          />

          {showLabels && (
            <text x="330" y="370" fill="#1f2937" fontSize="11" fontWeight="600">
              Kerf (Cut)
            </text>
          )}

          {/* Gas exit and dross removal */}
          <path
            d="M 285 360 L 270 420 M 315 360 L 330 420"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="3,3"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="12"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>

          {/* Ejected material particles */}
          <circle cx="275" cy="400" r="3" fill="#f59e0b" opacity="0.7">
            <animate attributeName="cy" values="400;440;400" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="325" cy="405" r="3" fill="#f59e0b" opacity="0.7">
            <animate attributeName="cy" values="405;445;405" dur="2.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.3s" repeatCount="indefinite" />
          </circle>

          {showLabels && (
            <text x="210" y="440" fill="#6b7280" fontSize="11" fontWeight="600">
              Ejected Molten Material
            </text>
          )}

          {/* Cut edges */}
          <line x1="285" y1="400" x2="285" y2="460" stroke="#4b5563" strokeWidth="2" />
          <line x1="315" y1="400" x2="315" y2="460" stroke="#4b5563" strokeWidth="2" />

          {showLabels && (
            <text x="330" y="440" fill="#4b5563" fontSize="11" fontWeight="600">
              Cut Edge
            </text>
          )}

          {/* Pressure zones indicators */}
          {selectedGas === 'Nitrogen' && (
            <>
              <circle cx="300" cy="250" r="50" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              {showLabels && (
                <text x="360" y="250" fill="#1e40af" fontSize="10">
                  High Pressure
                </text>
              )}
              <text x="360" y="262" fill="#1e40af" fontSize="10">
                Zone (12-20 bar)
              </text>
            </>
          )}

          {selectedGas === 'Oxygen' && (
            <>
              <path
                d="M 330 310 L 370 310 L 370 330 L 330 330"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
              {showLabels && (
                <text x="380" y="322" fill="#dc2626" fontSize="10" fontWeight="600">
                  Exothermic Reaction Zone
                </text>
              )}
            </>
          )}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowblue"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h5 className="text-sm font-semibold text-gray-900 mb-3">Diagram Legend</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-700">Laser Beam</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-700">Assist Gas Flow</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-gray-700">Molten Pool</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-700 rounded"></div>
            <span className="text-gray-700">Material</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-gray-700">Ejected Material</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-gray-500 rounded"></div>
            <span className="text-gray-700">Cut Edge</span>
          </div>
        </div>
      </div>

      {/* Gas-Specific Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h5 className="text-sm font-semibold text-yellow-900 mb-2">
          {selectedGas}-Specific Considerations
        </h5>
        <ul className="text-sm text-yellow-800 space-y-1">
          {selectedGas === 'Oxygen' && (
            <>
              <li>• Exothermic reaction adds heat, increasing cutting speed by 30-50%</li>
              <li>• Lower pressure required (2-5 bar) compared to nitrogen</li>
              <li>• Creates oxidized edge (rust-colored) on cut surface</li>
              <li>• Best for carbon steel where edge oxidation is acceptable</li>
            </>
          )}
          {selectedGas === 'Nitrogen' && (
            <>
              <li>• Inert gas prevents oxidation reaction, producing clean edges</li>
              <li>• High pressure required (8-20 bar) to effectively blow out molten material</li>
              <li>• Higher gas consumption and cost compared to oxygen</li>
              <li>• Essential for stainless steel, aluminum, and aesthetic applications</li>
            </>
          )}
          {selectedGas === 'Compressed Air' && (
            <>
              <li>• Mixture of 78% nitrogen + 21% oxygen provides balanced performance</li>
              <li>• Moderate pressure (6-12 bar), cost-effective solution</li>
              <li>• Slight oxidation possible due to oxygen content</li>
              <li>• Must be oil-free and dried to prevent lens contamination</li>
            </>
          )}
          {selectedGas === 'Argon' && (
            <>
              <li>• Heavier than air (1.784 kg/m³), provides better shielding</li>
              <li>• Complete oxidation prevention for reactive metals</li>
              <li>• Lower pressure (5-10 bar) sufficient due to higher density</li>
              <li>• Essential for titanium, zirconium, and critical aerospace applications</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}


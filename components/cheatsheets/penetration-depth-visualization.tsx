'use client';

import React from 'react';

interface PenetrationDepthVisualizationProps {
  className?: string;
}

export function PenetrationDepthVisualization({ className = '' }: PenetrationDepthVisualizationProps) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title */}
        <text x="400" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900 dark:fill-gray-100" fontSize="20">
          Laser Power vs. Maximum Penetration Depth
        </text>

        {/* Axes */}
        <line x1="80" y1="450" x2="750" y2="450" stroke="currentColor" strokeWidth="2" className="stroke-gray-700 dark:stroke-gray-300" />
        <line x1="80" y1="450" x2="80" y2="80" stroke="currentColor" strokeWidth="2" className="stroke-gray-700 dark:stroke-gray-300" />

        {/* X-axis label */}
        <text x="415" y="485" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300" fontSize="14">
          Laser Power (kW)
        </text>

        {/* Y-axis label */}
        <text x="40" y="270" textAnchor="middle" transform="rotate(-90 40 270)" className="fill-gray-700 dark:fill-gray-300" fontSize="14">
          Maximum Cutting Thickness (mm)
        </text>

        {/* X-axis ticks and labels */}
        {[0, 1, 2, 3, 4, 6, 8, 12].map((power, index) => {
          const x = 80 + (index * 85);
          return (
            <g key={`x-${power}`}>
              <line x1={x} y1="450" x2={x} y2="455" stroke="currentColor" strokeWidth="1.5" className="stroke-gray-700 dark:stroke-gray-300" />
              <text x={x} y="470" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400" fontSize="12">
                {power}
              </text>
            </g>
          );
        })}

        {/* Y-axis ticks and labels */}
        {[0, 5, 10, 15, 20, 25, 30, 35, 40].map((thickness, index) => {
          const y = 450 - (index * 42);
          return (
            <g key={`y-${thickness}`}>
              <line x1="75" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="1.5" className="stroke-gray-700 dark:stroke-gray-300" />
              <text x="65" y={y + 4} textAnchor="end" className="fill-gray-600 dark:fill-gray-400" fontSize="11">
                {thickness}
              </text>
            </g>
          );
        })}

        {/* Carbon Steel (O2) - Blue */}
        <path
          d="M 165 405 L 250 321 L 335 237 L 420 195 L 590 132 L 675 90"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="165" cy="405" r="5" fill="#3b82f6" />
        <circle cx="250" cy="321" r="5" fill="#3b82f6" />
        <circle cx="335" cy="237" r="5" fill="#3b82f6" />
        <circle cx="420" cy="195" r="5" fill="#3b82f6" />
        <circle cx="590" cy="132" r="5" fill="#3b82f6" />
        <circle cx="675" cy="90" r="5" fill="#3b82f6" />

        {/* Stainless Steel (N2) - Purple */}
        <path
          d="M 165 426 L 250 363 L 335 279 L 420 237 L 590 174 L 675 132"
          fill="none"
          stroke="#9333ea"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="165" cy="426" r="5" fill="#9333ea" />
        <circle cx="250" cy="363" r="5" fill="#9333ea" />
        <circle cx="335" cy="279" r="5" fill="#9333ea" />
        <circle cx="420" cy="237" r="5" fill="#9333ea" />
        <circle cx="590" cy="174" r="5" fill="#9333ea" />
        <circle cx="675" cy="132" r="5" fill="#9333ea" />

        {/* Aluminum (N2) - Green */}
        <path
          d="M 165 437 L 250 384 L 335 300 L 420 258 L 590 195 L 675 153"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="165" cy="437" r="5" fill="#16a34a" />
        <circle cx="250" cy="384" r="5" fill="#16a34a" />
        <circle cx="335" cy="300" r="5" fill="#16a34a" />
        <circle cx="420" cy="258" r="5" fill="#16a34a" />
        <circle cx="590" cy="195" r="5" fill="#16a34a" />
        <circle cx="675" cy="153" r="5" fill="#16a34a" />

        {/* Legend */}
        <rect x="550" y="300" width="200" height="90" fill="white" fillOpacity="0.9" stroke="currentColor" strokeWidth="1" className="stroke-gray-300 dark:stroke-gray-600" rx="5" />
        
        <line x1="565" y1="320" x2="595" y2="320" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="580" cy="320" r="4" fill="#3b82f6" />
        <text x="605" y="325" className="fill-gray-800 dark:fill-gray-200" fontSize="13">Carbon Steel (O₂)</text>

        <line x1="565" y1="345" x2="595" y2="345" stroke="#9333ea" strokeWidth="3" />
        <circle cx="580" cy="345" r="4" fill="#9333ea" />
        <text x="605" y="350" className="fill-gray-800 dark:fill-gray-200" fontSize="13">Stainless Steel (N₂)</text>

        <line x1="565" y1="370" x2="595" y2="370" stroke="#16a34a" strokeWidth="3" />
        <circle cx="580" cy="370" r="4" fill="#16a34a" />
        <text x="605" y="375" className="fill-gray-800 dark:fill-gray-200" fontSize="13">Aluminum (N₂)</text>

        {/* Annotations */}
        <text x="680" y="95" className="fill-blue-600 dark:fill-blue-400 font-semibold" fontSize="11">40mm</text>
        <text x="680" y="137" className="fill-purple-600 dark:fill-purple-400 font-semibold" fontSize="11">30mm</text>
        <text x="680" y="158" className="fill-green-600 dark:fill-green-400 font-semibold" fontSize="11">25mm</text>

        {/* Grid lines (optional, subtle) */}
        {[126, 210, 294, 378].map((y, index) => (
          <line
            key={`grid-${index}`}
            x1="80"
            y1={y}
            x2="750"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="stroke-gray-300 dark:stroke-gray-600"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* Caption */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
        <strong>Figure 1:</strong> Relationship between laser power and maximum production-quality cutting thickness 
        for common materials. Based on high-quality fiber laser specifications (M²&lt;2.0). For advanced laser machining solutions, visit{' '}
        <a href="https://www.opmtlaser.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          OPMT Laser
        </a>.
      </p>
    </div>
  );
}


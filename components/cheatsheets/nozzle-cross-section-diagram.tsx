'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type NozzleType = 'single' | 'double' | 'highspeed';

interface Props {
  type?: NozzleType;
  showLabels?: boolean;
  interactive?: boolean;
}

export function NozzleCrossSectionDiagram({
  type = 'single',
  showLabels = true,
  interactive = true,
}: Props) {
  const [selectedType, setSelectedType] = useState<NozzleType>(type);

  const renderSingleLayer = () => (
    <svg viewBox="0 0 300 400" className="w-full h-auto">
      {/* Nozzle Body */}
      <path
        d="M 100 50 L 100 200 L 80 350 L 80 380 L 220 380 L 220 350 L 200 200 L 200 50 Z"
        fill="#B87333"
        stroke="#8B5A2B"
        strokeWidth="2"
      />
      
      {/* Inner Channel */}
      <path
        d="M 130 50 L 130 200 L 120 350 L 120 370 L 180 370 L 180 350 L 170 200 L 170 50 Z"
        fill="#E8E8E8"
        stroke="#666"
        strokeWidth="1"
      />
      
      {/* Orifice */}
      <ellipse cx="150" cy="375" rx="15" ry="5" fill="#333" />
      
      {/* Gas Flow Arrows */}
      <defs>
        <marker
          id="arrowhead-single"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#4A90E2" />
        </marker>
      </defs>
      
      <line
        x1="150"
        y1="80"
        x2="150"
        y2="140"
        stroke="#4A90E2"
        strokeWidth="3"
        markerEnd="url(#arrowhead-single)"
      />
      <line
        x1="150"
        y1="160"
        x2="150"
        y2="220"
        stroke="#4A90E2"
        strokeWidth="3"
        markerEnd="url(#arrowhead-single)"
      />
      <line
        x1="150"
        y1="240"
        x2="150"
        y2="300"
        stroke="#4A90E2"
        strokeWidth="3"
        markerEnd="url(#arrowhead-single)"
      />

      {showLabels && (
        <>
          <text x="230" y="100" fontSize="12" fill="#333">
            Nozzle Body
          </text>
          <line x1="200" y1="95" x2="220" y2="95" stroke="#333" strokeWidth="1" />
          
          <text x="230" y="250" fontSize="12" fill="#333">
            Gas Channel
          </text>
          <line x1="170" y1="245" x2="220" y2="245" stroke="#333" strokeWidth="1" />
          
          <text x="190" y="385" fontSize="12" fill="#333">
            Orifice
          </text>
        </>
      )}
    </svg>
  );

  const renderDoubleLayer = () => (
    <svg viewBox="0 0 300 400" className="w-full h-auto">
      {/* Outer Nozzle Body */}
      <path
        d="M 90 50 L 90 200 L 70 350 L 70 380 L 230 380 L 230 350 L 210 200 L 210 50 Z"
        fill="#B87333"
        stroke="#8B5A2B"
        strokeWidth="2"
      />
      
      {/* Inner Nozzle Body */}
      <path
        d="M 110 50 L 110 200 L 100 350 L 100 375 L 200 375 L 200 350 L 190 200 L 190 50 Z"
        fill="#CD9B5D"
        stroke="#8B5A2B"
        strokeWidth="2"
      />
      
      {/* Outer Channel */}
      <path
        d="M 95 100 L 95 250 L 85 350 L 85 370 L 105 370 L 105 350 L 115 250 L 115 100 Z"
        fill="#E8E8E8"
        opacity="0.7"
      />
      <path
        d="M 205 100 L 205 250 L 215 350 L 215 370 L 195 370 L 195 350 L 185 250 L 185 100 Z"
        fill="#E8E8E8"
        opacity="0.7"
      />
      
      {/* Inner Channel */}
      <path
        d="M 135 50 L 135 200 L 125 350 L 125 365 L 175 365 L 175 350 L 165 200 L 165 50 Z"
        fill="#E8E8E8"
        stroke="#666"
        strokeWidth="1"
      />
      
      {/* Orifices */}
      <ellipse cx="150" cy="370" rx="20" ry="5" fill="#333" opacity="0.3" />
      <ellipse cx="150" cy="368" rx="12" ry="4" fill="#333" />
      
      {/* Gas Flow Arrows */}
      <defs>
        <marker
          id="arrowhead-double"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#4A90E2" />
        </marker>
      </defs>
      
      {/* Inner gas flow */}
      <line
        x1="150"
        y1="80"
        x2="150"
        y2="130"
        stroke="#4A90E2"
        strokeWidth="3"
        markerEnd="url(#arrowhead-double)"
      />
      <line
        x1="150"
        y1="150"
        x2="150"
        y2="200"
        stroke="#4A90E2"
        strokeWidth="3"
        markerEnd="url(#arrowhead-double)"
      />
      
      {/* Outer gas flow */}
      <line
        x1="100"
        y1="150"
        x2="95"
        y2="200"
        stroke="#7CB9E8"
        strokeWidth="2"
        markerEnd="url(#arrowhead-double)"
      />
      <line
        x1="200"
        y1="150"
        x2="205"
        y2="200"
        stroke="#7CB9E8"
        strokeWidth="2"
        markerEnd="url(#arrowhead-double)"
      />

      {showLabels && (
        <>
          <text x="240" y="100" fontSize="11" fill="#333">
            Outer Body
          </text>
          <line x1="210" y1="95" x2="235" y2="95" stroke="#333" strokeWidth="1" />
          
          <text x="240" y="150" fontSize="11" fill="#333">
            Inner Body
          </text>
          <line x1="190" y1="145" x2="235" y2="145" stroke="#333" strokeWidth="1" />
          
          <text x="20" y="220" fontSize="11" fill="#333">
            Outer Gas
          </text>
          <line x1="85" y1="215" x2="55" y2="215" stroke="#333" strokeWidth="1" />
          
          <text x="180" y="385" fontSize="11" fill="#333">
            Dual Orifice
          </text>
        </>
      )}
    </svg>
  );

  const renderHighSpeed = () => (
    <svg viewBox="0 0 300 400" className="w-full h-auto">
      {/* Nozzle Body with Laval profile */}
      <path
        d="M 100 50 L 100 150 L 90 200 L 100 250 L 80 350 L 80 380 L 220 380 L 220 350 L 200 250 L 210 200 L 200 150 L 200 50 Z"
        fill="#B87333"
        stroke="#8B5A2B"
        strokeWidth="2"
      />
      
      {/* Inner Channel - Convergent-Divergent */}
      <path
        d="M 130 50 L 130 150 L 140 200 L 130 250 L 120 350 L 120 370 L 180 370 L 180 350 L 170 250 L 160 200 L 170 150 L 170 50 Z"
        fill="#E8E8E8"
        stroke="#666"
        strokeWidth="1"
      />
      
      {/* Throat (narrowest point) */}
      <ellipse cx="150" cy="200" rx="10" ry="3" fill="#FFD700" opacity="0.5" />
      
      {/* Orifice */}
      <ellipse cx="150" cy="375" rx="15" ry="5" fill="#333" />
      
      {/* Gas Flow Arrows - showing acceleration */}
      <defs>
        <marker
          id="arrowhead-high"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#E74C3C" />
        </marker>
      </defs>
      
      {/* Subsonic flow */}
      <line
        x1="150"
        y1="80"
        x2="150"
        y2="130"
        stroke="#4A90E2"
        strokeWidth="2"
        markerEnd="url(#arrowhead-high)"
      />
      
      {/* At throat - sonic */}
      <line
        x1="150"
        y1="170"
        x2="150"
        y2="195"
        stroke="#FFD700"
        strokeWidth="3"
        markerEnd="url(#arrowhead-high)"
      />
      
      {/* Supersonic flow */}
      <line
        x1="150"
        y1="210"
        x2="150"
        y2="260"
        stroke="#E74C3C"
        strokeWidth="4"
        markerEnd="url(#arrowhead-high)"
      />
      <line
        x1="150"
        y1="280"
        x2="150"
        y2="330"
        stroke="#E74C3C"
        strokeWidth="4"
        markerEnd="url(#arrowhead-high)"
      />

      {showLabels && (
        <>
          <text x="230" y="100" fontSize="11" fill="#333">
            Convergent
          </text>
          <line x1="200" y1="95" x2="220" y2="95" stroke="#333" strokeWidth="1" />
          
          <text x="230" y="200" fontSize="11" fill="#333">
            Throat
          </text>
          <line x1="160" y1="200" x2="220" y2="200" stroke="#333" strokeWidth="1" />
          
          <text x="230" y="300" fontSize="11" fill="#333">
            Divergent
          </text>
          <line x1="200" y1="295" x2="220" y2="295" stroke="#333" strokeWidth="1" />
          
          <text x="10" y="130" fontSize="10" fill="#4A90E2">
            Subsonic
          </text>
          <text x="10" y="200" fontSize="10" fill="#FFD700">
            Sonic
          </text>
          <text x="10" y="300" fontSize="10" fill="#E74C3C">
            Supersonic
          </text>
        </>
      )}
    </svg>
  );

  const renderDiagram = () => {
    switch (selectedType) {
      case 'single':
        return renderSingleLayer();
      case 'double':
        return renderDoubleLayer();
      case 'highspeed':
        return renderHighSpeed();
      default:
        return renderSingleLayer();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nozzle Cross-Section Diagrams</CardTitle>
      </CardHeader>
      <CardContent>
        {interactive && (
          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setSelectedType('single')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                selectedType === 'single'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Single Layer
            </button>
            <button
              onClick={() => setSelectedType('double')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                selectedType === 'double'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Double Layer
            </button>
            <button
              onClick={() => setSelectedType('highspeed')}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                selectedType === 'highspeed'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              High-Speed (Laval)
            </button>
          </div>
        )}

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          {renderDiagram()}
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p className="font-semibold mb-2">
            {selectedType === 'single' && 'Single-Layer Nozzle'}
            {selectedType === 'double' && 'Double-Layer Nozzle'}
            {selectedType === 'highspeed' && 'High-Speed Laval Nozzle'}
          </p>
          <p>
            {selectedType === 'single' &&
              'Simple conical design with single gas channel. Gas flows directly through to the orifice. Most economical option for general cutting applications.'}
            {selectedType === 'double' &&
              'Dual-chamber design with inner cutting gas and outer protective gas flow. Provides more stable gas flow and better cut quality. Recommended for high-quality nitrogen cutting.'}
            {selectedType === 'highspeed' &&
              'Convergent-divergent (Laval) nozzle design accelerates gas to supersonic speeds. The throat creates sonic flow, which then expands to supersonic in the divergent section. Used for maximum cutting speed on thin materials.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}


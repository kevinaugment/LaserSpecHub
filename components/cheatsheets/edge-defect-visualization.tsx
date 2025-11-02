'use client';

import { useState } from 'react';

interface DefectVisualizationProps {
  defects: Array<{
    defect: string;
    severity: 'critical' | 'major' | 'minor';
    cause: string[];
    solution: string[];
  }>;
}

export function EdgeDefectVisualization({ defects }: DefectVisualizationProps) {
  const [selectedDefect, setSelectedDefect] = useState<string | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800', svg: '#ef4444' };
      case 'major': return { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800', svg: '#f59e0b' };
      case 'minor': return { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-800', svg: '#eab308' };
      default: return { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-800', svg: '#6b7280' };
    }
  };

  const renderDefectSVG = (defectName: string, color: string) => {
    switch (defectName) {
      case 'Dross/Slag Attachment':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            <line x1="100" y1="70" x2="100" y2="110" stroke={color} strokeWidth="3" />
            {/* Dross attachment */}
            <ellipse cx="95" cy="115" rx="8" ry="6" fill={color} opacity="0.8" />
            <ellipse cx="105" cy="117" rx="6" ry="5" fill={color} opacity="0.8" />
            <ellipse cx="100" cy="120" rx="5" ry="4" fill={color} opacity="0.8" />
            <text x="100" y="140" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Dross Buildup</text>
          </svg>
        );
      
      case 'Excessive Striations (Drag Lines)':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            {/* Wavy striation pattern */}
            <path d="M 95 70 Q 85 80 95 90 Q 105 100 95 110" stroke={color} strokeWidth="3" fill="none" />
            <path d="M 105 70 Q 115 80 105 90 Q 95 100 105 110" stroke={color} strokeWidth="3" fill="none" />
            {/* Drag line indicators */}
            <line x1="85" y1="75" x2="90" y2="75" stroke={color} strokeWidth="1" opacity="0.6" />
            <line x1="85" y1="85" x2="90" y2="85" stroke={color} strokeWidth="1" opacity="0.6" />
            <line x1="85" y1="95" x2="90" y2="95" stroke={color} strokeWidth="1" opacity="0.6" />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Visible Striations</text>
          </svg>
        );
      
      case 'Edge Burning/Oxidation':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            <line x1="100" y1="70" x2="100" y2="110" stroke={color} strokeWidth="4" />
            {/* Oxidation/discoloration */}
            <ellipse cx="100" cy="90" rx="15" ry="30" fill={color} opacity="0.3" />
            <ellipse cx="100" cy="90" rx="10" ry="25" fill={color} opacity="0.2" />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Heat Discoloration</text>
          </svg>
        );
      
      case 'Non-Perpendicular Cut (Taper)':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            {/* Tapered cut */}
            <line x1="90" y1="70" x2="110" y2="110" stroke={color} strokeWidth="3" />
            <line x1="110" y1="70" x2="90" y2="110" stroke={color} strokeWidth="3" />
            {/* Angle indicator */}
            <path d="M 100 70 L 100 90 L 105 90" stroke="#9ca3af" strokeWidth="1" fill="none" />
            <text x="110" y="85" fontSize="9" fill="#6b7280">θ</text>
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Taper/Angle Deviation</text>
          </svg>
        );
      
      case 'Kerf Width Variation':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            {/* Variable kerf width */}
            <line x1="95" y1="70" x2="92" y2="90" stroke={color} strokeWidth="2" />
            <line x1="95" y1="90" x2="98" y2="110" stroke={color} strokeWidth="2" />
            <line x1="105" y1="70" x2="108" y2="90" stroke={color} strokeWidth="2" />
            <line x1="105" y1="90" x2="102" y2="110" stroke={color} strokeWidth="2" />
            {/* Width indicators */}
            <line x1="95" y1="80" x2="105" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="92" y1="90" x2="108" y2="90" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Inconsistent Width</text>
          </svg>
        );
      
      case 'Micro-Cracks at Edge':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            <line x1="100" y1="70" x2="100" y2="110" stroke={color} strokeWidth="3" />
            {/* Micro-cracks */}
            <line x1="100" y1="80" x2="108" y2="85" stroke={color} strokeWidth="1.5" />
            <line x1="100" y1="90" x2="92" y2="95" stroke={color} strokeWidth="1.5" />
            <line x1="100" y1="100" x2="107" y2="103" stroke={color} strokeWidth="1.5" />
            <circle cx="108" cy="85" r="1.5" fill={color} />
            <circle cx="92" cy="95" r="1.5" fill={color} />
            <circle cx="107" cy="103" r="1.5" fill={color} />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Micro-Cracks</text>
          </svg>
        );
      
      case 'Burr Formation':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            <line x1="100" y1="70" x2="100" y2="110" stroke={color} strokeWidth="3" />
            {/* Burrs */}
            <path d="M 98 75 L 95 78 L 98 80" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M 102 85 L 105 88 L 102 90" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M 98 95 L 94 98 L 98 100" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M 102 105 L 106 108 L 102 110" stroke={color} strokeWidth="1.5" fill="none" />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Burr/Sharp Edges</text>
          </svg>
        );
      
      default:
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <rect x="20" y="20" width="160" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
            <line x1="100" y1="70" x2="100" y2="110" stroke={color} strokeWidth="3" />
            <text x="100" y="135" fontSize="11" textAnchor="middle" fill={color} fontWeight="bold">Edge Defect</text>
          </svg>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {defects.map((defect, index) => {
          const colors = getSeverityColor(defect.severity);
          const isSelected = selectedDefect === defect.defect;
          
          return (
            <div
              key={index}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${colors.border} ${colors.bg} ${
                isSelected ? 'shadow-lg ring-2 ring-primary-500' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedDefect(isSelected ? null : defect.defect)}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-sm font-bold ${colors.text}`}>{defect.defect}</h3>
                <span className="px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-bold uppercase">
                  {defect.severity}
                </span>
              </div>

              {renderDefectSVG(defect.defect, colors.svg)}

              {isSelected && (
                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <h4 className="font-semibold mb-1">Common Causes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {defect.cause.slice(0, 3).map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Solutions:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {defect.solution.slice(0, 3).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-sm text-gray-700">
        <p>
          <strong>How to use:</strong> Click on any defect card to see detailed causes and solutions. 
          The diagrams show cross-sectional views of the cut edge with the defect highlighted. 
          Severity levels indicate the impact on part quality and functionality.
        </p>
      </div>
    </div>
  );
}

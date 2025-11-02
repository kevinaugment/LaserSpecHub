'use client';

import { useState } from 'react';

interface ThicknessToleranceData {
  thicknessRange: string;
  grade1: string;
  grade2: string;
  grade3: string;
  grade4: string;
}

interface ThicknessQualityChartProps {
  data: ThicknessToleranceData[];
}

export function ThicknessQualityChart({ data }: ThicknessQualityChartProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Visual Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Perpendicularity Tolerance by Material Thickness
        </h3>
        
        <div className="mb-6">
          <svg viewBox="0 0 600 400" className="w-full h-auto">
            {/* Chart background */}
            <rect x="80" y="40" width="480" height="300" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            
            {/* Grid lines */}
            <line x1="80" y1="115" x2="560" y2="115" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="80" y1="190" x2="560" y2="190" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="80" y1="265" x2="560" y2="265" stroke="#e5e7eb" strokeWidth="1" />
            
            {/* Y-axis labels */}
            <text x="70" y="45" fontSize="12" textAnchor="end" fill="#6b7280">±1.0mm</text>
            <text x="70" y="120" fontSize="12" textAnchor="end" fill="#6b7280">±0.7mm</text>
            <text x="70" y="195" fontSize="12" textAnchor="end" fill="#6b7280">±0.5mm</text>
            <text x="70" y="270" fontSize="12" textAnchor="end" fill="#6b7280">±0.2mm</text>
            <text x="70" y="345" fontSize="12" textAnchor="end" fill="#6b7280">±0.0mm</text>
            
            {/* X-axis labels */}
            <text x="140" y="365" fontSize="12" textAnchor="middle" fill="#6b7280">0.5-3mm</text>
            <text x="260" y1="365" fontSize="12" textAnchor="middle" fill="#6b7280">3-10mm</text>
            <text x="380" y="365" fontSize="12" textAnchor="middle" fill="#6b7280">10-20mm</text>
            <text x="500" y="365" fontSize="12" textAnchor="middle" fill="#6b7280">20-32mm</text>
            
            {/* Axis labels */}
            <text x="320" y="395" fontSize="14" textAnchor="middle" fill="#374151" fontWeight="bold">Material Thickness</text>
            <text x="30" y="200" fontSize="14" textAnchor="middle" fill="#374151" fontWeight="bold" transform="rotate(-90 30 200)">Perpendicularity Tolerance</text>
            
            {/* Grade 4 line (red) */}
            <polyline 
              points="140,265 260,190 380,115 500,70" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="3"
            />
            <circle cx="140" cy="265" r="5" fill="#ef4444" />
            <circle cx="260" cy="190" r="5" fill="#ef4444" />
            <circle cx="380" cy="115" r="5" fill="#ef4444" />
            <circle cx="500" cy="70" r="5" fill="#ef4444" />
            
            {/* Grade 3 line (orange) */}
            <polyline 
              points="140,295 260,265 380,190 500,115" 
              fill="none" 
              stroke="#f59e0b" 
              strokeWidth="3"
            />
            <circle cx="140" cy="295" r="5" fill="#f59e0b" />
            <circle cx="260" cy="265" r="5" fill="#f59e0b" />
            <circle cx="380" cy="190" r="5" fill="#f59e0b" />
            <circle cx="500" cy="115" r="5" fill="#f59e0b" />
            
            {/* Grade 2 line (blue) */}
            <polyline 
              points="140,310 260,295 380,235 500,160" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="3"
            />
            <circle cx="140" cy="310" r="5" fill="#3b82f6" />
            <circle cx="260" cy="295" r="5" fill="#3b82f6" />
            <circle cx="380" cy="235" r="5" fill="#3b82f6" />
            <circle cx="500" cy="160" r="5" fill="#3b82f6" />
            
            {/* Grade 1 line (green) */}
            <polyline 
              points="140,325 260,325 380,310 500,295" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3"
            />
            <circle cx="140" cy="325" r="5" fill="#10b981" />
            <circle cx="260" cy="325" r="5" fill="#10b981" />
            <circle cx="380" cy="310" r="5" fill="#10b981" />
            <circle cx="500" cy="295" r="5" fill="#10b981" />
            
            {/* Legend */}
            <rect x="420" y="50" width="120" height="90" fill="white" stroke="#d1d5db" strokeWidth="1" rx="4" />
            <line x1="430" y1="65" x2="455" y2="65" stroke="#10b981" strokeWidth="3" />
            <text x="460" y="70" fontSize="12" fill="#374151">Grade 1</text>
            
            <line x1="430" y1="85" x2="455" y2="85" stroke="#3b82f6" strokeWidth="3" />
            <text x="460" y="90" fontSize="12" fill="#374151">Grade 2</text>
            
            <line x1="430" y1="105" x2="455" y2="105" stroke="#f59e0b" strokeWidth="3" />
            <text x="460" y="110" fontSize="12" fill="#374151">Grade 3</text>
            
            <line x1="430" y1="125" x2="455" y2="125" stroke="#ef4444" strokeWidth="3" />
            <text x="460" y="130" fontSize="12" fill="#374151">Grade 4</text>
          </svg>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
          <p>
            <strong>Chart Interpretation:</strong> As material thickness increases, perpendicularity tolerances 
            become looser (higher values) for all grades. Thicker materials are more challenging to cut with 
            perfect perpendicularity due to increased heat accumulation and beam divergence through the material.
          </p>
        </div>
      </div>

      {/* Interactive Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thickness Range
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade 1<br/>(Precision)
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade 2<br/>(Fine)
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade 3<br/>(Standard)
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade 4<br/>(Economy)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr 
                key={index}
                className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedRange === row.thicknessRange ? 'bg-primary-50 ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setSelectedRange(selectedRange === row.thicknessRange ? null : row.thicknessRange)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.thicknessRange}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {row.grade1}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {row.grade2}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    {row.grade3}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {row.grade4}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRange && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-gray-900 mb-2">Selected Range: {selectedRange}</h4>
          <p className="text-sm text-gray-700">
            {selectedRange === '0.5 - 3mm' && 
              'Thin materials: Easiest to achieve tight tolerances. Minimal beam divergence. Grade 1 readily achievable with proper parameters.'}
            {selectedRange === '3 - 10mm' && 
              'Medium thickness: Most common range for laser cutting. Good balance of speed and quality. Grade 2-3 typical for production.'}
            {selectedRange === '10 - 20mm' && 
              'Thick materials: Requires higher laser power. Perpendicularity becomes challenging. Grade 3 standard, Grade 1-2 requires careful control.'}
            {selectedRange === '20 - 32mm' && 
              'Very thick materials: Near upper limit for laser cutting. Significant beam divergence. Grade 3-4 typical. Consider plasma or waterjet for Grade 1 requirements.'}
          </p>
        </div>
      )}

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-bold text-yellow-900 mb-2">⚠️ Thickness Impact</h4>
          <ul className="text-sm text-yellow-900 space-y-1">
            <li>• Thicker materials = looser tolerances</li>
            <li>• Grade 1 tolerance increases 2x from thin to thick</li>
            <li>• Grade 4 tolerance increases 2.25x</li>
            <li>• Above 20mm, consider alternative processes for Grade 1</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">✓ Best Practices</h4>
          <ul className="text-sm text-green-900 space-y-1">
            <li>• Specify grade AND thickness in requirements</li>
            <li>• Use multiple passes for thick + Grade 1</li>
            <li>• Verify perpendicularity at process qualification</li>
            <li>• Consider material type alongside thickness</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

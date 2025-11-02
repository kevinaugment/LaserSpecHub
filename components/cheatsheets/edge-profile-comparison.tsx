'use client';

import { useState } from 'react';

interface EdgeProfileProps {
  grades: Array<{
    gradeNumber: number;
    grade: string;
    perpendicularity: string;
    roughness: string;
    dross: string;
  }>;
}

export function EdgeProfileComparison({ grades }: EdgeProfileProps) {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {grades.map((grade) => (
          <div
            key={grade.gradeNumber}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedGrade === grade.gradeNumber
                ? 'border-primary-600 bg-primary-50 shadow-lg'
                : 'border-gray-200 hover:border-primary-400'
            }`}
            onClick={() => setSelectedGrade(selectedGrade === grade.gradeNumber ? null : grade.gradeNumber)}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">{grade.grade}</h3>
            </div>

            {/* SVG Edge Profile Cross-Section */}
            <svg viewBox="0 0 200 250" className="w-full h-auto mb-4">
              {/* Material block */}
              <rect x="20" y="20" width="160" height="80" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              
              {/* Cut edge visualization based on grade */}
              {grade.gradeNumber === 1 && (
                <>
                  {/* Grade 1: Nearly perfect perpendicular, smooth */}
                  <line x1="90" y1="100" x2="90" y2="200" stroke="#10b981" strokeWidth="3" />
                  <line x1="110" y1="100" x2="110" y2="200" stroke="#10b981" strokeWidth="3" />
                  {/* Minimal roughness */}
                  <path d="M 90 100 Q 92 120 90 140 Q 88 160 90 180 L 90 200" stroke="#10b981" strokeWidth="2" fill="none" />
                  <path d="M 110 100 Q 108 120 110 140 Q 112 160 110 180 L 110 200" stroke="#10b981" strokeWidth="2" fill="none" />
                  {/* No dross */}
                  <text x="100" y="220" fontSize="10" textAnchor="middle" fill="#10b981" fontWeight="bold">No Dross</text>
                </>
              )}
              
              {grade.gradeNumber === 2 && (
                <>
                  {/* Grade 2: Good perpendicular, slight roughness */}
                  <line x1="88" y1="100" x2="92" y2="200" stroke="#3b82f6" strokeWidth="3" opacity="0.3" />
                  <line x1="108" y1="100" x2="112" y2="200" stroke="#3b82f6" strokeWidth="3" opacity="0.3" />
                  {/* Moderate roughness */}
                  <path d="M 88 100 Q 92 115 88 130 Q 84 145 88 160 Q 92 175 88 190 L 92 200" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
                  <path d="M 112 100 Q 108 115 112 130 Q 116 145 112 160 Q 108 175 112 190 L 108 200" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
                  {/* Minimal dross */}
                  <circle cx="90" cy="205" r="2" fill="#3b82f6" />
                  <circle cx="110" cy="205" r="2" fill="#3b82f6" />
                  <text x="100" y="220" fontSize="10" textAnchor="middle" fill="#3b82f6" fontWeight="bold">Trace Dross</text>
                </>
              )}
              
              {grade.gradeNumber === 3 && (
                <>
                  {/* Grade 3: Visible taper, roughness */}
                  <line x1="85" y1="100" x2="95" y2="200" stroke="#f59e0b" strokeWidth="3" opacity="0.3" />
                  <line x1="105" y1="100" x2="115" y2="200" stroke="#f59e0b" strokeWidth="3" opacity="0.3" />
                  {/* Visible striations */}
                  <path d="M 85 100 Q 92 110 85 125 Q 78 140 85 155 Q 92 170 85 185 L 95 200" stroke="#f59e0b" strokeWidth="3" fill="none" />
                  <path d="M 115 100 Q 108 110 115 125 Q 122 140 115 155 Q 108 170 115 185 L 105 200" stroke="#f59e0b" strokeWidth="3" fill="none" />
                  {/* Small dross */}
                  <ellipse cx="95" cy="205" rx="4" ry="3" fill="#f59e0b" />
                  <ellipse cx="105" cy="206" rx="3" ry="2" fill="#f59e0b" />
                  <text x="100" y="220" fontSize="10" textAnchor="middle" fill="#f59e0b" fontWeight="bold">Small Dross</text>
                </>
              )}
              
              {grade.gradeNumber === 4 && (
                <>
                  {/* Grade 4: Significant taper, rough */}
                  <line x1="80" y1="100" x2="100" y2="200" stroke="#ef4444" strokeWidth="3" opacity="0.3" />
                  <line x1="100" y1="100" x2="120" y2="200" stroke="#ef4444" strokeWidth="3" opacity="0.3" />
                  {/* Heavy striations */}
                  <path d="M 80 100 Q 95 108 80 120 Q 70 135 80 150 Q 90 165 80 180 L 100 200" stroke="#ef4444" strokeWidth="4" fill="none" />
                  <path d="M 120 100 Q 105 108 120 120 Q 130 135 120 150 Q 110 165 120 180 L 100 200" stroke="#ef4444" strokeWidth="4" fill="none" />
                  {/* Significant dross */}
                  <ellipse cx="95" cy="207" rx="6" ry="5" fill="#ef4444" />
                  <ellipse cx="105" cy="208" rx="5" ry="4" fill="#ef4444" />
                  <ellipse cx="100" cy="210" rx="4" ry="3" fill="#ef4444" />
                  <text x="100" y="225" fontSize="10" textAnchor="middle" fill="#ef4444" fontWeight="bold">Heavy Dross</text>
                </>
              )}
              
              {/* Perpendicularity indicator */}
              <line x1="100" y1="95" x2="100" y2="105" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
              <text x="100" y="15" fontSize="9" textAnchor="middle" fill="#6b7280">Perpendicularity: {grade.perpendicularity}</text>
            </svg>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Roughness:</span>
                <span className="font-medium text-gray-900">{grade.roughness}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dross:</span>
                <span className="font-medium text-gray-900">{grade.dross}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGrade && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Grade {selectedGrade} Profile:</strong> The diagram shows a cross-sectional view of the cut edge. 
            Green indicates excellent quality, blue is good, orange is acceptable, and red shows rough quality. 
            The angle from vertical represents perpendicularity deviation, and the wavy pattern shows surface roughness.
          </p>
        </div>
      )}
    </div>
  );
}

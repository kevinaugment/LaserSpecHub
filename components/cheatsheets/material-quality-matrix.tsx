'use client';

import { useState } from 'react';

interface MaterialQualityAffinity {
  material: string;
  easiestGrade: number;
  typicalGrade: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  notes: string;
}

interface MaterialQualityMatrixProps {
  materials: MaterialQualityAffinity[];
}

export function MaterialQualityMatrix({ materials }: MaterialQualityMatrixProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
      case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
      case 'difficult': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
    }
  };

  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 1: return 'bg-green-500';
      case 2: return 'bg-blue-500';
      case 3: return 'bg-orange-500';
      case 4: return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Heat Map Matrix */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Material
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
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((material, index) => {
                const colors = getDifficultyColor(material.difficulty);
                const isSelected = selectedMaterial === material.material;
                
                return (
                  <tr 
                    key={index}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                      isSelected ? 'bg-primary-50 ring-2 ring-primary-500' : ''
                    }`}
                    onClick={() => setSelectedMaterial(isSelected ? null : material.material)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {material.material}
                    </td>
                    
                    {/* Grade 1 Cell */}
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-8 rounded ${
                        material.easiestGrade === 1 || material.typicalGrade === 1
                          ? 'bg-green-200 text-green-900 font-bold'
                          : material.easiestGrade === 2
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {material.easiestGrade === 1 ? '✓ Easy' : material.easiestGrade === 2 ? 'Possible' : 'Hard'}
                      </div>
                    </td>
                    
                    {/* Grade 2 Cell */}
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-8 rounded ${
                        material.easiestGrade === 2 || material.typicalGrade === 2
                          ? 'bg-blue-200 text-blue-900 font-bold'
                          : material.easiestGrade <= 2
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {material.easiestGrade <= 2 ? '✓ Easy' : 'Possible'}
                      </div>
                    </td>
                    
                    {/* Grade 3 Cell */}
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-8 rounded ${
                        material.typicalGrade === 3
                          ? 'bg-orange-200 text-orange-900 font-bold'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        ✓ Easy
                      </div>
                    </td>
                    
                    {/* Grade 4 Cell */}
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-8 rounded bg-red-100 text-red-700">
                        Always
                      </div>
                    </td>
                    
                    {/* Difficulty */}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                        {material.difficulty.charAt(0).toUpperCase() + material.difficulty.slice(1)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Material Details */}
      {selectedMaterial && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6">
          {materials.filter(m => m.material === selectedMaterial).map((material, index) => (
            <div key={index}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{material.material}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Typical Grade:</span>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${getGradeColor(material.typicalGrade)}`}>
                    {material.typicalGrade}
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Notes:</strong> {material.notes}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Matrix Legend</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Achievability Indicators:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-16 h-6 bg-green-200 rounded flex items-center justify-center text-xs font-bold text-green-900">✓ Easy</div>
                <span className="text-gray-700">Readily achievable with standard parameters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-6 bg-blue-100 rounded flex items-center justify-center text-xs text-blue-700">Possible</div>
                <span className="text-gray-700">Achievable with optimized parameters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-6 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Hard</div>
                <span className="text-gray-700">Difficult, requires special techniques</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Overall Difficulty:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Easy</span>
                <span className="text-gray-700">Standard laser cutting, minimal challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span>
                <span className="text-gray-700">Requires specific gas/parameters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Difficult</span>
                <span className="text-gray-700">Challenging due to material properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">✓ Easy to Cut</h4>
          <p className="text-sm text-green-900">
            <strong>Mild Steel:</strong> Excellent with oxygen assist. Grade 2-3 readily achievable with standard parameters.
          </p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-bold text-yellow-900 mb-2">⚠️ Requires Care</h4>
          <p className="text-sm text-yellow-900">
            <strong>Stainless & Aluminum:</strong> Need nitrogen for Grade 1-2. Oxidation and reflectivity concerns.
          </p>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-bold text-red-900 mb-2">⚡ Challenging</h4>
          <p className="text-sm text-red-900">
            <strong>Copper/Brass:</strong> High thermal conductivity and reflectivity. Fiber laser preferred.
          </p>
        </div>
      </div>
    </div>
  );
}

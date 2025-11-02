'use client';

import { useState } from 'react';

interface WeldingPreparation {
  weldingProcess: string;
  minimumGrade: number;
  maxRoughness: string;
  edgePreparation: string;
  requirements: string[];
}

interface WeldingEdgeRequirementsProps {
  weldingProcesses: WeldingPreparation[];
}

export function WeldingEdgeRequirements({ weldingProcesses }: WeldingEdgeRequirementsProps) {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 1: return 'bg-green-500 text-white';
      case 2: return 'bg-blue-500 text-white';
      case 3: return 'bg-orange-500 text-white';
      case 4: return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Process Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weldingProcesses.map((process, index) => {
          const isSelected = selectedProcess === process.weldingProcess;
          
          return (
            <div
              key={index}
              className={`bg-white border-2 rounded-lg p-5 cursor-pointer transition-all ${
                isSelected 
                  ? 'border-primary-600 shadow-lg ring-2 ring-primary-500' 
                  : 'border-gray-200 hover:border-primary-400 hover:shadow-md'
              }`}
              onClick={() => setSelectedProcess(isSelected ? null : process.weldingProcess)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{process.weldingProcess}</h3>
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${getGradeColor(process.minimumGrade)}`}>
                  {process.minimumGrade}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Minimum Grade Required</div>
                  <div className="font-bold text-gray-900">Grade {process.minimumGrade}+</div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-xs text-blue-600 mb-1">Max Roughness</div>
                  <div className="font-bold text-blue-900">{process.maxRoughness}</div>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-xs text-green-600 mb-1">Edge Preparation</div>
                  <div className="font-medium text-green-900">{process.edgePreparation}</div>
                </div>
              </div>

              {isSelected && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {process.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1 text-primary-600">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Welding Process
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Min Grade
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Max Roughness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edge Preparation
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {weldingProcesses.map((process, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {process.weldingProcess}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${getGradeColor(process.minimumGrade)}`}>
                      {process.minimumGrade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                    {process.maxRoughness}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {process.edgePreparation}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      process.minimumGrade === 1 ? 'bg-red-100 text-red-800' :
                      process.minimumGrade === 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {process.minimumGrade === 1 ? 'Strict' : process.minimumGrade === 2 ? 'Moderate' : 'Lenient'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edge Preparation Diagrams */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Edge Preparation Visual Guide</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Clean Edge (Grade 1-2) */}
          <div className="text-center">
            <svg viewBox="0 0 200 150" className="w-full h-auto mb-3">
              <rect x="20" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              <rect x="100" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              {/* Perfect edge */}
              <line x1="100" y1="20" x2="100" y2="80" stroke="#10b981" strokeWidth="3" />
              <text x="100" y="105" fontSize="12" textAnchor="middle" fill="#10b981" fontWeight="bold">Clean Edge</text>
              <text x="100" y="125" fontSize="10" textAnchor="middle" fill="#6b7280">Grade 1-2 Required</text>
              <text x="100" y="140" fontSize="9" textAnchor="middle" fill="#6b7280">TIG, Laser Welding</text>
            </svg>
            <div className="bg-green-50 border border-green-200 rounded p-2 text-xs text-green-900">
              <strong>Perfect:</strong> No dross, smooth, oxide-free
            </div>
          </div>

          {/* Light Cleaning (Grade 2-3) */}
          <div className="text-center">
            <svg viewBox="0 0 200 150" className="w-full h-auto mb-3">
              <rect x="20" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              <rect x="100" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              {/* Slightly rough edge */}
              <path d="M 100 20 Q 98 35 100 50 Q 102 65 100 80" stroke="#3b82f6" strokeWidth="3" fill="none" />
              {/* Small dross */}
              <circle cx="99" cy="82" r="2" fill="#3b82f6" />
              <text x="100" y="105" fontSize="12" textAnchor="middle" fill="#3b82f6" fontWeight="bold">Light Cleaning</text>
              <text x="100" y="125" fontSize="10" textAnchor="middle" fill="#6b7280">Grade 2-3 Acceptable</text>
              <text x="100" y="140" fontSize="9" textAnchor="middle" fill="#6b7280">MIG, Resistance Welding</text>
            </svg>
            <div className="bg-blue-50 border border-blue-200 rounded p-2 text-xs text-blue-900">
              <strong>Good:</strong> Light deburring, remove loose dross
            </div>
          </div>

          {/* Basic Cleaning (Grade 3-4) */}
          <div className="text-center">
            <svg viewBox="0 0 200 150" className="w-full h-auto mb-3">
              <rect x="20" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              <rect x="100" y="20" width="80" height="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              {/* Rough edge */}
              <path d="M 98 20 Q 95 30 98 40 Q 102 50 98 60 Q 94 70 98 80" stroke="#f59e0b" strokeWidth="3" fill="none" />
              {/* Dross */}
              <ellipse cx="97" cy="83" rx="3" ry="2" fill="#f59e0b" />
              <ellipse cx="99" cy="85" rx="2" ry="2" fill="#f59e0b" />
              <text x="100" y="105" fontSize="12" textAnchor="middle" fill="#f59e0b" fontWeight="bold">Basic Cleaning</text>
              <text x="100" y="125" fontSize="10" textAnchor="middle" fill="#6b7280">Grade 3-4 OK</text>
              <text x="100" y="140" fontSize="9" textAnchor="middle" fill="#6b7280">Stick Welding</text>
            </svg>
            <div className="bg-orange-50 border border-orange-200 rounded p-2 text-xs text-orange-900">
              <strong>Acceptable:</strong> Remove loose dross only
            </div>
          </div>
        </div>
      </div>

      {/* Key Guidelines */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-4">🔑 Key Guidelines for Welding Edge Preparation</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-yellow-900 mb-3">Critical Success Factors:</h4>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span><strong>Match cutting quality to welding process:</strong> TIG requires Grade 1-2, Stick accepts Grade 3-4</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span><strong>Dross removal is mandatory:</strong> Even for forgiving processes, loose dross causes porosity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span><strong>Oxide-free for stainless:</strong> Use nitrogen cutting or clean edges before welding stainless steel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <span><strong>Perpendicularity matters:</strong> Poor perpendicularity causes fit-up issues and incomplete fusion</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-yellow-900 mb-3">Common Mistakes to Avoid:</h4>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Using oxygen-cut edges for TIG welding stainless steel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Ignoring dross on bottom edge - causes weld defects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Over-specifying quality when Grade 3 is sufficient</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✗</span>
                <span>Skipping edge inspection before critical welds</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">📋 Quick Reference: Cutting Quality for Welding</h3>
        <div className="grid md:grid-cols-4 gap-3 text-xs">
          <div className="bg-green-50 border border-green-200 rounded p-3 text-center">
            <div className="font-bold text-green-900 mb-1">Grade 1</div>
            <div className="text-green-700">TIG, Laser, E-Beam</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
            <div className="font-bold text-blue-900 mb-1">Grade 2</div>
            <div className="text-blue-700">MIG/MAG, Resistance</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded p-3 text-center">
            <div className="font-bold text-orange-900 mb-1">Grade 3</div>
            <div className="text-orange-700">Stick, Flux-Core</div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded p-3 text-center">
            <div className="font-bold text-red-900 mb-1">Grade 4</div>
            <div className="text-red-700">Requires prep work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

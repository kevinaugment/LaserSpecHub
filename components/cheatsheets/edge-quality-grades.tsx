'use client';

import { useState } from 'react';
import type { QualityGrade } from '@/lib/data/cheatsheets/edge-quality-data';
import { VISUAL_DEFECTS, IMPROVEMENT_METHODS } from '@/lib/data/cheatsheets/edge-quality-data';

interface EdgeQualityGradesProps {
  grades: QualityGrade[];
}

export function EdgeQualityGrades({ grades }: EdgeQualityGradesProps) {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'grades' | 'defects' | 'improvements'>('grades');

  const selectedGradeData = selectedGrade !== null ? grades.find(g => g.gradeNumber === selectedGrade) : null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'major': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'minor': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('grades')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'grades'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Quality Grades
          </button>
          <button
            onClick={() => setActiveTab('defects')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'defects'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Common Defects
          </button>
          <button
            onClick={() => setActiveTab('improvements')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'improvements'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Improvement Methods
          </button>
        </nav>
      </div>

      {/* Quality Grades Tab */}
      {activeTab === 'grades' && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {grades.map((grade) => (
              <div
                key={grade.gradeNumber}
                className={`border-2 rounded-lg p-5 cursor-pointer transition-all ${
                  selectedGrade === grade.gradeNumber
                    ? 'border-primary-600 bg-primary-50 shadow-lg'
                    : 'border-gray-200 hover:border-primary-400 hover:shadow-md'
                }`}
                onClick={() => setSelectedGrade(selectedGrade === grade.gradeNumber ? null : grade.gradeNumber)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{grade.grade}</h3>
                    <p className="text-sm text-gray-600 mt-1">{grade.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-600 text-white text-lg font-bold rounded-full">
                    {grade.gradeNumber}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-white rounded p-2">
                    <div className="text-xs text-gray-600">Perpendicularity</div>
                    <div className="font-medium text-gray-900">{grade.characteristics.perpendicularity}</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="text-xs text-gray-600">Roughness</div>
                    <div className="font-medium text-gray-900">{grade.characteristics.roughnessRa}</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="text-xs text-gray-600">Cost Factor</div>
                    <div className="font-medium text-gray-900">{grade.costFactor}</div>
                  </div>
                  <div className="bg-white rounded p-2">
                    <div className="text-xs text-gray-600">Speed</div>
                    <div className="font-medium text-gray-900 capitalize">{grade.cuttingSpeed}</div>
                  </div>
                </div>

                <div className="text-xs text-gray-600">
                  <strong>Applications:</strong> {grade.applications.slice(0, 2).join(', ')}
                  {grade.applications.length > 2 && ` +${grade.applications.length - 2} more`}
                </div>

                <div className="text-center text-sm text-primary-600 font-medium mt-3 pt-3 border-t border-gray-200">
                  {selectedGrade === grade.gradeNumber ? '▼ Collapse' : '▶ View details'}
                </div>
              </div>
            ))}
          </div>

          {selectedGradeData && (
            <div className="bg-white border-2 border-primary-600 rounded-lg p-6 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedGradeData.grade}</h2>
                  <p className="text-gray-600">{selectedGradeData.description}</p>
                </div>
                <button onClick={() => setSelectedGrade(null)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Characteristics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Perpendicularity:</span>
                      <span className="font-medium">{selectedGradeData.characteristics.perpendicularity}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Roughness Ra:</span>
                      <span className="font-medium">{selectedGradeData.characteristics.roughnessRa}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Dross:</span>
                      <span className="font-medium">{selectedGradeData.characteristics.dross}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">Kerf Width:</span>
                      <span className="font-medium">{selectedGradeData.characteristics.kerfWidth}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-600">HAZ:</span>
                      <span className="font-medium">{selectedGradeData.characteristics.heatAffectedZone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Laser Parameters</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">Power:</span>
                      <span className="font-medium">{selectedGradeData.laserParameters.power}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">Speed:</span>
                      <span className="font-medium">{selectedGradeData.laserParameters.speed}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">Focus:</span>
                      <span className="font-medium">{selectedGradeData.laserParameters.focus}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span className="text-gray-600">Assist Gas:</span>
                      <span className="font-medium">{selectedGradeData.laserParameters.gas}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGradeData.applications.map((app, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 rounded p-3">
                  <strong>Visual Appearance:</strong> {selectedGradeData.visualAppearance}
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <strong>Post-Processing:</strong> {selectedGradeData.postProcessing}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Defects Tab */}
      {activeTab === 'defects' && (
        <div className="space-y-4">
          {VISUAL_DEFECTS.map((defect, i) => (
            <div key={i} className={`border-2 rounded-lg p-5 ${getSeverityColor(defect.severity)}`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold">{defect.defect}</h3>
                <span className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-xs font-bold uppercase">
                  {defect.severity}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Causes:</h4>
                  <ul className="text-sm space-y-1">
                    {defect.cause.map((c, j) => (
                      <li key={j}>• {c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Solutions:</h4>
                  <ul className="text-sm space-y-1">
                    {defect.solution.map((s, j) => (
                      <li key={j}>• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white bg-opacity-50 rounded p-3 text-sm">
                <strong>Impact:</strong> {defect.impact}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Improvements Tab */}
      {activeTab === 'improvements' && (
        <div className="grid md:grid-cols-2 gap-6">
          {IMPROVEMENT_METHODS.map((method, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{method.method}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(method.difficulty)}`}>
                  {method.difficulty}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-gray-700">Quality:</span>
                  <span className="font-medium text-green-700">{method.qualityImprovement}</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="text-gray-700">Cost:</span>
                  <span className="font-medium text-red-700">{method.costIncrease}</span>
                </div>
                <div className="bg-blue-50 rounded p-2">
                  <div className="text-gray-700 mb-1"><strong>Result:</strong></div>
                  <div className="text-gray-900">{method.result}</div>
                </div>
                <div>
                  <div className="text-gray-700 mb-1"><strong>Suitable for:</strong></div>
                  <div className="flex flex-wrap gap-1">
                    {method.suitableFor.map((item, j) => (
                      <span key={j} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



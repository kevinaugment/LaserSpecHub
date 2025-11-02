'use client';

import { useState } from 'react';

interface InspectionStep {
  step: number;
  parameter: string;
  method: string;
  equipment: string;
  acceptanceCriteria: string;
  frequency: string;
}

interface QualityInspectionChecklistProps {
  steps: InspectionStep[];
}

export function QualityInspectionChecklist({ steps }: QualityInspectionChecklistProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepNumber)) {
      newCompleted.delete(stepNumber);
    } else {
      newCompleted.add(stepNumber);
    }
    setCompletedSteps(newCompleted);
  };

  const toggleExpand = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  const completionPercentage = (completedSteps.size / steps.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">Inspection Progress</h3>
          <span className="text-sm font-medium text-gray-600">
            {completedSteps.size} / {steps.length} Steps Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-primary-600 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-xs text-white font-bold"
            style={{ width: `${completionPercentage}%` }}
          >
            {completionPercentage > 10 && `${Math.round(completionPercentage)}%`}
          </div>
        </div>
      </div>

      {/* Checklist Steps */}
      <div className="space-y-3">
        {steps.map((step) => {
          const isCompleted = completedSteps.has(step.step);
          const isExpanded = expandedStep === step.step;
          
          return (
            <div
              key={step.step}
              className={`bg-white border-2 rounded-lg transition-all ${
                isCompleted 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-primary-400'
              }`}
            >
              {/* Step Header */}
              <div className="p-4">
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleStep(step.step)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-green-500 border-green-500'
                        : 'bg-white border-gray-300 hover:border-primary-500'
                    }`}
                  >
                    {isCompleted && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold">
                            {step.step}
                          </span>
                          <h4 className={`text-lg font-bold ${isCompleted ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                            {step.parameter}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Method:</strong> {step.method}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {step.frequency}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            {step.equipment}
                          </span>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleExpand(step.step)}
                        className="text-primary-600 hover:text-primary-900 ml-2"
                      >
                        <svg 
                          className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <h5 className="font-semibold text-gray-900 mb-1">Equipment Required:</h5>
                            <p className="text-gray-700">{step.equipment}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h5 className="font-semibold text-green-900 mb-1">Acceptance Criteria:</h5>
                            <p className="text-green-800">{step.acceptanceCriteria}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setCompletedSteps(new Set(steps.map(s => s.step)))}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Mark All Complete
        </button>
        <button
          onClick={() => setCompletedSteps(new Set())}
          className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Reset Checklist
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          Print
        </button>
      </div>

      {/* Inspection Guidelines */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">📋 Inspection Guidelines</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Inspection Sequence:</h4>
            <ol className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start">
                <span className="mr-2 font-bold">1.</span>
                <span><strong>Visual first:</strong> Quick check for obvious defects before detailed measurements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">2.</span>
                <span><strong>Dross check:</strong> Easy to verify, determines if part needs rework</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">3.</span>
                <span><strong>Dimensional:</strong> Verify perpendicularity and dimensions meet tolerances</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">4.</span>
                <span><strong>Roughness:</strong> Sample-based, not every part unless Grade 1 required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">5.</span>
                <span><strong>Metallurgical:</strong> Only for qualification or critical aerospace/medical parts</span>
              </li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Best Practices:</h4>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>First article inspection:</strong> Complete all steps for first part of new setup</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Statistical sampling:</strong> Use sampling plans for production runs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Document results:</strong> Record measurements for traceability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Calibrated equipment:</strong> Ensure all measurement tools are calibrated</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Trained inspectors:</strong> Personnel should understand acceptance criteria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Equipment Reference */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🔧 Inspection Equipment Reference</h3>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="font-semibold text-gray-900 mb-2">Basic Tools:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• 10x magnifying glass</li>
              <li>• Digital caliper (±0.01mm)</li>
              <li>• Engineer's square</li>
              <li>• Dross gauge/scraper</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="font-semibold text-gray-900 mb-2">Precision Tools:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Dial indicator</li>
              <li>• Surface profilometer</li>
              <li>• Optical microscope</li>
              <li>• CMM (Coordinate Measuring Machine)</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="font-semibold text-gray-900 mb-2">Lab Equipment:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Metallographic microscope</li>
              <li>• Polishing/etching equipment</li>
              <li>• Hardness tester</li>
              <li>• Optical comparator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

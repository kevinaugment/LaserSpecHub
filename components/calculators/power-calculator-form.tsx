'use client';

import { useState } from 'react';
import {
  MATERIALS,
  calculatePower,
  validateInput,
  getEquipmentRecommendations,
  formatPower,
  type PowerCalculationInput,
  type PowerCalculationResult,
  type CuttingQuality,
} from '@/lib/calculators/power-calculator';

const QUALITY_OPTIONS: { value: CuttingQuality; label: string; description: string }[] = [
  { value: 'rough', label: 'Rough Cut', description: 'Fast cutting, lower quality edge' },
  { value: 'standard', label: 'Standard', description: 'Balanced speed and quality' },
  { value: 'precision', label: 'Precision', description: 'High quality, slower speed' },
  { value: 'mirror', label: 'Mirror Finish', description: 'Highest quality, slowest' },
];

export function PowerCalculatorForm() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<Partial<PowerCalculationInput>>({
    unit: 'metric',
    quality: 'standard',
  });
  const [result, setResult] = useState<PowerCalculationResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleCalculate = () => {
    const validation = validateInput(input);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors([]);
    const calculationResult = calculatePower(input as PowerCalculationInput);
    setResult(calculationResult);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setInput({ unit: 'metric', quality: 'standard' });
    setResult(null);
    setErrors([]);
  };

  const metalMaterials = Object.values(MATERIALS).filter((m) => m.category === 'metal');
  const nonMetalMaterials = Object.values(MATERIALS).filter((m) => m.category === 'non-metal');

  return (
    <div className="space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                s === step
                  ? 'bg-primary-600 text-white'
                  : s < step
                  ? 'bg-primary-200 text-primary-700'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`w-16 h-1 mx-2 ${
                  s < step ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Material Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Select Material</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Metal Materials</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {metalMaterials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setInput({ ...input, materialId: material.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      input.materialId === material.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{material.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Density: {material.density} g/cm³
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Non-Metal Materials</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nonMetalMaterials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setInput({ ...input, materialId: material.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      input.materialId === material.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{material.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Density: {material.density} g/cm³
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!input.materialId}
            className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next: Enter Parameters
          </button>
        </div>
      )}

      {/* Step 2: Parameters */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Cutting Parameters</h2>
            
            <div className="space-y-4">
              {/* Unit Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit System
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setInput({ ...input, unit: 'metric' })}
                    className={`px-6 py-2 rounded-lg border-2 transition-colors ${
                      input.unit === 'metric'
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    Metric (mm, m/min)
                  </button>
                  <button
                    onClick={() => setInput({ ...input, unit: 'imperial' })}
                    className={`px-6 py-2 rounded-lg border-2 transition-colors ${
                      input.unit === 'imperial'
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    Imperial (in, ft/min)
                  </button>
                </div>
              </div>

              {/* Thickness */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Thickness {input.unit === 'metric' ? '(mm)' : '(inches)'}
                </label>
                <input
                  type="number"
                  value={input.thickness || ''}
                  onChange={(e) =>
                    setInput({ ...input, thickness: parseFloat(e.target.value) })
                  }
                  className="input-field"
                  placeholder={input.unit === 'metric' ? 'e.g., 10' : 'e.g., 0.4'}
                  step="0.1"
                  min="0"
                />
              </div>

              {/* Cutting Speed */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Cutting Speed {input.unit === 'metric' ? '(m/min)' : '(ft/min)'}
                </label>
                <input
                  type="number"
                  value={input.cuttingSpeed || ''}
                  onChange={(e) =>
                    setInput({ ...input, cuttingSpeed: parseFloat(e.target.value) })
                  }
                  className="input-field"
                  placeholder={input.unit === 'metric' ? 'e.g., 3.0' : 'e.g., 10'}
                  step="0.1"
                  min="0"
                />
              </div>

              {/* Quality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cutting Quality
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {QUALITY_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setInput({ ...input, quality: option.value })}
                      className={`p-3 border-2 rounded-lg text-left transition-all ${
                        input.quality === option.value
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-medium">{option.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">Please correct the following:</h3>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-4">
            <button onClick={() => setStep(1)} className="btn-secondary flex-1 py-3">
              Back
            </button>
            <button onClick={handleCalculate} className="btn-primary flex-1 py-3">
              Calculate Power
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && result && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Calculation Results</h2>
            
            {/* Power Requirements */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Laser Power</h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-700 mb-2">
                  {formatPower(result.recommendedPower)}
                </div>
                <div className="text-sm text-gray-600">
                  Range: {formatPower(result.minPower)} - {formatPower(result.maxPower)}
                </div>
              </div>
            </div>

            {/* Laser Type */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Recommended Laser Type</h3>
              <div className="flex flex-wrap gap-2">
                {result.laserType.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                  >
                    {type.toUpperCase()} Laser
                  </span>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">Recommendations</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">Warnings</h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  {result.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Equipment Recommendations */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Suitable Equipment</h3>
              <div className="space-y-3">
                {getEquipmentRecommendations(
                  result,
                  (input.materialId && MATERIALS[input.materialId]?.category) || 'metal'
                ).map((eq) => (
                  <div
                    key={eq.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium">
                        {eq.brand} {eq.model}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formatPower(eq.power)} {eq.laserType} Laser
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary-600">
                        {eq.matchScore}% Match
                      </div>
                      <button className="text-sm text-primary-600 hover:underline">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button onClick={handleReset} className="btn-secondary flex-1 py-3">
              New Calculation
            </button>
            <button 
              onClick={() => {
                import('@/lib/pdf/power-calculator-export').then(({ exportPowerCalculationPDF }) => {
                  exportPowerCalculationPDF({
                    input: input as PowerCalculationInput,
                    result: result,
                    timestamp: new Date(),
                  });
                });
              }}
              className="btn-primary flex-1 py-3"
            >
              Export PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


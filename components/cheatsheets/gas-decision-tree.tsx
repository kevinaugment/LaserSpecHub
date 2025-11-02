'use client';

import { useState } from 'react';

interface GasRecommendation {
  gas: string;
  reason: string;
  alternatives: { gas: string; note: string }[];
  warnings?: string[];
}

export function GasDecisionTree() {
  const [step, setStep] = useState(1);
  const [material, setMaterial] = useState('');
  const [thickness, setThickness] = useState<number>(3);
  const [edgeQuality, setEdgeQuality] = useState('');
  const [budgetPriority, setBudgetPriority] = useState('');
  const [recommendation, setRecommendation] = useState<GasRecommendation | null>(null);

  const materials = [
    'Carbon Steel',
    'Stainless Steel',
    'Aluminum',
    'Titanium',
    'Copper/Brass',
    'Non-Metals'
  ];

  const edgeQualities = [
    { value: 'oxide-free', label: 'Oxide-Free (Clean Edge)', description: 'For welding, painting, or aesthetic parts' },
    { value: 'acceptable-oxidation', label: 'Acceptable Oxidation', description: 'For structural or painted parts' },
    { value: 'no-preference', label: 'No Preference', description: 'Edge quality not critical' }
  ];

  const budgetPriorities = [
    { value: 'low-cost', label: 'Minimum Cost', description: 'Lowest operating cost is priority' },
    { value: 'balanced', label: 'Balanced', description: 'Balance between cost and quality' },
    { value: 'best-quality', label: 'Best Quality', description: 'Quality is priority over cost' }
  ];

  const getRecommendation = (): GasRecommendation => {
    // Carbon Steel Logic
    if (material === 'Carbon Steel') {
      if (edgeQuality === 'oxide-free') {
        return {
          gas: 'Nitrogen',
          reason: 'Nitrogen provides oxide-free edges on carbon steel, essential for welding preparation or aesthetic requirements.',
          alternatives: [
            { gas: 'Compressed Air', note: 'Cost-effective for thin materials (≤3mm) with slightly lower edge quality' }
          ]
        };
      } else if (budgetPriority === 'low-cost' || edgeQuality === 'no-preference') {
        if (thickness <= 3) {
          return {
            gas: 'Compressed Air',
            reason: 'Compressed air offers the lowest cost for thin carbon steel with acceptable edge quality.',
            alternatives: [
              { gas: 'Oxygen', note: 'Faster cutting speed, oxidized edge' },
              { gas: 'Nitrogen', note: 'Clean edge but 3-5x higher cost' }
            ]
          };
        } else {
          return {
            gas: 'Oxygen',
            reason: 'Oxygen provides maximum cutting speed and lowest cost for thicker carbon steel through exothermic reaction.',
            alternatives: [
              { gas: 'Nitrogen', note: 'Clean edge but significantly slower and more expensive' }
            ]
          };
        }
      } else {
        return {
          gas: 'Oxygen',
          reason: 'Oxygen offers the best balance of speed and cost for carbon steel when edge oxidation is acceptable.',
          alternatives: [
            { gas: 'Nitrogen', note: 'Choose for oxide-free edges at higher cost' }
          ]
        };
      }
    }

    // Stainless Steel Logic
    if (material === 'Stainless Steel') {
      if (budgetPriority === 'low-cost' && thickness <= 2) {
        return {
          gas: 'Compressed Air',
          reason: 'Compressed air is cost-effective for thin stainless steel (≤2mm) where slight edge discoloration is acceptable.',
          alternatives: [
            { gas: 'Nitrogen', note: 'Best quality with oxide-free edges, but 5-10x higher cost' }
          ],
          warnings: ['May show slight discoloration on edges', 'Not suitable for critical applications']
        };
      } else {
        return {
          gas: 'Nitrogen',
          reason: 'Nitrogen is the industry standard for stainless steel, providing bright oxide-free edges. High pressure (12-18 bar) required.',
          alternatives: [
            { gas: 'Compressed Air', note: 'Only for thin materials (≤2mm) and non-critical applications' }
          ]
        };
      }
    }

    // Aluminum Logic
    if (material === 'Aluminum') {
      if (budgetPriority === 'low-cost' && thickness <= 3) {
        return {
          gas: 'Compressed Air',
          reason: 'Compressed air is economical for thin aluminum with acceptable edge quality.',
          alternatives: [
            { gas: 'Nitrogen', note: 'Best for clean edges and anodizing preparation' }
          ]
        };
      } else {
        return {
          gas: 'Nitrogen',
          reason: 'Nitrogen prevents oxidation and provides smooth, clean edges ideal for aluminum. Essential for anodizing prep.',
          alternatives: [
            { gas: 'Compressed Air', note: 'Budget option for non-critical thin parts (≤3mm)' }
          ]
        };
      }
    }

    // Titanium Logic
    if (material === 'Titanium') {
      return {
        gas: 'Argon',
        reason: 'Argon is the ONLY recommended gas for titanium. Prevents oxidation and combustion risk with reactive titanium.',
        alternatives: [],
        warnings: [
          'Do not use Oxygen - extreme fire hazard',
          'Nitrogen may cause oxidation on titanium',
          'Ultra-high purity Argon (99.999%) required'
        ]
      };
    }

    // Copper/Brass Logic
    if (material === 'Copper/Brass') {
      if (budgetPriority === 'best-quality') {
        return {
          gas: 'Nitrogen',
          reason: 'Nitrogen provides bright, tarnish-free edges essential for decorative copper/brass applications.',
          alternatives: [
            { gas: 'Argon', note: 'Perfect finish but very expensive' }
          ]
        };
      } else {
        return {
          gas: 'Nitrogen',
          reason: 'Nitrogen is the standard choice for copper/brass to prevent tarnishing. High pressure (15-18 bar) required.',
          alternatives: [
            { gas: 'Compressed Air', note: 'Budget option but expect tarnishing' }
          ]
        };
      }
    }

    // Non-Metals Logic
    if (material === 'Non-Metals') {
      return {
        gas: 'Compressed Air',
        reason: 'Compressed air is ideal for non-metals (acrylic, wood, plastics). Low pressure, removes smoke, prevents charring.',
        alternatives: [],
        warnings: ['Ensure oil-free compressor', 'Low pressure (1-3 bar) sufficient']
      };
    }

    // Default fallback
    return {
      gas: 'Nitrogen',
      reason: 'Nitrogen is a safe default choice for most materials.',
      alternatives: []
    };
  };

  const handleNext = () => {
    if (step === 1 && material) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3 && edgeQuality) setStep(4);
    else if (step === 4 && budgetPriority) {
      const result = getRecommendation();
      setRecommendation(result);
      setStep(5);
    }
  };

  const handleReset = () => {
    setStep(1);
    setMaterial('');
    setThickness(3);
    setEdgeQuality('');
    setBudgetPriority('');
    setRecommendation(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Gas Selection Wizard</h3>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  s < step
                    ? 'bg-green-500 text-white'
                    : s === step
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {s < step ? '✓' : s}
              </div>
              {s < 5 && (
                <div
                  className={`h-1 w-12 md:w-24 ${
                    s < step ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Material</span>
          <span>Thickness</span>
          <span>Edge Quality</span>
          <span>Budget</span>
          <span>Result</span>
        </div>
      </div>

      {/* Step 1: Material Selection */}
      {step === 1 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Step 1: Select Material Type</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {materials.map((mat) => (
              <button
                key={mat}
                onClick={() => setMaterial(mat)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  material === mat
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="font-medium text-gray-900">{mat}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Thickness Input */}
      {step === 2 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Step 2: Material Thickness</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thickness: <span className="text-primary-600 font-bold">{thickness} mm</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="25"
                step="0.5"
                value={thickness}
                onChange={(e) => setThickness(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5mm</span>
                <span>12.5mm</span>
                <span>25mm</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
              <strong>Material:</strong> {material} <br />
              <strong>Thickness:</strong> {thickness} mm
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Edge Quality */}
      {step === 3 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Step 3: Edge Quality Requirements</h4>
          <div className="space-y-3">
            {edgeQualities.map((eq) => (
              <button
                key={eq.value}
                onClick={() => setEdgeQuality(eq.value)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  edgeQuality === eq.value
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="font-medium text-gray-900 mb-1">{eq.label}</div>
                <div className="text-sm text-gray-600">{eq.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Budget Priority */}
      {step === 4 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Step 4: Budget Priority</h4>
          <div className="space-y-3">
            {budgetPriorities.map((bp) => (
              <button
                key={bp.value}
                onClick={() => setBudgetPriority(bp.value)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  budgetPriority === bp.value
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="font-medium text-gray-900 mb-1">{bp.label}</div>
                <div className="text-sm text-gray-600">{bp.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Recommendation */}
      {step === 5 && recommendation && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Recommended Gas:</h4>
            <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg text-3xl font-bold shadow-lg">
              {recommendation.gas}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h5 className="font-semibold text-blue-900 mb-2">Why {recommendation.gas}?</h5>
            <p className="text-blue-800 text-sm">{recommendation.reason}</p>
          </div>

          {recommendation.warnings && recommendation.warnings.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h5 className="font-semibold text-red-900 mb-2">⚠️ Important Warnings</h5>
              <ul className="text-red-800 text-sm space-y-1">
                {recommendation.warnings.map((warning, idx) => (
                  <li key={idx}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendation.alternatives.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h5 className="font-semibold text-gray-900 mb-3">Alternative Options</h5>
              <div className="space-y-2">
                {recommendation.alternatives.map((alt, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="font-medium text-gray-900 min-w-[100px]">{alt.gas}:</div>
                    <div className="text-gray-700 text-sm">{alt.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
            <strong>Your Selection:</strong>
            <div className="mt-2 space-y-1">
              <div>• Material: {material}</div>
              <div>• Thickness: {thickness} mm</div>
              <div>
                • Edge Quality:{' '}
                {edgeQualities.find((eq) => eq.value === edgeQuality)?.label}
              </div>
              <div>
                • Budget Priority:{' '}
                {budgetPriorities.find((bp) => bp.value === budgetPriority)?.label}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => (step === 1 ? null : step === 5 ? handleReset() : setStep(step - 1))}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            step === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={step === 1}
        >
          {step === 5 ? 'Start Over' : 'Back'}
        </button>

        {step < 5 && (
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && !material) ||
              (step === 3 && !edgeQuality) ||
              (step === 4 && !budgetPriority)
            }
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              (step === 1 && !material) ||
              (step === 3 && !edgeQuality) ||
              (step === 4 && !budgetPriority)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {step === 4 ? 'Get Recommendation' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}


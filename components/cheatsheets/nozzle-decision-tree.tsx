'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NOZZLE_RECOMMENDATIONS, type NozzleRecommendation } from '@/lib/data/cheatsheets/nozzle-selection-data';

type Material = 'carbon_steel' | 'stainless_steel' | 'aluminum' | 'copper' | '';
type ThicknessRange = '0.5-3mm' | '3-8mm' | '8-15mm' | '15-25mm' | '25mm+' | '';
type AssistGas = 'Oxygen' | 'Nitrogen' | 'Air' | '';

export function NozzleDecisionTree() {
  const [step, setStep] = useState(1);
  const [material, setMaterial] = useState<Material>('');
  const [thickness, setThickness] = useState<ThicknessRange>('');
  const [gas, setGas] = useState<AssistGas>('');
  const [recommendation, setRecommendation] = useState<NozzleRecommendation | null>(null);

  const handleMaterialSelect = (selectedMaterial: Material) => {
    setMaterial(selectedMaterial);
    setThickness('');
    setGas('');
    setRecommendation(null);
    setStep(2);
  };

  const handleThicknessSelect = (selectedThickness: ThicknessRange) => {
    setThickness(selectedThickness);
    setGas('');
    setRecommendation(null);
    setStep(3);
  };

  const handleGasSelect = (selectedGas: AssistGas) => {
    setGas(selectedGas);
    
    // Find recommendation
    const found = NOZZLE_RECOMMENDATIONS.find(
      (rec) =>
        rec.material === material &&
        rec.thicknessRange === selectedThickness &&
        rec.assistGas === selectedGas
    );

    if (found) {
      setRecommendation(found);
      setStep(4);
    } else {
      // Fallback: find closest match
      const fallback = NOZZLE_RECOMMENDATIONS.find(
        (rec) => rec.material === material && rec.thicknessRange === selectedThickness
      );
      setRecommendation(fallback || null);
      setStep(4);
    }
  };

  const reset = () => {
    setStep(1);
    setMaterial('');
    setThickness('');
    setGas('');
    setRecommendation(null);
  };

  const materialOptions = [
    { value: 'carbon_steel', label: 'Carbon Steel', icon: '🔩' },
    { value: 'stainless_steel', label: 'Stainless Steel', icon: '✨' },
    { value: 'aluminum', label: 'Aluminum', icon: '⚡' },
    { value: 'copper', label: 'Copper/Brass', icon: '🟠' },
  ];

  const thicknessOptions = [
    { value: '0.5-3mm', label: '0.5 - 3 mm', description: 'Thin sheet' },
    { value: '3-8mm', label: '3 - 8 mm', description: 'Medium thickness' },
    { value: '8-15mm', label: '8 - 15 mm', description: 'Medium-thick plate' },
    { value: '15-25mm', label: '15 - 25 mm', description: 'Thick plate' },
    { value: '25mm+', label: '25 mm+', description: 'Ultra-thick plate' },
  ];

  const gasOptions = [
    { value: 'Oxygen', label: 'Oxygen (O₂)', description: 'Fast cutting, oxidized edge' },
    { value: 'Nitrogen', label: 'Nitrogen (N₂)', description: 'Clean edge, no oxidation' },
    { value: 'Air', label: 'Compressed Air', description: 'Economical option' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Nozzle Selection Guide</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Answer a few questions to get personalized nozzle recommendations
        </p>
      </CardHeader>
      <CardContent>
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Material</span>
            <span>Thickness</span>
            <span>Gas</span>
            <span>Result</span>
          </div>
        </div>

        {/* Step 1: Material Selection */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Step 1: Select Material Type</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {materialOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleMaterialSelect(option.value as Material)}
                  className="p-4 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="font-semibold">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Thickness Selection */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Step 2: Select Material Thickness
            </h3>
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-sm">
              <strong>Selected Material:</strong> {materialOptions.find((m) => m.value === material)?.label}
            </div>
            <div className="space-y-2">
              {thicknessOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleThicknessSelect(option.value as ThicknessRange)}
                  className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              ← Back to Material Selection
            </button>
          </div>
        )}

        {/* Step 3: Gas Selection */}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Step 3: Select Assist Gas</h3>
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-sm space-y-1">
              <div>
                <strong>Material:</strong> {materialOptions.find((m) => m.value === material)?.label}
              </div>
              <div>
                <strong>Thickness:</strong> {thickness}
              </div>
            </div>
            <div className="space-y-2">
              {gasOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleGasSelect(option.value as AssistGas)}
                  className="w-full p-4 border-2 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              ← Back to Thickness Selection
            </button>
          </div>
        )}

        {/* Step 4: Recommendation */}
        {step === 4 && recommendation && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Recommended Nozzle Configuration</h3>
            
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="grid gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>{' '}
                  <strong>{recommendation.materialLabel}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground">Thickness:</span>{' '}
                  <strong>{recommendation.thicknessRange}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground">Assist Gas:</span>{' '}
                  <strong>{recommendation.assistGas}</strong>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Nozzle Type</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {recommendation.nozzleTypeLabel}
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Nozzle Diameter</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {recommendation.diameterMm} mm
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Standoff Distance</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {recommendation.standoffMm} mm
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Gas Pressure</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {recommendation.pressureBar} bar
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
              <div className="text-sm text-muted-foreground mb-1">Gas Flow Rate</div>
              <div className="font-semibold">{recommendation.flowRateLMin} L/min</div>
            </div>

            {recommendation.tips.length > 0 && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="font-semibold mb-2 text-sm">💡 Tips & Recommendations</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {recommendation.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={reset}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Over
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {step === 4 && !recommendation && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No specific recommendation found for this combination.
            </p>
            <button
              onClick={reset}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


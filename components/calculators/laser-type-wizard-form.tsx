'use client';

import { useState } from 'react';
import {
  WIZARD_QUESTIONS,
  calculateWizardResult,
  validateWizardAnswers,
  type WizardAnswers,
  type WizardResult,
} from '@/lib/calculators/laser-type-wizard';

export function LaserTypeWizardForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>({});
  const [result, setResult] = useState<WizardResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const currentQuestion = WIZARD_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / WIZARD_QUESTIONS.length) * 100;

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    
    if (!answers[currentQuestion.id] || 
        (Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id] as string[]).length === 0)) {
      setErrors(['Please select at least one option to continue']);
      return;
    }
    setErrors([]);
    
    if (currentStep < WIZARD_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    setErrors([]);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    const validation = validateWizardAnswers(answers);
    if (!validation.valid) {
      setErrors(validation.missingQuestions);
      return;
    }

    const wizardResult = calculateWizardResult(answers);
    setResult(wizardResult);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setErrors([]);
  };

  if (result) {
    const [recommended, ...alternatives] = result.scores;
    
    if (!recommended) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Laser Type Recommendation</h2>
          <button onClick={handleReset} className="btn-secondary">
            Start Over
          </button>
        </div>

        {/* Recommended Type */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 text-white rounded-full mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-primary-900 mb-2">
              {recommended.type.toUpperCase()} Laser
            </h3>
            <div className="text-lg text-primary-700 mb-4">{result.summary}</div>
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full">
              <span className="text-sm font-medium text-gray-600 mr-2">Confidence:</span>
              <span className="text-lg font-bold text-primary-600">{recommended.percentage}%</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Why This Recommendation?</h4>
            <p className="text-gray-700 mb-4">{result.detailedAnalysis}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-900 mb-2">Advantages</h5>
                <ul className="space-y-1 text-sm text-green-800">
                  {recommended.pros.slice(0, 4).map((pro, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-900 mb-2">Considerations</h5>
                <ul className="space-y-1 text-sm text-orange-800">
                  {recommended.cons.map((con, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <div className="text-gray-600 mb-1">Investment Range</div>
              <div className="text-lg font-semibold text-gray-900">{recommended.costRange}</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-gray-600 mb-1">Maintenance Level</div>
              <div className="text-lg font-semibold text-gray-900 capitalize">{recommended.maintenanceLevel}</div>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        {alternatives.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Alternative Options</h3>
            <div className="space-y-4">
              {alternatives.map((alt) => (
                <div key={alt.type} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{alt.type.toUpperCase()} Laser</h4>
                      <p className="text-sm text-gray-600">Match Score: {alt.percentage}%</p>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all"
                        style={{ width: `${alt.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Cost: </span>
                      <span className="font-medium">{alt.costRange}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Maintenance: </span>
                      <span className="font-medium capitalize">{alt.maintenanceLevel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-4">Recommended Next Steps</h3>
          <ol className="space-y-2 text-sm text-blue-800">
            {result.nextSteps.map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-800 rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Applications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Typical Applications</h3>
          <div className="flex flex-wrap gap-2">
            {recommended.applications.map((app, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentStep + 1} of {WIZARD_QUESTIONS.length}
          </span>
          <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      {currentQuestion && (
      <>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {currentQuestion.text}
        </h2>
        {currentQuestion.description && (
          <p className="text-gray-600 mb-6">{currentQuestion.description}</p>
        )}

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.type === 'multiple' ? (
            // Multiple choice
            currentQuestion.options.map((option) => {
              const selected = (answers[currentQuestion.id] as string[] || []).includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => {
                    const current = (answers[currentQuestion.id] as string[]) || [];
                    const updated = selected
                      ? current.filter((id) => id !== option.id)
                      : [...current, option.id];
                    handleAnswer(currentQuestion.id, updated);
                  }}
                  className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                    selected
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-5 h-5 rounded border-2 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                        selected ? 'bg-primary-600 border-primary-600' : 'border-gray-300'
                      }`}
                    >
                      {selected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
          ) : (
            // Single choice
            currentQuestion.options.map((option) => {
              const selected = answers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                    selected
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                        selected ? 'border-primary-600' : 'border-gray-300'
                      }`}
                    >
                      {selected && (
                        <div className="w-3 h-3 rounded-full bg-primary-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </>
      )}
      </div>

      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <div className="flex space-x-4">
        {currentStep > 0 && (
          <button onClick={handleBack} className="btn-secondary flex-1 py-3">
            ← Back
          </button>
        )}
        <button onClick={handleNext} className="btn-primary flex-1 py-3">
          {currentStep === WIZARD_QUESTIONS.length - 1 ? 'Get Recommendation' : 'Next →'}
        </button>
      </div>
    </div>
  );
}




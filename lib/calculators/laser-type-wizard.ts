/**
 * Laser Type Selection Wizard Logic
 * Guides users through questionnaire to recommend optimal laser type
 */

export type LaserType = 'fiber' | 'co2' | 'solid';

export interface Question {
  id: string;
  text: string;
  description?: string;
  type: 'single' | 'multiple' | 'range';
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  scores: Partial<Record<LaserType, number>>;
}

export interface WizardAnswers {
  [questionId: string]: string | string[] | number;
}

export interface LaserTypeScore {
  type: LaserType;
  score: number;
  percentage: number;
  pros: string[];
  cons: string[];
  applications: string[];
  costRange: string;
  maintenanceLevel: 'low' | 'medium' | 'high';
}

export interface WizardResult {
  recommendedType: LaserType;
  scores: LaserTypeScore[];
  summary: string;
  detailedAnalysis: string;
  nextSteps: string[];
}

export const WIZARD_QUESTIONS: Question[] = [
  {
    id: 'material',
    text: 'What materials will you primarily cut?',
    description: 'Select all materials you plan to work with',
    type: 'multiple',
    options: [
      {
        id: 'steel',
        label: 'Steel / Mild Steel',
        scores: { fiber: 10, solid: 8, co2: 3 },
      },
      {
        id: 'stainless',
        label: 'Stainless Steel',
        scores: { fiber: 10, solid: 8, co2: 2 },
      },
      {
        id: 'aluminum',
        label: 'Aluminum',
        scores: { fiber: 9, solid: 7, co2: 2 },
      },
      {
        id: 'copper',
        label: 'Copper / Brass',
        scores: { fiber: 8, solid: 6, co2: 1 },
      },
      {
        id: 'titanium',
        label: 'Titanium',
        scores: { fiber: 9, solid: 8, co2: 1 },
      },
      {
        id: 'acrylic',
        label: 'Acrylic / PMMA',
        scores: { fiber: 1, solid: 2, co2: 10 },
      },
      {
        id: 'wood',
        label: 'Wood / MDF',
        scores: { fiber: 0, solid: 1, co2: 10 },
      },
      {
        id: 'plastic',
        label: 'Plastic / Polymer',
        scores: { fiber: 1, solid: 2, co2: 9 },
      },
      {
        id: 'leather',
        label: 'Leather / Fabric',
        scores: { fiber: 0, solid: 1, co2: 10 },
      },
    ],
  },
  {
    id: 'thickness',
    text: 'What is the typical material thickness range?',
    description: 'For metal materials',
    type: 'single',
    options: [
      {
        id: 'thin',
        label: '< 3mm (Thin sheet)',
        scores: { fiber: 9, solid: 7, co2: 8 },
      },
      {
        id: 'medium',
        label: '3-10mm (Medium)',
        scores: { fiber: 10, solid: 8, co2: 5 },
      },
      {
        id: 'thick',
        label: '10-25mm (Thick)',
        scores: { fiber: 8, solid: 10, co2: 3 },
      },
      {
        id: 'very-thick',
        label: '> 25mm (Very thick)',
        scores: { fiber: 6, solid: 10, co2: 1 },
      },
      {
        id: 'not-applicable',
        label: 'N/A (Non-metal only)',
        scores: { fiber: 0, solid: 0, co2: 10 },
      },
    ],
  },
  {
    id: 'volume',
    text: 'What is your expected production volume?',
    description: 'Average daily/weekly cutting',
    type: 'single',
    options: [
      {
        id: 'low',
        label: 'Low (Prototyping, occasional use)',
        scores: { fiber: 6, solid: 7, co2: 9 },
      },
      {
        id: 'medium',
        label: 'Medium (Regular production runs)',
        scores: { fiber: 9, solid: 8, co2: 7 },
      },
      {
        id: 'high',
        label: 'High (Continuous production)',
        scores: { fiber: 10, solid: 9, co2: 6 },
      },
      {
        id: 'industrial',
        label: 'Industrial (24/7 operation)',
        scores: { fiber: 10, solid: 10, co2: 5 },
      },
    ],
  },
  {
    id: 'budget',
    text: 'What is your equipment budget range?',
    description: 'Initial investment capacity',
    type: 'single',
    options: [
      {
        id: 'low',
        label: '< $30,000',
        scores: { fiber: 4, solid: 3, co2: 10 },
      },
      {
        id: 'medium',
        label: '$30,000 - $75,000',
        scores: { fiber: 8, solid: 6, co2: 9 },
      },
      {
        id: 'high',
        label: '$75,000 - $150,000',
        scores: { fiber: 10, solid: 8, co2: 7 },
      },
      {
        id: 'premium',
        label: '> $150,000',
        scores: { fiber: 10, solid: 10, co2: 6 },
      },
    ],
  },
  {
    id: 'precision',
    text: 'What level of cutting precision do you require?',
    type: 'single',
    options: [
      {
        id: 'standard',
        label: 'Standard (±0.1mm)',
        scores: { fiber: 8, solid: 8, co2: 9 },
      },
      {
        id: 'high',
        label: 'High precision (±0.05mm)',
        scores: { fiber: 10, solid: 9, co2: 8 },
      },
      {
        id: 'ultra',
        label: 'Ultra-precise (±0.02mm)',
        scores: { fiber: 10, solid: 10, co2: 7 },
      },
    ],
  },
  {
    id: 'speed',
    text: 'How important is cutting speed?',
    type: 'single',
    options: [
      {
        id: 'not-critical',
        label: 'Not critical - Quality is priority',
        scores: { fiber: 7, solid: 8, co2: 8 },
      },
      {
        id: 'balanced',
        label: 'Balanced - Both speed and quality',
        scores: { fiber: 9, solid: 8, co2: 7 },
      },
      {
        id: 'very-important',
        label: 'Very important - High throughput needed',
        scores: { fiber: 10, solid: 9, co2: 6 },
      },
    ],
  },
  {
    id: 'maintenance',
    text: 'What is your preference for maintenance?',
    description: 'Consider technical capabilities and downtime tolerance',
    type: 'single',
    options: [
      {
        id: 'minimal',
        label: 'Minimal maintenance preferred',
        scores: { fiber: 10, solid: 9, co2: 6 },
      },
      {
        id: 'moderate',
        label: 'Moderate maintenance acceptable',
        scores: { fiber: 9, solid: 8, co2: 8 },
      },
      {
        id: 'high',
        label: 'Can handle complex maintenance',
        scores: { fiber: 8, solid: 7, co2: 9 },
      },
    ],
  },
];

const LASER_TYPE_INFO: Record<LaserType, Omit<LaserTypeScore, 'score' | 'percentage'>> = {
  fiber: {
    type: 'fiber',
    pros: [
      'Excellent for metals - high efficiency',
      'Fast cutting speeds',
      'Low maintenance (no mirrors to align)',
      'Long diode life (100,000+ hours)',
      'Compact design',
      'Lower operating costs',
    ],
    cons: [
      'Higher initial investment',
      'Limited for non-metals',
      'Cannot cut thick non-metals effectively',
    ],
    applications: [
      'Sheet metal fabrication',
      'Automotive parts',
      'Industrial machinery',
      'Metal signage',
      'Precision metal components',
    ],
    costRange: '$40,000 - $150,000+',
    maintenanceLevel: 'low',
  },
  co2: {
    type: 'co2',
    pros: [
      'Excellent for non-metals',
      'Lower initial cost',
      'Versatile - cuts wide material range',
      'Mature technology',
      'Good for thick non-metals',
      'Easier to operate',
    ],
    cons: [
      'Higher maintenance (mirrors, tubes)',
      'Lower efficiency on metals',
      'Shorter tube life (2,000-8,000 hours)',
      'Larger footprint',
      'Higher operating costs',
    ],
    applications: [
      'Acrylic fabrication',
      'Wood cutting/engraving',
      'Signage and displays',
      'Packaging',
      'Textile and leather',
    ],
    costRange: '$15,000 - $80,000',
    maintenanceLevel: 'medium',
  },
  solid: {
    type: 'solid',
    pros: [
      'High power capability',
      'Excellent beam quality',
      'Good for thick metals',
      'Versatile across materials',
      'Precise cutting',
    ],
    cons: [
      'Higher cost',
      'More complex maintenance',
      'Larger power consumption',
      'Less common (support)',
    ],
    applications: [
      'Heavy industrial cutting',
      'Thick metal processing',
      'Aerospace components',
      'High-power applications',
      'Research and development',
    ],
    costRange: '$80,000 - $200,000+',
    maintenanceLevel: 'high',
  },
};

export function calculateWizardResult(answers: WizardAnswers): WizardResult {
  const scores: Record<LaserType, number> = {
    fiber: 0,
    co2: 0,
    solid: 0,
  };

  let _totalWeight = 0;

  // Calculate scores based on answers
  WIZARD_QUESTIONS.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;

    const answerIds = Array.isArray(answer) ? answer : [answer];

    answerIds.forEach((answerId) => {
      const option = question.options.find((opt) => opt.id === answerId);
      if (!option) return;

      const weight = question.type === 'multiple' ? 0.8 : 1.0;
      _totalWeight += weight;

      (Object.keys(option.scores) as LaserType[]).forEach((type) => {
        scores[type] += (option.scores[type] || 0) * weight;
      });
    });
  });

  // Normalize scores to percentages
  const maxScore = Math.max(...Object.values(scores));
  const laserScores: LaserTypeScore[] = (Object.keys(scores) as LaserType[]).map(
    (type) => ({
      ...LASER_TYPE_INFO[type],
      score: Math.round(scores[type]),
      percentage: Math.round((scores[type] / maxScore) * 100),
    })
  );

  // Sort by score
  laserScores.sort((a, b) => b.score - a.score);

  const recommended = laserScores[0];
  if (!recommended) {
    throw new Error('No laser type recommendations generated');
  }
  const recommendedType = recommended.type;

  // Generate summary
  const summary = `Based on your requirements, we recommend a ${recommendedType.toUpperCase()} laser with a confidence score of ${recommended.percentage}%.`;

  // Generate detailed analysis
  const materialAnswers = (answers.material as string[]) || [];
  const hasMetals = materialAnswers.some((m) =>
    ['steel', 'stainless', 'aluminum', 'copper', 'titanium'].includes(m)
  );
  const hasNonMetals = materialAnswers.some((m) =>
    ['acrylic', 'wood', 'plastic', 'leather'].includes(m)
  );

  let detailedAnalysis = `Your selection is primarily driven by `;
  if (hasMetals && !hasNonMetals) {
    detailedAnalysis += `metal cutting requirements, making ${recommendedType.toUpperCase()} laser the optimal choice for efficiency and precision.`;
  } else if (hasNonMetals && !hasMetals) {
    detailedAnalysis += `non-metal material processing, where ${recommendedType.toUpperCase()} laser excels.`;
  } else {
    detailedAnalysis += `mixed material requirements. ${recommendedType.toUpperCase()} laser offers the best balance for your diverse needs.`;
  }

  // Generate next steps
  const nextSteps = [
    `Research ${recommendedType.toUpperCase()} laser models in the ${recommended.costRange} range`,
    'Request quotes from 3-5 manufacturers for comparison',
    'Schedule equipment demonstrations with shortlisted suppliers',
    'Evaluate total cost of ownership including maintenance',
    'Consider training requirements for operators',
  ];

  // Add specific recommendations based on scores
  if (laserScores[1] && laserScores[1].percentage > 80) {
    nextSteps.unshift(
      `Also consider ${laserScores[1].type.toUpperCase()} laser as a close alternative (${laserScores[1].percentage}% match)`
    );
  }

  return {
    recommendedType,
    scores: laserScores,
    summary,
    detailedAnalysis,
    nextSteps,
  };
}

export function validateWizardAnswers(answers: WizardAnswers): {
  valid: boolean;
  missingQuestions: string[];
} {
  const missingQuestions: string[] = [];

  WIZARD_QUESTIONS.forEach((question) => {
    const answer = answers[question.id];
    if (!answer || (Array.isArray(answer) && (answer as string[]).length === 0)) {
      missingQuestions.push(question.text);
    }
  });

  return {
    valid: missingQuestions.length === 0,
    missingQuestions,
  };
}




'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  currentHours?: number;
  maxLifeHours?: number;
}

export function NozzleWearProgression({ currentHours = 0, maxLifeHours = 120 }: Props) {
  const percentage = Math.min((currentHours / maxLifeHours) * 100, 100);

  const getStage = () => {
    if (percentage < 50) return 'new';
    if (percentage < 80) return 'light';
    if (percentage < 100) return 'heavy';
    return 'replace';
  };

  const stage = getStage();

  const stageInfo = {
    new: {
      label: 'New / Good Condition',
      color: 'bg-green-500',
      textColor: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      description: 'Nozzle is in excellent condition. Continue normal operation.',
      actions: ['Perform routine cleaning', 'Monitor cut quality', 'Document usage hours'],
    },
    light: {
      label: 'Light Wear',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      description: 'Nozzle showing signs of wear but still functional.',
      actions: [
        'Increase inspection frequency',
        'Check for spatter buildup',
        'Measure orifice diameter',
        'Plan replacement soon',
      ],
    },
    heavy: {
      label: 'Heavy Wear',
      color: 'bg-orange-500',
      textColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      description: 'Nozzle approaching end of life. Cut quality may be affected.',
      actions: [
        'Replace nozzle soon',
        'Monitor cut quality closely',
        'Keep spare nozzle ready',
        'Avoid critical production jobs',
      ],
    },
    replace: {
      label: 'Replace Immediately',
      color: 'bg-red-500',
      textColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-800',
      description: 'Nozzle has exceeded recommended lifespan. Replace immediately.',
      actions: [
        'Stop production and replace nozzle',
        'Inspect cutting head for damage',
        'Verify cut quality after replacement',
        'Update maintenance log',
      ],
    },
  };

  const info = stageInfo[stage];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nozzle Wear Progression</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Track nozzle condition based on operating hours
        </p>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Current Usage</span>
            <span className="font-semibold">
              {currentHours} / {maxLifeHours} hours ({percentage.toFixed(0)}%)
            </span>
          </div>
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${info.color}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0h</span>
            <span>{(maxLifeHours * 0.5).toFixed(0)}h</span>
            <span>{(maxLifeHours * 0.8).toFixed(0)}h</span>
            <span>{maxLifeHours}h</span>
          </div>
        </div>

        {/* Current Stage */}
        <div className={`p-4 rounded-lg border-2 ${info.bgColor} ${info.borderColor} mb-6`}>
          <div className={`font-bold text-lg mb-2 ${info.textColor}`}>{info.label}</div>
          <p className="text-sm text-muted-foreground">{info.description}</p>
        </div>

        {/* Recommended Actions */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-sm">Recommended Actions:</h4>
          <ul className="space-y-2">
            {info.actions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className={`mt-0.5 ${info.textColor}`}>
                  {stage === 'replace' ? '⚠' : '•'}
                </span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Timeline */}
        <div className="border-t pt-6">
          <h4 className="font-semibold mb-4 text-sm">Wear Stage Timeline</h4>
          <div className="space-y-4">
            {/* New Stage */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-16 text-right text-xs font-medium text-muted-foreground">
                0-50%
              </div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500 mt-1" />
              <div className="flex-1">
                <div className="font-medium text-sm">New / Good Condition</div>
                <div className="text-xs text-muted-foreground">
                  Optimal performance, routine maintenance only
                </div>
              </div>
            </div>

            {/* Light Wear */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-16 text-right text-xs font-medium text-muted-foreground">
                50-80%
              </div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-yellow-500 mt-1" />
              <div className="flex-1">
                <div className="font-medium text-sm">Light Wear</div>
                <div className="text-xs text-muted-foreground">
                  Increased monitoring, plan replacement
                </div>
              </div>
            </div>

            {/* Heavy Wear */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-16 text-right text-xs font-medium text-muted-foreground">
                80-100%
              </div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-orange-500 mt-1" />
              <div className="flex-1">
                <div className="font-medium text-sm">Heavy Wear</div>
                <div className="text-xs text-muted-foreground">
                  Quality degradation, replace soon
                </div>
              </div>
            </div>

            {/* Replace */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-16 text-right text-xs font-medium text-muted-foreground">
                100%+
              </div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-red-500 mt-1" />
              <div className="flex-1">
                <div className="font-medium text-sm">Replace Immediately</div>
                <div className="text-xs text-muted-foreground">
                  Exceeded lifespan, risk of failure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspection Checklist */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h4 className="font-semibold mb-3 text-sm">Inspection Checklist</h4>
          <div className="grid gap-2 text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Visual inspection for damage or deformation</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Measure orifice diameter (replace if 10% larger)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Check for spatter buildup inside nozzle</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Verify concentricity with laser beam</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Inspect thread condition</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Test cut quality on sample material</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


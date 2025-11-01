"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  calculateNozzleLife,
  NozzleLifeInput,
  NozzleMaterial,
  NozzleType,
  CuttingMaterial,
  AssistGas,
  NOZZLE_MATERIAL_LABELS,
  NOZZLE_TYPE_LABELS,
  CUTTING_MATERIAL_LABELS,
  ASSIST_GAS_LABELS,
} from '@/lib/calculators/nozzle-life-calculator';

type FormState = {
  nozzleMaterial: NozzleMaterial;
  nozzleType: NozzleType;
  cuttingMaterial: CuttingMaterial;
  thicknessMm: string;
  powerKw: string;
  dailyHours: string;
  assistGas: AssistGas;
};

const DEFAULT_STATE: FormState = {
  nozzleMaterial: 'chrome_copper',
  nozzleType: 'single_layer',
  cuttingMaterial: 'carbon_steel',
  thicknessMm: '5',
  powerKw: '6',
  dailyHours: '8',
  assistGas: 'oxygen',
};

export default function NozzleLifeCalculatorForm() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof calculateNozzleLife> | null>(null);

  const canCalculate = useMemo(() => {
    return (
      Number(state.thicknessMm) > 0 &&
      Number(state.powerKw) > 0 &&
      Number(state.dailyHours) > 0
    );
  }, [state]);

  function onCalculate() {
    setError(null);
    try {
      const input: NozzleLifeInput = {
        nozzleMaterial: state.nozzleMaterial,
        nozzleType: state.nozzleType,
        cuttingMaterial: state.cuttingMaterial,
        thicknessMm: Number(state.thicknessMm),
        powerKw: Number(state.powerKw),
        dailyHours: Number(state.dailyHours),
        assistGas: state.assistGas,
      };
      const result = calculateNozzleLife(input);
      setOutput(result);
    } catch (e: any) {
      setOutput(null);
      setError(e?.message ?? 'Calculation failed, please check inputs');
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nozzle Configuration</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Nozzle Material</label>
                <Select
                  value={state.nozzleMaterial}
                  onChange={(e) => setState((s) => ({ ...s, nozzleMaterial: e.target.value as NozzleMaterial }))}
                >
                  {Object.entries(NOZZLE_MATERIAL_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Nozzle Type</label>
                <Select
                  value={state.nozzleType}
                  onChange={(e) => setState((s) => ({ ...s, nozzleType: e.target.value as NozzleType }))}
                >
                  {Object.entries(NOZZLE_TYPE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cutting Parameters</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Cutting Material</label>
                <Select
                  value={state.cuttingMaterial}
                  onChange={(e) => setState((s) => ({ ...s, cuttingMaterial: e.target.value as CuttingMaterial }))}
                >
                  {Object.entries(CUTTING_MATERIAL_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Assist Gas</label>
                <Select
                  value={state.assistGas}
                  onChange={(e) => setState((s) => ({ ...s, assistGas: e.target.value as AssistGas }))}
                >
                  {Object.entries(ASSIST_GAS_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Material Thickness (mm)</label>
                <Input
                  type="number"
                  min={0.5}
                  max={50}
                  step={0.5}
                  value={state.thicknessMm}
                  onChange={(e) => setState((s) => ({ ...s, thicknessMm: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Laser Power (kW)</label>
                <Input
                  type="number"
                  min={1}
                  max={30}
                  step={0.5}
                  value={state.powerKw}
                  onChange={(e) => setState((s) => ({ ...s, powerKw: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Daily Working Hours (h)</label>
                <Input
                  type="number"
                  min={1}
                  max={24}
                  step={1}
                  value={state.dailyHours}
                  onChange={(e) => setState((s) => ({ ...s, dailyHours: e.target.value }))}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <Button onClick={onCalculate} disabled={!canCalculate} className="w-full md:w-auto">
            Calculate Nozzle Life
          </Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Prediction Results</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <div className="text-sm text-muted-foreground">Estimated Lifespan</div>
                  <div className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {output.lifespanHours} <span className="text-lg">hours</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Approx. {output.lifespanDays} days (at {state.dailyHours} hours/day)
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nozzle Unit Price:</span>
                    <span className="font-medium">¥{output.nozzlePriceYuan}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-muted-foreground">Monthly Consumption Cost:</span>
                    <span className="font-medium text-orange-600">¥{output.monthlyCostYuan}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Enter parameters and click Calculate to view results</p>
            )}
          </CardContent>
        </Card>

        {output && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Calculation Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base Life:</span>
                <span>{output.breakdown.baseLife}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Power Factor:</span>
                <Badge variant={output.breakdown.powerFactor > 1.2 ? 'destructive' : 'secondary'}>
                  {output.breakdown.powerFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thickness Factor:</span>
                <Badge variant={output.breakdown.thicknessFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.thicknessFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material Factor:</span>
                <Badge variant={output.breakdown.materialFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.materialFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas Factor:</span>
                <Badge variant={output.breakdown.gasFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.gasFactor}x
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {output && output.tips.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Lifespan Extension Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {output.tips.map((tip, i) => (
                  <li key={i} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}


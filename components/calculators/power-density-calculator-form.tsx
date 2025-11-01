"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculatePowerDensity, PowerDensityInput } from '@/lib/calculators/power-density-calculator';

type FormState = {
  powerW: string;
  spotDiameterMm: string;
  mSquared: string;
};

const DEFAULT_STATE: FormState = {
  powerW: '6000',
  spotDiameterMm: '0.12',
  mSquared: '1.2',
};

export default function PowerDensityCalculatorForm() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof calculatePowerDensity> | null>(null);

  const canCalculate = useMemo(() => {
    return Number(state.powerW) > 0 && Number(state.spotDiameterMm) > 0;
  }, [state]);

  function onCalculate() {
    setError(null);
    try {
      const input: PowerDensityInput = {
        powerW: Number(state.powerW),
        spotDiameterMm: Number(state.spotDiameterMm),
        mSquared: Number(state.mSquared) || undefined,
      };
      const result = calculatePowerDensity(input);
      setOutput(result);
    } catch (e: any) {
      setOutput(null);
      setError(e?.message ?? 'Calculation failed, please check inputs');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Laser Power (W)</label>
            <Input
              type="number"
              min={100}
              step={10}
              value={state.powerW}
              onChange={(e) => setState((s) => ({ ...s, powerW: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Focused Spot Diameter (mm)</label>
            <Input
              type="number"
              min={0.05}
              step={0.01}
              value={state.spotDiameterMm}
              onChange={(e) => setState((s) => ({ ...s, spotDiameterMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">M² (Optional)</label>
            <Input
              type="number"
              min={1.0}
              step={0.05}
              value={state.mSquared}
              onChange={(e) => setState((s) => ({ ...s, mSquared: e.target.value }))}
            />
          </div>
        </div>

        <div className="pt-2">
          <Button onClick={onCalculate} disabled={!canCalculate}>
            Calculate
          </Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Spot Area (mm²):</span>
                  <span className="ml-2 font-medium">{output.spotAreaMm2}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Power Density (W/mm²):</span>
                  <span className="ml-2 font-medium">{output.powerDensityWPerMm2}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Process Applicability:</span>
                  <span className="ml-2 font-medium">
                    {output.processHint === 'cutting'
                      ? 'Cutting'
                      : output.processHint === 'welding'
                      ? 'Welding'
                      : output.processHint === 'marking'
                      ? 'Marking'
                      : 'Unknown'}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Depth of Focus Estimate (mm):</span>
                  <span className="ml-2 font-medium">{output.focalDepthEstimateMm}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">Note: Simplified estimate. Actual results require validation with M², lens, and material testing.</div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Enter parameters and click Calculate to view results.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


















"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateKerf, KerfInput, SupportedMaterial, MATERIAL_LABELS } from '@/lib/calculators/kerf-calculator';

type FormState = {
  powerKw: string;
  material: SupportedMaterial;
  thicknessMm: string;
  nozzleDiameterMm: string;
  speedMmPerMin: string;
};

const DEFAULT_STATE: FormState = {
  powerKw: '6',
  material: 'carbon_steel',
  thicknessMm: '3',
  nozzleDiameterMm: '1.2',
  speedMmPerMin: '2500',
};

export default function KerfCalculatorForm() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof calculateKerf> | null>(null);

  const canCalculate = useMemo(() => {
    return (
      Number(state.powerKw) > 0 &&
      Number(state.thicknessMm) > 0 &&
      Number(state.nozzleDiameterMm) > 0 &&
      Number(state.speedMmPerMin) > 0
    );
  }, [state]);

  function onCalculate() {
    setError(null);
    try {
      const input: KerfInput = {
        powerKw: Number(state.powerKw),
        material: state.material,
        thicknessMm: Number(state.thicknessMm),
        nozzleDiameterMm: Number(state.nozzleDiameterMm),
        speedMmPerMin: Number(state.speedMmPerMin),
      };
      const result = calculateKerf(input);
      setOutput(result);
    } catch (e: any) {
      setOutput(null);
      setError(e?.message ?? 'Calculation failed, please check inputs');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Laser Power (kW)</label>
            <Input
              type="number"
              min={0.5}
              step={0.1}
              value={state.powerKw}
              onChange={(e) => setState((s) => ({ ...s, powerKw: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Material Type</label>
            <Select
              value={state.material}
              onChange={(e) => setState((s) => ({ ...s, material: e.target.value as SupportedMaterial }))}
            >
              {Object.entries(MATERIAL_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Material Thickness (mm)</label>
            <Input
              type="number"
              min={0.5}
              step={0.1}
              value={state.thicknessMm}
              onChange={(e) => setState((s) => ({ ...s, thicknessMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Nozzle Diameter (mm)</label>
            <Input
              type="number"
              min={0.8}
              step={0.1}
              value={state.nozzleDiameterMm}
              onChange={(e) => setState((s) => ({ ...s, nozzleDiameterMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Cutting Speed (mm/min)</label>
            <Input
              type="number"
              min={100}
              step={10}
              value={state.speedMmPerMin}
              onChange={(e) => setState((s) => ({ ...s, speedMmPerMin: e.target.value }))}
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
                  <span className="text-muted-foreground">Estimated Kerf (mm):</span>
                  <span className="ml-2 font-medium">{output.kerfMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Compensation Suggestion (mm):</span>
                  <span className="ml-2 font-medium">{output.compensationMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Recommended Part Spacing (mm):</span>
                  <span className="ml-2 font-medium">{output.recommendedSpacingMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Material Utilization Impact (%):</span>
                  <span className="ml-2 font-medium">{output.utilizationImpactPct}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">
                  Note: Results are estimated based on hardcoded material coefficients and input ranges. Fine-tune with actual measurements.
                </div>
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








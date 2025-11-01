"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  estimateCost,
  CostEstimatorInput,
  MATERIAL_LABELS_FOR_COST,
  SupportedMaterialForCost,
} from '@/lib/calculators/cost-estimator';

type FormState = {
  totalCutLengthM: string;
  sheetAreaM2: string;
  thicknessMm: string;
  material: SupportedMaterialForCost;
  materialPricePerKg: string;

  laserPowerKw: string;
  electricalPricePerKwh: string;
  processEfficiency: string;

  assistGas: 'oxygen' | 'nitrogen' | 'air';
  gasPricePerM3: string;
  gasFlowM3PerH: string;

  machinePrice: string;
  machineLifeHours: string;
  laborPricePerHour: string;
  operatorShare: string;

  averageSpeedMmPerMin: string;
  piercingTimePerHoleSec: string;
  holesCount: string;
};

const DEFAULT_STATE: FormState = {
  totalCutLengthM: '100',
  sheetAreaM2: '1.5',
  thicknessMm: '3',
  material: 'carbon_steel',
  materialPricePerKg: '5.0',

  laserPowerKw: '6',
  electricalPricePerKwh: '1.0',
  processEfficiency: '0.6',

  assistGas: 'oxygen',
  gasPricePerM3: '2.0',
  gasFlowM3PerH: '8',

  machinePrice: '1200000',
  machineLifeHours: '20000',
  laborPricePerHour: '35',
  operatorShare: '0.7',

  averageSpeedMmPerMin: '2500',
  piercingTimePerHoleSec: '0',
  holesCount: '0',
};

export default function CostEstimatorForm() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof estimateCost> | null>(null);

  const canCalculate = useMemo(() => {
    return (
      Number(state.totalCutLengthM) > 0 &&
      Number(state.sheetAreaM2) > 0 &&
      Number(state.thicknessMm) > 0 &&
      Number(state.materialPricePerKg) > 0 &&
      Number(state.laserPowerKw) > 0 &&
      Number(state.electricalPricePerKwh) > 0 &&
      Number(state.machineLifeHours) > 0 &&
      Number(state.averageSpeedMmPerMin) > 0
    );
  }, [state]);

  function onCalculate() {
    setError(null);
    try {
      const input: CostEstimatorInput = {
        totalCutLengthM: Number(state.totalCutLengthM),
        sheetAreaM2: Number(state.sheetAreaM2),
        thicknessMm: Number(state.thicknessMm),
        material: state.material,
        materialPricePerKg: Number(state.materialPricePerKg),
        laserPowerKw: Number(state.laserPowerKw),
        electricalPricePerKwh: Number(state.electricalPricePerKwh),
        processEfficiency: Number(state.processEfficiency),
        assistGas: state.assistGas,
        gasPricePerM3: Number(state.gasPricePerM3),
        gasFlowM3PerH: Number(state.gasFlowM3PerH),
        machinePrice: Number(state.machinePrice),
        machineLifeHours: Number(state.machineLifeHours),
        laborPricePerHour: Number(state.laborPricePerHour),
        operatorShare: Number(state.operatorShare),
        averageSpeedMmPerMin: Number(state.averageSpeedMmPerMin),
        piercingTimePerHoleSec: Number(state.piercingTimePerHoleSec) || 0,
        holesCount: Number(state.holesCount) || 0,
      };
      const result = estimateCost(input);
      setOutput(result);
    } catch (e: any) {
      setOutput(null);
      setError(e?.message ?? 'Calculation failed, please check inputs');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workpiece & Material</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Cutting Length (m)</label>
              <Input type="number" min={0.1} step={0.1} value={state.totalCutLengthM} onChange={(e) => setState((s) => ({ ...s, totalCutLengthM: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Sheet Area (m²)</label>
              <Input type="number" min={0.1} step={0.1} value={state.sheetAreaM2} onChange={(e) => setState((s) => ({ ...s, sheetAreaM2: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Thickness (mm)</label>
              <Input type="number" min={0.5} step={0.1} value={state.thicknessMm} onChange={(e) => setState((s) => ({ ...s, thicknessMm: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Material</label>
              <Select value={state.material} onChange={(e) => setState((s) => ({ ...s, material: e.target.value as SupportedMaterialForCost }))}>
                {Object.entries(MATERIAL_LABELS_FOR_COST).map(([val, label]) => (
                  <option key={val} value={val}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Material Price (¥/kg)</label>
              <Input type="number" min={0.1} step={0.1} value={state.materialPricePerKg} onChange={(e) => setState((s) => ({ ...s, materialPricePerKg: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Energy & Equipment</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Laser Power (kW)</label>
              <Input type="number" min={1} step={0.1} value={state.laserPowerKw} onChange={(e) => setState((s) => ({ ...s, laserPowerKw: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Electricity Price (¥/kWh)</label>
              <Input type="number" min={0.1} step={0.1} value={state.electricalPricePerKwh} onChange={(e) => setState((s) => ({ ...s, electricalPricePerKwh: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Efficiency Factor</label>
              <Input type="number" min={0.1} max={1} step={0.05} value={state.processEfficiency} onChange={(e) => setState((s) => ({ ...s, processEfficiency: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Avg Speed (mm/min)</label>
              <Input type="number" min={100} step={10} value={state.averageSpeedMmPerMin} onChange={(e) => setState((s) => ({ ...s, averageSpeedMmPerMin: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assist Gas</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Gas Type</label>
              <Select value={state.assistGas} onChange={(e) => setState((s) => ({ ...s, assistGas: e.target.value as FormState['assistGas'] }))}>
                <option value="oxygen">Oxygen</option>
                <option value="nitrogen">Nitrogen</option>
                <option value="air">Air</option>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Gas Price (¥/m³)</label>
              <Input type="number" min={0} step={0.1} value={state.gasPricePerM3} onChange={(e) => setState((s) => ({ ...s, gasPricePerM3: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Flow Rate (m³/h)</label>
              <Input type="number" min={0} step={0.1} value={state.gasFlowM3PerH} onChange={(e) => setState((s) => ({ ...s, gasFlowM3PerH: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Depreciation & Labor</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Machine Price (¥)</label>
              <Input type="number" min={0} step={1000} value={state.machinePrice} onChange={(e) => setState((s) => ({ ...s, machinePrice: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Machine Life (h)</label>
              <Input type="number" min={1} step={100} value={state.machineLifeHours} onChange={(e) => setState((s) => ({ ...s, machineLifeHours: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Labor Rate (¥/h)</label>
              <Input type="number" min={0} step={1} value={state.laborPricePerHour} onChange={(e) => setState((s) => ({ ...s, laborPricePerHour: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Operator Share</label>
              <Input type="number" min={0} max={1} step={0.1} value={state.operatorShare} onChange={(e) => setState((s) => ({ ...s, operatorShare: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Piercing Time (Optional)</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Time per Hole (s)</label>
              <Input type="number" min={0} step={0.1} value={state.piercingTimePerHoleSec} onChange={(e) => setState((s) => ({ ...s, piercingTimePerHoleSec: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Holes Count</label>
              <Input type="number" min={0} step={1} value={state.holesCount} onChange={(e) => setState((s) => ({ ...s, holesCount: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <div className="pt-2">
          <Button onClick={onCalculate} disabled={!canCalculate}>Calculate</Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Cost Results</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Processing Time (min):</span>
                  <span className="ml-2 font-medium">{output.processingTimeMin}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Material Cost (¥):</span>
                  <span className="ml-2 font-medium">{output.materialCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.material}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Electricity Cost (¥):</span>
                  <span className="ml-2 font-medium">{output.electricityCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.electricity}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Gas Cost (¥):</span>
                  <span className="ml-2 font-medium">{output.gasCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.gas}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Depreciation Cost (¥):</span>
                  <span className="ml-2 font-medium">{output.depreciationCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.depreciation}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Labor Cost (¥):</span>
                  <span className="ml-2 font-medium">{output.laborCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.labor}%)</span>
                </div>
                <div className="pt-2 border-t" />
                <div className="text-base">
                  <span className="text-muted-foreground">Total Cost (¥):</span>
                  <span className="ml-2 font-semibold">{output.totalCost}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">Note: This estimate depends on input parameters and constant density. Recommend calibrating with factory data.</div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Enter parameters and click Calculate to view cost breakdown and percentages.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}








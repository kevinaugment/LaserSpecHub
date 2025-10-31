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
      setError(e?.message ?? '计算失败，请检查输入');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">激光功率 (kW)</label>
            <Input
              type="number"
              min={0.5}
              step={0.1}
              value={state.powerKw}
              onChange={(e) => setState((s) => ({ ...s, powerKw: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">材料类型</label>
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
            <label className="mb-1 block text-sm text-muted-foreground">材料厚度 (mm)</label>
            <Input
              type="number"
              min={0.5}
              step={0.1}
              value={state.thicknessMm}
              onChange={(e) => setState((s) => ({ ...s, thicknessMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">喷嘴直径 (mm)</label>
            <Input
              type="number"
              min={0.8}
              step={0.1}
              value={state.nozzleDiameterMm}
              onChange={(e) => setState((s) => ({ ...s, nozzleDiameterMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">切割速度 (mm/min)</label>
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
            计算
          </Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>结果</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">预估切缝 (mm)：</span>
                  <span className="ml-2 font-medium">{output.kerfMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">补偿建议 (mm)：</span>
                  <span className="ml-2 font-medium">{output.compensationMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">建议零件间距 (mm)：</span>
                  <span className="ml-2 font-medium">{output.recommendedSpacingMm}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">材料利用率影响 (%)：</span>
                  <span className="ml-2 font-medium">{output.utilizationImpactPct}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">
                  说明：结果基于硬编码材料系数与输入范围进行估算，建议结合实测微调。
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">输入参数后点击计算以查看结果。</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}








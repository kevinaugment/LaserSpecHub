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
      setError(e?.message ?? '计算失败，请检查输入');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">激光功率 (W)</label>
            <Input
              type="number"
              min={100}
              step={10}
              value={state.powerW}
              onChange={(e) => setState((s) => ({ ...s, powerW: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">聚焦光斑直径 (mm)</label>
            <Input
              type="number"
              min={0.05}
              step={0.01}
              value={state.spotDiameterMm}
              onChange={(e) => setState((s) => ({ ...s, spotDiameterMm: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">M² (可选)</label>
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
                  <span className="text-muted-foreground">光斑面积 (mm²)：</span>
                  <span className="ml-2 font-medium">{output.spotAreaMm2}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">功率密度 (W/mm²)：</span>
                  <span className="ml-2 font-medium">{output.powerDensityWPerMm2}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">工艺适用性：</span>
                  <span className="ml-2 font-medium">
                    {output.processHint === 'cutting'
                      ? '切割'
                      : output.processHint === 'welding'
                      ? '焊接'
                      : output.processHint === 'marking'
                      ? '打标'
                      : '未知'}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">焦深估算 (mm)：</span>
                  <span className="ml-2 font-medium">{output.focalDepthEstimateMm}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">说明：为简化估算，实际需结合M²、镜头、材料验证。</div>
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








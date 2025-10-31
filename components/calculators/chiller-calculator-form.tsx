"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateChiller, ChillerInput } from '@/lib/calculators/chiller-calculator';

type FormState = {
  laserType: 'fiber' | 'co2' | 'solid_state';
  laserPowerKw: string;
  ambientC: string;
  dutyCyclePct: string;
  safetyFactor: string;
};

const DEFAULT_STATE: FormState = {
  laserType: 'fiber',
  laserPowerKw: '6',
  ambientC: '25',
  dutyCyclePct: '70',
  safetyFactor: '1.2',
};

export default function ChillerCalculatorForm() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof calculateChiller> | null>(null);

  const canCalculate = useMemo(() => {
    return Number(state.laserPowerKw) > 0 && Number(state.ambientC) >= 0 && Number(state.dutyCyclePct) > 0;
  }, [state]);

  function onCalculate() {
    setError(null);
    try {
      const input: ChillerInput = {
        laserType: state.laserType,
        laserPowerKw: Number(state.laserPowerKw),
        ambientC: Number(state.ambientC),
        dutyCyclePct: Number(state.dutyCyclePct),
        safetyFactor: Number(state.safetyFactor),
      };
      const result = calculateChiller(input);
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
            <label className="mb-1 block text-sm text-muted-foreground">激光类型</label>
            <Select
              value={state.laserType}
              onChange={(e) => setState((s) => ({ ...s, laserType: e.target.value as FormState['laserType'] }))}
            >
              <option value="fiber">光纤</option>
              <option value="co2">CO2</option>
              <option value="solid_state">固体</option>
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">激光功率 (kW)</label>
            <Input
              type="number"
              min={1}
              step={0.1}
              value={state.laserPowerKw}
              onChange={(e) => setState((s) => ({ ...s, laserPowerKw: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">环境温度 (℃)</label>
            <Input
              type="number"
              min={10}
              step={1}
              value={state.ambientC}
              onChange={(e) => setState((s) => ({ ...s, ambientC: e.target.value }))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">工作占空比 (%)</label>
            <Input
              type="number"
              min={10}
              max={100}
              step={1}
              value={state.dutyCyclePct}
              onChange={(e) => setState((s) => ({ ...s, dutyCyclePct: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">安全系数</label>
            <Input
              type="number"
              min={1.05}
              max={1.8}
              step={0.05}
              value={state.safetyFactor}
              onChange={(e) => setState((s) => ({ ...s, safetyFactor: e.target.value }))}
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
                  <span className="text-muted-foreground">所需制冷量 (kW)：</span>
                  <span className="ml-2 font-medium">{output.coolingCapacityKw}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">所需制冷量 (kcal/h)：</span>
                  <span className="ml-2 font-medium">{output.coolingCapacityKcalPerH}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">建议冷却水流量 (L/min)：</span>
                  <span className="ml-2 font-medium">{output.suggestedFlowLpm}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">说明：不同冷却器设计会有差异，请结合厂商规格选型。</div>
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








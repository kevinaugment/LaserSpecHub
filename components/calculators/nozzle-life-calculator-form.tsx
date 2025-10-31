"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
      setError(e?.message ?? '计算失败,请检查输入');
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-6">
        {/* 喷嘴配置 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">喷嘴配置</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">喷嘴材质</label>
                <Select
                  value={state.nozzleMaterial}
                  onValueChange={(v) => setState((s) => ({ ...s, nozzleMaterial: v as NozzleMaterial }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(NOZZLE_MATERIAL_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">喷嘴类型</label>
                <Select
                  value={state.nozzleType}
                  onValueChange={(v) => setState((s) => ({ ...s, nozzleType: v as NozzleType }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(NOZZLE_TYPE_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 切割参数 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">切割参数</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">切割材料</label>
                <Select
                  value={state.cuttingMaterial}
                  onValueChange={(v) => setState((s) => ({ ...s, cuttingMaterial: v as CuttingMaterial }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(CUTTING_MATERIAL_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">辅助气体</label>
                <Select
                  value={state.assistGas}
                  onValueChange={(v) => setState((s) => ({ ...s, assistGas: v as AssistGas }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ASSIST_GAS_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">材料厚度 (mm)</label>
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
                <label className="mb-1 block text-sm font-medium">激光功率 (kW)</label>
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
                <label className="mb-1 block text-sm font-medium">日均工作时间 (h)</label>
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
            计算喷嘴寿命
          </Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        {/* 主要结果 */}
        <Card>
          <CardHeader>
            <CardTitle>预测结果</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <div className="text-sm text-muted-foreground">预估使用寿命</div>
                  <div className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {output.lifespanHours} <span className="text-lg">小时</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    约 {output.lifespanDays} 天 (按每天 {state.dailyHours} 小时)
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">喷嘴单价:</span>
                    <span className="font-medium">¥{output.nozzlePriceYuan}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-muted-foreground">月度消耗成本:</span>
                    <span className="font-medium text-orange-600">¥{output.monthlyCostYuan}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">输入参数后点击计算查看结果</p>
            )}
          </CardContent>
        </Card>

        {/* 计算明细 */}
        {output && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">计算明细</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">基础寿命:</span>
                <span>{output.breakdown.baseLife}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">功率系数:</span>
                <Badge variant={output.breakdown.powerFactor > 1.2 ? 'destructive' : 'secondary'}>
                  {output.breakdown.powerFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">厚度系数:</span>
                <Badge variant={output.breakdown.thicknessFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.thicknessFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">材料系数:</span>
                <Badge variant={output.breakdown.materialFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.materialFactor}x
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">气体系数:</span>
                <Badge variant={output.breakdown.gasFactor > 1.1 ? 'destructive' : 'secondary'}>
                  {output.breakdown.gasFactor}x
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 延长寿命建议 */}
        {output && output.tips.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">延长寿命建议</CardTitle>
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


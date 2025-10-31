"use client";

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
      setError(e?.message ?? '计算失败，请检查输入');
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>工件与材料</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">切割长度 (m)</label>
              <Input type="number" min={0.1} step={0.1} value={state.totalCutLengthM} onChange={(e) => setState((s) => ({ ...s, totalCutLengthM: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">板材面积 (m²)</label>
              <Input type="number" min={0.1} step={0.1} value={state.sheetAreaM2} onChange={(e) => setState((s) => ({ ...s, sheetAreaM2: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">厚度 (mm)</label>
              <Input type="number" min={0.5} step={0.1} value={state.thicknessMm} onChange={(e) => setState((s) => ({ ...s, thicknessMm: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">材料</label>
              <Select value={state.material} onValueChange={(v) => setState((s) => ({ ...s, material: v as SupportedMaterialForCost }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(MATERIAL_LABELS_FOR_COST).map(([val, label]) => (
                    <SelectItem key={val} value={val}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">材料单价 (元/kg)</label>
              <Input type="number" min={0.1} step={0.1} value={state.materialPricePerKg} onChange={(e) => setState((s) => ({ ...s, materialPricePerKg: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>能源与设备</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">激光功率 (kW)</label>
              <Input type="number" min={1} step={0.1} value={state.laserPowerKw} onChange={(e) => setState((s) => ({ ...s, laserPowerKw: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">电价 (元/kWh)</label>
              <Input type="number" min={0.1} step={0.1} value={state.electricalPricePerKwh} onChange={(e) => setState((s) => ({ ...s, electricalPricePerKwh: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">能效系数</label>
              <Input type="number" min={0.1} max={1} step={0.05} value={state.processEfficiency} onChange={(e) => setState((s) => ({ ...s, processEfficiency: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">平均速度 (mm/min)</label>
              <Input type="number" min={100} step={10} value={state.averageSpeedMmPerMin} onChange={(e) => setState((s) => ({ ...s, averageSpeedMmPerMin: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>辅助气体</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">气体类型</label>
              <Select value={state.assistGas} onValueChange={(v) => setState((s) => ({ ...s, assistGas: v as FormState['assistGas'] }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oxygen">氧气</SelectItem>
                  <SelectItem value="nitrogen">氮气</SelectItem>
                  <SelectItem value="air">空气</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">气体单价 (元/m³)</label>
              <Input type="number" min={0} step={0.1} value={state.gasPricePerM3} onChange={(e) => setState((s) => ({ ...s, gasPricePerM3: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">工况流量 (m³/h)</label>
              <Input type="number" min={0} step={0.1} value={state.gasFlowM3PerH} onChange={(e) => setState((s) => ({ ...s, gasFlowM3PerH: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>折旧与人工</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">设备价格 (元)</label>
              <Input type="number" min={0} step={1000} value={state.machinePrice} onChange={(e) => setState((s) => ({ ...s, machinePrice: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">设备寿命 (h)</label>
              <Input type="number" min={1} step={100} value={state.machineLifeHours} onChange={(e) => setState((s) => ({ ...s, machineLifeHours: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">人工单价 (元/h)</label>
              <Input type="number" min={0} step={1} value={state.laborPricePerHour} onChange={(e) => setState((s) => ({ ...s, laborPricePerHour: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">人员占用系数</label>
              <Input type="number" min={0} max={1} step={0.1} value={state.operatorShare} onChange={(e) => setState((s) => ({ ...s, operatorShare: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>穿孔时间（可选）</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">每孔时间 (s)</label>
              <Input type="number" min={0} step={0.1} value={state.piercingTimePerHoleSec} onChange={(e) => setState((s) => ({ ...s, piercingTimePerHoleSec: e.target.value }))} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">孔数量 (个)</label>
              <Input type="number" min={0} step={1} value={state.holesCount} onChange={(e) => setState((s) => ({ ...s, holesCount: e.target.value }))} />
            </div>
          </CardContent>
        </Card>

        <div className="pt-2">
          <Button onClick={onCalculate} disabled={!canCalculate}>计算</Button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>成本结果</CardTitle>
          </CardHeader>
          <CardContent>
            {output ? (
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">加工时间 (min)：</span>
                  <span className="ml-2 font-medium">{output.processingTimeMin}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">材料成本 (元)：</span>
                  <span className="ml-2 font-medium">{output.materialCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.material}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">电力成本 (元)：</span>
                  <span className="ml-2 font-medium">{output.electricityCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.electricity}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">气体成本 (元)：</span>
                  <span className="ml-2 font-medium">{output.gasCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.gas}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">折旧成本 (元)：</span>
                  <span className="ml-2 font-medium">{output.depreciationCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.depreciation}%)</span>
                </div>
                <div>
                  <span className="text-muted-foreground">人工成本 (元)：</span>
                  <span className="ml-2 font-medium">{output.laborCost}</span>
                  <span className="ml-2 text-muted-foreground">({output.breakdownPct.labor}%)</span>
                </div>
                <div className="pt-2 border-t" />
                <div className="text-base">
                  <span className="text-muted-foreground">总成本 (元)：</span>
                  <span className="ml-2 font-semibold">{output.totalCost}</span>
                </div>
                <div className="pt-2 text-xs text-muted-foreground">说明：本估算依赖输入参数与常量密度，建议结合工厂数据校准。</div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">填写参数后点击计算以查看成本明细与占比。</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}








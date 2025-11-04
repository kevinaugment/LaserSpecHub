'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export default function GasFlowCalculatorPage() {
  const [gasType, setGasType] = useState<'oxygen' | 'nitrogen' | 'air' | 'argon'>('nitrogen');
  const [pressure, setPressure] = useState<number>(15);
  const [nozzleDiameter, setNozzleDiameter] = useState<number>(1.5);
  const [cuttingTime, setCuttingTime] = useState<number>(60);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(20);

  // Gas pricing ($/m³)
  const gasPrices = {
    oxygen: 0.15,
    nitrogen: 0.25,
    air: 0.02,
    argon: 1.50,
  };

  // Calculate flow rate (L/min) based on pressure and nozzle diameter
  // Simplified calculation: Flow ≈ k * d² * √P
  // where k is a constant (~40 for typical nozzles), d is diameter (mm), P is pressure (bar)
  const calculateFlowRate = () => {
    const k = 40;
    const flowRate = k * Math.pow(nozzleDiameter, 2) * Math.sqrt(pressure);
    return Math.round(flowRate * 10) / 10;
  };

  const flowRate = calculateFlowRate();
  const flowRateM3PerHour = (flowRate * 60) / 1000; // Convert L/min to m³/hour
  const dailyConsumption = flowRateM3PerHour * (cuttingTime / 60); // m³ per day
  const monthlyConsumption = dailyConsumption * daysPerMonth; // m³ per month
  const dailyCost = dailyConsumption * gasPrices[gasType];
  const monthlyCost = monthlyConsumption * gasPrices[gasType];
  const annualCost = monthlyCost * 12;

  // Calculate cylinder usage (typical cylinder: 50L at 200 bar = ~10m³ usable gas)
  const cylinderCapacity = 10; // m³
  const cylindersPerMonth = Math.ceil(monthlyConsumption / cylinderCapacity);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Assist Gas Flow Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate gas consumption rates and monthly operating costs for laser cutting operations
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Cutting Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Gas Type</label>
              <select
                value={gasType}
                onChange={(e) => setGasType(e.target.value as typeof gasType)}
                className="w-full p-2 border rounded-md bg-background"
              >
                <option value="nitrogen">Nitrogen (N₂)</option>
                <option value="oxygen">Oxygen (O₂)</option>
                <option value="air">Compressed Air</option>
                <option value="argon">Argon (Ar)</option>
              </select>
              <p className="text-xs text-muted-foreground mt-1">
                {gasType === 'nitrogen' && 'Most common for stainless steel and aluminum'}
                {gasType === 'oxygen' && 'Best for carbon steel with oxidation cutting'}
                {gasType === 'air' && 'Low cost option for non-critical applications'}
                {gasType === 'argon' && 'Premium gas for titanium and reactive metals'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Gas Pressure: {pressure} bar
              </label>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={pressure}
                onChange={(e) => setPressure(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5 bar</span>
                <span>15 bar (typical)</span>
                <span>25 bar</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Nozzle Diameter: {nozzleDiameter} mm
              </label>
              <input
                type="range"
                min="0.8"
                max="3.0"
                step="0.1"
                value={nozzleDiameter}
                onChange={(e) => setNozzleDiameter(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0.8mm</span>
                <span>1.5mm (typical)</span>
                <span>3.0mm</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Daily Cutting Time: {cuttingTime} minutes
              </label>
              <input
                type="range"
                min="30"
                max="480"
                step="30"
                value={cuttingTime}
                onChange={(e) => setCuttingTime(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>30 min</span>
                <span>{(cuttingTime / 60).toFixed(1)} hrs</span>
                <span>8 hrs</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Working Days per Month: {daysPerMonth}
              </label>
              <input
                type="range"
                min="10"
                max="30"
                step="1"
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>10 days</span>
                <span>20 days</span>
                <span>30 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Flow Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {flowRate} L/min
              </div>
              <p className="text-sm text-muted-foreground">
                {flowRateM3PerHour.toFixed(2)} m³/hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gas Consumption</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Daily</span>
                <span className="text-lg font-semibold">{dailyConsumption.toFixed(2)} m³</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Monthly</span>
                <span className="text-lg font-semibold">{monthlyConsumption.toFixed(1)} m³</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cylinders/Month</span>
                <span className="text-lg font-semibold">{cylindersPerMonth} units</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Based on standard 50L cylinder at 200 bar (≈10m³ usable gas)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Daily Cost</span>
                <span className="text-lg font-semibold">${dailyCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Monthly Cost</span>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  ${monthlyCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Annual Cost</span>
                <span className="text-lg font-semibold">${annualCost.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Gas price: ${gasPrices[gasType]}/m³ (regional pricing may vary)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Information Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Gas Selection Guide</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <strong className="text-blue-600 dark:text-blue-400">Nitrogen:</strong>
              <p className="text-muted-foreground">Best for stainless steel, aluminum. Prevents oxidation. Pressure: 12-20 bar.</p>
            </div>
            <div>
              <strong className="text-blue-600 dark:text-blue-400">Oxygen:</strong>
              <p className="text-muted-foreground">Optimal for carbon steel. Exothermic reaction increases cut speed. Pressure: 0.3-2 bar.</p>
            </div>
            <div>
              <strong className="text-blue-600 dark:text-blue-400">Air:</strong>
              <p className="text-muted-foreground">Budget option for mild steel. Some edge oxidation. Pressure: 8-12 bar.</p>
            </div>
            <div>
              <strong className="text-blue-600 dark:text-blue-400">Argon:</strong>
              <p className="text-muted-foreground">Titanium and reactive metals. Premium cost justified for critical applications.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cost Optimization Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p>• <strong>Minimize pressure:</strong> Use lowest pressure that maintains cut quality (saves 10-20%)</p>
            <p>• <strong>Optimize pierce time:</strong> Excessive pierce delay wastes gas</p>
            <p>• <strong>Check for leaks:</strong> Even small leaks cost $500-2000/year</p>
            <p>• <strong>Consider bulk supply:</strong> Liquid nitrogen tanks reduce costs by 30-50% vs cylinders</p>
            <p>• <strong>Nozzle maintenance:</strong> Worn nozzles require higher pressure, increasing consumption</p>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">Note:</strong> Flow rate calculations are approximations based on nozzle diameter and pressure. Actual consumption varies with nozzle design, gas temperature, line pressure losses, and cutting duty cycle. Gas prices shown are typical industrial rates and vary by region, supplier, and contract terms. For precise measurements, install a flow meter on your gas supply line.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


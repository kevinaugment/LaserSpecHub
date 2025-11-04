'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CuttingTimeCalculatorPage() {
  const [pathLength, setPathLength] = useState<number>(1000);
  const [cuttingSpeed, setCuttingSpeed] = useState<number>(3000);
  const [pierceCount, setPierceCount] = useState<number>(5);
  const [pierceTime, setPierceTime] = useState<number>(0.5);
  const [rapidSpeed, setRapidSpeed] = useState<number>(50000);
  const [rapidDistance, setRapidDistance] = useState<number>(500);

  // Calculate times
  const cuttingTimeSeconds = (pathLength / cuttingSpeed) * 60; // Convert mm/min to seconds
  const totalPierceTime = pierceCount * pierceTime;
  const rapidTimeSeconds = (rapidDistance / rapidSpeed) * 60;
  const totalTimeSeconds = cuttingTimeSeconds + totalPierceTime + rapidTimeSeconds;
  
  const totalTimeMinutes = totalTimeSeconds / 60;

  // Parts per hour calculation
  const cycleTimeMinutes = totalTimeMinutes;
  const partsPerHour = cycleTimeMinutes > 0 ? 60 / cycleTimeMinutes : 0;
  const partsPerDay = partsPerHour * 8; // 8 hour workday

  // Time breakdown percentages
  const cuttingPercent = (cuttingTimeSeconds / totalTimeSeconds) * 100;
  const piercePercent = (totalPierceTime / totalTimeSeconds) * 100;
  const rapidPercent = (rapidTimeSeconds / totalTimeSeconds) * 100;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Cutting Time Calculator</h1>
        <p className="text-lg text-muted-foreground">
          Calculate cycle time, production capacity, and time breakdown for laser cutting operations
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
              <label className="block text-sm font-medium mb-2">
                Path Length: {pathLength} mm
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={pathLength}
                onChange={(e) => setPathLength(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>100mm</span>
                <span>{(pathLength / 1000).toFixed(1)}m</span>
                <span>10m</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Cutting Speed: {cuttingSpeed} mm/min
              </label>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={cuttingSpeed}
                onChange={(e) => setCuttingSpeed(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>500 mm/min</span>
                <span>{(cuttingSpeed / 1000).toFixed(1)} m/min</span>
                <span>10,000 mm/min</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Typical: 1,000-3,000 mm/min for steel, 3,000-8,000 mm/min for thin materials
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Number of Pierces: {pierceCount}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={pierceCount}
                onChange={(e) => setPierceCount(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 pierce</span>
                <span>{pierceCount} pierces</span>
                <span>50 pierces</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Pierce Time: {pierceTime} seconds
              </label>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.1"
                value={pierceTime}
                onChange={(e) => setPierceTime(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0.1s</span>
                <span>{pierceTime}s</span>
                <span>3.0s</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Typical: 0.3-0.8s for thin materials, 1.0-2.5s for thick plate
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rapid Travel Distance: {rapidDistance} mm
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={rapidDistance}
                onChange={(e) => setRapidDistance(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>100mm</span>
                <span>{rapidDistance}mm</span>
                <span>2000mm</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rapid Speed: {(rapidSpeed / 1000).toFixed(0)} m/min
              </label>
              <input
                type="range"
                min="20000"
                max="100000"
                step="5000"
                value={rapidSpeed}
                onChange={(e) => setRapidSpeed(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>20 m/min</span>
                <span>{(rapidSpeed / 1000).toFixed(0)} m/min</span>
                <span>100 m/min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Cycle Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {totalTimeMinutes < 1 
                  ? `${totalTimeSeconds.toFixed(1)}s`
                  : `${totalTimeMinutes.toFixed(2)} min`
                }
              </div>
              <p className="text-sm text-muted-foreground">
                {totalTimeMinutes >= 1 && `(${totalTimeSeconds.toFixed(1)} seconds)`}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Time Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Cutting Time</span>
                <div className="text-right">
                  <div className="text-lg font-semibold">{cuttingTimeSeconds.toFixed(1)}s</div>
                  <div className="text-xs text-muted-foreground">{cuttingPercent.toFixed(1)}%</div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Pierce Time</span>
                <div className="text-right">
                  <div className="text-lg font-semibold">{totalPierceTime.toFixed(1)}s</div>
                  <div className="text-xs text-muted-foreground">{piercePercent.toFixed(1)}%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Rapid Travel</span>
                <div className="text-right">
                  <div className="text-lg font-semibold">{rapidTimeSeconds.toFixed(1)}s</div>
                  <div className="text-xs text-muted-foreground">{rapidPercent.toFixed(1)}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Capacity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Parts per Hour</span>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {partsPerHour.toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-sm text-muted-foreground">Parts per Day (8hrs)</span>
                <span className="text-lg font-semibold">{Math.floor(partsPerDay)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Per Month (20 days)</span>
                <span className="text-lg font-semibold">{Math.floor(partsPerDay * 20)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Actual production may be lower due to setup, loading, and quality control time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Efficiency Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cutting Efficiency:</span>
                <span className="font-medium">{cuttingPercent.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Speed:</span>
                <span className="font-medium">
                  {((pathLength / totalTimeMinutes) / 1000).toFixed(2)} m/min
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pierce Overhead:</span>
                <span className="font-medium">{piercePercent.toFixed(1)}%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Information Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Time Optimization Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p>• <strong>Minimize pierces:</strong> Use common line cutting to reduce pierce count</p>
            <p>• <strong>Optimize nesting:</strong> Reduce rapid travel distance between parts</p>
            <p>• <strong>Pierce positioning:</strong> Pierce inside scrap areas or corners when possible</p>
            <p>• <strong>Lead-in length:</strong> Shorter lead-ins reduce cutting path length</p>
            <p>• <strong>Part sequencing:</strong> Cut nearest-neighbor to minimize rapids</p>
            <p>• <strong>Batch processing:</strong> Reduce per-part setup overhead</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Time Budget Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p><strong>High-efficiency cutting (80-90%):</strong></p>
            <p className="ml-4">Simple parts, few pierces, long continuous cuts</p>
            <p><strong>Medium efficiency (60-80%):</strong></p>
            <p className="ml-4">Complex parts, multiple holes, moderate nesting</p>
            <p><strong>Lower efficiency (40-60%):</strong></p>
            <p className="ml-4">Small parts, many pierces, complex geometries</p>
            <p className="mt-3"><strong>Note:</strong> Pierce time becomes dominant on thick materials (&gt;10mm) or parts with many small holes</p>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">Note:</strong> Calculations represent theoretical cutting time only. Actual production time includes additional factors: material loading/unloading (30-120s), part sorting, quality inspection, machine warmup, parameter adjustments, and operator breaks. Typical machine utilization rates are 60-75% in real production environments. For job quoting, add 25-40% time margin to calculated values.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NozzleSpec {
  id: string;
  name: string;
  type: 'single' | 'double' | 'highspeed';
  material: 'copper' | 'chrome_copper' | 'alloy';
  diameterMm: number;
  lifeHours: number;
  costUSD: number;
  applications: string[];
  pros: string[];
  cons: string[];
}

const NOZZLE_SPECS: NozzleSpec[] = [
  {
    id: 'single-copper-1.5',
    name: 'Single Layer Copper 1.5mm',
    type: 'single',
    material: 'copper',
    diameterMm: 1.5,
    lifeHours: 120,
    costUSD: 35,
    applications: ['General cutting', 'Carbon steel 3-8mm', 'Cost-sensitive production'],
    pros: ['Low cost', 'Widely available', 'Good thermal conductivity'],
    cons: ['Shorter lifespan', 'Less stable gas flow'],
  },
  {
    id: 'double-chrome-1.5',
    name: 'Double Layer Chrome-Copper 1.5mm',
    type: 'double',
    material: 'chrome_copper',
    diameterMm: 1.5,
    lifeHours: 234,
    costUSD: 85,
    applications: ['High-quality cutting', 'Stainless steel nitrogen', 'Production environments'],
    pros: ['Longer lifespan', 'Stable gas flow', 'Better cut quality'],
    cons: ['Higher initial cost', 'Requires proper maintenance'],
  },
  {
    id: 'highspeed-copper-1.0',
    name: 'High-Speed Copper 1.0mm',
    type: 'highspeed',
    material: 'copper',
    diameterMm: 1.0,
    lifeHours: 96,
    costUSD: 75,
    applications: ['Thin sheet cutting', 'High-speed production', 'Maximum throughput'],
    pros: ['Fastest cutting speed', 'Supersonic gas flow', 'Excellent for thin materials'],
    cons: ['Expensive', 'Shorter lifespan', 'Limited thickness range'],
  },
  {
    id: 'double-alloy-2.0',
    name: 'Double Layer Alloy 2.0mm',
    type: 'double',
    material: 'alloy',
    diameterMm: 2.0,
    lifeHours: 312,
    costUSD: 130,
    applications: ['Thick plate cutting', 'Extreme conditions', 'Long production runs'],
    pros: ['Longest lifespan', 'Excellent wear resistance', 'Handles high temperatures'],
    cons: ['Most expensive', 'Lower thermal conductivity', 'Overkill for thin materials'],
  },
  {
    id: 'single-chrome-2.0',
    name: 'Single Layer Chrome-Copper 2.0mm',
    type: 'single',
    material: 'chrome_copper',
    diameterMm: 2.0,
    lifeHours: 180,
    costUSD: 55,
    applications: ['Medium-thick plate', 'Carbon steel 8-15mm', 'Balanced performance'],
    pros: ['Good cost-performance ratio', 'Extended life vs copper', 'Suitable for thick materials'],
    cons: ['More expensive than copper', 'Single layer gas flow'],
  },
  {
    id: 'double-copper-1.2',
    name: 'Double Layer Copper 1.2mm',
    type: 'double',
    material: 'copper',
    diameterMm: 1.2,
    lifeHours: 156,
    costUSD: 55,
    applications: ['Thin stainless steel', 'Nitrogen cutting', 'Quality-focused'],
    pros: ['Stable gas flow', 'Affordable double layer', 'Good for stainless'],
    cons: ['Moderate lifespan', 'Copper wear rate'],
  },
];

export function NozzleComparisonMatrix() {
  const [selectedNozzles, setSelectedNozzles] = useState<string[]>([
    'single-copper-1.5',
    'double-chrome-1.5',
  ]);

  const toggleNozzle = (id: string) => {
    if (selectedNozzles.includes(id)) {
      if (selectedNozzles.length > 1) {
        setSelectedNozzles(selectedNozzles.filter((n) => n !== id));
      }
    } else {
      if (selectedNozzles.length < 4) {
        setSelectedNozzles([...selectedNozzles, id]);
      }
    }
  };

  const selectedSpecs = NOZZLE_SPECS.filter((spec) => selectedNozzles.includes(spec.id));

  const typeLabels = {
    single: 'Single Layer',
    double: 'Double Layer',
    highspeed: 'High-Speed',
  };

  const materialLabels = {
    copper: 'Copper',
    chrome_copper: 'Chrome-Plated Copper',
    alloy: 'Alloy',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nozzle Comparison Matrix</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Select 2-4 nozzles to compare specifications side-by-side
        </p>
      </CardHeader>
      <CardContent>
        {/* Nozzle Selection */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block">
            Available Nozzles (Select {selectedNozzles.length}/4)
          </label>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {NOZZLE_SPECS.map((spec) => (
              <button
                key={spec.id}
                onClick={() => toggleNozzle(spec.id)}
                disabled={!selectedNozzles.includes(spec.id) && selectedNozzles.length >= 4}
                className={`p-3 border-2 rounded-lg text-left text-sm transition-colors ${
                  selectedNozzles.includes(spec.id)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                } ${
                  !selectedNozzles.includes(spec.id) && selectedNozzles.length >= 4
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                <div className="font-semibold">{spec.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  ${spec.costUSD} • {spec.lifeHours}h life
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold bg-gray-100 dark:bg-gray-800 sticky left-0">
                  Specification
                </th>
                {selectedSpecs.map((spec) => (
                  <th
                    key={spec.id}
                    className="text-left py-3 px-4 font-semibold bg-blue-50 dark:bg-blue-950/20"
                  >
                    {spec.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Type
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    {typeLabels[spec.type]}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Material
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    {materialLabels[spec.material]}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Diameter
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4 font-semibold">
                    {spec.diameterMm} mm
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Typical Lifespan
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    <span className="font-semibold">{spec.lifeHours}</span> hours
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Cost (USD)
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    <span className="font-semibold">${spec.costUSD}</span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Cost per Hour
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    ${(spec.costUSD / spec.lifeHours).toFixed(2)}/hr
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Applications
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {spec.applications.map((app, idx) => (
                        <li key={idx}>• {app}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Advantages
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    <ul className="space-y-1 text-xs">
                      {spec.pros.map((pro, idx) => (
                        <li key={idx} className="text-green-600 dark:text-green-400">
                          ✓ {pro}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-4 font-medium bg-gray-50 dark:bg-gray-900 sticky left-0">
                  Disadvantages
                </td>
                {selectedSpecs.map((spec) => (
                  <td key={spec.id} className="py-3 px-4">
                    <ul className="space-y-1 text-xs">
                      {spec.cons.map((con, idx) => (
                        <li key={idx} className="text-red-600 dark:text-red-400">
                          ✗ {con}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-sm">
          <p className="font-semibold mb-2">💡 Comparison Insights</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • <strong>Best Value:</strong>{' '}
              {selectedSpecs.reduce((best, spec) =>
                spec.costUSD / spec.lifeHours < best.costUSD / best.lifeHours ? spec : best
              ).name}{' '}
              (lowest cost per hour)
            </li>
            <li>
              • <strong>Longest Life:</strong>{' '}
              {selectedSpecs.reduce((longest, spec) =>
                spec.lifeHours > longest.lifeHours ? spec : longest
              ).name}
            </li>
            <li>
              • <strong>Most Economical:</strong>{' '}
              {selectedSpecs.reduce((cheap, spec) => (spec.costUSD < cheap.costUSD ? spec : cheap))
                .name}{' '}
              (lowest initial cost)
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}


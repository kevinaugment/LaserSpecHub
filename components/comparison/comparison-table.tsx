'use client';

import type { LaserEquipment } from '@/types/equipment';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ComparisonTableProps {
  equipment: LaserEquipment[];
  onRemove: (id: number) => void;
}

interface SpecRow {
  label: string;
  getValue: (eq: LaserEquipment) => string | number | null | undefined;
  format?: (value: string | number | null | undefined) => string;
  highlight?: boolean;
}

export function ComparisonTable({ equipment, onRemove }: ComparisonTableProps) {
  if (equipment.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <svg
          className="mx-auto h-16 w-16 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Equipment Selected
        </h3>
        <p className="text-gray-600">
          Add equipment from the list above to start comparing
        </p>
      </div>
    );
  }

  const specRows: SpecRow[] = [
    {
      label: 'Brand & Model',
      getValue: (eq) => `${eq.brand} ${eq.model}`,
      highlight: true,
    },
    {
      label: 'Laser Type',
      getValue: (eq) => eq.laser_type,
    },
    {
      label: 'Power',
      getValue: (eq) => eq.power_kw,
      format: (val) => `${val} kW`,
    },
    {
      label: 'Work Area',
      getValue: (eq) =>
        eq.work_area_length && eq.work_area_width
          ? `${eq.work_area_length} × ${eq.work_area_width} mm`
          : null,
    },
    {
      label: 'Positioning Accuracy',
      getValue: (eq) => eq.positioning_accuracy,
      format: (val) => val ? `±${val} mm` : 'N/A',
    },
    {
      label: 'Repeat Accuracy',
      getValue: (eq) => eq.repeat_accuracy,
      format: (val) => val ? `±${val} mm` : 'N/A',
    },
    {
      label: 'Beam Quality (M²)',
      getValue: (eq) => eq.beam_quality,
    },
    {
      label: 'Wavelength',
      getValue: (eq) => eq.wavelength,
      format: (val) => val ? `${val} nm` : 'N/A',
    },
    {
      label: 'Control System',
      getValue: (eq) => eq.control_system,
    },
    {
      label: 'Cooling Type',
      getValue: (eq) => eq.cooling_type,
    },
    {
      label: 'Power Consumption',
      getValue: (eq) => eq.power_consumption,
      format: (val) => val ? `${val} kW` : 'N/A',
    },
    {
      label: 'Weight',
      getValue: (eq) => eq.weight,
      format: (val) => val ? `${val} kg` : 'N/A',
    },
    {
      label: 'Price Range',
      getValue: (eq) => eq.price_range,
      format: (val) => val ? `$${(val as string).replace('-', ' - $')}` : 'N/A',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="sticky left-0 z-10 bg-gray-50 p-4 text-left font-semibold text-gray-900 border-b-2 border-gray-200 min-w-[200px]">
              Specification
            </th>
            {equipment.map((eq) => (
              <th
                key={eq.id}
                className="p-4 text-center border-b-2 border-gray-200 min-w-[200px]"
              >
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">
                    {eq.brand}
                  </div>
                  <div className="text-sm font-normal text-gray-600">
                    {eq.model}
                  </div>
                  <Badge variant="primary" size="sm">
                    {eq.laser_type}
                  </Badge>
                  <div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemove(eq.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specRows.map((row, idx) => {
            const values = equipment.map((eq) => row.getValue(eq));
            const uniqueValues = new Set(values.filter((v) => v != null));
            const hasDifference = uniqueValues.size > 1;

            return (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="sticky left-0 z-10 p-4 font-medium text-gray-900 border-b border-gray-200 bg-inherit">
                  {row.label}
                  {hasDifference && (
                    <span className="ml-2 text-xs text-orange-600">●</span>
                  )}
                </td>
                {equipment.map((eq) => {
                  const value = row.getValue(eq);
                  const displayValue = row.format
                    ? row.format(value)
                    : value?.toString() || 'N/A';

                  return (
                    <td
                      key={eq.id}
                      className={`p-4 text-center border-b border-gray-200 ${
                        hasDifference && value != null
                          ? 'bg-yellow-50'
                          : ''
                      }`}
                    >
                      <div className={row.highlight ? 'font-semibold' : ''}>
                        {displayValue}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
        <span className="text-orange-600">●</span>
        <span>Differences highlighted in yellow</span>
      </div>
    </div>
  );
}

































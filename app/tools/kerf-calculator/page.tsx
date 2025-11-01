import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import KerfCalculatorForm from '@/components/calculators/kerf-calculator-form';

export const metadata: Metadata = {
  title: 'Laser Cutting Kerf Calculator - LaserSpecHub',
  description:
    'Online laser cutting kerf width calculator. Estimate kerf width based on laser power, material type, thickness, nozzle diameter and cutting speed, with compensation and nesting recommendations.',
  alternates: {
    canonical: 'https://laserspechub.com/tools/kerf-calculator',
  },
  openGraph: {
    title: 'Laser Cutting Kerf Calculator - Accurate Kerf Width Estimation',
    description:
      'Input power, material, thickness, nozzle diameter and speed to get kerf estimation, compensation and nesting suggestions.',
    type: 'website',
    url: 'https://laserspechub.com/tools/kerf-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Laser Cutting Kerf Calculator',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Laser Cutting Kerf Calculator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Estimate kerf width based on input process conditions, with compensation and nesting recommendations. Input ranges cover common metal materials and thickness ranges.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <KerfCalculatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/cost-estimator" className="underline">
                Cost Estimator
              </Link>
            </div>
            <div>
              <Link href="/tools/power-calculator" className="underline">
                Laser Power Calculator
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Reading</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/nesting-optimization-guide" className="underline">
                Nesting Optimization Guide
              </Link>
            </div>
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline">
                Material Thickness Parameters Quick Reference
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Note: This tool is for estimation purposes. Specific parameters should be determined in combination with manufacturer technical manuals, on-site test cuts and quality standards.
      </p>
    </div>
  );
}

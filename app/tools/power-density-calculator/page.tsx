import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import PowerDensityCalculatorForm from '@/components/calculators/power-density-calculator-form';

export const metadata: Metadata = {
  title: 'Laser Power Density Calculator - LaserSpecHub',
  description:
    'Calculate power density (W/mm²) based on power and focused beam diameter, providing process tips for cutting/welding/marking and depth of focus estimation.',
  alternates: { canonical: 'https://laserspechub.com/tools/power-density-calculator' },
  openGraph: {
    title: 'Laser Power Density Calculator',
    description:
      'Input power and spot diameter to get power density and process tips for cutting/welding/marking applications.',
    type: 'website',
    url: 'https://laserspechub.com/tools/power-density-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Laser Power Density Calculator',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Laser Power Density Calculator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Estimate power density (W/mm²) based on power and focused spot size, with process applicability tips and depth of focus estimation.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <PowerDensityCalculatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-calculator" className="underline">
                Laser Power Calculator
              </Link>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline">
                Kerf Width Calculator
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
              <Link href="/guides/beam-quality-guide" className="underline">
                Laser Beam Quality M² Factor Guide
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

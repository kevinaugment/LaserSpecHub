import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import ChillerCalculatorForm from '@/components/calculators/chiller-calculator-form';

export const metadata: Metadata = {
  title: 'Chiller Capacity Calculator - LaserSpecHub',
  description:
    'Estimate required cooling capacity and water flow rate based on laser type, power, ambient temperature and duty cycle to assist with chiller sizing.',
  alternates: { canonical: 'https://laserspechub.com/tools/chiller-calculator' },
  openGraph: {
    title: 'Chiller Capacity Calculator',
    description: 'Input operating conditions to get required cooling capacity (kW/kcal·h) and recommended water flow rate (L/min).',
    type: 'website',
    url: 'https://laserspechub.com/tools/chiller-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Chiller Capacity Calculator',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Chiller Capacity Calculator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Estimate required cooling capacity and water flow rate by laser type and operating conditions for chiller capacity sizing reference.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <ChillerCalculatorForm />
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
              <Link href="/tools/power-density-calculator" className="underline">
                Power Density Calculator
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
              <Link href="/guides/safety-operations" className="underline">
                Laser Safety Operations Guide
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

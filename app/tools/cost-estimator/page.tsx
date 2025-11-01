import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import CostEstimatorForm from '@/components/calculators/cost-estimator-form';

export const metadata: Metadata = {
  title: 'Laser Cutting Cost Estimator - LaserSpecHub',
  description:
    'Calculate material, electricity, gas, depreciation, and labor costs based on cutting length, material, thickness, power, electricity rate and gas type.',
  alternates: { canonical: 'https://laserspechub.com/tools/cost-estimator' },
  openGraph: {
    title: 'Laser Cutting Cost Estimator',
    description: 'Material, electricity, gas, depreciation, and labor cost breakdown with total cost estimation.',
    type: 'website',
    url: 'https://laserspechub.com/tools/cost-estimator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Laser Cutting Cost Estimator',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Laser Cutting Cost Estimator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Calculate material, electricity, gas, depreciation and labor costs by category to assist with quotations and process optimization.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <CostEstimatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/kerf-calculator" className="underline">
                Kerf Width Calculator
              </Link>
            </div>
            <div>
              <Link href="/tools/power-density-calculator" className="underline">
                Power Density Calculator
              </Link>
            </div>
            <div>
              <Link href="/tools/chiller-calculator" className="underline">
                Chiller Capacity Calculator
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
              <Link href="/guides/process-optimization-guide" className="underline">
                Process Optimization Guide
              </Link>
            </div>
            <div>
              <Link href="/guides/nesting-optimization-guide" className="underline">
                Nesting Optimization Guide
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}









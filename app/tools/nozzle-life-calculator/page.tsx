import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import NozzleLifeCalculatorForm from '@/components/calculators/nozzle-life-calculator-form';

export const metadata: Metadata = {
  title: 'Nozzle Life Calculator - LaserSpecHub',
  description:
    'Online laser cutting nozzle life prediction calculator. Based on nozzle material, type, cutting material, power and other parameters, predict nozzle service life, replacement cycle and monthly costs, providing suggestions to extend lifespan.',
  keywords: ['nozzle life', 'nozzle life calculator', 'nozzle replacement cycle', 'laser cutting maintenance cost'],
  alternates: {
    canonical: 'https://laserspechub.com/tools/nozzle-life-calculator',
  },
  openGraph: {
    title: 'Nozzle Life Calculator - Accurate Replacement Cycle Prediction',
    description:
      'Enter nozzle configuration and cutting parameters to get service life prediction, cost analysis and lifespan extension suggestions.',
    type: 'website',
    url: 'https://laserspechub.com/tools/nozzle-life-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Laser Cutting Nozzle Life Calculator',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
  description: 'Predict laser cutting nozzle service life and optimize maintenance costs',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Nozzle Life Calculator</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Based on nozzle material, cutting conditions and work intensity, predict nozzle service life and replacement cycle to help optimize maintenance planning and control costs.
        </p>
      </div>

      <div className="mb-8">
        <NozzleLifeCalculatorForm />
      </div>

      {/* About Nozzle Life */}
      <div className="mt-10 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Main Factors Affecting Nozzle Life</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h3 className="font-medium mb-1">1. Nozzle Material</h3>
              <p className="text-muted-foreground">
                • <strong>Pure Copper Nozzle</strong>: Good thermal conductivity, low cost, base life around 120 hours<br />
                • <strong>Chrome-Plated Copper Nozzle</strong>: 50% better wear resistance, life around 180 hours, suitable for high-intensity production<br />
                • <strong>Alloy Nozzle</strong>: Most durable, life up to 240 hours, but higher cost
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">2. Cutting Conditions</h3>
              <p className="text-muted-foreground">
                • <strong>Power</strong>: High power increases thermal load, accelerates wear<br />
                • <strong>Material Thickness</strong>: Thick plate cutting takes longer, nozzle exposed to high temperature environment longer<br />
                • <strong>Assist Gas</strong>: Oxygen cutting temperature high, nitrogen relatively mild
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">3. Main Causes of Nozzle Damage</h3>
              <p className="text-muted-foreground">
                • <strong>Collision Damage (50%)</strong>: Collision with workpiece or cutting table causes deformation<br />
                • <strong>Spatter Adhesion (30%)</strong>: Metal spatter adheres to nozzle inner wall<br />
                • <strong>Normal Wear (20%)</strong>: Long-term high temperature oxidation and airflow erosion
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Related Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <Link href="/tools/cost-estimator" className="underline hover:text-primary">
                  Laser Cutting Cost Estimator
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">Calculate complete operating costs</p>
              </div>
              <div>
                <Link href="/tools/chiller-calculator" className="underline hover:text-primary">
                  Chiller Capacity Calculator
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">Supporting equipment selection</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <Link href="/guides/nozzle-selection-guide" className="underline hover:text-primary">
                  Laser Cutting Nozzle Selection Guide
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">How to choose the right nozzle</p>
              </div>
              <div>
                <Link href="/guides/maintenance-schedule" className="underline hover:text-primary">
                  Laser Equipment Maintenance Schedule
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">Complete maintenance plan</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Practical Tips to Extend Nozzle Life</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ <strong>Regular Cleaning</strong>: Check nozzle inner wall daily, remove spatter adhesions</li>
              <li>✓ <strong>Avoid Collisions</strong>: Use capacitive height tracking system, set reasonable safety height</li>
              <li>✓ <strong>Maintain Concentricity</strong>: Regularly check laser beam and nozzle concentricity, deviation causes local overheating</li>
              <li>✓ <strong>Choose Right Gas</strong>: Prioritize nitrogen over oxygen for stainless steel cutting, can extend life by 30%+</li>
              <li>✓ <strong>Backup Nozzles</strong>: Keep 2-3 spare nozzles to avoid downtime due to nozzle damage</li>
              <li>✓ <strong>Timely Replacement</strong>: Replace promptly when cutting quality declines to avoid affecting product quality</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Data Disclaimer: This calculator is based on technical manuals from mainstream nozzle manufacturers such as Precitec and Raytools, as well as industry practical experience.
        Actual lifespan is affected by equipment maintenance, operating habits, environmental conditions and other factors. Results are for reference only.
        Data updated: October 31, 2025.
      </p>
    </div>
  );
}


import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Technical Specifications Explained',
  description:
    'Understand key laser cutting technical specifications including beam quality, wavelength, positioning accuracy, and their impact on cutting performance.',
  path: '/guides/tech-explain',
  keywords: [
    'laser specifications',
    'beam quality',
    'laser wavelength',
    'positioning accuracy',
    'technical terms',
  ],
});

export default function TechExplainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Technical Specifications Explained
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Demystifying the technical jargon. This guide explains key laser specifications 
          and their real-world impact on cutting performance.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beam Quality (M²)</h2>
          <p className="text-gray-700 mb-4">
            The M² (M-squared) value indicates how close the laser beam is to a perfect Gaussian beam. 
            Lower values mean better beam quality.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>M² = 1.0:</strong> Perfect Gaussian beam (theoretical ideal)</li>
            <li><strong>M² = 1.1-2.0:</strong> Excellent quality (typical for fiber lasers)</li>
            <li><strong>M² = 2.0-3.0:</strong> Good quality (typical for CO2 lasers)</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Impact:</strong> Better beam quality (lower M²) enables finer details, 
              smaller focus spot, and higher precision cutting.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wavelength</h2>
          <p className="text-gray-700 mb-4">
            The wavelength of the laser beam determines which materials it can cut effectively:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>1.06 μm (Fiber):</strong> Highly absorbed by metals, poor for organics</li>
            <li><strong>10.6 μm (CO2):</strong> Absorbed by organics, less effective for metals</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Positioning vs Repeat Accuracy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Positioning Accuracy</h3>
              <p className="text-gray-700">
                How accurately the machine can move to a commanded position. 
                Affects how well the cut matches the design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repeat Accuracy</h3>
              <p className="text-gray-700">
                How consistently the machine returns to the same position. 
                Critical for multi-pass operations and consistency across parts.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Power Consumption vs Laser Power</h2>
          <p className="text-gray-700 mb-4">
            Don't confuse total power consumption with laser output power:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Laser Output Power:</strong> The actual cutting power (e.g., 6kW)</li>
            <li><strong>Total Power Consumption:</strong> All system power including cooling, motors, control (e.g., 45kW)</li>
            <li><strong>Efficiency:</strong> Ratio of output to input (Fiber: 25-30%, CO2: 10-15%)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting Speed Parameters</h2>
          <p className="text-gray-700 mb-4">
            Cutting speed specifications are usually given for specific conditions:
          </p>
          <Card variant="bordered" className="not-prose">
            <CardContent className="p-6">
              <div className="text-sm space-y-2 text-gray-700">
                <p><strong>Example:</strong> &quot;Steel 10mm @ 2.8 m/min&quot;</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Material: Mild steel</li>
                  <li>Thickness: 10mm</li>
                  <li>Speed: 2.8 meters per minute</li>
                  <li>Conditions: Oxygen assist gas, standard quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Control Systems & Integration</h2>
          <p className="text-gray-700 mb-4">
            Control system capability directly impacts cut quality, speed optimization, and ease of use. Advanced controllers can
            dynamically adjust parameters (focus, gas pressure, duty cycle) based on sensor feedback. Vendors like
            <a href="https://opmtlaser.com/technology/cnc-integration" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser</a>
            provide integrated CNC solutions and parameter libraries for common materials, reducing setup time and improving consistency.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Verify availability of parameter libraries and auto-focus routines</li>
            <li>Check compatibility with nesting/CAM software and post-processors</li>
            <li>Confirm support for adaptive cutting modes and edge-quality profiles</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

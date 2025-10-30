import type { Metadata } from 'next';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { PowerCalculatorForm } from '@/components/calculators/power-calculator-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Power Calculator',
  description:
    'Calculate the required laser power for your cutting applications. Input material type, thickness, and cutting speed to get accurate power recommendations.',
  path: '/tools/power-calculator',
  keywords: [
    'laser power calculator',
    'cutting power requirements',
    'laser wattage calculator',
    'material cutting power',
    'fiber laser power',
    'CO2 laser power',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Required Laser Power',
  description: 'Step-by-step guide to calculate the laser power needed for your cutting application',
  steps: [
    {
      name: 'Select Material',
      text: 'Choose your material from metals (steel, aluminum, copper) or non-metals (acrylic, wood, MDF)',
    },
    {
      name: 'Enter Cutting Parameters',
      text: 'Input material thickness, desired cutting speed, and quality level',
    },
    {
      name: 'Review Results',
      text: 'Get recommended power range, laser type, and suitable equipment options',
    },
  ],
});

export default function PowerCalculatorPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Laser Power Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate the required laser power based on material type, thickness, and cutting requirements.
            Get instant recommendations for laser type and suitable equipment.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <PowerCalculatorForm />
        </div>

        {/* Info Section */}
        <div className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
            <p>
              Our laser power calculator uses material properties and cutting parameters to determine
              the optimal laser power for your application. The calculation considers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Material Properties:</strong> Density, thermal conductivity, melting point, and vaporization energy</li>
              <li><strong>Cutting Parameters:</strong> Material thickness, cutting speed, and desired quality</li>
              <li><strong>Laser Efficiency:</strong> Different laser types have varying efficiency rates</li>
              <li><strong>Quality Factor:</strong> Higher quality cuts require more power</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> Results are estimates based on typical conditions. Actual power
              requirements may vary based on specific equipment, environmental factors, and assist gas usage.
              Always consult with equipment manufacturers for final specifications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

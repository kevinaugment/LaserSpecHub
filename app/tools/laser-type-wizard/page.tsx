import type { Metadata } from 'next';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { LaserTypeWizardForm } from '@/components/calculators/laser-type-wizard-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Type Selection Wizard',
  description:
    'Get personalized laser type recommendations. Our guided wizard helps you choose between CO2, Fiber, and Solid-state lasers based on your specific requirements.',
  path: '/tools/laser-type-wizard',
  keywords: [
    'laser type selection',
    'CO2 vs fiber laser',
    'laser selection wizard',
    'choosing laser type',
    'laser comparison',
    'fiber vs CO2',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Choose the Right Laser Type',
  description: 'Find the best laser technology for your manufacturing needs',
  steps: [
    {
      name: 'Answer Material Questions',
      text: 'Specify which materials you plan to cut (metals, non-metals, or both)',
    },
    {
      name: 'Define Requirements',
      text: 'Provide details about thickness, volume, precision, and budget requirements',
    },
    {
      name: 'Review Recommendations',
      text: 'Get personalized laser type recommendation with detailed pros, cons, and next steps',
    },
  ],
});

export default function LaserTypeWizardPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Laser Type Selection Wizard
          </h1>
          <p className="text-lg text-gray-600">
            Answer a few questions to get personalized recommendations for CO2, Fiber, or Solid-state laser types.
            Our wizard analyzes your requirements to find the perfect match.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <LaserTypeWizardForm />
        </div>

        {/* Info Section */}
        <div className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Laser Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">Fiber Laser</h3>
              <p className="text-sm text-gray-700 mb-3">
                Best for cutting metals with high efficiency and speed. Low maintenance, long lifespan, and excellent precision.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Ideal for:</strong> Steel, stainless, aluminum, brass
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">CO2 Laser</h3>
              <p className="text-sm text-gray-700 mb-3">
                Versatile for non-metals and some metals. Lower initial cost, mature technology, and wide material compatibility.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Ideal for:</strong> Acrylic, wood, fabric, leather, thin metals
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-3">Solid-State Laser</h3>
              <p className="text-sm text-gray-700 mb-3">
                High-power applications for thick metals. Excellent beam quality and precision for demanding industrial use.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Ideal for:</strong> Thick metals, aerospace, heavy industry
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

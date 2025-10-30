import type { Metadata } from 'next';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { WorkspaceMatcherForm } from '@/components/calculators/workspace-matcher-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Workspace Size Matcher',
  description:
    'Find the optimal workspace size for your laser cutting needs. Match your workpiece dimensions with equipment specifications and optimize material usage.',
  path: '/tools/workspace-matcher',
  keywords: [
    'workspace size calculator',
    'work area matching',
    'laser table size',
    'cutting bed dimensions',
    'nesting calculator',
    'material utilization',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Match Workspace Size for Laser Cutting',
  description: 'Find the optimal workspace size based on your part dimensions and quantity',
  steps: [
    {
      name: 'Enter Part Dimensions',
      text: 'Input your workpiece length, width, quantity needed, and spacing requirements',
    },
    {
      name: 'Configure Options',
      text: 'Select unit system (metric/imperial) and whether part rotation is allowed',
    },
    {
      name: 'Review Matches',
      text: 'Get ranked workspace options with utilization rates, layouts, and material estimates',
    },
  ],
});

export default function WorkspaceMatcherPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Workspace Size Matcher
          </h1>
          <p className="text-lg text-gray-600">
            Match your workpiece dimensions with optimal laser cutting equipment workspace size.
            Maximize material utilization and minimize waste.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <WorkspaceMatcherForm />
        </div>

        {/* Info Section */}
        <div className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Workspace Optimization</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
            <p>
              Our workspace matcher helps you select the optimal cutting table size by analyzing:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Layout Efficiency:</strong> Calculates how many parts fit per sheet in optimal arrangement</li>
              <li><strong>Material Utilization:</strong> Maximizes usage and minimizes wastage</li>
              <li><strong>Rotation Analysis:</strong> Tests both normal and 90° orientations for best nesting</li>
              <li><strong>Batch Planning:</strong> Determines sheets needed for your production quantity</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-sm text-blue-900">
                <strong>Pro Tip:</strong> Higher utilization (75%+) means less material waste and better cost efficiency. Consider allowing rotation for improved nesting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import {
  ISO_9013_QUALITY_GRADES,
  MEASUREMENT_METHODS,
  EDGE_QUALITY_LAST_UPDATE,
  DATA_DISCLAIMER,
  ROUGHNESS_COMPARISON,
  THICKNESS_TOLERANCES,
  MATERIAL_QUALITY_MATRIX,
  INTERNATIONAL_STANDARDS,
  INDUSTRY_ACCEPTANCE,
  WELDING_EDGE_REQUIREMENTS,
  QUALITY_INSPECTION_STEPS,
  VISUAL_DEFECTS
} from '@/lib/data/cheatsheets/edge-quality-data';
import { EdgeQualityGrades } from '@/components/cheatsheets/edge-quality-grades';
import { EdgeProfileComparison } from '@/components/cheatsheets/edge-profile-comparison';
import { EdgeDefectVisualization } from '@/components/cheatsheets/edge-defect-visualization';
import { RoughnessComparison } from '@/components/cheatsheets/roughness-comparison';
import { ThicknessQualityChart } from '@/components/cheatsheets/thickness-quality-chart';
import { StandardsComparisonTable } from '@/components/cheatsheets/standards-comparison-table';
import { MaterialQualityMatrix } from '@/components/cheatsheets/material-quality-matrix';
import { IndustryAcceptanceCriteria } from '@/components/cheatsheets/industry-acceptance-criteria';
import { WeldingEdgeRequirements } from '@/components/cheatsheets/welding-edge-requirements';
import { QualityInspectionChecklist } from '@/components/cheatsheets/quality-inspection-checklist';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Edge Quality Standards - ISO 9013 Guide | LaserSpecHub',
  description: 'Complete guide to laser cutting edge quality standards based on ISO 9013. Compare Grade 1-4 quality levels, defects, and improvement methods for optimal cutting results.',
  keywords: [
    'laser cutting edge quality',
    'ISO 9013 standard',
    'cutting quality grades',
    'edge roughness',
    'perpendicularity tolerance',
    'dross formation',
    'laser cut quality',
    'surface finish',
    'Rz5 roughness',
    'edge inspection',
    'welding edge preparation',
    'AWS D1.1',
    'EN 1090'
  ],
  openGraph: {
    title: 'Laser Cutting Edge Quality Standards | LaserSpecHub',
    description: 'ISO 9013 quality grades and defect troubleshooting guide',
    type: 'article',
  },
};

export default function EdgeQualityStandardsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutting Edge Quality Standards and Classification',
    description: 'Comprehensive guide to ISO 9013 edge quality standards for laser cutting',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: EDGE_QUALITY_LAST_UPDATE,
    dateModified: EDGE_QUALITY_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Cutting Edge Quality Standards
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Understand and achieve optimal edge quality with ISO 9013 standards. Compare quality grades, 
              identify defects, and learn improvement methods for laser cutting excellence.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                ISO 9013:2017
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                4 Quality Grades
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Defect Solutions
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {EDGE_QUALITY_LAST_UPDATE}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📐 Understanding Edge Quality
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Edge quality in laser cutting is defined by multiple parameters per ISO 9013:2017 international standard. 
                Each quality grade (1-4) specifies tolerance ranges for perpendicularity, roughness, dross, and other characteristics.
              </p>
              <div className="grid md:grid-cols-4 gap-4 my-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Perpendicularity</h3>
                  <p className="text-sm text-gray-700">
                    Measures how vertical the cut edge is. Critical for welding and assembly. 
                    Grade 1: ±0.05mm, Grade 4: ±0.50mm.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Roughness (Ra)</h3>
                  <p className="text-sm text-gray-700">
                    Surface texture measurement in micrometers. Lower = smoother. 
                    Grade 1: 1.6-3.2μm, Grade 4: 12.5-25μm.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Dross</h3>
                  <p className="text-sm text-gray-700">
                    Molten material re-solidified on bottom edge. Unacceptable in Grade 1, 
                    moderate amounts OK in Grade 4.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">HAZ</h3>
                  <p className="text-sm text-gray-700">
                    Heat Affected Zone - material property changes from thermal input. 
                    Minimize for structural integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              ISO 9013 Quality Classification
            </h2>
            <EdgeQualityGrades grades={ISO_9013_QUALITY_GRADES} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📐 Edge Profile Comparison
            </h2>
            <p className="text-gray-700 mb-6">
              Visual cross-sectional comparison of edge profiles across quality grades. 
              Click on any grade to see detailed characteristics.
            </p>
            <EdgeProfileComparison 
              grades={ISO_9013_QUALITY_GRADES.map(g => ({
                gradeNumber: g.gradeNumber,
                grade: g.grade,
                perpendicularity: g.characteristics.perpendicularity,
                roughness: g.characteristics.roughnessRz5,
                dross: g.characteristics.dross
              }))}
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📊 Understanding Roughness Measurements (Ra vs Rz5)
            </h2>
            <p className="text-gray-700 mb-6">
              ISO 9013:2017 uses <strong>Rz5 (Mean Height of Profile)</strong> as the primary roughness metric 
              for thermal cutting quality classification. Understanding the difference between Ra and Rz5 is 
              critical for proper quality specification.
            </p>
            <RoughnessComparison data={ROUGHNESS_COMPARISON} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📏 Thickness-Dependent Tolerances
            </h2>
            <p className="text-gray-700 mb-6">
              Perpendicularity tolerances vary by material thickness per ISO 9013:2017. 
              Thicker materials require looser tolerances due to increased beam divergence and heat accumulation.
            </p>
            <ThicknessQualityChart data={THICKNESS_TOLERANCES} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔬 Material-Specific Quality Guidelines
            </h2>
            <p className="text-gray-700 mb-6">
              Different materials achieve different quality grades with varying difficulty. 
              This matrix shows which grades are easily achievable for common laser cutting materials.
            </p>
            <MaterialQualityMatrix materials={MATERIAL_QUALITY_MATRIX} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🌍 International Standards Comparison
            </h2>
            <p className="text-gray-700 mb-6">
              Edge quality standards vary globally. Compare ISO 9013, AWS D1.1, EN 1090, and JIS B0417 
              to understand regional requirements and grade equivalents.
            </p>
            <StandardsComparisonTable standards={INTERNATIONAL_STANDARDS} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🏭 Industry-Specific Acceptance Criteria
            </h2>
            <p className="text-gray-700 mb-6">
              Quality requirements vary significantly by industry sector. Aerospace demands Grade 1, 
              while construction typically accepts Grade 3. Understand typical and minimum grades by application.
            </p>
            <IndustryAcceptanceCriteria industries={INDUSTRY_ACCEPTANCE} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔧 Edge Preparation for Welding
            </h2>
            <p className="text-gray-700 mb-6">
              Welding process requirements dictate minimum edge quality. TIG welding requires Grade 1-2, 
              while stick welding accepts Grade 3-4. Match cutting quality to your welding process.
            </p>
            <WeldingEdgeRequirements weldingProcesses={WELDING_EDGE_REQUIREMENTS} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔍 Visual Defect Identification Guide
            </h2>
            <p className="text-gray-700 mb-6">
              Identify common edge defects with visual diagrams. Click on any defect to see causes and solutions.
            </p>
            <EdgeDefectVisualization defects={VISUAL_DEFECTS} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ✅ Quality Inspection Checklist
            </h2>
            <p className="text-gray-700 mb-6">
              Step-by-step quality verification process. Use this interactive checklist to ensure 
              comprehensive edge quality inspection per ISO 9013:2017 requirements.
            </p>
            <QualityInspectionChecklist steps={QUALITY_INSPECTION_STEPS} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              📏 Quality Measurement Methods
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Standard</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {MEASUREMENT_METHODS.map((method, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{method.parameter}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.method}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.standard}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💡 Quality Optimization Tips
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Match Quality to Application</h3>
                <p className="text-sm text-gray-700">
                  Don't over-specify. Grade 3 is sufficient for 80% of applications. Reserve Grade 1 for precision 
                  parts where tolerances matter. Using Grade 1 for everything increases costs 80% unnecessarily.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Optimize Gas Selection</h3>
                <p className="text-sm text-gray-700">
                  Nitrogen produces Grade 1-2 quality on stainless steel but costs 3x more than oxygen. 
                  For carbon steel structural parts (Grade 3 acceptable), oxygen saves 60% on gas costs.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Monitor and Control Variables</h3>
                <p className="text-sm text-gray-700">
                  Quality consistency requires controlling: material flatness, lens cleanliness, gas pressure, 
                  nozzle condition, and focus position. Check these daily for Grade 1-2 work.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Document Your Parameters</h3>
                <p className="text-sm text-gray-700">
                  Create a parameter library for each material/thickness/grade combination. Once optimized, 
                  document speeds, powers, gas settings. Reduces setup time and ensures repeatability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              📊 Quality vs Cost Trade-offs
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Grade</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Speed</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Gas Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Best Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Grade 1</td>
                    <td className="px-4 py-3 text-sm text-red-600">Slow (-50%)</td>
                    <td className="px-4 py-3 text-sm text-red-600">High N₂</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">1.8x</td>
                    <td className="px-4 py-3 text-sm">Critical precision parts only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Grade 2</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Medium (-30%)</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Medium N₂</td>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-600">1.3x</td>
                    <td className="px-4 py-3 text-sm">High-quality production</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Grade 3</td>
                    <td className="px-4 py-3 text-sm text-green-600">Fast (baseline)</td>
                    <td className="px-4 py-3 text-sm text-green-600">Low O₂/Air</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">1.0x</td>
                    <td className="px-4 py-3 text-sm">Standard production (most common)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Grade 4</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Fast (+20%)</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Low</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">0.6x</td>
                    <td className="px-4 py-3 text-sm">Rough blanking, non-critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Resources & Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/guides/assist-gas-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Assist Gas Selection</h3>
                <p className="text-sm text-gray-600">Gas choice affects quality significantly - nitrogen for Grade 1-2</p>
              </a>
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Optimize speed-quality balance for different grades</p>
              </a>
              <a 
                href="/guides/lens-specifications"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Lens Specifications</h3>
                <p className="text-sm text-gray-600">Lens choice impacts edge quality and kerf width</p>
              </a>
              <a 
                href="/guides/nozzle-selection-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Nozzle Selection Guide</h3>
                <p className="text-sm text-gray-600">Nozzle type and condition affect dross formation</p>
              </a>
              <a 
                href="/guides/focus-position-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Focus Position Guide</h3>
                <p className="text-sm text-gray-600">Focus position critical for perpendicularity</p>
              </a>
              <a 
                href="/guides/material-thickness-parameters"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Material & Thickness Parameters</h3>
                <p className="text-sm text-gray-600">Recommended parameters by material and thickness</p>
              </a>
              <a 
                href="/guides/process-optimization-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Process Optimization</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to improving cut quality</p>
              </a>
              <a 
                href="/guides/troubleshooting-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Troubleshooting Guide</h3>
                <p className="text-sm text-gray-600">Diagnose and fix edge quality problems</p>
              </a>
              <a 
                href="/tools/cost-estimator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cost Calculator</h3>
                <p className="text-sm text-gray-600">Calculate cost impact of different quality grades</p>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}








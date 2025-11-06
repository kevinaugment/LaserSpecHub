import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema, generateFAQSchema, generateCalculatorSchema } from '@/lib/utils/metadata';
import { WorkspaceMatcherForm } from '@/components/calculators/workspace-matcher-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Workspace Size Matcher 2025 - Find Optimal Cutting Table Dimensions',
  description:
    'Professional workspace size matcher 2025 for laser cutting. Match part dimensions with optimal cutting table size, calculate material utilization, nesting layouts, and sheet requirements. Maximize efficiency and minimize waste.',
  path: '/tools/workspace-matcher',
  keywords: [
    'workspace size calculator',
    'workspace matcher 2025',
    'laser table size',
    'laser table size 2025',
    'cutting bed dimensions',
    'work area matcher',
    'nesting calculator',
    'material utilization calculator',
    'sheet layout optimizer',
    'laser cutting capacity',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Match Optimal Workspace Size for Laser Cutting',
  description: 'Find the best cutting table size based on part dimensions, quantity, and material utilization goals',
  steps: [
    {
      name: 'Enter Part Specifications',
      text: 'Input part length, width, production quantity, and minimum spacing between parts for safe cutting',
    },
    {
      name: 'Configure Nesting Options',
      text: 'Select unit system (metric or imperial) and enable part rotation for optimized nesting layouts',
    },
    {
      name: 'Review Workspace Recommendations',
      text: 'Get ranked workspace sizes with utilization rates, parts per sheet, layout visualizations, and material requirements',
    },
  ],
});

const calculatorSchema = generateCalculatorSchema({
  name: 'Laser Workspace Size Matcher',
  description: 'Match part dimensions with optimal laser cutting table size. Calculate material utilization, nesting layouts, and sheet requirements for maximum efficiency.',
  url: '/tools/workspace-matcher',
  input: [
    { name: 'Part Length', description: 'Length of the workpiece in millimeters (mm) or inches, typically 10-10000mm' },
    { name: 'Part Width', description: 'Width of the workpiece in millimeters (mm) or inches, typically 10-10000mm' },
    { name: 'Quantity', description: 'Number of parts needed for production, typically 1-10000' },
    { name: 'Spacing', description: 'Minimum spacing between parts in millimeters (mm) or inches, typically 2-100mm' },
    { name: 'Rotation Allowed', description: 'Whether parts can be rotated 90 degrees for better nesting optimization' },
  ],
  output: [
    { name: 'Recommended Workspace', description: 'Optimal workspace size matching the part dimensions and quantity' },
    { name: 'Material Utilization', description: 'Percentage of workspace area effectively used for parts (0-100%)' },
    { name: 'Layout Configuration', description: 'Number of parts per row and number of rows for optimal nesting' },
    { name: 'Material Requirements', description: 'Total sheets needed, material area, and waste calculation' },
  ],
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web Browser',
  softwareVersion: '2025',
});

const faqs = [
  {
    question: 'What is a workspace matcher and why is it important for laser cutting?',
    answer: 'A workspace matcher is a tool that helps you find the optimal laser cutting table size based on your part dimensions and production requirements. It\'s crucial because choosing the right workspace size directly impacts material utilization, production efficiency, and cost. A properly matched workspace ensures you can fit the maximum number of parts per sheet, minimize material waste, and reduce sheet changes during production. This tool calculates utilization rates, nesting layouts, and material requirements to help you make informed decisions about equipment selection and production planning.',
  },
  {
    question: 'How do I choose the right workspace size for my parts?',
    answer: 'The workspace matcher evaluates multiple factors to recommend the best size: material utilization percentage (aim for 60-90%), ability to fit your required quantity per sheet, match score (0-100), and material waste percentage. Generally, choose a workspace that fits your required quantity with minimal excess (less than 30% extra parts), achieves at least 60% utilization, and matches standard sheet sizes available from your material suppliers. The calculator ranks all options by match score, with the optimal recommendation highlighted. Consider your typical production quantities and material availability when making the final decision.',
  },
  {
    question: 'What material utilization percentage is considered good?',
    answer: 'Material utilization percentages are categorized as follows: Excellent (75-90%) indicates optimal nesting with minimal waste, achievable with part rotation and careful planning. Good (60-75%) is acceptable for most applications and may benefit from rotation or workspace size adjustment. Poor (<60%) shows significant waste and requires reviewing workspace size, part orientation, or batch quantities. The workspace matcher calculates utilization based on actual part area versus total workspace area, accounting for spacing between parts. Higher utilization reduces material costs and waste disposal expenses.',
  },
  {
    question: 'How does part rotation affect nesting results?',
    answer: 'Enabling part rotation (90-degree rotation) typically improves material utilization by 10-20% because it allows the algorithm to test both normal and rotated orientations and select the better fit. For rectangular parts, rotation can significantly improve nesting efficiency, especially when part dimensions don\'t align well with workspace dimensions. The calculator automatically compares both orientations when rotation is enabled and selects the configuration with higher utilization. However, rotation may not be suitable for parts with grain direction requirements or asymmetric features that must maintain specific orientation.',
  },
  {
    question: 'How can I reduce material waste in my laser cutting operations?',
    answer: 'To reduce material waste: Enable part rotation to improve nesting efficiency (typically 10-20% improvement). Choose workspace sizes that match your part dimensions closely - avoid oversized tables for small parts. Optimize spacing between parts - use minimum safe spacing (typically 2-5mm) rather than excessive margins. Consider batch processing - if you can fit multiple production runs on one sheet, overall waste decreases. Plan remnant usage - save leftover material from large jobs for smaller parts. Use professional nesting software for complex parts - advanced algorithms can achieve 5-15% better utilization than basic rectangular nesting.',
  },
  {
    question: 'How is the match score calculated?',
    answer: 'The match score (0-100) combines three factors: Utilization score (0-40 points) - higher utilization earns more points, with 75%+ utilization earning maximum points. Quantity coverage (0-30 points) - meeting your required quantity earns points, with slight excess (less than 30%) being optimal; too much excess or insufficient capacity reduces points. Wastage penalty (0-30 points) - lower waste percentage earns more points, with minimal waste achieving maximum points. The optimal workspace typically scores 70+ points, meets quantity requirements, and achieves at least 60% utilization. Higher scores indicate better overall fit for your specific requirements.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function WorkspaceMatcherPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <StructuredData data={calculatorSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Workspace Size Matcher
          </h1>
          <p className="text-base text-gray-600">
            Match your part dimensions with optimal laser cutting table size. Calculate material utilization, nesting layouts, and sheet requirements for maximum efficiency.
          </p>
        </div>
        
        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <WorkspaceMatcherForm />
        </div>

        {/* How to Use Section */}
        <section id="how-to-use" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Workspace Matcher</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Enter Part Specifications</h3>
                <p className="text-sm leading-relaxed">
                  Input your part dimensions in length and width, along with the total quantity needed for production. The length and width should match the actual dimensions of your workpiece. For example, if you're cutting rectangular panels, enter the panel's length and width. You can use either metric (millimeters) or imperial (inches) units - select your preferred system using the unit toggle. Also specify the minimum spacing required between parts, typically 2-5mm for safe cutting and part separation. This spacing accounts for kerf width and ensures parts don't interfere with each other during cutting.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Configure Nesting Options</h3>
                <p className="text-sm leading-relaxed">
                  Select your preferred unit system (metric or imperial) based on your material specifications and regional standards. Enable part rotation if your parts can be rotated 90 degrees - this typically improves material utilization by 10-20% by allowing the algorithm to test both normal and rotated orientations. Rotation is especially beneficial for rectangular parts where dimensions don't align well with workspace dimensions. However, disable rotation if your parts have grain direction requirements, asymmetric features, or must maintain a specific orientation for functional or aesthetic reasons.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Review Workspace Recommendations</h3>
                <p className="text-sm leading-relaxed">
                  Click "Find Matching Workspaces" to receive ranked recommendations. The calculator evaluates all standard workspace sizes and presents them sorted by match score (0-100). The optimal recommendation is highlighted and shows the best balance of material utilization, quantity fit, and waste minimization. Review the layout configuration showing parts per row and number of rows, which helps visualize how parts will be arranged on the sheet. Check the material utilization percentage - aim for 60-90% for optimal efficiency. Higher utilization means less material waste and lower production costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Analyze Material Requirements</h3>
                <p className="text-sm leading-relaxed">
                  Examine the material requirements section to understand production needs. The calculator shows total sheets needed based on your quantity and parts per sheet. Review the total material area required, used area (actual part area), and wasted area to assess cost implications. Compare multiple workspace options in the results table to find the best balance between equipment cost, material efficiency, and production flexibility. Consider factors like material availability, standard sheet sizes from suppliers, and your typical production volumes when making the final workspace selection decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculation Examples Section */}
        <section id="examples" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculation Examples</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 1: Small Parts Production</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Part Length: 500mm</li>
                    <li>Part Width: 300mm</li>
                    <li>Quantity: 100 parts</li>
                    <li>Spacing: 5mm</li>
                    <li>Rotation Allowed: Yes</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">The calculator evaluates workspace sizes starting from 600×400mm up to 8000×2500mm. For a 2500×1300mm workspace with rotation enabled, the algorithm tests both orientations: normal (500×300mm) and rotated (300×500mm). The rotated orientation fits better: 4 parts per row × 2 rows = 8 parts per sheet.</p>
                  <p className="mt-3"><strong>Result:</strong> Recommended workspace is 2500×1300mm with 85.2% utilization, fitting 8 parts per sheet. Requires 13 sheets total, with excellent material efficiency. Match score: 82/100.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 2: Medium-Sized Components</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Part Length: 1500mm</li>
                    <li>Part Width: 1000mm</li>
                    <li>Quantity: 50 parts</li>
                    <li>Spacing: 5mm</li>
                    <li>Rotation Allowed: Yes</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">For medium-sized parts, the calculator finds that a 3000×1500mm workspace provides optimal nesting. With rotation enabled, the layout fits 1 part per row × 1 row = 1 part per sheet in normal orientation, but rotated orientation (1000×1500mm) allows 2 parts per row × 1 row = 2 parts per sheet.</p>
                  <p className="mt-3"><strong>Result:</strong> Optimal workspace is 3000×1500mm with 72.5% utilization, fitting 2 parts per sheet. Requires 25 sheets total. The larger workspace enables better nesting efficiency compared to smaller options. Match score: 75/100.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 3: Large Structural Parts</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Part Length: 2500mm</li>
                    <li>Part Width: 1500mm</li>
                    <li>Quantity: 20 parts</li>
                    <li>Spacing: 10mm</li>
                    <li>Rotation Allowed: No (grain direction requirement)</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Large parts require industrial-sized workspaces. Without rotation, the calculator evaluates only normal orientation. A 4000×2000mm workspace fits 1 part per row × 1 row = 1 part per sheet. The 6000×2000mm workspace also fits 1 part but with more waste. The 8000×2500mm workspace fits 2 parts per row × 1 row = 2 parts per sheet.</p>
                  <p className="mt-3"><strong>Result:</strong> Recommended workspace is 8000×2500mm with 68.3% utilization, fitting 2 parts per sheet. Requires 10 sheets total. While utilization is moderate, this workspace size accommodates the large part dimensions and meets quantity requirements efficiently. Match score: 71/100.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interpreting Results Section */}
        <section id="interpreting-results" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpreting Your Results</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>Material Utilization Percentage:</strong> This metric represents the percentage of workspace area effectively used for parts, calculated as (total part area / workspace area) × 100%. Higher utilization (75-90%) indicates excellent nesting efficiency with minimal waste, directly reducing material costs. Utilization between 60-75% is considered good and acceptable for most applications. Below 60% indicates significant waste and may require workspace size adjustment or part orientation optimization. The calculator accounts for spacing between parts in this calculation, so the actual usable area is slightly less than the total workspace area.
              </p>
              <p>
                <strong>Match Score (0-100):</strong> The match score combines three weighted factors to provide an overall assessment of workspace suitability. Utilization contributes up to 40 points, with higher utilization earning more points. Quantity coverage contributes up to 30 points - meeting your required quantity with minimal excess (less than 30% extra) earns maximum points, while insufficient capacity or excessive excess reduces the score. Wastage penalty contributes up to 30 points, with lower waste percentages earning more points. A score of 70+ typically indicates an optimal workspace that balances all factors effectively. Use this score to quickly compare multiple workspace options.
              </p>
              <p>
                <strong>Material Waste Percentage:</strong> This shows the percentage of workspace area that will be wasted material, calculated as unused area divided by total workspace area. Lower waste percentages mean better material efficiency and reduced disposal costs. Waste occurs due to spacing requirements, inability to perfectly fill the workspace, and leftover areas that don't fit additional parts. The calculator shows both utilization (positive metric) and wastage (negative metric) to give you a complete picture. Aim for waste percentages below 25-40% for efficient operations. High waste percentages (&gt;50%) indicate poor workspace-part matching and may require reconsidering workspace size or part dimensions.
              </p>
              <p>
                <strong>Layout Configuration:</strong> The layout shows parts per row and number of rows, helping you visualize how parts will be arranged on the sheet. This information is crucial for production planning, as it affects cutting path optimization, handling procedures, and quality control. A layout like "4 × 2" means 4 parts per row and 2 rows, totaling 8 parts per sheet. The calculator automatically selects the best orientation (normal or rotated) when rotation is enabled. Understanding the layout helps you plan material handling, estimate cutting time, and optimize production workflows. Compare layouts across different workspace options to find configurations that suit your production processes.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Background Section */}
        <section id="technical-background" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Workspace Selection Background (2025)</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                The laser cutting industry in 2025 has standardized on several common workspace sizes that align with global material supply chains and manufacturing efficiency requirements. Standard metric sizes include 1300×2500mm (equivalent to 4×8 feet), 1500×3000mm (5×10 feet), and 2000×4000mm (6×12 feet), which correspond to standard sheet sizes available from material suppliers worldwide. These standardized dimensions ensure optimal material utilization and reduce waste from sheet trimming. Industrial applications increasingly favor larger workspaces (3000×1500mm and above) to accommodate growing part sizes and batch production requirements, while smaller workspaces (600×400mm to 1300×900mm) remain popular for prototyping and specialized applications.
              </p>
              <p>
                <strong>2025 Material Utilization Best Practices:</strong> Current industry standards emphasize achieving 70-85% material utilization as the optimal range for cost-effective production. This target balances material efficiency with practical nesting constraints. Advanced nesting algorithms in professional software can achieve 5-15% better utilization than basic rectangular nesting, making workspace matching tools essential for initial planning. The 2025 approach integrates workspace selection with material sourcing strategies, encouraging manufacturers to match workspace sizes with their primary material suppliers' standard sheet dimensions. This alignment reduces material costs, minimizes waste disposal expenses, and simplifies inventory management. Modern laser systems with larger workspaces (4000×2000mm and above) are increasingly common, driven by demand for processing larger parts and improving overall production efficiency.
              </p>
              <p>
                <strong>Nesting Optimization Technology Trends:</strong> The 2025 laser cutting industry has seen significant advancement in nesting optimization technologies. Modern nesting software uses genetic algorithms, simulated annealing, and machine learning to achieve superior material utilization compared to traditional rectangular nesting methods. However, workspace matching calculators like this tool provide essential preliminary analysis before investing in advanced nesting software. The trend toward larger workspaces enables more complex nesting patterns and better utilization of irregular part shapes. Real-time nesting optimization integrated with CAD/CAM systems is becoming standard, allowing dynamic workspace selection based on current job requirements. Cloud-based nesting services are emerging, providing access to advanced algorithms without requiring expensive software licenses.
              </p>
              <p>
                <strong>Cost-Benefit Analysis Considerations:</strong> When selecting workspace size, manufacturers must balance equipment investment, material efficiency, and production flexibility. Larger workspaces command higher equipment prices and require more facility space, but they offer better material utilization for diverse part sizes and enable batch processing advantages. The 2025 cost analysis framework emphasizes total cost of ownership, including material waste reduction, reduced sheet change frequency, and improved production throughput. Standard workspace sizes offer better material availability and pricing compared to custom sizes, making them economically favorable despite potentially lower utilization for specific part dimensions. Manufacturers should evaluate workspace selection based on their typical production mix, material costs, and long-term production growth projections rather than optimizing for a single part size.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Workspace Selection Factors</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Choosing the right workspace size impacts:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Material Utilization:</strong> Larger tables enable better nesting but may waste material for small parts</li>
                <li><strong>Production Efficiency:</strong> Optimal size reduces sheet changes and handling time</li>
                <li><strong>Equipment Cost:</strong> Larger work areas increase machine price and facility requirements</li>
                <li><strong>Flexibility:</strong> Standard sizes (4x8', 5x10', 6x12') offer better material availability</li>
                <li><strong>Batch Size:</strong> Match workspace to typical production quantities</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nesting Optimization</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Maximize material utilization through:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Part Rotation:</strong> Allow 90° rotation for better fit (typically +10-20% utilization)</li>
                <li><strong>Spacing:</strong> Minimum 2-5mm between parts for safe cutting and part separation</li>
                <li><strong>Common Cutting:</strong> Share cut lines between adjacent parts where possible</li>
                <li><strong>Grain Direction:</strong> Consider material grain for structural parts</li>
                <li><strong>Remnant Usage:</strong> Plan for using leftover material on subsequent jobs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Standard Workspace Sizes */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Standard Laser Cutting Table Sizes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Workspace Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Metric (mm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Applications</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material Compatibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Small (3x5')</td>
                  <td className="px-4 py-3">1000 × 1500</td>
                  <td className="px-4 py-3">Prototyping, small parts, jewelry</td>
                  <td className="px-4 py-3">Small sheets, remnants</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Medium (4x8')</td>
                  <td className="px-4 py-3">1300 × 2500</td>
                  <td className="px-4 py-3">General fabrication, signage</td>
                  <td className="px-4 py-3">Standard 4×8' sheets</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Large (5x10')</td>
                  <td className="px-4 py-3">1500 × 3000</td>
                  <td className="px-4 py-3">Industrial production, large parts</td>
                  <td className="px-4 py-3">5×10' sheets, full utilization</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Extra Large (6x12')</td>
                  <td className="px-4 py-3">2000 × 4000</td>
                  <td className="px-4 py-3">Heavy industry, large assemblies</td>
                  <td className="px-4 py-3">Oversized sheets, structural</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Custom</td>
                  <td className="px-4 py-3">Varies</td>
                  <td className="px-4 py-3">Specialized applications</td>
                  <td className="px-4 py-3">Non-standard materials</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Workspace sizes shown are cutting area dimensions. Actual machine footprint is larger. 
            Standard sheet sizes vary by region (US: 4×8', 5×10'; Europe: 1250×2500mm, 1500×3000mm). 
            Choose workspace matching your typical material suppliers for best utilization.
          </p>
        </div>

        {/* Utilization Guidelines */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Material Utilization Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">75-90%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellent Utilization</h3>
              <p className="text-gray-700">Optimal nesting with minimal waste. Achievable with part rotation and careful planning.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600 mb-2">60-75%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Good Utilization</h3>
              <p className="text-gray-700">Acceptable for most applications. Consider rotation or workspace size adjustment.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600 mb-2">&lt;60%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Poor Utilization</h3>
              <p className="text-gray-700">Significant waste. Review workspace size, part orientation, or batch quantities.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Calculators & Tools */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Calculators & Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Calculate material costs and utilization impact on production expenses</p>
            </Link>
            <Link href="/guides/nesting-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nesting Optimization Guide</h3>
              <p className="text-sm text-gray-600">Advanced techniques for maximizing material utilization and reducing waste</p>
            </Link>
            <Link href="/guides/work-area-size-comparison" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Work Area Size Comparison</h3>
              <p className="text-sm text-gray-600">Compare different workspace sizes and their applications in laser cutting</p>
            </Link>
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your cutting application based on material and thickness</p>
            </Link>
            <Link href="/tools/cutting-time-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cutting Time Calculator</h3>
              <p className="text-sm text-gray-600">Estimate cutting time based on path length, speed, and material properties</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse lasers by workspace size and specifications to find the right equipment</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Workspace matching calculations assume rectangular nesting without advanced optimization algorithms. 
            Actual utilization may vary based on part complexity, nesting software capabilities, and production requirements. 
            Professional nesting software can achieve 5-15% better utilization through advanced algorithms. 
            Always verify layouts with actual nesting software before production.
          </p>
        </div>
      </div>
    </>
  );
}

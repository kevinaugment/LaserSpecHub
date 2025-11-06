import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema, generateFAQSchema, generateCalculatorSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import { CuttingTimeCalculatorForm } from './cutting-time-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Time Calculator 2025 - Calculate Cycle Time & Production Capacity',
  description:
    'Professional laser cutting time calculator 2025. Calculate cycle time, production capacity, and time breakdown for fiber and CO2 laser cutting operations. Estimate parts per hour, optimize cutting efficiency, and improve production planning with 2025 industry standards.',
  path: '/tools/cutting-time-calculator',
  keywords: [
    'cutting time calculator',
    'cycle time calculator',
    'laser cutting time',
    'production capacity calculator',
    'cutting time calculator 2025',
    'cycle time estimation',
    'laser cutting efficiency',
    'production planning',
    'laser cutting cycle time',
    'parts per hour calculator',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Cutting Time and Production Capacity',
  description: 'Step-by-step guide to calculate cycle time, production capacity, and time breakdown for laser cutting operations',
  steps: [
    {
      name: 'Enter Path Length and Cutting Speed',
      text: 'Input the total cutting path length in millimeters (mm) and your cutting speed in mm/min. The path length represents the total distance the laser will travel while cutting. Typical values range from 100mm to 10,000mm for most parts.',
    },
    {
      name: 'Set Pierce Parameters',
      text: 'Enter the number of pierces required for your part and the pierce time per pierce in seconds. Pierce count depends on the number of holes and separate cut paths. Pierce time varies from 0.3-0.8s for thin materials to 1.0-2.5s for thick plate.',
    },
    {
      name: 'Configure Rapid Travel Parameters',
      text: 'Specify the rapid travel distance (movement between cuts) in millimeters and rapid speed in mm/min. These parameters account for non-cutting movement time. Typical rapid speeds range from 20-100 m/min for modern laser systems.',
    },
    {
      name: 'Review Results and Production Capacity',
      text: 'Analyze the total cycle time breakdown (cutting time, pierce time, rapid travel), production capacity (parts per hour/day/month), and efficiency metrics. Use these results to optimize your cutting parameters and improve production planning.',
    },
  ],
});

const calculatorSchema = generateCalculatorSchema({
  name: 'Laser Cutting Time Calculator',
  description: 'Calculate cycle time, production capacity, and time breakdown for laser cutting operations based on path length, cutting speed, pierce parameters, and rapid travel settings.',
  url: '/tools/cutting-time-calculator',
  input: [
    { name: 'Path Length', description: 'Total cutting path length in millimeters (mm), typically 100-10,000 mm' },
    { name: 'Cutting Speed', description: 'Cutting speed in millimeters per minute (mm/min), typically 500-10,000 mm/min' },
    { name: 'Pierce Count', description: 'Number of pierces required, typically 1-50 pierces' },
    { name: 'Pierce Time', description: 'Time per pierce in seconds, typically 0.1-3.0 seconds' },
    { name: 'Rapid Travel Distance', description: 'Rapid travel distance in millimeters (mm), typically 100-2,000 mm' },
    { name: 'Rapid Speed', description: 'Rapid travel speed in millimeters per minute (mm/min), typically 20,000-100,000 mm/min' },
  ],
  output: [
    { name: 'Total Cycle Time', description: 'Total cycle time in seconds and minutes' },
    { name: 'Time Breakdown', description: 'Breakdown of cutting time, pierce time, and rapid travel time with percentages' },
    { name: 'Production Capacity', description: 'Parts per hour, per day (8 hours), and per month (20 days)' },
    { name: 'Efficiency Metrics', description: 'Cutting efficiency percentage, average speed, and pierce overhead' },
  ],
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web Browser',
  softwareVersion: '2025',
});

const faqs = [
  {
    question: 'How do I accurately measure the path length for my cutting operation?',
    answer: 'Path length is the total distance the laser travels while cutting. You can measure it from your CAD/CAM software by summing all cutting path lengths. For simple shapes, calculate manually: perimeter of external contours plus perimeters of all internal holes. Most CAM software provides automatic path length calculation. Ensure you include all cutting paths, including lead-ins and lead-outs. For complex nested parts, use your nesting software to calculate the total cutting path length for the entire sheet.',
  },
  {
    question: 'How does pierce time affect the total cycle time and what factors influence it?',
    answer: 'Pierce time significantly impacts cycle time, especially for parts with many holes. Each pierce adds time (typically 0.3-0.8s for thin materials, 1.0-2.5s for thick plate). For a part with 20 holes at 0.5s per pierce, pierce time alone adds 10 seconds. Factors affecting pierce time include material thickness (thicker = longer), material type (aluminum requires longer than steel), laser power (higher power can reduce pierce time), and assist gas type. To minimize pierce time impact, use common line cutting to reduce pierce count, optimize pierce positioning, and consider using higher power for faster piercing.',
  },
  {
    question: 'How can I optimize cutting efficiency based on the calculator results?',
    answer: 'Focus on improving the cutting efficiency percentage (cutting time vs total time). High efficiency (80-90%) indicates most time is spent cutting. To optimize: minimize pierce count through common line cutting and strategic pierce placement, reduce rapid travel distance through optimized nesting and part sequencing, increase cutting speed if quality allows (requires appropriate power), optimize pierce positioning to reduce rapid travel, and use batch processing to amortize setup time. Monitor the time breakdown percentages - if pierce time exceeds 30%, focus on reducing pierce count. If rapid travel exceeds 20%, improve nesting and sequencing.',
  },
  {
    question: 'How accurate are the calculator results compared to actual production time?',
    answer: 'The calculator provides theoretical cutting time based on ideal conditions. Actual production time typically includes 25-40% additional overhead: material loading/unloading (30-120s per sheet), part sorting and handling (10-30s per part), quality inspection (5-15s per part), machine warmup and parameter adjustments (2-5 minutes per shift), operator breaks and changeovers (10-15% of shift time), and machine maintenance downtime. Typical machine utilization rates are 60-75% in real production. For job quoting, add 25-40% margin to calculated cycle times. For production planning, use 70% utilization factor (calculated time / 0.7) to estimate realistic capacity.',
  },
  {
    question: 'What is the difference between cutting speed and average speed shown in the results?',
    answer: 'Cutting speed is the speed during actual cutting (mm/min), while average speed accounts for all cycle time including pierces and rapid travel. Average speed = path length / total cycle time. For example, if path length is 2000mm and total cycle time is 60 seconds, average speed is 2000mm/min, even if cutting speed is 3000mm/min. This difference occurs because pierce time and rapid travel reduce the effective speed. Average speed better represents overall productivity. High average speed indicates efficient operation with minimal non-cutting time. Compare average speed to cutting speed - if the ratio is below 70%, focus on reducing pierce count and rapid travel.',
  },
  {
    question: 'How do I use the production capacity results for production planning and job quoting?',
    answer: 'Use parts per hour for short-term capacity planning and job scheduling. Parts per day (8 hours) helps estimate daily production targets. Parts per month (20 days) supports monthly production planning. For job quoting, multiply cycle time by 1.25-1.40 to account for overhead (loading, inspection, breaks). For production planning, divide parts per day by 0.70 (70% utilization) to get realistic daily capacity. Consider batch size effects - larger batches reduce per-part setup overhead. Factor in material changeover time (5-15 minutes) when planning multi-material jobs. Use the efficiency metrics to identify optimization opportunities before committing to production schedules.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function CuttingTimeCalculatorPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <StructuredData data={calculatorSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Cutting Time Calculator
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Calculate cycle time, production capacity, and time breakdown for fiber and CO2 laser cutting operations. Optimize cutting efficiency and improve production planning with 2025 industry standards.
          </p>
        </div>
        
        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <CuttingTimeCalculatorForm />
        </div>

        {/* How to Use Section */}
        <section id="how-to-use" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Cutting Time Calculator</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Enter Path Length and Cutting Speed</h3>
                <p className="text-sm leading-relaxed">
                  Input the total cutting path length in millimeters (mm) and your cutting speed in mm/min. The path length represents the total distance the laser will travel while cutting, including all external contours and internal holes. You can obtain this value from your CAD/CAM software, which typically calculates it automatically. For manual calculation, sum the perimeters of all cutting paths. Typical path lengths range from 100mm for simple parts to 10,000mm for complex nested layouts. Cutting speed depends on material type, thickness, laser power, and quality requirements. Typical speeds are 1,000-3,000 mm/min for steel and 3,000-8,000 mm/min for thin materials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Set Pierce Parameters</h3>
                <p className="text-sm leading-relaxed">
                  Enter the number of pierces required for your part and the pierce time per pierce in seconds. Pierce count equals the number of separate cut paths or holes that require piercing. Use common line cutting strategies to minimize pierce count - when multiple parts share a cutting line, only one pierce is needed. Pierce time varies significantly: 0.3-0.8 seconds for thin materials (1-3mm) and 1.0-2.5 seconds for thick plate (6-20mm). Factors affecting pierce time include material thickness, material type (aluminum requires longer than steel), laser power (higher power reduces pierce time), and assist gas type. For parts with many holes, pierce time can dominate the total cycle time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Configure Rapid Travel Parameters</h3>
                <p className="text-sm leading-relaxed">
                  Specify the rapid travel distance (movement between cuts) in millimeters and rapid speed in mm/min. Rapid travel accounts for non-cutting movement time when the laser head moves between cutting paths. Estimate the average rapid distance based on your nesting layout - for well-optimized nesting, this might be 200-500mm, while for scattered parts it could be 1,000-2,000mm. Rapid speeds for modern laser systems typically range from 20-100 m/min (20,000-100,000 mm/min). Higher rapid speeds reduce non-cutting time but require careful acceleration/deceleration control. These parameters help account for the time spent moving between cuts, which can significantly impact total cycle time for parts with multiple separate cut paths.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Review Results and Production Capacity</h3>
                <p className="text-sm leading-relaxed">
                  After entering all parameters, review the calculated total cycle time, time breakdown (cutting time, pierce time, rapid travel with percentages), production capacity (parts per hour, per day, per month), and efficiency metrics. The time breakdown shows where time is spent - aim for high cutting efficiency (80-90%) indicating minimal non-cutting overhead. Production capacity helps with scheduling and job quoting. Use the efficiency metrics to identify optimization opportunities: if pierce overhead exceeds 30%, focus on reducing pierce count; if rapid travel exceeds 20%, improve nesting and part sequencing. Compare average speed to cutting speed - ratios below 70% indicate significant optimization potential.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 1: Simple Part with Few Pierces</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Path Length: 2,000 mm</li>
                    <li>Cutting Speed: 3,000 mm/min</li>
                    <li>Pierce Count: 5 pierces</li>
                    <li>Pierce Time: 0.5 seconds</li>
                    <li>Rapid Travel Distance: 500 mm</li>
                    <li>Rapid Speed: 50,000 mm/min (50 m/min)</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Cutting time = (2000mm / 3000mm/min) × 60 = 40 seconds. Pierce time = 5 × 0.5s = 2.5 seconds. Rapid time = (500mm / 50000mm/min) × 60 = 0.6 seconds. Total cycle time = 40 + 2.5 + 0.6 = 43.1 seconds (0.72 minutes).</p>
                  <p className="mt-3"><strong>Result:</strong> Total cycle time of 43.1 seconds (0.72 minutes). Production capacity: 83.3 parts/hour, 666 parts/day (8 hours), 13,320 parts/month (20 days). Cutting efficiency: 92.8% (excellent - most time spent cutting). This configuration represents efficient cutting with minimal overhead, ideal for high-volume production of simple parts.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 2: Complex Part with Multiple Holes</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Path Length: 5,000 mm</li>
                    <li>Cutting Speed: 2,000 mm/min</li>
                    <li>Pierce Count: 15 pierces</li>
                    <li>Pierce Time: 0.8 seconds</li>
                    <li>Rapid Travel Distance: 1,200 mm</li>
                    <li>Rapid Speed: 60,000 mm/min (60 m/min)</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Cutting time = (5000mm / 2000mm/min) × 60 = 150 seconds. Pierce time = 15 × 0.8s = 12 seconds. Rapid time = (1200mm / 60000mm/min) × 60 = 1.2 seconds. Total cycle time = 150 + 12 + 1.2 = 163.2 seconds (2.72 minutes).</p>
                  <p className="mt-3"><strong>Result:</strong> Total cycle time of 163.2 seconds (2.72 minutes). Production capacity: 22.1 parts/hour, 177 parts/day, 3,540 parts/month. Cutting efficiency: 91.9% (good - pierce time is 7.4% of total). Average speed: 1,838 mm/min (vs 2,000 mm/min cutting speed, 92% ratio). This example shows how multiple pierces impact cycle time, but with optimized parameters, cutting efficiency remains high.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 3: High-Speed Thin Material Cutting</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Path Length: 1,000 mm</li>
                    <li>Cutting Speed: 5,000 mm/min</li>
                    <li>Pierce Count: 2 pierces</li>
                    <li>Pierce Time: 0.3 seconds</li>
                    <li>Rapid Travel Distance: 300 mm</li>
                    <li>Rapid Speed: 80,000 mm/min (80 m/min)</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Cutting time = (1000mm / 5000mm/min) × 60 = 12 seconds. Pierce time = 2 × 0.3s = 0.6 seconds. Rapid time = (300mm / 80000mm/min) × 60 = 0.225 seconds. Total cycle time = 12 + 0.6 + 0.225 = 12.825 seconds (0.21 minutes).</p>
                  <p className="mt-3"><strong>Result:</strong> Total cycle time of 12.825 seconds (0.21 minutes). Production capacity: 280.4 parts/hour, 2,243 parts/day, 44,860 parts/month. Cutting efficiency: 93.5% (excellent). Average speed: 4,677 mm/min (vs 5,000 mm/min cutting speed, 93.5% ratio). This configuration demonstrates optimal efficiency for high-volume thin material cutting, with minimal overhead from pierces and rapid travel.</p>
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
                <strong>Total Cycle Time:</strong> This represents the complete time required for one cutting cycle, including cutting time, pierce time, and rapid travel time. It's displayed in both seconds and minutes for convenience. Cycle time is the foundation for production capacity calculations. For job quoting, multiply this value by 1.25-1.40 to account for overhead (loading, inspection, breaks). For production planning, divide by 0.70 (70% utilization factor) to estimate realistic daily capacity. Shorter cycle times enable higher production volumes and better machine utilization.
              </p>
              <p>
                <strong>Time Breakdown:</strong> This shows how cycle time is distributed across cutting time, pierce time, and rapid travel time, with percentages for each component. High cutting efficiency (80-90%) indicates most time is spent cutting, which is optimal. If pierce time exceeds 30% of total time, focus on reducing pierce count through common line cutting or strategic pierce placement. If rapid travel exceeds 20%, improve nesting and part sequencing. The breakdown helps identify optimization opportunities - reducing non-cutting time directly improves productivity.
              </p>
              <p>
                <strong>Production Capacity:</strong> Parts per hour, per day (8 hours), and per month (20 days) provide production planning metrics. These values represent theoretical capacity based on calculated cycle time. Actual production will be lower due to overhead: material loading/unloading (30-120s per sheet), part sorting (10-30s per part), quality inspection (5-15s per part), machine warmup (2-5 minutes per shift), operator breaks (10-15% of shift time), and maintenance downtime. For realistic planning, apply a 70% utilization factor (divide parts per day by 0.70). Use these metrics for job scheduling, capacity planning, and production targets.
              </p>
              <p>
                <strong>Efficiency Metrics:</strong> Cutting efficiency percentage shows the ratio of cutting time to total cycle time - higher values (80-90%) indicate efficient operation. Average speed accounts for all cycle time (cutting + pierce + rapid) and better represents overall productivity than cutting speed alone. Compare average speed to cutting speed - ratios above 85% indicate excellent efficiency, while ratios below 70% suggest optimization opportunities. Pierce overhead percentage shows the impact of pierce time - if this exceeds 25-30%, focus on reducing pierce count. These metrics help identify bottlenecks and optimization priorities.
              </p>
              <p>
                <strong>Important Considerations:</strong> Calculator results represent theoretical cutting time under ideal conditions. Actual production time includes 25-40% additional overhead from material handling, quality control, and machine operations. Equipment-specific factors (beam quality, acceleration/deceleration characteristics, focus control accuracy) can cause variations. Material surface condition, assist gas purity, and environmental factors also affect actual cutting performance. Always verify results with test cuts using your specific equipment and conditions. For critical applications, consult equipment manufacturers and perform comprehensive testing before finalizing production schedules or job quotes.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Background Section */}
        <section id="technical-background" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Background (2025)</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Laser cutting time calculation remains fundamental to production optimization and cost estimation in 2025. The methodology combines cutting physics (material removal rate, energy requirements) with process parameters (path length, speed, pierce characteristics) to determine cycle time. Modern calculation models have evolved to incorporate 2025 industry standards, accounting for improved beam quality, advanced motion control systems, and optimized cutting strategies. Accurate time estimation enables better production planning, job quoting, and equipment utilization optimization.
              </p>
              <p>
                <strong>2025 Industry Standards:</strong> Current industry best practices (2025) emphasize the importance of accurate cycle time calculation for competitive job quoting and efficient production planning. Modern fiber lasers achieve beam quality factors (M²) below 1.2, enabling faster cutting speeds and reduced cycle times compared to earlier generation systems. The 2025 standards account for improved motion control systems with faster acceleration/deceleration (reducing rapid travel time), optimized pierce strategies (reducing pierce time by 20-30%), and advanced nesting algorithms (reducing rapid travel distance by 15-25%). These advances result in 10-20% cycle time improvements over 2020 baseline calculations.
              </p>
              <p>
                <strong>Time Component Analysis:</strong> The 2025 calculation models break down cycle time into three primary components: cutting time (path length / cutting speed), pierce time (pierce count × pierce time per pierce), and rapid travel time (rapid distance / rapid speed). Modern systems optimize each component: cutting time through higher speeds enabled by improved beam quality, pierce time through faster pierce strategies and higher power, and rapid travel through optimized motion control and nesting. The relative importance of each component varies by application - simple parts with few pierces achieve 85-95% cutting efficiency, while complex parts with many holes may achieve 60-75% efficiency.
              </p>
              <p>
                <strong>Production Capacity Optimization:</strong> The 2025 industry guidelines emphasize production capacity optimization through cycle time reduction. Key strategies include minimizing pierce count through common line cutting (reducing pierce overhead by 30-50%), optimizing nesting layouts (reducing rapid travel by 20-30%), increasing cutting speeds through proper power selection (enabling 15-25% speed increases), and batch processing to amortize setup overhead. Modern CAM software incorporates automatic optimization algorithms that suggest parameter adjustments to improve efficiency. These optimizations can improve production capacity by 20-40% compared to unoptimized operations.
              </p>
              <p>
                <strong>Equipment Technology Advances:</strong> 2025 laser cutting systems feature improved efficiency through better beam quality, faster motion control, and optimized process control. Modern systems achieve rapid speeds of 80-120 m/min (up from 50-80 m/min in 2020), reducing rapid travel time by 20-30%. Improved pierce strategies reduce pierce time by 20-30% through optimized power ramping and assist gas control. Advanced nesting algorithms reduce rapid travel distance by 15-25% through intelligent part sequencing. These advances enable more accurate cycle time calculations and better equipment utilization, with typical machine utilization rates improving from 60-70% (2020) to 70-80% (2025) in optimized operations.
              </p>
              <p>
                <strong>Future Considerations:</strong> As laser cutting technology continues evolving, cycle time calculation models will incorporate emerging technologies such as AI-assisted parameter optimization, predictive maintenance scheduling, and real-time process monitoring. The 2025 models provide a solid foundation for current applications while remaining adaptable to future technological advances. Regular updates to calculation algorithms ensure continued accuracy as new materials, processes, and equipment capabilities emerge. Integration with Industry 4.0 systems enables real-time cycle time tracking and continuous optimization.
              </p>
            </div>
          </div>
        </section>

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
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your cutting application based on material and thickness</p>
            </Link>
            <Link href="/tools/power-density-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Density Calculator</h3>
              <p className="text-sm text-gray-600">Calculate power density based on laser power and focused spot diameter for optimal cutting</p>
            </Link>
            <Link href="/tools/kerf-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Kerf Calculator</h3>
              <p className="text-sm text-gray-600">Calculate kerf width and compensation values for precise part dimensions</p>
            </Link>
            <Link href="/tools/gas-flow-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Gas Flow Calculator</h3>
              <p className="text-sm text-gray-600">Calculate assist gas flow rates for optimal cutting performance and quality</p>
            </Link>
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Estimate production costs based on cycle time, material, and operating expenses</p>
            </Link>
            <Link href="/tools/workspace-matcher" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Workspace Matcher</h3>
              <p className="text-sm text-gray-600">Find the right laser cutting machine for your workspace and application requirements</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This calculator provides estimates based on theoretical cutting time under ideal conditions. Actual production time includes 25-40% additional overhead from material handling, quality control, and machine operations. Always verify results with test cuts using your specific equipment and conditions. For job quoting, add 25-40% margin to calculated cycle times. For production planning, apply a 70% utilization factor to estimate realistic capacity.
          </p>
        </div>
      </div>
    </>
  );
}

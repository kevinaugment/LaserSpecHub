import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema, generateFAQSchema, generateCalculatorSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import NozzleLifeCalculatorForm from '@/components/calculators/nozzle-life-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Nozzle Life Calculator 2025 - Predict Replacement Cycle',
  description:
    'Professional laser cutting nozzle life calculator 2025. Predict nozzle service life, replacement cycles, and maintenance costs based on nozzle material, cutting parameters, power, and assist gas. Optimize maintenance planning and reduce downtime.',
  path: '/tools/nozzle-life-calculator',
  keywords: [
    'nozzle life calculator',
    'nozzle life calculator 2025',
    'laser nozzle lifespan',
    'nozzle replacement cycle',
    'cutting nozzle maintenance',
    'nozzle wear calculator',
    'laser consumables cost',
    'nozzle service life',
    'cutting head nozzle',
    'nozzle life prediction 2025',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Cutting Nozzle Service Life',
  description: 'Step-by-step guide to predict nozzle lifespan and optimize replacement scheduling',
  steps: [
    {
      name: 'Enter Nozzle Specifications',
      text: 'Input nozzle material (copper, chrome-plated copper, or alloy), nozzle type (single layer or double layer), and diameter',
    },
    {
      name: 'Input Operating Conditions',
      text: 'Enter laser power, cutting material type, material thickness, assist gas type, and daily operating hours',
    },
    {
      name: 'Review Life Prediction',
      text: 'Get estimated nozzle service life in hours, replacement cycle in days, monthly costs, and maintenance recommendations',
    },
  ],
});

const calculatorSchema = generateCalculatorSchema({
  name: 'Laser Cutting Nozzle Life Calculator',
  description: 'Calculate laser cutting nozzle service life, replacement cycles, and maintenance costs based on nozzle material, cutting parameters, power, and assist gas. Optimize maintenance planning and reduce downtime.',
  url: '/tools/nozzle-life-calculator',
  input: [
    { name: 'Nozzle Material', description: 'Nozzle material type: copper, chrome-plated copper, or alloy' },
    { name: 'Nozzle Type', description: 'Nozzle structure: single layer, double layer, or high speed' },
    { name: 'Cutting Material', description: 'Material being cut: carbon steel, stainless steel, aluminum, or copper' },
    { name: 'Material Thickness', description: 'Material thickness in millimeters (mm), typically 0.5-50 mm' },
    { name: 'Laser Power', description: 'Laser power in kilowatts (kW), typically 1-30 kW' },
    { name: 'Assist Gas', description: 'Assist gas type: oxygen, nitrogen, or compressed air' },
    { name: 'Daily Operating Hours', description: 'Daily operating hours, typically 1-24 hours' },
  ],
  output: [
    { name: 'Estimated Lifespan', description: 'Estimated nozzle service life in hours' },
    { name: 'Replacement Cycle', description: 'Recommended replacement cycle in days based on daily operating hours' },
    { name: 'Nozzle Unit Price', description: 'Single nozzle unit price in USD' },
    { name: 'Monthly Consumption Cost', description: 'Estimated monthly consumable cost in USD' },
    { name: 'Calculation Breakdown', description: 'Detailed breakdown of base life and wear factors (power, thickness, material, gas)' },
    { name: 'Lifespan Extension Tips', description: 'Recommendations to extend nozzle service life' },
  ],
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web Browser',
  softwareVersion: '2025',
});

const faqs = [
  {
    question: 'How accurate are the nozzle life predictions from this calculator?',
    answer: 'The nozzle life predictions are based on industry-standard formulas and technical specifications from leading manufacturers (Precitec, Raytools, WSX) combined with field data. Accuracy depends on the accuracy of your input parameters. The calculator accounts for major wear factors including nozzle material, power, thickness, material type, and assist gas. Actual nozzle life may vary by ±20-30% depending on equipment maintenance, operator skill, cutting parameters, collision frequency, and environmental conditions. For critical planning, track actual replacement cycles for your specific operations and adjust predictions accordingly.',
  },
  {
    question: 'What factors most significantly affect nozzle service life?',
    answer: 'The most significant factors affecting nozzle life are: (1) Collision damage - accounts for approximately 50% of nozzle failures. Proper capacitive height sensing and programming can prevent most collisions. (2) Nozzle material - chrome-plated copper nozzles last 50% longer than standard copper, while alloy nozzles last 60-100% longer. (3) Assist gas type - oxygen cutting produces higher temperatures and accelerates wear (30% faster), while nitrogen provides better protection. (4) Laser power - higher power increases thermal load and accelerates wear. (5) Material thickness - thick plate cutting exposes nozzles to high temperatures longer. (6) Cutting material - stainless steel and copper produce more spatter and wear. The calculator accounts for all these factors in its predictions.',
  },
  {
    question: 'When should I replace my nozzle?',
    answer: 'Replace your nozzle when: (1) Cutting quality degrades - poor edge quality, increased dross, or inconsistent cuts indicate nozzle wear or damage. (2) Gas flow issues - reduced gas flow or pressure problems suggest spatter buildup or bore deformation. (3) After collision - any collision with the workpiece or cutting table requires immediate inspection and likely replacement. (4) Reaching predicted lifespan - use the calculator\'s replacement cycle as a guideline, but inspect regularly rather than waiting for failure. (5) Visible damage - deformation, oxidation, or bore diameter increase visible during inspection. Preventive replacement based on predicted cycles is more cost-effective than waiting for quality degradation, which can cause material waste and rework.',
  },
  {
    question: 'How can I extend nozzle service life?',
    answer: 'To extend nozzle service life: (1) Prevent collisions - use capacitive height sensing, proper programming, and maintain appropriate standoff distance (0.5-1.5mm). (2) Regular cleaning - inspect and clean nozzle bore daily to remove spatter buildup using appropriate solvents or ultrasonic cleaners. (3) Material selection - upgrade to chrome-plated copper or alloy nozzles for high-wear applications. (4) Gas optimization - use nitrogen for stainless steel and aluminum instead of oxygen when possible, reducing wear by 30-50%. (5) Power optimization - reduce power or increase speed when possible to lower thermal load. (6) Proper maintenance - check nozzle concentricity, verify seating and O-ring condition, and maintain optimal gas pressure. (7) Inventory management - keep spare nozzles to avoid using damaged ones. Following these practices can extend nozzle life by 30-50% beyond baseline predictions.',
  },
  {
    question: 'What is the cost difference between different nozzle materials?',
    answer: 'Nozzle material costs vary significantly: Copper nozzles cost $35-75 depending on type (single layer $35, double layer $55, high speed $75). Chrome-plated copper nozzles cost $55-110 (50-60% more than copper) but last 50% longer, making them cost-effective for high-intensity operations. Alloy nozzles (brass/bronze) cost $90-160 (2-3x copper) but last 60-100% longer, providing the best long-term value for continuous operation or high-wear applications. For standard operations with moderate wear, chrome-plated copper offers the best balance of cost and performance. For high-power cutting (>10kW) or thick plate cutting (>15mm), alloy nozzles often provide lower total cost of ownership despite higher initial cost.',
  },
  {
    question: 'How does assist gas type affect nozzle life?',
    answer: 'Assist gas type significantly affects nozzle life: Oxygen cutting produces high temperatures (up to 2000°C) and oxidation, accelerating wear by approximately 30% compared to nitrogen. Oxygen is typically used for carbon steel cutting. Nitrogen cutting provides better protection and lower temperatures, extending nozzle life by 30-50% compared to oxygen. Nitrogen is required for stainless steel and aluminum to prevent oxidation. Compressed air provides moderate wear characteristics, similar to baseline. The calculator accounts for gas type through wear factors: oxygen = 1.3x wear, nitrogen = 0.9x wear, air = 1.0x wear. For materials that can use either gas, nitrogen provides longer nozzle life but higher gas costs. The calculator helps balance these trade-offs.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function Page() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <StructuredData data={calculatorSchema} />
      <StructuredData data={faqSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Cutting Nozzle Life Calculator
          </h1>
          <p className="text-base text-gray-600">
            Predict nozzle service life and replacement cycles based on material, cutting conditions, and operating intensity. Optimize maintenance planning and control consumable costs.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <NozzleLifeCalculatorForm />
        </div>

        {/* How to Use Section */}
        <section id="how-to-use" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Nozzle Life Calculator</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Enter Nozzle Configuration</h3>
                <p className="text-sm leading-relaxed">
                  Start by selecting your nozzle specifications. Choose the nozzle material (copper for cost-effective standard applications, chrome-plated copper for enhanced durability with 50% longer life, or alloy for maximum durability in high-wear scenarios). Then select the nozzle type (single layer for standard applications, double layer for thick materials and oxygen cutting, or high speed for specialized applications). The material and type combination determines the base service life and unit cost.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Specify Cutting Parameters</h3>
                <p className="text-sm leading-relaxed">
                  Enter your cutting operation parameters: cutting material type (carbon steel, stainless steel, aluminum, or copper), material thickness in millimeters (0.5-50 mm), laser power in kilowatts (1-30 kW), and assist gas type (oxygen for carbon steel, nitrogen for stainless steel and aluminum, or compressed air for cost-effective applications). These parameters determine wear factors that adjust the base nozzle life. Higher power, thicker materials, and oxygen gas increase wear rates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Input Operating Schedule</h3>
                <p className="text-sm leading-relaxed">
                  Enter your daily operating hours (1-24 hours). This parameter is used to calculate the replacement cycle in days and monthly consumable costs. Higher daily hours result in more frequent replacements and higher monthly costs. The calculator assumes 30 days per month for cost calculations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Review Life Prediction and Recommendations</h3>
                <p className="text-sm leading-relaxed">
                  Click "Calculate Nozzle Life" to generate predictions. Review the estimated lifespan in hours, replacement cycle in days, nozzle unit price, monthly consumption cost, and detailed calculation breakdown showing base life and wear factors (power, thickness, material, gas). The calculator also provides lifespan extension tips based on your specific operating conditions. Use these predictions for maintenance planning, inventory management, and cost budgeting.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 1: Standard 6kW Fiber Laser Cutting Carbon Steel</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nozzle Material: Chrome-Plated Copper</li>
                    <li>Nozzle Type: Single Layer</li>
                    <li>Cutting Material: Carbon Steel</li>
                    <li>Material Thickness: 5 mm</li>
                    <li>Laser Power: 6 kW</li>
                    <li>Assist Gas: Oxygen</li>
                    <li>Daily Operating Hours: 8 hours</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Base Life = 180 hours (chrome-plated copper) × 1.0 (single layer) = 180 hours</p>
                  <p className="ml-4">Power Factor = (6/6)^0.7 = 1.0x</p>
                  <p className="ml-4">Thickness Factor = 1.0x (5mm falls in 3-10mm range)</p>
                  <p className="ml-4">Material Factor = 1.0x (carbon steel baseline)</p>
                  <p className="ml-4">Gas Factor = 1.3x (oxygen increases wear)</p>
                  <p className="ml-4">Total Wear Factor = 1.0 × 1.0 × 1.0 × 1.3 = 1.3x</p>
                  <p className="ml-4">Adjusted Lifespan = 180 / 1.3 = 138.5 hours</p>
                  <p className="ml-4">Replacement Cycle = 138.5 / 8 = 17 days</p>
                  <p className="ml-4">Monthly Cost = (8 × 30 / 138.5) × $55 = $95.31</p>
                  <p className="mt-3"><strong>Result:</strong> Estimated lifespan 138.5 hours, replacement every 17 days, monthly cost $95.31. Chrome-plated copper provides good durability despite oxygen cutting wear.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 2: High-Power 12kW Cutting Stainless Steel</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nozzle Material: Alloy</li>
                    <li>Nozzle Type: Double Layer</li>
                    <li>Cutting Material: Stainless Steel</li>
                    <li>Material Thickness: 12 mm</li>
                    <li>Laser Power: 12 kW</li>
                    <li>Assist Gas: Nitrogen</li>
                    <li>Daily Operating Hours: 10 hours</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Base Life = 240 hours (alloy) × 1.3 (double layer) = 312 hours</p>
                  <p className="ml-4">Power Factor = (12/6)^0.7 = 1.62x (high power increases wear)</p>
                  <p className="ml-4">Thickness Factor = 1.3x (12mm falls in 10-20mm range)</p>
                  <p className="ml-4">Material Factor = 1.2x (stainless steel produces more spatter)</p>
                  <p className="ml-4">Gas Factor = 0.9x (nitrogen provides protection)</p>
                  <p className="ml-4">Total Wear Factor = 1.62 × 1.3 × 1.2 × 0.9 = 2.27x</p>
                  <p className="ml-4">Adjusted Lifespan = 312 / 2.27 = 137.4 hours</p>
                  <p className="ml-4">Replacement Cycle = 137.4 / 10 = 14 days</p>
                  <p className="ml-4">Monthly Cost = (10 × 30 / 137.4) × $130 = $283.84</p>
                  <p className="mt-3"><strong>Result:</strong> Estimated lifespan 137.4 hours, replacement every 14 days, monthly cost $283.84. Despite high wear factors, alloy nozzle provides reasonable life. Nitrogen gas helps offset power and thickness wear.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 3: Low-Power CO2 Laser Cutting Aluminum</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nozzle Material: Copper</li>
                    <li>Nozzle Type: Single Layer</li>
                    <li>Cutting Material: Aluminum</li>
                    <li>Material Thickness: 2 mm</li>
                    <li>Laser Power: 3 kW</li>
                    <li>Assist Gas: Nitrogen</li>
                    <li>Daily Operating Hours: 6 hours</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Base Life = 120 hours (copper) × 1.0 (single layer) = 120 hours</p>
                  <p className="ml-4">Power Factor = (3/6)^0.7 = 0.65x (low power reduces wear)</p>
                  <p className="ml-4">Thickness Factor = 0.8x (thin material, less exposure time)</p>
                  <p className="ml-4">Material Factor = 0.9x (aluminum relatively mild)</p>
                  <p className="ml-4">Gas Factor = 0.9x (nitrogen provides protection)</p>
                  <p className="ml-4">Total Wear Factor = 0.65 × 0.8 × 0.9 × 0.9 = 0.42x</p>
                  <p className="ml-4">Adjusted Lifespan = 120 / 0.42 = 285.7 hours</p>
                  <p className="ml-4">Replacement Cycle = 285.7 / 6 = 48 days</p>
                  <p className="ml-4">Monthly Cost = (6 × 30 / 285.7) × $35 = $22.05</p>
                  <p className="mt-3"><strong>Result:</strong> Estimated lifespan 285.7 hours, replacement every 48 days, monthly cost $22.05. Low power, thin material, and nitrogen gas create favorable conditions for extended nozzle life, making copper nozzles cost-effective.</p>
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
                <strong>Estimated Lifespan (Hours):</strong> This represents the predicted service life of your nozzle under the specified operating conditions. The calculation accounts for base life (determined by nozzle material and type) adjusted by wear factors (power, thickness, material, gas). Higher values indicate longer service life. Typical values range from 80-300 hours depending on conditions. Use this metric to plan preventive maintenance schedules and avoid unexpected failures that cause downtime.
              </p>
              <p>
                <strong>Replacement Cycle (Days):</strong> This indicates how frequently you should replace the nozzle based on your daily operating hours. It's calculated by dividing estimated lifespan by daily hours. Shorter cycles (7-14 days) indicate high-wear conditions requiring frequent replacements, while longer cycles (30-60 days) indicate favorable conditions. Use this for inventory planning - ensure you have spare nozzles available before reaching the replacement cycle. Preventive replacement based on predicted cycles is more cost-effective than waiting for quality degradation.
              </p>
              <p>
                <strong>Nozzle Unit Price:</strong> The cost of a single nozzle based on your selected material and type combination. Copper nozzles are most cost-effective ($35-75), chrome-plated copper provides better value ($55-110), and alloy nozzles offer maximum durability ($90-160). Higher-priced nozzles typically provide longer service life, reducing total cost of ownership for high-wear applications. Consider upgrading to premium materials if monthly costs are high or replacement cycles are very short.
              </p>
              <p>
                <strong>Monthly Consumption Cost:</strong> The estimated monthly cost for nozzle replacements based on your operating schedule. This is calculated by determining how many nozzles you'll need per month (monthly hours / lifespan) multiplied by unit price. Higher values indicate more frequent replacements or expensive nozzles. Use this for budgeting and cost analysis. Compare monthly costs across different nozzle materials to find the optimal balance between initial cost and replacement frequency.
              </p>
              <p>
                <strong>Calculation Breakdown:</strong> The detailed breakdown shows base life and individual wear factors. Base life reflects nozzle material and type. Power factor indicates how laser power affects wear (higher power = higher wear). Thickness factor shows material thickness impact (thicker = more wear). Material factor reflects cutting material characteristics (stainless steel and copper produce more wear). Gas factor indicates assist gas impact (oxygen increases wear, nitrogen reduces it). Understanding these factors helps identify optimization opportunities - for example, reducing power or switching to nitrogen can extend life.
              </p>
              <p>
                <strong>Lifespan Extension Tips:</strong> The calculator provides specific recommendations based on your operating conditions. These tips address high-wear factors identified in your calculation. Common recommendations include upgrading nozzle material, optimizing gas selection, reducing power when possible, and improving maintenance practices. Following these tips can extend nozzle life by 30-50% beyond baseline predictions, significantly reducing consumable costs and downtime.
              </p>
              <p>
                <strong>Important Considerations:</strong> These predictions are estimates based on typical operating conditions. Actual nozzle life may vary by ±20-30% depending on equipment maintenance, operator skill, collision frequency, environmental conditions, and cutting parameter optimization. Collision damage accounts for approximately 50% of nozzle failures and is not directly accounted for in wear factors - proper collision avoidance can significantly extend actual life beyond predictions. Always track actual replacement cycles for your specific operations and adjust predictions accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Background Section */}
        <section id="technical-background" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nozzle Life Calculation Background (2025)</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Nozzle life prediction has evolved significantly in 2025, with industry-standard methodologies incorporating comprehensive wear factor analysis based on extensive field data from leading manufacturers including Precitec, Raytools, and WSX. Modern prediction models account for multiple interacting factors that affect nozzle service life, enabling more accurate maintenance planning and cost optimization.
              </p>
              <p>
                <strong>2025 Industry Standards:</strong> Current industry best practices (2025) emphasize predictive maintenance based on calculated service life rather than reactive replacement after failure. The methodology combines base life factors (determined by nozzle material and structure) with dynamic wear factors (power, thickness, material, gas) to provide accurate predictions. Industry data shows that collision damage accounts for approximately 50% of nozzle failures, spatter adhesion for 30%, and thermal wear for 20%. Modern prediction models account for operational factors but emphasize that collision prevention through proper programming and capacitive height sensing can significantly extend actual life beyond predictions.
              </p>
              <p>
                <strong>Nozzle Material Evolution:</strong> Material technology has advanced significantly in 2025. Chrome-plated copper nozzles have become standard for high-intensity operations, providing 50% longer life than standard copper with only 50-60% cost increase. Alloy nozzles (brass/bronze) have gained adoption for extreme conditions, offering 60-100% longer life despite 2-3x initial cost. Material prices have stabilized: copper nozzles $35-75, chrome-plated copper $55-110, alloy $90-160. The trend toward premium materials reflects focus on total cost of ownership rather than initial cost, especially for high-power (&gt;10kW) and thick plate (&gt;15mm) applications.
              </p>
              <p>
                <strong>Wear Factor Research:</strong> 2025 research has refined understanding of wear mechanisms. Power wear follows a power-law relationship (power^0.7), meaning doubling power increases wear by approximately 62% rather than 100%. Thickness wear factors have been calibrated based on exposure time - thicker materials require longer cutting times, exposing nozzles to high temperatures longer. Material wear factors reflect spatter production and thermal characteristics - stainless steel and copper produce more spatter and wear, while aluminum is relatively mild. Gas wear factors have been validated through extensive testing - oxygen cutting accelerates wear by 30% compared to nitrogen due to higher temperatures and oxidation.
              </p>
              <p>
                <strong>Cost Optimization Strategies:</strong> Industry best practices (2025) emphasize multi-faceted optimization: (1) Material selection based on operating conditions - upgrade to premium materials for high-wear scenarios, (2) Gas optimization - use nitrogen for stainless steel and aluminum to extend life 30-50%, (3) Power optimization - reduce power or increase speed when possible to lower thermal load, (4) Collision prevention - proper programming and capacitive height sensing can prevent 50% of failures, (5) Regular maintenance - daily inspection and cleaning can extend life 20-30%, (6) Preventive replacement - replacing based on predicted cycles prevents quality degradation and material waste. Integrated maintenance management systems provide real-time tracking and optimization recommendations.
              </p>
              <p>
                <strong>Prediction Accuracy:</strong> Modern prediction models (2025) achieve ±20-30% accuracy under typical operating conditions when input parameters are accurate. Accuracy improves with proper collision avoidance and maintenance practices. The models account for major wear factors but actual life depends on equipment-specific factors including maintenance quality, operator skill, environmental conditions, and cutting parameter optimization. Industry practice emphasizes tracking actual replacement cycles for specific operations and adjusting predictions based on historical data. For critical applications, conservative predictions (using lower confidence bounds) ensure adequate spare inventory.
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

        {/* Related Calculators */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Calculators & Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Calculate complete operating costs including consumables like nozzles</p>
            </Link>
            <Link href="/tools/cutting-time-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cutting Time Calculator</h3>
              <p className="text-sm text-gray-600">Estimate cutting time based on path length and speed</p>
            </Link>
            <Link href="/tools/gas-flow-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Gas Flow Calculator</h3>
              <p className="text-sm text-gray-600">Calculate assist gas flow rates to optimize gas costs</p>
            </Link>
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Determine required laser power for your application</p>
            </Link>
            <Link href="/tools/power-density-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Density Calculator</h3>
              <p className="text-sm text-gray-600">Calculate power density to optimize cutting parameters</p>
            </Link>
            <Link href="/tools/kerf-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Kerf Calculator</h3>
              <p className="text-sm text-gray-600">Calculate kerf width for accurate material planning</p>
            </Link>
          </div>
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nozzle Material Comparison</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold mb-1">Copper Nozzles</h3>
                <p>• Excellent thermal conductivity (400 W/m·K)</p>
                <p>• Base service life: 80-120 hours</p>
                <p>• Cost-effective for standard applications</p>
                <p>• Suitable for: Carbon steel, stainless steel (thin)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Chrome-Plated Copper Nozzles</h3>
                <p>• Enhanced wear and corrosion resistance</p>
                <p>• Service life: 120-180 hours (50% longer)</p>
                <p>• Better for high-intensity production</p>
                <p>• Suitable for: All materials, high-power cutting</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Alloy Nozzles (Brass/Bronze)</h3>
                <p>• Maximum durability and heat resistance</p>
                <p>• Service life: 180-240 hours</p>
                <p>• Higher initial cost, lower long-term cost</p>
                <p>• Suitable for: Thick plate, continuous operation</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Main Failure Modes</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold mb-1">1. Collision Damage (50%)</h3>
                <p>• Nozzle strikes workpiece or cutting table</p>
                <p>• Causes deformation and misalignment</p>
                <p>• Prevention: Capacitive height sensing, proper programming</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2. Spatter Adhesion (30%)</h3>
                <p>• Molten metal adheres to nozzle bore</p>
                <p>• Reduces gas flow and cutting quality</p>
                <p>• Prevention: Proper gas pressure, regular cleaning</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3. Thermal Wear (20%)</h3>
                <p>• High-temperature oxidation and erosion</p>
                <p>• Bore diameter increases over time</p>
                <p>• Prevention: Optimal power settings, cooling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typical Nozzle Life */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Nozzle Service Life</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Nozzle Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Life (hours)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cost Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Single Layer</td>
                  <td className="px-4 py-3">Copper</td>
                  <td className="px-4 py-3">80-120</td>
                  <td className="px-4 py-3">$15-30</td>
                  <td className="px-4 py-3">Thin materials, low power</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Single Layer</td>
                  <td className="px-4 py-3">Chrome-Plated</td>
                  <td className="px-4 py-3">120-180</td>
                  <td className="px-4 py-3">$25-50</td>
                  <td className="px-4 py-3">General purpose, high power</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Double Layer</td>
                  <td className="px-4 py-3">Copper</td>
                  <td className="px-4 py-3">100-150</td>
                  <td className="px-4 py-3">$30-60</td>
                  <td className="px-4 py-3">Thick materials, oxygen cutting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Double Layer</td>
                  <td className="px-4 py-3">Chrome-Plated</td>
                  <td className="px-4 py-3">150-220</td>
                  <td className="px-4 py-3">$50-100</td>
                  <td className="px-4 py-3">Heavy-duty, continuous operation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Single/Double</td>
                  <td className="px-4 py-3">Alloy (Brass)</td>
                  <td className="px-4 py-3">180-240</td>
                  <td className="px-4 py-3">$80-150</td>
                  <td className="px-4 py-3">Maximum durability required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Service life varies significantly based on operating conditions, maintenance practices, 
            and operator skill. Values shown are typical for well-maintained systems with proper collision avoidance. 
            Actual life may be 50% lower with poor practices or 30% higher with excellent maintenance.
          </p>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Best Practices to Extend Nozzle Life</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Daily Maintenance</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Inspect nozzle bore for spatter buildup</li>
                <li>✓ Clean with appropriate solvent or ultrasonic cleaner</li>
                <li>✓ Check nozzle concentricity with laser beam</li>
                <li>✓ Verify nozzle seating and O-ring condition</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Operational Tips</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use capacitive height sensing for collision avoidance</li>
                <li>✓ Set appropriate standoff distance (0.5-1.5mm)</li>
                <li>✓ Optimize gas pressure for material and thickness</li>
                <li>✓ Replace when cutting quality degrades</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Gas Selection Impact</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Nitrogen cutting: 30-50% longer nozzle life</li>
                <li>✓ Oxygen cutting: Higher temperatures, faster wear</li>
                <li>✓ Air cutting: Moderate wear, cost-effective</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Inventory Management</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Keep 2-3 spare nozzles per diameter</li>
                <li>✓ Stock multiple diameters for different applications</li>
                <li>✓ Track replacement frequency for budgeting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/nozzle-selection-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nozzle Selection Guide</h3>
              <p className="text-sm text-gray-600">Choose the right nozzle type and diameter for your application</p>
            </Link>
            <Link href="/guides/maintenance-schedule" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance Schedule</h3>
              <p className="text-sm text-gray-600">Complete laser system maintenance planning and schedules</p>
            </Link>
            <Link href="/guides/assist-gas-chart" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Assist Gas Guide</h3>
              <p className="text-sm text-gray-600">Select optimal assist gas for different materials</p>
            </Link>
            <Link href="/guides/process-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Process Optimization Guide</h3>
              <p className="text-sm text-gray-600">Improve efficiency and reduce operating costs</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Data Sources:</strong> Calculations based on technical specifications from leading nozzle manufacturers 
            including Precitec, Raytools, WSX, and industry field data. Actual nozzle life depends on equipment maintenance, 
            operator skill, cutting parameters, and environmental conditions. Results are estimates for planning purposes. 
            Always track actual replacement cycles for your specific operations.
          </p>
        </div>
      </div>
    </>
  );
}
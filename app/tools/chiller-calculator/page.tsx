import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema, generateFAQSchema, generateCalculatorSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import ChillerCalculatorForm from '@/components/calculators/chiller-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Chiller Capacity Calculator 2025 - Calculate Cooling Requirements',
  description:
    'Professional laser chiller capacity calculator 2025 for fiber and CO2 lasers. Calculate required cooling capacity (kW), water flow rate (L/min), and chiller sizing based on laser power, type, ambient temperature, and duty cycle. Get accurate recommendations with 2025 industry standards.',
  path: '/tools/chiller-calculator',
  keywords: [
    'laser chiller calculator',
    'chiller calculator 2025',
    'chiller capacity calculator',
    'laser cooling calculator',
    'laser cooling calculator 2025',
    'chiller sizing calculator',
    'chiller sizing 2025',
    'laser water chiller',
    'cooling capacity calculation',
    'laser chiller requirements',
    'water flow rate calculator',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Chiller Cooling Requirements',
  description: 'Step-by-step guide to determine chiller capacity and water flow requirements for laser cutting systems',
  steps: [
    {
      name: 'Enter Laser Parameters',
      text: 'Input laser power (kW), laser type (fiber or CO2), ambient temperature, target water temperature, and operating duty cycle',
    },
    {
      name: 'Review Cooling Requirements',
      text: 'Get required cooling capacity in kW and kcal/h, recommended water flow rate in L/min, and chiller sizing recommendations',
    },
    {
      name: 'Select Chiller System',
      text: 'Use the calculated values to select an appropriately sized chiller system with adequate cooling capacity and flow rate',
    },
  ],
});

const calculatorSchema = generateCalculatorSchema({
  name: 'Laser Chiller Capacity Calculator',
  description: 'Calculate required cooling capacity and water flow rate for fiber and CO2 laser systems based on laser power, type, ambient temperature, and duty cycle. Get accurate chiller sizing recommendations.',
  url: '/tools/chiller-calculator',
  input: [
    { name: 'Laser Type', description: 'Laser type: fiber, CO2, or solid-state laser' },
    { name: 'Laser Power', description: 'Laser power in kilowatts (kW), typically 1-30 kW' },
    { name: 'Ambient Temperature', description: 'Ambient temperature in Celsius (°C), typically 10-45°C' },
    { name: 'Duty Cycle', description: 'Operating duty cycle percentage (%), typically 10-100%' },
    { name: 'Safety Factor', description: 'Safety factor multiplier, typically 1.05-1.8' },
  ],
  output: [
    { name: 'Required Cooling Capacity', description: 'Required cooling capacity in kilowatts (kW)' },
    { name: 'Cooling Capacity (kcal/h)', description: 'Required cooling capacity in kilocalories per hour (kcal/h)' },
    { name: 'Recommended Flow Rate', description: 'Recommended water flow rate in liters per minute (L/min)' },
  ],
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web Browser',
  softwareVersion: '2025',
});

const faqs = [
  {
    question: 'How do I determine the correct chiller capacity for my laser system?',
    answer: 'The chiller capacity depends on several factors: laser power, laser type (fiber lasers typically require 1.2-1.5x laser power in cooling capacity, while CO2 lasers require 0.8-1.2x), operating duty cycle, ambient temperature, and desired safety margin. Use this calculator by entering your laser power (kW), selecting your laser type, specifying ambient temperature and duty cycle, and applying an appropriate safety factor (typically 1.2-1.3). The calculator accounts for laser efficiency differences - fiber lasers convert 30-40% of input power to light (60-70% becomes heat), while CO2 lasers convert only 10-15% to light (85-90% becomes heat). Always add a 20-30% capacity margin for optimal performance and longevity.',
  },
  {
    question: 'Why do different laser types (fiber vs CO2) require different cooling capacities?',
    answer: 'Different laser types have vastly different electrical-to-optical conversion efficiencies. Fiber lasers typically achieve 30-40% efficiency, meaning only 30-40% of electrical power becomes laser light, while 60-70% becomes waste heat requiring cooling. CO2 lasers achieve only 10-15% efficiency, meaning 85-90% becomes waste heat. However, CO2 lasers also require additional cooling for the gas discharge tube and RF power supply. The calculator uses heat load factors: fiber lasers (0.35x), CO2 lasers (1.2x), and solid-state lasers (0.6x) to account for these efficiency differences. Additionally, CO2 lasers typically require lower operating temperatures (18-22°C) compared to fiber lasers (20-25°C), affecting cooling load calculations.',
  },
  {
    question: 'How does duty cycle affect chiller capacity requirements?',
    answer: 'Duty cycle represents the percentage of time your laser operates at full power during a typical operating cycle. A 100% duty cycle means continuous operation, while lower values indicate intermittent use. The calculator multiplies the base heat load by the duty cycle percentage (divided by 100) to determine average cooling requirements. For example, a 6kW fiber laser at 70% duty cycle generates less average heat than the same laser at 100% duty cycle. However, you should still size your chiller for peak load (100% duty cycle) if you plan to operate continuously, or use the actual duty cycle if intermittent operation is acceptable. Lower duty cycles allow for smaller, more cost-effective chiller systems.',
  },
  {
    question: 'What safety factor should I use and why is it necessary?',
    answer: 'Safety factors (typically 1.2-1.3, or 20-30% margin) account for several uncertainties: equipment aging and performance degradation over time, variations in ambient conditions, potential future power upgrades, system inefficiencies not captured in calculations, and operational safety margins. A safety factor of 1.2 provides a 20% capacity buffer, while 1.3 provides 30%. For critical applications or harsh environments, use 1.3-1.5. For standard applications with stable conditions, 1.2 is typically sufficient. Higher safety factors increase initial cost but provide better long-term reliability and accommodate future system modifications. Always consult with chiller manufacturers for their specific recommendations based on your application.',
  },
  {
    question: 'How does ambient temperature affect chiller capacity requirements?',
    answer: 'Ambient temperature directly impacts cooling load because the chiller must remove heat from the laser system and reject it to the environment. Higher ambient temperatures reduce the temperature difference between the cooling water and the environment, making heat rejection more difficult and requiring greater chiller capacity. The calculator applies an ambient temperature adjustment factor: for every degree Celsius above 25°C, cooling load increases by approximately 1.5%, up to a maximum of 25% increase. For example, operating at 35°C ambient temperature (10°C above standard) increases cooling load by approximately 15%. Conversely, lower ambient temperatures reduce cooling requirements. Always consider your worst-case ambient conditions (typically summer peak temperatures) when sizing chillers to ensure adequate capacity year-round.',
  },
  {
    question: 'How can I verify the calculator results and what additional factors should I consider when selecting a chiller?',
    answer: 'To verify calculator results, compare them with your laser manufacturer\'s specifications, consult chiller manufacturer sizing tools, and consider real-world operating data from similar installations. Additional factors to consider include: water quality requirements (deionized water, filtration needs), flow rate compatibility with your laser system\'s requirements, temperature control precision (±0.5°C vs ±1°C), pump pressure requirements, installation space constraints, noise levels, energy efficiency ratings, maintenance requirements, and future expansion plans. The calculator provides estimates based on typical conditions - actual requirements may vary ±15-20% due to equipment-specific characteristics, beam quality, optical system efficiency, and environmental factors. Always consult both laser and chiller manufacturer specifications for final sizing decisions, and consider adding 20-30% capacity margin for optimal performance.',
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
            Laser Chiller Capacity Calculator
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Calculate required cooling capacity and water flow rate for fiber and CO2 laser systems. Ensure optimal laser performance and longevity with proper chiller sizing.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <ChillerCalculatorForm />
        </div>

        {/* How to Use Section */}
        <section id="how-to-use" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Chiller Capacity Calculator</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Select Laser Type and Enter Power</h3>
                <p className="text-sm leading-relaxed">
                  Choose your laser type from the dropdown menu: Fiber, CO2, or Solid-State. Fiber lasers are the most common for metal cutting applications, while CO2 lasers are typically used for non-metal materials. Enter your laser power in kilowatts (kW). Most industrial fiber lasers range from 1kW to 30kW, while CO2 lasers typically range from 100W to 20kW. For example, a 6kW fiber laser would be entered as 6. Ensure you're using the actual operating power, not the maximum rated power, unless you're operating at maximum capacity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Enter Environmental Parameters</h3>
                <p className="text-sm leading-relaxed">
                  Input your ambient temperature in Celsius (°C). This is the temperature of the environment where your chiller will operate. Typical values range from 15°C to 40°C. Higher ambient temperatures increase cooling load, so use your worst-case scenario (typically summer peak temperatures) for accurate sizing. The calculator adjusts cooling requirements based on ambient temperature - for every degree above 25°C, cooling load increases by approximately 1.5%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Set Duty Cycle and Safety Factor</h3>
                <p className="text-sm leading-relaxed">
                  Enter your operating duty cycle as a percentage (10-100%). Duty cycle represents the percentage of time your laser operates at full power. A 100% duty cycle means continuous operation, while lower values indicate intermittent use. For example, if your laser operates 7 hours out of an 8-hour shift, your duty cycle is 87.5%. Set the safety factor multiplier (typically 1.2-1.3). A safety factor of 1.2 provides a 20% capacity buffer for equipment aging, environmental variations, and future upgrades. For critical applications, use 1.3-1.5.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Review Results and Recommendations</h3>
                <p className="text-sm leading-relaxed">
                  Click "Calculate" to get your required cooling capacity in kilowatts (kW) and kilocalories per hour (kcal/h), along with the recommended water flow rate in liters per minute (L/min). Use these values to select an appropriately sized chiller system. The calculator accounts for laser efficiency differences - fiber lasers require less cooling capacity per kW than CO2 lasers due to higher efficiency. Always verify calculated values with chiller manufacturer specifications and consider adding 20-30% capacity margin for optimal performance and longevity.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 1: 6kW Fiber Laser (Standard Application)</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Laser Type: Fiber</li>
                    <li>Laser Power: 6 kW</li>
                    <li>Ambient Temperature: 25°C</li>
                    <li>Duty Cycle: 70%</li>
                    <li>Safety Factor: 1.2</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Heat Load Factor (Fiber): 0.35</p>
                  <p className="ml-4">Ambient Adjustment: 1.0 (25°C is baseline)</p>
                  <p className="ml-4">Base Cooling = 6 kW × 0.35 × 0.70 × 1.0 = 1.47 kW</p>
                  <p className="ml-4">With Safety Factor = 1.47 kW × 1.2 = 1.76 kW</p>
                  <p className="ml-4">Cooling Capacity (kcal/h) = 1.76 × 860 = 1,514 kcal/h</p>
                  <p className="ml-4">Flow Rate = 4.5 L/min per kW × 1.47 = 6.6 L/min</p>
                  <p className="mt-3"><strong>Result:</strong> Required cooling capacity of 1.76 kW (1,514 kcal/h) with recommended flow rate of 6.6 L/min. This indicates a small to medium chiller system suitable for a 6kW fiber laser operating at 70% duty cycle in standard ambient conditions.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 2: 3kW CO2 Laser (Medium Power)</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Laser Type: CO2</li>
                    <li>Laser Power: 3 kW</li>
                    <li>Ambient Temperature: 30°C</li>
                    <li>Duty Cycle: 80%</li>
                    <li>Safety Factor: 1.3</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Heat Load Factor (CO2): 1.2</p>
                  <p className="ml-4">Ambient Adjustment: 1 + (30-25) × 0.015 = 1.075</p>
                  <p className="ml-4">Base Cooling = 3 kW × 1.2 × 0.80 × 1.075 = 3.096 kW</p>
                  <p className="ml-4">With Safety Factor = 3.096 kW × 1.3 = 4.02 kW</p>
                  <p className="ml-4">Cooling Capacity (kcal/h) = 4.02 × 860 = 3,457 kcal/h</p>
                  <p className="ml-4">Flow Rate = 4.5 L/min per kW × 3.096 = 13.9 L/min</p>
                  <p className="mt-3"><strong>Result:</strong> Required cooling capacity of 4.02 kW (3,457 kcal/h) with recommended flow rate of 13.9 L/min. The higher ambient temperature (30°C) and CO2 laser's lower efficiency result in significantly higher cooling requirements compared to a fiber laser of similar power. A medium-sized chiller system is recommended.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 3: 12kW Fiber Laser (High Power, Continuous Operation)</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Laser Type: Fiber</li>
                    <li>Laser Power: 12 kW</li>
                    <li>Ambient Temperature: 28°C</li>
                    <li>Duty Cycle: 100% (continuous)</li>
                    <li>Safety Factor: 1.25</li>
                  </ul>
                  <p className="mt-3"><strong>Calculation Process:</strong></p>
                  <p className="ml-4">Heat Load Factor (Fiber): 0.35</p>
                  <p className="ml-4">Ambient Adjustment: 1 + (28-25) × 0.015 = 1.045</p>
                  <p className="ml-4">Base Cooling = 12 kW × 0.35 × 1.0 × 1.045 = 4.389 kW</p>
                  <p className="ml-4">With Safety Factor = 4.389 kW × 1.25 = 5.49 kW</p>
                  <p className="ml-4">Cooling Capacity (kcal/h) = 5.49 × 860 = 4,721 kcal/h</p>
                  <p className="ml-4">Flow Rate = 4.5 L/min per kW × 4.389 = 19.8 L/min</p>
                  <p className="mt-3"><strong>Result:</strong> Required cooling capacity of 5.49 kW (4,721 kcal/h) with recommended flow rate of 19.8 L/min. The 100% duty cycle and slightly elevated ambient temperature require a larger chiller system. A high-capacity chiller (6-8 kW) is recommended to provide adequate margin for continuous operation and future system modifications.</p>
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
                <strong>Cooling Capacity (kW):</strong> This value represents the amount of heat removal capacity required from your chiller system, measured in kilowatts. It accounts for the waste heat generated by your laser system based on laser type, power, duty cycle, and ambient conditions. Select a chiller with a rated capacity equal to or greater than this value. For example, if the calculator shows 2.5 kW, choose a chiller rated for at least 2.5 kW (preferably 3-4 kW to provide margin). This ensures your chiller can handle peak loads and maintain stable operating temperatures.
              </p>
              <p>
                <strong>Cooling Capacity (kcal/h):</strong> This is the same cooling requirement expressed in kilocalories per hour, a common unit used in chiller specifications, especially in European and Asian markets. The conversion factor is 1 kW = 860 kcal/h. Some chiller manufacturers specify capacity in kcal/h, so this value helps you compare different models. For example, 2.5 kW equals 2,150 kcal/h. Always verify that the chiller's rated capacity matches or exceeds this value.
              </p>
              <p>
                <strong>Recommended Flow Rate (L/min):</strong> This indicates the water flow rate your chiller should provide to effectively remove heat from the laser system. Typical flow rates range from 3-6 L/min per kW of cooling capacity. The calculator uses an empirical value of 4.5 L/min per kW as a median recommendation. Higher flow rates improve heat transfer but require larger pumps and piping. Lower flow rates may be insufficient for heat removal. Ensure your selected chiller can provide the recommended flow rate, and verify that your laser system's flow requirements are compatible.
              </p>
              <p>
                <strong>Safety Factor Considerations:</strong> The safety factor (typically 1.2-1.3) accounts for uncertainties and future-proofing. A 1.2 safety factor means your chiller capacity is 20% greater than calculated requirements. This margin accommodates equipment aging, performance degradation over time, ambient temperature variations, potential future power upgrades, and system inefficiencies not captured in calculations. For critical applications or harsh environments, use higher safety factors (1.3-1.5) to ensure reliable long-term operation.
              </p>
              <p>
                <strong>Important Considerations:</strong> These calculations provide estimates based on typical laser efficiency and operating conditions. Actual cooling requirements may vary ±15-20% due to equipment-specific characteristics, beam quality, optical system efficiency, water quality, and environmental factors. Always consult both laser and chiller manufacturer specifications for final sizing decisions. Consider water quality requirements (deionized water, filtration), temperature control precision (±0.5°C vs ±1°C), pump pressure requirements, installation space constraints, and energy efficiency ratings when selecting your chiller system.
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
                Chiller capacity calculation for laser systems remains fundamental to ensuring optimal performance and equipment longevity in 2025. The industry standard approach continues to be based on laser efficiency, heat load factors, duty cycle, and environmental conditions, with modern systems achieving increasingly precise temperature control and energy efficiency.
              </p>
              <p>
                <strong>2025 Industry Standards:</strong> Current industry best practices (2025) emphasize the importance of accurate chiller sizing for maintaining laser beam quality, power stability, and component lifespan. Modern fiber lasers with efficiencies exceeding 40% require less cooling per kW of laser power compared to earlier generations, while CO2 lasers maintain their characteristic lower efficiency (10-15%) requiring proportionally more cooling. The 2025 standards recommend safety factors of 1.2-1.3 for standard applications, with higher factors (1.3-1.5) for critical applications or harsh environments. Temperature control precision has improved, with modern chillers achieving ±0.1°C stability compared to ±0.5°C in earlier systems.
              </p>
              <p>
                <strong>Laser Efficiency Evolution:</strong> The 2025 laser industry has seen continued improvements in electrical-to-optical conversion efficiency. Modern fiber lasers consistently achieve 35-45% efficiency (up from 30-35% in earlier generations), directly reducing cooling requirements per kW of laser power. CO2 laser efficiency has remained relatively stable at 10-15%, but improved gas management and RF power supply efficiency have reduced overall system heat generation. These efficiency improvements enable smaller, more energy-efficient chiller systems while maintaining or improving cooling performance.
              </p>
              <p>
                <strong>Environmental Considerations:</strong> Current industry guidelines (2025) emphasize the importance of considering worst-case ambient conditions when sizing chillers. Climate change and increasing ambient temperatures in many regions require careful evaluation of peak summer temperatures. The industry standard baseline of 25°C remains valid, but regional adjustments are increasingly important. Modern chillers incorporate variable-speed compressors and fans, improving energy efficiency at partial loads and reducing operating costs compared to fixed-speed systems. Energy efficiency ratings (EER, COP) have become standard specifications, with modern chillers achieving COP values exceeding 3.0.
              </p>
              <p>
                <strong>Measurement and Verification Standards:</strong> The ISO 13256 series standards for water-source heat pumps and chillers provide guidelines for measuring chiller capacity and efficiency. When using manufacturer specifications, ensure values are measured according to these standards for accurate comparisons. For critical applications, direct measurement using calibrated flow meters and temperature sensors is recommended to verify actual cooling capacity matches calculated requirements. The 2025 standards emphasize the importance of regular maintenance and performance monitoring to ensure chiller capacity remains adequate as equipment ages.
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

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Chiller Sizing Matters</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                Proper chiller sizing is critical for laser system performance and reliability. Undersized chillers can lead to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Temperature Fluctuations:</strong> Inconsistent laser output and beam quality</li>
                <li><strong>Thermal Stress:</strong> Reduced component lifespan and increased maintenance</li>
                <li><strong>Power Drift:</strong> Laser power variations affecting cutting quality</li>
                <li><strong>System Shutdowns:</strong> Overheating protection activation</li>
              </ul>
              <p className="mt-3">
                Properly sized chillers maintain stable operating temperatures, ensuring consistent laser performance and maximizing equipment lifespan.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cooling Requirements</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Laser cooling requirements depend on several factors:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Laser Power:</strong> Higher power lasers generate more heat requiring greater cooling capacity</li>
                <li><strong>Laser Type:</strong> Fiber lasers typically require 1.2-1.5x laser power in cooling capacity; CO2 lasers require 0.8-1.2x</li>
                <li><strong>Efficiency:</strong> Laser efficiency (typically 30-40% for fiber, 10-15% for CO2) determines heat generation</li>
                <li><strong>Ambient Temperature:</strong> Higher ambient temperatures increase cooling load</li>
                <li><strong>Duty Cycle:</strong> Continuous operation requires higher capacity than intermittent use</li>
                <li><strong>Water Temperature:</strong> Lower target temperatures require higher capacity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typical Chiller Sizing */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Chiller Sizing Guidelines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Laser Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Laser Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cooling Capacity</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Water Flow Rate</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Temperature Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">1-2 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">1.5-3 kW</td>
                  <td className="px-4 py-3">8-15 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">3-6 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">4-9 kW</td>
                  <td className="px-4 py-3">15-30 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">6-12 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">9-18 kW</td>
                  <td className="px-4 py-3">30-60 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">2-4 kW</td>
                  <td className="px-4 py-3">CO2</td>
                  <td className="px-4 py-3">2-5 kW</td>
                  <td className="px-4 py-3">10-20 L/min</td>
                  <td className="px-4 py-3">18-22°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4-10 kW</td>
                  <td className="px-4 py-3">CO2</td>
                  <td className="px-4 py-3">5-12 kW</td>
                  <td className="px-4 py-3">20-50 L/min</td>
                  <td className="px-4 py-3">18-22°C</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Values shown are typical for standard operating conditions (ambient 25°C, duty cycle 80%). 
            Actual requirements vary based on specific equipment, operating environment, and application demands. 
            Always consult laser and chiller manufacturer specifications.
          </p>
        </div>

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
              <p className="text-sm text-gray-600">Calculate laser power density for optimal cutting performance and process optimization</p>
            </Link>
            <Link href="/tools/gas-flow-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Gas Flow Calculator</h3>
              <p className="text-sm text-gray-600">Calculate assist gas flow rates for optimal cutting and welding performance</p>
            </Link>
            <Link href="/tools/cutting-time-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cutting Time Calculator</h3>
              <p className="text-sm text-gray-600">Estimate cutting time based on path length, speed, and power density</p>
            </Link>
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Estimate operating costs including energy consumption and chiller operation</p>
            </Link>
            <Link href="/tools/nozzle-life-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nozzle Life Calculator</h3>
              <p className="text-sm text-gray-600">Calculate nozzle lifespan based on operating conditions and maintenance schedule</p>
            </Link>
            <Link href="/guides/installation-requirements" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Installation Requirements</h3>
              <p className="text-sm text-gray-600">Cooling system installation and requirements for laser equipment</p>
            </Link>
            <Link href="/guides/safety-operations" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Safety Operations</h3>
              <p className="text-sm text-gray-600">Laser safety guidelines and operational best practices</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This calculator provides estimates based on typical laser efficiency and operating conditions. 
            Actual cooling requirements depend on specific equipment models, beam quality, operating parameters, and environmental conditions. 
            Always consult laser and chiller manufacturer specifications for accurate sizing. Consider adding 20-30% capacity margin for optimal performance and longevity.
          </p>
        </div>
      </div>
    </>
  );
}

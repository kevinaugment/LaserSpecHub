import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema, generateFAQSchema, generateCalculatorSchema } from '@/lib/utils/metadata';
import { LaserTypeWizardForm } from '@/components/calculators/laser-type-wizard-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Type Selection Wizard 2025 - Choose CO2, Fiber, or Solid-State Laser',
  description:
    'Professional laser type selection wizard 2025. Get personalized recommendations for CO2, Fiber, or Solid-State lasers based on materials, thickness, production volume, precision requirements, and budget. Make informed equipment decisions with our interactive guide.',
  path: '/tools/laser-type-wizard',
  keywords: [
    'laser type selection',
    'laser selection wizard 2025',
    'CO2 vs fiber laser',
    'fiber vs CO2 comparison',
    'laser technology selection',
    'choosing laser type',
    'laser equipment selection',
    'solid-state laser',
    'laser type wizard 2025',
    'laser selection tool',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Choose the Right Laser Type for Your Application',
  description: 'Step-by-step wizard to find the best laser technology for your manufacturing needs',
  steps: [
    {
      name: 'Specify Materials',
      text: 'Select primary materials you plan to cut: metals (steel, stainless steel, aluminum), non-metals (acrylic, wood, plastics), or both',
    },
    {
      name: 'Define Requirements',
      text: 'Provide details about material thickness range, production volume, precision requirements, and budget constraints',
    },
    {
      name: 'Review Recommendations',
      text: 'Get personalized laser type recommendation with detailed advantages, limitations, cost analysis, and equipment suggestions',
    },
  ],
});

const calculatorSchema = generateCalculatorSchema({
  name: 'Laser Type Selection Wizard',
  description: 'Interactive wizard to determine the optimal laser type (CO2, Fiber, or Solid-State) based on materials, thickness, production volume, precision requirements, speed needs, maintenance preferences, and budget constraints.',
  url: '/tools/laser-type-wizard',
  input: [
    { name: 'Material Types', description: 'Primary materials to cut: metals (steel, stainless steel, aluminum, copper, titanium) or non-metals (acrylic, wood, plastic, leather)' },
    { name: 'Material Thickness Range', description: 'Typical material thickness: thin (<3mm), medium (3-10mm), thick (10-25mm), or very thick (>25mm)' },
    { name: 'Production Volume', description: 'Expected production volume: low (prototyping), medium (regular production), high (continuous production), or industrial (24/7 operation)' },
    { name: 'Budget Range', description: 'Equipment budget: <$30k, $30k-$75k, $75k-$150k, or >$150k' },
    { name: 'Precision Requirements', description: 'Cutting precision level: standard (±0.1mm), high (±0.05mm), or ultra-precise (±0.02mm)' },
    { name: 'Speed Requirements', description: 'Importance of cutting speed: not critical, balanced, or very important' },
    { name: 'Maintenance Preference', description: 'Maintenance preference: minimal, moderate, or can handle complex maintenance' },
  ],
  output: [
    { name: 'Recommended Laser Type', description: 'Recommended laser type: Fiber, CO2, or Solid-State' },
    { name: 'Confidence Score', description: 'Confidence percentage indicating how well the recommendation matches requirements' },
    { name: 'Advantages', description: 'List of advantages for the recommended laser type' },
    { name: 'Considerations', description: 'Important considerations and limitations to be aware of' },
    { name: 'Cost Range', description: 'Typical investment range for the recommended laser type' },
    { name: 'Maintenance Level', description: 'Expected maintenance level: low, medium, or high' },
    { name: 'Typical Applications', description: 'Common applications suitable for the recommended laser type' },
  ],
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web Browser',
  softwareVersion: '2025',
});

const faqs = [
  {
    question: 'How accurate is the laser type recommendation from this wizard?',
    answer: 'The wizard provides recommendations based on industry-standard scoring algorithms that evaluate your specific requirements across multiple dimensions including materials, thickness, production volume, budget, precision, speed, and maintenance preferences. The confidence score indicates how well the recommendation matches your inputs. While the wizard provides valuable guidance, actual laser selection should also consider facility constraints, operator expertise, and specific material grades. We recommend using this as a starting point and consulting with equipment manufacturers for final decisions.',
  },
  {
    question: 'Can I use this wizard if I need to cut both metals and non-metals?',
    answer: 'Yes, the wizard supports mixed material requirements. When you select both metal and non-metal materials, the algorithm evaluates the balance and recommends the laser type that best handles your primary materials while considering versatility. For truly mixed operations, you may receive recommendations for CO2 lasers (which handle both) or suggestions to consider multiple systems. The wizard will indicate if a single laser type can effectively handle all your materials or if specialized equipment might be needed.',
  },
  {
    question: 'What\'s the difference between fiber, CO2, and solid-state lasers?',
    answer: 'Fiber lasers (1070nm wavelength) excel at metal cutting with high efficiency (30-40%), fast speeds, and minimal maintenance. They\'re ideal for steel, stainless steel, and aluminum up to 25mm thick. CO2 lasers (10.6μm wavelength) are versatile, excellent for non-metals like acrylic and wood, and have lower initial costs but require more maintenance. Solid-state lasers offer high power capability and excellent beam quality, making them suitable for thick metals (10-50mm) and demanding aerospace applications, though they come with higher costs and complexity.',
  },
  {
    question: 'How much should I budget for a laser cutting machine?',
    answer: 'Laser cutting machine costs vary significantly by type and power: CO2 lasers typically range from $15,000-$80,000, fiber lasers from $40,000-$150,000+, and solid-state lasers from $80,000-$200,000+. However, budget should also account for total cost of ownership including installation, training, maintenance, consumables, and operating costs. The wizard considers your budget range and recommends options that fit, but remember that higher initial investment often translates to lower operating costs and better long-term value, especially for high-volume production.',
  },
  {
    question: 'What maintenance is required for each laser type?',
    answer: 'Fiber lasers require minimal maintenance with diode lifetimes of 20,000-100,000 hours and no mirrors to align. CO2 lasers need moderate maintenance including periodic tube replacement (every 2,000-8,000 hours), mirror cleaning and alignment, and gas refills. Solid-state lasers require medium-to-high maintenance with lamp or crystal replacements and more complex optical systems. The wizard factors in your maintenance preference and technical capabilities to recommend systems that match your operational capacity.',
  },
  {
    question: 'Can I change my answers and get a new recommendation?',
    answer: 'Yes, you can restart the wizard at any time by clicking "Start Over" after receiving your recommendation. The wizard is designed to be interactive - feel free to experiment with different scenarios to see how various requirements affect recommendations. This helps you understand the trade-offs between different laser types and how specific factors (like budget constraints or material requirements) influence the optimal choice for your application.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function LaserTypeWizardPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <StructuredData data={calculatorSchema} />
      <StructuredData data={faqSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Header - Compact */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Type Selection Wizard
          </h1>
          <p className="text-base text-gray-600">
            Answer guided questions to get personalized recommendations for CO2, Fiber, or Solid-State laser technology. Find the perfect match for your application and budget.
          </p>
        </div>
        
        {/* Wizard - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <LaserTypeWizardForm />
        </div>

        {/* How to Use Section */}
        <section id="how-to-use" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Laser Type Selection Wizard</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Select Your Materials</h3>
                <p className="text-sm leading-relaxed">
                  Start by selecting all materials you plan to cut. You can choose multiple materials including metals (steel, stainless steel, aluminum, copper, titanium) and non-metals (acrylic, wood, plastic, leather). The wizard evaluates your material mix to determine which laser type handles your primary materials most effectively. If you work with both metals and non-metals, the algorithm will recommend the best balance for your specific combination.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Define Your Requirements</h3>
                <p className="text-sm leading-relaxed">
                  Provide details about your material thickness range, expected production volume, precision requirements, and budget constraints. For thickness, consider your typical work - thin sheets (&lt;3mm), medium thickness (3-10mm), thick plates (10-25mm), or very thick materials (&gt;25mm). Production volume helps determine whether you need high-speed, low-maintenance systems or can accept moderate maintenance for lower initial cost. Precision requirements affect beam quality needs, while budget constraints narrow the options to realistic choices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Specify Speed and Maintenance Preferences</h3>
                <p className="text-sm leading-relaxed">
                  Indicate how important cutting speed is for your operations - whether quality is the priority, you need a balance, or high throughput is critical. Also specify your maintenance preference based on your technical capabilities and downtime tolerance. Fiber lasers offer minimal maintenance but higher initial cost, while CO2 lasers require more maintenance but have lower upfront investment. Your preferences help the wizard recommend systems that match your operational capacity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Review Your Recommendation</h3>
                <p className="text-sm leading-relaxed">
                  After completing all questions, you'll receive a personalized recommendation with a confidence score indicating how well the suggested laser type matches your requirements. The results include detailed advantages, important considerations, typical cost range, maintenance level, and common applications. Review alternative options if multiple laser types score highly, and use the provided next steps to proceed with equipment research and supplier consultations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Examples Section */}
        <section id="examples" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selection Examples</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 1: Metal Fabrication Shop</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Materials: Steel, Stainless Steel, Aluminum</li>
                    <li>Thickness: 3-10mm (Medium)</li>
                    <li>Production Volume: High (Continuous production)</li>
                    <li>Budget: $75,000 - $150,000</li>
                    <li>Precision: High precision (±0.05mm)</li>
                    <li>Speed: Very important - High throughput needed</li>
                    <li>Maintenance: Minimal maintenance preferred</li>
                  </ul>
                  <p className="mt-3"><strong>Recommendation:</strong> Fiber Laser with 95% confidence score</p>
                  <p className="ml-4">The wizard recommends a Fiber Laser because it excels at metal cutting with high efficiency, fast speeds, and minimal maintenance - perfect for continuous production. The high precision requirement and need for high throughput align perfectly with fiber laser capabilities. The budget range accommodates quality fiber laser systems, and the minimal maintenance preference matches fiber laser's low-maintenance characteristics.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 2: Signage and Display Manufacturer</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Materials: Acrylic, Wood, MDF, Plastic</li>
                    <li>Thickness: N/A (Non-metal only)</li>
                    <li>Production Volume: Medium (Regular production runs)</li>
                    <li>Budget: $30,000 - $75,000</li>
                    <li>Precision: Standard (±0.1mm)</li>
                    <li>Speed: Balanced - Both speed and quality</li>
                    <li>Maintenance: Moderate maintenance acceptable</li>
                  </ul>
                  <p className="mt-3"><strong>Recommendation:</strong> CO2 Laser with 92% confidence score</p>
                  <p className="ml-4">CO2 Laser is the optimal choice for non-metal materials like acrylic and wood. The lower initial cost fits the budget range, and CO2 lasers excel at cutting these materials with good quality. The moderate maintenance preference aligns with CO2 laser requirements, and the balanced speed/quality need matches CO2 laser capabilities for non-metal processing.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Example 3: Aerospace Component Manufacturer</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Input Parameters:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Materials: Titanium, Stainless Steel, Aluminum</li>
                    <li>Thickness: 10-25mm (Thick)</li>
                    <li>Production Volume: Medium (Regular production runs)</li>
                    <li>Budget: &gt; $150,000</li>
                    <li>Precision: Ultra-precise (±0.02mm)</li>
                    <li>Speed: Balanced - Both speed and quality</li>
                    <li>Maintenance: Can handle complex maintenance</li>
                  </ul>
                  <p className="mt-3"><strong>Recommendation:</strong> Solid-State Laser with 88% confidence score</p>
                  <p className="ml-4">Solid-State Laser is recommended for thick metal cutting with ultra-precise requirements typical in aerospace applications. The high budget accommodates solid-state laser systems, and the ability to handle complex maintenance matches solid-state laser requirements. The excellent beam quality (M²&lt;1.2) of solid-state lasers enables the ultra-precise cutting needed for aerospace components.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interpreting Results Section */}
        <section id="interpreting-results" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Recommendation</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>Confidence Score:</strong> The percentage shown indicates how well the recommended laser type matches your specific requirements. A score above 85% suggests an excellent match, while scores between 70-85% indicate a good fit with some trade-offs. Scores below 70% may suggest that your requirements are challenging to meet with a single laser type, and you might want to consider alternative options or multiple systems.
              </p>
              <p>
                <strong>Advantages and Considerations:</strong> The recommendation includes detailed advantages that highlight why this laser type fits your needs, along with important considerations or limitations to be aware of. Review both sections carefully to understand the full picture. For example, a fiber laser may offer excellent metal cutting speed but limited capability for non-metals, while a CO2 laser excels at non-metals but has higher maintenance requirements.
              </p>
              <p>
                <strong>Cost Range:</strong> The provided cost range represents typical investment levels for the recommended laser type, but actual prices vary significantly based on power level, manufacturer, configuration, and included features. Remember to budget for installation, training, initial consumables, and potential facility modifications. Higher initial investment often translates to lower operating costs and better long-term value, especially for high-volume operations.
              </p>
              <p>
                <strong>Maintenance Level:</strong> This indicates the expected maintenance complexity and frequency. Low maintenance systems (like fiber lasers) require minimal intervention but may have higher upfront costs. Medium maintenance systems (like CO2 lasers) need periodic tube replacement and mirror alignment. High maintenance systems (like some solid-state lasers) require more complex servicing but offer specific advantages for demanding applications. Choose based on your technical capabilities and downtime tolerance.
              </p>
              <p>
                <strong>Alternative Options:</strong> If multiple laser types score highly (within 10-15% of each other), review the alternative options carefully. The second or third-ranked option might be better suited if you have specific constraints not fully captured in the wizard, such as existing facility infrastructure, operator expertise, or material grade variations. Use the comparison to understand trade-offs between different technologies.
              </p>
              <p>
                <strong>Next Steps:</strong> The wizard provides recommended next steps to guide your equipment selection process. These typically include researching specific models, requesting quotes, scheduling demonstrations, and evaluating total cost of ownership. Treat the wizard recommendation as a starting point for further research rather than a final decision, and always consult with equipment manufacturers and conduct test cuts before making final equipment purchases.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Background Section */}
        <section id="technical-background" className="mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Laser Technology Background (2025)</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Laser cutting technology continues to evolve rapidly in 2025, with significant advancements in beam quality, efficiency, and automation. The three primary laser types - Fiber, CO2, and Solid-State - each serve distinct market segments based on material compatibility, power requirements, and operational characteristics.
              </p>
              <p>
                <strong>2025 Industry Trends:</strong> Fiber lasers have become the dominant choice for metal cutting applications, with modern systems achieving M² values below 1.2 and power levels up to 30kW. The 2025 market sees increased adoption of fiber lasers in small-to-medium enterprises due to improved cost-effectiveness and reliability. CO2 lasers maintain strong positions in non-metal processing and mixed-material operations, with ongoing improvements in tube life and efficiency. Solid-state lasers continue to serve specialized high-power and precision applications, particularly in aerospace and heavy industrial sectors.
              </p>
              <p>
                <strong>Material Processing Capabilities:</strong> Fiber lasers (1070nm wavelength) excel at processing metals due to excellent absorption characteristics, achieving cutting speeds 3-5 times faster than CO2 lasers on thin to medium thickness metals. CO2 lasers (10.6μm wavelength) are unmatched for non-metals, providing clean cuts on acrylic, wood, and plastics with minimal charring. Solid-state lasers offer versatility across materials with exceptional beam quality, making them suitable for demanding applications requiring both precision and power.
              </p>
              <p>
                <strong>Cost and Efficiency Considerations:</strong> The 2025 laser market shows fiber lasers achieving 30-40% wall-plug efficiency compared to CO2 lasers at 10-15%, resulting in significantly lower operating costs for metal cutting applications. However, CO2 lasers maintain advantages in initial investment and versatility for mixed-material operations. Total cost of ownership calculations should include energy consumption, consumables, maintenance intervals, and downtime costs, which vary significantly between laser types and power levels.
              </p>
              <p>
                <strong>Selection Criteria Evolution:</strong> Modern selection processes in 2025 emphasize not just initial cost but total cost of ownership, environmental impact, and integration with Industry 4.0 systems. Automation compatibility, remote monitoring capabilities, and predictive maintenance features have become important factors. The wizard incorporates these considerations through production volume and maintenance preference questions, helping users make decisions aligned with modern manufacturing requirements.
              </p>
              <p>
                <strong>Future Outlook:</strong> Industry projections for 2025-2030 indicate continued fiber laser market growth, particularly in the 3-12kW power range for general metal fabrication. CO2 lasers are expected to maintain strong positions in specialized non-metal applications and entry-level markets. Solid-state laser technology continues advancing with improved efficiency and reliability, expanding applications in precision manufacturing and research sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Laser Technology Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fiber Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 1070nm (1.07μm)</p>
              <p><strong>Power Range:</strong> 1-30kW</p>
              <p><strong>Efficiency:</strong> 30-40%</p>
              <p><strong>Maintenance:</strong> Low (20,000-100,000 hours)</p>
            </div>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Metals: Steel, stainless steel, aluminum, copper, brass</li>
                <li>• Thin to medium thickness (0.5-25mm)</li>
                <li>• High-speed production</li>
                <li>• Precision cutting</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">CO2 Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 10.6μm</p>
              <p><strong>Power Range:</strong> 0.1-20kW</p>
              <p><strong>Efficiency:</strong> 10-15%</p>
              <p><strong>Maintenance:</strong> Medium (2,000-8,000 hours)</p>
            </div>
            <div className="border-t border-green-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Non-metals: Acrylic, wood, MDF, plastics, fabric</li>
                <li>• Thin metals (up to 6mm)</li>
                <li>• Versatile applications</li>
                <li>• Lower initial investment</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Solid-State Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 1064nm (Nd:YAG)</p>
              <p><strong>Power Range:</strong> 1-15kW</p>
              <p><strong>Efficiency:</strong> 20-30%</p>
              <p><strong>Maintenance:</strong> Medium-High</p>
            </div>
            <div className="border-t border-purple-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Thick metals (10-50mm)</li>
                <li>• Aerospace, automotive</li>
                <li>• High beam quality (M²&lt;1.2)</li>
                <li>• Demanding applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Fiber Laser</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">CO2 Laser</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Solid-State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Initial Cost</td>
                  <td className="px-4 py-3">$80k-300k</td>
                  <td className="px-4 py-3">$40k-150k</td>
                  <td className="px-4 py-3">$100k-400k</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Operating Cost</td>
                  <td className="px-4 py-3">Low</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Medium-High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Cutting Speed (Metals)</td>
                  <td className="px-4 py-3">Very High</td>
                  <td className="px-4 py-3">Low-Medium</td>
                  <td className="px-4 py-3">High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Edge Quality</td>
                  <td className="px-4 py-3">Excellent</td>
                  <td className="px-4 py-3">Good-Excellent</td>
                  <td className="px-4 py-3">Excellent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Beam Quality (M²)</td>
                  <td className="px-4 py-3">1.05-1.2</td>
                  <td className="px-4 py-3">1.1-1.3</td>
                  <td className="px-4 py-3">1.05-1.15</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Maintenance Interval</td>
                  <td className="px-4 py-3">20,000-100,000 hrs</td>
                  <td className="px-4 py-3">2,000-8,000 hrs</td>
                  <td className="px-4 py-3">5,000-15,000 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Consumables</td>
                  <td className="px-4 py-3">Minimal</td>
                  <td className="px-4 py-3">Gas, mirrors, lenses</td>
                  <td className="px-4 py-3">Lamps, crystals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Costs and specifications vary by manufacturer, power level, and configuration. 
            Values shown are typical ranges for industrial-grade systems. Consult equipment manufacturers for specific models.
          </p>
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
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your cutting application based on material and thickness</p>
            </Link>
            <Link href="/tools/power-density-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Density Calculator</h3>
              <p className="text-sm text-gray-600">Calculate power density based on laser power and focused spot diameter for optimal cutting</p>
            </Link>
            <Link href="/tools/workspace-matcher" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Workspace Matcher</h3>
              <p className="text-sm text-gray-600">Find the right laser cutting machine for your workspace and application requirements</p>
            </Link>
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Estimate total cost of ownership including initial investment, operating costs, and maintenance</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse laser cutting machines with detailed specifications and cutting parameters</p>
            </Link>
            <Link href="/comparison" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Comparison Tool</h3>
              <p className="text-sm text-gray-600">Side-by-side comparison of laser cutting machines to find the best match</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This wizard provides general recommendations based on typical applications and industry standards. 
            Actual laser selection depends on specific requirements including material grades, thickness ranges, production volumes, 
            quality standards, facility constraints, and budget. Always consult with laser equipment manufacturers and conduct 
            test cuts before making final equipment decisions. Consider total cost of ownership including maintenance, consumables, and energy costs.
          </p>
        </div>
      </div>
    </>
  );
}

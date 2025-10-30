import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Glossary & FAQ - Technical Terms Explained',
  description:
    'Comprehensive glossary of laser cutting terms, common questions answered, and technical definitions for laser equipment specifications.',
  path: '/guides/glossary',
  keywords: [
    'laser glossary',
    'laser FAQ',
    'laser terms',
    'technical definitions',
  ],
});

export default function GlossaryPage() {
  const terms = [
    {
      term: 'Assist Gas',
      definition: 'Gas (oxygen, nitrogen, or air) used during cutting to remove molten material and protect optics. Oxygen for ferrous metals, nitrogen for clean cuts on stainless/aluminum.',
    },
    {
      term: 'Beam Quality (M²)',
      definition: 'Measure of how closely the laser beam resembles an ideal Gaussian beam. Lower values (closer to 1.0) indicate better focus capability and precision.',
    },
    {
      term: 'Duty Cycle',
      definition: 'Percentage of time a laser can operate at full power without overheating. Higher duty cycle means more continuous operation capability.',
    },
    {
      term: 'Focal Length',
      definition: 'Distance from the focusing lens to the focal point. Affects depth of focus and cutting capability for different material thicknesses.',
    },
    {
      term: 'HAZ (Heat Affected Zone)',
      definition: 'Area of base material whose properties have been changed by the heat of cutting. Smaller HAZ indicates cleaner, more precise cutting.',
    },
    {
      term: 'Kerf Width',
      definition: 'Width of material removed by the laser beam. Narrower kerf means less material waste and ability to cut finer details.',
    },
    {
      term: 'Nesting',
      definition: 'Arrangement of parts on a sheet to maximize material utilization. Good nesting software can significantly reduce waste.',
    },
    {
      term: 'Pierce Time',
      definition: 'Time required to penetrate material before starting the cut path. Longer for thicker materials; affects overall cycle time.',
    },
    {
      term: 'Wavelength',
      definition: 'The frequency of the laser light, measured in micrometers (μm). Determines which materials the laser can effectively cut: 1.06μm (fiber) for metals, 10.6μm (CO2) for non-metals.',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between laser power and cutting speed?',
      answer: 'Laser power (measured in kW) is the energy output of the laser. Higher power enables cutting thicker materials and faster speeds. Cutting speed is how fast the laser head moves while cutting, measured in meters per minute (m/min).',
    },
    {
      question: 'How long do laser tubes/modules last?',
      answer: 'Fiber lasers typically last 100,000+ hours (10+ years). CO2 laser tubes last 2,000-10,000 hours depending on quality and power level, requiring periodic replacement.',
    },
    {
      question: 'Can I cut different materials on the same machine?',
      answer: 'Fiber lasers excel at metals but struggle with non-metals. CO2 lasers handle non-metals well and can cut thin metals. For diverse materials, you may need separate machines or a hybrid system.',
    },
    {
      question: 'What maintenance is required?',
      answer: 'Fiber lasers: minimal maintenance, mainly cleaning optics and replacing consumables. CO2 lasers: regular mirror cleaning, alignment checks, tube replacement, and gas refills.',
    },
    {
      question: 'How do I calculate ROI on a laser cutter?',
      answer: 'Consider: initial investment, operating costs (power, consumables, maintenance), labor savings vs current methods, increased throughput, improved quality reducing rework, and new revenue opportunities. Typical ROI is 1-3 years.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Cutting Glossary & FAQ
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Essential terms, definitions, and frequently asked questions about laser cutting technology.
        </p>

        {/* Glossary Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Terms</h2>
          <div className="space-y-6">
            {terms.map((item, idx) => (
              <Card key={idx} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.term}
                  </h3>
                  <p className="text-gray-700">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Unit Reference</h2>
          <Card variant="bordered">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Power & Energy</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>kW = kilowatt (1,000 watts)</li>
                    <li>W = watt</li>
                    <li>J = joule (energy unit)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Distance & Speed</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>mm = millimeter (1/1000 meter)</li>
                    <li>μm = micrometer (1/1000 mm)</li>
                    <li>m/min = meters per minute</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  );
}

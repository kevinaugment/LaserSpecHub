import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Equipment Compliance & Certification (OSHA, IEC 60825, CE, UL) | LaserSpecHub',
  description:
    'Compliance roadmap for industrial laser systems: OSHA, IEC 60825-1, ANSI Z136.1, CE, UL/ETL, NFPA, local permits. Practical checklists and documentation templates.',
  keywords: [
    'laser compliance',
    'IEC 60825-1 certification',
    'ANSI Z136.1',
    'OSHA laser safety',
    'CE marking laser',
    'UL certification laser',
    'NFPA ventilation',
  ],
  openGraph: {
    title: 'Laser Equipment Compliance & Certification Roadmap | LaserSpecHub',
    description: 'Step-by-step compliance checklists: OSHA, IEC, ANSI, CE, UL, NFPA, local permits',
    type: 'article',
  },
};

export default function ComplianceCertificationPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Equipment Compliance & Certification Roadmap',
    description:
      'Practical compliance roadmap for industrial laser systems across OSHA, IEC/ANSI, CE/UL and local permits',
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Equipment Compliance & Certification</h1>
            <p className="text-xl text-gray-600 mb-6">
              Step-by-step roadmap and checklists to pass safety audits and ensure compliance with OSHA, IEC/ANSI,
              CE/UL, and local regulations for Class 4 laser installations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                OSHA & ANSI Z136.1
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                IEC 60825-1
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                CE & UL
              </span>
            </div>
          </div>

          {/* OSHA / ANSI Program */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1) OSHA / ANSI Z136.1 Laser Safety Program</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Establish a written Laser Safety Program aligned to ANSI Z136.1 and enforced by OSHA. Appoint a Laser Safety Officer (LSO)
                with authority to implement controls, training, and incident response.
              </p>
              <ul className="list-disc ml-5">
                <li>Written policies: hazard assessment, SOPs, PPE, training, inspections, incident response</li>
                <li>LSO responsibilities: classification, area controls, eyewear specs, signage, audits</li>
                <li>Training: initial + annual refresher; records retained for employment + 3 years</li>
                <li>Inspections: quarterly safety inspections; corrective actions tracked to closure</li>
              </ul>
            </div>
          </div>

          {/* IEC 60825-1 Manufacturer Compliance */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2) IEC 60825-1 (Manufacturer & System Labeling)</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                IEC 60825-1 defines laser product classifications and labeling. Verify equipment labeling, interlocks, emission indicators,
                and user documentation. For CE markets, align with EN 60825-1 and the Machinery Directive.
              </p>
              <ul className="list-disc ml-5">
                <li>Labels: class designation, wavelength, output power, aperture location</li>
                <li>Engineering controls: protective housing, interlocks, key switch, emission indicator</li>
                <li>User information: manual safety section, maintenance procedures, alignment instructions</li>
                <li>Records: Declaration of Conformity (CE), Technical File availability</li>
              </ul>
            </div>
          </div>

          {/* CE Marking (EU) */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3) CE Marking (EU) – Machinery & EMC</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                For EU installations, ensure CE compliance under the Machinery Directive, EMC Directive, and Low Voltage Directive.
                Perform risk assessment per EN ISO 12100 and apply relevant EN standards.
              </p>
              <ul className="list-disc ml-5">
                <li>Risk assessment: EN ISO 12100; guarding and control reliability per EN ISO 13849</li>
                <li>EMC testing: emissions and immunity; proper earthing and cable routing</li>
                <li>Documentation: Declaration of Conformity; CE marking affixed</li>
              </ul>
            </div>
          </div>

          {/* UL / ETL (North America) */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4) UL / ETL Listing (North America)</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Many facilities require UL/ETL listing for electrical safety (NFPA 70/National Electrical Code). If equipment is not factory-listed,
                arrange for field evaluation by a Nationally Recognized Testing Laboratory (NRTL).
              </p>
              <ul className="list-disc ml-5">
                <li>Panel construction: proper overcurrent protection, conductor sizing, labeling</li>
                <li>Emergency stop circuits: category and performance level per EN ISO 13849</li>
                <li>Documentation: schematics, component lists, installation manual</li>
              </ul>
            </div>
          </div>

          {/* NFPA & Local Permits */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5) NFPA, Fire Marshal & Local Permits</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Coordinate early with local authorities having jurisdiction (AHJ). Ventilation discharge, compressed gases, electrical work,
                and structural modifications often require permits and inspections.
              </p>
              <ul className="list-disc ml-5">
                <li>NFPA 33/51/70/79 as applicable (spray, gases, electrical, industrial machinery)</li>
                <li>Fire suppression: fire extinguishers (ABC; Class D for metal cutting), clear egress paths</li>
                <li>Permit timeline: 2-6 weeks typical; plan accordingly in project schedule</li>
              </ul>
            </div>
          </div>

          {/* Audit-Ready Documentation Checklist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6) Audit-Ready Documentation Checklist</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc ml-5">
                <li>Laser inventory with class, wavelength, power, serials</li>
                <li>Hazard assessment and risk mitigation records</li>
                <li>SOPs: startup/shutdown, alignment, maintenance, emergency response</li>
                <li>Training records, attendance, and competency evaluations</li>
                <li>PPE specs (eyewear OD ratings), inspection logs, replacement records</li>
                <li>Interlock test logs, signage inspection logs, incident/near-miss reports</li>
              </ul>
            </div>
          </div>

          {/* Compliance Timeline & Cost */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Compliance Timeline & Cost (Typical)</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Program setup (policies, LSO, training): 2-4 weeks, $3,000-$8,000</li>
              <li>CE/UL verification and documentation: 2-6 weeks, $5,000-$20,000</li>
              <li>AHJ permits and inspections: 2-6 weeks, $1,000-$5,000</li>
              <li>Annual audits and refreshers: ongoing $5,000-$15,000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

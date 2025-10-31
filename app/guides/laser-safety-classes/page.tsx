import { Metadata } from 'next';
import { LASER_SAFETY_LAST_UPDATE, DATA_DISCLAIMER } from '@/lib/data/cheatsheets/laser-safety-data';
import { LaserSafetyClasses } from '@/components/cheatsheets/laser-safety-classes';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Safety Classes and Protection Standards (IEC 60825-1) | LaserSpecHub',
  description: 'Authoritative reference of laser safety classes (IEC 60825-1) with PPE, workplace requirements and regulatory standards for industrial laser systems.',
  keywords: [
    'laser safety classes',
    'IEC 60825-1',
    'laser PPE',
    'laser protection eyewear',
    'Class 4 laser safety',
    'laser safety standards'
  ],
  openGraph: {
    title: 'Laser Safety Classes (IEC 60825-1) | LaserSpecHub',
    description: 'Safety classes, PPE and workplace requirements for industrial lasers',
    type: 'article',
  },
};

export default function LaserSafetyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Safety Classes and Protection Standards',
    description: 'IEC 60825-1 classes, PPE, workplace and regulatory requirements',
    datePublished: LASER_SAFETY_LAST_UPDATE,
    dateModified: LASER_SAFETY_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Safety Classes (IEC 60825-1)</h1>
            <p className="text-xl text-gray-600 mb-6">
              Practical reference for laser safety classification, required PPE and workplace controls
              for industrial laser systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                IEC 60825-1
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                PPE Requirements
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Regulatory Standards
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {LASER_SAFETY_LAST_UPDATE}
              </span>
            </div>
          </div>

          {/* Practical Safety Implementation */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Practical Safety Implementation for Industrial Lasers
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Industrial laser cutting systems universally fall into Class 4 - the highest hazard classification. This requires 
                comprehensive safety protocols encompassing engineering controls, administrative procedures, and personal protective 
                equipment. Understanding and implementing these requirements is not just regulatory compliance but essential for 
                protecting personnel and maintaining insurance coverage.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Engineering Controls: Primary Defense</h3>
              <p>
                Engineering controls form the first line of defense and are most effective because they eliminate hazards at the source 
                rather than relying on human behavior. For Class 4 lasers, this means complete enclosure of the laser processing area. 
                Modern laser cutting systems incorporate interlocked safety enclosures that automatically shut down the laser when doors 
                are opened, preventing exposure to direct or reflected beams.
              </p>
              <p>
                Enclosure materials must be rated for the specific wavelength and power level. Fiber lasers (1.06μm) require different 
                protective materials than CO2 lasers (10.6μm). Polycarbonate panels work for CO2 but are transparent to fiber laser 
                wavelengths. Proper enclosures use wavelength-specific absorptive or reflective coatings. Viewing windows must incorporate 
                optical density (OD) filters appropriate for the wavelength and maximum power output.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Administrative Controls and Training</h3>
              <p>
                Even with perfect engineering controls, administrative procedures and training are critical. ANSI Z136.1 requires 
                designation of a Laser Safety Officer (LSO) responsible for implementing and monitoring safety programs. The LSO 
                establishes Standard Operating Procedures (SOPs), conducts hazard assessments, and ensures compliance with regulatory 
                requirements.
              </p>
              <p>
                Operator training must cover: laser hazards and biological effects, proper operation of safety interlocks, emergency 
                procedures, PPE selection and use, and recognition of unsafe conditions. Training should be documented and refreshed 
                annually. New operators require supervised operation periods before independent work authorization.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Protective Equipment Selection</h3>
              <p>
                While engineering controls should prevent exposure during normal operation, PPE provides backup protection during 
                maintenance, alignment, or emergency situations. Laser safety eyewear is the most critical PPE component. Eyewear must 
                be rated for the specific wavelength and maximum power level, specified by Optical Density (OD) rating.
              </p>
              <p>
                For fiber lasers (1.06μm) at typical industrial power levels (3-12kW), minimum OD 5+ eyewear is required for direct 
                beam exposure scenarios. However, most industrial applications involve enclosed systems where eyewear protects against 
                scattered or reflected radiation, allowing lower OD ratings (OD 3-4) for improved visibility. Always consult the laser 
                system's hazard classification and manufacturer recommendations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Regulatory Compliance and Inspection</h3>
              <p>
                Laser safety is regulated at multiple levels: federal (FDA CDRH for manufacturers, OSHA for workplace safety), state 
                (varying requirements), and industry standards (ANSI Z136 series). Facilities must maintain compliance documentation 
                including: laser inventory and classification, hazard assessments, SOPs, training records, incident reports, and 
                periodic safety audits.
              </p>
              <p>
                Regular safety inspections should verify: interlock functionality, warning signage visibility, PPE availability and 
                condition, enclosure integrity, and operator compliance with SOPs. Many insurance policies require annual third-party 
                safety audits for facilities operating Class 4 lasers. Non-compliance can result in citations, fines, increased 
                insurance premiums, or loss of coverage.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <LaserSafetyClasses />
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}







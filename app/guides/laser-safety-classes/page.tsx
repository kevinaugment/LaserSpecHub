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


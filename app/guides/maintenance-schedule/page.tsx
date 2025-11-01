import { Metadata } from 'next';
import { MAINTENANCE_LAST_UPDATE, DATA_DISCLAIMER } from '@/lib/data/cheatsheets/maintenance-schedule-data';
import { MaintenanceSchedule } from '@/components/cheatsheets/maintenance-schedule';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Maintenance Schedule and Operating Cost Guide | LaserSpecHub',
  description: 'Practical maintenance schedules and cost estimates for fiber and CO2 laser systems: daily, weekly, monthly, quarterly and annual tasks with annual cost benchmarks.',
  keywords: [
    'laser maintenance schedule',
    'fiber laser maintenance',
    'CO2 laser maintenance',
    'laser operating cost',
    'laser service guide'
  ],
  openGraph: {
    title: 'Laser Maintenance Schedule & Cost Guide | LaserSpecHub',
    description: 'Daily-to-annual maintenance tasks and cost ranges for fiber and CO2 lasers',
    type: 'article',
  },
};

export default function MaintenanceSchedulePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Maintenance Schedules and Cost Benchmarks',
    description: 'Maintenance tasks and annual cost estimates for fiber and CO2 laser equipment',
    datePublished: MAINTENANCE_LAST_UPDATE,
    dateModified: MAINTENANCE_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Cutting Machine Maintenance Schedule & Cost Guide</h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive maintenance schedules and cost estimates for fiber and CO2 laser cutting systems. 
              Use this professional guide to plan maintenance budgets, minimize downtime, and maximize equipment lifespan.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Fiber & CO2
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Schedules & Costs
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {MAINTENANCE_LAST_UPDATE}
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <MaintenanceSchedule />
          </div>

          {/* Quick Reference Section */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance Quick Reference</h3>
                <p className="text-gray-700 mb-4">
                  Keep this maintenance schedule accessible to your operations team. Regular adherence to these schedules 
                  ensures optimal performance, prevents costly breakdowns, and extends equipment life.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1">Daily Tasks (15-20 min)</div>
                    <div className="text-gray-600">Temperature checks, waste removal, window inspection</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1">Weekly Tasks (45-85 min)</div>
                    <div className="text-gray-600">Optical cleaning, nozzle inspection, system checks</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1">Monthly Tasks (90-150 min)</div>
                    <div className="text-gray-600">Component replacement, deep cleaning, calibration</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900 mb-1">Annual Service (8-15 hours)</div>
                    <div className="text-gray-600">Professional inspection, major component replacement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Maintenance Planning Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Maintenance Planning</h2>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive vs. Reactive Maintenance Economics</h3>
              <p className="text-gray-700 mb-4">
                Industry data shows that facilities following structured preventive maintenance programs achieve 30-50% lower total maintenance costs compared to reactive approaches. A well-planned maintenance program prevents catastrophic failures that can cost $10,000-40,000 in emergency repairs and lost production for a 6kW fiber laser system. Regular protective window replacement ($80-150 monthly) prevents costly laser head contamination damage that can exceed $15,000 in repairs and downtime.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Components and Replacement Cycles</h3>
              <p className="text-gray-700 mb-4">
                <strong>Fiber Laser Systems:</strong> Laser source modules are typically rated for 100,000 operational hours (11-14 years at single-shift operation), with gradual power degradation beginning around 70,000-80,000 hours. Focusing lens assemblies require replacement every 12-24 months ($400-900). Protective windows need monthly replacement ($80-150). Chiller coolant replacement quarterly ($100-150) maintains optimal beam quality and prevents thermal issues.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>CO2 Laser Systems:</strong> Sealed CO2 tubes typically last 10,000-20,000 hours (2-4 years at single-shift operation) with replacement costs of $1,500-4,000. Optical components (mirrors and lenses) require weekly cleaning and replacement every 6-24 months ($400-800 per complete set). Protective windows need replacement every 2-8 weeks ($40-100). RF power supplies typically last 30,000-50,000 hours with service costs of $500-1,000.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation and Predictive Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Modern laser systems increasingly incorporate IoT sensors and predictive analytics to optimize maintenance timing. Advanced monitoring systems track critical parameters including laser power output, cutting head temperature, lens contamination levels, and chiller performance. These systems alert operators before components fail, enabling scheduled maintenance during planned downtime. Predictive maintenance approaches can extend component life by 15-25% by identifying optimal maintenance windows and preventing premature replacements or catastrophic failures.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Scheduling and Maintenance Windows</h3>
              <p className="text-gray-700 mb-4">
                High-volume fabrication shops running 2-3 shifts must carefully schedule maintenance to minimize production impact. Best practice is to reserve 4-6 hours weekly during lowest-demand periods for preventive tasks. Annual major maintenance (laser source inspection, full optics replacement, servo system calibration) should be scheduled during planned shutdowns (holidays, inventory periods) and typically requires 2-3 days for fiber lasers, 3-5 days for CO2 systems.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spare Parts Inventory Strategy</h3>
              <p className="text-gray-700 mb-4">
                Critical spare parts inventory prevents extended downtime when components fail. Minimum recommended stock for single-machine operations includes protective windows (2-3 units), cutting nozzles (full set of common sizes 1.0-3.0mm), focusing lenses (1-2 units), and basic sensors. Multi-machine facilities should consider maintaining a complete cutting head assembly for immediate swap during failures. A reasonable spare parts investment ranges from 5-10% of machine purchase price for single machines, with economies of scale for larger fleets.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Factors and Maintenance Frequency</h3>
              <p className="text-gray-700 mb-4">
                Operating environment significantly impacts maintenance requirements. Facilities with poor dust control, high humidity, or temperature fluctuations may require 20-40% more frequent maintenance. Shops cutting materials that generate significant particulates or fumes need more frequent protective window inspection and cleaning. Proper extraction systems and environmental controls reduce maintenance frequency and extend component life. Clean, climate-controlled facilities with effective fume extraction typically achieve the longest component lifespans and lowest maintenance costs.
              </p>
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








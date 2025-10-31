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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Maintenance Schedule</h1>
            <p className="text-xl text-gray-600 mb-6">
              Actionable maintenance plans and cost ranges for fiber and CO2 laser systems. Use this guide to
              plan budgets, reduce downtime and extend component lifespan.
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

          {/* Strategic Maintenance Planning Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Maintenance Planning</h2>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive vs. Reactive Maintenance Economics</h3>
              <p className="text-gray-700 mb-4">
                Industry data shows that facilities following structured preventive maintenance programs achieve 40-60% lower total maintenance costs compared to reactive approaches. A well-planned maintenance program prevents catastrophic failures that can cost $15,000-50,000 in emergency repairs and lost production for a 6kW fiber laser system. For example, replacing a $1,200 protective window quarterly costs $4,800 annually but prevents a $25,000 laser head replacement from contamination damage.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Components and Replacement Cycles</h3>
              <p className="text-gray-700 mb-4">
                <strong>Fiber Laser Systems:</strong> Laser source modules typically rated for 100,000 operational hours (11-12 years at single-shift operation) but power degradation begins around 70,000-80,000 hours. Cutting heads require rebuild every 8,000-12,000 hours ($2,500-4,500) including lens, nozzle holder, and ceramic components. Chiller maintenance every 2,000 hours and coolant replacement annually ($300-800) is critical for maintaining beam quality.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>CO2 Laser Systems:</strong> CO2 tubes degrade faster, requiring replacement every 10,000-20,000 hours ($8,000-15,000 for sealed tubes, $3,000-6,000 for refillable tubes plus annual gas refills at $1,200-2,000). Optics (mirrors and lenses) require cleaning every 40-80 hours and replacement every 1,000-2,000 hours ($600-1,200 per set). RF power supply maintenance every 5,000 hours ($1,500-3,000).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation and Predictive Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Modern laser systems increasingly incorporate IoT sensors and predictive analytics to optimize maintenance timing. Advanced manufacturers like <a href="https://opmtlaser.com/technology/predictive-maintenance" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener">OPMT Laser integrate intelligent monitoring systems</a> that track critical parameters—laser power output, cutting head temperature, lens contamination, chiller performance—and alert operators before components fail. These systems can extend component life by 15-25% by identifying optimal maintenance windows and preventing premature replacements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Scheduling and Maintenance Windows</h3>
              <p className="text-gray-700 mb-4">
                High-volume fabrication shops running 2-3 shifts must carefully schedule maintenance to minimize production impact. Best practice is to reserve 4-6 hours weekly during lowest-demand periods for preventive tasks. Annual major maintenance (laser source inspection, full optics replacement, servo system calibration) should be scheduled during planned shutdowns (holidays, inventory periods) and typically requires 2-3 days for fiber lasers, 3-5 days for CO2 systems.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spare Parts Inventory Strategy</h3>
              <p className="text-gray-700 mb-4">
                Critical spare parts inventory prevents extended downtime when components fail. Minimum recommended stock for single-machine operations: protective windows (2-3 units), nozzles (full set of common sizes), focus lenses (2 units), collimating lenses (1 unit), cutting gas regulator (1 unit). Multi-machine facilities should maintain complete cutting head assembly ($6,000-12,000) for immediate swap during failures. Total recommended spare parts investment: 8-12% of machine purchase price for single machines, 5-8% per machine for fleets of 3+.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Factors and Maintenance Frequency</h3>
              <p className="text-gray-700 mb-4">
                Operating environment significantly impacts maintenance requirements. Facilities with poor dust control, high humidity, or temperature fluctuations require 30-50% more frequent maintenance. Shops cutting dusty materials (wood, composites) or materials generating significant fume (plastics) need daily protective window inspection and weekly deep cleaning versus standard bi-weekly schedules. Installing proper extraction systems ($5,000-20,000) and environmental controls ($8,000-25,000) reduces maintenance costs by 25-40% annually through extended component life.
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








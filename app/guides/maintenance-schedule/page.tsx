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

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}







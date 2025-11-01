import { FIBER_LASER_MAINTENANCE, CO2_LASER_MAINTENANCE, MAINTENANCE_COMPARISON } from '@/lib/data/cheatsheets/maintenance-schedule-data';

function ScheduleTable({ title, schedule }: { title: string; schedule: typeof FIBER_LASER_MAINTENANCE.schedule }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Daily</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {schedule.daily.map((t, i) => (
              <li key={i}>• {t.task} — {t.time} ({t.cost}) {t.critical && <span className="text-red-600 font-medium">[Critical]</span>}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Weekly</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {schedule.weekly.map((t, i) => (
              <li key={i}>• {t.task} — {t.time} ({t.cost}) {t.critical && <span className="text-red-600 font-medium">[Critical]</span>}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Monthly</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {schedule.monthly.map((t, i) => (
              <li key={i}>• {t.task} — {t.time} ({t.cost}) {t.critical && <span className="text-red-600 font-medium">[Critical]</span>}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Quarterly</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {schedule.quarterly.map((t, i) => (
              <li key={i}>• {t.task} — {t.time} ({t.cost}) {t.critical && <span className="text-red-600 font-medium">[Critical]</span>}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:col-span-2">
          <h4 className="font-medium text-gray-900 mb-2">Annually</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {schedule.annually.map((t, i) => (
              <li key={i}>• {t.task} — {t.time} ({t.cost}) {t.critical && <span className="text-red-600 font-medium">[Critical]</span>}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded p-3 text-sm">
          <div className="text-gray-600">Consumables (annual)</div>
          <div className="font-medium">{schedule.annualCostEstimate.consumables}</div>
        </div>
        <div className="bg-gray-50 rounded p-3 text-sm">
          <div className="text-gray-600">Service (annual)</div>
          <div className="font-medium">{schedule.annualCostEstimate.service}</div>
        </div>
        <div className="bg-gray-50 rounded p-3 text-sm">
          <div className="text-gray-600">Total (annual)</div>
          <div className="font-medium">{schedule.annualCostEstimate.total}</div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Typical Lifespan</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          {Object.entries(schedule.lifespan).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between">
              <span className="text-gray-700">{k}</span>
              <span className="font-medium text-gray-900">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MaintenanceSchedule() {
  return (
    <div className="space-y-8">
      <ScheduleTable title="Fiber Laser" schedule={FIBER_LASER_MAINTENANCE.schedule} />
      <ScheduleTable title="CO2 Laser" schedule={CO2_LASER_MAINTENANCE.schedule} />

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Fiber vs CO2 Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Item', 'Fiber', 'CO2'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {MAINTENANCE_COMPARISON.rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row[0]}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row[1]}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





















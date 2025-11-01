import { FIBER_LASER_MAINTENANCE, CO2_LASER_MAINTENANCE, MAINTENANCE_COMPARISON } from '@/lib/data/cheatsheets/maintenance-schedule-data';

function MaintenanceTimeline() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Frequency Overview</h3>
      <svg viewBox="0 0 800 200" className="w-full h-auto">
        {/* Timeline base */}
        <line x1="50" y1="100" x2="750" y2="100" stroke="#D1D5DB" strokeWidth="2" />
        
        {/* Daily */}
        <circle cx="100" cy="100" r="8" fill="#EF4444" />
        <text x="100" y="85" textAnchor="middle" className="text-xs" fill="#374151" fontWeight="600">Daily</text>
        <text x="100" y="130" textAnchor="middle" className="text-xs" fill="#6B7280">15-20 min</text>
        
        {/* Weekly */}
        <circle cx="250" cy="100" r="8" fill="#F59E0B" />
        <text x="250" y="85" textAnchor="middle" className="text-xs" fill="#374151" fontWeight="600">Weekly</text>
        <text x="250" y="130" textAnchor="middle" className="text-xs" fill="#6B7280">45-85 min</text>
        
        {/* Monthly */}
        <circle cx="400" cy="100" r="8" fill="#10B981" />
        <text x="400" y="85" textAnchor="middle" className="text-xs" fill="#374151" fontWeight="600">Monthly</text>
        <text x="400" y="130" textAnchor="middle" className="text-xs" fill="#6B7280">90-150 min</text>
        
        {/* Quarterly */}
        <circle cx="550" cy="100" r="8" fill="#3B82F6" />
        <text x="550" y="85" textAnchor="middle" className="text-xs" fill="#374151" fontWeight="600">Quarterly</text>
        <text x="550" y="130" textAnchor="middle" className="text-xs" fill="#6B7280">2-3 hours</text>
        
        {/* Annually */}
        <circle cx="700" cy="100" r="8" fill="#8B5CF6" />
        <text x="700" y="85" textAnchor="middle" className="text-xs" fill="#374151" fontWeight="600">Annually</text>
        <text x="700" y="130" textAnchor="middle" className="text-xs" fill="#6B7280">8-15 hours</text>
        
        {/* Connecting lines */}
        <line x1="100" y1="100" x2="250" y2="100" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
        <line x1="250" y1="100" x2="400" y2="100" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
        <line x1="400" y1="100" x2="550" y2="100" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
        <line x1="550" y1="100" x2="700" y2="100" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
      </svg>
      <div className="mt-4 text-sm text-gray-600 text-center">
        Regular maintenance intervals ensure optimal performance and extend equipment lifespan
      </div>
    </div>
  );
}

function ScheduleTable({ title, schedule }: { title: string; schedule: typeof FIBER_LASER_MAINTENANCE.schedule }) {
  const renderTaskList = (tasks: typeof schedule.daily, color: string) => (
    <ul className="text-sm text-gray-700 space-y-2">
      {tasks.map((t, i) => (
        <li key={i} className="flex items-start">
          <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${color}`}></span>
          <span className="flex-1">
            {t.task}
            <span className="text-gray-500 ml-2">— {t.time}</span>
            {t.cost !== '$0' && <span className="text-gray-500"> ({t.cost})</span>}
            {t.critical && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Critical</span>}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900 border-b-2 border-primary-500 pb-2">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <h4 className="font-semibold text-gray-900">Daily Maintenance</h4>
          </div>
          {renderTaskList(schedule.daily, 'bg-red-500')}
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
            <h4 className="font-semibold text-gray-900">Weekly Maintenance</h4>
          </div>
          {renderTaskList(schedule.weekly, 'bg-orange-500')}
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h4 className="font-semibold text-gray-900">Monthly Maintenance</h4>
          </div>
          {renderTaskList(schedule.monthly, 'bg-green-500')}
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <h4 className="font-semibold text-gray-900">Quarterly Maintenance</h4>
          </div>
          {renderTaskList(schedule.quarterly, 'bg-blue-500')}
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-lg p-4 shadow-sm md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <h4 className="font-semibold text-gray-900">Annual Maintenance</h4>
          </div>
          {renderTaskList(schedule.annually, 'bg-purple-500')}
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-300">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Annual Cost Estimate
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Consumables</div>
            <div className="text-2xl font-bold text-primary-600">{schedule.annualCostEstimate.consumables}</div>
            <div className="text-xs text-gray-500 mt-1">Parts & materials</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Service & Labor</div>
            <div className="text-2xl font-bold text-blue-600">{schedule.annualCostEstimate.service}</div>
            <div className="text-xs text-gray-500 mt-1">Professional service</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Annual Cost</div>
            <div className="text-2xl font-bold text-green-600">{schedule.annualCostEstimate.total}</div>
            <div className="text-xs text-gray-500 mt-1">Complete maintenance</div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Component Lifespan
        </h4>
        <div className="space-y-3">
          {Object.entries(schedule.lifespan).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="text-sm font-medium text-gray-700 capitalize">{k}</span>
              <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">{v}</span>
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
      <MaintenanceTimeline />
      <ScheduleTable title="Fiber Laser Maintenance Schedule" schedule={FIBER_LASER_MAINTENANCE.schedule} />
      <ScheduleTable title="CO2 Laser Maintenance Schedule" schedule={CO2_LASER_MAINTENANCE.schedule} />

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


























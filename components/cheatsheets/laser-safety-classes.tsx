'use client';

import { LASER_SAFETY_CLASSES, EYE_PROTECTION, REGULATORY_STANDARDS } from '@/lib/data/cheatsheets/laser-safety-data';

export function LaserSafetyClasses() {
  return (
    <div className="space-y-8">
      {/* Classes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LASER_SAFETY_CLASSES.map((c) => (
          <div key={c.class} className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{c.class}</h3>
                <div className="text-sm text-gray-600">{c.dangerLevel}</div>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                {c.powerLimit}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{c.description}</p>
            <div className="mb-3">
              <div className="text-xs font-medium text-gray-700 mb-1">Examples</div>
              <div className="flex flex-wrap gap-1">
                {c.examples.map((e, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">{e}</span>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs font-medium text-gray-700 mb-1">Protection</div>
              <div className="text-sm text-gray-800">{c.protectionRequired}</div>
            </div>
            {c.workplaceRequirements.length > 0 && (
              <div>
                <div className="text-xs font-medium text-gray-700 mb-1">Workplace Requirements</div>
                <ul className="text-xs text-gray-700 space-y-1">
                  {c.workplaceRequirements.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Eye Protection */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Eye Protection</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Laser Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Required OD</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {EYE_PROTECTION.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{p.laserType}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{p.requiredOD}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{p.material}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{p.notes || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Standards */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Standards</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGULATORY_STANDARDS.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900">{s.region}</div>
              <div className="text-sm text-gray-700">{s.standard}</div>
              <div className="text-xs text-gray-500">{s.authority}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







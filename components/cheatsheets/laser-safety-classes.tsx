'use client';

import { LASER_SAFETY_CLASSES, EYE_PROTECTION, REGULATORY_STANDARDS } from '@/lib/data/cheatsheets/laser-safety-data';
import { LaserSafetySymbol } from './laser-safety-symbols';

export function LaserSafetyClasses() {
  const getCardStyles = (laserClass: string) => {
    if (laserClass === 'Class 1' || laserClass === 'Class 1M') {
      return 'border-2 border-green-300 bg-green-50/30';
    }
    if (laserClass === 'Class 2' || laserClass === 'Class 2M') {
      return 'border-2 border-yellow-300 bg-yellow-50/30';
    }
    if (laserClass === 'Class 3R') {
      return 'border-2 border-orange-300 bg-orange-50/30';
    }
    if (laserClass === 'Class 3B') {
      return 'border-2 border-orange-400 bg-orange-50/50';
    }
    if (laserClass === 'Class 4') {
      return 'border-2 border-red-400 bg-red-50/50';
    }
    return 'border border-gray-200';
  };

  return (
    <div className="space-y-8">
      {/* Classes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LASER_SAFETY_CLASSES.map((c) => (
          <div key={c.class} className={`${getCardStyles(c.class)} rounded-lg p-5`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <LaserSafetySymbol laserClass={c.class} size={48} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{c.class}</h3>
                  <div className="text-sm text-gray-600">{c.dangerLevel}</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="px-3 py-1 bg-white border border-gray-300 text-gray-900 text-xs font-medium rounded-full">
                {c.powerLimit}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{c.description}</p>
            <div className="mb-3">
              <div className="text-xs font-medium text-gray-700 mb-1">Examples</div>
              <div className="flex flex-wrap gap-1">
                {c.examples.map((e, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white text-gray-700 rounded text-xs border border-gray-200">{e}</span>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs font-medium text-gray-700 mb-1">Protection</div>
              <div className="text-sm text-gray-800 font-medium">{c.protectionRequired}</div>
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


























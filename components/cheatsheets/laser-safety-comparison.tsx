'use client';

import { WAVELENGTH_EFFECTS, MPE_DATA, HAZARD_DISTANCES } from '@/lib/data/cheatsheets/laser-safety-data';

export function WavelengthEffectsTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Wavelength Biological Effects</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wavelength
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Range
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Laser Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Primary Hazard
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tissue Absorption
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Biological Effect
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {WAVELENGTH_EFFECTS.map((effect, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {effect.wavelength}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {effect.range}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {effect.laserType}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {effect.primaryHazard}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {effect.tissueAbsorption}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {effect.biologicalEffect}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-gray-600">
        <p><strong>Note:</strong> Wavelength determines which ocular tissue absorbs laser energy. Visible and near-IR (400-1400 nm) 
        penetrate to the retina, causing thermal burns. UV and far-IR are absorbed by the cornea.</p>
      </div>
    </div>
  );
}

export function MPETable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Maximum Permissible Exposure (MPE)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wavelength
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Exposure Duration
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MPE Value
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unit
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Application
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {MPE_DATA.map((mpe, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {mpe.wavelength}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {mpe.exposureDuration}
                </td>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  {mpe.mpeValue}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {mpe.unit}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {mpe.applicableClass}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-gray-600">
        <p><strong>MPE Definition:</strong> Maximum Permissible Exposure is the level of laser radiation to which a person may be 
        exposed without hazardous effects or adverse biological changes in the eye or skin. Values from IEC 60825-1:2014 and 
        ANSI Z136.1-2014.</p>
      </div>
    </div>
  );
}

export function HazardDistanceTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Nominal Ocular Hazard Distance (NOHD)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Laser Class
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Typical Power
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Wavelength
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NOHD Range
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {HAZARD_DISTANCES.map((hazard, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {hazard.laserClass}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {hazard.typicalPower}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {hazard.wavelength}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {hazard.nohdRange}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {hazard.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-gray-600">
        <p><strong>NOHD Definition:</strong> The distance along the axis of the unobstructed beam from a laser to the human eye 
        beyond which the irradiance or radiant exposure is below the appropriate MPE. NOHD varies with beam divergence, power, 
        and wavelength. Class 4 industrial lasers require complete enclosure regardless of calculated NOHD.</p>
      </div>
    </div>
  );
}

export function ClassComparisonChart() {
  const comparisonData = [
    {
      class: 'Class 1',
      power: '< 0.39 mW',
      eyeHazard: 'None',
      skinHazard: 'None',
      fireRisk: 'None',
      controls: 'None required',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300'
    },
    {
      class: 'Class 1M',
      power: '< 0.39 mW (expanded)',
      eyeHazard: 'With optics only',
      skinHazard: 'None',
      fireRisk: 'None',
      controls: 'Warning labels',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300'
    },
    {
      class: 'Class 2',
      power: '< 1 mW',
      eyeHazard: 'Low (blink reflex)',
      skinHazard: 'None',
      fireRisk: 'None',
      controls: 'Warning labels',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300'
    },
    {
      class: 'Class 2M',
      power: '< 1 mW (expanded)',
      eyeHazard: 'Low / with optics',
      skinHazard: 'None',
      fireRisk: 'None',
      controls: 'Labels, training',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300'
    },
    {
      class: 'Class 3R',
      power: '< 5 mW',
      eyeHazard: 'Moderate',
      skinHazard: 'None',
      fireRisk: 'None',
      controls: 'Access control, training',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300'
    },
    {
      class: 'Class 3B',
      power: '5-500 mW',
      eyeHazard: 'High (direct beam)',
      skinHazard: 'Possible',
      fireRisk: 'Low',
      controls: 'Eyewear, interlocks, LSO',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-400'
    },
    {
      class: 'Class 4',
      power: '> 500 mW',
      eyeHazard: 'Extreme (all reflections)',
      skinHazard: 'Yes',
      fireRisk: 'Yes',
      controls: 'Enclosure, full PPE, LSO',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400'
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Laser Class Comparison</h3>
      <div className="grid gap-3">
        {comparisonData.map((item, idx) => (
          <div key={idx} className={`border-2 ${item.borderColor} ${item.bgColor} rounded-lg p-4`}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Class</div>
                <div className="text-sm font-bold text-gray-900">{item.class}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Power</div>
                <div className="text-sm text-gray-900">{item.power}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Eye Hazard</div>
                <div className="text-sm text-gray-900">{item.eyeHazard}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Skin Hazard</div>
                <div className="text-sm text-gray-900">{item.skinHazard}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Fire Risk</div>
                <div className="text-sm text-gray-900">{item.fireRisk}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-500 uppercase">Controls</div>
                <div className="text-sm text-gray-900">{item.controls}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


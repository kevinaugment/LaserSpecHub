import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutter Installation Requirements (Power, Ventilation, Floor, Safety)',
  description: 'Complete installation checklist for industrial laser cutters: electrical power, ventilation, cooling, floor/load, space, logistics, and safety requirements with cost benchmarks.',
  path: '/guides/installation-requirements',
  keywords: [
    'laser cutter installation requirements',
    'industrial laser power requirements',
    'laser ventilation requirements',
    'laser cooling chiller requirements',
    'laser foundation floor load',
    'laser site preparation',
  ],
});

export default function InstallationRequirementsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutter Installation Requirements & Site Preparation',
    description:
      'Complete installation requirements for industrial laser cutters: electrical, ventilation, cooling, floor, logistics, safety',
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Cutter Installation Requirements</h1>
            <p className="text-xl text-gray-600 mb-6">
              Practical checklist for power, ventilation, cooling, floor load, logistics, safety, and commissioning—with
              typical costs and timelines to avoid surprises and delays.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Site Preparation
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Power & Ventilation
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Commissioning
              </span>
            </div>
          </div>

          {/* Electrical Requirements */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1) Electrical Power Requirements</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Most fiber laser systems (3-12kW) require 380-480V three-phase power. Typical main breaker sizing:
                3kW: 32-40A, 6kW: 50-63A, 12kW: 80-100A. Include 20% headroom for inrush and accessories.
                Use dedicated circuits with lockable disconnects and surge protection.
              </p>
              <ul className="list-disc ml-5">
                <li>Voltage: 400/415/440/480V 3Φ ±10% (check nameplate)</li>
                <li>Frequency: 50/60 Hz (ensure compatibility across laser, chiller, automation)</li>
                <li>Grounding: Dedicated earth connection, ground resistance &lt; 4Ω recommended</li>
                <li>Cable: Copper, shielded where required, route away from RF noise sources</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: Panel upgrade $5,000-$20,000; wiring and disconnects $2,000-$8,000.</p>
            </div>
          </div>

          {/* Ventilation & Fume Extraction */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2) Ventilation & Fume Extraction</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Provide ducted fume extraction sized to table area and cutting throughput. Include spark arrestors, prefilters,
                HEPA/carbon filtration as required by processed materials. Maintain slightly negative pressure in cutting
                enclosure to prevent fume escape.
              </p>
              <ul className="list-disc ml-5">
                <li>Airflow: 2,000-6,000 m³/h typical for 1.5×3m tables</li>
                <li>Ducting: Metal duct with minimal elbows; outdoor discharge ≥ 10m from intakes</li>
                <li>Filters: Metal fumes → HEPA; plastics/wood → carbon + HEPA (CO2)</li>
                <li>Noise: Silencers to keep &lt; 80 dB at operator position</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: $5,000-$20,000 depending on filtration and duct length.</p>
            </div>
          </div>

          {/* Cooling & Chiller */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3) Cooling & Chiller Requirements</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Closed-loop industrial chillers maintain laser and cutting head temperatures. Separate loops for source and optics
                are common. Ambient 18-28°C, relative humidity 40-60% recommended for stability.
              </p>
              <ul className="list-disc ml-5">
                <li>Capacity: 3kW laser → 4-6kW cooling; 12kW laser → 12-18kW cooling</li>
                <li>Water quality: Deionized water with corrosion inhibitors; maintain conductivity spec</li>
                <li>Maintenance: Quarterly filter change; annual coolant replacement and flush</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: $3,000-$12,000 (capacity dependent).</p>
            </div>
          </div>

          {/* Floor, Foundation & Space */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4) Floor, Foundation & Space Planning</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Ensure level concrete floor (flatness ≤ 2mm over 2m) with adequate load capacity (machine + material + pallet
                changer). Provide service clearance around all sides; verify crane or forklift access for installation.
              </p>
              <ul className="list-disc ml-5">
                <li>Load: 3-8 tons typical; floor bearing ≥ 5 t/m²</li>
                <li>Space: 1.5× table footprint minimum; allow 1m service aisle</li>
                <li>Vibration: Avoid proximity to stamping presses, heavy traffic, or compressors</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: Floor repair/leveling $2,000-$8,000; rigging $3,000-$10,000.</p>
            </div>
          </div>

          {/* Gas & Pneumatics */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5) Assist Gas, Air & Pneumatics</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Size nitrogen/oxygen supply for peak cutting demand. Dry, oil-free compressed air for pneumatics (and cutting if
                using air cutting). Include regulators, dryers, and high-pressure piping per code.
              </p>
              <ul className="list-disc ml-5">
                <li>Nitrogen: 10-22 bar; 50-200 m³/h depending on thickness and nozzle size</li>
                <li>Oxygen: 4-10 bar; flashback arrestors on lines</li>
                <li>Air: 7-10 bar, −20°C dew point; 0.5-1.0 m³/min for pneumatics</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: On-site N2 generator $12,000-$35,000; manifold & piping $2,000-$6,000.</p>
            </div>
          </div>

          {/* Safety & Regulatory */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6) Safety, Compliance & Training</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Class 4 laser installation requires interlocked enclosures, warning systems, LSO oversight, SOPs, and documented
                operator training. Align with IEC 60825-1, ANSI Z136.1 and local codes. Prepare for insurance and safety audits.
              </p>
              <ul className="list-disc ml-5">
                <li>Interlocks on doors; illuminated status beacons; emergency stops at operator positions</li>
                <li>Laser Safety Officer appointed; training records maintained and renewed annually</li>
                <li>Signage at all access points; eyewear rated for wavelength and power</li>
              </ul>
              <p className="text-sm text-gray-600">Cost benchmark: $10,000-$25,000 annual safety program and audits (single machine).</p>
            </div>
          </div>

          {/* Timeline & Commissioning */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7) Timeline & Commissioning Checklist</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc ml-5">
                <li>Week 1-2: Site audit, electrical & ventilation design, permits</li>
                <li>Week 3-6: Electrical/ventilation build-out, gas piping, floor prep</li>
                <li>Week 7: Rigging & placement, utility connections</li>
                <li>Week 8: Power-on, alignment, safety validation, trial cuts, operator training</li>
              </ul>
              <p className="text-sm text-gray-600">Total typical lead time: 6-8 weeks from contract to production readiness.</p>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Budget Summary (Typical)</h2>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Electrical upgrades: $7,000-$28,000</li>
              <li>Ventilation & filtration: $5,000-$20,000</li>
              <li>Chiller & cooling: $3,000-$12,000</li>
              <li>Rigging & logistics: $3,000-$10,000</li>
              <li>Safety program & audits: $10,000-$25,000/year</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
















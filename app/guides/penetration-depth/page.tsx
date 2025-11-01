import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Penetration Depth & Power Density Guide | LaserSpecHub',
  description:
    'Understand penetration depth, power density, and energy coupling in laser cutting. Practical formulas, rules of thumb, and parameter tuning strategies by material and thickness.',
  keywords: [
    'laser penetration depth',
    'laser power density',
    'energy coupling',
    'focus position penetration',
    'cutting power vs thickness',
    'minimum power for piercing',
  ],
  openGraph: {
    title: 'Laser Penetration Depth & Power Density | Practical Guide',
    description: 'Formulas and practical rules to achieve reliable piercing and through cuts by material',
    type: 'article',
  },
};

export default function PenetrationDepthPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Penetration Depth and Power Density Guide',
    description: 'How to achieve stable piercing and through-cuts with correct power density and focus',
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laser Penetration Depth & Power Density</h1>
            <p className="text-xl text-gray-600 mb-6">
              Achieve reliable piercing and through-cuts by understanding energy density, focus position,
              and material thermal properties. Includes formulas, rules of thumb, and tuning tips.
            </p>
          </div>

          {/* Fundamentals */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1) Fundamentals</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Penetration depth depends on <strong>power density</strong> at the material surface and efficient
                <strong> energy coupling</strong>. For fiber lasers, a small, high-quality focus spot with sufficient power and
                assist gas pressure enables rapid melting and ejection.
              </p>
              <ul className="list-disc ml-5">
                <li>Power Density (W/mm²) ≈ Power (W) / Focused Spot Area (mm²)</li>
                <li>Focused Spot Diameter ≈ (M² × f × λ) / (π × D)  (qualitative)</li>
                <li>Coupling Efficiency ∝ Absorption(material, λ) × Incidence × Surface Condition</li>
              </ul>
            </div>
          </div>

          {/* Rules of Thumb by Material */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2) Minimum Practical Power by Thickness (Rule-of-Thumb)</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Conservative estimates for continuous cutting (production quality) with fiber lasers:
              </p>
              <ul className="list-disc ml-5">
                <li>Mild steel: ~1kW per 5mm thickness (e.g., 6kW → up to ~30mm)</li>
                <li>Stainless: ~1kW per 3.5-4mm (e.g., 6kW → up to ~20-22mm)</li>
                <li>Aluminum: ~1kW per 2.5-3mm (e.g., 6kW → up to ~15-18mm)</li>
              </ul>
              <p className="text-sm text-gray-600">Piercing typically requires 1.2-1.5× the power density of continuous cutting.</p>
            </div>
          </div>

          {/* Piercing Techniques */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3) Piercing Techniques</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc ml-5">
                <li><strong>Pulsed Piercing:</strong> Start at 40-60% power, ramp to 100% over 0.3-0.8s to minimize splash.</li>
                <li><strong>Spiral Piercing:</strong> Start outside contour and spiral inward to spread heat and debris.</li>
                <li><strong>Gas Strategy:</strong> Steel with O₂ (4-8 bar) for exothermic assist; stainless/aluminum with N₂ (12-20 bar).</li>
                <li><strong>Focus Offset:</strong> Use negative focus (−1 to −3mm) for thick plates to position waist below surface.</li>
              </ul>
            </div>
          </div>

          {/* Focus Position & Spot Size */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4) Focus Position & Spot Size Tuning</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>
                Thin materials benefit from tighter focus (small spot, high energy density) with focus near surface.<br/>
                Thick plates benefit from slightly larger spot (greater depth of focus) and negative focus to maintain energy
                density along the kerf depth.
              </p>
              <ul className="list-disc ml-5">
                <li>Thin (≤3mm): focus at 0 to +0.5mm; small nozzle Ø1.0-1.5mm; high speed</li>
                <li>Medium (4-10mm): focus −0.5 to −1.5mm; nozzle Ø1.5-2.0mm; moderate speed</li>
                <li>Thick (≥12mm): focus −2 to −4mm; nozzle Ø2.0-2.5mm; slower speed, higher gas pressure</li>
              </ul>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5) Troubleshooting Penetration Issues</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc ml-5">
                <li><strong>Not piercing / stalls:</strong> Increase gas pressure, reduce speed, apply negative focus, ramp power.</li>
                <li><strong>Excessive spatter/dross:</strong> Reduce power, increase speed slightly, sharpen focus, ensure nozzle concentricity.</li>
                <li><strong>Wide kerf / taper:</strong> Reduce spot size or use multi-mode beam for thick plate; adjust focus deeper.</li>
                <li><strong>Oxidation on stainless:</strong> Switch to nitrogen, increase purity and pressure (14-18 bar).</li>
              </ul>
            </div>
          </div>

          {/* Quick Reference Table */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Quick Reference</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Steel (Fiber 1064nm)</h3>
                <p>1kW → 5mm; 3kW → 15mm; 6kW → 30mm (cut); pierce ×1.3 power density</p>
              </div>
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Stainless</h3>
                <p>1kW → 3.5-4mm; 3kW → 12mm; 6kW → 20-22mm; N₂ 14-18 bar</p>
              </div>
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Aluminum</h3>
                <p>1kW → 2.5-3mm; 3kW → 8-9mm; 6kW → 15-18mm; tight focus, high N₂</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









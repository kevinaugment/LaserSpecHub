import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Complete Laser Cutting Glossary - 15+ Technical Terms & 8 FAQs Explained',
  description:
    'Master laser cutting with our comprehensive glossary covering beam quality, kerf width, HAZ, assist gas, cutting speed, and more. Includes detailed explanations, practical examples, cost data, and expert answers to common questions.',
  path: '/guides/glossary',
  keywords: [
    'laser glossary',
    'laser FAQ',
    'laser terms',
    'technical definitions',
    'beam quality M2',
    'kerf width',
    'assist gas',
    'cutting speed',
    'fiber vs CO2 laser',
    'laser maintenance cost',
  ],
});

export default function GlossaryPage() {
  const terms = [
    {
      term: 'Assist Gas',
      definition: 'Gas (oxygen, nitrogen, or air) used during cutting to remove molten material and protect optics. Oxygen for ferrous metals, nitrogen for clean cuts on stainless/aluminum.',
      expanded: 'The assist gas serves three critical functions: (1) Expelling molten material from the cut zone through high-pressure injection (typically 0.5-2.0 MPa), (2) Chemically reacting with the material (oxygen creates exothermic reaction for faster cutting of carbon steel), and (3) Protecting the focusing lens from vapor and debris. Gas selection impacts cut quality: oxygen produces oxidized edges at 2-3x faster speeds on mild steel, nitrogen yields oxide-free edges for stainless/aluminum but requires 30-50% higher laser power, and compressed air offers economy for thin materials but compromises edge quality. Typical consumption: 0.5-2.0 m³/hr depending on nozzle size and pressure. Cost consideration: nitrogen is 5-10x more expensive than oxygen per m³.',
    },
    {
      term: 'Beam Quality (M²)',
      definition: 'Measure of how closely the laser beam resembles an ideal Gaussian beam. Lower values (closer to 1.0) indicate better focus capability and precision.',
      expanded: 'M² (M-squared) quantifies beam divergence and focusability. An ideal Gaussian beam has M² = 1.0, while industrial lasers range from 1.05 (premium fiber lasers) to 15+ (high-power CO2 lasers). Lower M² enables: smaller focused spot size (critical for thin materials and fine details), deeper penetration depth for thick materials, and tighter cutting kerf width. Example: M² = 1.1 fiber laser produces 0.05mm spot at 50mm focal length, versus M² = 1.5 CO2 laser producing 0.15mm spot. Trade-off: lower M² lasers typically cost 20-40% more but deliver superior precision. Beam quality degrades over laser lifespan due to optical contamination and thermal effects; monitor via periodic focus testing.',
    },
    {
      term: 'Duty Cycle',
      definition: 'Percentage of time a laser can operate at full power without overheating. Higher duty cycle means more continuous operation capability.',
      expanded: 'Duty cycle reflects thermal management capacity. Consumer lasers: 20-50% (cut 20 minutes, cool 40 minutes per hour). Industrial lasers: 80-100% (continuous operation with minor deratings). Factors affecting duty cycle: ambient temperature (30°C vs 40°C can reduce duty by 15%), chiller capacity (under-spec chillers throttle power), and material type (reflective aluminum generates more heat than steel). Real-world impact: 50% duty cycle system requires 2x as much calendar time for same production volume. Fiber lasers typically achieve 95-100% duty cycle due to superior thermal design, while older CO2 lasers range 70-90%. Verify duty cycle at maximum power and worst-case ambient conditions before purchase.',
    },
    {
      term: 'Focal Length',
      definition: 'Distance from the focusing lens to the focal point. Affects depth of focus and cutting capability for different material thicknesses.',
      expanded: 'Focal length determines spot size, depth of focus (DOF), and working distance. Common focal lengths: 50mm (0.05mm spot, ±0.5mm DOF, thin materials <3mm), 127mm (0.15mm spot, ±2mm DOF, universal standard for 3-15mm), 190mm (0.25mm spot, ±4mm DOF, thick plates 15-25mm), 254mm (0.35mm spot, ±6mm DOF, ultra-thick or 3D cutting). Selection criteria: shorter focal length = higher power density and precision but less tolerance to material warping; longer focal length = more forgiving but larger kerf and lower precision. Cost-effective strategy: stock multiple lenses ($200-800 each) and swap based on job requirements. Lens replacement frequency: 200-1000 operating hours depending on contamination exposure.',
    },
    {
      term: 'HAZ (Heat Affected Zone)',
      definition: 'Area of base material whose properties have been changed by the heat of cutting. Smaller HAZ indicates cleaner, more precise cutting.',
      expanded: 'HAZ extends 0.1-2.0mm beyond the cut edge depending on laser power, cutting speed, and material thermal conductivity. Within HAZ: grain structure changes, hardness variation (±50-200 HV), residual stress accumulation, and potential micro-cracking. Minimizing HAZ: increase cutting speed (reduces heat input time), use nitrogen instead of oxygen (eliminates exothermic reaction), optimize focus position (concentrate energy), and employ pulsed mode for heat-sensitive materials. Industry standards: aerospace/medical applications require HAZ <0.2mm; general fabrication tolerates 0.5-1.0mm. Measurement: metallographic cross-section analysis or hardness testing. Materials highly sensitive to HAZ: spring steel, tool steel, heat-treated alloys. Fiber lasers produce 30-50% smaller HAZ than CO2 lasers at equivalent cut quality due to higher absorption and faster speeds.',
    },
    {
      term: 'Kerf Width',
      definition: 'Width of material removed by the laser beam. Narrower kerf means less material waste and ability to cut finer details.',
      expanded: 'Kerf width ranges from 0.05mm (thin materials, low power) to 0.5mm (thick plates, high power). Calculation: kerf ≈ spot diameter + 10-30% (due to melt zone and beam divergence). Material impact: 0.3mm kerf on 1000mm cut removes 300mm² area; on high-value materials (titanium, Inconel), kerf optimization saves $5-20 per part. Kerf affects: minimum inside corner radius (typically 0.5-1.0x kerf width), small hole capability (hole diameter must be >1.5x material thickness and >kerf width), and nesting efficiency (parts must be spaced >kerf width apart). Kerf compensation: CAD/CAM software offsets cut path by 0.5x kerf width to achieve target dimensions. Fiber lasers produce 20-40% narrower kerf than CO2 lasers due to superior beam quality. Monitor kerf width via test cuts when changing parameters or materials.',
    },
    {
      term: 'Nesting',
      definition: 'Arrangement of parts on a sheet to maximize material utilization. Good nesting software can significantly reduce waste.',
      expanded: 'Nesting optimization increases material utilization from 60-75% (manual layout) to 85-95% (advanced algorithms). Techniques: common-line cutting (shares cut paths between adjacent parts, saving 15-25% time and material), true-shape nesting (rotates/mirrors parts for optimal fit), and remnant management (uses off-cuts from previous jobs). Leading software: SigmaNEST ($8,000-15,000, 90-95% utilization), FastCAM ($3,000-6,000, 85-90%), Lantek ($10,000-20,000, 85-92% plus MES integration). ROI calculation: improving utilization from 75% to 85% on $50,000/month steel consumption saves $6,667/month ($80,000/year), justifying software cost in 1-3 months. Best practices: group parts by material/thickness, respect grain direction for formed parts, maintain 3-5mm edge margin, and allow 1-3mm inter-part spacing. Advanced features: priority nesting (critical parts first), constraint-based layout (orientation limits), and AI-based learning from historical patterns.',
    },
    {
      term: 'Pierce Time',
      definition: 'Time required to penetrate material before starting the cut path. Longer for thicker materials; affects overall cycle time.',
      expanded: 'Pierce time ranges from 0.1 seconds (1mm steel) to 5+ seconds (25mm steel) and directly impacts cycle time on parts with multiple internal features. Calculation example: 20-hole part in 10mm steel at 1.5 sec/pierce = 30 seconds total pierce time; at 2 m/min cutting speed, 30 seconds = 1 meter of cutting time equivalent. Optimization strategies: (1) Pulse ramping - gradually increase power to avoid blow-back and lens contamination, (2) Pre-pierce techniques - start at lower power then ramp, reducing time by 20-30%, (3) Edge start - begin cut from sheet edge when possible, eliminating pierce entirely, and (4) Multi-hole piercing - pierce multiple holes before cutting contours, allowing cooling. Advanced systems: dynamic piercing adjusts parameters based on material thickness and type. Cost impact: reducing average pierce time from 2.0 to 1.5 seconds on 100-pierce/day shop saves 50 seconds daily (4 hours/month, $600-1000/year in labor and consumables). Pierce failure indicators: excessive spatter, lens damage, or incomplete penetration.',
    },
    {
      term: 'Wavelength',
      definition: 'The frequency of the laser light, measured in micrometers (μm). Determines which materials the laser can effectively cut: 1.06μm (fiber) for metals, 10.6μm (CO2) for non-metals.',
      expanded: 'Wavelength determines material absorption efficiency through physics of electron interaction. Common wavelengths: 355nm (UV, 95% absorption on most materials, precision micro-machining), 532nm (green, 55-65% on aluminum/copper, reflective metals), 1064nm (fiber/Nd:YAG, 88-92% on steel/stainless, poor on non-metals), 10600nm (CO2, 90-95% on organics, 8-10% on metals). Selection principle: choose wavelength with highest absorption for primary material (70%+ of volume). Multi-material shops face trade-offs: fiber laser excels at metals but cannot cut acrylic/wood; CO2 laser handles non-metals but is inefficient on metals. Hybrid solution: dual-laser system costs $200,000-400,000 but addresses full material range. Absorption temperature-dependence: cold aluminum absorbs 8% at 1064nm but increases to 15-25% when heated to 400-600°C, explaining why piercing aluminum is harder than continuous cutting. Emerging wavelengths: 450nm blue lasers (65% copper absorption) and 2000nm thulium lasers (polymer transparency).',
    },
  ];

  const additionalTerms = [
    {
      term: 'CNC (Computer Numerical Control)',
      definition: 'Automated control system that operates the laser cutter via pre-programmed sequences, translating CAD designs into precise cutting paths.',
      expanded: 'Modern laser CNCs integrate: motion control (servo/stepper motors driving X-Y-Z axes), process control (laser power modulation, gas flow), I/O management (sensors, limit switches, emergency stops), and HMI (human-machine interface). Leading controller brands: Siemens (Sinumerik, $15,000-30,000, excellent dynamics), Fanuc (0i-MF, $10,000-20,000, proven reliability), Beckhoff (TwinCAT, $8,000-15,000, open architecture), and domestic brands (Cypcut, $2,000-5,000, cost-effective for basic applications). Performance metrics: positioning accuracy (±0.02mm high-end vs ±0.10mm entry-level), max traversing speed (80-120 m/min), acceleration (1.0-2.5G), and interpolation capability (5-axis simultaneous for tube cutting). Software ecosystem: controllers run on Windows or Linux, interface via Ethernet/SERCOS/EtherCAT, and support industry protocols (G-code, ESSI, proprietary formats). Upgrade path: modern controllers enable retrofits of older mechanical platforms, improving performance by 30-50% at fraction of new machine cost.',
    },
    {
      term: 'Dross',
      definition: 'Solidified molten material that adheres to the bottom edge of a cut. Excessive dross indicates suboptimal cutting parameters or worn consumables.',
      expanded: 'Dross formation mechanisms: insufficient assist gas pressure (molten material not fully expelled), too-slow cutting speed (excessive heat input), incorrect focus position (beam geometry mismatch), or worn nozzle (disrupted gas flow). Dross types: (1) Top-side dross (rare, indicates severe parameter error), (2) Bottom-side adherent dross (common, removable by grinding but adds labor), and (3) Solidified beads (worst case, requires cutting re-work). Acceptance criteria: Class 1 parts (aerospace, medical) allow zero dross; Class 2 (automotive) tolerates light removable dross; Class 3 (general fabrication) permits moderate dross. Removal methods: hand grinding (5-15 minutes/part), vibratory finishing (batch process, 30-60 minutes), or chemical dissolution (for aluminum). Economic impact: dross rework costs $10-30/hour in labor; on 20 parts/day shop, eliminating dross saves $5,000-10,000/year. Prevention: increase assist pressure +10-20%, increase cutting speed +5-10%, verify nozzle condition, and optimize focus position (typically 0.5-1.5mm into material).',
    },
    {
      term: 'Edge Quality',
      definition: 'Surface finish of the cut edge, characterized by roughness (Ra), perpendicularity, dross, and HAZ. Higher quality grades command premium pricing in aerospace and medical applications.',
      expanded: 'ISO 9013 quality grades: Range 1 (Ra <3.2μm, perpendicularity <0.05mm, precision applications), Range 2 (Ra 3.2-6.3μm, perpendicularity 0.05-0.15mm, general fabrication), Range 3 (Ra 6.3-12.5μm, perpendicularity 0.15-0.30mm, rough cutting), Range 4 (Ra >12.5μm, demolition/scrap). Measurement: surface roughness tester (portable units $2,000-5,000) or visual comparison charts. Edge quality drivers: cutting speed (faster = rougher within optimal window), laser power stability (±2% fluctuation degrades quality), material quality (mill scale and impurities create irregularities), and consumable condition (worn nozzles reduce quality by 1-2 grades). Economic value: Range 1 parts command 20-50% premium over Range 3; achieving consistent Range 1 justifies investment in premium optics, auto-focus systems, and process monitoring. Troubleshooting: striations indicate speed/power mismatch, excessive taper suggests focus error, and bottom-edge roughness points to insufficient assist gas. Fiber lasers typically achieve 1 grade better edge quality than CO2 lasers at equivalent speeds due to superior beam quality and absorption.',
    },
    {
      term: 'Fiber Laser',
      definition: 'Laser type using optical fiber doped with rare-earth elements (ytterbium, erbium) as gain medium. Dominant technology for metal cutting due to high efficiency, low maintenance, and excellent beam quality.',
      expanded: 'Fiber laser advantages: 25-30% wall-plug efficiency (vs 10-15% CO2), M² = 1.05-1.15 (excellent focusability), maintenance-free design (no beam path alignment, no consumable optics), compact footprint (1/3 size of equivalent CO2), and 100,000+ hour lifespan. Power ranges: 500W-1kW (thin sheet, electronics), 1-3kW (general fabrication, 0.5-8mm steel), 3-6kW (medium plate, 1-12mm), 6-12kW (thick plate, 3-20mm), 12-30kW (ultra-thick, shipbuilding, heavy industry). Wavelength 1064nm provides 88-92% absorption on steel/stainless but only 8-15% on aluminum/copper (requiring high power for reflective metals). Cost: $50,000-80,000 (1kW), $80,000-120,000 (3kW), $120,000-180,000 (6kW), $200,000-300,000 (12kW). Operating costs: $3-8/hour all-in (electricity, consumables, maintenance). Market leaders: IPG Photonics (55% global share), Trumpf (premium quality, German engineering), Raycus (Chinese, cost-competitive), and nLIGHT (US, aerospace focus). Technology trends: beam shaping (variable spot size for quality optimization), wobble cutting (circular beam motion for smoother edges), and ultra-high power (40-60kW for shipbuilding).',
    },
    {
      term: 'CO2 Laser',
      definition: 'Laser using electrically-excited CO2 gas mixture as gain medium, producing 10.6μm wavelength. Ideal for non-metallic materials (wood, acrylic, fabric) due to excellent absorption.',
      expanded: 'CO2 laser characteristics: 10600nm wavelength (10x longer than fiber), 10-15% wall-plug efficiency, M² = 1.1-1.5 (excellent beam quality), and 2,000-10,000 hour tube life (RF-excited) or 10,000-20,000 hours (DC-excited). Power ranges: 20-150W (engraving, thin non-metals), 150-500W (signage, thicker acrylic/wood), 500-2000W (industrial cutting), 2-6kW (metal cutting, becoming obsolete vs fiber). Material absorption: 90-95% on organics (acrylic, wood, leather, fabric), 50-70% on ceramics/glass, but only 8-10% on metals (making metal cutting inefficient). Applications: signage (flame-polished acrylic edges, no post-processing), architectural models, textile cutting (fashion industry, automated spreading tables), and packaging prototypes. Maintenance: mirror cleaning/alignment every 200-500 hours ($200-500/service), tube replacement every 2,000-10,000 hours ($2,000-8,000), and optics replacement ($500-1,500/year). Cost: $3,000-10,000 (40-80W hobby), $15,000-40,000 (150-300W professional), $40,000-100,000 (1-2kW industrial). Market trend: fiber lasers replacing CO2 for metal cutting; CO2 remains dominant for non-metals where fiber cannot compete.',
    },
    {
      term: 'Cutting Speed',
      definition: 'Velocity of laser head movement during cutting, measured in meters/minute (m/min) or inches/minute (ipm). Directly impacts productivity and operating cost per part.',
      expanded: 'Speed ranges by material/thickness: 1mm steel (15-20 m/min fiber, 8-12 CO2), 3mm steel (8-12 fiber, 4-6 CO2), 10mm steel (2-3 fiber, 1-2 CO2), 20mm steel (0.5-1.0 fiber, CO2 impractical). Speed optimization: too fast causes incomplete cutting and excessive dross; too slow causes excessive HAZ and poor edge quality. Optimal speed varies with power: 6kW cuts 3mm steel at 12 m/min vs 3kW at 6-8 m/min (doubling power doesn\'t double speed due to thermal physics). Economic calculation: increasing speed from 6 to 10 m/min on 100-meter/day shop adds 67% productivity (40 minutes saved), worth $100-200/day ($25,000-50,000/year). Speed limiters: material thermal conductivity (aluminum dissipates heat, slowing cutting), assist gas flow rate (insufficient volume limits speed), and machine dynamics (acceleration capability affects small feature cutting). High-speed cutting requires: sufficient laser power reserves, optimized acceleration settings, high-pressure gas delivery (18-25 bar nitrogen), and advanced motion control. Test method: run speed tests in 1 m/min increments until quality degrades, then back off 10-15% for production setting.',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between laser power and cutting speed?',
      answer: 'Laser power (measured in kW) is the energy output of the laser source. Higher power enables cutting thicker materials and achieving faster speeds on any given thickness. Cutting speed is how fast the laser head physically moves while cutting, measured in meters per minute (m/min) or inches per minute (ipm). The relationship is not linear: doubling power typically increases speed by 50-70% (not 100%) due to thermal physics limits on how quickly material can absorb and melt. Optimal cutting speed balances productivity (faster = more parts/hour) with quality (too fast causes dross and incomplete cuts; too slow creates excessive HAZ and rough edges).',
    },
    {
      question: 'How long do laser tubes/modules last?',
      answer: 'Fiber lasers typically last 100,000+ hours (equivalent to 11+ years of continuous operation or 20+ years of single-shift use), with minimal degradation until end-of-life. CO2 laser tubes vary widely: RF-excited tubes last 10,000-20,000 hours ($8,000-15,000 replacement cost), DC-excited tubes last 2,000-8,000 hours ($2,000-6,000 replacement), and sealed glass tubes (hobby grade) last 1,000-3,000 hours ($300-1,000 replacement). Fiber laser longevity is a key advantage: over 10 years, fiber laser saves $20,000-40,000 in tube replacements compared to CO2. Lifespan factors: operating duty cycle, thermal cycling frequency, environmental contamination, and power level (high-power accelerates wear).',
    },
    {
      question: 'Can I cut different materials on the same machine?',
      answer: 'It depends on wavelength compatibility. Fiber lasers (1064nm) excel at metals (steel, stainless, aluminum, brass) but cannot effectively cut non-metals like acrylic, wood, or fabric—the wavelength is poorly absorbed, resulting in melting rather than clean cutting. CO2 lasers (10600nm) are ideal for non-metals (acrylic, wood, leather, paper) and can cut thin metals (<3mm steel) but are inefficient on thicker metals. For mixed production: (1) Single-material dominance (70%+ volume) → choose laser optimized for that material and outsource the rest, (2) Balanced mix (40/60 split) → consider dual-laser investment ($150,000-350,000 total) for operational flexibility, or (3) Specialty applications → explore green (532nm) or UV (355nm) lasers for unique materials like copper, PCBs, or ceramics.',
    },
    {
      question: 'What maintenance is required?',
      answer: 'Fiber lasers: Daily—inspect protective window (5 min), check chiller level/temperature (5 min); Weekly—clean focusing lens (15 min), verify gas pressures (5 min); Monthly—inspect nozzle wear (10 min), clean extraction filters (20 min), lubricate axes (30 min). Annual cost: $2,000-5,000 (consumables + service). CO2 lasers: Daily—same as fiber; Weekly—same as fiber PLUS clean 3-6 mirrors (30 min), check beam alignment (20 min); Quarterly—replace mirrors/lenses ($500-1,500), realign optical path (1-2 hours or $500-1,000 service call); 2-5 years—replace laser tube ($2,000-15,000). Annual cost: $5,000-12,000. Key difference: fiber\'s sealed optical path eliminates 60-70% of CO2 maintenance burden. Neglecting maintenance reduces cutting quality within weeks and can cause catastrophic failures (lens damage, optics contamination) costing $5,000-20,000 in emergency repairs.',
    },
    {
      question: 'How do I calculate ROI on a laser cutter?',
      answer: 'ROI = (Annual Savings + New Revenue - Annual Costs) / Initial Investment × 100%. Components: (1) Initial Investment—equipment ($50,000-300,000), installation ($5,000-20,000), training ($2,000-10,000), facility prep ($3,000-30,000 for electrical/ventilation); (2) Annual Savings—labor reduction (eliminate 1-3 operators at $40,000-60,000 each), faster production (2-5x throughput vs manual methods), reduced scrap (improved nesting saves 5-15% material), outsourcing elimination ($20,000-100,000/year for shops currently outsourcing cutting); (3) New Revenue—taking jobs previously declined due to capacity/capability ($50,000-200,000/year), premium pricing for precision work (+20-40% margins), and faster delivery enabling more customers; (4) Annual Costs—electricity ($3,000-12,000), consumables ($5,000-20,000), maintenance ($2,000-12,000), gas ($5,000-25,000 for nitrogen), and operator ($40,000-70,000). Typical scenarios: High-volume metal fabrication shop investing $150,000 in 6kW fiber laser achieves 12-18 month ROI; sign shop investing $30,000 in 80W CO2 laser achieves 8-14 month ROI; precision job shop investing $250,000 in 12kW fiber laser achieves 18-30 month ROI.',
    },
    {
      question: 'What laser power do I need for my application?',
      answer: 'Power selection depends on material type, thickness range, and production volume. Steel/Stainless: 1kW cuts 0.5-3mm (thin sheet, electronics), 3kW cuts 1-8mm (general fabrication, 80% of market), 6kW cuts 3-12mm (medium plate), 12kW cuts 6-25mm (thick plate, structural), 20kW+ cuts 10-40mm (shipbuilding, heavy industry). Aluminum (harder to cut due to reflectivity): 3kW cuts 1-4mm, 6kW cuts 2-8mm, 12kW cuts 4-15mm. Rule of thumb: choose power where your thickest common material (70% of jobs) falls in the middle of the capability range, not at the extreme limit. Example: shop primarily cutting 3-6mm steel should choose 6kW (capable of 3-12mm), not 3kW (struggles at 6mm). Under-powering forces slow speeds and poor quality; over-powering wastes capital ($50,000-100,000 extra) but provides future capacity. Budget constraint: start with lower power and optimize speeds/quality rather than buying insufficient capability.',
    },
    {
      question: 'What are the hidden costs of laser cutting?',
      answer: 'Beyond the purchase price, budget for: (1) Facility preparation—electrical upgrade to 3-phase 200-480V ($3,000-15,000), dedicated circuit for chiller ($1,000-3,000), fume extraction system with ducting ($5,000-25,000), compressed air system 8-10 bar ($2,000-10,000), and floor reinforcement for heavy machines ($2,000-8,000). (2) Gas supply—bulk nitrogen tank installation ($3,000-8,000) or on-site generator ($40,000-80,000 upfront but $0.10/m³ vs $0.50-1.50/m³ delivered), oxygen tank rental ($50-150/month), and gas usage ($500-3,000/month depending on volume). (3) Consumables—focusing lenses ($200-800, replace every 200-1,000 hours), protective windows ($50-200, replace every 100-500 hours), nozzles ($15-80 each, replace every 8-40 hours of cutting), and cutting bed slats ($500-2,000, replace annually). (4) Training—operator certification ($2,000-5,000), programming courses ($1,000-3,000), and ongoing skill development. (5) Insurance—equipment coverage ($1,000-3,000/year) and liability for Class 4 laser operation ($500-2,000/year increase). (6) Downtime—average 2-5% unplanned downtime costs $200-500/day in lost production plus expedited parts shipping. Total hidden costs: $15,000-50,000 first year, $8,000-30,000/year ongoing.',
    },
    {
      question: 'Should I buy new, used, or refurbished laser equipment?',
      answer: 'New equipment ($50,000-300,000): Pros—full warranty (1-3 years), latest technology, known service history, financing options, manufacturer support. Cons—highest initial cost, 20-30% depreciation in first year. Best for: production shops requiring reliability, businesses with financing access, operations needing cutting-edge features (auto-focus, beam shaping, process monitoring). Used equipment ($20,000-150,000, typically 40-60% of new price): Pros—lower capital requirement, proven technology, faster ROI. Cons—limited/no warranty, unknown maintenance history, potential hidden wear (optics, bearings, electronics), older control systems, difficulty sourcing parts for obsolete models. Due diligence required: inspect optics, test cutting performance across power range, verify axis backlash, check chiller condition, and obtain maintenance records. Best for: startups with limited capital, low-volume operations, businesses entering laser cutting, or adding backup capacity. Refurbished equipment ($35,000-180,000, 50-70% of new): Pros—warranty (6-12 months), known rebuild scope, often includes upgraded controls/software. Cons—still 3-10 years old mechanically, limited selection. Best for: balance of cost savings and risk mitigation. Depreciation consideration: quality lasers retain 50-60% value after 5 years vs 20-30% for economy brands, affecting trade-in and resale options.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Cutting Glossary & FAQ
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Master the language of laser cutting technology with our comprehensive glossary covering 15+ essential 
          technical terms and 8 in-depth FAQ answers. From fundamental concepts like beam quality and kerf width 
          to practical guidance on ROI calculation and equipment selection—this is your complete reference guide.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-12">
          <p className="text-blue-900 text-sm">
            <strong>💡 How to Use This Glossary:</strong> Each term includes a concise definition followed by 
            detailed technical explanation with real-world examples, cost data, and practical recommendations. 
            The FAQ section addresses common purchasing and operational questions with comprehensive answers 
            based on industry experience.
          </p>
        </div>

        {/* Core Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Technical Terms</h2>
          <p className="text-gray-600 mb-6">
            Master these fundamental concepts to understand laser cutting technology, optimize your 
            processes, and make informed equipment decisions.
          </p>
          <div className="space-y-6">
            {terms.map((item, idx) => (
              <Card key={idx} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.term}
                  </h3>
                  <p className="text-gray-700 mb-3 font-medium">{item.definition}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.expanded}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Technical Terms</h2>
          <p className="text-gray-600 mb-6">
            Deepen your expertise with these additional terms covering equipment technology, 
            quality metrics, and performance optimization.
          </p>
          <div className="space-y-6">
            {additionalTerms.map((item, idx) => (
              <Card key={idx} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.term}
                  </h3>
                  <p className="text-gray-700 mb-3 font-medium">{item.definition}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.expanded}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Unit Reference</h2>
          <Card variant="bordered">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Power & Energy</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>kW = kilowatt (1,000 watts)</li>
                    <li>W = watt</li>
                    <li>J = joule (energy unit)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Distance & Speed</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>mm = millimeter (1/1000 meter)</li>
                    <li>μm = micrometer (1/1000 mm)</li>
                    <li>m/min = meters per minute</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  );
}

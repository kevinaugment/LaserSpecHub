import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateFAQSchema } from '@/lib/utils/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Complete Laser Cutting Glossary - 30+ Technical Terms & Expert FAQs',
  description:
    'Comprehensive laser cutting glossary covering beam quality, kerf width, HAZ, assist gas, cutting speed, wavelength, focal length, and more. Includes detailed explanations, industry-standard definitions, and expert answers to common questions.',
  path: '/guides/glossary',
  keywords: [
    'laser cutting glossary',
    'laser terminology',
    'laser cutting terms',
    'beam quality M2',
    'kerf width',
    'assist gas',
    'cutting speed',
    'laser wavelength',
    'focal length',
    'HAZ heat affected zone',
    'laser cutting definitions',
  ],
});

interface GlossaryTerm {
  term: string;
  definition: string;
  expanded: string;
  category: 'fundamental' | 'process' | 'equipment' | 'quality';
  relatedTerms?: string[];
  relatedLinks?: string[];
}

export default function GlossaryPage() {
  const terms: GlossaryTerm[] = [
    {
      term: 'Assist Gas',
      definition: 'Gas (oxygen, nitrogen, or compressed air) injected through the cutting nozzle to remove molten material and protect optics during laser cutting.',
      expanded: 'Assist gas serves three critical functions: (1) Expelling molten material from the cut zone through high-pressure injection (typically 0.5-2.0 MPa), (2) Chemically reacting with the material (oxygen creates exothermic reaction for faster cutting of carbon steel), and (3) Protecting the focusing lens from vapor and debris. Gas selection impacts cut quality: oxygen produces oxidized edges at 2-3x faster speeds on mild steel, nitrogen yields oxide-free edges for stainless steel and aluminum but requires 30-50% higher laser power, and compressed air offers economy for thin materials but compromises edge quality. Typical consumption: 0.5-2.0 m³/hr depending on nozzle size and pressure. Cost consideration: nitrogen is 5-10x more expensive than oxygen per m³.',
      category: 'process',
      relatedTerms: ['Nozzle', 'Cutting Speed', 'Edge Quality'],
      relatedLinks: ['/guides/assist-gas-chart'],
    },
    {
      term: 'Beam Quality (M²)',
      definition: 'Measure of how closely the laser beam resembles an ideal Gaussian beam. Lower values (closer to 1.0) indicate better focus capability and precision.',
      expanded: 'M² (M-squared) quantifies beam divergence and focusability. An ideal Gaussian beam has M² = 1.0, while industrial lasers range from 1.05 (premium fiber lasers) to 15+ (high-power CO2 lasers). Lower M² enables: smaller focused spot size (critical for thin materials and fine details), deeper penetration depth for thick materials, and tighter cutting kerf width. Example: M² = 1.1 fiber laser produces 0.05mm spot at 50mm focal length, versus M² = 1.5 CO2 laser producing 0.15mm spot. Trade-off: lower M² lasers typically cost 20-40% more but deliver superior precision. Beam quality degrades over laser lifespan due to optical contamination and thermal effects; monitor via periodic focus testing.',
      category: 'fundamental',
      relatedTerms: ['Focal Length', 'Spot Size', 'Kerf Width'],
      relatedLinks: ['/guides/beam-quality-guide'],
    },
    {
      term: 'CNC (Computer Numerical Control)',
      definition: 'Automated control system that operates the laser cutter via pre-programmed sequences, translating CAD designs into precise cutting paths.',
      expanded: 'Modern laser CNCs integrate: motion control (servo/stepper motors driving X-Y-Z axes), process control (laser power modulation, gas flow), I/O management (sensors, limit switches, emergency stops), and HMI (human-machine interface). Leading controller brands: Siemens (Sinumerik, excellent dynamics), Fanuc (proven reliability), Beckhoff (open architecture), and domestic brands (cost-effective for basic applications). Performance metrics: positioning accuracy (±0.02mm high-end vs ±0.10mm entry-level), max traversing speed (80-120 m/min), acceleration (1.0-2.5G), and interpolation capability (5-axis simultaneous for tube cutting). Software ecosystem: controllers run on Windows or Linux, interface via Ethernet/SERCOS/EtherCAT, and support industry protocols (G-code, ESSI, proprietary formats).',
      category: 'equipment',
      relatedTerms: ['Cutting Speed', 'Positioning Accuracy'],
      relatedLinks: ['/guides/control-systems-comparison'],
    },
    {
      term: 'CO2 Laser',
      definition: 'Laser using electrically-excited CO2 gas mixture as gain medium, producing 10.6μm wavelength. Ideal for non-metallic materials (wood, acrylic, fabric) due to excellent absorption.',
      expanded: 'CO2 laser characteristics: 10600nm wavelength (10x longer than fiber), 10-15% wall-plug efficiency, M² = 1.1-1.5 (excellent beam quality), and 2,000-10,000 hour tube life (RF-excited) or 10,000-20,000 hours (DC-excited). Power ranges: 20-150W (engraving, thin non-metals), 150-500W (signage, thicker acrylic/wood), 500-2000W (industrial cutting), 2-6kW (metal cutting, becoming obsolete vs fiber). Material absorption: 90-95% on organics (acrylic, wood, leather, fabric), 50-70% on ceramics/glass, but only 8-10% on metals (making metal cutting inefficient). Applications: signage (flame-polished acrylic edges, no post-processing), architectural models, textile cutting (fashion industry), and packaging prototypes. Maintenance: mirror cleaning/alignment every 200-500 hours, tube replacement every 2,000-10,000 hours.',
      category: 'equipment',
      relatedTerms: ['Fiber Laser', 'Wavelength', 'Material Absorption'],
      relatedLinks: ['/guides/co2-vs-fiber-laser', '/guides/wavelength-absorption'],
    },
    {
      term: 'Cutting Speed',
      definition: 'Velocity of laser head movement during cutting, measured in meters per minute (m/min) or inches per minute (ipm). Directly impacts productivity and operating cost per part.',
      expanded: 'Speed ranges by material/thickness: 1mm steel (15-20 m/min fiber, 8-12 CO2), 3mm steel (8-12 fiber, 4-6 CO2), 10mm steel (2-3 fiber, 1-2 CO2), 20mm steel (0.5-1.0 fiber, CO2 impractical). Speed optimization: too fast causes incomplete cutting and excessive dross; too slow causes excessive HAZ and poor edge quality. Optimal speed varies with power: 6kW cuts 3mm steel at 12 m/min vs 3kW at 6-8 m/min (doubling power doesn\'t double speed due to thermal physics). Speed limiters: material thermal conductivity (aluminum dissipates heat, slowing cutting), assist gas flow rate (insufficient volume limits speed), and machine dynamics (acceleration capability affects small feature cutting). High-speed cutting requires: sufficient laser power reserves, optimized acceleration settings, high-pressure gas delivery (18-25 bar nitrogen), and advanced motion control.',
      category: 'process',
      relatedTerms: ['Laser Power', 'Material Thickness', 'Dross', 'HAZ'],
      relatedLinks: ['/guides/cutting-speed-chart', '/guides/material-thickness-parameters'],
    },
    {
      term: 'Depth of Focus (DOF)',
      definition: 'Vertical distance range over which the laser beam maintains acceptable focus quality and cutting performance.',
      expanded: 'DOF determines tolerance to material surface variations, warping, and focus positioning errors. DOF is proportional to focal length and inversely proportional to beam quality: shorter focal length = smaller DOF but higher power density. Typical DOF values: 50mm lens (±0.5mm DOF), 127mm lens (±2mm DOF), 190mm lens (±4mm DOF), 254mm lens (±6mm DOF). Materials with warping or surface irregularities require longer focal lengths to maintain consistent cut quality. DOF decreases with higher power density (tighter focus), making precise focus positioning critical for thin materials. Auto-focus systems maintain optimal focus position automatically, compensating for material warping and ensuring consistent quality.',
      category: 'fundamental',
      relatedTerms: ['Focal Length', 'Focus Position', 'Beam Quality'],
      relatedLinks: ['/guides/focus-position-guide'],
    },
    {
      term: 'Dross',
      definition: 'Solidified molten material that adheres to the bottom edge of a cut. Excessive dross indicates suboptimal cutting parameters or worn consumables.',
      expanded: 'Dross formation mechanisms: insufficient assist gas pressure (molten material not fully expelled), too-slow cutting speed (excessive heat input), incorrect focus position (beam geometry mismatch), or worn nozzle (disrupted gas flow). Dross types: (1) Top-side dross (rare, indicates severe parameter error), (2) Bottom-side adherent dross (common, removable by grinding but adds labor), and (3) Solidified beads (worst case, requires cutting re-work). Acceptance criteria: Class 1 parts (aerospace, medical) allow zero dross; Class 2 (automotive) tolerates light removable dross; Class 3 (general fabrication) permits moderate dross. Removal methods: hand grinding (5-15 minutes/part), vibratory finishing (batch process, 30-60 minutes), or chemical dissolution (for aluminum). Prevention: increase assist pressure +10-20%, increase cutting speed +5-10%, verify nozzle condition, and optimize focus position (typically 0.5-1.5mm into material).',
      category: 'quality',
      relatedTerms: ['Edge Quality', 'Assist Gas', 'Cutting Speed', 'Nozzle'],
      relatedLinks: ['/guides/edge-quality-standards', '/guides/troubleshooting-guide'],
    },
    {
      term: 'Duty Cycle',
      definition: 'Percentage of time a laser can operate at full power without overheating. Higher duty cycle means more continuous operation capability.',
      expanded: 'Duty cycle reflects thermal management capacity. Consumer lasers: 20-50% (cut 20 minutes, cool 40 minutes per hour). Industrial lasers: 80-100% (continuous operation with minor deratings). Factors affecting duty cycle: ambient temperature (30°C vs 40°C can reduce duty by 15%), chiller capacity (under-spec chillers throttle power), and material type (reflective aluminum generates more heat than steel). Real-world impact: 50% duty cycle system requires 2x as much calendar time for same production volume. Fiber lasers typically achieve 95-100% duty cycle due to superior thermal design, while older CO2 lasers range 70-90%. Verify duty cycle at maximum power and worst-case ambient conditions before purchase.',
      category: 'equipment',
      relatedTerms: ['Fiber Laser', 'CO2 Laser', 'Chiller'],
      relatedLinks: ['/tools/chiller-calculator'],
    },
    {
      term: 'Edge Quality',
      definition: 'Surface finish of the cut edge, characterized by roughness (Ra), perpendicularity, dross, and HAZ. Higher quality grades command premium pricing in aerospace and medical applications.',
      expanded: 'ISO 9013 quality grades: Range 1 (Ra <3.2μm, perpendicularity <0.05mm, precision applications), Range 2 (Ra 3.2-6.3μm, perpendicularity 0.05-0.15mm, general fabrication), Range 3 (Ra 6.3-12.5μm, perpendicularity 0.15-0.30mm, rough cutting), Range 4 (Ra >12.5μm, demolition/scrap). Measurement: surface roughness tester (portable units available) or visual comparison charts. Edge quality drivers: cutting speed (faster = rougher within optimal window), laser power stability (±2% fluctuation degrades quality), material quality (mill scale and impurities create irregularities), and consumable condition (worn nozzles reduce quality by 1-2 grades). Troubleshooting: striations indicate speed/power mismatch, excessive taper suggests focus error, and bottom-edge roughness points to insufficient assist gas. Fiber lasers typically achieve 1 grade better edge quality than CO2 lasers at equivalent speeds due to superior beam quality and absorption.',
      category: 'quality',
      relatedTerms: ['Dross', 'HAZ', 'Cutting Speed', 'Surface Roughness'],
      relatedLinks: ['/guides/edge-quality-standards', '/guides/precision-factors-comparison'],
    },
    {
      term: 'Fiber Laser',
      definition: 'Laser type using optical fiber doped with rare-earth elements (ytterbium, erbium) as gain medium. Dominant technology for metal cutting due to high efficiency, low maintenance, and excellent beam quality.',
      expanded: 'Fiber laser advantages: 25-30% wall-plug efficiency (vs 10-15% CO2), M² = 1.05-1.15 (excellent focusability), maintenance-free design (no beam path alignment, no consumable optics), compact footprint (1/3 size of equivalent CO2), and 100,000+ hour lifespan. Power ranges: 500W-1kW (thin sheet, electronics), 1-3kW (general fabrication, 0.5-8mm steel), 3-6kW (medium plate, 1-12mm), 6-12kW (thick plate, 3-20mm), 12-30kW (ultra-thick, shipbuilding, heavy industry). Wavelength 1064nm provides 88-92% absorption on steel/stainless but only 8-15% on aluminum/copper (requiring high power for reflective metals). Operating costs: $3-8/hour all-in (electricity, consumables, maintenance). Market leaders: IPG Photonics, Trumpf, Raycus, and nLIGHT. Technology trends: beam shaping (variable spot size for quality optimization), wobble cutting (circular beam motion for smoother edges), and ultra-high power (40-60kW for shipbuilding).',
      category: 'equipment',
      relatedTerms: ['CO2 Laser', 'Wavelength', 'Beam Quality', 'Material Absorption'],
      relatedLinks: ['/guides/co2-vs-fiber-laser', '/guides/power-selection-guide'],
    },
    {
      term: 'Focal Length',
      definition: 'Distance from the focusing lens to the focal point. Affects depth of focus and cutting capability for different material thicknesses.',
      expanded: 'Focal length determines spot size, depth of focus (DOF), and working distance. Common focal lengths: 50mm (0.05mm spot, ±0.5mm DOF, thin materials <3mm), 127mm (0.15mm spot, ±2mm DOF, universal standard for 3-15mm), 190mm (0.25mm spot, ±4mm DOF, thick plates 15-25mm), 254mm (0.35mm spot, ±6mm DOF, ultra-thick or 3D cutting). Selection criteria: shorter focal length = higher power density and precision but less tolerance to material warping; longer focal length = more forgiving but larger kerf and lower precision. Lens replacement frequency: 200-1000 operating hours depending on contamination exposure.',
      category: 'fundamental',
      relatedTerms: ['Spot Size', 'Depth of Focus', 'Kerf Width'],
      relatedLinks: ['/guides/focus-position-guide', '/guides/lens-specifications'],
    },
    {
      term: 'Focus Position',
      definition: 'Vertical position of the laser focal point relative to the material surface. Critical parameter affecting cut quality, kerf width, and edge perpendicularity.',
      expanded: 'Focus position is typically measured from the material surface: positive (above surface, for thin materials to prevent burning), zero (at surface, standard for most applications), or negative (below surface, for thick materials to maximize penetration). Optimal focus varies with material and thickness: thin materials (<3mm) use +0.5 to +1.0mm focus, medium materials (3-10mm) use 0 to -1.0mm, thick materials (>10mm) use -1.0 to -3.0mm. Focus positioning affects: kerf width (wrong focus increases kerf by 20-50%), edge perpendicularity (taper indicates focus error), dross formation (focus position impacts gas flow), and cutting speed (optimal focus enables maximum speed). Auto-focus systems maintain focus position automatically, adjusting for material warping and surface variations.',
      category: 'process',
      relatedTerms: ['Focal Length', 'Kerf Width', 'Edge Quality', 'Dross'],
      relatedLinks: ['/guides/focus-position-guide'],
    },
    {
      term: 'HAZ (Heat Affected Zone)',
      definition: 'Area of base material whose properties have been changed by the heat of cutting. Smaller HAZ indicates cleaner, more precise cutting.',
      expanded: 'HAZ extends 0.1-2.0mm beyond the cut edge depending on laser power, cutting speed, and material thermal conductivity. Within HAZ: grain structure changes, hardness variation (±50-200 HV), residual stress accumulation, and potential micro-cracking. Minimizing HAZ: increase cutting speed (reduces heat input time), use nitrogen instead of oxygen (eliminates exothermic reaction), optimize focus position (concentrate energy), and employ pulsed mode for heat-sensitive materials. Industry standards: aerospace/medical applications require HAZ <0.2mm; general fabrication tolerates 0.5-1.0mm. Measurement: metallographic cross-section analysis or hardness testing. Materials highly sensitive to HAZ: spring steel, tool steel, heat-treated alloys. Fiber lasers produce 30-50% smaller HAZ than CO2 lasers at equivalent cut quality due to higher absorption and faster speeds.',
      category: 'quality',
      relatedTerms: ['Cutting Speed', 'Assist Gas', 'Edge Quality'],
      relatedLinks: ['/guides/edge-quality-standards'],
    },
    {
      term: 'Kerf Width',
      definition: 'Width of material removed by the laser beam. Narrower kerf means less material waste and ability to cut finer details.',
      expanded: 'Kerf width ranges from 0.05mm (thin materials, low power) to 0.5mm (thick plates, high power). Calculation: kerf ≈ spot diameter + 10-30% (due to melt zone and beam divergence). Material impact: 0.3mm kerf on 1000mm cut removes 300mm² area; on high-value materials (titanium, Inconel), kerf optimization saves significant material cost. Kerf affects: minimum inside corner radius (typically 0.5-1.0x kerf width), small hole capability (hole diameter must be >1.5x material thickness and >kerf width), and nesting efficiency (parts must be spaced >kerf width apart). Kerf compensation: CAD/CAM software offsets cut path by 0.5x kerf width to achieve target dimensions. Fiber lasers produce 20-40% narrower kerf than CO2 lasers due to superior beam quality. Monitor kerf width via test cuts when changing parameters or materials.',
      category: 'fundamental',
      relatedTerms: ['Spot Size', 'Beam Quality', 'Focal Length'],
      relatedLinks: ['/tools/kerf-calculator', '/guides/nesting-optimization-guide'],
    },
    {
      term: 'Laser Power',
      definition: 'Energy output of the laser source, measured in watts (W) or kilowatts (kW). Determines maximum material thickness and cutting speed capability.',
      expanded: 'Power selection depends on material type, thickness range, and production volume. Steel/Stainless: 1kW cuts 0.5-3mm, 3kW cuts 1-8mm (general fabrication, 80% of market), 6kW cuts 3-12mm, 12kW cuts 6-25mm, 20kW+ cuts 10-40mm. Aluminum (harder to cut due to reflectivity): 3kW cuts 1-4mm, 6kW cuts 2-8mm, 12kW cuts 4-15mm. Rule of thumb: choose power where your thickest common material (70% of jobs) falls in the middle of the capability range, not at the extreme limit. Under-powering forces slow speeds and poor quality; over-powering wastes capital but provides future capacity. Power directly affects cutting speed: doubling power typically increases speed by 50-70% (not 100%) due to thermal physics limits.',
      category: 'fundamental',
      relatedTerms: ['Cutting Speed', 'Material Thickness', 'Fiber Laser', 'CO2 Laser'],
      relatedLinks: ['/tools/power-calculator', '/guides/power-selection-guide', '/guides/power-3k-6k-12k'],
    },
    {
      term: 'Material Absorption',
      definition: 'Percentage of laser energy absorbed by the material versus reflected or transmitted. Higher absorption enables more efficient cutting.',
      expanded: 'Absorption varies dramatically with wavelength and material: fiber laser (1064nm) achieves 88-92% on steel/stainless but only 8-15% on aluminum/copper; CO2 laser (10600nm) achieves 90-95% on organics (acrylic, wood) but only 8-10% on metals. Absorption is temperature-dependent: cold aluminum absorbs 8% at 1064nm but increases to 15-25% when heated to 400-600°C, explaining why piercing aluminum is harder than continuous cutting. Material surface condition affects absorption: oxidized steel absorbs better than polished steel, mill scale increases absorption, and coatings can be optimized for laser cutting. Selection principle: choose wavelength with highest absorption for primary material (70%+ of volume). Multi-material shops face trade-offs: fiber laser excels at metals but cannot cut acrylic/wood; CO2 laser handles non-metals but is inefficient on metals.',
      category: 'fundamental',
      relatedTerms: ['Wavelength', 'Fiber Laser', 'CO2 Laser'],
      relatedLinks: ['/guides/wavelength-absorption', '/guides/co2-vs-fiber-laser'],
    },
    {
      term: 'Nesting',
      definition: 'Arrangement of parts on a sheet to maximize material utilization. Good nesting software can significantly reduce waste.',
      expanded: 'Nesting optimization increases material utilization from 60-75% (manual layout) to 85-95% (advanced algorithms). Techniques: common-line cutting (shares cut paths between adjacent parts, saving 15-25% time and material), true-shape nesting (rotates/mirrors parts for optimal fit), and remnant management (uses off-cuts from previous jobs). Best practices: group parts by material/thickness, respect grain direction for formed parts, maintain 3-5mm edge margin, and allow 1-3mm inter-part spacing. Advanced features: priority nesting (critical parts first), constraint-based layout (orientation limits), and AI-based learning from historical patterns.',
      category: 'process',
      relatedTerms: ['Kerf Width', 'Material Utilization'],
      relatedLinks: ['/guides/nesting-optimization-guide'],
    },
    {
      term: 'Nozzle',
      definition: 'Consumable component that directs assist gas flow onto the cut zone. Nozzle size and condition significantly affect cut quality.',
      expanded: 'Nozzle types: standard (1.0-2.5mm diameter, general cutting), conical (for thick materials, better gas flow), and specialized (for specific applications). Nozzle diameter selection: smaller nozzle (1.0-1.5mm) provides higher gas velocity and better edge quality for thin materials but requires more frequent replacement; larger nozzle (2.0-2.5mm) offers longer life and better performance on thick materials. Nozzle standoff distance: typically 0.5-2.0mm from material surface, adjusted based on material thickness and cutting speed. Nozzle wear indicators: visible damage, increased dross, reduced edge quality, or inconsistent gas flow. Replacement frequency: every 8-40 hours of cutting depending on material and power level. Cost: $15-80 per nozzle. Proper nozzle maintenance extends life: regular cleaning, avoiding collisions, and using appropriate size for application.',
      category: 'equipment',
      relatedTerms: ['Assist Gas', 'Dross', 'Edge Quality'],
      relatedLinks: ['/guides/nozzle-selection-guide'],
    },
    {
      term: 'Pierce Time',
      definition: 'Time required to penetrate material before starting the cut path. Longer for thicker materials; affects overall cycle time.',
      expanded: 'Pierce time ranges from 0.1 seconds (1mm steel) to 5+ seconds (25mm steel) and directly impacts cycle time on parts with multiple internal features. Optimization strategies: (1) Pulse ramping - gradually increase power to avoid blow-back and lens contamination, (2) Pre-pierce techniques - start at lower power then ramp, reducing time by 20-30%, (3) Edge start - begin cut from sheet edge when possible, eliminating pierce entirely, and (4) Multi-hole piercing - pierce multiple holes before cutting contours, allowing cooling. Advanced systems: dynamic piercing adjusts parameters based on material thickness and type. Pierce failure indicators: excessive spatter, lens damage, or incomplete penetration.',
      category: 'process',
      relatedTerms: ['Cutting Speed', 'Cycle Time'],
      relatedLinks: ['/tools/cutting-time-calculator'],
    },
    {
      term: 'Positioning Accuracy',
      definition: 'Ability of the machine to move the laser head to the commanded position. Measured as deviation from target position.',
      expanded: 'Positioning accuracy is critical for precision applications and multi-pass operations. Typical values: ±0.02mm (high-end systems), ±0.05mm (mid-range), ±0.10mm (entry-level). Factors affecting accuracy: servo motor quality, mechanical backlash, thermal expansion, and control system precision. Repeatability (ability to return to same position) is typically 2-3x better than accuracy. Accuracy requirements vary by application: sheet metal fabrication (±0.05mm acceptable), precision parts (±0.02mm required), micro-machining (±0.005mm needed). Regular calibration maintains accuracy: ballbar testing, laser interferometry, or grid plate measurement. Environmental factors: temperature variations, foundation stability, and vibration affect long-term accuracy.',
      category: 'quality',
      relatedTerms: ['Repeatability', 'CNC'],
      relatedLinks: ['/guides/precision-factors-comparison'],
    },
    {
      term: 'Spot Size',
      definition: 'Diameter of the focused laser beam at the material surface. Smaller spot size enables finer detail cutting and narrower kerf.',
      expanded: 'Spot size is determined by focal length, beam quality (M²), and beam diameter before focusing. Calculation: spot size ≈ (4 × M² × λ × f) / (π × D), where λ is wavelength, f is focal length, and D is beam diameter. Typical spot sizes: 0.05mm (50mm lens, M²=1.1 fiber laser), 0.15mm (127mm lens, M²=1.5 CO2 laser), 0.25mm (190mm lens). Smaller spot size provides: higher power density (enables cutting or welding), finer detail capability (small holes, tight corners), and narrower kerf (less material waste). Trade-off: smaller spot size has smaller depth of focus, requiring more precise focus positioning. Spot size directly affects kerf width: kerf ≈ spot size + 10-30% (due to melt zone expansion).',
      category: 'fundamental',
      relatedTerms: ['Focal Length', 'Beam Quality', 'Kerf Width'],
      relatedLinks: ['/tools/power-density-calculator'],
    },
    {
      term: 'Surface Roughness (Ra)',
      definition: 'Measure of the texture of the cut edge surface, expressed as arithmetic average deviation from mean line. Lower Ra values indicate smoother edges.',
      expanded: 'Ra values are measured in micrometers (μm). ISO 9013 classifications: Range 1 (Ra <3.2μm, precision applications), Range 2 (Ra 3.2-6.3μm, general fabrication), Range 3 (Ra 6.3-12.5μm, rough cutting), Range 4 (Ra >12.5μm, demolition/scrap). Factors affecting surface roughness: cutting speed (optimal speed produces smoothest edge), laser power stability (±2% fluctuation degrades quality), material quality (mill scale and impurities create irregularities), assist gas pressure (insufficient pressure increases roughness), and consumable condition (worn nozzles reduce quality). Measurement: portable surface roughness tester or visual comparison charts. Edge roughness affects: post-processing requirements (smoother edges need less finishing), fit-up quality (mating surfaces), and appearance (visible edges).',
      category: 'quality',
      relatedTerms: ['Edge Quality', 'Cutting Speed'],
      relatedLinks: ['/guides/edge-quality-standards'],
    },
    {
      term: 'Wavelength',
      definition: 'The frequency of the laser light, measured in nanometers (nm) or micrometers (μm). Determines which materials the laser can effectively cut through absorption characteristics.',
      expanded: 'Wavelength determines material absorption efficiency through physics of electron interaction. Common wavelengths: 355nm (UV, 95% absorption on most materials, precision micro-machining), 532nm (green, 55-65% on aluminum/copper, reflective metals), 1064nm (fiber/Nd:YAG, 88-92% on steel/stainless, poor on non-metals), 10600nm (CO2, 90-95% on organics, 8-10% on metals). Selection principle: choose wavelength with highest absorption for primary material (70%+ of volume). Multi-material shops face trade-offs: fiber laser excels at metals but cannot cut acrylic/wood; CO2 laser handles non-metals but is inefficient on metals. Hybrid solution: dual-laser system addresses full material range. Absorption temperature-dependence: cold aluminum absorbs 8% at 1064nm but increases to 15-25% when heated to 400-600°C, explaining why piercing aluminum is harder than continuous cutting.',
      category: 'fundamental',
      relatedTerms: ['Material Absorption', 'Fiber Laser', 'CO2 Laser'],
      relatedLinks: ['/guides/wavelength-absorption', '/guides/co2-vs-fiber-laser'],
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between laser power and cutting speed?',
      answer: 'Laser power (measured in kW) is the energy output of the laser source. Higher power enables cutting thicker materials and achieving faster speeds on any given thickness. Cutting speed is how fast the laser head physically moves while cutting, measured in meters per minute (m/min). The relationship is not linear: doubling power typically increases speed by 50-70% (not 100%) due to thermal physics limits on how quickly material can absorb and melt. Optimal cutting speed balances productivity (faster = more parts/hour) with quality (too fast causes dross and incomplete cuts; too slow creates excessive HAZ and rough edges).',
    },
    {
      question: 'How long do laser tubes/modules last?',
      answer: 'Fiber lasers typically last 100,000+ hours (equivalent to 11+ years of continuous operation or 20+ years of single-shift use), with minimal degradation until end-of-life. CO2 laser tubes vary widely: RF-excited tubes last 10,000-20,000 hours, DC-excited tubes last 2,000-8,000 hours, and sealed glass tubes (hobby grade) last 1,000-3,000 hours. Fiber laser longevity is a key advantage: over 10 years, fiber laser saves $20,000-40,000 in tube replacements compared to CO2. Lifespan factors: operating duty cycle, thermal cycling frequency, environmental contamination, and power level (high-power accelerates wear).',
    },
    {
      question: 'Can I cut different materials on the same machine?',
      answer: 'It depends on wavelength compatibility. Fiber lasers (1064nm) excel at metals (steel, stainless, aluminum, brass) but cannot effectively cut non-metals like acrylic, wood, or fabric—the wavelength is poorly absorbed, resulting in melting rather than clean cutting. CO2 lasers (10600nm) are ideal for non-metals (acrylic, wood, leather, paper) and can cut thin metals (<3mm steel) but are inefficient on thicker metals. For mixed production: (1) Single-material dominance (70%+ volume) → choose laser optimized for that material, (2) Balanced mix (40/60 split) → consider dual-laser investment for operational flexibility, or (3) Specialty applications → explore green (532nm) or UV (355nm) lasers for unique materials like copper, PCBs, or ceramics.',
    },
    {
      question: 'What maintenance is required?',
      answer: 'Fiber lasers: Daily—inspect protective window (5 min), check chiller level/temperature (5 min); Weekly—clean focusing lens (15 min), verify gas pressures (5 min); Monthly—inspect nozzle wear (10 min), clean extraction filters (20 min), lubricate axes (30 min). Annual cost: $2,000-5,000 (consumables + service). CO2 lasers: Daily—same as fiber; Weekly—same as fiber PLUS clean 3-6 mirrors (30 min), check beam alignment (20 min); Quarterly—replace mirrors/lenses ($500-1,500), realign optical path (1-2 hours); 2-5 years—replace laser tube ($2,000-15,000). Annual cost: $5,000-12,000. Key difference: fiber\'s sealed optical path eliminates 60-70% of CO2 maintenance burden.',
    },
    {
      question: 'How do I calculate ROI on a laser cutter?',
      answer: 'ROI = (Annual Savings + New Revenue - Annual Costs) / Initial Investment × 100%. Components: (1) Initial Investment—equipment ($50,000-300,000), installation ($5,000-20,000), training ($2,000-10,000), facility prep ($3,000-30,000); (2) Annual Savings—labor reduction (eliminate 1-3 operators), faster production (2-5x throughput vs manual methods), reduced scrap (improved nesting saves 5-15% material), outsourcing elimination ($20,000-100,000/year); (3) New Revenue—taking jobs previously declined, premium pricing for precision work (+20-40% margins); (4) Annual Costs—electricity ($3,000-12,000), consumables ($5,000-20,000), maintenance ($2,000-12,000), gas ($5,000-25,000), operator ($40,000-70,000). Typical scenarios: High-volume metal fabrication shop investing $150,000 in 6kW fiber laser achieves 12-18 month ROI.',
    },
    {
      question: 'What laser power do I need for my application?',
      answer: 'Power selection depends on material type, thickness range, and production volume. Steel/Stainless: 1kW cuts 0.5-3mm, 3kW cuts 1-8mm (general fabrication, 80% of market), 6kW cuts 3-12mm, 12kW cuts 6-25mm, 20kW+ cuts 10-40mm. Aluminum (harder to cut due to reflectivity): 3kW cuts 1-4mm, 6kW cuts 2-8mm, 12kW cuts 4-15mm. Rule of thumb: choose power where your thickest common material (70% of jobs) falls in the middle of the capability range, not at the extreme limit. Example: shop primarily cutting 3-6mm steel should choose 6kW (capable of 3-12mm), not 3kW (struggles at 6mm). Under-powering forces slow speeds and poor quality; over-powering wastes capital but provides future capacity.',
    },
    {
      question: 'What are the hidden costs of laser cutting?',
      answer: 'Beyond the purchase price, budget for: (1) Facility preparation—electrical upgrade to 3-phase 200-480V ($3,000-15,000), dedicated circuit for chiller ($1,000-3,000), fume extraction system ($5,000-25,000), compressed air system 8-10 bar ($2,000-10,000), floor reinforcement ($2,000-8,000). (2) Gas supply—bulk nitrogen tank installation ($3,000-8,000) or on-site generator ($40,000-80,000), oxygen tank rental ($50-150/month), gas usage ($500-3,000/month). (3) Consumables—focusing lenses ($200-800, replace every 200-1,000 hours), protective windows ($50-200, replace every 100-500 hours), nozzles ($15-80 each, replace every 8-40 hours), cutting bed slats ($500-2,000, replace annually). (4) Training—operator certification ($2,000-5,000), programming courses ($1,000-3,000). (5) Insurance—equipment coverage ($1,000-3,000/year), liability for Class 4 laser ($500-2,000/year increase). Total hidden costs: $15,000-50,000 first year, $8,000-30,000/year ongoing.',
    },
    {
      question: 'Should I buy new, used, or refurbished laser equipment?',
      answer: 'New equipment: Pros—full warranty (1-3 years), latest technology, known service history, financing options, manufacturer support. Cons—highest initial cost, 20-30% depreciation in first year. Best for: production shops requiring reliability, businesses with financing access. Used equipment (typically 40-60% of new price): Pros—lower capital requirement, proven technology, faster ROI. Cons—limited/no warranty, unknown maintenance history, potential hidden wear, older control systems, difficulty sourcing parts for obsolete models. Due diligence required: inspect optics, test cutting performance, verify axis backlash, check chiller condition. Best for: startups with limited capital, low-volume operations. Refurbished equipment (50-70% of new): Pros—warranty (6-12 months), known rebuild scope, often includes upgraded controls. Cons—still 3-10 years old mechanically. Best for: balance of cost savings and risk mitigation.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  const categoryOrder: GlossaryTerm['category'][] = ['fundamental', 'process', 'equipment', 'quality'];
  const categoryLabels = {
    fundamental: 'Fundamental Concepts',
    process: 'Process Parameters',
    equipment: 'Equipment & Technology',
    quality: 'Quality Metrics',
  };

  const groupedTerms = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    terms: terms.filter((t) => t.category === category),
  }));

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laser Cutting Glossary & Technical Terms
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Master the language of laser cutting technology with our comprehensive glossary covering 30+ essential
              technical terms and expert FAQ answers. From fundamental concepts like beam quality and kerf width to
              practical guidance on equipment selection and process optimization—this is your complete reference guide.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 text-sm">
                <strong>💡 How to Use This Glossary:</strong> Each term includes a concise definition followed by
                detailed technical explanation with real-world examples and practical recommendations. Terms are
                organized by category for easy navigation. Related terms and links to detailed guides are provided
                for deeper learning.
              </p>
            </div>
          </header>

          {/* Quick Navigation */}
          <nav className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Quick Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {groupedTerms.map((group) => (
                <a
                  key={group.category}
                  href={`#${group.category}`}
                  className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition-colors"
                >
                  {group.label}
                </a>
              ))}
              <a
                href="#faq"
                className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 transition-colors"
              >
                FAQs
              </a>
            </div>
          </nav>

          {/* Terms by Category */}
          {groupedTerms.map((group) => (
            <section key={group.category} id={group.category} className="mb-12 scroll-mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{group.label}</h2>
              <div className="space-y-6">
                {group.terms.map((item, idx) => (
                  <Card key={idx} variant="bordered" className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{item.term}</h3>
                        {item.relatedLinks && item.relatedLinks.length > 0 && (
                          <div className="flex gap-2 ml-4 flex-shrink-0">
                            {item.relatedLinks.map((link, linkIdx) => {
                              const linkText = link.split('/').pop()?.replace(/-/g, ' ') || 'Guide';
                              return (
                                <Link
                                  key={linkIdx}
                                  href={link}
                                  className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                                >
                                  {linkText}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 mb-3 font-medium">{item.definition}</p>
                      <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                        <p>{item.expanded}</p>
                        {item.relatedTerms && item.relatedTerms.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              Related Terms:
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.relatedTerms.map((relatedTerm, rtIdx) => {
                                const termObj = terms.find((t) => t.term === relatedTerm);
                                if (termObj) {
                                  return (
                                    <a
                                      key={rtIdx}
                                      href={`#term-${terms.indexOf(termObj)}`}
                                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                                    >
                                      {relatedTerm}
                                    </a>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          {/* Comparison Tables */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference Tables</h2>
            
            {/* Laser Type Comparison */}
            <Card variant="bordered" className="mb-6">
              <CardHeader>
                <CardTitle>Fiber Laser vs CO2 Laser Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Fiber Laser</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">CO2 Laser</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Wavelength</td>
                        <td className="border border-gray-300 px-4 py-2">1064 nm</td>
                        <td className="border border-gray-300 px-4 py-2">10600 nm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Beam Quality (M²)</td>
                        <td className="border border-gray-300 px-4 py-2">1.05-1.15</td>
                        <td className="border border-gray-300 px-4 py-2">1.1-1.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Efficiency</td>
                        <td className="border border-gray-300 px-4 py-2">25-30%</td>
                        <td className="border border-gray-300 px-4 py-2">10-15%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Steel Absorption</td>
                        <td className="border border-gray-300 px-4 py-2">88-92%</td>
                        <td className="border border-gray-300 px-4 py-2">8-10%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Lifespan</td>
                        <td className="border border-gray-300 px-4 py-2">100,000+ hours</td>
                        <td className="border border-gray-300 px-4 py-2">2,000-20,000 hours</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Best For</td>
                        <td className="border border-gray-300 px-4 py-2">Metals (steel, stainless, aluminum)</td>
                        <td className="border border-gray-300 px-4 py-2">Non-metals (acrylic, wood, fabric)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <Link href="/guides/co2-vs-fiber-laser" className="text-blue-600 hover:underline">
                    Learn more about CO2 vs Fiber Laser comparison →
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Focal Length Reference */}
            <Card variant="bordered" className="mb-6">
              <CardHeader>
                <CardTitle>Focal Length Selection Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Focal Length</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Spot Size</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">DOF</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">50 mm</td>
                        <td className="border border-gray-300 px-4 py-2">~0.05 mm</td>
                        <td className="border border-gray-300 px-4 py-2">±0.5 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Thin materials &lt;3 mm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">127 mm</td>
                        <td className="border border-gray-300 px-4 py-2">~0.15 mm</td>
                        <td className="border border-gray-300 px-4 py-2">±2 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Universal 3-15 mm</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">190 mm</td>
                        <td className="border border-gray-300 px-4 py-2">~0.25 mm</td>
                        <td className="border border-gray-300 px-4 py-2">±4 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Thick plates 15-25 mm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">254 mm</td>
                        <td className="border border-gray-300 px-4 py-2">~0.35 mm</td>
                        <td className="border border-gray-300 px-4 py-2">±6 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ultra-thick or 3D cutting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <Link href="/guides/focus-position-guide" className="text-blue-600 hover:underline">
                    Learn more about focus position optimization →
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Power Selection Reference */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Laser Power Selection by Material Thickness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Laser Power</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Steel/Stainless</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Aluminum</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">1 kW</td>
                        <td className="border border-gray-300 px-4 py-2">0.5-3 mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.5-2 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Thin sheet, electronics</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">3 kW</td>
                        <td className="border border-gray-300 px-4 py-2">1-8 mm</td>
                        <td className="border border-gray-300 px-4 py-2">1-4 mm</td>
                        <td className="border border-gray-300 px-4 py-2">General fabrication</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">6 kW</td>
                        <td className="border border-gray-300 px-4 py-2">3-12 mm</td>
                        <td className="border border-gray-300 px-4 py-2">2-8 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Medium plate</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">12 kW</td>
                        <td className="border border-gray-300 px-4 py-2">6-25 mm</td>
                        <td className="border border-gray-300 px-4 py-2">4-15 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Thick plate, structural</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">20+ kW</td>
                        <td className="border border-gray-300 px-4 py-2">10-40 mm</td>
                        <td className="border border-gray-300 px-4 py-2">8-25 mm</td>
                        <td className="border border-gray-300 px-4 py-2">Shipbuilding, heavy industry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <Link href="/guides/power-selection-guide" className="text-blue-600 hover:underline">
                    Learn more about power selection →
                  </Link>
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Visual Diagrams */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Reference Diagrams</h2>
            
            {/* Kerf Width Diagram */}
            <Card variant="bordered" className="mb-6">
              <CardHeader>
                <CardTitle>Kerf Width Illustration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center my-6">
                  <svg width="600" height="200" viewBox="0 0 600 200" className="max-w-full">
                    {/* Material sheet */}
                    <rect x="50" y="80" width="500" height="40" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
                    {/* Cut line */}
                    <line x1="300" y1="80" x2="300" y2="120" stroke="#ef4444" strokeWidth="3" />
                    {/* Kerf width */}
                    <line x1="295" y1="60" x2="305" y1="60" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="295" y1="55" x2="295" y1="65" stroke="#3b82f6" strokeWidth="2" />
                    <line x1="305" y1="55" x2="305" y1="65" stroke="#3b82f6" strokeWidth="2" />
                    <text x="300" y="50" textAnchor="middle" className="text-sm fill-gray-700 font-medium">
                      Kerf Width
                    </text>
                    {/* Labels */}
                    <text x="50" y="75" className="text-sm fill-gray-600">Material Sheet</text>
                    <text x="320" y="105" className="text-sm fill-red-600 font-medium">Laser Beam</text>
                    <text x="50" y="170" className="text-xs fill-gray-500">
                      The kerf width is the material removed by the laser beam during cutting
                    </text>
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Focus Position Diagram */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Focus Position & Depth of Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center my-6">
                  <svg width="600" height="300" viewBox="0 0 600 300" className="max-w-full">
                    {/* Laser head */}
                    <rect x="250" y="20" width="100" height="30" fill="#4b5563" stroke="#1f2937" strokeWidth="2" />
                    <text x="300" y="40" textAnchor="middle" className="text-xs fill-white">Laser Head</text>
                    {/* Lens */}
                    <ellipse cx="300" cy="60" rx="40" ry="8" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
                    {/* Beam cone */}
                    <path
                      d="M 260 60 L 300 120 L 340 60 Z"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.5"
                    />
                    {/* Focal point */}
                    <circle cx="300" cy="120" r="4" fill="#ef4444" />
                    <text x="310" y="125" className="text-xs fill-red-600 font-medium">Focal Point</text>
                    {/* Material */}
                    <rect x="100" y="200" width="400" height="60" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
                    <text x="300" y="285" textAnchor="middle" className="text-sm fill-gray-600">Material Surface</text>
                    {/* DOF range */}
                    <line x1="280" y1="115" x2="280" y1="130" stroke="#10b981" strokeWidth="3" />
                    <line x1="320" y1="115" x2="320" y1="130" stroke="#10b981" strokeWidth="3" />
                    <line x1="280" y1="115" x2="320" y1="115" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <line x1="280" y1="130" x2="320" y1="130" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <text x="200" y="125" className="text-xs fill-green-600 font-medium">Depth of Focus (DOF)</text>
                    {/* Focus position indicator */}
                    <line x1="300" y1="120" x2="300" y1="200" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="310" y="160" className="text-xs fill-amber-600">Focus Position</text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Focus position is measured relative to the material surface. Optimal focus varies by material thickness
                  and cutting parameters.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} variant="bordered" className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/guides/selection" className="block">
                <Card variant="bordered" className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Equipment Selection Guide</h3>
                    <p className="text-sm text-gray-600">Complete guide to selecting laser cutting equipment</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/tools/power-calculator" className="block">
                <Card variant="bordered" className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate required laser power for your application</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/troubleshooting-guide" className="block">
                <Card variant="bordered" className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Troubleshooting Guide</h3>
                    <p className="text-sm text-gray-600">Solutions to common laser cutting problems</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Unit Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unit Reference</h2>
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Power & Energy</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>kW = kilowatt (1,000 watts)</li>
                      <li>W = watt</li>
                      <li>J = joule (energy unit)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Distance & Size</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>mm = millimeter (1/1000 meter)</li>
                      <li>μm = micrometer (1/1000 mm)</li>
                      <li>nm = nanometer (1/1000 μm)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Speed & Rate</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>m/min = meters per minute</li>
                      <li>ipm = inches per minute</li>
                      <li>m³/hr = cubic meters per hour</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </>
  );
}

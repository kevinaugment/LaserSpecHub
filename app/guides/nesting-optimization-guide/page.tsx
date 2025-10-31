import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Nesting Optimization Guide - Maximize Material Utilization | LaserSpecHub',
  description:
    'Complete guide to laser cutting nesting optimization: achieve 85-95% material utilization with advanced algorithms, common-line cutting, remnant management, and ROI-proven software comparison. Practical strategies and real-world case studies.',
  keywords: ['nesting optimization', 'material utilization', 'common line cutting', 'nesting software', 'remnant management', 'laser cutting efficiency', 'SigmaNEST', 'FastCAM', 'Lantek'],
  alternates: { canonical: 'https://laserspechub.com/guides/nesting-optimization-guide' },
  openGraph: {
    title: 'Laser Cutting Nesting Optimization - Achieve 85-95% Material Utilization',
    description: 'Comprehensive guide covering principles, software, techniques, and ROI calculation',
    type: 'article',
    url: 'https://laserspechub.com/guides/nesting-optimization-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割排版优化指南',
  description: '提升材料利用率与效率的系统方法',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Laser Cutting Nesting Optimization Guide</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Maximize material utilization and minimize cutting time with proven nesting strategies. This comprehensive 
          guide covers principles, software comparison, advanced techniques, and ROI calculation to help you achieve 
          85-95% material efficiency.
        </p>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 mb-8">
          <p className="text-gray-800 text-sm">
            <strong>💰 Bottom Line:</strong> Improving nesting utilization from 75% to 85% on $50,000/month steel 
            consumption saves $6,667/month ($80,000/year)—typically recovering advanced nesting software cost in 
            1-3 months. This guide provides the roadmap to achieve those gains.
          </p>
        </div>
      </div>

      {/* English Content Section */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Nesting Principles and Fundamentals</h2>
        
        <p className="text-gray-700 mb-6">
          Nesting optimization is the process of arranging cutting patterns on sheet material to maximize utilization 
          while minimizing production time. Effective nesting balances multiple objectives: material yield, cutting 
          efficiency, part quality, and remnant usability.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Core Nesting Principles</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong className="text-gray-900">1. Large Parts First:</strong>
                <p className="text-gray-600">Place largest/highest-priority parts first, then fill gaps with smaller parts. This prevents "trapped space" where large parts won't fit after small parts consume sheet real estate.</p>
              </div>
              <div>
                <strong className="text-gray-900">2. Minimum Edge Margins:</strong>
                <p className="text-gray-600">Maintain 3-5mm from sheet edge to prevent edge warping from affecting cut quality. Thicker materials and high-power cutting require larger margins (5-8mm for 20mm+ steel).</p>
              </div>
              <div>
                <strong className="text-gray-900">3. Inter-Part Spacing:</strong>
                <p className="text-gray-600">Standard 1-3mm spacing prevents thermal interaction and enables common-line cutting. Reflective materials (aluminum) require 2-4mm due to heat dissipation concerns.</p>
              </div>
              <div>
                <strong className="text-gray-900">4. Grain Direction Alignment:</strong>
                <p className="text-gray-600">For parts requiring subsequent bending, align with rolling direction (marked on material). Incorrect orientation causes 20-30% strength reduction and cracking risk.</p>
              </div>
              <div>
                <strong className="text-gray-900">5. Pierce Point Optimization:</strong>
                <p className="text-gray-600">Locate pierces away from critical dimensions and at thickest material sections. Poor pierce placement causes 5-15% of quality rejects in precision work.</p>
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Nesting Method Comparison</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong className="text-gray-900">Rectangular Array (75-85% utilization):</strong>
                <p className="text-gray-600">Simple grid layout for regular parts. Fast to program (5-10 minutes manual), predictable results, but leaves significant waste on irregular parts.</p>
              </div>
              <div>
                <strong className="text-gray-900">True-Shape Nesting (80-90%):</strong>
                <p className="text-gray-600">Parts rotated/mirrored for optimal fit, software calculates actual part geometry. Requires nesting software ($3,000-15,000) but recovers cost within 1-3 months.</p>
              </div>
              <div>
                <strong className="text-gray-900">Common-Line Cutting (85-92%):</strong>
                <p className="text-gray-600">Adjacent parts share cut path, eliminating inter-part kerf waste. Saves 8-12% material PLUS 15-25% cutting time. Requires parts with matching edges and compatible quality requirements.</p>
              </div>
              <div>
                <strong className="text-gray-900">AI/Genetic Algorithm (88-95%):</strong>
                <p className="text-gray-600">Advanced algorithms (SigmaNEST, Lantek Expert) test thousands of arrangements, approaching theoretical maximum. Computation time 1-5 minutes vs 30 seconds for basic nesting, but justifies delay on high-value materials.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">2. Nesting Software Comparison</h2>

        <p className="text-gray-700 mb-6">
          Professional nesting software typically recovers its cost in 1-6 months through material savings alone, 
          not counting time savings and quality improvements. Selection criteria: material utilization capability, 
          automation level, CAD/CAM integration, learning curve, and total cost of ownership.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Software</th>
                <th className="text-left p-3 font-semibold">Cost Range</th>
                <th className="text-left p-3 font-semibold">Utilization</th>
                <th className="text-left p-3 font-semibold">Best For</th>
                <th className="text-left p-3 font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-medium">SigmaNEST</td>
                <td className="p-3">$8,000-15,000</td>
                <td className="p-3"><span className="text-green-600 font-medium">90-95%</span></td>
                <td className="p-3">High-volume shops, complex parts</td>
                <td className="p-3">Genetic algorithm, auto common-line, remnant tracking, real-time costing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">FastCAM</td>
                <td className="p-3">$3,000-6,000</td>
                <td className="p-3"><span className="text-blue-600 font-medium">85-90%</span></td>
                <td className="p-3">SMBs, general fabrication</td>
                <td className="p-3">User-friendly, multi-process, good CAD import, affordable</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Lantek Expert</td>
                <td className="p-3">$10,000-20,000</td>
                <td className="p-3"><span className="text-green-600 font-medium">85-92%</span></td>
                <td className="p-3">Enterprise, MES integration</td>
                <td className="p-3">Full MES suite, inventory management, scheduling, advanced analytics</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">RDWorks/LightBurn</td>
                <td className="p-3">$60-150</td>
                <td className="p-3"><span className="text-orange-600 font-medium">75-82%</span></td>
                <td className="p-3">Small shops, non-metals</td>
                <td className="p-3">Basic nesting, intuitive, CO2 laser focus, limited automation</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Radan</td>
                <td className="p-3">$12,000-25,000</td>
                <td className="p-3"><span className="text-green-600 font-medium">88-94%</span></td>
                <td className="p-3">Sheet metal fabricators</td>
                <td className="p-3">Integrated CAD/CAM, bending simulation, full production cycle</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Domestic (Chinese)</td>
                <td className="p-3">$1,000-5,000</td>
                <td className="p-3"><span className="text-blue-600 font-medium">80-88%</span></td>
                <td className="p-3">Budget-conscious, local support</td>
                <td className="p-3">Cost-effective, adequate for standard work, improving rapidly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-yellow-900 text-sm">
            <strong>⚠️ Hidden Costs:</strong> Consider annual maintenance (15-20% of license), training (1-2 weeks 
            at $1,000-3,000), and post-processor customization ($500-2,000). Total 3-year TCO is typically 140-160% 
            of initial license cost. However, a $10,000 nesting software saving 5% on $50,000/month material spend 
            generates $30,000/year savings—10-month payback including all costs.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">3. Advanced Nesting Techniques</h2>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Common-Line Cutting</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-gray-700 mb-3">
                Two or more adjacent parts share a single cut path, eliminating inter-part kerf and spacing waste. 
                Benefits: 8-12% material savings, 15-25% time reduction (fewer pierces and cuts), improved part nesting 
                density.
              </p>
              <div>
                <strong className="text-gray-900">Requirements:</strong>
                <ul className="text-gray-600 mt-1 space-y-1 ml-4">
                  <li>• Identical material and thickness</li>
                  <li>• Compatible edge quality requirements</li>
                  <li>• Matching or mirrorable contours</li>
                  <li>• Software capability (auto or manual CAD prep)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Process:</strong>
                <ol className="text-gray-600 mt-1 space-y-1 ml-4 list-decimal">
                  <li>Identify parts with straight/matching edges</li>
                  <li>In CAD: combine geometries with shared line</li>
                  <li>Software: enable common-line detection</li>
                  <li>Verify cut path eliminates duplicate lines</li>
                </ol>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>ROI Example:</strong> Shop cutting 100 identical 300×300mm brackets/day. Common-line nesting 
                reduces 200 brackets (mirrored pairs) to 100 cut operations, saving 4 hours/day cutting time (worth 
                $80-150/day) plus 10-12% material.
              </p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Remnant Management</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-gray-700 mb-3">
                Systematic tracking and reuse of off-cuts reduces scrap costs by 30-60%. Requires discipline but highly 
                profitable on expensive materials (stainless, aluminum, high-strength alloys).
              </p>
              <div>
                <strong className="text-gray-900">Classification System:</strong>
                <ul className="text-gray-600 mt-1 space-y-1 ml-4">
                  <li>• <strong>Class A:</strong> ≥500×500mm, priority use, track in database</li>
                  <li>• <strong>Class B:</strong> 200-500mm, usable for small parts</li>
                  <li>• <strong>Class C:</strong> {'<'}200mm, scrap (unless high-value material)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Process:</strong>
                <ol className="text-gray-600 mt-1 space-y-1 ml-4 list-decimal">
                  <li>Label remnants with size, material, grade</li>
                  <li>Store organized by type (racks, bins)</li>
                  <li>Enter into nesting software database</li>
                  <li>Software auto-prioritizes remnant use</li>
                  <li>Track remnant utilization rate</li>
                </ol>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>Implementation:</strong> Manual tracking (spreadsheet) for small shops, database-integrated 
                tracking (Lantek, SigmaNEST modules) for high-volume operations. Barcode labels ($200 printer, $0.05/label) 
                streamline tracking.
              </p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Micro-Joints / Tabs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-gray-700 mb-3">
                Small uncut connections (0.2-0.5mm wide) keep parts attached to skeleton, preventing part movement, 
                nozzle collisions, and operator safety hazards from falling parts.
              </p>
              <div>
                <strong className="text-gray-900">Benefits:</strong>
                <ul className="text-gray-600 mt-1 space-y-1 ml-4">
                  <li>• Eliminates pierce points (saving time and consumables)</li>
                  <li>• Prevents small part drop-through (safety, accuracy)</li>
                  <li>• Enables batch removal vs individual part handling</li>
                  <li>• Reduces nozzle collision risk from part shifting</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Design Rules:</strong>
                <ul className="text-gray-600 mt-1 space-y-1 ml-4">
                  <li>• Width: 0.2-0.5mm (hand-removable)</li>
                  <li>• Quantity: 2-8 tabs depending on part size/weight</li>
                  <li>• Location: straight edges, away from critical dimensions</li>
                  <li>• Material: brittle (stainless) needs more tabs than ductile (mild steel)</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>Removal:</strong> Hand snap-off for 0.2-0.3mm tabs on <3mm material. Light grinding for thicker 
                materials or 0.4-0.5mm tabs. Budget 15-30 seconds removal time per part (still faster than individual 
                part extraction during cutting).
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">4. ROI Calculation and Business Case</h2>

        <p className="text-gray-700 mb-6">
          Nesting optimization delivers ROI through three channels: material savings (largest), time savings (secondary), 
          and quality improvements (often overlooked but significant). Below is a structured methodology to quantify 
          benefits and justify software/training investments.
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Calculation Framework</h3>
          
          <div className="space-y-4">
            <div>
              <strong className="text-gray-900">Step 1: Baseline Current Performance</strong>
              <ul className="text-gray-600 ml-6 mt-2 space-y-1">
                <li>• Monthly material consumption (kg or sheets)</li>
                <li>• Average material cost per kg/sheet</li>
                <li>• Current utilization rate (measure on 20-30 recent jobs)</li>
                <li>• Average programming time per job</li>
                <li>• Scrap disposal cost</li>
              </ul>
            </div>

            <div>
              <strong className="text-gray-900">Step 2: Project Improved Performance</strong>
              <ul className="text-gray-600 ml-6 mt-2 space-y-1">
                <li>• Target utilization (conservative: +5%; aggressive: +10-15%)</li>
                <li>• Programming time reduction (software: 40-60% faster)</li>
                <li>• Cutting time reduction (common-line, optimized paths: 10-20%)</li>
              </ul>
            </div>

            <div>
              <strong className="text-gray-900">Step 3: Calculate Annual Savings</strong>
              <div className="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                <div>Material Savings = Monthly Spend × (1/Current_Util - 1/Target_Util) × 12</div>
                <div className="mt-2">Time Savings = (Programming_Hours + Cutting_Hours) × Reduction_% × Hourly_Rate × Jobs/Year</div>
                <div className="mt-2">Quality Savings = Reject_Rate_Reduction × Material_Cost × Volume</div>
                <div className="mt-2 font-bold">Total Annual Savings = Material + Time + Quality</div>
              </div>
            </div>

            <div>
              <strong className="text-gray-900">Step 4: Investment Cost</strong>
              <ul className="text-gray-600 ml-6 mt-2 space-y-1">
                <li>• Software license: $3,000-20,000 (one-time)</li>
                <li>• Annual maintenance: 15-20% of license (ongoing)</li>
                <li>• Training: $1,000-5,000 (one-time)</li>
                <li>• Implementation time: 20-40 hours at burdened rate (one-time)</li>
              </ul>
            </div>

            <div>
              <strong className="text-gray-900">Step 5: Calculate Payback Period</strong>
              <div className="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                <div>Payback (months) = Total Investment / (Annual Savings / 12)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Example ROI Scenario 1: Mid-Size Fabricator</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p><strong>Current State:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Material spend: $50,000/month ($600,000/year)</li>
                <li>• Current utilization: 75% (manual rectangular nesting)</li>
                <li>• Programming: 45 min/job, 200 jobs/month = 150 hours/month</li>
                <li>• Cutting time: 400 hours/month</li>
              </ul>
              <p className="mt-3"><strong>Investment:</strong> FastCAM software $5,000 + $300/year maintenance + $2,000 training = $7,300 first year</p>
              <p className="mt-3"><strong>Projected Improvement:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Utilization: 75% → 85% (10-point improvement)</li>
                <li>• Programming time: -50% (software automation)</li>
                <li>• Cutting time: -12% (better pathing)</li>
              </ul>
              <p className="mt-3"><strong>Annual Savings:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Material: $600,000 × (1/0.75 - 1/0.85) = $78,431</li>
                <li>• Programming: 150 hr/mo × 50% × $60/hr × 12 = $54,000</li>
                <li>• Cutting: 400 hr/mo × 12% × $75/hr × 12 = $43,200</li>
                <li>• <strong>Total: $175,631/year</strong></li>
              </ul>
              <p className="mt-3 font-semibold text-green-700"><strong>Payback Period: 0.5 months (2 weeks)</strong></p>
              <p className="mt-2 text-xs text-gray-600">Conservative estimate assumes 50% of theoretical time savings realized due to production scheduling constraints. Material savings are immediate and measurable.</p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Example ROI Scenario 2: High-Volume Production</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p><strong>Current State:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Material spend: $200,000/month ($2.4M/year)</li>
                <li>• Current utilization: 82% (basic nesting software)</li>
                <li>• Complex parts requiring manual optimization</li>
                <li>• 5% scrap due to nesting errors</li>
              </ul>
              <p className="mt-3"><strong>Investment:</strong> SigmaNEST $12,000 + $2,400/year maintenance + $4,000 training = $18,400 first year</p>
              <p className="mt-3"><strong>Projected Improvement:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Utilization: 82% → 90% (8-point improvement, genetic algorithm)</li>
                <li>• Error rate: 5% → 2% (better collision detection, auto-validation)</li>
                <li>• Remnant recovery: +3% (integrated database)</li>
              </ul>
              <p className="mt-3"><strong>Annual Savings:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Material utilization: $2.4M × (1/0.82 - 1/0.90) = $261,290</li>
                <li>• Error reduction: $2.4M × (5% - 2%) = $72,000</li>
                <li>• Remnant recovery: $2.4M × 3% = $72,000</li>
                <li>• <strong>Total: $405,290/year</strong></li>
              </ul>
              <p className="mt-3 font-semibold text-green-700"><strong>Payback Period: 0.5 months (2 weeks)</strong></p>
              <p className="mt-2 text-xs text-gray-600">High-volume operations see fastest ROI due to scale. Every 1% utilization improvement = $24,000/year on this material spend. Advanced software justified even if improvement is only 3-4 points.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-900 text-sm">
            <strong>💡 Implementation Tip:</strong> Start with a 2-week trial of nesting software (most vendors offer 
            evaluation licenses). Run 10-20 typical jobs through trial software, measure actual utilization improvement, 
            and extrapolate annual savings. This data-driven approach removes guesswork and provides concrete ROI for 
            management approval. Document before/after results with screenshots for compelling business case.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">5. Best Practices and Common Mistakes</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card variant="bordered" className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">✓ Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="text-green-800">
                <strong>1. Optimize CAD Before Nesting:</strong> Close open contours, remove duplicate lines, simplify 
                micro-features ({'<'}0.5mm). Clean CAD improves nesting speed 10x and prevents path errors.
              </div>
              <div className="text-green-800">
                <strong>2. Batch Similar Jobs:</strong> Nesting 50 identical parts generates far better utilization 
                (90-95%) than 10 different parts (80-85%) due to pattern repetition opportunities.
              </div>
              <div className="text-green-800">
                <strong>3. Set Realistic Constraints:</strong> Over-constraining (grain direction, spacing, orientation) 
                reduces utilization by 5-12%. Only apply constraints that truly matter for downstream operations.
              </div>
              <div className="text-green-800">
                <strong>4. Verify First Article:</strong> Always run first nested job at reduced speed (80%) and inspect 
                for collisions, part shifting, or quality issues before production run.
              </div>
              <div className="text-green-800">
                <strong>5. Track Metrics:</strong> Monitor utilization rate, programming time, cutting time, and scrap 
                percentage. Trends reveal optimization opportunities and justify continuous improvement investments.
              </div>
              <div className="text-green-800">
                <strong>6. Leverage Common-Line Aggressively:</strong> For shops doing repeat parts, common-line cutting 
                delivers 15-25% productivity gains—the single highest-ROI nesting technique.
              </div>
              <div className="text-green-800">
                <strong>7. Invest in Training:</strong> Advanced nesting software has steep learning curve. 2-3 days 
                formal training ($1,000-3,000) enables users to achieve 80% of software potential vs 30-40% for 
                self-taught users.
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered" className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-lg text-red-900">✗ Common Mistakes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="text-red-800">
                <strong>1. Chasing Last 1-2% Utilization:</strong> Spending 30+ minutes optimizing a nest from 88% to 
                90% rarely justifies the programming labor cost. Set time limits (10-15 min/nest) and accept "good enough."
              </div>
              <div className="text-red-800">
                <strong>2. Ignoring Cutting Time:</strong> 95% utilization with poor path optimization can take longer 
                overall than 88% utilization with efficient paths. Balance material yield with production time.
              </div>
              <div className="text-red-800">
                <strong>3. Manual Nesting for Complex Jobs:</strong> Human brain cannot compete with algorithms for 
                10+ part mixes. Manual nesting averages 70-80% utilization vs 85-92% for software on identical jobs.
              </div>
              <div className="text-red-800">
                <strong>4. Not Using Remnant System:</strong> Discarding 500×500mm+ off-cuts wastes $5-20 per remnant. 
                20 remnants/month = $1,200-4,800/year wasted, plus new sheet costs to replace that capacity.
              </div>
              <div className="text-red-800">
                <strong>5. Inconsistent Pierce Height:</strong> Mixing thick/thin materials in same nest without adjusting 
                pierce parameters causes lens damage or incomplete piercing. Always nest by thickness or use auto-sensing.
              </div>
              <div className="text-red-800">
                <strong>6. Skipping Path Simulation:</strong> 10-15% of complex nests have collision risks (nozzle hitting 
                parts, clamp interference). 30-second simulation preview prevents $500-2,000 crash damage.
              </div>
              <div className="text-red-800">
                <strong>7. Cheap Software False Economy:</strong> Saving $5,000 on software but losing 3-5% utilization 
                costs $18,000-30,000/year on $600K material spend. Premium software typically recovers price premium in 
                3-6 months through better algorithms.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chinese Content Section */}
      <section>
        <div className="mb-8 mt-12">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">激光切割排版优化指南 (Chinese Version)</h1>
          <p className="text-lg text-muted-foreground">以"更高材料利用率+更短加工时间"为导向的系统方法</p>
      </div>

      {/* 1. 排版原则与方法 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 排版原则与方法</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">基本排版原则</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 大件优先/边角利用/方向统一</div>
              <div>• 最小边距3-5mm，零件间距1-3mm</div>
              <div>• 切割顺序规划与穿孔点选择</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">常见排版方法</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 矩形排列：规则件，75-85%利用率</div>
              <div>• 嵌套排列：异形件，80-90%</div>
              <div>• 共边切割：相同零件，85-92%，切割时间-15-25%</div>
              <div>• 智能算法：遗传/模拟退火，88-95%</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. 软件应用与技巧 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 软件应用与技巧</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">主流软件对比</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Sigmanest：自动优化强，90-95%</div>
              <div>• FastCAM：通用性好，85-90%</div>
              <div>• Lantek：系统集成好，85-92%</div>
              <div>• 国产：性价比高，80-88%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">使用技巧</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 约束条件：方向/间距/共边边数</div>
              <div>• 参数设置：边距优先/路径最短</div>
              <div>• 手工干预：关键零件锁定与分区排版</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 特殊排版技术 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 特殊排版技术</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">共边切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 条件：材料/质量一致，轮廓匹配</div>
              <div>• 步骤：CAD处理 → 软件设置 → 路径验证</div>
              <div>• 效果：材料+8~12%，时间-15~25%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">余料管理</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 余料分类：A≥500×500、B 200~500、C{'<'}200</div>
              <div>• 余料库：尺寸标记与优先排版</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">微连接技术</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 宽度0.2-0.5mm，数量随尺寸</div>
              <div>• 减少穿孔与零件掉落</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. ROI评估 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. ROI评估</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
            <div>• 输入：月材料量、单价、当前利用率</div>
            <div>• 输出：提升5%的年度节省、软件回收期</div>
            <div>• 建议：结合订单结构评估真实收益</div>
          </CardContent>
        </Card>
      </section>

      {/* 5. 相关链接 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/tools/cost-estimator" className="underline">切割成本估算器</Link>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline">切缝估算器</Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>配套指南</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/guides/process-optimization-guide" className="underline">工艺优化指南</Link>
            </div>
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline">材料厚度参数表</Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">提示：排版前优化CAD图纸（闭合、共边、简化小特征），可显著提升利用率与加工效率。</p>
    </div>
  );
}

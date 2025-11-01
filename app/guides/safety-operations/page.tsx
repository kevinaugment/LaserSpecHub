import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Safety Operations Guide - Complete OSHA & IEC Compliance | LaserSpecHub',
  description:
    'Comprehensive laser cutting safety operations guide covering PPE requirements, daily inspection checklists, SOPs, emergency response protocols, training programs, and OSHA/ANSI/IEC compliance. Protect personnel and equipment with industry-standard safety procedures.',
  keywords: ['laser safety', 'OSHA compliance', 'laser safety training', 'PPE requirements', 'IEC 60825-1', 'emergency response', 'safety SOP', 'Class 4 laser', 'laser hazards', 'safety checklist'],
  alternates: { canonical: 'https://laserspechub.com/guides/safety-operations' },
  openGraph: {
    title: 'Laser Cutting Safety Operations - OSHA/IEC Compliance Guide',
    description: 'Complete safety guide: PPE, inspections, SOPs, training, emergency response, and regulatory compliance',
    type: 'article',
    url: 'https://laserspechub.com/guides/safety-operations',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Industrial Laser Safety Operations',
  description: 'PPE, Checklists, SOPs and Emergency Procedures',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="HowTo" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Laser Cutting Safety Operations Guide</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Industrial laser cutters (Class 4 systems) present serious hazards including eye damage, skin burns, fire risk, 
          and toxic fume exposure. This comprehensive safety guide provides OSHA-compliant procedures, training programs, 
          emergency protocols, and regulatory compliance frameworks to protect personnel and facilities.
        </p>
        <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-8">
          <p className="text-red-900 text-sm">
            <strong>⚠️ Critical Safety Warning:</strong> Class 4 lasers (industrial cutting lasers 1kW+) can cause 
            permanent eye damage in 0.25 seconds, ignite clothing/materials instantly, and produce toxic fumes. Direct 
            or reflected beam exposure can cause irreversible injury. Comprehensive safety training, engineering controls, 
            and PPE are mandatory—not optional. Annual incident rate: 2-5 injuries per 1,000 operators without proper 
            safety protocols. Compliance saves lives and prevents $50,000-500,000 liability costs per incident.
          </p>
        </div>
      </div>

      {/* English Content Section */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Laser Hazard Classification and Risk Assessment</h2>
        
        <p className="text-gray-700 mb-6">
          Industrial laser cutters are classified as <strong>Class 4 lasers</strong>—the highest hazard level per IEC 
          60825-1 and ANSI Z136.1. Class 4 lasers exceed 0.5W output power and pose severe eye/skin hazards from direct 
          or diffusely reflected beams. Understanding hazard levels informs appropriate safety measures.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card variant="bordered" className="bg-red-50 border-red-300">
            <CardHeader>
              <CardTitle className="text-lg text-red-900">Class 4 Laser Hazards (Industrial Cutters)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-red-800">Eye Damage (Immediate & Permanent):</strong>
                <p className="text-gray-700">Direct beam exposure causes corneal burns, retinal damage, or total blindness 
                in 0.1-1.0 seconds. Diffuse reflections from shiny surfaces (aluminum, stainless) can injure at 1-3 meters 
                distance. No warning, no recovery—damage is instant and irreversible.</p>
              </div>
              <div>
                <strong className="text-red-800">Skin Burns (Severe):</strong>
                <p className="text-gray-700">1-12kW beam cuts through clothing and flesh instantly. Contact causes 3rd 
                degree burns penetrating to bone. Reflected beams can ignite synthetic clothing (nylon, polyester melts 
                at 250-280°C). 6kW laser = 6,000 watts focused to 0.2mm spot = 95 million W/m² power density.</p>
              </div>
              <div>
                <strong className="text-red-800">Fire Hazards:</strong>
                <p className="text-gray-700">Beam ignites paper (233°C), wood (300°C), plastics (300-500°C), and fabrics 
                instantly. Cutting metal produces sparks igniting nearby combustibles. Oxygen-assisted cutting exacerbates 
                fire risk. Annual fire incidents: 5-10 per 10,000 laser installations, $25,000-250,000 average damage.</p>
              </div>
              <div>
                <strong className="text-red-800">Toxic Fume Exposure:</strong>
                <p className="text-gray-700">Metal vaporization creates metal oxide particulates (Fe₂O₃, Cr₂O₃ from 
                stainless = carcinogenic). Plastic cutting releases HCl, phosgene, dioxins. Inadequate ventilation causes 
                acute respiratory distress, long-term lung disease, heavy metal poisoning. OSHA PEL: Cr(VI) 5μg/m³ 
                (cutting stainless generates 50-500μg/m³ without extraction).</p>
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered" className="bg-gray-50 border-gray-300">
            <CardHeader>
              <CardTitle className="text-lg">Secondary Hazards</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-gray-900">Electrical Shock:</strong>
                <p className="text-gray-700">Fiber lasers: 200-480V 3-phase, 30-150A circuits. Capacitor banks store 
                lethal energy (remain charged 30+ minutes after power-off). Annual electrocution incidents: 1-2 per 
                100,000 installations, 30% fatality rate. Lockout/tagout mandatory.</p>
              </div>
              <div>
                <strong className="text-gray-900">Moving Machinery:</strong>
                <p className="text-gray-700">CNC axes accelerate to 2-3G, moving at 80-120 m/min (4,800 m/hour). Collision 
                force sufficient to crush fingers, hands. Light curtains and interlocks prevent entry during operation. 
                Crush injuries: 10-15 per 100,000 operator-years.</p>
              </div>
              <div>
                <strong className="text-gray-900">Compressed Gas:</strong>
                <p className="text-gray-700">Nitrogen/oxygen assist gas at 10-25 bar (145-360 PSI). Hose failures create 
                whip hazards (150 m/s tip speed = deadly projectile). Oxygen leaks accelerate fires. Confined space 
                asphyxiation risk with nitrogen displacement. Annual gas-related incidents: 2-3 per 10,000 installations.</p>
              </div>
              <div>
                <strong className="text-gray-900">Noise Exposure:</strong>
                <p className="text-gray-700">Cutting operations: 75-95 dB(A). Assist gas flow, extraction fans, material 
                impacts generate sustained noise. OSHA action level 85 dB(A) TWA requires hearing conservation program. 
                Long-term exposure causes permanent hearing loss (20-30% of operators show measurable hearing degradation 
                after 5-10 years without protection).</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">2. Personal Protective Equipment (PPE) Requirements</h2>

        <p className="text-gray-700 mb-6">
          PPE is the last line of defense after engineering controls (enclosures, interlocks) and administrative controls 
          (training, procedures). ANSI Z136.1 mandates specific PPE based on laser wavelength, power, and exposure scenarios.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">PPE Item</th>
                <th className="text-left p-3 font-semibold">Specification</th>
                <th className="text-left p-3 font-semibold">Purpose & Standards</th>
                <th className="text-left p-3 font-semibold">Cost & Replacement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-medium">Laser Safety Eyewear</td>
                <td className="p-3">
                  OD 5+ at 1064nm (fiber laser)<br/>
                  OD 7+ at 10600nm (CO2 laser)<br/>
                  Side shields, impact rated
                </td>
                <td className="p-3">
                  Blocks direct/reflected beam preventing retinal damage. ANSI Z136.1 requires OD sufficient for MPE 
                  (Maximum Permissible Exposure). Visible Light Transmission (VLT) 20-40% for usability.
                </td>
                <td className="p-3">
                  $150-400/pair<br/>
                  Replace: 2-3 years or if scratched/damaged
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Respiratory Protection</td>
                <td className="p-3">
                  N95/FFP2 minimum (metal fumes)<br/>
                  P100/FFP3 (toxic materials)<br/>
                  Half-face respirator (high exposure)
                </td>
                <td className="p-3">
                  Filters metal oxide particulates, organic vapors. NIOSH approval required. Fit testing mandatory 
                  (OSHA 1910.134). N95 blocks 95% of 0.3μm particles; P100 blocks 99.97%.
                </td>
                <td className="p-3">
                  N95: $1-3 (disposable)<br/>
                  Half-face: $150-300<br/>
                  Replace: Per manufacturer schedule
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Protective Gloves</td>
                <td className="p-3">
                  Cut-resistant (ANSI Level 3+)<br/>
                  Heat-resistant (250°C+)<br/>
                  Non-reflective material
                </td>
                <td className="p-3">
                  Protects from sharp edges, hot material, minor burns. Kevlar/Dyneema blend provides cut + heat 
                  resistance. Leather alternative for heavy work. Never use near rotating machinery (entanglement risk).
                </td>
                <td className="p-3">
                  $15-40/pair<br/>
                  Replace: 3-6 months or when damaged
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Flame-Resistant Clothing</td>
                <td className="p-3">
                  Cotton (natural fiber, non-melting)<br/>
                  FR-treated workwear (NFPA 2112)<br/>
                  Long sleeves, no exposed skin
                </td>
                <td className="p-3">
                  Prevents ignition from sparks/hot material. Synthetic fabrics (polyester, nylon) melt onto skin causing 
                  severe burns. FR clothing self-extinguishes upon removal from heat source. Dark colors reduce laser 
                  reflections.
                </td>
                <td className="p-3">
                  Cotton workwear: $30-60/set<br/>
                  FR-rated: $80-150/set<br/>
                  Replace: Annually or per laundry cycle limit
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Safety Footwear</td>
                <td className="p-3">
                  Steel/composite toe (ASTM F2413)<br/>
                  Electrical hazard rated<br/>
                  Non-slip sole
                </td>
                <td className="p-3">
                  Protects from dropped materials, crush injuries, electrical shock. EH rating: withstands 18,000V at 
                  60Hz in dry conditions. Metatarsal guards for heavy material handling.
                </td>
                <td className="p-3">
                  $80-180/pair<br/>
                  Replace: Annually or when sole worn
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Hearing Protection</td>
                <td className="p-3">
                  Foam earplugs (NRR 29-33 dB)<br/>
                  Earmuffs (NRR 25-31 dB)<br/>
                  Double protection (85+ dB environments)
                </td>
                <td className="p-3">
                  Reduces noise exposure below OSHA PEL (90 dB TWA) and action level (85 dB). NRR (Noise Reduction 
                  Rating) de-rated per OSHA: (NRR-7)×0.5 = actual protection. 85 dB + NRR 29 earplugs = 74 dB effective.
                </td>
                <td className="p-3">
                  Earplugs: $0.20-1/pair (disposable)<br/>
                  Earmuffs: $15-50<br/>
                  Replace: Earplugs daily; earmuffs 1-2 years
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-yellow-900 text-sm">
            <strong>💡 PPE Cost vs Incident Cost:</strong> Complete PPE setup costs $400-700 per operator. Average laser 
            injury medical costs: $25,000-150,000 (eye damage requiring surgery). OSHA citation for inadequate PPE: 
            $7,000-14,000 per violation. Employer liability for preventable injury: $250,000-2,000,000 (lawsuit + 
            settlement). PPE investment recovers itself preventing single incident.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">3. Safety Training Program Requirements</h2>

        <p className="text-gray-700 mb-6">
          OSHA General Duty Clause (Section 5(a)(1)) and ANSI Z136.1 mandate employer-provided laser safety training. 
          Untrained operators account for 70-80% of laser incidents. Comprehensive training reduces incident rates by 
          85-95%. Below is a complete training curriculum framework.
        </p>

        <div className="space-y-6 mb-8">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Initial Training (8-16 hours, before independent operation)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong className="text-gray-900">Module 1: Laser Physics & Hazards (2 hours)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Laser beam characteristics, wavelength, power density calculations</li>
                  <li>• Class 1-4 hazard classifications, Class 4 specific risks</li>
                  <li>• Eye anatomy, retinal damage mechanisms, exposure limits (MPE)</li>
                  <li>• Skin thermal injury, fire ignition temperatures, fume toxicity</li>
                  <li>• Real-world incident case studies with injury photos (impact demonstration)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 2: Engineering Controls & Safety Systems (2 hours)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Enclosure design, viewing windows, interlocked doors</li>
                  <li>• Emergency stop systems, beam shutter operation, key switches</li>
                  <li>• Fume extraction requirements (350-1,500 CFM per machine), filter maintenance</li>
                  <li>• Warning labels, signs, controlled access zones</li>
                  <li>• Hands-on: Test emergency stops, verify interlocks, inspect extraction</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 3: PPE Selection & Use (1 hour)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Eyewear OD selection for wavelength, proper fit, care/storage</li>
                  <li>• Respirator fit testing (OSHA 1910.134), filter selection, medical clearance</li>
                  <li>• Glove/clothing FR requirements, inspection for damage</li>
                  <li>• Hands-on: Don/doff PPE, eyewear adjustment, respirator seal check</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 4: Standard Operating Procedures (3 hours)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Pre-operation inspection checklist (18 items, 10-15 minutes)</li>
                  <li>• Startup sequence, homing, laser enable, test fire procedure</li>
                  <li>• Material loading, nesting verification, program selection</li>
                  <li>• Operation monitoring, quality checks, parameter adjustments</li>
                  <li>• Shutdown sequence, post-operation cleaning, logbook documentation</li>
                  <li>• Hands-on: Supervised operation of full cutting cycle</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 5: Emergency Response (2 hours)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Fire response: Class ABC/D extinguisher use, evacuation routes</li>
                  <li>• Eye/skin exposure: First aid, emergency contacts, incident reporting</li>
                  <li>• Electrical shock: Lockout/tagout, de-energization verification</li>
                  <li>• Gas leak: Ventilation, evacuation, emergency shutoff valves</li>
                  <li>• Hands-on: Fire extinguisher drill, eye wash station, emergency stop response</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 6: Regulatory Compliance (1 hour)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• OSHA 1910 Subpart Q (machinery), 1910.134 (respiratory), 1910.147 (lockout/tagout)</li>
                  <li>• ANSI Z136.1 laser safety standard, IEC 60825-1 international requirements</li>
                  <li>• State/local regulations, insurance requirements, liability implications</li>
                  <li>• Documentation requirements, incident reporting, inspection readiness</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Module 7: Competency Assessment (2 hours)</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Written exam: 50 questions, 80% pass rate required</li>
                  <li>• Practical demonstration: Complete cutting cycle under supervision</li>
                  <li>• Emergency scenario simulations: Fire, eye exposure, equipment malfunction</li>
                  <li>• Certification valid 1 year, refresher training required annually</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Annual Refresher Training (4 hours, all operators)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-gray-700">OSHA and ANSI Z136.1 require annual retraining to reinforce safety knowledge, 
              address procedural changes, and review incident trends.</p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Review of previous year incidents (facility + industry-wide)</li>
                <li>• Updated SOPs, equipment modifications, regulatory changes</li>
                <li>• PPE inspection, fit testing (respirators), eyewear OD verification</li>
                <li>• Emergency drill: Fire evacuation, eye wash, emergency stop</li>
                <li>• Competency re-assessment: Written exam + practical demonstration</li>
              </ul>
              <p className="text-gray-700 mt-2">Operators failing refresher must complete initial training before resuming 
              independent operation. Training records retained 3+ years for OSHA inspection.</p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Training Documentation & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-gray-700">Maintain detailed training records per OSHA recordkeeping requirements:</p>
              <ul className="text-gray-700 ml-4 space-y-1">
                <li>• Trainee name, employee ID, date of hire</li>
                <li>• Training date, duration, modules completed</li>
                <li>• Trainer qualifications (Certified Laser Safety Officer recommended)</li>
                <li>• Assessment results (written exam score, practical pass/fail)</li>
                <li>• Certification expiration date, next refresher due date</li>
                <li>• Training materials version (track SOP updates)</li>
              </ul>
              <p className="text-gray-700 mt-2">Digital training management systems ($500-2,000/year) automate tracking, 
              send expiration alerts, and generate OSHA-ready reports. Manual systems using spreadsheets acceptable but 
              prone to oversight.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-900 text-sm">
            <strong>💡 Training ROI:</strong> Initial + annual training costs $500-1,200 per operator. Untrained operator 
            incident average cost: $50,000-300,000 (injury, lost time, OSHA fines, legal). Single prevented incident 
            justifies 5-10 years of comprehensive training program. Insurance premiums reduce 10-30% with documented 
            training program. OSHA citations for inadequate training: $14,000-140,000 (serious to willful violations).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">4. Emergency Response Protocols</h2>

        <p className="text-gray-700 mb-6">
          Despite preventive measures, emergencies occur. Rapid, correct response minimizes injury severity, prevents 
          escalation, and limits liability. All operators must know emergency procedures by memory—hesitation costs lives.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card variant="bordered" className="bg-red-50 border-red-300">
            <CardHeader>
              <CardTitle className="text-lg text-red-900">Fire Emergency Protocol</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-red-800">Immediate Actions (First 30 seconds):</strong>
                <ol className="text-gray-700 ml-4 mt-1 space-y-1 list-decimal">
                  <li>Press EMERGENCY STOP (de-energizes laser, shuts beam)</li>
                  <li>Alert personnel: Shout "FIRE!" activate alarm pull station</li>
                  <li>Close enclosure door (contains fire, limits oxygen)</li>
                  <li>Evacuate immediate area (3-5 meter radius minimum)</li>
                </ol>
              </div>
              <div>
                <strong className="text-red-800">Fire Suppression (If safe to attempt):</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Small fire (≤ 2 sq ft): Use Class ABC fire extinguisher (CO₂ or dry chemical)</li>
                  <li>• Electrical fire: NEVER use water (electrocution risk). CO₂ extinguisher only.</li>
                  <li>• Material fire: Remove oxygen (assist gas shutoff), smother with fire blanket</li>
                  <li>• Large fire or spreading rapidly: Evacuate immediately, call 911</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-800">Do NOT Attempt If:</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Fire larger than trash can or spreading to ceiling/walls</li>
                  <li>• Thick smoke limiting visibility or breathing</li>
                  <li>• Exit route potentially blocked by fire progression</li>
                  <li>• Electrical arcing or gas leak suspected</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-2"><strong>Post-Incident:</strong> Do not restart equipment. Facility inspection 
              by fire marshal + equipment inspection by technician mandatory before resuming operations. Document incident 
              per OSHA 300 Log requirements.</p>
            </CardContent>
          </Card>

          <Card variant="bordered" className="bg-orange-50 border-orange-300">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900">Laser Exposure / Eye Injury Protocol</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-orange-800">Suspected Exposure (Immediate):</strong>
                <ol className="text-gray-700 ml-4 mt-1 space-y-1 list-decimal">
                  <li>Press EMERGENCY STOP, activate beam shutter</li>
                  <li>Close eyes immediately, do NOT rub (may worsen corneal abrasion)</li>
                  <li>Alert coworkers, move to well-lit area for assessment</li>
                  <li>Flush eyes with sterile saline for 15 minutes (if irritated)</li>
                </ol>
              </div>
              <div>
                <strong className="text-orange-800">Symptoms Requiring Emergency Medical Attention:</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Sudden vision loss, black spots, flashing lights, curtain-like shadow</li>
                  <li>• Severe pain, foreign body sensation, inability to open eye</li>
                  <li>• Visible burns on eyelid or surrounding skin</li>
                  <li>• Any symptoms persisting beyond 30 minutes</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-800">Medical Response (Within 60 minutes):</strong>
                <p className="text-gray-700">Laser eye injuries are ophthalmic emergencies. Transport to hospital or 
                ophthalmologist immediately. Inform medical staff: laser type (fiber/CO2), wavelength (1064nm/10600nm), 
                power level, exposure duration (if known). Time is critical—retinal damage progresses rapidly without 
                treatment.</p>
              </div>
              <p className="text-gray-700 mt-2"><strong>Post-Incident:</strong> Full investigation mandatory. Identify 
              root cause (bypassed interlock, defective eyewear, procedural violation). Implement corrective actions, 
              retrain all operators, update procedures. Report to OSHA within 24 hours if hospitalization required.</p>
            </CardContent>
          </Card>

          <Card variant="bordered" className="bg-purple-50 border-purple-300">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900">Electrical Shock / Electrocution Protocol</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-purple-800">If Person in Contact with Electrical Source:</strong>
                <ol className="text-gray-700 ml-4 mt-1 space-y-1 list-decimal">
                  <li>DO NOT TOUCH VICTIM (you become part of circuit, double casualty)</li>
                  <li>Shut off power: Main disconnect, circuit breaker, or emergency cutoff</li>
                  <li>If power cannot be shut off: Use non-conductive object (wood, plastic) to separate victim from source</li>
                  <li>Call 911 immediately, begin CPR if victim unconscious/not breathing</li>
                </ol>
              </div>
              <div>
                <strong className="text-purple-800">Medical Assessment (All shock victims):</strong>
                <p className="text-gray-700">Even if victim appears uninjured, electrical shock can cause cardiac arrhythmias 
                hours later. Transport to ER for EKG monitoring. Symptoms requiring immediate medical attention: chest pain, 
                irregular heartbeat, burns at entry/exit points, confusion, seizures, loss of consciousness.</p>
              </div>
              <div>
                <strong className="text-purple-800">Prevention (Lockout/Tagout):</strong>
                <p className="text-gray-700">OSHA 1910.147 mandates lockout/tagout for all maintenance/service work. 
                De-energize equipment, lock disconnect in OFF position, tag with name/date, test for zero energy using 
                multimeter. Capacitors remain charged 30+ minutes—wait or manually discharge through rated resistor. 
                Authorized electricians only for high-voltage work (≥600V).</p>
              </div>
            </CardContent>
          </Card>

          <Card variant="bordered" className="bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Toxic Fume Exposure / Respiratory Distress</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong className="text-green-800">Acute Exposure Symptoms:</strong>
                <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                  <li>• Coughing, wheezing, shortness of breath, chest tightness</li>
                  <li>• Dizziness, nausea, metallic taste, headache</li>
                  <li>• Eye/throat irritation, excessive tearing</li>
                  <li>• Metal fume fever: flu-like symptoms 4-12 hours post-exposure (zinc, copper fumes)</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-800">Immediate Response:</strong>
                <ol className="text-gray-700 ml-4 mt-1 space-y-1 list-decimal">
                  <li>Stop cutting operation, evacuate to fresh air immediately</li>
                  <li>Loosen restrictive clothing, sit upright (easier breathing)</li>
                  <li>If symptoms severe (difficulty breathing, blue lips): Call 911, administer oxygen if available</li>
                  <li>Minor symptoms: Monitor for 30 minutes, seek medical attention if worsening</li>
                </ol>
              </div>
              <div>
                <strong className="text-green-800">Prevention:</strong>
                <p className="text-gray-700">Verify fume extraction operational before cutting (350-1,500 CFM per machine). 
                Check extraction filters monthly, replace at 80% capacity. Respirator mandatory if ventilation inadequate. 
                Air quality monitoring (particulate + gas sensors) recommended for high-volume operations. OSHA PEL 
                exceedance triggers enhanced controls.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact Information (Post Visibly)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-900">Critical Contacts:</strong>
              <ul className="text-gray-700 ml-4 mt-2 space-y-1">
                <li>• Emergency Services: 911</li>
                <li>• Facility Emergency Coordinator: [Name, Phone]</li>
                <li>• Laser Safety Officer: [Name, Phone]</li>
                <li>• Equipment Manufacturer Support: [Phone, available hours]</li>
                <li>• Nearest Hospital ER: [Name, Address, Phone]</li>
                <li>• Ophthalmologist (laser injury specialist): [Name, Phone]</li>
                <li>• OSHA Regional Office: [Phone] (incident reporting)</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Equipment Emergency Shutoff Locations:</strong>
              <ul className="text-gray-700 ml-4 mt-2 space-y-1">
                <li>• Emergency Stop Buttons: [Locations]</li>
                <li>• Main Electrical Disconnect: [Location]</li>
                <li>• Gas Emergency Shutoff Valves: [Locations]</li>
                <li>• Fire Extinguishers: [Locations, last inspection date]</li>
                <li>• Eye Wash Stations: [Locations]</li>
                <li>• First Aid Kit: [Location]</li>
                <li>• Fire Alarm Pull Stations: [Locations]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1. 个人防护（PPE） */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 个人防护（PPE）</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
            <div>• 眼部：激光防护眼镜（按波长与OD值选择）</div>
            <div>• 呼吸：防尘口罩（N95/FFP2），特殊材料时使用防毒面具</div>
            <div>• 手部：防切割手套；身体：阻燃工作服；足部：绝缘鞋</div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 设备安全检查 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 设备安全检查</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-lg">每日（10项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 冷却水位/水温</div>
              <div>□ 保护镜片清洁</div>
              <div>□ 喷嘴状态</div>
              <div>□ 气体压力</div>
              <div>□ 抽风系统</div>
              <div>□ 急停按钮</div>
              <div>□ 光路安全罩</div>
              <div>□ 排渣系统</div>
              <div>□ 接地</div>
              <div>□ 联锁装置</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">每周（5项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 光纤/激光管连接</div>
              <div>□ 聚焦镜片清洁</div>
              <div>□ 伺服系统润滑</div>
              <div>□ 冷却器散热器清洁</div>
              <div>□ 安全标识</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">每月（3项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 绝缘电阻测试</div>
              <div>□ 接地电阻测试</div>
              <div>□ 联锁功能测试</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 标准操作程序（SOP） */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 标准操作程序（SOP）</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-lg">开机流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 穿戴PPE</div>
              <div>2. 完成设备检查</div>
              <div>3. 开启冷却器等待水温</div>
              <div>4. 开启抽风系统</div>
              <div>5. 开启主机并回零</div>
              <div>6. 检查激光器状态</div>
              <div>7. 试切验证</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">切割流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 确认程序与参数</div>
              <div>2. 固定材料</div>
              <div>3. 设定安全高度</div>
              <div>4. 关闭防护门</div>
              <div>5. 启动程序并监控首件</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">关机流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 完成当前切割</div>
              <div>2. 切割头归位</div>
              <div>3. 关闭激光器</div>
              <div>4. 冷却器延时15分钟</div>
              <div>5. 清理台面与烟尘</div>
              <div>6. 关闭主机</div>
              <div>7. 填写运行记录</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. 应急处理 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 应急处理</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">火灾应急</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>• 立即急停与断电（安全条件下）</div>
              <div>• 使用CO₂或干粉灭火器</div>
              <div>• 禁止使用水灭火（电气设备）</div>
              <div>• 疏散并报警</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">激光泄漏/人员受伤</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>• 异常光点/烧焦气味→急停、疏散、通知维护</div>
              <div>• 眼部照射：闭眼、就医；皮肤灼伤：冷水冲洗与覆盖</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. 法规与标准 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. 法规与标准</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-1">
            <div>• IEC 60825-1 / EN 60825-1 / 21 CFR 1040.10</div>
            <div>• ISO 11553 工业激光安全</div>
            <div>• GB 7247 激光产品安全</div>
          </CardContent>
        </Card>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">提示：建立“安全检查—培训—应急演练”闭环机制，并记录在案以满足审计要求。</p>
    </div>
  );
}

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

      {/* Section 5: Daily Pre-Operation Inspection Checklist */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">5. Daily Pre-Operation Inspection Checklist</h2>
        
        <p className="text-gray-700 mb-6">
          OSHA General Duty Clause and ANSI Z136.1 require documented pre-operation equipment inspections to verify 
          all safety systems function properly before laser operation. A systematic daily inspection prevents equipment 
          failures, identifies hazards before incidents occur, and provides legal documentation of due diligence. 
          Operators must complete and sign inspection checklist daily—never skip or rush this critical safety procedure.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Inspection Item</th>
                <th className="text-left p-3 font-semibold">Check Method</th>
                <th className="text-left p-3 font-semibold">Pass Criteria</th>
                <th className="text-left p-3 font-semibold">Fail Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-red-50">
                <td className="p-3 font-medium">1. Laser Safety Eyewear</td>
                <td className="p-3">Visual inspection of all eyewear at workstation</td>
                <td className="p-3">Clean lenses, no scratches/cracks, correct OD rating label visible, side shields intact</td>
                <td className="p-3"><strong>CRITICAL:</strong> Replace damaged eyewear immediately. Do not operate without proper eyewear.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">2. Emergency Stop Buttons</td>
                <td className="p-3">Press each E-stop, verify laser disables, release and reset</td>
                <td className="p-3">Laser immediately disables, axes brake, audible/visual indication, reset requires manual action</td>
                <td className="p-3"><strong>CRITICAL:</strong> Tag out equipment. Contact maintenance immediately. Do not operate.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">3. Door Interlock System</td>
                <td className="p-3">Open each access door during laser-armed mode (low power test)</td>
                <td className="p-3">Laser beam shutter closes immediately, control displays interlock fault message</td>
                <td className="p-3"><strong>CRITICAL:</strong> Tag out equipment. Bypassing interlocks is illegal and deadly. Contact maintenance.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">4. Beam Shutter Operation</td>
                <td className="p-3">Cycle beam shutter open/closed 3 times, observe indicator lights</td>
                <td className="p-3">Shutter responds within 0.5 seconds, indicator matches position, no abnormal sounds</td>
                <td className="p-3"><strong>CRITICAL:</strong> Tag out equipment. Shutter failure = uncontrolled beam exposure risk.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">5. Fume Extraction System</td>
                <td className="p-3">Start extraction, verify airflow at nozzle/workpiece with smoke pencil or tissue</td>
                <td className="p-3">Strong airflow (350-1,500 CFM per spec), no unusual noise, pressure gauge in green zone</td>
                <td className="p-3"><strong>CRITICAL:</strong> Do not cut without extraction. Toxic fume exposure = health hazard. Contact maintenance.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">6. Protective Lens Cleanliness</td>
                <td className="p-3">Remove nozzle assembly, inspect protective lens with flashlight</td>
                <td className="p-3">Lens clear, no contamination/pitting/cracks, securely mounted with retaining ring</td>
                <td className="p-3">Clean with optical wipes + isopropyl alcohol. Replace if damaged. Dirty lens = reduced power/fire risk.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">7. Nozzle Condition & Alignment</td>
                <td className="p-3">Visual inspection of nozzle orifice, centering relative to lens</td>
                <td className="p-3">No damage/spatter buildup, orifice centered, proper standoff height (0.5-2.0mm typical)</td>
                <td className="p-3">Replace nozzle if damaged. Misaligned nozzle causes poor cuts and potential lens damage.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">8. Assist Gas Pressure</td>
                <td className="p-3">Check pressure gauges for N₂ and O₂ (if used)</td>
                <td className="p-3">Supply pressure 12-20 bar (175-290 PSI), regulated pressure per material requirements (1-25 bar)</td>
                <td className="p-3">Refill cylinders if below minimum. Low pressure = poor cut quality, increased dross.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">9. Chiller Water Level & Temperature</td>
                <td className="p-3">Check sight glass or digital display on chiller unit</td>
                <td className="p-3">Water level 80-100% full, temperature 18-25°C (64-77°F), no low-water alarms</td>
                <td className="p-3">Top up with deionized/distilled water. Overheating damages laser source (repair cost $10,000-50,000).</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">10. Cooling Water Conductivity</td>
                <td className="p-3">Use conductivity meter if available (fiber lasers)</td>
                <td className="p-3">Conductivity &lt;10 μS/cm (fiber laser spec), clear appearance, no algae/contamination</td>
                <td className="p-3">Replace water if conductivity high. Contaminated water causes electrical shorts in laser module.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">11. Servo System Lubrication</td>
                <td className="p-3">Visual inspection of linear guides and rack/pinion, feel for roughness during manual jog</td>
                <td className="p-3">Light grease coating visible, smooth motion with no binding or noise</td>
                <td className="p-3"><strong>CRITICAL:</strong> Lubricate per maintenance schedule. Dry guides cause positioning errors and crashes.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">12. Worktable Positioning Accuracy</td>
                <td className="p-3">Home all axes, jog to known reference point, measure position or run test pattern</td>
                <td className="p-3">Position repeatable within ±0.1mm, no axis drift, homing completes without errors</td>
                <td className="p-3">Recalibrate axes or contact technician. Poor accuracy causes scrap parts.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">13. Warning Signs & Labels</td>
                <td className="p-3">Walk around equipment, verify all safety signs visible and legible</td>
                <td className="p-3">Class 4 laser warning signs at all access points, no faded/missing labels, emergency contacts posted</td>
                <td className="p-3">Replace missing/damaged signs. OSHA/FDA requirement—citations issued for non-compliance.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">14. Fire Extinguisher Accessibility</td>
                <td className="p-3">Verify fire extinguisher location, check pressure gauge and inspection tag</td>
                <td className="p-3">Extinguisher within 3 meters, pressure gauge in green zone, inspection current (within 1 year)</td>
                <td className="p-3">Contact facility maintenance to recharge/replace extinguisher. Do not operate without fire protection.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">15. Eye Wash Station Function</td>
                <td className="p-3">Activate eye wash station, verify both streams flow properly</td>
                <td className="p-3">Both streams flow at proper height (83-135cm / 33-53 inches), tepid water, activates in &lt;1 second</td>
                <td className="p-3">Tag station out-of-service, contact maintenance immediately. Eye wash = critical emergency equipment.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">16. Electrical Ground Continuity</td>
                <td className="p-3">Use multimeter to test resistance from equipment frame to facility ground</td>
                <td className="p-3">Resistance &lt;1Ω (ohm), ground connection tight and corrosion-free</td>
                <td className="p-3"><strong>CRITICAL:</strong> Tag out equipment. Ground fault = electrocution risk. Licensed electrician repair only.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">17. Control Panel Display</td>
                <td className="p-3">Power up control system, verify display shows no fault messages</td>
                <td className="p-3">Display clear and readable, no error codes, all indicator lights functional</td>
                <td className="p-3">Investigate any fault codes per operator manual. Do not clear faults without resolving root cause.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">18. Operator Logbook Documentation</td>
                <td className="p-3">Review previous shift logbook entries, document inspection results</td>
                <td className="p-3">No unresolved issues from previous shift, all inspection items checked and signed</td>
                <td className="p-3">Resolve any issues from previous shift before operating. Maintain continuous documentation chain.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-900 text-sm">
            <strong>⏱️ Time Required:</strong> Complete checklist requires 10-15 minutes per day. Document all results 
            in daily operation logbook with date, time, operator signature, and any corrective actions taken. Equipment 
            must NOT operate if any critical items (1-6, 11, 16) fail inspection—tag out equipment and contact maintenance 
            immediately. Skipping inspection to save time is a false economy: 15 minutes daily vs. $50,000-500,000 
            incident cost + potential injury. Insurance may deny claims if inspection documentation is incomplete.
          </p>
        </div>
      </section>

      {/* Section 6: Engineering Controls & Safety Systems */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">6. Engineering Controls & Safety Systems</h2>
        
        <p className="text-gray-700 mb-6">
          Engineering controls are physical safety features designed into laser equipment to eliminate or reduce hazards 
          at the source—the most effective safety approach per the hierarchy of controls. ANSI Z136.1 mandates specific 
          engineering controls for Class 4 lasers including enclosures, interlocks, beam shutters, and extraction systems. 
          These controls provide primary protection; PPE serves as backup only when engineering controls cannot fully 
          eliminate exposure risk.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6.1 Physical Barriers & Enclosures</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">Full Enclosure Requirement (ANSI Z136.1 Section 4.7):</strong>
              <p className="text-gray-700 mt-1">
                Class 4 industrial laser cutters must enclose the beam path and work area within protective housing 
                that prevents direct or reflected beam exposure outside the enclosure. Enclosure converts Class 4 laser 
                into Class 1 enclosed system during normal operation—no beam access, minimal hazard. Door opening triggers 
                interlock, immediately disabling laser.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Enclosure Material Specifications:</strong>
              <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                <li>• <strong>Non-reflective surfaces:</strong> Matte black or anodized finishes prevent specular reflections that could defeat protective intent</li>
                <li>• <strong>Fire-resistant materials:</strong> Sheet metal (16-20 gauge steel/aluminum), fire-rated composites, no combustible plastics near beam path</li>
                <li>• <strong>Structural integrity:</strong> Rigid construction withstands impact, vibration, prevents panel gaps that leak scattered radiation</li>
                <li>• <strong>Optical density adequate for wavelength:</strong> Solid metal provides OD 20+ at all wavelengths; transparent panels require filtered glass</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Viewing Window Requirements:</strong>
              <p className="text-gray-700 mt-1">
                Observation windows use filter glass with OD 5+ at laser wavelength (1064nm fiber / 10600nm CO₂), visible 
                light transmission 10-30% for clear viewing. Windows labeled with wavelength and OD rating, securely mounted 
                in frames preventing bypass. Polycarbonate overlays protect filter glass from spatter/impact. Window size 
                minimized—larger windows = greater scattered radiation leakage risk.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Access Point Specifications:</strong>
              <p className="text-gray-700 mt-1">
                Minimize number of access points (doors, material loading ports) to reduce interlock complexity and failure 
                points. Each access point interlocked per Section 6.2. Material loading/unloading designed with baffles or 
                tortuous path preventing direct beam line-of-sight to exterior. Manual overrides prohibited—interlocks must 
                be fail-safe (power loss = laser disabled).
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6.2 Safety Interlock Systems</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">Door Interlock Specification (Type 1, Category 3 per ISO 13849-1):</strong>
              <p className="text-gray-700 mt-1">
                Safety-rated interlock switches on all access doors/panels detect open condition and disable laser beam 
                immediately. Category 3 = redundant sensors with diagnostic monitoring—single fault does not cause loss 
                of safety function. Interlock circuit directly controls laser enable signal and beam shutter, independent 
                of CNC control software (software cannot bypass). Defeating interlocks is federal violation (FDA 21 CFR 1040.10) 
                and OSHA serious violation ($7,000-14,000 citation).
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Key Switch Control:</strong>
              <p className="text-gray-700 mt-1">
                Master key switch enables/disables laser system, preventing unauthorized operation. Key removable only in 
                OFF position. Limited key distribution (supervisor + authorized operators only), key control log tracks 
                issuance. Key switch directly wired into laser enable circuit—software cannot override. Lost key protocol: 
                rekey switch immediately, update key control log.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Beam Shutter: Mechanical Blockage, Fail-Safe Design</strong>
              <p className="text-gray-700 mt-1">
                Electromechanical shutter physically blocks laser beam path when closed, providing redundant protection 
                beyond electronic laser disable. Fail-safe design: spring-loaded to closed position, requires continuous 
                power to hold open—power loss automatically closes shutter. Response time &lt;0.1 seconds from trigger to 
                full closed. Shutter construction: heat-resistant metal (copper, aluminum) with water cooling for high-power 
                lasers (6kW+). Position sensors (open/closed) with indicator lights, status monitored by safety PLC.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Light Curtain Integration (Open-Frame Systems, Safety Category 4):</strong>
              <p className="text-gray-700 mt-1">
                Open-frame or gantry-style systems without full enclosure use active optoelectronic protective devices 
                (AOPDs / light curtains) to detect operator presence in hazard zone. Safety Category 4 = redundant sensors, 
                diagnostic monitoring, fault tolerance—single fault + single undetected fault does not cause loss of safety. 
                Beam spacing 14-30mm, response time &lt;20ms, coverage height adjusted for application. Intrusion immediately 
                triggers emergency stop. Annual validation testing required per OSHA 1910.212.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6.3 Fume Extraction Requirements</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">CFM Calculation Formula:</strong>
              <p className="text-gray-700 mt-1">
                Required extraction airflow = Work area volume (m³) × 60 air changes per hour ÷ 60 minutes = CFM minimum. 
                Example: 2m × 1.5m × 0.8m enclosure = 2.4 m³ × 60 / 60 = 2.4 m³/min = 85 CFM minimum. Industrial practice: 
                multiply by 1.5-2.0 safety factor for high fume generation (thick materials, high speeds). Typical range: 
                350-1,500 CFM per machine depending on work area size and application.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Filter Specifications (Three-Stage System):</strong>
              <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                <li>• <strong>Pre-filter (G4 / MERV 8):</strong> Captures large particulates (&gt;10 μm), extends HEPA life, washable/reusable, replace every 3-6 months</li>
                <li>• <strong>HEPA filter (H13 / 99.95% at 0.3 μm):</strong> Captures metal oxide fumes, fine particulates down to submicron, replace annually or at 80% capacity</li>
                <li>• <strong>Activated carbon filter (gas/odor removal):</strong> Adsorbs organic vapors, acid gases from plastics/coatings, replace every 6-12 months based on usage</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Ductwork Design & Safety:</strong>
              <p className="text-gray-700 mt-1">
                System operates under negative pressure (enclosure at -0.5 to -2.0 inches water column) preventing fume 
                escape. Ductwork: rigid metal (galvanized steel, stainless for corrosive fumes), smooth interior minimizes 
                turbulence, 10-20 cm (4-8 inch) diameter typical. Explosion-proof fans required for combustible dust 
                atmospheres (aluminum, magnesium cutting). Discharge outdoors away from building intakes, at roof height 
                preventing re-entrainment.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Monitoring & Alarms:</strong>
              <p className="text-gray-700 mt-1">
                Magnehelic pressure differential gauge measures extraction vacuum continuously. Set alarm threshold at 75% 
                of normal operating pressure (e.g., normal -1.5" WC, alarm at -1.1" WC). Audio/visual alarm alerts operator 
                to insufficient extraction (clogged filter, fan failure, duct blockage). Interlock extraction monitoring 
                with laser enable—laser cannot operate if extraction inadequate. Airflow switches ($50-150) provide objective 
                go/no-go indication vs. subjective operator judgment.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6.4 Fire Protection Systems</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">Automatic Fire Suppression (Enclosed Systems):</strong>
              <p className="text-gray-700 mt-1">
                High-value or high-risk installations use automatic fire suppression systems inside laser enclosure. Clean 
                agent systems (FM-200, Novec 1230) suppress fires without water damage to electronics/optics. Activation: 
                heat/smoke detectors trigger agent discharge, simultaneously shutting down laser and assist gas. System cost 
                $5,000-15,000 vs. potential $100,000-500,000 fire damage. NFPA 2001 compliant design, annual inspection required.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Fire Detection & Automatic Shutdown:</strong>
              <p className="text-gray-700 mt-1">
                Smoke detectors (photoelectric or ionization) and heat detectors (rate-of-rise or fixed temperature 70-80°C) 
                mounted inside enclosure near work area. Detection triggers: (1) Immediate laser shutdown via safety PLC, 
                (2) Beam shutter close, (3) Assist gas cutoff (oxygen accelerates fires), (4) Audible/visual alarm, 
                (5) Optional: automatic fire suppression system activation. Interconnected with facility fire alarm system 
                per NFPA 72.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Portable Fire Extinguisher Placement:</strong>
              <p className="text-gray-700 mt-1">
                Class ABC (dry chemical) or Class BC (CO₂) fire extinguisher within 3 meters (10 feet) of laser equipment, 
                minimum 5 lb capacity (2.5 kg). CO₂ preferred for electrical/electronics fires—leaves no residue damaging 
                optics. Mount at 1.2-1.5 meter height (4-5 feet), clearly marked, unobstructed access. Annual inspection 
                by certified technician, monthly visual checks by operator. Training: all operators demonstrate extinguisher 
                use during initial training + annual refresher.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Combustible Material Clearance:</strong>
              <p className="text-gray-700 mt-1">
                Maintain 1-meter (3-foot) minimum clearance around laser equipment, free of combustible materials (paper, 
                cardboard, wood, plastics, flammable liquids, aerosols). Raw material storage: non-combustible racks, 
                segregated from cutting area. Scrap/waste removal: metal bins with lids, empty daily (accumulated metal 
                dust = fire/explosion hazard). Housekeeping standard: daily cleaning of spatter/dust prevents accumulation 
                reaching ignition threshold.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6.5 Emergency Stop Systems</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">E-Stop Button Placement & Specification:</strong>
              <p className="text-gray-700 mt-1">
                Minimum 2 emergency stop buttons per machine, maximum 2-meter reach from any operator position. E-stop 
                design: red mushroom head (40mm diameter minimum), yellow background, push-pull or twist-to-reset mechanism. 
                Labeled "EMERGENCY STOP" in English + pictogram. Category 0 stop per IEC 60204-1: immediate removal of 
                power to actuators causing hazardous motion—uncontrolled stop prioritizing speed over damage prevention.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">E-Stop Function & Response:</strong>
              <p className="text-gray-700 mt-1">
                Pressing E-stop triggers instantaneous actions: (1) Laser beam disable via interlock circuit + software 
                command (redundant), (2) Beam shutter mechanical closure, (3) Motion axes emergency brake (deceleration 
                2-5G), (4) Assist gas flow cutoff, (5) Audible alarm activation, (6) Visual indicator (flashing red light). 
                Response time: &lt;100 milliseconds from button press to laser disabled. E-stop circuit hardwired through 
                safety relay module, independent of main PLC—software crash cannot prevent E-stop function.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Reset Procedure & Documentation:</strong>
              <p className="text-gray-700 mt-1">
                E-stop reset requires deliberate action: operator rotates/pulls button to release, inspects equipment for 
                damage, identifies and resolves cause of E-stop activation. Supervisor or LSO approval may be required for 
                reset after incident-related E-stop. Document E-stop events in operator logbook: date/time, reason for 
                activation, inspection findings, corrective action, operator signature. Frequent E-stops may indicate 
                operator training deficiency, procedural issues, or equipment malfunction requiring investigation.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="overflow-x-auto mb-8 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Engineering Control Implementation Costs & ROI</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Control Type</th>
                <th className="text-left p-3 font-semibold">Implementation Cost</th>
                <th className="text-left p-3 font-semibold">Annual Maintenance</th>
                <th className="text-left p-3 font-semibold">Prevented Incident Cost Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3">Full Protective Enclosure</td>
                <td className="p-3">$8,000-25,000 (included in machine)</td>
                <td className="p-3">$500-1,000</td>
                <td className="p-3">Eye injury prevention: $25,000-150,000 per incident</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3">Safety Interlock System (Cat 3)</td>
                <td className="p-3">$2,000-5,000</td>
                <td className="p-3">$200-500</td>
                <td className="p-3">Unauthorized access prevention: $50,000-500,000 liability</td>
              </tr>
              <tr>
                <td className="p-3">Fume Extraction System</td>
                <td className="p-3">$5,000-20,000</td>
                <td className="p-3">$1,500-3,000 (filters)</td>
                <td className="p-3">Respiratory illness prevention: $100,000+ medical + OSHA fines</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3">Automatic Fire Suppression</td>
                <td className="p-3">$5,000-15,000</td>
                <td className="p-3">$500-1,000</td>
                <td className="p-3">Fire damage prevention: $100,000-500,000 equipment + facility</td>
              </tr>
              <tr>
                <td className="p-3">Emergency Stop System</td>
                <td className="p-3">$500-2,000</td>
                <td className="p-3">$100-200</td>
                <td className="p-3">Collision/crush injury prevention: $25,000-200,000 per incident</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 font-semibold">Total Engineering Controls</td>
                <td className="p-3 font-semibold">$20,500-67,000</td>
                <td className="p-3 font-semibold">$2,800-5,700</td>
                <td className="p-3 font-semibold">Single prevented serious incident = 1-10 year ROI</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-green-900 text-sm">
            <strong>💡 Engineering Controls ROI:</strong> While engineering controls represent significant upfront investment, 
            they provide continuous, passive protection requiring no operator action or compliance. A single prevented serious 
            incident (eye injury, fire, respiratory illness) typically exceeds total engineering control costs. Insurance 
            carriers offer premium reductions of 10-30% for facilities with comprehensive engineering controls. OSHA 
            prioritizes engineering controls over PPE/administrative measures—citations less likely with robust engineering 
            protection demonstrating employer commitment to safety.
          </p>
        </div>
      </section>

      {/* Section 7: Laser Safety Officer (LSO) Program */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">7. Laser Safety Officer (LSO) Program</h2>
        
        <p className="text-gray-700 mb-6">
          ANSI Z136.1 Section 3.2 mandates appointment of a Laser Safety Officer for all facilities operating Class 3B 
          or Class 4 lasers. The LSO serves as subject matter expert responsible for laser safety program development, 
          implementation, and enforcement. This is not merely an administrative title—LSO holds authority and accountability 
          for all laser safety activities. Facilities without designated LSO face OSHA citations and liability exposure if 
          laser incidents occur.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7.1 LSO Qualification Requirements</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">Educational Background & Experience:</strong>
              <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                <li>• Bachelor's degree in engineering, physics, industrial hygiene, or related technical field, OR</li>
                <li>• 5+ years direct laser industry experience with demonstrated safety knowledge, OR</li>
                <li>• Equivalent combination of education and experience as approved by management</li>
              </ul>
              <p className="text-gray-700 mt-2">
                LSO must understand laser physics, beam characteristics, biological effects, hazard evaluation, and control 
                measures at technical level enabling independent decision-making.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Certification & Training:</strong>
              <ul className="text-gray-700 ml-4 mt-1 space-y-1">
                <li>• <strong>Laser Institute of America (LIA) Certified Laser Safety Officer:</strong> Industry-recognized 
                certification requiring 24+ hour comprehensive course + exam. Covers ANSI Z136 series standards, hazard 
                calculations, control selection, medical surveillance, regulatory compliance. Cost: $1,500-2,500, 3-year 
                recertification cycle.</li>
                <li>• <strong>Alternative certifications:</strong> Board of Laser Safety (BLS) Certified Laser Safety Officer, 
                International Laser Safety Conference (ILSC) completion, university-based laser safety programs (Rochester, 
                Stanford, etc.).</li>
                <li>• <strong>Continuing education:</strong> 8+ hours annually through conferences (ILSC), webinars, technical 
                publications. Stay current with standard updates (ANSI Z136 revised every 5 years), new technology, incident 
                case studies.</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Authority & Organizational Position:</strong>
              <p className="text-gray-700 mt-1">
                LSO must have direct shutdown authority for unsafe laser operations—no management approval required to stop 
                work presenting imminent danger. Reports to senior management independently from production/operations, 
                preventing conflicts of interest where production pressure overrides safety. Access to all laser areas without 
                restriction. Authority to deny laser operation authorization to unqualified personnel. Budget authority for 
                safety equipment, training, and consulting services.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7.2 LSO Core Responsibilities</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-3">
            <div>
              <strong className="text-gray-900">1. Hazard Classification & Control Selection:</strong>
              <p className="text-gray-700 mt-1">
                Evaluate all laser systems upon installation, modification, or procedural changes. Classify lasers per 
                IEC 60825-1 / ANSI Z136.1 (Class 1-4). Calculate Nominal Hazard Zone (NHZ) for open beam applications using 
                beam divergence, power, and Maximum Permissible Exposure (MPE) formulas. Select and specify engineering 
                controls (enclosures, interlocks, extraction), administrative controls (SOPs, access restrictions), and PPE 
                appropriate for hazard level. Document hazard evaluation with calculations, rationale for control selection, 
                and residual risk assessment.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">2. Standard Operating Procedure (SOP) Development, Review, Approval:</strong>
              <p className="text-gray-700 mt-1">
                Create laser-specific SOPs per ANSI Z136.1 Section 4.3 for each laser system or class of similar systems. 
                SOP content: equipment description, hazards, safety controls, authorized users, operating procedures (startup, 
                operation, shutdown), emergency response, maintenance requirements, training prerequisites. Review SOPs annually 
                or when equipment/procedures change. Approve all SOP revisions—no procedural changes without LSO review. 
                Maintain version control and operator acknowledgment signatures.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">3. Training Program Design, Delivery, Competency Assessment:</strong>
              <p className="text-gray-700 mt-1">
                Design comprehensive training curriculum covering laser hazards, safety controls, PPE, SOPs, emergency response, 
                regulatory compliance. Deliver or oversee initial training (8-16 hours) and annual refresher (4 hours minimum). 
                Develop competency assessments: written exams (50+ questions, 80% pass rate), practical demonstrations, emergency 
                scenario simulations. Maintain training records per OSHA requirements (3+ years). De-authorize operators failing 
                competency assessments or demonstrating unsafe practices.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">4. PPE Specification & Procurement Approval:</strong>
              <p className="text-gray-700 mt-1">
                Specify personal protective equipment based on hazard evaluation: laser safety eyewear (wavelength, OD rating, 
                VLT), respiratory protection (filter type, fit testing requirements), protective clothing (FR rating). Approve 
                all PPE purchases—verify compliance with ANSI Z87.1 (eyewear), ANSI Z136.1, NIOSH approvals (respirators). 
                Maintain PPE inventory and replacement schedule. Conduct respirator fit testing per OSHA 1910.134 or designate 
                qualified fit tester.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">5. Incident Investigation, Root Cause Analysis, Corrective Action Implementation:</strong>
              <p className="text-gray-700 mt-1">
                Investigate all laser safety incidents (injuries, near-misses, equipment failures, procedural violations) within 
                24 hours. Conduct root cause analysis using systematic methods (5-Whys, Fishbone diagram, Fault Tree Analysis). 
                Identify immediate causes (unsafe act/condition) and systemic root causes (training deficiency, procedural gap, 
                equipment design flaw). Develop and implement corrective actions: engineering improvements, procedural revisions, 
                retraining, disciplinary measures. Verify effectiveness of corrective actions through follow-up audits. Report 
                findings to management with recommendations.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">6. Regulatory Compliance Audits (OSHA, ANSI, FDA, State):</strong>
              <p className="text-gray-700 mt-1">
                Conduct annual comprehensive safety audits evaluating compliance with OSHA 1910 (machinery, respiratory, 
                lockout/tagout, hazard communication), ANSI Z136.1 (hazard controls, training, signage, medical surveillance), 
                FDA 21 CFR 1040.10 (equipment labeling, interlocks), and applicable state regulations. Audit checklist: 50-100 
                items covering equipment condition, documentation completeness, training currency, PPE availability, signage, 
                emergency equipment. Document findings with photographic evidence. Assign corrective actions with deadlines and 
                responsible parties. Track closure of audit findings. Prepare summary report for senior management.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">7. Safety Signage & Labeling Program Management:</strong>
              <p className="text-gray-700 mt-1">
                Design and specify all laser safety signage per ANSI Z136.1 Section 8 and FDA requirements: laser warning signs 
                at controlled area entrances (Class designation, wavelength, max power), equipment labels (certification, 
                operation warnings), PPE requirement signs, emergency contact information. Maintain sign inventory and replacement 
                schedule. Conduct quarterly inspections verifying signs are visible, legible, and accurately reflect current 
                equipment/procedures. Update signage when equipment modified or procedures change.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">8. Contractor/Vendor Safety Oversight:</strong>
              <p className="text-gray-700 mt-1">
                Review and approve contractor work involving laser systems (installation, service, modification). Provide 
                pre-work safety briefings covering facility-specific hazards, procedures, emergency response. Verify contractor 
                personnel qualifications and training. Monitor contractor work activities for compliance with safety requirements. 
                Investigate any contractor-involved incidents. Approve laser equipment purchases—review manufacturer safety 
                features, documentation, and regulatory compliance before purchase authorization.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">9. Annual Facility Safety Audit & Management Report:</strong>
              <p className="text-gray-700 mt-1">
                Prepare comprehensive annual report summarizing laser safety program status: incident statistics, training 
                completion rates, audit findings and closure status, equipment inventory changes, regulatory updates, program 
                costs, recommendations for improvement. Present report to senior management with budget requests for safety 
                improvements. Report demonstrates due diligence and provides documentation for insurance, regulatory inspections, 
                and legal defense if incidents occur.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7.3 LSO Documentation Requirements</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-3">
            <div>
              <strong className="text-gray-900">Laser Inventory Database:</strong>
              <p className="text-gray-700 mt-1">
                Maintain comprehensive database of all laser systems: manufacturer, model, serial number, classification 
                (IEC/ANSI), wavelength, maximum power, installation date, location, responsible operator/supervisor, last 
                inspection date, next service due date, incident history. Update immediately when equipment added, removed, 
                moved, or modified. Spreadsheet minimum acceptable; specialized software (LaserBase, SafetyDB) preferred for 
                large facilities (10+ lasers).
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Training Records:</strong>
              <p className="text-gray-700 mt-1">
                Document all laser safety training activities: trainee name/ID, training date/duration, course content/modules, 
                trainer name/qualifications, assessment results (written exam score, practical pass/fail), certification expiration 
                date. Maintain records 3+ years per OSHA 1910.1020, lifetime recommended for legal protection. Digital training 
                management systems provide automated tracking, expiration alerts, and audit-ready reports.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Incident Log & Investigation Reports:</strong>
              <p className="text-gray-700 mt-1">
                Log all laser safety incidents and near-misses: date/time, location, personnel involved, incident description, 
                injuries sustained, immediate response, notification made. Complete investigation reports include root cause 
                analysis, corrective actions, responsible parties, completion deadlines, verification of effectiveness. Maintain 
                30 years per OSHA 300 Log requirements for recordable injuries. Near-miss investigations provide opportunity to 
                prevent future incidents—investigate all near-misses as if actual injury occurred.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Inspection & Audit Records:</strong>
              <p className="text-gray-700 mt-1">
                Document daily operator inspections, weekly/monthly/annual maintenance, quarterly signage inspections, annual 
                comprehensive safety audits. Include inspection date, inspector name, checklist items completed, findings/deficiencies, 
                corrective actions taken, follow-up verification. Retain 5+ years demonstrating continuous compliance and due 
                diligence. Gap in inspection records = presumption of non-compliance in legal/regulatory proceedings.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">SOP Version Control:</strong>
              <p className="text-gray-700 mt-1">
                Maintain current and superseded versions of all Standard Operating Procedures. Track revision history: version 
                number/date, changes made, LSO approval signature, operator acknowledgment signatures (all affected operators 
                sign off on revised procedures). Retain superseded versions 3+ years demonstrating procedural evolution and 
                compliance at time of historical incidents.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">PPE Tracking:</strong>
              <p className="text-gray-700 mt-1">
                Track PPE inventory and issuance: item type/specification, purchase date, issue date, assigned operator, 
                inspection/replacement due dates, damage reports. Laser safety eyewear: track OD rating, wavelength protection, 
                operator assignment (personalized fit). Respirators: track fit test dates (annual requirement), medical clearance 
                status, cartridge replacement dates. Replace damaged PPE immediately—maintain spare inventory preventing delays.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7.4 LSO Time Allocation by Facility Size</h3>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Facility Size</th>
                <th className="text-left p-3 font-semibold">Equipment Count</th>
                <th className="text-left p-3 font-semibold">Operator Count</th>
                <th className="text-left p-3 font-semibold">LSO Time Allocation</th>
                <th className="text-left p-3 font-semibold">Typical Arrangement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-medium">Small Facility</td>
                <td className="p-3">1-3 lasers</td>
                <td className="p-3">&lt;10 operators</td>
                <td className="p-3">0.25 FTE (10 hrs/week)</td>
                <td className="p-3">Part-time assignment: maintenance supervisor, senior engineer, or safety coordinator with LSO certification</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Medium Facility</td>
                <td className="p-3">4-10 lasers</td>
                <td className="p-3">10-50 operators</td>
                <td className="p-3">0.5-1.0 FTE (20-40 hrs/week)</td>
                <td className="p-3">Part-time to full-time: EHS specialist or engineering manager with significant LSO time allocation</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Large Facility</td>
                <td className="p-3">10-30 lasers</td>
                <td className="p-3">50-200 operators</td>
                <td className="p-3">1.0+ FTE (40+ hrs/week)</td>
                <td className="p-3">Full-time dedicated LSO position reporting to EHS director or facility manager</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">Enterprise Multi-Site</td>
                <td className="p-3">30+ lasers</td>
                <td className="p-3">200+ operators</td>
                <td className="p-3">2.0+ FTE (multiple LSOs)</td>
                <td className="p-3">Corporate LSO manager + site LSOs at each major facility, centralized program oversight</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-900 text-sm">
            <strong>💰 LSO Program Costs & ROI:</strong> LSO program costs include salary allocation ($30,000-120,000/year 
            depending on FTE and seniority), certification ($1,500-2,500 initial, $500-1,000 recertification), continuing 
            education ($2,000-5,000/year), and administrative time ($5,000-20,000/year documentation systems, audits). 
            Total annual cost: $40,000-150,000 for comprehensive program. Single prevented serious incident typically costs 
            $150,000-500,000 (medical, lost time, OSHA fines, legal, reputation damage), providing 1-5 year ROI. More importantly, 
            LSO program demonstrates organizational commitment to safety, reducing OSHA citation severity (repeated/willful vs. 
            serious), and providing strong legal defense ("we took all reasonable precautions including designating qualified 
            safety professional"). Facilities without designated LSO face higher liability exposure in incident litigation—LSO 
            is industry standard of care per ANSI Z136.1.
          </p>
        </div>
      </section>

      {/* Section 8: Preventive Maintenance Schedule */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">8. Preventive Maintenance Schedule & Procedures</h2>
        
        <p className="text-gray-700 mb-6">
          Systematic preventive maintenance prevents equipment failures that cause safety incidents, production downtime, 
          and costly repairs. Well-maintained equipment operates within specifications, safety systems function reliably, 
          and operators have confidence in machine safety. Deferred maintenance leads to predictable failure patterns: 
          contaminated optics cause fires, worn guides cause collisions, clogged filters expose operators to fumes. 
          Investment in preventive maintenance returns 3-5× cost avoidance through prevented downtime and failures.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Daily Maintenance (10 minutes, operator level)</h3>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Clean protective lens:</strong> Inspect for contamination, clean with optical wipes + isopropyl alcohol, replace if scratched/pitted</li>
              <li>• <strong>Check nozzle condition:</strong> Inspect for damage/spatter buildup, verify centering, replace if deformed (typical life: 40-80 hours)</li>
              <li>• <strong>Empty slag drawer:</strong> Prevent overflow fire risk, inspect for excessive dross indicating parameter issues</li>
              <li>• <strong>Verify chiller water level:</strong> Top up with deionized water if low, investigate leaks if frequent refilling required</li>
              <li>• <strong>Clean viewing window:</strong> Remove dust/residue for clear visibility, check filter glass for cracks</li>
              <li>• <strong>Document readings:</strong> Log water temperature, gas pressure, operational hours, any abnormalities in logbook</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Weekly Maintenance (30-60 minutes, technician level)</h3>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Fiber optic connections:</strong> Check for loose connectors, inspect fiber for damage, verify power output stability</li>
              <li>• <strong>Focusing lens cleaning:</strong> Remove lens assembly, clean both surfaces with approved solvents, inspect for pitting/coating damage</li>
              <li>• <strong>Linear guide lubrication:</strong> Apply specified grease to rails/bearings, remove excess, verify smooth motion</li>
              <li>• <strong>Belt tension check:</strong> Verify proper tension on X/Y axis belts (deflection 5-10mm under light pressure), adjust if slipping</li>
              <li>• <strong>Fume extraction pre-filters:</strong> Vacuum or replace foam pre-filters, check system airflow</li>
              <li>• <strong>Laser alignment verification:</strong> Run test pattern, measure cut quality indicators (kerf width, dross, squareness)</li>
              <li>• <strong>Backup CNC programs:</strong> Copy to external storage, verify file integrity and recovery procedures</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Monthly Maintenance (2-4 hours, certified technician)</h3>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Insulation resistance test:</strong> Megger test on laser power supply, &gt;100 MΩ required for safe operation</li>
              <li>• <strong>Ground resistance verification:</strong> Measure equipment ground to facility ground, &lt;1Ω required per NEC</li>
              <li>• <strong>Interlock function testing:</strong> Test all door/panel interlocks, verify laser disables within 0.5 seconds</li>
              <li>• <strong>E-stop circuit test:</strong> Test all emergency stop buttons, verify proper response and reset function</li>
              <li>• <strong>Replace fume extraction filters:</strong> Replace activated carbon filters per manufacturer schedule (6-12 months typical)</li>
              <li>• <strong>Calibrate laser power:</strong> Use certified power meter, calibrate output to ±3% of setpoint across power range</li>
              <li>• <strong>Clean chiller heat exchanger:</strong> Flush cooling system, check refrigerant levels, clean condenser coils</li>
              <li>• <strong>Update firmware/software:</strong> Apply manufacturer patches addressing bugs and safety issues, document version changes</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Annual Maintenance (1-2 days, manufacturer service)</h3>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Laser source major service:</strong> Replace consumables per manufacturer specifications (fiber module, CO₂ tube electrodes, mirrors)</li>
              <li>• <strong>Complete recalibration:</strong> Axes positioning, laser power output, focus position, assist gas flow rates</li>
              <li>• <strong>Structural inspection:</strong> Check frame for stress cracks, verify alignment hasn't drifted, tighten all fasteners</li>
              <li>• <strong>Electrical safety certification:</strong> Third-party inspection verifying grounding, GFCI operation, circuit protection</li>
              <li>• <strong>Chiller major service:</strong> Replace coolant, inspect compressor, leak test refrigerant system</li>
              <li>• <strong>Update safety documentation:</strong> Review SOPs for accuracy, update training materials, revise emergency procedures</li>
              <li>• <strong>Performance qualification:</strong> Run test parts measuring speed, accuracy, edge quality, verify meets original specifications</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="text-blue-900 text-sm">
            <strong>📊 Maintenance Cost vs. Reactive Repair:</strong> Annual preventive maintenance (6kW fiber laser): ~$27,000 
            (labor + consumables + service contract). Reactive maintenance approach: ~$8,000 annually but averages 1-2 major 
            failures over 5 years costing $30,000-100,000 each (emergency service, expedited parts, production loss). Preventive 
            approach: $135,000 over 5 years with minimal unplanned downtime. Reactive approach: $240,000-450,000 over 5 years 
            including failures. Document all maintenance activities—complete records demonstrate due diligence reducing liability.
          </p>
        </div>
      </section>

      {/* Section 9: Administrative Controls & Compliance Summary */}
      <section className="mb-12 pb-12 border-b-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">9. Regulatory Compliance & Standards Summary</h2>
        
        <p className="text-gray-700 mb-6">
          Laser safety operations must comply with multiple overlapping regulatory frameworks: federal OSHA regulations, 
          FDA product standards, ANSI voluntary consensus standards (legally enforceable through OSHA General Duty Clause), 
          state/local requirements, and insurance carrier mandates. Non-compliance results in citations, fines, increased 
          liability, and potential criminal prosecution for willful violations causing death/serious injury.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Regulation/Standard</th>
                <th className="text-left p-3 font-semibold">Authority</th>
                <th className="text-left p-3 font-semibold">Key Requirements</th>
                <th className="text-left p-3 font-semibold">Penalties for Non-Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-medium">ANSI Z136.1-2022</td>
                <td className="p-3">Laser Institute of America</td>
                <td className="p-3">Hazard classification, control measures, MPE calculations, LSO designation, training, medical surveillance, signage</td>
                <td className="p-3">Enforceable via OSHA General Duty Clause: $7,000-14,000 per serious violation, $140,000 willful/repeated</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">OSHA 1910 Subpart Q</td>
                <td className="p-3">US Dept of Labor</td>
                <td className="p-3">Machine guarding, point of operation protection, safety interlocks</td>
                <td className="p-3">$7,000-14,000 serious, $140,000 willful, criminal prosecution if death</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">OSHA 1910.134</td>
                <td className="p-3">US Dept of Labor</td>
                <td className="p-3">Respiratory protection: medical evaluation, fit testing, training</td>
                <td className="p-3">$14,000 per violation (each untested operator = separate violation)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">OSHA 1910.147</td>
                <td className="p-3">US Dept of Labor</td>
                <td className="p-3">Lockout/tagout energy isolation procedures, authorized employee training</td>
                <td className="p-3">$14,000 per violation, frequently cited during inspections</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">21 CFR 1040.10</td>
                <td className="p-3">US FDA</td>
                <td className="p-3">Laser product labeling, safety interlocks, emission indicators, certification</td>
                <td className="p-3">Product recall, sales prohibition, manufacturer penalties (operator violations rare)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">IEC 60825-1:2014</td>
                <td className="p-3">International Electrotechnical Commission</td>
                <td className="p-3">International laser safety standard (Europe, Asia): classification, labeling, key control</td>
                <td className="p-3">Required for CE marking (EU market access), varies by country</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">NFPA 70 (NEC)</td>
                <td className="p-3">National Fire Protection Assoc</td>
                <td className="p-3">Electrical installation: wiring methods, grounding, overcurrent protection</td>
                <td className="p-3">Local enforcement via electrical inspectors, insurance requirements</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-medium">ISO 11553-1:2020</td>
                <td className="p-3">International Standards Org</td>
                <td className="p-3">Laser processing machine safety: protective housing, control systems, warnings</td>
                <td className="p-3">Voluntary in US, required in EU/Asia markets</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Compliance Verification & Audit Readiness</h3>
        
        <Card className="mb-6">
          <CardContent className="pt-6 text-sm space-y-4">
            <div>
              <strong className="text-gray-900">Annual Self-Audit Checklist (50-Point Minimum):</strong>
              <ul className="text-gray-700 ml-4 mt-2 space-y-1">
                <li>• Equipment labeling complete & accurate (Class, wavelength, power, FDA certification)</li>
                <li>• SOPs current, accessible at workstations, operator acknowledgments signed</li>
                <li>• Training records complete: initial + annual refresher, competency assessments, certifications current</li>
                <li>• PPE available, proper specifications, good condition, replacement schedules maintained</li>
                <li>• Engineering controls functional: interlocks, e-stops, extraction, fire suppression tested</li>
                <li>• Maintenance records complete: daily/weekly/monthly/annual documentation, corrective actions closed</li>
                <li>• Incident reports filed, investigations complete, corrective actions implemented and verified</li>
                <li>• Authorized user list current, de-authorization of expired certifications</li>
                <li>• Emergency equipment functional: fire extinguishers inspected, eye wash tested, first aid stocked</li>
                <li>• Safety zone markings visible, signage accurate, emergency contact information posted</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">OSHA Inspection Preparation:</strong>
              <p className="text-gray-700 mt-1">
                OSHA inspections triggered by employee complaint, injury/fatality, or programmed inspection. Upon inspector 
                arrival: designate management spokesperson (HR director, safety manager, LSO), request inspection warrant if 
                desired (constitutional right, delays entry 1-4 hours), accompany inspector throughout facility taking parallel 
                photos/notes. Provide requested documents promptly: training records, maintenance logs, SOPs, injury records. 
                Do not volunteer information beyond questions asked. If violations identified: respond to citations within 
                15 working days (contest or abate), negotiate settlement before informal conference deadline. Legal representation 
                recommended for serious/willful citations or contested cases.
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Insurance & Liability Considerations:</strong>
              <p className="text-gray-700 mt-1">
                Comprehensive safety program reduces insurance premiums 10-30% (general liability, workers' compensation). 
                Insurers audit safety programs annually—incomplete documentation may void coverage for incidents. If incident 
                occurs: notify insurer immediately (24-48 hours), preserve evidence, document thoroughly, do not admit fault. 
                Safety program documentation provides strong legal defense: "we implemented industry standard controls per ANSI Z136.1, 
                designated qualified LSO, provided comprehensive training—incident resulted from unforeseeable equipment failure/operator 
                error despite reasonable precautions." Absence of safety program = presumption of negligence in litigation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Summary Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion: Comprehensive Safety Culture</h2>
        
        <p className="text-gray-700 mb-6">
          Laser cutting safety is not a checklist to complete—it's a continuous commitment requiring organizational culture 
          where safety is genuinely valued over production convenience. Effective safety programs combine multiple protective 
          layers: engineering controls (primary protection), administrative controls (procedures and training), and PPE 
          (last resort backup). No single measure provides complete protection; layered defenses ensure that when one fails, 
          others prevent injury.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="bg-green-50 border-green-300">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Leadership Commitment Indicators</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <div>• Safety budget allocation without production justification required</div>
              <div>• LSO has direct shutdown authority without management approval</div>
              <div>• Safety performance metrics equal weight to production metrics</div>
              <div>• Incident investigations focus on systemic causes, not blaming operators</div>
              <div>• Training time considered productive work, not overhead cost</div>
              <div>• Near-miss reporting encouraged and rewarded, not punished</div>
              <div>• Equipment purchases evaluated for safety features, not just price</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Operator Engagement Indicators</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <div>• Operators complete daily inspections thoroughly, not rushed</div>
              <div>• PPE worn consistently, not removed for comfort/convenience</div>
              <div>• Near-misses reported voluntarily without prompting</div>
              <div>• Operators stop work when safety concerns arise</div>
              <div>• Safety suggestions offered proactively during reviews</div>
              <div>• New operators mentored by experienced personnel on safety culture</div>
              <div>• Pride in safety performance, not just production numbers</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 border-l-4 border-gray-400 p-6">
          <p className="text-gray-900 mb-4">
            <strong>⚖️ Final Perspective: Safety Investment vs. Incident Cost</strong>
          </p>
          <p className="text-gray-700 mb-3">
            Comprehensive laser safety program (small facility, 1-3 lasers, 10 operators):
          </p>
          <ul className="text-gray-700 space-y-1 mb-4">
            <li>• Engineering controls: $20,000-65,000 initial (amortized 10 years = $2,000-6,500/year)</li>
            <li>• LSO program: $10,000-40,000/year (0.25 FTE + certification + admin)</li>
            <li>• Training program: $5,000-12,000/year (initial + annual refresher + competency assessments)</li>
            <li>• Preventive maintenance: $15,000-30,000/year (daily/weekly/monthly/annual schedules)</li>
            <li>• PPE & consumables: $3,000-7,000/year (eyewear, respirators, gloves, replacement)</li>
            <li>• Documentation systems: $2,000-5,000/year (software, records management)</li>
            <li>• <strong>Total Annual Cost: $37,000-100,000 for comprehensive program</strong></li>
          </ul>
          <p className="text-gray-700 mb-3">
            Single serious incident cost (eye injury, fire, respiratory illness):
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>• Medical treatment: $25,000-150,000 (emergency care, surgery, rehabilitation)</li>
            <li>• Lost time wages: $10,000-50,000 (injured employee + investigation time)</li>
            <li>• Equipment/facility damage: $10,000-500,000 (fire, contamination, repairs)</li>
            <li>• OSHA citations: $7,000-140,000 (serious to willful violations)</li>
            <li>• Legal defense/settlement: $100,000-2,000,000 (lawsuit, attorney fees, settlement)</li>
            <li>• Reputation damage: Immeasurable (customer loss, recruitment difficulty)</li>
            <li>• <strong>Total Incident Cost: $152,000-2,840,000 per serious incident</strong></li>
          </ul>
          <p className="text-gray-700 mt-4 font-semibold">
            Conclusion: Comprehensive safety program pays for itself preventing single serious incident. Over 10-year horizon, 
            facilities with robust safety programs experience 85-95% fewer incidents than facilities with minimal safety efforts. 
            Safety is not an expense—it's an investment with measurable, quantifiable returns protecting people, assets, and 
            organizational reputation.
          </p>
        </div>
      </section>
    </div>
  );
}

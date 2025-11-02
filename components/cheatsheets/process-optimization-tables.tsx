'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  QUALITY_TROUBLESHOOTING_MATRIX,
  MATERIAL_OPTIMIZATION_GUIDELINES,
  COST_BREAKDOWN_DATA
} from '@/lib/data/cheatsheets/process-optimization-data';

// ============================================================================
// QUALITY TROUBLESHOOTING TABLE COMPONENT
// ============================================================================

interface QualityTroubleshootingTableProps {
  className?: string;
}

export function QualityTroubleshootingTable({ className = '' }: QualityTroubleshootingTableProps) {
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = useMemo(() => {
    return QUALITY_TROUBLESHOOTING_MATRIX.filter(issue => {
      const matchesSeverity = severityFilter === 'all' || issue.severity === severityFilter;
      const matchesSearch = issue.symptom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           issue.rootCauses.some(cause => cause.cause.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSeverity && matchesSearch;
    });
  }, [severityFilter, searchTerm]);

  const toggleExpand = (issueId: string) => {
    setExpandedIssue(expandedIssue === issueId ? null : issueId);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'major': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'minor': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className={className}>
      {/* Filters */}
      <div className="mb-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search symptoms or causes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-3">
        {filteredIssues.map((issue) => (
          <Card key={issue.issueId} className="overflow-hidden">
            <div
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleExpand(issue.issueId)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-base mb-2">{issue.symptom}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                        {issue.severity.toUpperCase()}
                      </span>
                      <span className="text-muted-foreground">
                        Frequency: {issue.frequency}% of cases
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={expandedIssue === issue.issueId ? 'Collapse' : 'Expand'}
                  >
                    {expandedIssue === issue.issueId ? '−' : '+'}
                  </button>
                </div>
              </CardHeader>
            </div>

            {expandedIssue === issue.issueId && (
              <CardContent className="pt-0 space-y-4 text-sm">
                {/* Root Causes */}
                <div>
                  <h4 className="font-semibold mb-2">Root Causes (by likelihood):</h4>
                  <div className="space-y-2">
                    {issue.rootCauses
                      .sort((a, b) => b.likelihood - a.likelihood)
                      .map((cause, idx) => (
                        <div key={idx} className="pl-4 border-l-2 border-blue-500">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-medium">{cause.cause}</span>
                            <span className="text-xs text-muted-foreground">({cause.likelihood}% likely)</span>
                          </div>
                          <p className="text-muted-foreground text-xs">{cause.diagnosis}</p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold mb-2">Solutions (by effectiveness):</h4>
                  <div className="space-y-3">
                    {issue.solutions
                      .sort((a, b) => b.effectivenessProbability - a.effectivenessProbability)
                      .map((solution, idx) => (
                        <div key={idx} className="bg-muted/30 p-3 rounded-lg">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="font-medium">{solution.solution}</span>
                            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                              {solution.effectivenessProbability}% effective
                            </span>
                          </div>
                          {solution.parameterAdjustments.length > 0 && (
                            <div className="mb-2">
                              <span className="text-xs font-medium text-muted-foreground">Parameter Adjustments:</span>
                              <ul className="mt-1 space-y-1">
                                {solution.parameterAdjustments.map((adj, adjIdx) => (
                                  <li key={adjIdx} className="text-xs text-muted-foreground ml-4">
                                    • {adj.parameter}: {adj.direction} by {adj.amount}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground">
                            Implementation time: {solution.implementationTime}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Quantitative Metrics */}
                {issue.quantitativeMetrics && (
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">Measurement & Acceptance Criteria:</h4>
                    <div className="space-y-1 text-xs">
                      <div>
                        <span className="font-medium">Method:</span> {issue.quantitativeMetrics.measurementMethod}
                      </div>
                      <div>
                        <span className="font-medium">Acceptable:</span> {issue.quantitativeMetrics.acceptableRange}
                      </div>
                      <div>
                        <span className="font-medium">Rejection:</span> {issue.quantitativeMetrics.rejectionThreshold}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No issues found matching your search criteria.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ============================================================================
// MATERIAL-SPECIFIC OPTIMIZATION TABLE COMPONENT
// ============================================================================

interface MaterialOptimizationTableProps {
  className?: string;
}

export function MaterialOptimizationTable({ className = '' }: MaterialOptimizationTableProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(MATERIAL_OPTIMIZATION_GUIDELINES[0]?.materialId || '');

  const material = useMemo(() => {
    return MATERIAL_OPTIMIZATION_GUIDELINES.find(m => m.materialId === selectedMaterial);
  }, [selectedMaterial]);

  if (!material) return null;

  return (
    <div className={className}>
      {/* Material Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Select Material:</label>
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring"
        >
          {MATERIAL_OPTIMIZATION_GUIDELINES.map((mat) => (
            <option key={mat.materialId} value={mat.materialId}>
              {mat.materialName}
            </option>
          ))}
        </select>
      </div>

      {/* Material Details */}
      <Card>
        <CardHeader>
          <CardTitle>{material.materialName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {/* Basic Parameters */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Assist Gas Requirements:</h4>
              <div className="space-y-1 text-muted-foreground">
                <div>Type: <span className="font-medium text-foreground">{material.assistGas}</span></div>
                {material.gasPurity && (
                  <div>Purity: <span className="font-medium text-foreground">{material.gasPurity}</span></div>
                )}
                <div>
                  Pressure Range: <span className="font-medium text-foreground">
                    {material.pressureRange.minimum}-{material.pressureRange.maximum} {material.pressureRange.unit}
                  </span>
                </div>
                <div>
                  Optimal: <span className="font-medium text-foreground">
                    {material.pressureRange.optimal} {material.pressureRange.unit}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Focus Position:</h4>
              <div className="space-y-1 text-muted-foreground">
                <div>
                  Range: <span className="font-medium text-foreground">
                    {material.focusRange.minimum} to {material.focusRange.maximum} {material.focusRange.unit}
                  </span>
                </div>
                <div>
                  Optimal: <span className="font-medium text-foreground">
                    {material.focusRange.optimal} {material.focusRange.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Adjustments */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-1">Speed Adjustment:</h4>
              <p className="text-muted-foreground">{material.speedAdjustment}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Power Adjustment:</h4>
              <p className="text-muted-foreground">{material.powerAdjustment}</p>
            </div>
          </div>

          {/* Quality Grade */}
          <div>
            <h4 className="font-semibold mb-1">Quality Grade Achievable:</h4>
            <p className="text-muted-foreground">{material.qualityGradeAchievable}</p>
          </div>

          {/* Special Considerations */}
          <div>
            <h4 className="font-semibold mb-2">Special Considerations:</h4>
            <ul className="space-y-1 text-muted-foreground">
              {material.specialConsiderations.map((consideration, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>{consideration}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Challenges */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-200">Common Challenges:</h4>
            <ul className="space-y-1 text-xs text-yellow-800 dark:text-yellow-300">
              {material.commonChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5">⚠</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ============================================================================
// PROCESS FLOW DIAGRAM SVG COMPONENT
// ============================================================================

export function ProcessFlowDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} overflow-x-auto`}>
      <svg
        viewBox="0 0 900 450"
        className="w-full h-auto max-w-4xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
        </defs>

        {/* Title */}
        <text x="450" y="30" textAnchor="middle" className="text-lg font-semibold fill-current">
          Process Optimization Workflow
        </text>

        {/* Step 1: Define Objective */}
        <rect x="50" y="60" width="160" height="60" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <text x="130" y="85" textAnchor="middle" className="fill-white text-sm font-medium">
          1. Define Objective
        </text>
        <text x="130" y="105" textAnchor="middle" className="fill-white text-xs">
          Speed / Quality / Cost
        </text>

        {/* Arrow 1 */}
        <line x1="210" y1="90" x2="270" y2="90" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 2: Baseline Testing */}
        <rect x="270" y="60" width="160" height="60" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <text x="350" y="85" textAnchor="middle" className="fill-white text-sm font-medium">
          2. Baseline Testing
        </text>
        <text x="350" y="105" textAnchor="middle" className="fill-white text-xs">
          Establish reference
        </text>

        {/* Arrow 2 */}
        <line x1="430" y1="90" x2="490" y2="90" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 3: Single-Factor Sweep */}
        <rect x="490" y="60" width="160" height="60" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <text x="570" y="85" textAnchor="middle" className="fill-white text-sm font-medium">
          3. Single-Factor
        </text>
        <text x="570" y="105" textAnchor="middle" className="fill-white text-xs">
          Sweep parameters
        </text>

        {/* Arrow 3 */}
        <line x1="650" y1="90" x2="710" y2="90" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 4: Multi-Factor Combination */}
        <rect x="710" y="60" width="160" height="60" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <text x="790" y="85" textAnchor="middle" className="fill-white text-sm font-medium">
          4. Multi-Factor
        </text>
        <text x="790" y="105" textAnchor="middle" className="fill-white text-xs">
          Test combinations
        </text>

        {/* Arrow down from step 4 */}
        <line x1="790" y1="120" x2="790" y2="180" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 5: First-Article Confirmation */}
        <rect x="710" y="180" width="160" height="60" rx="8" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <text x="790" y="205" textAnchor="middle" className="fill-white text-sm font-medium">
          5. First-Article
        </text>
        <text x="790" y="225" textAnchor="middle" className="fill-white text-xs">
          ISO 9013 validation
        </text>

        {/* Decision Diamond */}
        <polygon points="790,260 850,300 790,340 730,300" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
        <text x="790" y="305" textAnchor="middle" className="fill-gray-900 text-xs font-semibold">
          Pass?
        </text>

        {/* Arrow from decision to database (Yes) */}
        <line x1="730" y1="300" x2="650" y2="300" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="680" y="295" textAnchor="middle" className="fill-green-600 text-xs font-semibold">
          Yes
        </text>

        {/* Arrow from decision back to step 3 (No) */}
        <path d="M 850 300 L 900 300 L 900 90 L 660 90" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
        <text x="870" y="295" textAnchor="middle" className="fill-red-600 text-xs font-semibold">
          No
        </text>

        {/* Step 6: Database Entry */}
        <rect x="490" y="270" width="160" height="60" rx="8" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <text x="570" y="295" textAnchor="middle" className="fill-white text-sm font-medium">
          6. Database Entry
        </text>
        <text x="570" y="315" textAnchor="middle" className="fill-white text-xs">
          Version control
        </text>

        {/* Arrow to Continuous Improvement */}
        <line x1="490" y1="300" x2="430" y2="300" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Continuous Improvement Box */}
        <rect x="270" y="270" width="160" height="60" rx="8" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
        <text x="350" y="295" textAnchor="middle" className="fill-white text-sm font-medium">
          Continuous
        </text>
        <text x="350" y="315" textAnchor="middle" className="fill-white text-xs">
          Monitor & Refine
        </text>

        {/* Feedback arrow */}
        <path d="M 270 300 L 210 300 L 210 90" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" fill="none" />

        {/* Legend */}
        <g transform="translate(50, 380)">
          <text x="0" y="0" className="fill-current text-xs font-semibold">Legend:</text>
          <rect x="0" y="10" width="30" height="20" rx="4" fill="#3b82f6" />
          <text x="35" y="24" className="fill-current text-xs">Process Step</text>
          <rect x="150" y="10" width="30" height="20" rx="4" fill="#10b981" />
          <text x="185" y="24" className="fill-current text-xs">Validation</text>
          <polygon points="300,20 320,30 300,40 280,30" fill="#fbbf24" />
          <text x="325" y="34" className="fill-current text-xs">Decision Point</text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// PARAMETER INTERACTION DIAGRAM SVG COMPONENT
// ============================================================================

export function ParameterInteractionDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} overflow-x-auto`}>
      <svg
        viewBox="0 0 700 600"
        className="w-full h-auto max-w-3xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title */}
        <text x="350" y="30" textAnchor="middle" className="text-lg font-semibold fill-current">
          Parameter Interaction Network
        </text>
        <text x="350" y="50" textAnchor="middle" className="text-xs fill-current opacity-70">
          Line thickness indicates coupling strength
        </text>

        {/* Central node - Speed */}
        <circle cx="350" cy="300" r="50" fill="#3b82f6" stroke="#2563eb" strokeWidth="3" />
        <text x="350" y="295" textAnchor="middle" className="fill-white text-sm font-bold">
          Cutting
        </text>
        <text x="350" y="310" textAnchor="middle" className="fill-white text-sm font-bold">
          Speed
        </text>

        {/* Power node (top) */}
        <circle cx="350" cy="120" r="45" fill="#ef4444" stroke="#dc2626" strokeWidth="3" />
        <text x="350" y="115" textAnchor="middle" className="fill-white text-sm font-bold">
          Laser
        </text>
        <text x="350" y="130" textAnchor="middle" className="fill-white text-sm font-bold">
          Power
        </text>

        {/* Focus node (top-right) */}
        <circle cx="550" cy="200" r="45" fill="#10b981" stroke="#059669" strokeWidth="3" />
        <text x="550" y="195" textAnchor="middle" className="fill-white text-sm font-bold">
          Focus
        </text>
        <text x="550" y="210" textAnchor="middle" className="fill-white text-sm font-bold">
          Position
        </text>

        {/* Gas Pressure node (bottom-right) */}
        <circle cx="550" cy="400" r="45" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
        <text x="550" y="395" textAnchor="middle" className="fill-white text-sm font-bold">
          Gas
        </text>
        <text x="550" y="410" textAnchor="middle" className="fill-white text-sm font-bold">
          Pressure
        </text>

        {/* Nozzle node (bottom-left) */}
        <circle cx="150" cy="400" r="45" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="3" />
        <text x="150" y="395" textAnchor="middle" className="fill-white text-sm font-bold">
          Nozzle
        </text>
        <text x="150" y="410" textAnchor="middle" className="fill-white text-sm font-bold">
          Diameter
        </text>

        {/* Material node (top-left) */}
        <circle cx="150" cy="200" r="45" fill="#ec4899" stroke="#db2777" strokeWidth="3" />
        <text x="150" y="195" textAnchor="middle" className="fill-white text-sm font-bold">
          Material
        </text>
        <text x="150" y="210" textAnchor="middle" className="fill-white text-sm font-bold">
          Thickness
        </text>

        {/* Connections - Strong coupling (4px) */}
        <line x1="350" y1="250" x2="350" y2="165" stroke="#64748b" strokeWidth="4" opacity="0.6" />
        <text x="365" y="210" className="fill-current text-xs font-medium">Strong</text>

        <line x1="400" y1="280" x2="505" y2="220" stroke="#64748b" strokeWidth="4" opacity="0.6" />
        <text x="460" y="245" className="fill-current text-xs font-medium">Strong</text>

        <line x1="400" y1="320" x2="505" y2="380" stroke="#64748b" strokeWidth="4" opacity="0.6" />
        <text x="460" y="355" className="fill-current text-xs font-medium">Strong</text>

        {/* Connections - Medium coupling (3px) */}
        <line x1="300" y1="280" x2="195" y2="220" stroke="#64748b" strokeWidth="3" opacity="0.5" />
        <text x="235" y="245" className="fill-current text-xs">Medium</text>

        <line x1="300" y1="320" x2="195" y2="380" stroke="#64748b" strokeWidth="3" opacity="0.5" />
        <text x="235" y="355" className="fill-current text-xs">Medium</text>

        {/* Connections - Weak coupling (2px) */}
        <line x1="195" y1="200" x2="305" y2="200" stroke="#64748b" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />

        <line x1="505" y1="200" x2="505" y2="355" stroke="#64748b" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />

        <line x1="195" y1="380" x2="505" y2="380" stroke="#64748b" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />

        <line x1="150" y1="245" x2="150" y2="355" stroke="#64748b" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />

        <line x1="350" y1="165" x2="505" y2="220" stroke="#64748b" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />

        {/* Legend */}
        <g transform="translate(50, 520)">
          <text x="0" y="0" className="fill-current text-xs font-semibold">Coupling Strength:</text>
          <line x1="0" y1="15" x2="40" y2="15" stroke="#64748b" strokeWidth="4" />
          <text x="45" y="19" className="fill-current text-xs">Strong (direct impact)</text>
          <line x1="200" y1="15" x2="240" y2="15" stroke="#64748b" strokeWidth="3" />
          <text x="245" y="19" className="fill-current text-xs">Medium (moderate impact)</text>
          <line x1="420" y1="15" x2="460" y2="15" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
          <text x="465" y="19" className="fill-current text-xs">Weak (indirect impact)</text>
        </g>

        {/* Key Interactions */}
        <g transform="translate(50, 560)">
          <text x="0" y="0" className="fill-current text-xs italic opacity-70">
            Note: Changing any parameter requires coordinated adjustment of coupled parameters for optimal results
          </text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// COST BREAKDOWN CHART SVG COMPONENT
// ============================================================================

export function CostBreakdownChart({ className = '' }: { className?: string }) {
  // Note: total could be used for validation (should sum to 100%), but not needed for rendering
  // const total = COST_BREAKDOWN_DATA.reduce((sum, item) => sum + item.typicalPercentage, 0);
  
  let currentAngle = -90; // Start from top
  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

  return (
    <div className={`${className} overflow-x-auto`}>
      <svg
        viewBox="0 0 500 450"
        className="w-full h-auto max-w-2xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title */}
        <text x="250" y="30" textAnchor="middle" className="text-lg font-semibold fill-current">
          Typical Cost Breakdown
        </text>
        <text x="250" y="50" textAnchor="middle" className="text-xs fill-current opacity-70">
          Medium-thickness steel cutting with nitrogen
        </text>

        {/* Pie chart segments */}
        {COST_BREAKDOWN_DATA.map((item, idx) => {
          const percentage = item.typicalPercentage;
          const angle = (percentage / 100) * 360;
          
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;
          
          const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
          const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
          const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
          const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
          
          const largeArcFlag = angle > 180 ? 1 : 0;
          
          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ');

          // Label position
          const labelAngle = startAngle + angle / 2;
          const labelRadius = radius + 40;
          const labelX = centerX + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
          const labelY = centerY + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

          currentAngle = endAngle;

          return (
            <g key={idx}>
              <path d={pathData} fill={colors[idx % colors.length]} stroke="white" strokeWidth="2" />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                className="fill-current text-xs font-semibold"
              >
                {percentage}%
              </text>
            </g>
          );
        })}

        {/* Center label */}
        <circle cx={centerX} cy={centerY} r="50" fill="white" stroke="#e5e7eb" strokeWidth="2" />
        <text x={centerX} y={centerY - 5} textAnchor="middle" className="fill-current text-sm font-bold">
          Operating
        </text>
        <text x={centerX} y={centerY + 10} textAnchor="middle" className="fill-current text-sm font-bold">
          Costs
        </text>

        {/* Legend */}
        <g transform="translate(50, 420)">
          {COST_BREAKDOWN_DATA.map((item, idx) => (
            <g key={idx} transform={`translate(${idx * 90}, 0)`}>
              <rect x="0" y="0" width="12" height="12" fill={colors[idx % colors.length]} />
              <text x="16" y="10" className="fill-current text-xs">
                {item.component.split(' ')[0]}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}


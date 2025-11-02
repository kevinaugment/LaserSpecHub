'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MaterialParametersData } from '@/lib/data/cheatsheets/material-thickness-parameters-data';

interface ParameterRelationshipChartProps {
  materialData: MaterialParametersData;
}

export function ParameterRelationshipChart({ materialData }: ParameterRelationshipChartProps) {
  // Extract data points for visualization
  const powerLevels = materialData.powerLevels.slice(0, 4); // Show first 4 power levels
  
  // Find max values for scaling
  const allThicknesses = powerLevels.flatMap(pl => pl.parameters.map(p => p.thickness));
  const allSpeeds = powerLevels.flatMap(pl => pl.parameters.map(p => p.speedMPerMin));
  const maxThickness = Math.max(...allThicknesses);
  const maxSpeed = Math.max(...allSpeeds);
  
  // Chart dimensions
  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  // Scale functions
  const scaleX = (thickness: number) => (thickness / maxThickness) * chartWidth + padding.left;
  const scaleY = (speed: number) => chartHeight - (speed / maxSpeed) * chartHeight + padding.top;
  
  // Colors for different power levels
  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];
  
  // Generate path for each power level
  const generatePath = (parameters: typeof powerLevels[0]['parameters']) => {
    const sortedParams = [...parameters].sort((a, b) => a.thickness - b.thickness);
    return sortedParams.map((p, i) => {
      const x = scaleX(p.thickness);
      const y = scaleY(p.speedMPerMin);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    }).join(' ');
  };
  
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Speed vs Thickness Relationship</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {materialData.materialName} - Cutting speed decreases non-linearly with thickness
        </p>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto"
            style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <g key={`grid-${ratio}`}>
                {/* Horizontal grid lines */}
                <line
                  x1={padding.left}
                  y1={padding.top + chartHeight * ratio}
                  x2={padding.left + chartWidth}
                  y2={padding.top + chartHeight * ratio}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                {/* Vertical grid lines */}
                <line
                  x1={padding.left + chartWidth * ratio}
                  y1={padding.top}
                  x2={padding.left + chartWidth * ratio}
                  y2={padding.top + chartHeight}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </g>
            ))}
            
            {/* Axes */}
            <line
              x1={padding.left}
              y1={padding.top + chartHeight}
              x2={padding.left + chartWidth}
              y2={padding.top + chartHeight}
              stroke="#374151"
              strokeWidth="2"
            />
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={padding.top + chartHeight}
              stroke="#374151"
              strokeWidth="2"
            />
            
            {/* X-axis labels */}
            <text
              x={padding.left + chartWidth / 2}
              y={height - 20}
              textAnchor="middle"
              className="text-sm fill-gray-700 dark:fill-gray-300"
              fontSize="14"
            >
              Material Thickness (mm)
            </text>
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <text
                key={`x-label-${ratio}`}
                x={padding.left + chartWidth * ratio}
                y={padding.top + chartHeight + 25}
                textAnchor="middle"
                className="text-xs fill-gray-600 dark:fill-gray-400"
                fontSize="12"
              >
                {(maxThickness * ratio).toFixed(0)}
              </text>
            ))}
            
            {/* Y-axis labels */}
            <text
              x={20}
              y={padding.top + chartHeight / 2}
              textAnchor="middle"
              transform={`rotate(-90, 20, ${padding.top + chartHeight / 2})`}
              className="text-sm fill-gray-700 dark:fill-gray-300"
              fontSize="14"
            >
              Cutting Speed (m/min)
            </text>
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <text
                key={`y-label-${ratio}`}
                x={padding.left - 10}
                y={padding.top + chartHeight * (1 - ratio) + 5}
                textAnchor="end"
                className="text-xs fill-gray-600 dark:fill-gray-400"
                fontSize="12"
              >
                {(maxSpeed * ratio).toFixed(1)}
              </text>
            ))}
            
            {/* Data lines and points */}
            {powerLevels.map((powerLevel, idx) => {
              const color = colors[idx];
              const path = generatePath(powerLevel.parameters);
              
              return (
                <g key={powerLevel.power}>
                  {/* Line */}
                  <path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points */}
                  {powerLevel.parameters.map((param, pidx) => (
                    <circle
                      key={`${powerLevel.power}-${pidx}`}
                      cx={scaleX(param.thickness)}
                      cy={scaleY(param.speedMPerMin)}
                      r="4"
                      fill={color}
                      stroke="white"
                      strokeWidth="2"
                    >
                      <title>{`${powerLevel.power}: ${param.thickness}mm @ ${param.speedMPerMin} m/min`}</title>
                    </circle>
                  ))}
                </g>
              );
            })}
            
            {/* Legend */}
            {powerLevels.map((powerLevel, idx) => (
              <g key={`legend-${powerLevel.power}`} transform={`translate(${padding.left + 20}, ${padding.top + idx * 25})`}>
                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="0"
                  stroke={colors[idx]}
                  strokeWidth="2.5"
                />
                <circle
                  cx="15"
                  cy="0"
                  r="4"
                  fill={colors[idx]}
                  stroke="white"
                  strokeWidth="2"
                />
                <text
                  x="40"
                  y="5"
                  className="text-xs fill-gray-700 dark:fill-gray-300"
                  fontSize="12"
                >
                  {powerLevel.power}
                </text>
              </g>
            ))}
          </svg>
        </div>
        
        {/* Key Insights */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-200">
            Key Insights
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <li>• Cutting speed decreases non-linearly as thickness increases</li>
            <li>• Higher power enables faster speeds across all thicknesses</li>
            <li>• Speed advantage of higher power is more pronounced in thicker materials</li>
            <li>• Thin materials (1-3mm) can be cut very fast even with moderate power</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}


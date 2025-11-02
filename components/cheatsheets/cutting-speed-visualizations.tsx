'use client';

import { useState } from 'react';

/**
 * Speed vs Power Curve Visualization
 * Shows the non-linear relationship between laser power and cutting speed
 */
interface SpeedVsPowerCurveProps {
  material?: string;
  thickness?: number;
}

export function SpeedVsPowerCurve({ material = "Mild Steel", thickness = 10 }: SpeedVsPowerCurveProps) {
  // Sample data points for demonstration (power in kW, speed in m/min)
  const dataPoints = [
    { power: 2, speed: 1.2 },
    { power: 3, speed: 1.8 },
    { power: 4, speed: 2.5 },
    { power: 6, speed: 3.5 },
    { power: 8, speed: 4.5 },
    { power: 12, speed: 7.0 },
  ];

  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // SVG dimensions
  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Scale functions
  const maxPower = 12;
  const maxSpeed = 8;
  const scaleX = (power: number) => padding.left + (power / maxPower) * chartWidth;
  const scaleY = (speed: number) => padding.top + chartHeight - (speed / maxSpeed) * chartHeight;

  // Generate smooth curve path
  const generatePath = () => {
    const points = dataPoints.map(d => ({ x: scaleX(d.power), y: scaleY(d.speed) }));
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      path += ` Q ${points[i].x} ${points[i].y}, ${xc} ${yc}`;
    }
    path += ` T ${points[points.length - 1].x} ${points[points.length - 1].y}`;
    return path;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Speed vs Power Relationship
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {material} - {thickness}mm thickness (Diminishing returns at higher power)
      </p>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="Speed vs Power curve chart">
        {/* Grid lines */}
        {[0, 2, 4, 6, 8].map((speed) => (
          <line
            key={`grid-h-${speed}`}
            x1={padding.left}
            y1={scaleY(speed)}
            x2={width - padding.right}
            y2={scaleY(speed)}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        {[0, 3, 6, 9, 12].map((power) => (
          <line
            key={`grid-v-${power}`}
            x1={scaleX(power)}
            y1={padding.top}
            x2={scaleX(power)}
            y2={height - padding.bottom}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* X-axis labels */}
        {[0, 3, 6, 9, 12].map((power) => (
          <text
            key={`label-x-${power}`}
            x={scaleX(power)}
            y={height - padding.bottom + 25}
            textAnchor="middle"
            className="text-sm fill-gray-600"
          >
            {power}kW
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          className="text-sm font-medium fill-gray-700"
        >
          Laser Power
        </text>

        {/* Y-axis labels */}
        {[0, 2, 4, 6, 8].map((speed) => (
          <text
            key={`label-y-${speed}`}
            x={padding.left - 15}
            y={scaleY(speed) + 5}
            textAnchor="end"
            className="text-sm fill-gray-600"
          >
            {speed}
          </text>
        ))}
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, 20, ${height / 2})`}
          className="text-sm font-medium fill-gray-700"
        >
          Cutting Speed (m/min)
        </text>

        {/* Curve */}
        <path
          d={generatePath()}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Data points */}
        {dataPoints.map((point, index) => (
          <g key={index}>
            <circle
              cx={scaleX(point.power)}
              cy={scaleY(point.speed)}
              r={hoveredPoint === index ? 8 : 6}
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {hoveredPoint === index && (
              <g>
                <rect
                  x={scaleX(point.power) - 60}
                  y={scaleY(point.speed) - 45}
                  width="120"
                  height="35"
                  fill="white"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x={scaleX(point.power)}
                  y={scaleY(point.speed) - 30}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-gray-900"
                >
                  {point.power}kW
                </text>
                <text
                  x={scaleX(point.power)}
                  y={scaleY(point.speed) - 15}
                  textAnchor="middle"
                  className="text-xs fill-gray-700"
                >
                  {point.speed} m/min
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * Material Comparison Bar Chart
 * Compares cutting speeds across different materials at same power
 */
interface MaterialComparisonChartProps {
  power?: string;
  thickness?: number;
}

export function MaterialComparisonChart({ power = "6kW", thickness = 5 }: MaterialComparisonChartProps) {
  const materials = [
    { name: "Mild Steel (O2)", speed: 10.0, color: "#3b82f6" },
    { name: "Mild Steel (N2)", speed: 6.5, color: "#60a5fa" },
    { name: "Stainless Steel", speed: 8.0, color: "#8b5cf6" },
    { name: "Aluminum", speed: 7.0, color: "#f59e0b" },
    { name: "Copper/Brass", speed: 2.8, color: "#ef4444" },
  ];

  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 80, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxSpeed = 12;
  const barWidth = chartWidth / materials.length - 20;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Material Speed Comparison
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {power} laser power - {thickness}mm thickness
      </p>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="Material comparison bar chart">
        {/* Grid lines */}
        {[0, 3, 6, 9, 12].map((speed) => (
          <line
            key={`grid-${speed}`}
            x1={padding.left}
            y1={padding.top + chartHeight - (speed / maxSpeed) * chartHeight}
            x2={width - padding.right}
            y2={padding.top + chartHeight - (speed / maxSpeed) * chartHeight}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Y-axis labels */}
        {[0, 3, 6, 9, 12].map((speed) => (
          <text
            key={`label-y-${speed}`}
            x={padding.left - 15}
            y={padding.top + chartHeight - (speed / maxSpeed) * chartHeight + 5}
            textAnchor="end"
            className="text-sm fill-gray-600"
          >
            {speed}
          </text>
        ))}
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, 20, ${height / 2})`}
          className="text-sm font-medium fill-gray-700"
        >
          Cutting Speed (m/min)
        </text>

        {/* Bars */}
        {materials.map((material, index) => {
          const x = padding.left + (index * chartWidth) / materials.length + 10;
          const barHeight = (material.speed / maxSpeed) * chartHeight;
          const y = padding.top + chartHeight - barHeight;
          const isHovered = hoveredBar === index;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={material.color}
                opacity={isHovered ? 1 : 0.8}
                className="cursor-pointer transition-opacity"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              {isHovered && (
                <>
                  <rect
                    x={x + barWidth / 2 - 40}
                    y={y - 35}
                    width="80"
                    height="30"
                    fill="white"
                    stroke={material.color}
                    strokeWidth="2"
                    rx="4"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 15}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-900"
                  >
                    {material.speed} m/min
                  </text>
                </>
              )}
              <text
                x={x + barWidth / 2}
                y={height - padding.bottom + 20}
                textAnchor="middle"
                className="text-xs fill-gray-700"
                transform={`rotate(-15, ${x + barWidth / 2}, ${height - padding.bottom + 20})`}
              >
                {material.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Thickness Impact Graph
 * Shows how cutting speed decreases with material thickness
 */
export function ThicknessImpactGraph() {
  const dataPoints = [
    { thickness: 1, speed: 35 },
    { thickness: 2, speed: 20 },
    { thickness: 3, speed: 10 },
    { thickness: 5, speed: 5 },
    { thickness: 8, speed: 2.5 },
    { thickness: 10, speed: 1.8 },
    { thickness: 12, speed: 1.2 },
    { thickness: 15, speed: 0.8 },
    { thickness: 20, speed: 0.4 },
  ];

  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxThickness = 20;
  const maxSpeed = 40;
  const scaleX = (thickness: number) => padding.left + (thickness / maxThickness) * chartWidth;
  const scaleY = (speed: number) => padding.top + chartHeight - (speed / maxSpeed) * chartHeight;

  const generatePath = () => {
    return dataPoints.map((d, i) => 
      `${i === 0 ? 'M' : 'L'} ${scaleX(d.thickness)} ${scaleY(d.speed)}`
    ).join(' ');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Thickness Impact on Cutting Speed
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        3kW Fiber Laser - Mild Steel (Logarithmic relationship)
      </p>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="Thickness impact graph">
        {/* Grid lines */}
        {[0, 10, 20, 30, 40].map((speed) => (
          <line
            key={`grid-h-${speed}`}
            x1={padding.left}
            y1={scaleY(speed)}
            x2={width - padding.right}
            y2={scaleY(speed)}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        {[0, 5, 10, 15, 20].map((thickness) => (
          <line
            key={`grid-v-${thickness}`}
            x1={scaleX(thickness)}
            y1={padding.top}
            x2={scaleX(thickness)}
            y2={height - padding.bottom}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Labels */}
        {[0, 5, 10, 15, 20].map((thickness) => (
          <text
            key={`label-x-${thickness}`}
            x={scaleX(thickness)}
            y={height - padding.bottom + 25}
            textAnchor="middle"
            className="text-sm fill-gray-600"
          >
            {thickness}mm
          </text>
        ))}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          className="text-sm font-medium fill-gray-700"
        >
          Material Thickness
        </text>

        {[0, 10, 20, 30, 40].map((speed) => (
          <text
            key={`label-y-${speed}`}
            x={padding.left - 15}
            y={scaleY(speed) + 5}
            textAnchor="end"
            className="text-sm fill-gray-600"
          >
            {speed}
          </text>
        ))}
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, 20, ${height / 2})`}
          className="text-sm font-medium fill-gray-700"
        >
          Speed (m/min)
        </text>

        {/* Area under curve */}
        <path
          d={`${generatePath()} L ${scaleX(20)} ${height - padding.bottom} L ${scaleX(1)} ${height - padding.bottom} Z`}
          fill="#3b82f6"
          opacity="0.1"
        />

        {/* Curve */}
        <path
          d={generatePath()}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {dataPoints.map((point, index) => (
          <g key={index}>
            <circle
              cx={scaleX(point.thickness)}
              cy={scaleY(point.speed)}
              r={hoveredPoint === index ? 8 : 5}
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {hoveredPoint === index && (
              <g>
                <rect
                  x={scaleX(point.thickness) - 50}
                  y={scaleY(point.speed) - 45}
                  width="100"
                  height="35"
                  fill="white"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x={scaleX(point.thickness)}
                  y={scaleY(point.speed) - 30}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-gray-900"
                >
                  {point.thickness}mm
                </text>
                <text
                  x={scaleX(point.thickness)}
                  y={scaleY(point.speed) - 15}
                  textAnchor="middle"
                  className="text-xs fill-gray-700"
                >
                  {point.speed} m/min
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * Gas Type Comparison Visualization
 * Shows speed differences between oxygen and nitrogen cutting
 */
export function GasTypeComparison() {
  const materials = [
    { thickness: 3, oxygen: 10.0, nitrogen: 6.5 },
    { thickness: 5, oxygen: 5.0, nitrogen: 3.3 },
    { thickness: 8, oxygen: 2.5, nitrogen: 1.6 },
    { thickness: 10, oxygen: 1.8, nitrogen: 1.2 },
    { thickness: 12, oxygen: 1.2, nitrogen: 0.8 },
  ];

  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 100, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxSpeed = 12;
  const barGroupWidth = chartWidth / materials.length;
  const barWidth = barGroupWidth / 3;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Assist Gas Impact on Speed
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Mild Steel - 3kW Fiber Laser (Oxygen vs Nitrogen)
      </p>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="Gas type comparison chart">
        {/* Grid lines */}
        {[0, 3, 6, 9, 12].map((speed) => (
          <line
            key={`grid-${speed}`}
            x1={padding.left}
            y1={padding.top + chartHeight - (speed / maxSpeed) * chartHeight}
            x2={width - padding.right}
            y2={padding.top + chartHeight - (speed / maxSpeed) * chartHeight}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Y-axis labels */}
        {[0, 3, 6, 9, 12].map((speed) => (
          <text
            key={`label-y-${speed}`}
            x={padding.left - 15}
            y={padding.top + chartHeight - (speed / maxSpeed) * chartHeight + 5}
            textAnchor="end"
            className="text-sm fill-gray-600"
          >
            {speed}
          </text>
        ))}
        <text
          x={20}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90, 20, ${height / 2})`}
          className="text-sm font-medium fill-gray-700"
        >
          Speed (m/min)
        </text>

        {/* Bars */}
        {materials.map((material, index) => {
          const groupX = padding.left + index * barGroupWidth;
          
          const oxygenHeight = (material.oxygen / maxSpeed) * chartHeight;
          const nitrogenHeight = (material.nitrogen / maxSpeed) * chartHeight;

          return (
            <g key={index}>
              {/* Oxygen bar */}
              <rect
                x={groupX + barWidth * 0.5}
                y={padding.top + chartHeight - oxygenHeight}
                width={barWidth}
                height={oxygenHeight}
                fill="#ef4444"
                opacity="0.8"
              />
              {/* Nitrogen bar */}
              <rect
                x={groupX + barWidth * 1.7}
                y={padding.top + chartHeight - nitrogenHeight}
                width={barWidth}
                height={nitrogenHeight}
                fill="#3b82f6"
                opacity="0.8"
              />
              {/* Thickness label */}
              <text
                x={groupX + barGroupWidth / 2}
                y={height - padding.bottom + 25}
                textAnchor="middle"
                className="text-sm fill-gray-700"
              >
                {material.thickness}mm
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(${width - padding.right + 20}, ${padding.top})`}>
          <rect x="0" y="0" width="15" height="15" fill="#ef4444" opacity="0.8" />
          <text x="20" y="12" className="text-sm fill-gray-700">Oxygen</text>
          
          <rect x="0" y="25" width="15" height="15" fill="#3b82f6" opacity="0.8" />
          <text x="20" y="37" className="text-sm fill-gray-700">Nitrogen</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Quality vs Speed Tradeoff Matrix
 * Shows recommended speed adjustments for different quality levels
 */
export function QualitySpeedMatrix() {
  const qualityLevels = [
    { level: "Rough", multiplier: 1.20, color: "#ef4444" },
    { level: "Standard", multiplier: 1.0, color: "#3b82f6" },
    { level: "High Quality", multiplier: 0.75, color: "#8b5cf6" },
    { level: "Precision", multiplier: 0.55, color: "#ec4899" },
  ];

  const baseSpeed = 10; // m/min

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quality vs Speed Tradeoff
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Speed adjustments from baseline (Standard = 10 m/min)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {qualityLevels.map((quality, index) => {
          const adjustedSpeed = (baseSpeed * quality.multiplier).toFixed(1);
          const percentage = ((quality.multiplier - 1) * 100).toFixed(0);
          
          return (
            <div key={index} className="text-center">
              <div 
                className="relative w-full h-48 rounded-lg border-2 flex flex-col items-center justify-center"
                style={{ borderColor: quality.color }}
              >
                <div 
                  className="absolute bottom-0 left-0 right-0 rounded-b-lg transition-all"
                  style={{ 
                    height: `${quality.multiplier * 100}%`,
                    backgroundColor: quality.color,
                    opacity: 0.2
                  }}
                />
                <div className="relative z-10">
                  <div className="text-3xl font-bold" style={{ color: quality.color }}>
                    {adjustedSpeed}
                  </div>
                  <div className="text-sm text-gray-600">m/min</div>
                  <div className="text-xs text-gray-500 mt-2">
                    {percentage > 0 ? '+' : ''}{percentage}%
                  </div>
                </div>
              </div>
              <div className="mt-2 font-medium text-gray-900">{quality.level}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Note:</strong> Higher quality requires slower speeds to achieve better edge finish,
          tighter tolerances, and minimal dross. Choose based on your application requirements.
        </p>
      </div>
    </div>
  );
}


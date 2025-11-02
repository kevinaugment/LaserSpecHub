'use client';

interface SafetySymbolProps {
  laserClass: string;
  size?: number;
}

export function LaserSafetySymbol({ laserClass, size = 64 }: SafetySymbolProps) {
  const getSymbolColor = (cls: string): string => {
    if (cls === 'Class 1') return '#4ADE80'; // Green
    if (cls === 'Class 1M') return '#4ADE80';
    if (cls === 'Class 2') return '#FFD100'; // Yellow
    if (cls === 'Class 2M') return '#FFD100';
    if (cls === 'Class 3R') return '#FF6600'; // Orange
    if (cls === 'Class 3B') return '#FF6600';
    if (cls === 'Class 4') return '#E30613'; // Red
    return '#6B7280'; // Gray default
  };

  const getClassLabel = (cls: string): string => {
    if (cls === 'Class 1') return '';
    if (cls === 'Class 1M') return '1M';
    if (cls === 'Class 2') return '2';
    if (cls === 'Class 2M') return '2M';
    if (cls === 'Class 3R') return '3R';
    if (cls === 'Class 3B') return '3B';
    if (cls === 'Class 4') return '4';
    return '';
  };

  const color = getSymbolColor(laserClass);
  const label = getClassLabel(laserClass);

  // Class 1 has no warning symbol (safe)
  if (laserClass === 'Class 1') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2"/>
        <path d="M28 32L30 34L36 28" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="32" y="50" textAnchor="middle" fontSize="10" fill={color} fontWeight="bold">SAFE</text>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warning triangle */}
      <path
        d="M32 4 L60 56 L4 56 Z"
        fill={color}
        stroke="#000"
        strokeWidth="1.5"
      />
      
      {/* Radiation symbol (trefoil) */}
      <g transform="translate(32, 28)">
        <circle cx="0" cy="0" r="3" fill="#000"/>
        <path d="M0,-3 L0,-12 A3,3 0 0,1 2.6,-13.5 L2.6,-4.5 Z" fill="#000"/>
        <path d="M2.6,1.5 L10.4,9 A3,3 0 0,1 9,12.6 L1.2,5.1 Z" fill="#000"/>
        <path d="M-2.6,1.5 L-10.4,9 A3,3 0 0,0 -9,12.6 L-1.2,5.1 Z" fill="#000"/>
      </g>

      {/* Class label */}
      {label && (
        <text x="32" y="52" textAnchor="middle" fontSize="10" fill="#000" fontWeight="bold">
          CLASS {label}
        </text>
      )}
    </svg>
  );
}

export function LaserWarningLabel({ laserClass, power, wavelength }: { 
  laserClass: string; 
  power?: string; 
  wavelength?: string; 
}) {
  return (
    <div className="inline-flex items-center gap-2 border-2 border-gray-800 bg-white p-2 rounded">
      <LaserSafetySymbol laserClass={laserClass} size={48} />
      <div className="text-left">
        <div className="font-bold text-sm text-gray-900">LASER RADIATION</div>
        <div className="text-xs text-gray-700">{laserClass}</div>
        {power && <div className="text-xs text-gray-600">{power}</div>}
        {wavelength && <div className="text-xs text-gray-600">{wavelength}</div>}
      </div>
    </div>
  );
}


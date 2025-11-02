'use client';

interface IndustryAcceptance {
  industry: string;
  typicalGrade: number;
  minimumGrade: number;
  criticalParameters: string[];
  notes: string;
}

interface IndustryAcceptanceCriteriaProps {
  industries: IndustryAcceptance[];
}

export function IndustryAcceptanceCriteria({ industries }: IndustryAcceptanceCriteriaProps) {
  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 1: return { bg: 'bg-green-500', ring: 'ring-green-500' };
      case 2: return { bg: 'bg-blue-500', ring: 'ring-blue-500' };
      case 3: return { bg: 'bg-orange-500', ring: 'ring-orange-500' };
      case 4: return { bg: 'bg-red-500', ring: 'ring-red-500' };
      default: return { bg: 'bg-gray-500', ring: 'ring-gray-500' };
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Aerospace': return '✈️';
      case 'Medical Devices': return '🏥';
      case 'Automotive (Structural)': return '🚗';
      case 'Electronics Enclosures': return '💻';
      case 'Construction & HVAC': return '🏗️';
      case 'Furniture & Displays': return '🪑';
      default: return '🏭';
    }
  };

  return (
    <div className="space-y-6">
      {/* Industry Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => {
          const gradeColors = getGradeColor(industry.typicalGrade);
          const minGradeColors = getGradeColor(industry.minimumGrade);
          
          return (
            <div 
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{getIndustryIcon(industry.industry)}</span>
                  <h3 className="text-lg font-bold text-gray-900">{industry.industry}</h3>
                </div>
              </div>

              {/* Grade Requirements */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-600 mb-2">Typical Grade</div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl ${gradeColors.bg}`}>
                    {industry.typicalGrade}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-600 mb-2">Minimum Grade</div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl ${minGradeColors.bg}`}>
                    {industry.minimumGrade}
                  </div>
                </div>
              </div>

              {/* Critical Parameters */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Critical Parameters:</h4>
                <div className="flex flex-wrap gap-1">
                  {industry.criticalParameters.map((param, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                    >
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-900">{industry.notes}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry Sector
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Typical<br/>Grade
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Minimum<br/>Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key Focus Areas
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {industries.map((industry, index) => {
                const gradeColors = getGradeColor(industry.typicalGrade);
                
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{getIndustryIcon(industry.industry)}</span>
                        <span className="text-sm font-medium text-gray-900">{industry.industry}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${gradeColors.bg}`}>
                        {industry.typicalGrade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Grade {industry.minimumGrade}+
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {industry.criticalParameters.slice(0, 3).join(', ')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quality Requirements Summary */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-purple-900 mb-4">📊 Industry Quality Requirements Summary</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-purple-900 mb-3">Highest Standards (Grade 1):</h4>
            <ul className="space-y-2 text-sm text-purple-900">
              <li className="flex items-start">
                <span className="mr-2">✈️</span>
                <span><strong>Aerospace:</strong> Safety-critical components, 100% inspection, metallurgical analysis required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🏥</span>
                <span><strong>Medical Devices:</strong> Surgical instruments, implants, biocompatibility considerations</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-purple-900 mb-3">Standard Production (Grade 2-3):</h4>
            <ul className="space-y-2 text-sm text-purple-900">
              <li className="flex items-start">
                <span className="mr-2">🚗</span>
                <span><strong>Automotive:</strong> Grade 2 for structural, Grade 3 for non-critical parts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🏗️</span>
                <span><strong>Construction:</strong> Grade 3 standard, focus on weldability and cost efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">✓ Best Practices by Industry</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Match Quality to Application</h4>
            <p className="text-sm text-gray-700">
              Don't over-specify quality grades. Use Grade 1 only when truly necessary (aerospace, medical). 
              Grade 2-3 is sufficient for 90% of industrial applications.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Document Requirements Clearly</h4>
            <p className="text-sm text-gray-700">
              Specify grade, standard (ISO/AWS/EN), and critical parameters on drawings. Include inspection 
              frequency and acceptance criteria to avoid disputes.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Consider Post-Processing</h4>
            <p className="text-sm text-gray-700">
              If parts will be welded, coated, or machined, factor this into quality requirements. Grade 3 
              edges may be acceptable if subsequent operations will modify the edge.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Balance Cost and Quality</h4>
            <p className="text-sm text-gray-700">
              Grade 1 costs 80% more than Grade 3. Analyze which parts truly need premium quality versus 
              where standard quality is acceptable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

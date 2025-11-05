'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { LaserEquipment } from '@/types/equipment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EquipmentSelector } from '@/components/comparison/equipment-selector';
import { ComparisonTable } from '@/components/comparison/comparison-table';
import { StructuredData } from '@/components/ui/structured-data';

// This is a client component wrapper - metadata is exported from the default export below

function ComparisonContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [allEquipment, setAllEquipment] = useState<LaserEquipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<LaserEquipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSelector, setShowSelector] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [saving, setSaving] = useState(false);
  const [savedComparisons, setSavedComparisons] = useState<any[]>([]);

  // Load all equipment on mount
  useEffect(() => {
    async function loadEquipment() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/equipment');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setAllEquipment(result.data);
          
          // Load selected equipment from URL params
          const idsParam = searchParams.get('ids');
          if (idsParam) {
            const ids = idsParam.split(',').map(Number).filter(id => !isNaN(id));
            const selected = result.data.filter((eq: LaserEquipment) => ids.includes(eq.id));
            setSelectedEquipment(selected);
            
            // Warn if some IDs were invalid
            if (ids.length !== selected.length) {
              console.warn('Some equipment IDs in URL were not found');
            }
          }
        } else {
          console.error('Failed to load equipment:', result.error || 'Unknown error');
        }
      } catch (error) {
        console.error('Failed to load equipment:', error);
        // Set empty state instead of showing error to user
        setAllEquipment([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadEquipment();

    // Load saved comparisons if authenticated
    if (session?.user) {
      loadSavedComparisons();
    }
  }, [searchParams, session]);

  const loadSavedComparisons = async () => {
    try {
      const response = await fetch('/api/user/comparisons');
      const result = await response.json();
      if (result.success) {
        setSavedComparisons(result.data);
      }
    } catch (error) {
      console.error('Failed to load saved comparisons:', error);
    }
  };

  // Generate dynamic page title based on selected equipment
  useEffect(() => {
    if (typeof window !== 'undefined' && selectedEquipment.length > 0) {
      const brands = selectedEquipment.map(eq => eq.brand).join(' vs ');
      document.title = `${brands} Comparison - Laser Equipment | LaserSpecHub`;
    } else if (typeof window !== 'undefined') {
      document.title = 'Laser Equipment Comparison Tool - Compare Up to 5 Machines | LaserSpecHub';
    }
  }, [selectedEquipment]);

  const handleSelectEquipment = (equipment: LaserEquipment) => {
    const newSelected = [...selectedEquipment, equipment];
    setSelectedEquipment(newSelected);
    updateURL(newSelected);
    setShowSelector(false);
  };

  const handleRemoveEquipment = (id: number) => {
    const newSelected = selectedEquipment.filter(eq => eq.id !== id);
    setSelectedEquipment(newSelected);
    updateURL(newSelected);
  };

  const updateURL = (equipment: LaserEquipment[]) => {
    if (equipment.length > 0) {
      const ids = equipment.map(eq => eq.id).join(',');
      router.push(`/comparison?ids=${ids}`);
    } else {
      router.push('/comparison');
    }
  };

  const handleExportPDF = async () => {
    try {
      if (selectedEquipment.length === 0) {
        alert('Please select at least one equipment to export');
        return;
      }
      
      const { exportComparisonPDF } = await import('@/lib/pdf/comparison-export');
      await exportComparisonPDF({
        equipment: selectedEquipment,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Failed to export PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      // Better UX: could use a toast notification here
      alert('Comparison link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback: show URL in prompt
      prompt('Copy this comparison link:', window.location.href);
    }
  };

  const handleSaveComparison = async () => {
    if (!session?.user) {
      router.push('/auth/login?callbackUrl=' + window.location.pathname);
      return;
    }

    if (!saveName.trim()) {
      alert('Please enter a name for this comparison');
      return;
    }

    if (selectedEquipment.length === 0) {
      alert('Please select at least one equipment to compare');
      return;
    }

    try {
      setSaving(true);
      const response = await fetch('/api/user/comparisons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: saveName.trim(),
          equipment_ids: selectedEquipment.map(eq => eq.id),
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Comparison saved successfully!');
        setShowSaveDialog(false);
        setSaveName('');
        loadSavedComparisons();
      } else {
        alert(`Failed to save: ${result.error}`);
      }
    } catch (error) {
      alert('Failed to save comparison');
    } finally {
      setSaving(false);
    }
  };

  const handleLoadSavedComparison = (comparison: any) => {
    const ids = comparison.equipment_ids.join(',');
    router.push(`/comparison?ids=${ids}`);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading equipment...</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Laser Equipment Comparison Tool',
    description: 'Compare up to 5 laser cutting machines side-by-side with detailed specifications and key differences highlighted.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Laser Equipment Comparison Tool
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Compare up to 5 laser cutting machines side-by-side with detailed specifications, pricing, and key differences highlighted. Make informed decisions with our free comparison tool. 
            Browse our{' '}
            <Link href="/equipment" className="text-blue-600 hover:text-blue-800 font-medium underline">
              equipment database
            </Link>
            {' '}to find machines to compare, or read our{' '}
            <Link href="/guides/selection" className="text-blue-600 hover:text-blue-800 font-medium underline">
              equipment selection guide
            </Link>
            {' '}for help choosing the right laser type and power.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-900 text-sm">
              <strong>💡 Pro Tip:</strong> Select equipment from different manufacturers or power classes to understand your options. All comparisons can be exported to PDF or shared via link for team discussions. 
              Need help determining power requirements? Use our{' '}
              <Link href="/tools/power-calculator" className="text-blue-700 hover:text-blue-900 font-medium underline">
                Power Calculator
              </Link>
              {' '}or check the{' '}
              <Link href="/guides/power-selection-guide" className="text-blue-700 hover:text-blue-900 font-medium underline">
                Power Selection Guide
              </Link>
              .
            </p>
          </div>
        </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-1">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-lg">Add Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  Selected: {selectedEquipment.length} / 5
                </div>
                <Button
                  variant={showSelector ? 'outline' : 'primary'}
                  fullWidth
                  onClick={() => setShowSelector(!showSelector)}
                >
                  {showSelector ? 'Hide List' : 'Add Equipment'}
                </Button>

                {selectedEquipment.length > 0 && (
                  <>
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => {
                        setSelectedEquipment([]);
                        updateURL([]);
                      }}
                    >
                      Clear All
                    </Button>
                    <Button variant="outline" fullWidth onClick={handleExportPDF}>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Export PDF
                    </Button>
                    {selectedEquipment.length > 0 && (
                      <>
                        <Button variant="ghost" fullWidth onClick={handleShare}>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          Share Link
                        </Button>
                        <Button 
                          variant="outline" 
                          fullWidth 
                          onClick={() => session?.user ? setShowSaveDialog(true) : router.push('/auth/login?callbackUrl=' + window.location.pathname)}
                          className="border-green-500 text-green-600 hover:bg-green-50"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Save Comparison
                        </Button>
                      </>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {showSelector && (
            <Card variant="bordered" className="mt-6">
              <CardContent className="p-4">
                <EquipmentSelector
                  allEquipment={allEquipment}
                  selectedIds={selectedEquipment.map(eq => eq.id)}
                  onSelect={handleSelectEquipment}
                />
              </CardContent>
            </Card>
          )}

          {/* Saved Comparisons */}
          {session?.user && savedComparisons.length > 0 && (
            <Card variant="bordered" className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Saved Comparisons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {savedComparisons.map((comp) => (
                    <button
                      key={comp.id}
                      onClick={() => handleLoadSavedComparison(comp)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                    >
                      <div className="text-sm font-medium text-gray-900">{comp.name}</div>
                      <div className="text-xs text-gray-500">
                        {comp.equipment_ids.length} equipment{comp.equipment_ids.length !== 1 ? 's' : ''} • {new Date(comp.updated_at).toLocaleDateString()}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-3">
          <Card variant="bordered">
            <CardContent className="p-6">
              <ComparisonTable
                equipment={selectedEquipment}
                onRemove={handleRemoveEquipment}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Tips */}
      {selectedEquipment.length === 0 && (
        <Card variant="bordered">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-3">How to Use</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Click &quot;Add Equipment&quot; to select machines for comparison
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Compare up to 5 machines side-by-side
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key differences are highlighted in yellow
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Export your comparison as PDF or share the link
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Save Comparison Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Save Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comparison Name
                  </label>
                  <Input
                    type="text"
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    placeholder="e.g., Fiber Lasers Comparison"
                    disabled={saving}
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleSaveComparison}
                    disabled={saving || !saveName.trim()}
                  >
                    {saving ? 'Saving...' : 'Save'}
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      setShowSaveDialog(false);
                      setSaveName('');
                    }}
                    disabled={saving}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* SEO Content Section */}
      <div className="mt-12 pt-12 border-t-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Use Our Laser Equipment Comparison Tool?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Make Data-Driven Decisions</h3>
            <p className="text-gray-700 mb-4">
              Purchasing laser cutting equipment represents a significant capital investment (often $50,000-$500,000+). Our comparison tool helps you evaluate multiple options side-by-side, highlighting critical differences in specifications, performance, and pricing that impact your ROI.
            </p>
            <p className="text-gray-700">
              Compare key parameters including laser power (1kW-30kW), work area dimensions, positioning accuracy (±0.02-0.10mm), cutting speed, beam quality (M² factor), and total cost of ownership across leading manufacturers like TRUMPF, Bystronic, Mazak, Amada, HSG, and OPMT.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Specification Analysis</h3>
            <p className="text-gray-700 mb-4">
              Our database covers 50+ laser cutting systems spanning fiber lasers (1064nm), CO2 lasers (10600nm), and hybrid systems. Each comparison includes detailed technical specifications: power consumption, cooling requirements, control systems (Siemens, Beckhoff, Cypcut), and typical price ranges.
            </p>
            <p className="text-gray-700">
              The tool automatically highlights differences in critical parameters—helping you quickly identify which systems meet your material thickness requirements, production volume needs, and budget constraints.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Comparison Parameters</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-gray-900">Technical Specifications:</strong>
              <ul className="text-gray-700 mt-2 space-y-1 ml-4">
                <li>• Laser type & wavelength</li>
                <li>• Power output (kW)</li>
                <li>• Work area dimensions</li>
                <li>• Positioning accuracy</li>
                <li>• Repeat accuracy</li>
                <li>• Beam quality (M²)</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">System Configuration:</strong>
              <ul className="text-gray-700 mt-2 space-y-1 ml-4">
                <li>• Control system type</li>
                <li>• Cooling system</li>
                <li>• Power consumption</li>
                <li>• Physical dimensions</li>
                <li>• Equipment weight</li>
                <li>• Electrical requirements</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">Performance & Cost:</strong>
              <ul className="text-gray-700 mt-2 space-y-1 ml-4">
                <li>• Max cutting thickness</li>
                <li>• Cutting speed ranges</li>
                <li>• Price range estimates</li>
                <li>• Application suitability</li>
                <li>• Manufacturer support</li>
                <li>• Spare parts availability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Comparison Scenarios</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">•</span>
              <span><strong>Fiber vs CO2 Lasers:</strong> Compare 1064nm fiber lasers (higher efficiency, lower maintenance) against 10600nm CO2 lasers (better for non-metals, thicker acrylic/wood).</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">•</span>
              <span><strong>Power Class Selection:</strong> Evaluate 3kW entry-level systems vs 6kW mainstream vs 12kW+ high-power machines based on material thickness and production speed requirements.</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">•</span>
              <span><strong>Brand Comparison:</strong> Compare European premium brands (TRUMPF, Bystronic) against Asian value options (HSG, Bodor, OPMT) considering total cost of ownership over 10 years.</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">•</span>
              <span><strong>Work Area Sizing:</strong> Compare 1m×1m compact platforms vs 2m×3m standard vs 3m×6m large-format systems based on typical workpiece dimensions and material utilization.</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-base">🔄 Share & Collaborate</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="mb-3">
                Share your comparison with team members via unique URL. Perfect for procurement committees, engineering reviews, and vendor negotiations. Each comparison link preserves your selected equipment and highlights key differences.
              </p>
              <p>
                Export comparisons to PDF for offline analysis, vendor discussions, and capital approval presentations. PDFs include full specification tables, pricing estimates, and application notes.
              </p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle className="text-base">📊 Data Transparency</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="mb-3">
                All specifications sourced from manufacturer datasheets, verified installation databases, and industry testing reports. Price ranges reflect typical 2025 market conditions for new equipment (FOB, excluding installation/training).
              </p>
              <p>
                Equipment database updated quarterly with new models, discontinued systems flagged, and pricing adjusted for market trends. User-submitted corrections reviewed by technical team within 48 hours.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-900 text-sm">
            <strong>📌 Related Resources:</strong> After comparing equipment, use our{' '}
            <a href="/tools/power-calculator" className="text-blue-700 underline hover:text-blue-900">Power Calculator</a> to determine required laser power for your materials, check{' '}
            <a href="/guides/power-selection-guide" className="text-blue-700 underline hover:text-blue-900">Power Selection Guide</a> for detailed recommendations, or review our{' '}
            <a href="/guides/reports" className="text-blue-700 underline hover:text-blue-900">2025 Market Research Report</a> covering 50+ systems and industry trends.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default function ComparisonPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading comparison...</p>
        </div>
      </div>
    }>
      <ComparisonContent />
    </Suspense>
  );
}

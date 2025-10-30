'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import type { LaserEquipment } from '@/types/equipment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EquipmentSelector } from '@/components/comparison/equipment-selector';
import { ComparisonTable } from '@/components/comparison/comparison-table';

export default function ComparisonPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [allEquipment, setAllEquipment] = useState<LaserEquipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<LaserEquipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSelector, setShowSelector] = useState(false);

  // Load all equipment on mount
  useEffect(() => {
    async function loadEquipment() {
      try {
        const response = await fetch('/api/equipment');
        const result = await response.json();
        
        if (result.success && result.data) {
          setAllEquipment(result.data);
          
          // Load selected equipment from URL params
          const idsParam = searchParams.get('ids');
          if (idsParam) {
            const ids = idsParam.split(',').map(Number);
            const selected = result.data.filter((eq: LaserEquipment) => ids.includes(eq.id));
            setSelectedEquipment(selected);
          }
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load equipment:', error);
        setIsLoading(false);
      }
    }

    loadEquipment();
  }, [searchParams]);

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
    const { exportComparisonPDF } = await import('@/lib/pdf/comparison-export');
    exportComparisonPDF({
      equipment: selectedEquipment,
      timestamp: new Date(),
    });
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Comparison link copied to clipboard!');
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

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Equipment Comparison Tool
        </h1>
        <p className="text-lg text-gray-600">
          Compare up to 5 laser cutting machines side-by-side with detailed specifications and key differences highlighted.
        </p>
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
                      <Button variant="ghost" fullWidth onClick={handleShare}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share Link
                      </Button>
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
    </div>
  );
}

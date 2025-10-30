'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { LaserEquipment } from '@/types/equipment';
import { EquipmentCard } from './equipment-card';
import { EquipmentFilters, type FilterValues } from './equipment-filters';

interface EquipmentGridClientProps {
  equipment: LaserEquipment[];
  brands: string[];
}

export function EquipmentGridClient({ equipment, brands }: EquipmentGridClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (filters: FilterValues) => {
    const params = new URLSearchParams();
    
    if (filters.search) params.set('search', filters.search);
    if (filters.laserType !== 'all') params.set('laserType', filters.laserType);
    if (filters.powerMin) params.set('powerMin', filters.powerMin);
    if (filters.powerMax) params.set('powerMax', filters.powerMax);
    if (filters.brand !== 'all') params.set('brand', filters.brand);
    if (filters.coolingType !== 'all') params.set('coolingType', filters.coolingType);

    router.push(`/equipment?${params.toString()}`);
  };

  const initialFilters = {
    search: searchParams.get('search') || '',
    laserType: searchParams.get('laserType') || 'all',
    powerMin: searchParams.get('powerMin') || '',
    powerMax: searchParams.get('powerMax') || '',
    brand: searchParams.get('brand') || 'all',
    coolingType: searchParams.get('coolingType') || 'all',
  };

  return (
    <>
      <EquipmentFilters 
        brands={brands}
        onFilterChange={handleFilterChange}
        initialFilters={initialFilters}
      />

      {equipment.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No equipment found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing {equipment.length} {equipment.length === 1 ? 'result' : 'results'}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <EquipmentCard 
                key={item.id} 
                equipment={item}
                showCompareButton={true}
                onCompareClick={(eq) => {
                  // TODO: Implement comparison state management
                  console.log('Add to comparison:', eq.brand, eq.model);
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}






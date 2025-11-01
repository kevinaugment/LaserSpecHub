'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { LaserEquipment } from '@/types/equipment';
import { EquipmentCard } from './equipment-card';
import { EquipmentFilters, type FilterValues } from './equipment-filters';

interface EquipmentGridClientProps {
  equipment: LaserEquipment[];
  brands: string[];
}

const COMPARISON_STORAGE_KEY = 'laser-equipment-comparison';
const MAX_COMPARISON_ITEMS = 5;

export function EquipmentGridClient({ equipment, brands }: EquipmentGridClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [comparisonItems, setComparisonItems] = useState<LaserEquipment[]>([]);

  // Load comparison items from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COMPARISON_STORAGE_KEY);
      if (stored) {
        const items = JSON.parse(stored) as LaserEquipment[];
        setComparisonItems(items);
      }
    } catch (error) {
      console.error('Failed to load comparison items:', error);
    }
  }, []);

  // Save comparison items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(COMPARISON_STORAGE_KEY, JSON.stringify(comparisonItems));
    } catch (error) {
      console.error('Failed to save comparison items:', error);
    }
  }, [comparisonItems]);

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

  const handleCompareClick = (equipment: LaserEquipment) => {
    const isAlreadyAdded = comparisonItems.some(item => item.id === equipment.id);
    
    if (isAlreadyAdded) {
      // Remove from comparison
      setComparisonItems(items => items.filter(item => item.id !== equipment.id));
    } else {
      // Add to comparison (max 5 items)
      if (comparisonItems.length >= MAX_COMPARISON_ITEMS) {
        alert(`You can compare up to ${MAX_COMPARISON_ITEMS} items at once. Please remove an item before adding another.`);
        return;
      }
      setComparisonItems(items => [...items, equipment]);
    }
  };

  const handleViewComparison = () => {
    if (comparisonItems.length < 2) {
      alert('Please select at least 2 items to compare.');
      return;
    }
    
    // Navigate to comparison page with selected equipment IDs
    const ids = comparisonItems.map(item => item.id).join(',');
    router.push(`/equipment/compare?ids=${ids}`);
  };

  const handleClearComparison = () => {
    if (confirm('Remove all items from comparison?')) {
      setComparisonItems([]);
    }
  };

  const isInComparison = (id: number) => {
    return comparisonItems.some(item => item.id === id);
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

      {/* Comparison Bar */}
      {comparisonItems.length > 0 && (
        <div className="sticky top-0 z-10 bg-blue-600 text-white px-4 py-3 mb-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="font-medium">
                {comparisonItems.length} {comparisonItems.length === 1 ? 'item' : 'items'} selected for comparison
              </span>
              <span className="text-blue-200 text-sm">
                ({comparisonItems.map(item => `${item.brand} ${item.model}`).join(', ')})
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleViewComparison}
                disabled={comparisonItems.length < 2}
                className="bg-white text-blue-600 px-4 py-1.5 rounded font-medium hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Compare ({comparisonItems.length})
              </button>
              <button
                onClick={handleClearComparison}
                className="bg-blue-700 text-white px-4 py-1.5 rounded font-medium hover:bg-blue-800 transition text-sm"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

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
                isInComparison={isInComparison(item.id)}
                onCompareClick={handleCompareClick}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}













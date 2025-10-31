'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export interface FilterValues {
  search: string;
  laserType: string;
  powerMin: string;
  powerMax: string;
  brand: string;
  coolingType: string;
}

interface EquipmentFiltersProps {
  brands: string[];
  onFilterChange: (filters: FilterValues) => void;
  initialFilters?: Partial<FilterValues>;
}

export function EquipmentFilters({ 
  brands, 
  onFilterChange,
  initialFilters = {}
}: EquipmentFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    search: initialFilters.search || '',
    laserType: initialFilters.laserType || 'all',
    powerMin: initialFilters.powerMin || '',
    powerMax: initialFilters.powerMax || '',
    brand: initialFilters.brand || 'all',
    coolingType: initialFilters.coolingType || 'all',
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      search: '',
      laserType: 'all',
      powerMin: '',
      powerMax: '',
      brand: 'all',
      coolingType: 'all',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const hasActiveFilters = 
    filters.search !== '' ||
    filters.laserType !== 'all' ||
    filters.powerMin !== '' ||
    filters.powerMax !== '' ||
    filters.brand !== 'all' ||
    filters.coolingType !== 'all';

  return (
    <Card variant="bordered" className="mb-6">
      <CardContent className="p-6">
        {/* Search Bar - Always Visible */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search equipment by brand or model..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
                />
              </svg>
              {isExpanded ? 'Less Filters' : 'More Filters'}
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={handleReset}>
                Reset
              </Button>
            )}
          </div>

          {/* Advanced Filters - Collapsible */}
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              {/* Laser Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Laser Type
                </label>
                <Select
                  value={filters.laserType}
                  onChange={(e) => handleFilterChange('laserType', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Fiber">Fiber</option>
                  <option value="CO2">CO2</option>
                  <option value="Solid">Solid State</option>
                  <option value="Hybrid">Hybrid</option>
                </Select>
              </div>

              {/* Power Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Power Range (kW)
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={filters.powerMin}
                    onChange={(e) => handleFilterChange('powerMin', e.target.value)}
                    min="0"
                    step="0.5"
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={filters.powerMax}
                    onChange={(e) => handleFilterChange('powerMax', e.target.value)}
                    min="0"
                    step="0.5"
                  />
                </div>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <Select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Cooling Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cooling Type
                </label>
                <Select
                  value={filters.coolingType}
                  onChange={(e) => handleFilterChange('coolingType', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Water">Water</option>
                  <option value="Air">Air</option>
                  <option value="Hybrid">Hybrid</option>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {filters.search && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                  Search: &quot;{filters.search}&quot;
                </span>
              )}
              {filters.laserType !== 'all' && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                  Type: {filters.laserType}
                </span>
              )}
              {(filters.powerMin || filters.powerMax) && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                  Power: {filters.powerMin || '0'}-{filters.powerMax || '∞'} kW
                </span>
              )}
              {filters.brand !== 'all' && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                  Brand: {filters.brand}
                </span>
              )}
              {filters.coolingType !== 'all' && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                  Cooling: {filters.coolingType}
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}











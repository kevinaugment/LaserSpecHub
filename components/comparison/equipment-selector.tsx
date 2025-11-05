'use client';

import { useState, useEffect } from 'react';
import type { LaserEquipment } from '@/types/equipment';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EquipmentSelectorProps {
  allEquipment: LaserEquipment[];
  selectedIds: number[];
  onSelect: (equipment: LaserEquipment) => void;
  maxSelections?: number;
}

export function EquipmentSelector({ 
  allEquipment, 
  selectedIds,
  onSelect,
  maxSelections = 5 
}: EquipmentSelectorProps) {
  const [search, setSearch] = useState('');
  const [filteredEquipment, setFilteredEquipment] = useState(allEquipment);

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredEquipment(allEquipment);
    } else {
      const searchLower = search.toLowerCase();
      setFilteredEquipment(
        allEquipment.filter(
          (eq) =>
            eq.brand.toLowerCase().includes(searchLower) ||
            eq.model.toLowerCase().includes(searchLower) ||
            eq.laser_type.toLowerCase().includes(searchLower)
        )
      );
    }
  }, [search, allEquipment]);

  const availableEquipment = filteredEquipment.filter(
    (eq) => !selectedIds.includes(eq.id)
  );

  const isMaxReached = selectedIds.length >= maxSelections;

  return (
    <div className="space-y-4">
      <div>
        <Input
          type="search"
          placeholder="Search equipment to add..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isMaxReached && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
          Maximum of {maxSelections} equipment items can be compared at once.
        </div>
      )}

      <div className="max-h-96 overflow-y-auto space-y-2">
        {availableEquipment.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {search ? 'No equipment found matching your search' : 'No more equipment available'}
          </div>
        ) : (
          availableEquipment.map((equipment) => (
            <div
              key={equipment.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">
                  {equipment.brand} {equipment.model}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="primary" size="sm">
                    {equipment.laser_type}
                  </Badge>
                  <Badge variant="default" size="sm">
                    {equipment.power_kw} kW
                  </Badge>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onSelect(equipment)}
                disabled={isMaxReached}
              >
                Add
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

































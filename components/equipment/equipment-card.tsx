import Link from 'next/link';
import type { LaserEquipment } from '@/types/equipment';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EquipmentCardProps {
  equipment: LaserEquipment;
  showCompareButton?: boolean;
  isInComparison?: boolean;
  onCompareClick?: (equipment: LaserEquipment) => void;
}

export function EquipmentCard({ 
  equipment, 
  showCompareButton = false,
  isInComparison = false,
  onCompareClick 
}: EquipmentCardProps) {
  const getLaserTypeBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fiber':
        return 'primary';
      case 'co2':
        return 'info';
      case 'solid':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card variant="bordered" className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardContent className="flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {equipment.brand} {equipment.model}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant={getLaserTypeBadgeVariant(equipment.laser_type)} size="sm">
                  {equipment.laser_type}
                </Badge>
                <Badge variant="default" size="sm">
                  {equipment.power_kw} kW
                </Badge>
              </div>
            </div>
          </div>
          
          {equipment.description && (
            <p className="text-sm text-gray-600 line-clamp-2 mt-2">
              {equipment.description}
            </p>
          )}
        </div>

        {/* Specifications Grid */}
        <div className="space-y-2 text-sm">
          {/* Work Area */}
          {equipment.work_area_length && equipment.work_area_width && (
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-600">Work Area:</span>
              <span className="font-medium text-gray-900">
                {equipment.work_area_length} × {equipment.work_area_width} mm
              </span>
            </div>
          )}

          {/* Positioning Accuracy */}
          {equipment.positioning_accuracy && (
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-600">Accuracy:</span>
              <span className="font-medium text-gray-900">
                ±{equipment.positioning_accuracy} mm
              </span>
            </div>
          )}

          {/* Control System */}
          {equipment.control_system && (
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-600">Control:</span>
              <span className="font-medium text-gray-900">
                {equipment.control_system}
              </span>
            </div>
          )}

          {/* Cooling Type */}
          {equipment.cooling_type && (
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-600">Cooling:</span>
              <span className="font-medium text-gray-900">
                {equipment.cooling_type}
              </span>
            </div>
          )}

          {/* Power Consumption */}
          {equipment.power_consumption && (
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-600">Power Usage:</span>
              <span className="font-medium text-gray-900">
                {equipment.power_consumption} kW
              </span>
            </div>
          )}

          {/* Price Range */}
          {equipment.price_range && (
            <div className="flex justify-between items-center py-1 mt-2">
              <span className="text-gray-600">Price Range:</span>
              <span className="font-semibold text-primary-600">
                ${equipment.price_range.replace('-', ' - $')}
              </span>
            </div>
          )}
        </div>

        {/* Applications */}
        {equipment.applications && equipment.applications.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Applications:</p>
            <div className="flex flex-wrap gap-1">
              {equipment.applications.slice(0, 3).map((app, idx) => (
                <Badge key={idx} variant="default" size="sm">
                  {app}
                </Badge>
              ))}
              {equipment.applications.length > 3 && (
                <Badge variant="default" size="sm">
                  +{equipment.applications.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Link href={`/equipment/${equipment.id}`} className="flex-1">
            <Button variant="outline" fullWidth>
              View Details
            </Button>
          </Link>
          {showCompareButton && onCompareClick && (
            <Button
              variant={isInComparison ? 'secondary' : 'primary'}
              onClick={() => onCompareClick(equipment)}
              className="flex-1"
            >
              {isInComparison ? (
                <>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Added
                </>
              ) : (
                'Add to Compare'
              )}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}



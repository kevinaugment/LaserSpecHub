'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface MaterialNavCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const materials: MaterialNavCard[] = [
  {
    id: 'carbon-steel-o2',
    name: 'Mild Steel',
    description: 'Fast oxygen cutting, economical for structural applications',
    icon: '🔩',
    color: 'from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-blue-200 dark:border-blue-800',
  },
  {
    id: 'stainless-steel-n2',
    name: 'Stainless Steel',
    description: 'High-quality nitrogen cutting for oxide-free edges',
    icon: '✨',
    color: 'from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-purple-200 dark:border-purple-800',
  },
  {
    id: 'aluminum-n2',
    name: 'Aluminum Alloy',
    description: 'Specialized parameters for high-reflectivity materials',
    icon: '⚡',
    color: 'from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border-orange-200 dark:border-orange-800',
  },
];

export function MaterialQuickNav() {
  const scrollToMaterial = (materialId: string) => {
    const element = document.getElementById(materialId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      {materials.map((material) => (
        <Card
          key={material.id}
          className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 bg-gradient-to-br ${material.color}`}
          onClick={() => scrollToMaterial(material.id)}
        >
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{material.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                  {material.name}
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {material.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


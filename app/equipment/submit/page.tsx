import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import EquipmentSubmitForm from '@/components/equipment/equipment-submit-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Submit Equipment Information',
  description: 'Submit new laser equipment specifications to help improve our database. All submissions are reviewed by our team.',
  path: '/equipment/submit',
  keywords: ['submit equipment', 'equipment database', 'laser specifications', 'add equipment'],
});

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Submit Equipment Information</CardTitle>
        </CardHeader>
        <CardContent>
          <EquipmentSubmitForm />
        </CardContent>
      </Card>
    </div>
  );
}













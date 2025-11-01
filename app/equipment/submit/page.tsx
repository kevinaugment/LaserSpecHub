import EquipmentSubmitForm from '@/components/equipment/equipment-submit-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Submit Equipment - LaserSpecHub',
  description: 'Submit new laser equipment specifications to help improve our database',
};

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













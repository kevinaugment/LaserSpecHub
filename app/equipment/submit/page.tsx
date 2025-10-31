import EquipmentSubmitForm from '@/components/equipment/equipment-submit-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: '提交设备 - LaserSpecHub',
  description: '提交新的激光设备规格信息，帮助完善数据库',
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>提交设备信息</CardTitle>
        </CardHeader>
        <CardContent>
          <EquipmentSubmitForm />
        </CardContent>
      </Card>
    </div>
  );
}







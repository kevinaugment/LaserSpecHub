"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/admin/admin-nav';
import { EquipmentForm } from '@/components/admin/equipment-form';

export default function AdminEquipmentNewPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    const response = await fetch('/api/equipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      alert('设备创建成功！');
      router.push('/admin/equipment');
    } else {
      throw new Error(result.error || '创建失败');
    }
  };

  const handleCancel = () => {
    router.push('/admin/equipment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNav />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">新增设备</h1>
              <p className="text-sm text-gray-600 mt-1">添加新的激光设备到数据库</p>
            </div>
            <Link href="/admin/equipment">
              <Button variant="outline" className="text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                返回列表
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>设备信息</CardTitle>
          </CardHeader>
          <CardContent>
            <EquipmentForm
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

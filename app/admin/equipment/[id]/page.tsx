"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/admin/admin-nav';
import { EquipmentForm } from '@/components/admin/equipment-form';
import type { LaserEquipment } from '@/types/equipment';

export default function AdminEquipmentEditPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [equipment, setEquipment] = useState<LaserEquipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadEquipment();
  }, [id]);

  const loadEquipment = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/equipment/${id}?includeInactive=true`);
      const result = await response.json();
      
      if (result.success) {
        setEquipment(result.data);
      } else {
        setError(result.error || '加载失败');
      }
    } catch (err: any) {
      setError(err.message || '加载失败');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any) => {
    const response = await fetch(`/api/equipment/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      alert('设备更新成功！');
      router.push('/admin/equipment');
    } else {
      throw new Error(result.error || '更新失败');
    }
  };

  const handleCancel = () => {
    router.push('/admin/equipment');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !equipment) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <Link href="/admin/equipment">
                <Button>返回设备列表</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNav />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">编辑设备</h1>
              <p className="text-sm text-gray-600 mt-1">
                {equipment ? `${equipment.brand} ${equipment.model}` : '设备ID: ' + id}
              </p>
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
            {equipment && (
              <EquipmentForm
                equipment={equipment}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

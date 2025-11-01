"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { AdminNav } from '@/components/admin/admin-nav';
import type { LaserEquipment } from '@/types/equipment';

export default function AdminEquipmentPage() {
  const [equipment, setEquipment] = useState<LaserEquipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  
  // 筛选条件
  const [filters, setFilters] = useState({
    search: '',
    laserType: 'all',
    brand: 'all',
    showInactive: false,
  });

  // 加载设备列表
  const loadEquipment = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams();
      params.set('page', page.toString());
      params.set('pageSize', pageSize.toString());
      
      if (filters.search) params.set('search', filters.search);
      if (filters.laserType !== 'all') params.set('laserType', filters.laserType);
      if (filters.brand !== 'all') params.set('brand', filters.brand);
      if (filters.showInactive) params.set('includeInactive', 'true');

      const response = await fetch(`/api/equipment?${params.toString()}`);
      const result = await response.json();
      
      if (result.success) {
        setEquipment(result.data || []);
        setTotalCount(result.count || 0);
      } else {
        setError(result.error || '加载失败');
      }
    } catch (err: any) {
      setError(err.message || '加载失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEquipment();
  }, [page, pageSize, filters]);

  // 获取品牌列表
  const [brands, setBrands] = useState<string[]>([]);
  useEffect(() => {
    fetch('/api/equipment?pageSize=1000')
      .then(res => res.json())
      .then(result => {
        if (result.success && result.data) {
          const brandList = result.data.map((e: LaserEquipment) => e.brand).filter((b: unknown): b is string => typeof b === 'string' && b.length > 0);
          const uniqueBrands = Array.from(new Set(brandList)).sort() as string[];
          setBrands(uniqueBrands);
        }
      });
  }, []);

  // 批量操作
  const handleBatchAction = async (action: 'delete' | 'activate' | 'deactivate') => {
    if (selectedIds.length === 0) {
      alert('请先选择要操作的设备');
      return;
    }

    if (!confirm(`确定要${action === 'delete' ? '删除' : action === 'activate' ? '启用' : '禁用'}选中的 ${selectedIds.length} 个设备吗？`)) {
      return;
    }

    try {
      const response = await fetch('/api/admin/equipment/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, action }),
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        setSelectedIds([]);
        loadEquipment();
      } else {
        alert(result.error || '操作失败');
      }
    } catch (err: any) {
      alert('操作失败：' + err.message);
    }
  };

  // 删除单个设备
  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这个设备吗？')) return;

    try {
      const response = await fetch(`/api/equipment/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        loadEquipment();
      } else {
        alert(result.error || '删除失败');
      }
    } catch (err: any) {
      alert('删除失败：' + err.message);
    }
  };

  // 切换设备状态
  const handleToggleStatus = async (equipment: LaserEquipment) => {
    try {
      const response = await fetch(`/api/equipment/${equipment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...equipment,
          is_active: !equipment.is_active,
        }),
      });

      const result = await response.json();
      if (result.success) {
        loadEquipment();
      } else {
        alert(result.error || '操作失败');
      }
    } catch (err: any) {
      alert('操作失败：' + err.message);
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNav />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">设备管理</h1>
              <p className="text-sm text-gray-600 mt-1">管理所有激光设备数据</p>
            </div>
            <div className="flex gap-3">
              <Link href="/admin/equipment/new">
                <Button className="text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  新增设备
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            ❌ {error}
          </div>
        )}

        {/* 筛选栏 */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">搜索</label>
                <Input
                  placeholder="品牌、型号、描述..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setPage(1);
                      loadEquipment();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">激光类型</label>
                <Select
                  value={filters.laserType}
                  onChange={(e) => setFilters({ ...filters, laserType: e.target.value })}
                >
                  <option value="all">全部</option>
                  <option value="Fiber">Fiber</option>
                  <option value="CO2">CO2</option>
                  <option value="Solid">Solid</option>
                  <option value="Hybrid">Hybrid</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">品牌</label>
                <Select
                  value={filters.brand}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                >
                  <option value="all">全部</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </Select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.showInactive}
                    onChange={(e) => setFilters({ ...filters, showInactive: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">显示已禁用</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 批量操作栏 */}
        {selectedIds.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
            <span className="text-sm text-blue-900">
              已选择 <strong>{selectedIds.length}</strong> 个设备
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBatchAction('activate')}
              >
                启用
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBatchAction('deactivate')}
              >
                禁用
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleBatchAction('delete')}
              >
                删除
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedIds([])}
              >
                取消选择
              </Button>
            </div>
          </div>
        )}

        {/* 设备列表 */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : equipment.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-600">没有找到设备</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              共 {totalCount} 个设备，第 {page} / {totalPages} 页
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedIds.length === equipment.length && equipment.length > 0}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds(equipment.map(e => e.id));
                          } else {
                            setSelectedIds([]);
                          }
                        }}
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">品牌</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">型号</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">类型</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">功率(kW)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {equipment.map((item) => (
                    <tr key={item.id} className={!item.is_active ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(item.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedIds([...selectedIds, item.id]);
                            } else {
                              setSelectedIds(selectedIds.filter(id => id !== item.id));
                            }
                          }}
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.id}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.brand}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.model}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <Badge variant={
                          item.laser_type === 'Fiber' ? 'primary' :
                          item.laser_type === 'CO2' ? 'info' :
                          item.laser_type === 'Solid' ? 'success' : 'default'
                        }>
                          {item.laser_type}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.power_kw} kW</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge variant={item.is_active ? 'success' : 'warning'}>
                          {item.is_active ? '启用' : '禁用'}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Link href={`/admin/equipment/${item.id}`}>
                            <Button variant="ghost" size="sm">编辑</Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(item)}
                          >
                            {item.is_active ? '禁用' : '启用'}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            删除
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 分页 */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  显示 {((page - 1) * pageSize) + 1} - {Math.min(page * pageSize, totalCount)} 条，共 {totalCount} 条
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    上一页
                  </Button>
                  <span className="flex items-center px-4 text-sm text-gray-700">
                    第 {page} / {totalPages} 页
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    下一页
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

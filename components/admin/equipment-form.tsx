"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ImageUpload } from '@/components/equipment/image-upload';
import type { LaserEquipment } from '@/types/equipment';

interface EquipmentFormProps {
  equipment?: LaserEquipment;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

export function EquipmentForm({ equipment, onSubmit, onCancel }: EquipmentFormProps) {
  const [formData, setFormData] = useState<any>({
    brand: '',
    model: '',
    laser_type: 'Fiber',
    power_kw: '',
    work_area_length: '',
    work_area_width: '',
    positioning_accuracy: '',
    repeat_accuracy: '',
    beam_quality: '',
    wavelength: '',
    control_system: '',
    cooling_type: 'Water',
    power_consumption: '',
    weight: '',
    price_range: '',
    manufacturer_url: '',
    spec_sheet_url: '',
    image_url: '',
    description: '',
    origin_country: '',
    is_active: true,
    // JSON字段
    max_cutting_thickness_json: '',
    cutting_speed_json: '',
    dimensions_json: '',
    applications_json: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 加载设备数据
  useEffect(() => {
    if (equipment) {
      setFormData({
        brand: equipment.brand || '',
        model: equipment.model || '',
        laser_type: equipment.laser_type || 'Fiber',
        power_kw: equipment.power_kw || '',
        work_area_length: equipment.work_area_length || '',
        work_area_width: equipment.work_area_width || '',
        positioning_accuracy: equipment.positioning_accuracy || '',
        repeat_accuracy: equipment.repeat_accuracy || '',
        beam_quality: equipment.beam_quality || '',
        wavelength: equipment.wavelength || '',
        control_system: equipment.control_system || '',
        cooling_type: equipment.cooling_type || 'Water',
        power_consumption: equipment.power_consumption || '',
        weight: equipment.weight || '',
        price_range: equipment.price_range || '',
        manufacturer_url: equipment.manufacturer_url || '',
        spec_sheet_url: equipment.spec_sheet_url || '',
        image_url: equipment.image_url || '',
        description: equipment.description || '',
        origin_country: equipment.origin_country || '',
        is_active: equipment.is_active !== undefined ? equipment.is_active : true,
        max_cutting_thickness_json: equipment.max_cutting_thickness
          ? JSON.stringify(equipment.max_cutting_thickness, null, 2)
          : '',
        cutting_speed_json: equipment.cutting_speed
          ? JSON.stringify(equipment.cutting_speed, null, 2)
          : '',
        dimensions_json: equipment.dimensions
          ? JSON.stringify(equipment.dimensions, null, 2)
          : '',
        applications_json: equipment.applications
          ? JSON.stringify(equipment.applications, null, 2)
          : '',
      });
    }
  }, [equipment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 验证必填字段
      if (!formData.brand || !formData.model || !formData.laser_type || !formData.power_kw) {
        throw new Error('请填写必填字段：品牌、型号、激光类型、功率');
      }

      // 解析JSON字段
      let max_cutting_thickness = null;
      let cutting_speed = null;
      let dimensions = null;
      let applications = null;

      if (formData.max_cutting_thickness_json.trim()) {
        try {
          max_cutting_thickness = JSON.parse(formData.max_cutting_thickness_json);
        } catch {
          throw new Error('最大切割厚度JSON格式错误');
        }
      }

      if (formData.cutting_speed_json.trim()) {
        try {
          cutting_speed = JSON.parse(formData.cutting_speed_json);
        } catch {
          throw new Error('切割速度JSON格式错误');
        }
      }

      if (formData.dimensions_json.trim()) {
        try {
          dimensions = JSON.parse(formData.dimensions_json);
        } catch {
          throw new Error('尺寸JSON格式错误');
        }
      }

      if (formData.applications_json.trim()) {
        try {
          applications = JSON.parse(formData.applications_json);
        } catch {
          throw new Error('应用领域JSON格式错误');
        }
      }

      // 构建提交数据
      const submitData: any = {
        brand: formData.brand,
        model: formData.model,
        laser_type: formData.laser_type,
        power_kw: Number(formData.power_kw),
        work_area_length: formData.work_area_length ? Number(formData.work_area_length) : null,
        work_area_width: formData.work_area_width ? Number(formData.work_area_width) : null,
        positioning_accuracy: formData.positioning_accuracy ? Number(formData.positioning_accuracy) : null,
        repeat_accuracy: formData.repeat_accuracy ? Number(formData.repeat_accuracy) : null,
        beam_quality: formData.beam_quality ? Number(formData.beam_quality) : null,
        wavelength: formData.wavelength ? Number(formData.wavelength) : null,
        control_system: formData.control_system || null,
        cooling_type: formData.cooling_type || null,
        power_consumption: formData.power_consumption ? Number(formData.power_consumption) : null,
        weight: formData.weight ? Number(formData.weight) : null,
        price_range: formData.price_range || null,
        manufacturer_url: formData.manufacturer_url || null,
        spec_sheet_url: formData.spec_sheet_url || null,
        image_url: formData.image_url || null,
        description: formData.description || null,
        origin_country: formData.origin_country || null,
        is_active: formData.is_active,
        max_cutting_thickness,
        cutting_speed,
        dimensions,
        applications,
      };

      await onSubmit(submitData);
    } catch (err: any) {
      setError(err.message || '提交失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          ❌ {error}
        </div>
      )}

      {/* 基本信息 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">基本信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">品牌 *</label>
            <Input
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">型号 *</label>
            <Input
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">激光类型 *</label>
            <Select
              value={formData.laser_type}
              onChange={(e) => setFormData({ ...formData, laser_type: e.target.value })}
              required
            >
              <option value="Fiber">Fiber</option>
              <option value="CO2">CO2</option>
              <option value="Solid">Solid</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">功率 (kW) *</label>
            <Input
              type="number"
              step="0.1"
              value={formData.power_kw}
              onChange={(e) => setFormData({ ...formData, power_kw: e.target.value })}
              required
            />
          </div>
        </div>
      </div>

      {/* 工作区域 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">工作区域</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">长度 (mm)</label>
            <Input
              type="number"
              value={formData.work_area_length}
              onChange={(e) => setFormData({ ...formData, work_area_length: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">宽度 (mm)</label>
            <Input
              type="number"
              value={formData.work_area_width}
              onChange={(e) => setFormData({ ...formData, work_area_width: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* 技术参数 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">技术参数</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">定位精度 (mm)</label>
            <Input
              type="number"
              step="0.001"
              value={formData.positioning_accuracy}
              onChange={(e) => setFormData({ ...formData, positioning_accuracy: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">重复精度 (mm)</label>
            <Input
              type="number"
              step="0.001"
              value={formData.repeat_accuracy}
              onChange={(e) => setFormData({ ...formData, repeat_accuracy: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">光束质量 (M²)</label>
            <Input
              type="number"
              step="0.01"
              value={formData.beam_quality}
              onChange={(e) => setFormData({ ...formData, beam_quality: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">波长 (nm)</label>
            <Input
              type="number"
              value={formData.wavelength}
              onChange={(e) => setFormData({ ...formData, wavelength: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">控制系统</label>
            <Input
              value={formData.control_system}
              onChange={(e) => setFormData({ ...formData, control_system: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">冷却类型</label>
            <Select
              value={formData.cooling_type}
              onChange={(e) => setFormData({ ...formData, cooling_type: e.target.value })}
            >
              <option value="Water">Water</option>
              <option value="Air">Air</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Other">Other</option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">功耗 (kW)</label>
            <Input
              type="number"
              step="0.1"
              value={formData.power_consumption}
              onChange={(e) => setFormData({ ...formData, power_consumption: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">重量 (kg)</label>
            <Input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* JSON字段 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">JSON数据字段</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">最大切割厚度 (JSON)</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 font-mono text-sm"
              rows={4}
              value={formData.max_cutting_thickness_json}
              onChange={(e) => setFormData({ ...formData, max_cutting_thickness_json: e.target.value })}
              placeholder='{"steel": 20, "aluminum": 12, "stainless": 15}'
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">切割速度 (JSON)</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 font-mono text-sm"
              rows={4}
              value={formData.cutting_speed_json}
              onChange={(e) => setFormData({ ...formData, cutting_speed_json: e.target.value })}
              placeholder='{"steel_10mm": 2.8, "aluminum_5mm": 5.2}'
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">尺寸 (JSON)</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 font-mono text-sm"
              rows={3}
              value={formData.dimensions_json}
              onChange={(e) => setFormData({ ...formData, dimensions_json: e.target.value })}
              placeholder='{"length": 6800, "width": 2600, "height": 2100}'
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">应用领域 (JSON数组)</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 font-mono text-sm"
              rows={3}
              value={formData.applications_json}
              onChange={(e) => setFormData({ ...formData, applications_json: e.target.value })}
              placeholder='["Sheet metal fabrication", "Automotive parts"]'
            />
          </div>
        </div>
      </div>

      {/* 其他信息 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">其他信息</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">价格范围</label>
            <Input
              value={formData.price_range}
              onChange={(e) => setFormData({ ...formData, price_range: e.target.value })}
              placeholder="50000-75000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">原产国</label>
            <Input
              value={formData.origin_country}
              onChange={(e) => setFormData({ ...formData, origin_country: e.target.value })}
              placeholder="CN, DE, US"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">制造商网站</label>
            <Input
              type="url"
              value={formData.manufacturer_url}
              onChange={(e) => setFormData({ ...formData, manufacturer_url: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">规格表URL</label>
            <Input
              type="url"
              value={formData.spec_sheet_url}
              onChange={(e) => setFormData({ ...formData, spec_sheet_url: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">图片URL</label>
            <Input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">状态</label>
            <Select
              value={formData.is_active ? '1' : '0'}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.value === '1' })}
            >
              <option value="1">启用</option>
              <option value="0">禁用</option>
            </Select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
      </div>

      {/* Image Upload Section (for existing equipment only) */}
      {equipment && equipment.id && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Images</h3>
          <ImageUpload equipmentId={equipment.id} />
        </div>
      )}

      {/* 提交按钮 */}
      <div className="flex items-center gap-4 pt-4 border-t">
        <Button type="submit" disabled={loading}>
          {loading ? '保存中...' : equipment ? '更新设备' : '创建设备'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          取消
        </Button>
        {!equipment && (
          <p className="text-sm text-gray-600 ml-4">
            Note: Save the equipment first to upload images
          </p>
        )}
      </div>
    </form>
  );
}



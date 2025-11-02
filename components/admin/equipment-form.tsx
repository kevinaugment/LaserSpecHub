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
    // 切割厚度独立字段 (mm)
    max_thickness_steel: '',
    max_thickness_aluminum: '',
    max_thickness_stainless: '',
    max_thickness_copper: '',
    max_thickness_brass: '',
    max_thickness_acrylic: '',
    max_thickness_wood: '',
    max_thickness_mdf: '',
    max_thickness_fabric: '',
    max_thickness_leather: '',
    max_thickness_titanium: '',
    max_thickness_nickel: '',
    // 切割速度独立字段 (m/min)
    cutting_speed_steel_5mm: '',
    cutting_speed_steel_10mm: '',
    cutting_speed_steel_20mm: '',
    cutting_speed_aluminum_5mm: '',
    cutting_speed_aluminum_10mm: '',
    cutting_speed_stainless_5mm: '',
    cutting_speed_stainless_10mm: '',
    cutting_speed_copper_5mm: '',
    cutting_speed_brass_5mm: '',
    cutting_speed_acrylic_5mm: '',
    cutting_speed_wood_5mm: '',
    cutting_speed_mdf_5mm: '',
    // 尺寸独立字段 (mm)
    dimension_length: '',
    dimension_width: '',
    dimension_height: '',
    // 应用领域（逗号分隔的字符串）
    applications_text: '',
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
        // 切割厚度
        max_thickness_steel: equipment.max_thickness_steel || '',
        max_thickness_aluminum: equipment.max_thickness_aluminum || '',
        max_thickness_stainless: equipment.max_thickness_stainless || '',
        max_thickness_copper: equipment.max_thickness_copper || '',
        max_thickness_brass: equipment.max_thickness_brass || '',
        max_thickness_acrylic: equipment.max_thickness_acrylic || '',
        max_thickness_wood: equipment.max_thickness_wood || '',
        max_thickness_mdf: equipment.max_thickness_mdf || '',
        max_thickness_fabric: equipment.max_thickness_fabric || '',
        max_thickness_leather: equipment.max_thickness_leather || '',
        max_thickness_titanium: equipment.max_thickness_titanium || '',
        max_thickness_nickel: equipment.max_thickness_nickel || '',
        // 切割速度
        cutting_speed_steel_5mm: equipment.cutting_speed_steel_5mm || '',
        cutting_speed_steel_10mm: equipment.cutting_speed_steel_10mm || '',
        cutting_speed_steel_20mm: equipment.cutting_speed_steel_20mm || '',
        cutting_speed_aluminum_5mm: equipment.cutting_speed_aluminum_5mm || '',
        cutting_speed_aluminum_10mm: equipment.cutting_speed_aluminum_10mm || '',
        cutting_speed_stainless_5mm: equipment.cutting_speed_stainless_5mm || '',
        cutting_speed_stainless_10mm: equipment.cutting_speed_stainless_10mm || '',
        cutting_speed_copper_5mm: equipment.cutting_speed_copper_5mm || '',
        cutting_speed_brass_5mm: equipment.cutting_speed_brass_5mm || '',
        cutting_speed_acrylic_5mm: equipment.cutting_speed_acrylic_5mm || '',
        cutting_speed_wood_5mm: equipment.cutting_speed_wood_5mm || '',
        cutting_speed_mdf_5mm: equipment.cutting_speed_mdf_5mm || '',
        // 尺寸
        dimension_length: equipment.dimension_length || '',
        dimension_width: equipment.dimension_width || '',
        dimension_height: equipment.dimension_height || '',
        // 应用领域
        applications_text: Array.isArray(equipment.applications) 
          ? equipment.applications.join(', ') 
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

      // 辅助函数：将表单值转换为数字或null
      const toNum = (val: any) => {
        if (val === '' || val === null || val === undefined) return null;
        const n = Number(val);
        return Number.isFinite(n) ? n : null;
      };

      // 解析应用领域（逗号分隔的字符串转数组）
      const applicationsArray = formData.applications_text
        ? formData.applications_text.split(',').map((s: string) => s.trim()).filter(Boolean)
        : [];

      // 构建提交数据
      const submitData: any = {
        brand: formData.brand,
        model: formData.model,
        laser_type: formData.laser_type,
        power_kw: Number(formData.power_kw),
        work_area_length: toNum(formData.work_area_length),
        work_area_width: toNum(formData.work_area_width),
        positioning_accuracy: toNum(formData.positioning_accuracy),
        repeat_accuracy: toNum(formData.repeat_accuracy),
        beam_quality: toNum(formData.beam_quality),
        wavelength: toNum(formData.wavelength),
        control_system: formData.control_system || null,
        cooling_type: formData.cooling_type || null,
        power_consumption: toNum(formData.power_consumption),
        weight: toNum(formData.weight),
        price_range: formData.price_range || null,
        manufacturer_url: formData.manufacturer_url || null,
        spec_sheet_url: formData.spec_sheet_url || null,
        image_url: formData.image_url || null,
        description: formData.description || null,
        origin_country: formData.origin_country || null,
        is_active: formData.is_active,
        // 切割厚度独立字段
        max_thickness_steel: toNum(formData.max_thickness_steel),
        max_thickness_aluminum: toNum(formData.max_thickness_aluminum),
        max_thickness_stainless: toNum(formData.max_thickness_stainless),
        max_thickness_copper: toNum(formData.max_thickness_copper),
        max_thickness_brass: toNum(formData.max_thickness_brass),
        max_thickness_acrylic: toNum(formData.max_thickness_acrylic),
        max_thickness_wood: toNum(formData.max_thickness_wood),
        max_thickness_mdf: toNum(formData.max_thickness_mdf),
        max_thickness_fabric: toNum(formData.max_thickness_fabric),
        max_thickness_leather: toNum(formData.max_thickness_leather),
        max_thickness_titanium: toNum(formData.max_thickness_titanium),
        max_thickness_nickel: toNum(formData.max_thickness_nickel),
        // 切割速度独立字段
        cutting_speed_steel_5mm: toNum(formData.cutting_speed_steel_5mm),
        cutting_speed_steel_10mm: toNum(formData.cutting_speed_steel_10mm),
        cutting_speed_steel_20mm: toNum(formData.cutting_speed_steel_20mm),
        cutting_speed_aluminum_5mm: toNum(formData.cutting_speed_aluminum_5mm),
        cutting_speed_aluminum_10mm: toNum(formData.cutting_speed_aluminum_10mm),
        cutting_speed_stainless_5mm: toNum(formData.cutting_speed_stainless_5mm),
        cutting_speed_stainless_10mm: toNum(formData.cutting_speed_stainless_10mm),
        cutting_speed_copper_5mm: toNum(formData.cutting_speed_copper_5mm),
        cutting_speed_brass_5mm: toNum(formData.cutting_speed_brass_5mm),
        cutting_speed_acrylic_5mm: toNum(formData.cutting_speed_acrylic_5mm),
        cutting_speed_wood_5mm: toNum(formData.cutting_speed_wood_5mm),
        cutting_speed_mdf_5mm: toNum(formData.cutting_speed_mdf_5mm),
        // 尺寸独立字段
        dimension_length: toNum(formData.dimension_length),
        dimension_width: toNum(formData.dimension_width),
        dimension_height: toNum(formData.dimension_height),
        // 应用领域
        applications: applicationsArray,
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

      {/* 切割厚度 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">最大切割厚度 (mm)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">钢材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_steel}
              onChange={(e) => setFormData({ ...formData, max_thickness_steel: e.target.value })}
              placeholder="20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铝材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_aluminum}
              onChange={(e) => setFormData({ ...formData, max_thickness_aluminum: e.target.value })}
              placeholder="12"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">不锈钢</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_stainless}
              onChange={(e) => setFormData({ ...formData, max_thickness_stainless: e.target.value })}
              placeholder="15"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铜材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_copper}
              onChange={(e) => setFormData({ ...formData, max_thickness_copper: e.target.value })}
              placeholder="8"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">黄铜</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_brass}
              onChange={(e) => setFormData({ ...formData, max_thickness_brass: e.target.value })}
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">亚克力</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_acrylic}
              onChange={(e) => setFormData({ ...formData, max_thickness_acrylic: e.target.value })}
              placeholder="25"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">木材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_wood}
              onChange={(e) => setFormData({ ...formData, max_thickness_wood: e.target.value })}
              placeholder="20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">MDF</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_mdf}
              onChange={(e) => setFormData({ ...formData, max_thickness_mdf: e.target.value })}
              placeholder="18"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">织物</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_fabric}
              onChange={(e) => setFormData({ ...formData, max_thickness_fabric: e.target.value })}
              placeholder="5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">皮革</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_leather}
              onChange={(e) => setFormData({ ...formData, max_thickness_leather: e.target.value })}
              placeholder="8"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">钛材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_titanium}
              onChange={(e) => setFormData({ ...formData, max_thickness_titanium: e.target.value })}
              placeholder="6"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">镍材</label>
            <Input
              type="number"
              step="0.1"
              value={formData.max_thickness_nickel}
              onChange={(e) => setFormData({ ...formData, max_thickness_nickel: e.target.value })}
              placeholder="5"
            />
          </div>
        </div>
      </div>

      {/* 切割速度 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">切割速度 (m/min)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">钢材 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_steel_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_steel_5mm: e.target.value })}
              placeholder="3.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">钢材 10mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_steel_10mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_steel_10mm: e.target.value })}
              placeholder="2.8"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">钢材 20mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_steel_20mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_steel_20mm: e.target.value })}
              placeholder="1.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铝材 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_aluminum_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_aluminum_5mm: e.target.value })}
              placeholder="5.2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铝材 10mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_aluminum_10mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_aluminum_10mm: e.target.value })}
              placeholder="4.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">不锈钢 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_stainless_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_stainless_5mm: e.target.value })}
              placeholder="3.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">不锈钢 10mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_stainless_10mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_stainless_10mm: e.target.value })}
              placeholder="2.2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">铜材 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_copper_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_copper_5mm: e.target.value })}
              placeholder="4.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">黄铜 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_brass_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_brass_5mm: e.target.value })}
              placeholder="4.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">亚克力 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_acrylic_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_acrylic_5mm: e.target.value })}
              placeholder="15.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">木材 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_wood_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_wood_5mm: e.target.value })}
              placeholder="20.0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">MDF 5mm</label>
            <Input
              type="number"
              step="0.1"
              value={formData.cutting_speed_mdf_5mm}
              onChange={(e) => setFormData({ ...formData, cutting_speed_mdf_5mm: e.target.value })}
              placeholder="18.0"
            />
          </div>
        </div>
      </div>

      {/* 尺寸 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">设备尺寸 (mm)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">长度</label>
            <Input
              type="number"
              value={formData.dimension_length}
              onChange={(e) => setFormData({ ...formData, dimension_length: e.target.value })}
              placeholder="6800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">宽度</label>
            <Input
              type="number"
              value={formData.dimension_width}
              onChange={(e) => setFormData({ ...formData, dimension_width: e.target.value })}
              placeholder="2600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">高度</label>
            <Input
              type="number"
              value={formData.dimension_height}
              onChange={(e) => setFormData({ ...formData, dimension_height: e.target.value })}
              placeholder="2100"
            />
          </div>
        </div>
      </div>

      {/* 应用领域 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">应用领域</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            应用领域（逗号分隔）
          </label>
          <Input
            value={formData.applications_text}
            onChange={(e) => setFormData({ ...formData, applications_text: e.target.value })}
            placeholder="Sheet metal fabrication, Automotive parts, Electronics manufacturing"
          />
          <p className="text-xs text-gray-500 mt-1">请用英文逗号分隔多个应用领域</p>
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



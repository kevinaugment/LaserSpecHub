"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function EquipmentSubmitForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const payload: any = {
        brand: formData.get('brand'),
        model: formData.get('model'),
        laser_type: formData.get('laser_type'),
        power_kw: formData.get('power_kw') ? Number(formData.get('power_kw')) : null,
        work_area_length: formData.get('work_area_length') ? Number(formData.get('work_area_length')) : null,
        work_area_width: formData.get('work_area_width') ? Number(formData.get('work_area_width')) : null,
        origin_country: formData.get('origin_country') || null,
        manufacturer_url: formData.get('manufacturer_url') || null,
        spec_sheet_url: formData.get('spec_sheet_url') || null,
        image_url: formData.get('image_url') || null,
        description: formData.get('description') || null,
        submitter_name: formData.get('submitter_name') || null,
        submitter_email: formData.get('submitter_email') || null,
        source_url: formData.get('source_url') || null,
      };

      const res = await fetch('/api/equipment/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || '提交失败');
      }
      setSuccess('提交成功，等待审核。');
    } catch (e: any) {
      setError(e.message || '提交失败');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="space-y-4 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(new FormData(e.currentTarget));
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">品牌*</label>
          <Input name="brand" required placeholder="如：OPMT" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">型号*</label>
          <Input name="model" required placeholder="如：FL-6000" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">激光类型*</label>
          <Select name="laser_type" required>
            <option value="">-- 选择 --</option>
            <option value="Fiber">Fiber</option>
            <option value="CO2">CO2</option>
            <option value="Solid">Solid</option>
            <option value="Hybrid">Hybrid</option>
          </Select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">功率(kW)</label>
          <Input name="power_kw" type="number" step="0.1" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">工作区长度(mm)</label>
          <Input name="work_area_length" type="number" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">工作区宽度(mm)</label>
          <Input name="work_area_width" type="number" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">原产地(国家)</label>
          <Input name="origin_country" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">价格区间</label>
          <Input name="price_range" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">制造商页面URL</label>
        <Input name="manufacturer_url" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">规格书URL</label>
        <Input name="spec_sheet_url" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">图片URL</label>
        <Input name="image_url" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">描述</label>
        <Input name="description" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">提交人姓名</label>
          <Input name="submitter_name" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">提交人邮箱</label>
          <Input name="submitter_email" type="email" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">数据来源URL</label>
        <Input name="source_url" />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>{loading ? '提交中...' : '提交设备'}</Button>
        {success && <span className="text-green-600 text-sm">{success}</span>}
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </div>
    </form>
  );
}







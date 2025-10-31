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
        <Input name="brand" label="品牌*" required placeholder="如：OPMT" />
        <Input name="model" label="型号*" required placeholder="如：FL-6000" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select name="laser_type" label="激光类型*" required options={[
          { value: 'Fiber', label: 'Fiber' },
          { value: 'CO2', label: 'CO2' },
          { value: 'Solid', label: 'Solid' },
          { value: 'Hybrid', label: 'Hybrid' },
        ]} />
        <Input name="power_kw" type="number" step="0.1" label="功率(kW)" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="work_area_length" type="number" label="工作区长度(mm)" />
        <Input name="work_area_width" type="number" label="工作区宽度(mm)" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="origin_country" label="原产地(国家)" />
        <Input name="price_range" label="价格区间" />
      </div>
      <Input name="manufacturer_url" label="制造商页面URL" />
      <Input name="spec_sheet_url" label="规格书URL" />
      <Input name="image_url" label="图片URL" />
      <Input name="description" label="描述" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="submitter_name" label="提交人姓名" />
        <Input name="submitter_email" type="email" label="提交人邮箱" />
      </div>
      <Input name="source_url" label="数据来源URL" />

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>{loading ? '提交中...' : '提交设备'}</Button>
        {success && <span className="text-green-600 text-sm">{success}</span>}
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </div>
    </form>
  );
}







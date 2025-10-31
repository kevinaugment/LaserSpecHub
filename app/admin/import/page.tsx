"use client";
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [csv, setCsv] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sample = 'brand,model,laser_type,power_kw,work_area_length,work_area_width,max_cutting_thickness,cutting_speed,positioning_accuracy,repeat_accuracy,beam_quality,wavelength,control_system,cooling_type,power_consumption,dimensions,weight,price_range,manufacturer_url,spec_sheet_url,image_url,description,applications,origin_country\n' +
    'TRUMPF,TruLaser 5030,Fiber,5,3000,1500,"{\\"steel\\":20,\\"stainless\\":16}","{\\"steel_10mm\\":3}",0.025,0.015,1.75,1070,Siemens 840D,Water,48,"{\\"length\\":7500,\\"width\\":2900,\\"height\\":2300}",5800,"150000-190000",https://www.trumpf.com/,https://www.trumpf.com/,https://example.com/t.jpg,Premium German fiber laser,"[\\"Aerospace\\",\\"Defense\\"]",DE';

  async function upload() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/admin/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csv }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || '导入失败');
      setResult(`导入成功：${json.inserted} 条`);
    } catch (e: any) {
      setResult(e.message || '导入失败');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>批量导入设备（CSV）</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 text-sm text-gray-600">CSV 示例（包含JSON字段需转义双引号）：</div>
          <pre className="p-3 bg-gray-50 rounded text-xs overflow-auto mb-4">{sample}</pre>
          <textarea
            className="w-full h-64 p-3 border rounded mb-3 font-mono text-xs"
            placeholder="粘贴CSV内容..."
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <Button onClick={upload} disabled={loading}>{loading ? '导入中...' : '导入'}</Button>
            {result && <span className="text-sm">{result}</span>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}







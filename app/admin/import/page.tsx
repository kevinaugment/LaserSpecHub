"use client";
import { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/admin/admin-nav';

interface ParsedRow {
  brand: string;
  model: string;
  laser_type: string;
  power_kw: string | number;
  [key: string]: any;
}

interface ValidationError {
  row: number;
  field: string;
  value: any;
  message: string;
}

export default function Page() {
  const [csv, setCsv] = useState('');
  const [previewData, setPreviewData] = useState<ParsedRow[]>([]);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 完整的CSV模板（包含多个示例数据）
  const csvTemplate = `brand,model,laser_type,power_kw,work_area_length,work_area_width,max_cutting_thickness,cutting_speed,positioning_accuracy,repeat_accuracy,beam_quality,wavelength,control_system,cooling_type,power_consumption,dimensions,weight,price_range,manufacturer_url,spec_sheet_url,image_url,description,applications,origin_country
TRUMPF,TruLaser 5030,Fiber,5,3000,1500,"{\\"steel\\":20,\\"stainless\\":16,\\"aluminum\\":12}","{\\"steel_10mm\\":3.0,\\"steel_5mm\\":6.5}",0.025,0.015,1.75,1070,Siemens 840D,Water,48,"{\\"length\\":7500,\\"width\\":2900,\\"height\\":2300}",5800,150000-190000,https://www.trumpf.com/,https://www.trumpf.com/specs.pdf,,Premium German fiber laser with exceptional reliability,"[\\"Aerospace\\",\\"Defense\\"]",DE
OPMT Laser,FL-6000,Fiber,6,3000,1500,"{\\"steel\\":20,\\"aluminum\\":12,\\"stainless\\":15}","{\\"steel_10mm\\":2.8,\\"aluminum_5mm\\":5.2}",0.03,0.02,1.8,1070,Cypcut CNC,Water,45,"{\\"length\\":6800,\\"width\\":2600,\\"height\\":2100}",4500,65000-85000,https://opmtlaser.com/,https://opmtlaser.com/specs/FL-6000.pdf,,High-performance fiber laser cutting machine,"[\\"Sheet metal fabrication\\",\\"Automotive parts\\"]",CN
Han's Laser,G3015F,Fiber,3,3000,1500,"{\\"steel\\":16,\\"aluminum\\":10,\\"stainless\\":12}","{\\"steel_10mm\\":2.0,\\"aluminum_5mm\\":3.8}",0.04,0.025,1.9,1070,Cypcut,Water,32,"{\\"length\\":6900,\\"width\\":2650,\\"height\\":2050}",4200,45000-60000,https://hanslaser.com/,https://hanslaser.com/products/G3015F.pdf,,Cost-effective fiber laser for small businesses,"[\\"General metalworking\\",\\"Job shops\\"]",CN
Epilog,Fusion Pro 48,CO2,1.2,1219,914,"{\\"acrylic\\":20,\\"wood\\":15,\\"fabric\\":10}","{\\"acrylic_5mm\\":25,\\"wood_5mm\\":30}",0.08,0.05,2.8,10600,Epilog Control,Air,15,"{\\"length\\":1930,\\"width\\":1420,\\"height\\":1120}",340,45000-55000,https://www.epiloglaser.com/,https://www.epiloglaser.com/specs/,,Professional CO2 laser for signage and engraving,"[\\"Signage\\",\\"Awards\\",\\"Personalization\\"]",US`;

  // 简化的示例（用于页面显示）
  const sample = `brand,model,laser_type,power_kw,work_area_length,work_area_width,max_cutting_thickness,cutting_speed,positioning_accuracy,repeat_accuracy,beam_quality,wavelength,control_system,cooling_type,power_consumption,dimensions,weight,price_range,manufacturer_url,spec_sheet_url,image_url,description,applications,origin_country
TRUMPF,TruLaser 5030,Fiber,5,3000,1500,"{\\"steel\\":20,\\"stainless\\":16}","{\\"steel_10mm\\":3}",0.025,0.015,1.75,1070,Siemens 840D,Water,48,"{\\"length\\":7500,\\"width\\":2900,\\"height\\":2300}",5800,150000-190000,https://www.trumpf.com/,https://www.trumpf.com/specs.pdf,,Premium German fiber laser,"[\\"Aerospace\\",\\"Defense\\"]",DE`;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setCsv(content);
      setResult(null);
      setShowPreview(false);
    };
    reader.readAsText(file);
  };

  const parseCsv = (csvText: string): ParsedRow[] => {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0]?.split(',').map(h => h.trim()) || [];
    const rows: ParsedRow[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const values = parseCSVLine(line);
      if (values.length !== headers.length) continue;

      const row: any = {};
      headers.forEach((header, index) => {
        row[header] = values[index];
      });
      rows.push(row);
    }

    return rows;
  };

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const validateData = (data: ParsedRow[]): ValidationError[] => {
    const errors: ValidationError[] = [];

    data.forEach((row, index) => {
      // Required fields validation
      if (!row.brand || row.brand.trim() === '') {
        errors.push({ row: index + 1, field: 'brand', value: row.brand, message: '品牌名称不能为空' });
      }
      if (!row.model || row.model.trim() === '') {
        errors.push({ row: index + 1, field: 'model', value: row.model, message: '型号不能为空' });
      }
      const validLaserTypes = ['Fiber', 'CO2', 'Solid', 'Hybrid', 'Solid-state'];
      const normalizedType = row.laser_type?.trim();
      if (!normalizedType || !validLaserTypes.includes(normalizedType)) {
        errors.push({ row: index + 1, field: 'laser_type', value: row.laser_type, message: `激光类型必须是 ${validLaserTypes.join('、')} 之一` });
      }

      // Numeric fields validation
      const power = parseFloat(String(row.power_kw));
      if (isNaN(power) || power <= 0) {
        errors.push({ row: index + 1, field: 'power_kw', value: row.power_kw, message: '功率必须是大于0的数字' });
      }
    });

    return errors;
  };

  const handlePreview = () => {
    if (!csv.trim()) {
      setResult('错误：CSV内容为空');
      return;
    }

    try {
      const parsed = parseCsv(csv);
      if (parsed.length === 0) {
        setResult('错误：无法解析CSV数据，请检查格式');
        return;
      }

      const errors = validateData(parsed);
      setPreviewData(parsed);
      setValidationErrors(errors);
      setShowPreview(true);
      setResult(null);
    } catch (error: any) {
      setResult(`解析错误：${error.message}`);
      setShowPreview(false);
    }
  };

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
      const message = json.inserted > 0 && json.updated > 0
        ? `✅ 导入成功：${json.inserted} 条新设备已添加，${json.updated} 条设备已更新`
        : json.inserted > 0
        ? `✅ 导入成功：${json.inserted} 条新设备已添加到数据库`
        : json.updated > 0
        ? `✅ 导入成功：${json.updated} 条设备已更新（无新设备）`
        : '✅ 导入完成（无变化）';
      setResult(message);
      setCsv('');
      setShowPreview(false);
      setPreviewData([]);
      setValidationErrors([]);
    } catch (e: any) {
      setResult(`❌ ${e.message || '导入失败'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNav />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">设备数据批量导入</h1>
          <p className="text-gray-600">通过CSV文件批量导入激光设备技术规格数据</p>
        </div>

      {/* Main Import Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>📄 CSV 数据导入</span>
            <Button 
              variant="outline" 
              onClick={() => fileInputRef.current?.click()}
              className="text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              上传 CSV 文件
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* CSV Template Download */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">📥 CSV 模板下载</h3>
                <p className="text-sm text-gray-600">下载包含完整字段说明和示例数据的模板文件</p>
              </div>
              <Button
                onClick={() => {
                  const blob = new Blob([csvTemplate], { type: 'text/csv;charset=utf-8;' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'equipment-import-template.csv';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载完整模板（包含3个示例）
              </Button>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p>✓ 模板包含所有字段的列标题和数据类型说明</p>
              <p>✓ 包含3条完整示例数据供参考</p>
              <p>✓ 支持在Excel或Google Sheets中直接编辑后保存为CSV</p>
            </div>
          </div>

          {/* CSV Format Example */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">CSV 格式预览（前2列示例）</label>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 overflow-x-auto">
              <pre className="text-xs font-mono">{sample.split('\n').slice(0, 3).join('\n')}...</pre>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              ⚠️ 注意：JSON字段（max_cutting_thickness, cutting_speed, dimensions, applications）在CSV中需要转义双引号
            </div>
          </div>

          {/* CSV Input Area */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSV 数据内容（可粘贴或上传文件）
            </label>
            <textarea
              className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="粘贴CSV内容到此处，或点击上方按钮上传文件..."
              value={csv}
              onChange={(e) => setCsv(e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">
              已输入: {csv ? csv.split('\n').length - 1 : 0} 行数据（不含表头）
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-4">
            <Button 
              onClick={handlePreview} 
              disabled={!csv.trim() || loading}
              variant="outline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              预览数据
            </Button>
            <Button 
              onClick={upload} 
              disabled={loading || !csv.trim() || (validationErrors.length > 0 && showPreview)}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  导入中...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  开始导入
                </>
              )}
            </Button>
            {csv && (
              <Button 
                variant="ghost" 
                onClick={() => {
                  setCsv('');
                  setShowPreview(false);
                  setPreviewData([]);
                  setValidationErrors([]);
                  setResult(null);
                }}
              >
                清空
              </Button>
            )}
          </div>

          {/* Result Message */}
          {result && (
            <div className={`p-4 rounded-lg border ${
              result.startsWith('✅') 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              {result}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preview Section */}
      {showPreview && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>
              📊 数据预览 
              <span className="ml-2 text-sm font-normal text-gray-600">
                （共 {previewData.length} 条记录）
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-red-900 font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  发现 {validationErrors.length} 个验证错误
                </h3>
                <div className="space-y-1 text-sm">
                  {validationErrors.slice(0, 10).map((error, index) => (
                    <div key={index} className="text-red-700">
                      • 第 {error.row} 行，字段 "{error.field}": {error.message} 
                      {error.value && <span className="text-red-600">（当前值: {error.value}）</span>}
                    </div>
                  ))}
                  {validationErrors.length > 10 && (
                    <div className="text-red-600 font-medium mt-2">
                      ... 还有 {validationErrors.length - 10} 个错误未显示
                    </div>
                  )}
                </div>
                <div className="mt-3 text-sm text-red-800">
                  ⚠️ 请修复所有验证错误后再导入数据
                </div>
              </div>
            )}

            {/* Validation Success */}
            {validationErrors.length === 0 && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ✓ 数据验证通过，可以开始导入
              </div>
            )}

            {/* Preview Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">品牌</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">型号</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">激光类型</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">功率(kW)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">工作区(mm)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">价格范围</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {previewData.slice(0, 20).map((row, index) => {
                    const hasError = validationErrors.some(e => e.row === index + 1);
                    return (
                      <tr key={index} className={hasError ? 'bg-red-50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.brand || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{row.model || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.laser_type || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.power_kw || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {row.work_area_length && row.work_area_width 
                            ? `${row.work_area_length}×${row.work_area_width}`
                            : '-'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.price_range || '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {previewData.length > 20 && (
              <div className="mt-3 text-sm text-gray-600 text-center">
                显示前 20 条记录，共 {previewData.length} 条
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Field Reference Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>📋 字段说明参考</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left font-semibold">字段名</th>
                  <th className="px-4 py-2 text-left font-semibold">类型</th>
                  <th className="px-4 py-2 text-left font-semibold">必填</th>
                  <th className="px-4 py-2 text-left font-semibold">说明</th>
                  <th className="px-4 py-2 text-left font-semibold">示例</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">brand</td>
                  <td className="px-4 py-2">文本</td>
                  <td className="px-4 py-2 text-red-600">✓</td>
                  <td className="px-4 py-2">制造商品牌</td>
                  <td className="px-4 py-2 text-gray-600">TRUMPF</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">model</td>
                  <td className="px-4 py-2">文本</td>
                  <td className="px-4 py-2 text-red-600">✓</td>
                  <td className="px-4 py-2">设备型号</td>
                  <td className="px-4 py-2 text-gray-600">TruLaser 5030</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">laser_type</td>
                  <td className="px-4 py-2">文本</td>
                  <td className="px-4 py-2 text-red-600">✓</td>
                  <td className="px-4 py-2">激光类型</td>
                  <td className="px-4 py-2 text-gray-600">Fiber, CO2, Solid, Hybrid</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">power_kw</td>
                  <td className="px-4 py-2">数字</td>
                  <td className="px-4 py-2 text-red-600">✓</td>
                  <td className="px-4 py-2">激光功率（千瓦）</td>
                  <td className="px-4 py-2 text-gray-600">5, 6, 12</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">max_cutting_thickness</td>
                  <td className="px-4 py-2">JSON</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">最大切割厚度（JSON格式，需转义双引号）</td>
                  <td className="px-4 py-2 text-gray-600 font-mono text-xs">{"{\"steel\":20,\"aluminum\":12}"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">cutting_speed</td>
                  <td className="px-4 py-2">JSON</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">切割速度（JSON格式，需转义双引号）</td>
                  <td className="px-4 py-2 text-gray-600 font-mono text-xs">{"{\"steel_10mm\":3.0}"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">dimensions</td>
                  <td className="px-4 py-2">JSON</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">设备尺寸（JSON格式，需转义双引号）</td>
                  <td className="px-4 py-2 text-gray-600 font-mono text-xs">{"{\"length\":7500,\"width\":2900}"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">applications</td>
                  <td className="px-4 py-2">JSON数组</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">应用领域（JSON数组，需转义双引号）</td>
                  <td className="px-4 py-2 text-gray-600 font-mono text-xs">{"[\"Aerospace\",\"Defense\"]"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">work_area_length</td>
                  <td className="px-4 py-2">数字</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">工作区长度（毫米）</td>
                  <td className="px-4 py-2 text-gray-600">3000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">work_area_width</td>
                  <td className="px-4 py-2">数字</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">工作区宽度（毫米）</td>
                  <td className="px-4 py-2 text-gray-600">1500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">price_range</td>
                  <td className="px-4 py-2">文本</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">价格范围（美元）</td>
                  <td className="px-4 py-2 text-gray-600">150000-190000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-xs">origin_country</td>
                  <td className="px-4 py-2">文本</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">原产国代码</td>
                  <td className="px-4 py-2 text-gray-600">DE, CN, US, JP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Instructions Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>📖 使用说明</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">1.</span>
              <span><strong>下载模板</strong>：点击"下载完整模板"按钮，获得包含所有字段和3条示例数据的CSV模板文件</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">2.</span>
              <span><strong>编辑数据</strong>：在Excel、Google Sheets或文本编辑器中打开模板，按照示例格式填入您的设备数据（支持批量复制粘贴）</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">3.</span>
              <span><strong>保存CSV</strong>：编辑完成后，保存为CSV格式（UTF-8编码，使用逗号分隔）</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">4.</span>
              <span><strong>上传导入</strong>：点击"上传CSV文件"按钮选择文件，或直接粘贴CSV内容到文本框</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">5.</span>
              <span><strong>预览验证</strong>：点击"预览数据"检查数据格式和验证错误，修复所有错误后再导入</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2 w-6">6.</span>
              <span><strong>开始导入</strong>：确认无误后，点击"开始导入"将数据批量写入数据库</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <strong className="text-blue-900 block mb-2">💡 批量导入技巧：</strong>
            <ul className="space-y-1 text-blue-800 text-sm ml-4">
              <li>• <strong>Excel批量编辑</strong>：在Excel中打开模板，可以使用填充柄、公式等功能快速批量生成数据</li>
              <li>• <strong>JSON字段处理</strong>：JSON字段在Excel中可以直接输入JSON格式，保存为CSV时会自动处理引号</li>
              <li>• <strong>数据验证</strong>：建议每批次导入50-100条，方便检查和验证</li>
              <li>• <strong>重复数据</strong>：如果品牌和型号相同，系统会自动更新而不是创建新记录</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
            <strong className="text-yellow-900 block mb-2">⚠️ 重要注意事项：</strong>
            <ul className="space-y-1 text-yellow-800 ml-4">
              <li>• <strong>必填字段</strong>：brand, model, laser_type, power_kw 为必填项，不能为空</li>
              <li>• <strong>JSON格式</strong>：JSON字段（max_cutting_thickness, cutting_speed, dimensions, applications）在CSV中需要转义双引号（用 \" 代替 "）</li>
              <li>• <strong>数据类型</strong>：数字字段（power_kw, work_area_length等）必须是纯数字，不能包含逗号、货币符号等</li>
              <li>• <strong>激光类型</strong>：只能是 Fiber, CO2, Solid, Hybrid 之一（区分大小写）</li>
              <li>• <strong>冷却类型</strong>：只能是 Water, Air, Hybrid, Other 之一（区分大小写）</li>
              <li>• <strong>编码格式</strong>：CSV文件必须使用UTF-8编码，避免中文乱码</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}



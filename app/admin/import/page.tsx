"use client";
import { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ParsedRow {
  brand: string;
  model: string;
  laser_type: string;
  power_kw: number;
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

  const sample = 'brand,model,laser_type,power_kw,work_area_length,work_area_width,max_cutting_thickness,cutting_speed,positioning_accuracy,repeat_accuracy,beam_quality,wavelength,control_system,cooling_type,power_consumption,dimensions,weight,price_range,manufacturer_url,spec_sheet_url,image_url,description,applications,origin_country\n' +
    'TRUMPF,TruLaser 5030,Fiber,5,3000,1500,"{\\"steel\\":20,\\"stainless\\":16}","{\\"steel_10mm\\":3}",0.025,0.015,1.75,1070,Siemens 840D,Water,48,"{\\"length\\":7500,\\"width\\":2900,\\"height\\":2300}",5800,"150000-190000",https://www.trumpf.com/,https://www.trumpf.com/,https://example.com/t.jpg,Premium German fiber laser,"[\\"Aerospace\\",\\"Defense\\"]",DE';

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

    const headers = lines[0].split(',').map(h => h.trim());
    const rows: ParsedRow[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
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
      if (!row.laser_type || !['Fiber', 'CO2', 'Solid-state'].includes(row.laser_type)) {
        errors.push({ row: index + 1, field: 'laser_type', value: row.laser_type, message: '激光类型必须是 Fiber、CO2 或 Solid-state' });
      }

      // Numeric fields validation
      const power = parseFloat(row.power_kw);
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
      setResult(`✅ 导入成功：${json.inserted} 条设备数据已添加到数据库`);
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
          {/* CSV Format Example */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">CSV 格式示例</label>
              <button
                className="text-xs text-blue-600 hover:text-blue-800"
                onClick={() => {
                  const blob = new Blob([sample], { type: 'text/csv' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'sample-equipment.csv';
                  a.click();
                }}
              >
                下载示例文件
              </button>
            </div>
            <pre className="p-3 bg-gray-50 rounded text-xs overflow-auto border border-gray-200">{sample}</pre>
            <div className="mt-2 text-xs text-gray-500">
              ⚠️ 注意：JSON字段（max_cutting_thickness, cutting_speed, dimensions, applications）需要转义双引号
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

      {/* Instructions Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>📖 使用说明</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">1.</span>
              <span>准备CSV文件，确保包含所有必需字段（brand, model, laser_type, power_kw 为必填项）</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">2.</span>
              <span>可以点击"下载示例文件"获取正确的CSV格式模板</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">3.</span>
              <span>通过"上传CSV文件"按钮选择文件，或直接将CSV内容粘贴到文本框</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">4.</span>
              <span>点击"预览数据"检查数据格式和验证错误</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">5.</span>
              <span>确认无误后，点击"开始导入"将数据写入数据库</span>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
            <strong className="text-yellow-900">⚠️ 注意事项：</strong>
            <ul className="mt-2 space-y-1 text-yellow-800 ml-4">
              <li>• JSON格式字段（如 max_cutting_thickness）必须转义双引号</li>
              <li>• 数字字段不要包含逗号或其他非数字字符</li>
              <li>• 激光类型只能是: Fiber, CO2, Solid-state</li>
              <li>• 导入前建议先预览并修复所有验证错误</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}



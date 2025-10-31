import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割安全操作规程 | Safety Operations - LaserSpecHub',
  description:
    '工业激光安全操作规程：个人防护、设备检查、标准操作程序（SOP）、应急处理与法规标准，保障人员与设备安全。',
  keywords: ['激光安全', 'SOP', '应急处理', '安全检查表', 'PPE'],
  alternates: { canonical: 'https://laserspechub.com/guides/safety-operations' },
  openGraph: {
    title: '激光切割安全操作规程 - 全面安全指南',
    description: 'PPE、每日/每周/每月检查、开关机流程与应急处理',
    type: 'article',
    url: 'https://laserspechub.com/guides/safety-operations',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '工业激光安全操作规程',
  description: 'PPE、检查清单、SOP与应急流程',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="HowTo" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割安全操作规程</h1>
        <p className="text-lg text-muted-foreground">保障人员与设备安全的标准流程</p>
      </div>

      {/* 1. 个人防护（PPE） */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 个人防护（PPE）</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
            <div>• 眼部：激光防护眼镜（按波长与OD值选择）</div>
            <div>• 呼吸：防尘口罩（N95/FFP2），特殊材料时使用防毒面具</div>
            <div>• 手部：防切割手套；身体：阻燃工作服；足部：绝缘鞋</div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 设备安全检查 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 设备安全检查</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-lg">每日（10项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 冷却水位/水温</div>
              <div>□ 保护镜片清洁</div>
              <div>□ 喷嘴状态</div>
              <div>□ 气体压力</div>
              <div>□ 抽风系统</div>
              <div>□ 急停按钮</div>
              <div>□ 光路安全罩</div>
              <div>□ 排渣系统</div>
              <div>□ 接地</div>
              <div>□ 联锁装置</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">每周（5项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 光纤/激光管连接</div>
              <div>□ 聚焦镜片清洁</div>
              <div>□ 伺服系统润滑</div>
              <div>□ 冷却器散热器清洁</div>
              <div>□ 安全标识</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">每月（3项）</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>□ 绝缘电阻测试</div>
              <div>□ 接地电阻测试</div>
              <div>□ 联锁功能测试</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 标准操作程序（SOP） */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 标准操作程序（SOP）</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle className="text-lg">开机流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 穿戴PPE</div>
              <div>2. 完成设备检查</div>
              <div>3. 开启冷却器等待水温</div>
              <div>4. 开启抽风系统</div>
              <div>5. 开启主机并回零</div>
              <div>6. 检查激光器状态</div>
              <div>7. 试切验证</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">切割流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 确认程序与参数</div>
              <div>2. 固定材料</div>
              <div>3. 设定安全高度</div>
              <div>4. 关闭防护门</div>
              <div>5. 启动程序并监控首件</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">关机流程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>1. 完成当前切割</div>
              <div>2. 切割头归位</div>
              <div>3. 关闭激光器</div>
              <div>4. 冷却器延时15分钟</div>
              <div>5. 清理台面与烟尘</div>
              <div>6. 关闭主机</div>
              <div>7. 填写运行记录</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. 应急处理 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 应急处理</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">火灾应急</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>• 立即急停与断电（安全条件下）</div>
              <div>• 使用CO₂或干粉灭火器</div>
              <div>• 禁止使用水灭火（电气设备）</div>
              <div>• 疏散并报警</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">激光泄漏/人员受伤</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>• 异常光点/烧焦气味→急停、疏散、通知维护</div>
              <div>• 眼部照射：闭眼、就医；皮肤灼伤：冷水冲洗与覆盖</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. 法规与标准 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. 法规与标准</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-1">
            <div>• IEC 60825-1 / EN 60825-1 / 21 CFR 1040.10</div>
            <div>• ISO 11553 工业激光安全</div>
            <div>• GB 7247 激光产品安全</div>
          </CardContent>
        </Card>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">提示：建立“安全检查—培训—应急演练”闭环机制，并记录在案以满足审计要求。</p>
    </div>
  );
}

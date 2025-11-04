# LaserSpecHub 全站页面URL列表

**生成时间**: 2025-01-XX  
**基础URL**: https://www.laserspechub.com

---

## 📋 目录

1. [公开页面](#公开页面)
2. [工具页面](#工具页面)
3. [指南页面](#指南页面)
4. [用户功能页面](#用户功能页面)
5. [管理页面](#管理页面)
6. [动态路由](#动态路由)
7. [API路由](#api路由)

---

## 公开页面

### 核心页面
- `/` - 首页
- `/about` - 关于我们
- `/contact` - 联系我们
- `/privacy` - 隐私政策
- `/terms` - 服务条款

### 设备相关
- `/equipment` - 设备数据库（列表页）
- `/equipment/submit` - 提交设备信息
- `/equipment/[id]` - 设备详情页（动态）
- `/comparison` - 设备对比工具

---

## 工具页面

### 参数计算器
- `/tools` - 工具索引页
- `/tools/power-density-calculator` - 功率密度计算器
- `/tools/kerf-calculator` - 切缝宽度计算器
- `/tools/power-calculator` - 功率计算器
- `/tools/cutting-time-calculator` - 切割时间计算器
- `/tools/gas-flow-calculator` - 气体流量计算器

### 设备选择工具
- `/tools/laser-type-wizard` - 激光类型选择向导
- `/tools/workspace-matcher` - 工作区匹配器

### 成本分析工具
- `/tools/cost-estimator` - 成本估算器
- `/tools/nozzle-life-calculator` - 喷嘴寿命计算器

### 系统设计工具
- `/tools/chiller-calculator` - 冷却器容量计算器

---

## 指南页面

### 入门指南
- `/guides` - 指南索引页
- `/guides/selection` - 设备选择指南
- `/guides/co2-vs-fiber-laser` - CO2 vs 光纤激光对比
- `/guides/power-selection-guide` - 功率选择指南
- `/guides/power-3k-6k-12k` - 3kW/6kW/12kW功率对比
- `/guides/work-area-size-comparison` - 工作区尺寸对比

### 技术参数
- `/guides/material-thickness-parameters` - 材料厚度参数
- `/guides/cutting-speed-chart` - 切割速度图表
- `/guides/assist-gas-chart` - 辅助气体选择图表
- `/guides/focus-position-guide` - 焦点位置指南
- `/guides/nozzle-selection-guide` - 喷嘴选择指南
- `/guides/penetration-depth` - 穿透深度分析

### 工艺优化
- `/guides/process-optimization-guide` - 工艺优化指南
- `/guides/edge-quality-standards` - 边缘质量标准
- `/guides/nesting-optimization-guide` - 嵌套优化指南
- `/guides/programming-tips` - 编程技巧
- `/guides/precision-factors-comparison` - 精度因素对比

### 故障排除与维护
- `/guides/troubleshooting-guide` - 故障排除指南
- `/guides/maintenance-schedule` - 维护计划
- `/guides/cutting-method-comparison` - 切割方法对比

### 安全与合规
- `/guides/safety-operations` - 安全操作规程
- `/guides/laser-safety-classes` - 激光安全等级
- `/guides/compliance-certification` - 合规认证
- `/guides/installation-requirements` - 安装要求

### 技术深度解析
- `/guides/beam-quality-guide` - 光束质量指南
- `/guides/lens-specifications` - 透镜规格
- `/guides/wavelength-absorption` - 波长吸收特性
- `/guides/control-systems-comparison` - 控制系统对比
- `/guides/tech-explain` - 技术解释

### 参考资料
- `/guides/glossary` - 术语表
- `/guides/compare` - 对比工具
- `/guides/reports` - 技术报告

---

## 用户功能页面

### 认证相关
- `/auth/login` - 用户登录
- `/auth/register` - 用户注册
- `/auth/error` - 认证错误页

### 用户中心
- `/profile` - 用户个人资料页

---

## 管理页面

### 管理后台
- `/admin` - 管理后台首页
- `/admin/login` - 管理员登录
- `/admin/equipment` - 设备管理列表
- `/admin/equipment/new` - 新增设备
- `/admin/equipment/[id]` - 编辑设备（动态）
- `/admin/import` - 批量导入设备
- `/admin/submissions` - 用户提交审核列表
- `/admin/submissions/[id]` - 提交详情（动态）

---

## 动态路由

### 设备详情页
- `/equipment/[id]` - 设备详情（需要数据库中的实际ID）

### 管理后台动态路由
- `/admin/equipment/[id]` - 编辑设备
- `/admin/submissions/[id]` - 提交详情

### 对比工具查询参数
- `/comparison?ids=1,2,3` - 对比指定设备（查询参数）

---

## API路由

### 公开API
- `/api/equipment` - 获取设备列表
- `/api/equipment/[id]` - 获取设备详情
- `/api/equipment/submit` - 提交设备信息
- `/api/comparison` - 对比相关API
- `/api/track/page-view` - 页面浏览追踪
- `/api/track/link-click` - 链接点击追踪
- `/api/contact` - 联系表单提交

### 认证API
- `/api/auth/login` - 用户登录
- `/api/auth/register` - 用户注册

### 用户API
- `/api/user/favorites` - 收藏管理
- `/api/user/comparisons` - 保存的对比

### 管理API
- `/api/admin/equipment` - 设备管理CRUD
- `/api/admin/submissions` - 提交审核管理
- `/api/admin/stats` - 统计数据

---

## 📊 页面统计

- **总页面数**: 64+ 页面
- **静态页面**: 50+ 页面
- **动态路由**: 3 个路由模式
- **工具页面**: 11 个
- **指南页面**: 34 个
- **管理页面**: 8 个
- **API端点**: 15+ 个

---

## 🔍 SEO状态总结

### ✅ 已优化页面（使用generatePageMetadata）
- `/` - 首页
- `/about` - 关于我们
- `/contact` - 联系我们
- `/equipment` - 设备列表
- `/equipment/[id]` - 设备详情（动态元数据）
- `/tools/*` - 大部分工具页面
- `/guides/selection` - 选择指南
- `/guides/compare` - 对比工具
- `/guides/glossary` - 术语表

### ⚠️ 需要优化的页面（缺少完整元数据）
- `/equipment/submit` - 缺少keywords和OG tags
- `/auth/login` - 缺少元数据（客户端组件）
- `/auth/register` - 缺少元数据（客户端组件）
- `/auth/error` - 缺少元数据
- `/profile` - 缺少元数据（客户端组件）
- `/admin/*` - 管理页面应设置noIndex
- `/comparison` - 使用Head标签而非Next.js metadata（客户端组件）
- `/privacy` - 缺少keywords和OG tags
- `/terms` - 缺少keywords和OG tags

### 📝 部分优化的指南页面
以下页面有metadata但未使用generatePageMetadata统一格式：
- `/guides/power-selection-guide`
- `/guides/co2-vs-fiber-laser`
- `/guides/wavelength-absorption`
- `/guides/precision-factors-comparison`
- `/guides/programming-tips`
- `/guides/compliance-certification`
- `/guides/installation-requirements`
- `/guides/assist-gas-chart`
- `/guides/edge-quality-standards`
- `/guides/troubleshooting-guide`
- `/guides/penetration-depth`
- `/guides/focus-position-guide`
- `/guides/cutting-method-comparison`
- `/guides/nesting-optimization-guide`
- `/guides/material-thickness-parameters`
- `/guides/process-optimization-guide`
- `/guides/nozzle-selection-guide`
- `/guides/cutting-speed-chart`
- `/guides/laser-safety-classes`
- `/guides/safety-operations`
- `/guides/maintenance-schedule`
- `/guides/beam-quality-guide`
- `/guides/work-area-size-comparison`
- `/guides/power-3k-6k-12k`
- `/guides/control-systems-comparison`
- `/guides/lens-specifications`

---

## 🎯 优化优先级

### P0 - 高优先级（影响SEO核心指标）
1. `/comparison` - 转为服务端组件并添加完整metadata
2. `/equipment/submit` - 添加完整SEO元数据
3. `/privacy` 和 `/terms` - 添加keywords和OG tags
4. 所有指南页面 - 统一使用generatePageMetadata

### P1 - 中优先级（提升用户体验）
1. `/auth/*` 页面 - 添加基础metadata（虽然客户端组件）
2. `/profile` - 添加metadata
3. `/admin/*` - 添加noIndex robots标签

### P2 - 低优先级（完善细节）
1. 创建sitemap.xml
2. 添加结构化数据到更多页面
3. 优化OG图片
4. 添加多语言支持（如有需要）


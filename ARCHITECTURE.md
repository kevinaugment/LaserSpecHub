# LaserSpecHub 整站架构文档

## 技术架构概览

```
┌─────────────────────────────────────────────────────────┐
│                    用户访问层                              │
│                  (Browser/Mobile)                        │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────┐
│                  Vercel Edge Network                     │
│               (全球 CDN + Edge Functions)                 │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────┐
│                 Next.js 15 应用层                         │
│            ┌──────────────────────────────┐              │
│            │  App Router (Pages)          │              │
│            │  - 前台页面 (英文)            │              │
│            │  - 管理后台 (中文)            │              │
│            │  - API Routes               │              │
│            └──────────────────────────────┘              │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────┴───────────────────────────────────┐
│                  Turso SQLite 数据库                      │
│          (全球分布式 SQLite, Edge-Compatible)             │
└──────────────────────────────────────────────────────────┘
```

---

## 技术栈详解

### 前端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.0 | React 框架，服务端渲染 |
| React | 18.3 | UI 组件库 |
| TypeScript | 5.4 | 类型安全 |
| Tailwind CSS | 3.4 | 样式框架 |
| Zustand | 4.5 | 状态管理 |

### 后端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js API Routes | 15.0 | RESTful API |
| Turso (libSQL) | 0.15.15 | SQLite 数据库 |
| Node.js | >= 18.0 | 运行时环境 |

### 部署平台

| 平台 | 用途 |
|------|------|
| Vercel | 前端托管 + Serverless Functions |
| Turso | 数据库托管（全球分布式） |

---

## 项目目录结构

```
LaserSpecHub/
├── app/                                    # Next.js App Router 应用目录
│   ├── page.tsx                            # 首页
│   ├── equipment/                          # 设备相关页面
│   │   ├── page.tsx                        # 设备列表页
│   │   └── [id]/                           # 动态路由
│   │       ├── page.tsx                    # 设备详情页
│   │       └── not-found.tsx               # 设备 404 页
│   ├── comparison/                         # 设备对比页面
│   │   └── page.tsx
│   ├── tools/                              # 实用工具页面
│   │   ├── power-calculator/               # 功率计算器
│   │   ├── workspace-matcher/              # 工作区匹配器
│   │   ├── laser-type-wizard/              # 激光类型选择向导
│   │   ├── kerf-calculator/                # 切口计算器
│   │   ├── cost-estimator/                 # 成本估算器
│   │   ├── chiller-calculator/             # 冷却器计算器
│   │   ├── power-density-calculator/       # 功率密度计算器
│   │   └── nozzle-life-calculator/         # 喷嘴寿命计算器
│   ├── guides/                             # 指南和教程
│   │   ├── selection/                      # 选购指南
│   │   ├── compare/                        # CO2 vs Fiber 对比
│   │   ├── tech-explain/                   # 技术规格解释
│   │   ├── glossary/                       # 术语表
│   │   ├── reports/                        # 市场报告
│   │   └── power-selection-guide/          # 功率选择指南
│   ├── admin/                              # 管理后台（纯中文）
│   │   ├── page.tsx                        # 控制台首页
│   │   ├── equipment/                      # 设备管理
│   │   │   ├── page.tsx                    # 设备列表
│   │   │   ├── [id]/page.tsx               # 设备编辑
│   │   │   └── new/page.tsx                # 设备新增
│   │   ├── import/                         # CSV 批量导入
│   │   │   └── page.tsx
│   │   └── not-found.tsx                   # 管理后台 404（中文）
│   ├── api/                                # API 路由
│   │   ├── equipment/                      # 设备 API
│   │   │   ├── route.ts                    # GET（列表）、POST（创建）
│   │   │   ├── [id]/route.ts               # GET（详情）、PUT（更新）、DELETE（删除）
│   │   │   └── submit/route.ts             # 用户提交设备
│   │   ├── admin/                          # 管理后台 API
│   │   │   ├── import/route.ts             # CSV 批量导入
│   │   │   └── equipment/batch/route.ts    # 批量操作
│   │   ├── comparison/                     # 对比功能 API
│   │   │   ├── save/route.ts               # 保存对比
│   │   │   └── [shareId]/route.ts          # 分享对比
│   │   ├── contact/route.ts                # 联系表单
│   │   └── track/                          # 数据追踪
│   │       ├── page-view/route.ts          # 页面浏览
│   │       └── link-click/route.ts         # 链接点击
│   ├── layout.tsx                          # 全局布局
│   ├── not-found.tsx                       # 全局 404（英文）
│   └── globals.css                         # 全局样式
│
├── components/                             # React 组件
│   ├── layout/                             # 布局组件
│   │   ├── header.tsx                      # 头部导航
│   │   ├── footer.tsx                      # 底部
│   │   └── breadcrumbs.tsx                 # 面包屑导航
│   ├── equipment/                          # 设备相关组件
│   │   ├── equipment-grid-client.tsx       # 设备网格（客户端）
│   │   ├── equipment-submit-form.tsx       # 设备提交表单
│   │   └── ...
│   ├── admin/                              # 管理后台组件
│   │   ├── admin-nav.tsx                   # 管理后台导航
│   │   └── equipment-form.tsx              # 设备表单（新增/编辑）
│   └── ui/                                 # 通用 UI 组件
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── badge.tsx
│
├── lib/                                    # 工具库
│   └── db/
│       └── client.ts                       # Turso 数据库客户端
│
├── types/                                  # TypeScript 类型定义
│   └── equipment.ts                        # 设备类型
│
├── migrations/                             # 数据库迁移文件
│   └── 0001_initial_schema.sql             # 初始数据库结构
│
├── scripts/                                # 脚本文件
│   ├── migrate.js                          # 数据库迁移脚本
│   ├── seed-equipment.js                   # 数据填充脚本
│   ├── scrape-and-import.js                # 数据爬取和导入
│   └── preview-scrape.js                   # 预览爬取数据
│
├── public/                                 # 静态资源
│   ├── images/
│   └── ...
│
├── ARCHITECTURE.md                         # 本文档（整站架构）
├── DEPLOYMENT.md                           # 部署指南
├── ADMIN_ARCHITECTURE.md                   # 管理后台架构
├── ADMIN_SUMMARY.md                        # 管理后台功能总结
├── README.md                               # 项目说明
├── package.json                            # 依赖配置
├── tsconfig.json                           # TypeScript 配置
├── tailwind.config.js                      # Tailwind 配置
├── next.config.js                          # Next.js 配置
└── .gitignore                              # Git 忽略文件
```

---

## 数据库架构

### 数据库：Turso SQLite

Turso 是一个全球分布式的 SQLite 数据库，专为 Edge 环境优化：

- **协议**: libSQL (SQLite 的分支)
- **连接方式**: HTTP/WebSocket
- **特性**: 
  - 全球分布式（多区域副本）
  - 边缘计算兼容
  - 低延迟读取
  - 自动备份

### 核心数据表

#### 1. laser_equipment (激光设备表)

| 字段名 | 类型 | 说明 | 约束 |
|--------|------|------|------|
| id | INTEGER | 主键 | PRIMARY KEY AUTOINCREMENT |
| brand | TEXT | 品牌 | NOT NULL |
| model | TEXT | 型号 | NOT NULL |
| laser_type | TEXT | 激光类型 | NOT NULL |
| power_kw | REAL | 功率(kW) | NOT NULL |
| work_area_length | REAL | 工作区长度(mm) | |
| work_area_width | REAL | 工作区宽度(mm) | |
| max_cutting_thickness | TEXT | 最大切割厚度(JSON) | |
| cutting_speed | TEXT | 切割速度(JSON) | |
| positioning_accuracy | REAL | 定位精度(mm) | |
| repeat_accuracy | REAL | 重复精度(mm) | |
| beam_quality | REAL | 光束质量(M²) | |
| wavelength | REAL | 波长(nm) | |
| control_system | TEXT | 控制系统 | |
| cooling_type | TEXT | 冷却类型 | |
| power_consumption | REAL | 功耗(kW) | |
| dimensions | TEXT | 尺寸(JSON) | |
| weight | REAL | 重量(kg) | |
| price_range | TEXT | 价格范围 | |
| manufacturer_url | TEXT | 制造商网站 | |
| spec_sheet_url | TEXT | 规格表URL | |
| image_url | TEXT | 图片URL | |
| description | TEXT | 描述 | |
| applications | TEXT | 应用领域(JSON数组) | |
| origin_country | TEXT | 原产国 | |
| is_active | INTEGER | 状态(0/1) | DEFAULT 1 |
| created_at | TEXT | 创建时间 | DEFAULT CURRENT_TIMESTAMP |
| updated_at | TEXT | 更新时间 | DEFAULT CURRENT_TIMESTAMP |

**索引**:
```sql
CREATE INDEX idx_laser_equipment_brand ON laser_equipment(brand);
CREATE INDEX idx_laser_equipment_type ON laser_equipment(laser_type);
CREATE INDEX idx_laser_equipment_power ON laser_equipment(power_kw);
CREATE INDEX idx_laser_equipment_active ON laser_equipment(is_active);
```

#### 2. comparisons (对比历史表)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INTEGER | 主键 |
| equipment_ids | TEXT | 设备ID列表(JSON) |
| user_ip | TEXT | 用户IP |
| user_agent | TEXT | 用户代理 |
| session_id | TEXT | 会话ID |
| created_at | TEXT | 创建时间 |

#### 3. user_submissions (用户提交表)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INTEGER | 主键 |
| contact_name | TEXT | 联系人 |
| contact_email | TEXT | 邮箱 |
| equipment_data | TEXT | 设备数据(JSON) |
| status | TEXT | 状态(pending/reviewed/approved/rejected) |
| created_at | TEXT | 创建时间 |

#### 4. calculator_usage (计算器使用记录表)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INTEGER | 主键 |
| calculator_type | TEXT | 计算器类型 |
| input_data | TEXT | 输入数据(JSON) |
| result_data | TEXT | 结果数据(JSON) |
| user_ip | TEXT | 用户IP |
| created_at | TEXT | 创建时间 |

#### 5. link_clicks (链接点击追踪表)

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | INTEGER | 主键 |
| source_page | TEXT | 来源页面 |
| destination_url | TEXT | 目标URL |
| link_text | TEXT | 链接文本 |
| link_type | TEXT | 链接类型 |
| user_ip | TEXT | 用户IP |
| created_at | TEXT | 创建时间 |

---

## API 架构

### API 设计原则

1. **RESTful**: 遵循 REST API 设计规范
2. **统一响应格式**: 所有 API 返回统一的 JSON 格式
3. **错误处理**: 清晰的错误码和错误消息
4. **类型安全**: TypeScript 类型定义

### API 响应格式

#### 成功响应

```json
{
  "success": true,
  "data": {...},
  "message": "操作成功"
}
```

#### 错误响应

```json
{
  "success": false,
  "error": "错误消息"
}
```

### API 路由列表

#### 前台 API

| 方法 | 路由 | 功能 | 说明 |
|------|------|------|------|
| GET | `/api/equipment` | 获取设备列表 | 支持分页、搜索、筛选、排序 |
| GET | `/api/equipment/[id]` | 获取设备详情 | 单个设备信息 |
| POST | `/api/equipment/submit` | 用户提交设备 | 用户贡献设备数据 |
| POST | `/api/comparison/save` | 保存对比 | 保存设备对比结果 |
| GET | `/api/comparison/[shareId]` | 获取对比 | 获取分享的对比结果 |
| POST | `/api/contact` | 联系表单 | 用户联系我们 |
| POST | `/api/track/page-view` | 页面浏览追踪 | 记录页面浏览 |
| POST | `/api/track/link-click` | 链接点击追踪 | 记录链接点击 |

#### 管理后台 API

| 方法 | 路由 | 功能 | 说明 |
|------|------|------|------|
| POST | `/api/equipment` | 创建设备 | 管理员创建新设备 |
| PUT | `/api/equipment/[id]` | 更新设备 | 管理员更新设备 |
| DELETE | `/api/equipment/[id]` | 删除设备 | 软删除（设置 is_active=0） |
| POST | `/api/admin/import` | CSV 批量导入 | 批量导入设备数据 |
| POST | `/api/admin/equipment/batch` | 批量操作 | 批量删除/启用/禁用 |

---

## 页面架构

### 前台页面（纯英文）

#### 1. 核心页面

| 路由 | 页面 | 功能 |
|------|------|------|
| `/` | 首页 | 网站介绍、快速搜索、热门设备 |
| `/equipment` | 设备列表 | 浏览、搜索、筛选设备 |
| `/equipment/[id]` | 设备详情 | 查看单个设备的详细信息 |
| `/comparison` | 设备对比 | 并排对比多个设备 |

#### 2. 实用工具页面

| 路由 | 工具 | 功能 |
|------|------|------|
| `/tools/power-calculator` | 功率计算器 | 根据材料和厚度计算所需功率 |
| `/tools/workspace-matcher` | 工作区匹配器 | 根据工件尺寸匹配设备 |
| `/tools/laser-type-wizard` | 激光类型向导 | 推荐适合的激光类型 |
| `/tools/kerf-calculator` | 切口计算器 | 计算激光切割切口宽度 |
| `/tools/cost-estimator` | 成本估算器 | 估算激光切割成本 |
| `/tools/chiller-calculator` | 冷却器计算器 | 计算所需冷却器容量 |
| `/tools/power-density-calculator` | 功率密度计算器 | 计算激光功率密度 |
| `/tools/nozzle-life-calculator` | 喷嘴寿命计算器 | 估算喷嘴使用寿命 |

#### 3. 指南和教程页面

| 路由 | 指南 | 功能 |
|------|------|------|
| `/guides/selection` | 选购指南 | 如何选择激光设备 |
| `/guides/compare` | 类型对比 | CO2 vs Fiber 激光对比 |
| `/guides/tech-explain` | 技术解释 | 技术规格详细说明 |
| `/guides/glossary` | 术语表 | 激光切割术语和FAQ |
| `/guides/reports` | 市场报告 | 2025 激光设备市场研究 |
| `/guides/power-selection-guide` | 功率选择 | 激光功率选择指南 |

### 管理后台页面（纯中文）

| 路由 | 页面 | 功能 |
|------|------|------|
| `/admin` | 控制台 | 统计数据、快速操作 |
| `/admin/equipment` | 设备列表 | 分页、搜索、筛选、批量操作 |
| `/admin/equipment/[id]` | 设备编辑 | 编辑设备所有字段 |
| `/admin/equipment/new` | 设备新增 | 创建新设备 |
| `/admin/import` | 批量导入 | CSV 批量导入设备 |

---

## 数据流架构

### 前台数据流

```
用户请求
  ↓
Next.js Page (Server Component)
  ↓
API Route (/api/equipment)
  ↓
Database Client (lib/db/client.ts)
  ↓
Turso SQLite Database
  ↓
返回数据 → 解析 JSON 字段 → 渲染页面
  ↓
用户浏览器
```

### 管理后台数据流

```
管理员操作
  ↓
Admin Page (Client Component)
  ↓
API Route (/api/equipment 或 /api/admin/*)
  ↓
数据验证 → Database Client
  ↓
Turso SQLite Database (INSERT/UPDATE/DELETE)
  ↓
返回操作结果 → 更新页面状态
  ↓
显示成功/错误消息
```

---

## 部署架构

### Vercel 部署流程

```
GitHub Repository
  ↓
Git Push
  ↓
Vercel (自动触发)
  ↓
├─ 构建 Next.js 应用
├─ 优化静态资源
├─ 生成 Serverless Functions
└─ 部署到 Edge Network
  ↓
全球 CDN 分发
  ↓
用户访问（低延迟）
```

### 环境配置

#### 开发环境 (Development)

- **数据库**: Turso 开发数据库
- **URL**: `http://localhost:3000`
- **热重载**: 启用
- **调试模式**: 启用

#### 生产环境 (Production)

- **数据库**: Turso 生产数据库
- **URL**: `https://your-domain.com`
- **CDN**: Vercel Edge Network
- **SSL**: 自动 HTTPS

---

## 性能优化策略

### 1. 前端优化

- **代码分割**: 按路由自动分割代码
- **图片优化**: Next.js Image 组件自动优化
- **CSS 优化**: Tailwind CSS 按需生成
- **预加载**: 关键资源预加载
- **缓存**: 静态资源浏览器缓存

### 2. 后端优化

- **数据库索引**: 关键字段建立索引
- **查询优化**: 避免 N+1 查询
- **连接池**: Turso 客户端单例模式
- **分页查询**: 避免一次加载所有数据

### 3. 部署优化

- **Edge Functions**: Vercel Serverless Functions
- **全球分发**: Turso 多区域副本
- **CDN 缓存**: 静态资源 CDN 加速
- **HTTP/2**: 多路复用

---

## 安全架构

### 1. 数据安全

- **环境变量**: 敏感信息存储在环境变量
- **SQL 注入防护**: 参数化查询
- **XSS 防护**: React 自动转义
- **CSRF 防护**: Next.js 内置防护

### 2. API 安全

- **速率限制**: 防止 API 滥用（可选）
- **输入验证**: 前后端双重验证
- **错误处理**: 不暴露敏感信息

### 3. 权限控制

- **管理后台**: 独立路由（可添加身份验证）
- **软删除**: 数据不会物理删除
- **审计日志**: 记录关键操作（未来扩展）

---

## 监控和日志

### 1. Vercel Analytics

- **Web Analytics**: 页面浏览、访问来源
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: 运行时错误追踪

### 2. Turso 监控

- **数据库使用情况**: 存储空间、查询次数
- **性能监控**: 查询延迟、吞吐量
- **日志记录**: 数据库操作日志

### 3. 自定义追踪

- **页面浏览**: `link_clicks` 表
- **计算器使用**: `calculator_usage` 表
- **设备对比**: `comparisons` 表

---

## 扩展性设计

### 1. 水平扩展

- **Serverless**: Vercel 自动扩展 Functions
- **数据库副本**: Turso 多区域部署
- **CDN**: 全球分发，无需额外配置

### 2. 功能扩展

- **模块化设计**: 组件和 API 独立
- **类型安全**: TypeScript 保证重构安全
- **清晰架构**: 分层明确，易于理解

### 3. 数据库扩展

- **垂直扩展**: Turso 自动扩展
- **水平扩展**: 添加区域副本
- **数据迁移**: SQL 迁移文件管理

---

## 开发工作流

### 1. 本地开发

```bash
# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local

# 初始化数据库
npm run db:migrate
npm run db:seed

# 启动开发服务器
npm run dev
```

### 2. 代码规范

```bash
# TypeScript 类型检查
npm run type-check

# ESLint 代码检查
npm run lint

# 格式化代码
prettier --write .
```

### 3. 部署流程

```bash
# 提交代码
git add .
git commit -m "feat: add new feature"
git push origin main

# Vercel 自动部署
# 查看部署状态: https://vercel.com/dashboard
```

---

## 总结

LaserSpecHub 采用现代化的 Jamstack 架构，具有以下特点：

✅ **高性能**: Edge 网络 + Serverless Functions  
✅ **可扩展**: 自动扩展，无需手动配置  
✅ **低成本**: Turso 和 Vercel 免费额度慷慨  
✅ **开发友好**: Next.js + TypeScript，开发体验优秀  
✅ **全球可用**: Turso 多区域 + Vercel CDN  
✅ **类型安全**: TypeScript 全栈类型安全  
✅ **易维护**: 清晰的代码结构，模块化设计  

这个架构能够支撑从小规模到大规模的应用场景，具有良好的扩展性和可维护性。









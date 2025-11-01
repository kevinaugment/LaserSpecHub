# 管理后台架构文档

## 概述

LaserSpecHub 管理后台是一个完整的设备数据管理系统，提供设备的增删改查、批量导入、状态管理等功能。

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **UI 组件**: React + Tailwind CSS
- **数据库**: Turso SQLite (全球分布式 SQLite)
- **部署平台**: Vercel (Serverless Functions + Edge Network)
- **API**: Next.js API Routes
- **语言**: TypeScript

---

## 目录结构

```
LaserSpecHub/
├── app/
│   ├── admin/                          # 管理后台页面
│   │   ├── page.tsx                    # 控制台首页（统计数据）
│   │   ├── equipment/                  # 设备管理
│   │   │   ├── page.tsx               # 设备列表页（分页、搜索、筛选、批量操作）
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx           # 设备编辑页
│   │   │   └── new/
│   │   │       └── page.tsx           # 设备新增页
│   │   ├── import/
│   │   │   └── page.tsx               # CSV 批量导入页
│   │   └── not-found.tsx              # 404 页面（中文）
│   │
│   └── api/                            # API 路由
│       ├── equipment/
│       │   ├── route.ts               # GET（列表）、POST（创建）
│       │   └── [id]/
│       │       └── route.ts           # GET（详情）、PUT（更新）、DELETE（软删除）
│       └── admin/
│           ├── import/
│           │   └── route.ts           # POST（批量导入 CSV）
│           └── equipment/
│               └── batch/
│                   └── route.ts       # POST（批量操作：删除/启用/禁用）
│
├── components/
│   ├── admin/
│   │   ├── admin-nav.tsx              # 管理后台导航组件
│   │   └── equipment-form.tsx         # 设备表单组件（新增/编辑复用）
│   └── ui/                             # 通用 UI 组件
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── badge.tsx
│
├── lib/
│   └── db/
│       └── client.ts                   # 数据库客户端（Turso/D1 抽象）
│
└── types/
    └── equipment.ts                    # 设备数据类型定义
```

---

## 页面结构

### 1. 控制台首页 (`/admin`)

**功能**:
- 显示实时统计数据（设备总数、按类型分布、按品牌分布）
- 快速操作入口（设备管理、新增设备、批量导入、刷新统计）
- 数据可视化（类型分布图表、品牌分布图表）

**数据来源**: `/api/equipment`

**关键特性**:
- 动态加载统计数据
- 实时刷新功能
- 响应式设计

---

### 2. 设备列表页 (`/admin/equipment`)

**功能**:
- 分页显示所有设备（默认每页 20 条）
- 搜索（品牌、型号、描述）
- 筛选（激光类型、品牌、显示已禁用设备）
- 批量选择与操作（启用、禁用、删除）
- 单个设备操作（编辑、启用/禁用、删除）
- 状态显示（启用/禁用徽章）

**数据来源**: 
- `/api/equipment?includeInactive=true` - 获取所有设备（包括已禁用）
- `/api/admin/equipment/batch` - 批量操作
- `/api/equipment/[id]` - 单个设备操作

**关键特性**:
- 实时搜索和筛选
- 批量选择（全选/取消全选）
- 分页导航（上一页/下一页）
- 状态管理（启用/禁用切换）
- 软删除（设置 is_active=0）

---

### 3. 设备编辑页 (`/admin/equipment/[id]`)

**功能**:
- 加载现有设备数据
- 编辑所有字段（基本信息、技术参数、JSON 字段等）
- 表单验证
- 保存更新

**数据来源**: 
- `/api/equipment/[id]?includeInactive=true` - 获取设备详情
- `/api/equipment/[id]` (PUT) - 更新设备

**关键特性**:
- 完整字段编辑
- JSON 字段编辑器（max_cutting_thickness、cutting_speed、dimensions、applications）
- 实时验证
- 状态切换（启用/禁用）

---

### 4. 设备新增页 (`/admin/equipment/new`)

**功能**:
- 创建新设备
- 表单验证
- JSON 字段编辑

**数据来源**: `/api/equipment` (POST)

**关键特性**:
- 必填字段验证（brand、model、laser_type、power_kw）
- JSON 字段编辑器
- 默认启用状态

---

### 5. CSV 批量导入页 (`/admin/import`)

**功能**:
- 下载 CSV 模板（包含 4 条示例数据）
- 上传 CSV 文件或粘贴 CSV 内容
- 数据预览和验证
- 批量导入

**数据来源**: `/api/admin/import` (POST)

**关键特性**:
- 完整的 CSV 模板（24 个字段）
- 数据验证（必填字段、数据类型、格式）
- 错误提示（详细指出每一行的错误）
- 字段说明参考表
- 使用指南和注意事项
- 智能更新（品牌+型号相同则更新，否则新增）

---

## API 路由

### 1. 设备列表 API (`GET /api/equipment`)

**功能**: 获取设备列表，支持分页、搜索、筛选、排序

**查询参数**:
- `includeInactive`: `true` - 包括已禁用设备（管理后台专用）
- `page`: 页码（默认 1）
- `pageSize`: 每页数量（默认 20，最大 100）
- `search`: 搜索关键词（品牌、型号、描述）
- `laserType`: 激光类型筛选
- `brand`: 品牌筛选
- `sortBy`: 排序字段（brand、model、power_kw）
- `sortDir`: 排序方向（asc、desc）

**响应**:
```json
{
  "success": true,
  "data": [...],
  "count": 100,
  "page": 1,
  "pageSize": 20,
  "totalPages": 5
}
```

---

### 2. 创建设备 API (`POST /api/equipment`)

**功能**: 创建新设备

**请求体**:
```json
{
  "brand": "TRUMPF",
  "model": "TruLaser 5030",
  "laser_type": "Fiber",
  "power_kw": 5,
  "work_area_length": 3000,
  "work_area_width": 1500,
  "max_cutting_thickness": {"steel": 20, "aluminum": 12},
  "cutting_speed": {"steel_10mm": 3.0},
  "dimensions": {"length": 7500, "width": 2900, "height": 2300},
  "applications": ["Aerospace", "Defense"],
  "is_active": true,
  ...
}
```

**响应**:
```json
{
  "success": true,
  "data": {...},
  "message": "设备创建成功"
}
```

---

### 3. 设备详情 API (`GET /api/equipment/[id]`)

**功能**: 获取单个设备详情

**查询参数**:
- `includeInactive`: `true` - 允许查看已禁用设备

**响应**:
```json
{
  "success": true,
  "data": {...}
}
```

---

### 4. 更新设备 API (`PUT /api/equipment/[id]`)

**功能**: 更新设备所有字段

**请求体**: 与创建设备相同，所有字段可选

**响应**:
```json
{
  "success": true,
  "data": {...},
  "message": "设备更新成功"
}
```

---

### 5. 删除设备 API (`DELETE /api/equipment/[id]`)

**功能**: 软删除设备（设置 is_active=0）

**响应**:
```json
{
  "success": true,
  "message": "设备已删除"
}
```

---

### 6. 批量操作 API (`POST /api/admin/equipment/batch`)

**功能**: 批量删除、启用、禁用设备

**请求体**:
```json
{
  "ids": [1, 2, 3],
  "action": "delete" | "activate" | "deactivate"
}
```

**响应**:
```json
{
  "success": true,
  "message": "成功删除 3 个设备",
  "affected": 3
}
```

---

### 7. CSV 批量导入 API (`POST /api/admin/import`)

**功能**: 批量导入设备数据（CSV 格式）

**请求体**:
```json
{
  "csv": "brand,model,laser_type,power_kw,...\nTRUMPF,TruLaser 5030,Fiber,5,..."
}
```

**响应**:
```json
{
  "success": true,
  "inserted": 10,
  "updated": 5
}
```

---

## 数据库操作

### 数据库抽象层 (`lib/db/client.ts`)

**核心函数**:
- `getDatabase()`: 获取数据库连接（生产环境使用 Turso，开发环境可回退到 Mock）
- `parseEquipmentRow()`: 解析设备数据行（JSON 字段）
- `getTursoClient()`: 创建 Turso 客户端单例

**特性**:
- **Turso 集成**: 通过 @libsql/client 连接全球分布式 SQLite
- **自动处理 JSON 字段**: max_cutting_thickness、cutting_speed、dimensions、applications
- **参数化查询**: 防止 SQL 注入
- **软删除支持**: is_active 标记
- **单例模式**: 复用数据库连接，提升性能
- **错误处理**: 完整的错误捕获和日志记录

---

## 数据模型

### LaserEquipment 类型

```typescript
interface LaserEquipment {
  id: number;
  brand: string;                        // 品牌（必填）
  model: string;                        // 型号（必填）
  laser_type: string;                   // 激光类型（必填）
  power_kw: number;                     // 功率（必填）
  work_area_length?: number;            // 工作区长度
  work_area_width?: number;             // 工作区宽度
  max_cutting_thickness?: object;       // 最大切割厚度（JSON）
  cutting_speed?: object;               // 切割速度（JSON）
  positioning_accuracy?: number;        // 定位精度
  repeat_accuracy?: number;             // 重复精度
  beam_quality?: number;                // 光束质量
  wavelength?: number;                  // 波长
  control_system?: string;              // 控制系统
  cooling_type?: string;                // 冷却类型
  power_consumption?: number;           // 功耗
  dimensions?: object;                  // 尺寸（JSON）
  weight?: number;                      // 重量
  price_range?: string;                 // 价格范围
  manufacturer_url?: string;            // 制造商网站
  spec_sheet_url?: string;              // 规格表 URL
  image_url?: string;                   // 图片 URL
  description?: string;                 // 描述
  applications?: string[];              // 应用领域（JSON 数组）
  origin_country?: string;              // 原产国
  is_active: boolean;                   // 状态（启用/禁用）
  created_at: string;                   // 创建时间
  updated_at: string;                   // 更新时间
}
```

---

## 核心功能流程

### 1. 设备 CRUD 流程

```
创建设备:
用户填写表单 → 前端验证 → POST /api/equipment → 插入数据库 → 返回新设备数据

读取设备:
用户访问列表页 → GET /api/equipment → 查询数据库 → 返回设备列表
用户访问详情页 → GET /api/equipment/[id] → 查询数据库 → 返回设备详情

更新设备:
用户编辑表单 → 前端验证 → PUT /api/equipment/[id] → 更新数据库 → 返回更新后数据

删除设备:
用户点击删除 → 确认对话框 → DELETE /api/equipment/[id] → 软删除（is_active=0） → 返回成功消息
```

---

### 2. 批量操作流程

```
批量删除/启用/禁用:
用户选择多个设备 → 点击批量操作按钮 → 确认对话框 → POST /api/admin/equipment/batch → 批量更新数据库 → 刷新列表
```

---

### 3. CSV 批量导入流程

```
1. 用户下载 CSV 模板
2. 用户在 Excel 中编辑数据
3. 用户上传 CSV 文件或粘贴内容
4. 前端解析 CSV 数据
5. 前端验证数据（必填字段、数据类型、格式）
6. 用户预览数据和错误提示
7. 用户修复错误后点击导入
8. POST /api/admin/import
9. 后端解析 CSV
10. 后端执行 UPSERT（品牌+型号相同则更新，否则新增）
11. 返回导入结果（inserted、updated 数量）
```

---

## 状态管理

### 设备状态 (is_active)

- `true` (1): 启用状态，在前台显示
- `false` (0): 禁用状态，仅在管理后台显示（需 `includeInactive=true`）

### 软删除机制

- 删除操作不会物理删除数据，而是将 `is_active` 设置为 0
- 可以通过启用操作恢复设备（将 `is_active` 设置为 1）
- 保留数据历史，便于审计和恢复

---

## 错误处理

### 前端错误处理

- 表单验证错误：实时显示在表单字段下方
- API 请求错误：显示在页面顶部的错误提示框
- 网络错误：显示友好的错误消息

### 后端错误处理

- 400 Bad Request: 缺少必填字段、无效参数
- 404 Not Found: 设备不存在
- 500 Internal Server Error: 数据库错误、服务器错误

### 错误响应格式

```json
{
  "success": false,
  "error": "错误消息"
}
```

---

## 用户体验优化

### 1. 导航体验

- 统一的管理后台导航栏（AdminNav 组件）
- 当前页面高亮显示
- 快速跳转到前台网站

### 2. 加载状态

- 加载中显示 Loading 动画
- 数据加载失败显示错误提示
- 操作成功显示成功消息

### 3. 交互反馈

- 按钮点击后显示加载状态
- 操作成功后显示成功消息
- 操作失败后显示错误消息
- 危险操作（删除）需要确认对话框

### 4. 数据展示

- 分页显示，避免一次加载过多数据
- 状态徽章（启用/禁用）清晰显示
- 表格布局，信息一目了然

---

## 安全性

### 1. 数据验证

- 前端验证：防止无效数据提交
- 后端验证：防止恶意请求
- 类型检查：TypeScript 类型安全

### 2. SQL 注入防护

- 使用参数化查询
- 不直接拼接 SQL 字符串

### 3. 权限控制

- 管理后台路由独立（`/admin`）
- API 路由可添加身份验证中间件（未来扩展）

---

## 性能优化

### 1. 数据库查询优化

- 分页查询，避免一次加载所有数据
- 索引优化（brand、model、laser_type）
- 只查询需要的字段

### 2. 前端优化

- 客户端组件按需加载
- 避免不必要的重新渲染
- 使用 React 状态管理

### 3. 缓存策略

- API 响应可添加缓存头（未来扩展）
- 静态资源缓存

---

## 未来扩展

### 1. 身份验证和授权

- 添加用户登录功能
- 角色权限管理（管理员、编辑、查看者）
- JWT 或 Session 认证

### 2. 审计日志

- 记录所有设备操作（创建、更新、删除）
- 记录操作用户和时间
- 操作历史查看

### 3. 数据导出

- 导出设备数据为 CSV
- 导出设备数据为 Excel
- 导出设备数据为 PDF

### 4. 高级搜索

- 多条件组合搜索
- 保存搜索条件
- 搜索历史

### 5. 数据可视化

- 更丰富的统计图表
- 趋势分析
- 数据对比

---

## 总结

LaserSpecHub 管理后台是一个功能完整、逻辑清晰、用户友好的设备数据管理系统。它提供了：

✅ **完整的 CRUD 功能**：创建、读取、更新、删除设备数据  
✅ **批量操作**：批量删除、启用、禁用设备  
✅ **CSV 批量导入**：快速导入大量设备数据  
✅ **状态管理**：启用/禁用设备，软删除机制  
✅ **搜索和筛选**：快速找到目标设备  
✅ **分页显示**：优化性能和用户体验  
✅ **实时统计**：设备数量、类型分布、品牌分布  
✅ **错误处理**：友好的错误提示和验证  
✅ **响应式设计**：适配不同屏幕尺寸  
✅ **纯中文界面**：管理后台全中文，符合用户需求  

管理后台的设计遵循了最佳实践，代码结构清晰，易于维护和扩展。


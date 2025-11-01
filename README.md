# LaserSpecHub

> 激光加工设备规格对比平台 - Laser Processing Equipment Specification Comparison Platform

一个专业的激光切割设备数据库和对比平台，帮助用户快速找到最适合的激光加工设备。

## 🌟 特性

### 前台功能（纯英文）

- ✅ **设备数据库**: 浏览和搜索激光切割设备
- ✅ **高级筛选**: 按类型、功率、品牌、原产国等筛选
- ✅ **设备对比**: 并排对比多个设备的技术规格
- ✅ **实用工具**: 8 个专业计算器（功率、成本、切口等）
- ✅ **选购指南**: 详细的设备选购和技术指南
- ✅ **用户提交**: 允许用户贡献设备数据
- ✅ **响应式设计**: 完美适配桌面和移动设备

### 管理后台（纯中文）

- ✅ **完整 CRUD**: 创建、读取、更新、删除设备数据
- ✅ **批量操作**: 批量删除、启用、禁用设备
- ✅ **CSV 导入**: 批量导入设备数据，包含完整模板和验证
- ✅ **搜索筛选**: 实时搜索和多条件筛选
- ✅ **状态管理**: 启用/禁用设备，软删除机制
- ✅ **实时统计**: 设备数量、类型分布、品牌分布
- ✅ **数据验证**: 前后端双重验证，友好的错误提示

---

## 🚀 技术栈

- **前端框架**: Next.js 15 (App Router)
- **UI 库**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **数据库**: Turso SQLite (全球分布式)
- **部署**: Vercel (Serverless + Edge Network)
- **状态管理**: Zustand + React Hooks

---

## 📦 快速开始

### 前置要求

- Node.js >= 18.0.0
- npm 或 yarn
- Turso 账号 (https://turso.tech/)

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd LaserSpecHub
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置 Turso 数据库

#### 安装 Turso CLI

```bash
# macOS/Linux
curl -sSfL https://get.tur.so/install.sh | bash

# Windows (PowerShell)
irm https://get.tur.so/install.ps1 | iex
```

#### 创建数据库

```bash
# 登录 Turso
turso auth login

# 创建数据库
turso db create laserspec-hub

# 获取数据库 URL
turso db show laserspec-hub --url

# 创建认证 Token
turso db tokens create laserspec-hub
```

### 4. 配置环境变量

创建 `.env.local` 文件：

```env
TURSO_DATABASE_URL=libsql://your-database-name.turso.io
TURSO_AUTH_TOKEN=your-auth-token-here
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. 初始化数据库

```bash
# 运行数据库迁移
npm run db:migrate

# （可选）填充示例数据
npm run db:seed
```

### 6. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

---

## 📂 项目结构

```
LaserSpecHub/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 首页
│   ├── equipment/                # 设备相关页面
│   ├── comparison/               # 设备对比
│   ├── tools/                    # 实用工具（8个计算器）
│   ├── guides/                   # 选购指南
│   ├── admin/                    # 管理后台（纯中文）
│   └── api/                      # API 路由
├── components/                   # React 组件
│   ├── layout/                   # 布局组件
│   ├── equipment/                # 设备组件
│   ├── admin/                    # 管理后台组件
│   └── ui/                       # 通用 UI 组件
├── lib/                          # 工具库
│   └── db/
│       └── client.ts             # Turso 数据库客户端
├── types/                        # TypeScript 类型
├── migrations/                   # 数据库迁移
├── scripts/                      # 脚本文件
└── public/                       # 静态资源
```

---

## 🔧 可用脚本

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build            # 构建生产版本
npm run start            # 启动生产服务器
npm run lint             # 代码检查
npm run type-check       # TypeScript 类型检查

# 数据库
npm run db:migrate       # 运行数据库迁移
npm run db:seed          # 填充示例数据

# 数据导入（高级）
npm run scrape:import    # 爬取和导入数据
npm run scrape:preview   # 预览爬取数据
```

---

## 🌐 部署到 Vercel

### 方法一：通过 Vercel Dashboard（推荐）

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New" → "Project"
3. 导入你的 Git 仓库
4. 配置环境变量：
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_SITE_URL`
5. 点击 "Deploy"

### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

详细部署指南请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📚 文档

- [ARCHITECTURE.md](./ARCHITECTURE.md) - 整站架构文档
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署指南
- [ADMIN_ARCHITECTURE.md](./ADMIN_ARCHITECTURE.md) - 管理后台架构
- [ADMIN_SUMMARY.md](./ADMIN_SUMMARY.md) - 管理后台功能总结

---

## 🎯 核心功能

### 前台页面

| 功能 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | 网站介绍、快速搜索 |
| 设备列表 | `/equipment` | 浏览、搜索、筛选设备 |
| 设备详情 | `/equipment/[id]` | 查看设备详细信息 |
| 设备对比 | `/comparison` | 并排对比多个设备 |
| 功率计算器 | `/tools/power-calculator` | 计算所需激光功率 |
| 工作区匹配 | `/tools/workspace-matcher` | 匹配合适的工作区尺寸 |
| 选购指南 | `/guides/selection` | 如何选择激光设备 |
| 技术解释 | `/guides/tech-explain` | 技术规格详细说明 |

### 管理后台

| 功能 | 路由 | 说明 |
|------|------|------|
| 控制台 | `/admin` | 统计数据、快速操作 |
| 设备管理 | `/admin/equipment` | 分页、搜索、批量操作 |
| 设备编辑 | `/admin/equipment/[id]` | 编辑设备所有字段 |
| 设备新增 | `/admin/equipment/new` | 创建新设备 |
| 批量导入 | `/admin/import` | CSV 批量导入设备 |

---

## 🔐 环境变量

| 变量名 | 必需 | 说明 |
|--------|------|------|
| `TURSO_DATABASE_URL` | ✅ | Turso 数据库连接 URL |
| `TURSO_AUTH_TOKEN` | ✅ | Turso 数据库认证 Token |
| `NODE_ENV` | ✅ | 运行环境 (development/production) |
| `NEXT_PUBLIC_SITE_URL` | ❌ | 网站 URL（用于 SEO） |
| `NEXT_PUBLIC_GA_ID` | ❌ | Google Analytics ID |

---

## 📊 数据库结构

### 核心表

- **laser_equipment**: 激光设备主表（24 个字段）
- **comparisons**: 设备对比历史
- **user_submissions**: 用户提交的设备数据
- **calculator_usage**: 计算器使用记录
- **link_clicks**: 链接点击追踪

详细数据库结构请参考 `migrations/0001_initial_schema.sql`

---

## 🛠️ 开发

### 添加新设备字段

1. 更新数据库迁移文件：`migrations/0002_add_new_field.sql`
2. 更新 TypeScript 类型：`types/equipment.ts`
3. 更新设备表单：`components/admin/equipment-form.tsx`
4. 运行迁移：`turso db shell laserspec-hub < migrations/0002_add_new_field.sql`

### 添加新工具

1. 创建新页面：`app/tools/new-tool/page.tsx`
2. 实现计算逻辑
3. 添加到导航：`components/layout/header.tsx`
4. 更新文档

---

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📝 许可证

MIT License

---

## 🙏 致谢

- **Next.js**: 强大的 React 框架
- **Turso**: 全球分布式 SQLite 数据库
- **Vercel**: 优秀的部署平台
- **Tailwind CSS**: 实用的 CSS 框架

---

## 📞 联系方式

- **项目主页**: [GitHub Repository]
- **问题反馈**: [GitHub Issues]
- **邮件**: your-email@example.com

---

## 🎉 特别感谢

感谢所有贡献者和用户的支持！

---

**Built with ❤️ using Next.js, Turso, and Vercel**

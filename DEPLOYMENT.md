# LaserSpecHub 部署指南

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **数据库**: Turso SQLite
- **部署平台**: Vercel
- **语言**: TypeScript
- **样式**: Tailwind CSS

---

## 前置要求

1. **Node.js** >= 18.0.0
2. **Turso 账号**: https://turso.tech/
3. **Vercel 账号**: https://vercel.com/

---

## 本地开发设置

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

#### 3.1 安装 Turso CLI

```bash
# macOS/Linux
curl -sSfL https://get.tur.so/install.sh | bash

# Windows (PowerShell)
irm https://get.tur.so/install.ps1 | iex
```

#### 3.2 登录 Turso

```bash
turso auth login
```

#### 3.3 创建数据库

```bash
# 创建数据库
turso db create laserspec-hub

# 获取数据库 URL
turso db show laserspec-hub --url

# 创建认证 Token
turso db tokens create laserspec-hub
```

### 4. 配置环境变量

复制 `.env.example` 到 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入 Turso 凭据：

```env
TURSO_DATABASE_URL=libsql://laserspec-hub-your-org.turso.io
TURSO_AUTH_TOKEN=eyJh...your-token-here
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. 初始化数据库

#### 5.1 运行数据库迁移

```bash
npm run db:migrate
```

这将执行 `migrations/0001_initial_schema.sql`，创建所有必需的表。

#### 5.2 （可选）填充示例数据

```bash
npm run db:seed
```

这将导入一些示例设备数据，方便测试。

### 6. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

---

## 生产环境部署（Vercel）

### 1. 准备 Turso 生产数据库

```bash
# 创建生产数据库
turso db create laserspec-hub-prod

# 获取生产数据库 URL
turso db show laserspec-hub-prod --url

# 创建生产 Token
turso db tokens create laserspec-hub-prod

# 在生产数据库上运行迁移
turso db shell laserspec-hub-prod < migrations/0001_initial_schema.sql
```

### 2. 部署到 Vercel

#### 方法一：通过 Vercel Dashboard（推荐）

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New" → "Project"
3. 导入你的 Git 仓库（GitHub/GitLab/Bitbucket）
4. 配置项目：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`

5. 添加环境变量：
   - `TURSO_DATABASE_URL`: 你的生产数据库 URL
   - `TURSO_AUTH_TOKEN`: 你的生产 Token
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_SITE_URL`: 你的域名（如 `https://laserspec-hub.vercel.app`）

6. 点击 "Deploy"

#### 方法二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署（首次）
vercel

# 生产部署
vercel --prod
```

### 3. 配置自定义域名（可选）

1. 在 Vercel Dashboard 中，进入你的项目
2. 点击 "Settings" → "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

---

## 数据库管理

### 查看数据库

```bash
# 进入数据库 Shell
turso db shell laserspec-hub

# 查看所有表
.tables

# 查看表结构
.schema laser_equipment

# 查询数据
SELECT * FROM laser_equipment LIMIT 10;

# 退出
.quit
```

### 备份数据库

```bash
# 导出数据库
turso db shell laserspec-hub ".dump" > backup.sql

# 恢复数据库
turso db shell laserspec-hub < backup.sql
```

### 数据库迁移

当有新的数据库变更时：

1. 创建新的迁移文件（如 `migrations/0002_new_feature.sql`）
2. 在本地测试迁移
3. 在生产数据库上执行迁移：

```bash
turso db shell laserspec-hub-prod < migrations/0002_new_feature.sql
```

---

## 环境变量说明

### 必需的环境变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `TURSO_DATABASE_URL` | Turso 数据库连接 URL | `libsql://your-db.turso.io` |
| `TURSO_AUTH_TOKEN` | Turso 数据库认证 Token | `eyJh...` |
| `NODE_ENV` | 运行环境 | `development` / `production` |

### 可选的环境变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_SITE_URL` | 网站 URL（用于 SEO） | `https://laserspec-hub.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

---

## 性能优化

### 1. 数据库索引

确保已创建必要的索引（在 `migrations/0001_initial_schema.sql` 中）：

```sql
CREATE INDEX idx_laser_equipment_brand ON laser_equipment(brand);
CREATE INDEX idx_laser_equipment_type ON laser_equipment(laser_type);
CREATE INDEX idx_laser_equipment_power ON laser_equipment(power_kw);
CREATE INDEX idx_laser_equipment_active ON laser_equipment(is_active);
```

### 2. Vercel 配置

在项目根目录创建 `vercel.json`（可选）：

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sfo1"]
}
```

### 3. 图片优化

使用 Next.js Image 组件自动优化图片：

```tsx
import Image from 'next/image';

<Image
  src="/equipment/laser.jpg"
  alt="Laser Equipment"
  width={800}
  height={600}
  priority
/>
```

---

## 监控和日志

### 1. Vercel Analytics

在 Vercel Dashboard 中启用 Analytics：

1. 进入项目设置
2. 点击 "Analytics"
3. 启用 Web Analytics

### 2. Turso 监控

```bash
# 查看数据库使用情况
turso db show laserspec-hub

# 查看数据库日志
turso db logs laserspec-hub
```

### 3. 错误追踪

推荐集成 Sentry 或其他错误追踪服务。

---

## 常见问题

### Q1: 数据库连接失败

**错误**: `Turso configuration missing: set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN`

**解决**:
1. 检查 `.env.local` 文件是否存在
2. 确认环境变量名称正确
3. 确认 Token 没有过期
4. 重启开发服务器

### Q2: 构建失败

**错误**: `Module not found: Can't resolve '@libsql/client'`

**解决**:
```bash
npm install @libsql/client
```

### Q3: 部署后数据为空

**原因**: 生产数据库未初始化

**解决**:
```bash
# 在生产数据库上运行迁移
turso db shell laserspec-hub-prod < migrations/0001_initial_schema.sql

# 导入数据
npm run db:seed  # 或手动导入数据
```

### Q4: API 路由超时

**原因**: Turso 数据库区域离 Vercel 服务器太远

**解决**:
1. 在 Vercel 项目设置中选择离 Turso 数据库最近的区域
2. 或在 Turso 中创建区域副本：
```bash
turso db replicate laserspec-hub-prod <region>
```

---

## 更新和维护

### 更新依赖

```bash
# 检查过时的包
npm outdated

# 更新所有包
npm update

# 更新 Next.js
npm install next@latest react@latest react-dom@latest
```

### 代码检查

```bash
# TypeScript 类型检查
npm run type-check

# ESLint 代码检查
npm run lint

# 修复可修复的问题
npm run lint -- --fix
```

---

## 安全建议

1. **环境变量**: 永远不要将 `.env.local` 提交到 Git
2. **Token 轮换**: 定期更新 Turso Auth Token
3. **权限控制**: 为生产数据库使用只读 Token（如果可能）
4. **备份**: 定期备份数据库
5. **HTTPS**: 确保生产环境使用 HTTPS
6. **CSP**: 配置内容安全策略（Content Security Policy）

---

## 技术支持

- **Turso 文档**: https://docs.turso.tech/
- **Vercel 文档**: https://vercel.com/docs
- **Next.js 文档**: https://nextjs.org/docs
- **项目 Issues**: 在 GitHub 上提交 Issue

---

## 许可证

MIT License

---

## 总结

LaserSpecHub 使用现代化的 Jamstack 架构，结合 Turso SQLite 和 Vercel 平台，实现了：

✅ **高性能**: Edge 网络分发，全球低延迟  
✅ **可扩展**: 无服务器架构，自动扩展  
✅ **低成本**: Turso 和 Vercel 都有慷慨的免费额度  
✅ **易维护**: 简单的部署流程，自动化 CI/CD  
✅ **开发友好**: 本地开发体验流畅，热重载快速  

祝你部署顺利！🚀









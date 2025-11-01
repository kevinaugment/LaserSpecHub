# LaserSpecHub 生产环境部署检查清单

## 📋 部署前检查

### ✅ 已完成项目

- [x] **环境变量配置**
  - vercel.json 已更新为正式域名
  - ENV.EXAMPLE.txt 已更新

- [x] **构建优化**
  - 设置动态渲染避免构建时数据库访问
  - 生产环境自动移除 console.log（保留 error/warn）
  - Next.js 构建成功（59个页面）

- [x] **SEO优化**
  - 所有页面元数据配置正确
  - sitemap.xml 已生成
  - robots.txt 已配置
  - 结构化数据已添加

- [x] **域名配置**
  - 正式域名：https://www.laserspechub.com
  - 所有硬编码域名已更新

---

## 🚀 Vercel 部署步骤

### 1. 环境变量配置

在 Vercel Dashboard → Settings → Environment Variables 中添加：

```env
TURSO_DATABASE_URL="libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw"
NODE_ENV="production"
NEXT_PUBLIC_SITE_URL="https://www.laserspechub.com"
```

**重要**: 确保这些环境变量应用到 `Production`, `Preview`, 和 `Development` 所有环境。

### 2. 域名绑定

在 Vercel Dashboard → Settings → Domains 中：

1. 添加自定义域名：`www.laserspechub.com`
2. 添加根域名重定向：`laserspechub.com` → `www.laserspechub.com`
3. 等待 DNS 验证（通常需要几分钟）

### 3. 部署

方式一：**通过 Git 推送（推荐）**

```bash
cd /Users/luokun/Downloads/LaserSpecHub
git add .
git commit -m "Production ready: Update domain and build config"
git push origin main
```

Vercel 会自动检测到推送并开始部署。

方式二：**手动重新部署**

在 Vercel Dashboard → Deployments → 点击 "Redeploy"

### 4. 验证部署

部署完成后（通常 2-5 分钟），访问以下链接验证：

- [ ] 首页：https://www.laserspechub.com
- [ ] 设备列表：https://www.laserspechub.com/equipment
- [ ] 设备对比：https://www.laserspechub.com/comparison
- [ ] 工具页面：https://www.laserspechub.com/tools/power-calculator
- [ ] 指南页面：https://www.laserspechub.com/guides/selection
- [ ] Sitemap：https://www.laserspechub.com/sitemap.xml
- [ ] Robots.txt：https://www.laserspechub.com/robots.txt

---

## 🔍 部署后验证清单

### 功能测试

- [ ] **设备数据库**
  - 设备列表正常加载
  - 筛选功能正常工作
  - 分页功能正常
  - 设备详情页可以访问

- [ ] **设备对比**
  - 可以添加设备进行对比
  - 对比表格显示正确
  - PDF 导出功能正常
  - 分享链接功能正常

- [ ] **计算器工具**（测试所有8个）
  - Power Calculator
  - Workspace Matcher
  - Laser Type Wizard
  - Cost Estimator
  - Kerf Calculator
  - Power Density Calculator
  - Nozzle Life Calculator
  - Chiller Calculator

- [ ] **管理后台** (`/admin`)
  - 设备列表加载
  - 创建新设备
  - 编辑设备
  - 删除设备
  - CSV 批量导入

### 性能测试

- [ ] **页面加载速度**
  - 首页 < 2秒
  - 设备列表页 < 3秒
  - 设备详情页 < 2秒

- [ ] **Core Web Vitals**
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

建议使用：
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### SEO 验证

- [ ] **Meta 标签**
  - 所有页面都有正确的 title
  - 所有页面都有 description
  - Open Graph 标签正确

- [ ] **结构化数据**
  - 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 验证
  - 主要页面都有 JSON-LD 数据

- [ ] **Sitemap 提交**
  - 访问 https://www.laserspechub.com/sitemap.xml 确认生成
  - 提交到 Google Search Console
  - 提交到 Bing Webmaster Tools

### 数据库连接

- [ ] **Turso 数据库**
  - 连接正常
  - 查询响应快速（< 500ms）
  - 数据正确显示

验证命令：
```bash
turso db show wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp
```

### 监控和日志

- [ ] **Vercel Analytics**
  - 启用 Web Analytics
  - 启用 Speed Insights

- [ ] **错误监控**
  - 检查 Vercel Functions 日志
  - 确认没有服务器错误

---

## 🔐 安全检查

- [ ] **环境变量**
  - 敏感信息都在 Vercel 环境变量中
  - `.env.local` 已在 `.gitignore` 中

- [ ] **HTTPS**
  - 强制使用 HTTPS
  - SSL 证书有效

- [ ] **安全头**
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Referrer-Policy 已设置
  - Permissions-Policy 已配置

---

## 📊 监控和维护

### 每日检查

- [ ] 网站可访问性
- [ ] 关键功能正常
- [ ] 查看 Vercel 部署状态

### 每周检查

- [ ] 审查错误日志
- [ ] 检查 Core Web Vitals
- [ ] 数据库性能监控

### 每月维护

- [ ] 更新依赖包
- [ ] 审查安全更新
- [ ] 备份数据库
- [ ] 审查 Analytics 数据

---

## 🆘 常见问题排查

### 问题1: 数据库连接失败

**症状**: 页面显示 "Turso configuration missing"

**解决方案**:
1. 检查 Vercel 环境变量是否正确设置
2. 确认 Token 没有过期
3. 在 Vercel Dashboard 中重新部署

### 问题2: 页面构建失败

**症状**: Vercel 部署时构建错误

**解决方案**:
1. 检查构建日志
2. 本地运行 `npm run build` 测试
3. 确保所有依赖都已安装

### 问题3: 域名无法访问

**症状**: 域名显示 404 或无法解析

**解决方案**:
1. 检查 DNS 记录是否正确
2. 等待 DNS 传播（最多48小时）
3. 清除浏览器缓存

### 问题4: API 路由超时

**症状**: API 请求超时或很慢

**解决方案**:
1. 检查 Turso 数据库区域
2. 优化查询语句
3. 添加数据库索引

---

## 📞 紧急联系

### Turso 支持
- 文档：https://docs.turso.tech/
- 状态页面：https://status.turso.tech/

### Vercel 支持
- 文档：https://vercel.com/docs
- 状态页面：https://www.vercel-status.com/

### 数据库凭证位置
- Turso Dashboard：https://turso.tech/dashboard
- 数据库名称：`wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp`

---

## 🎉 部署后第一步

1. **提交 Sitemap 到搜索引擎**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **设置监控**
   - 启用 Vercel Analytics
   - 配置 Uptime 监控（如 UptimeRobot）
   - 设置错误告警

3. **社交媒体更新**
   - 更新所有社交媒体链接
   - 发布上线公告

4. **用户测试**
   - 邀请测试用户试用
   - 收集反馈
   - 快速修复关键问题

---

## ✅ 最终确认

在标记为"已上线"之前，确认：

- [ ] 所有环境变量已正确配置
- [ ] 域名已成功绑定并可访问
- [ ] 数据库连接正常
- [ ] 所有核心功能测试通过
- [ ] SEO 基础设施就绪
- [ ] 监控和日志已设置
- [ ] 备份策略已就绪
- [ ] 团队成员已知晓部署状态

**部署人员**: _______________  
**部署日期**: _______________  
**确认签字**: _______________

---

**祝贺！LaserSpecHub 已准备好正式上线！🚀**


# LaserSpecHub 快速上线指南

## 🎯 3步上线流程

### 第1步：配置 Vercel 环境变量（2分钟）

登录 [Vercel Dashboard](https://vercel.com/dashboard)，进入项目设置，添加以下环境变量：

```env
TURSO_DATABASE_URL=libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.laserspechub.com
```

✅ 应用到所有环境（Production, Preview, Development）

### 第2步：推送代码并部署（3分钟）

```bash
cd /Users/luokun/Downloads/LaserSpecHub

# 查看改动
git status

# 提交所有改动
git add .
git commit -m "Production ready: Domain config and build optimization"

# 推送到 GitHub
git push origin main
```

Vercel 会自动开始部署。

### 第3步：绑定域名（5-30分钟）

在 Vercel Dashboard → Settings → Domains：

1. 添加 `www.laserspechub.com`
2. 按提示配置 DNS（CNAME 记录）
3. 等待验证通过

---

## ✅ 验证清单

部署完成后，快速验证这些链接：

- [ ] https://www.laserspechub.com - 首页加载
- [ ] https://www.laserspechub.com/equipment - 设备列表显示
- [ ] https://www.laserspechub.com/comparison - 对比工具正常
- [ ] https://www.laserspechub.com/tools/power-calculator - 计算器工作
- [ ] https://www.laserspechub.com/admin - 管理后台可访问

---

## 🎉 上线后待办

### 立即完成（必需）

1. **提交 Sitemap**
   - Google Search Console: 提交 `https://www.laserspechub.com/sitemap.xml`
   - Bing Webmaster Tools: 提交站点地图

2. **启用监控**
   - Vercel Analytics：Dashboard → Analytics → Enable
   - 设置 Uptime 监控（推荐 [UptimeRobot](https://uptimerobot.com)）

### 一周内完成（推荐）

3. **性能测试**
   - 使用 [PageSpeed Insights](https://pagespeed.web.dev/) 测试性能
   - 优化低分页面

4. **用户测试**
   - 邀请5-10人试用
   - 收集反馈并快速迭代

5. **备份策略**
   - 设置 Turso 数据库自动备份
   - 导出初始数据快照

---

## 📞 遇到问题？

### 常见问题快速修复

**问题：页面显示 "Database error"**
→ 检查 Vercel 环境变量是否正确设置

**问题：域名无法访问**
→ DNS 传播需要时间，等待最多48小时

**问题：构建失败**
→ 查看 Vercel 部署日志，联系开发团队

---

## 📚 详细文档

完整的部署检查清单和故障排查，请参考：
- [PRODUCTION_DEPLOYMENT_CHECKLIST.md](./PRODUCTION_DEPLOYMENT_CHECKLIST.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**准备好了就开始吧！祝上线顺利！🚀**


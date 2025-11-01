# 部署说明

## 当前状态

本地有 2 个重要的修复提交未推送到 GitHub：
1. `15a87a7` - 修复 Turso client.execute() API 使用
2. `606f0d5` - 修复 Turso 迁移兼容性

这两个修复解决了 Vercel 上的 "a.prepare is not a function" 错误。

## 推送到 GitHub

### 方法 1: 标准 HTTPS 推送
```bash
cd /Users/luokun/Downloads/LaserSpecHub
git push origin main
```

如果遇到认证问题，可能需要：
- 使用 GitHub Personal Access Token
- 或切换到 SSH 方式（见方法 2）

### 方法 2: 使用 SSH (推荐)
```bash
cd /Users/luokun/Downloads/LaserSpecHub

# 切换到 SSH URL
git remote set-url origin git@github.com:kevinaugment/LaserSpecHub.git

# 测试 SSH 连接
ssh -T git@github.com

# 推送
git push origin main
```

### 方法 3: 使用 GitHub CLI
```bash
# 安装 gh (如果还没有)
brew install gh

# 登录
gh auth login

# 推送
cd /Users/luokun/Downloads/LaserSpecHub
git push origin main
```

## Vercel 环境变量

确保 Vercel 项目已配置以下环境变量（已配置）：

- `TURSO_DATABASE_URL`: `libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io`
- `TURSO_AUTH_TOKEN`: `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9...`

## 推送后

推送成功后，Vercel 会自动检测到新提交并触发部署。
等待 2-3 分钟后访问：https://laser-spec-hub-19j4.vercel.app/equipment

应该能看到：
- 18 条设备记录（13 Fiber + 4 CO2 + 1 Solid）
- 正常的筛选、分页功能
- 无服务器错误

## 数据库状态

Turso 数据库已完成：
- ✅ 所有表创建完成（laser_equipment, comparisons, etc.）
- ✅ 所有索引创建完成（包括 unique index on brand+model）
- ✅ 触发器创建完成（auto-update updated_at）
- ✅ 18 条设备数据已导入
- ✅ 重复数据已清理

## 故障排查

如果推送后仍有错误：

1. 检查 Vercel 部署日志
2. 确认部署的 commit SHA 是 `606f0d5` 或更新
3. 检查 Vercel 环境变量是否正确设置
4. 重新部署（Vercel Dashboard → Deployments → Redeploy）





















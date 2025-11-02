#!/bin/bash
# Vercel 环境变量快速设置脚本

echo "🚀 LaserSpecHub - Vercel 环境变量设置"
echo "========================================"
echo ""

# 检查 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装"
    echo "📦 安装: npm i -g vercel"
    echo "或使用 Vercel Dashboard 手动设置"
    echo ""
    echo "🌐 访问: https://vercel.com/kevins-projects-fae97d2a/laser-spec-hub-19j4/settings/environment-variables"
    exit 1
fi

echo "✅ Vercel CLI 已安装"
echo ""

# 设置环境变量
echo "📝 设置环境变量..."
echo ""

# TURSO_DATABASE_URL
echo "1/4 设置 TURSO_DATABASE_URL..."
echo "libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io" | vercel env add TURSO_DATABASE_URL production

# TURSO_AUTH_TOKEN
echo "2/4 设置 TURSO_AUTH_TOKEN..."
echo "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw" | vercel env add TURSO_AUTH_TOKEN production

# NEXTAUTH_SECRET
echo "3/4 设置 NEXTAUTH_SECRET..."
echo "laser-spec-hub-super-secret-key-change-in-production-2024-v2" | vercel env add NEXTAUTH_SECRET production

# NEXTAUTH_URL
echo "4/4 设置 NEXTAUTH_URL..."
echo "https://laser-spec-hub-19j4.vercel.app" | vercel env add NEXTAUTH_URL production

echo ""
echo "✅ 所有环境变量已设置"
echo ""

# 重新部署
echo "🔄 重新部署到生产环境..."
vercel --prod

echo ""
echo "✅ 完成！"
echo ""
echo "🔗 管理员登录: https://laser-spec-hub-19j4.vercel.app/admin/login"
echo "📧 Email: admin@laserspec.com"
echo "🔑 Password: Admin2024!"
echo ""

#!/bin/bash

# LaserSpecHub 部署脚本
# 用法: ./DEPLOY.sh

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║          🚀 LaserSpecHub 部署脚本                            ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 1. 检查 Git 状态
echo "📋 步骤 1/4: 检查 Git 状态..."
git status --short
echo ""

# 2. 确认是否继续
read -p "是否继续部署？(y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 部署已取消"
    exit 0
fi

# 3. 添加所有改动
echo ""
echo "📦 步骤 2/4: 添加文件..."
git add .
echo "✅ 文件已添加"

# 4. 提交
echo ""
echo "💾 步骤 3/4: 提交改动..."
COMMIT_MSG="Production ready: Domain config and build optimization"
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo "⚠️  没有新的改动需要提交，或提交失败"
    read -p "是否强制推送？(y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 0
    fi
fi

# 5. 推送到远程
echo ""
echo "🚀 步骤 4/4: 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ 部署成功！"
    echo ""
    echo "Vercel 将自动开始构建和部署"
    echo "预计需要 2-5 分钟完成"
    echo ""
    echo "📍 下一步："
    echo "   1. 访问 Vercel Dashboard 查看部署状态"
    echo "   2. 部署完成后访问: https://www.laserspechub.com"
    echo "   3. 使用部署检查清单验证功能"
    echo ""
    echo "📚 参考文档："
    echo "   - QUICK_LAUNCH_GUIDE.md"
    echo "   - PRODUCTION_DEPLOYMENT_CHECKLIST.md"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "   1. Git 远程仓库配置是否正确"
    echo "   2. 是否有推送权限"
    echo "   3. 网络连接是否正常"
    echo ""
    echo "手动推送命令："
    echo "   git push origin main"
fi

echo ""

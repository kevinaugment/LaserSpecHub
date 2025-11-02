#!/bin/bash
# 自动修复 Vercel 环境变量脚本
# 用于修复 laser-spec-hub 项目的数据库连接问题

set -e

echo "🔧 修复 Vercel 环境变量 - laser-spec-hub 项目"
echo "=============================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 项目信息
PROJECT_NAME="laser-spec-hub"
TEAM_ID="team_kenz3xbdMygqZud5He0Fp6ti"

# 环境变量值
TURSO_DB_URL="libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io"
TURSO_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw"
NEXTAUTH_SECRET="laser-spec-hub-super-secret-key-change-in-production-2024-v2"
NEXTAUTH_URL="https://laser-spec-hub.vercel.app"

echo "📋 项目信息:"
echo "  项目: $PROJECT_NAME"
echo "  团队: $TEAM_ID"
echo ""

# 检查 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ 错误: Vercel CLI 未安装${NC}"
    echo ""
    echo "请先安装 Vercel CLI:"
    echo "  npm install -g vercel"
    echo ""
    echo "然后运行:"
    echo "  vercel login"
    exit 1
fi

echo -e "${GREEN}✅ Vercel CLI 已安装${NC}"
echo ""

# 确认操作
echo -e "${YELLOW}⚠️  此脚本将执行以下操作:${NC}"
echo "  1. 删除现有的环境变量（如果存在）"
echo "  2. 添加新的环境变量（正确的格式）"
echo "  3. 触发重新部署"
echo ""
read -p "是否继续? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "操作已取消"
    exit 0
fi

echo ""
echo "🗑️  步骤 1/3: 删除现有环境变量..."
echo "----------------------------------------"

# 删除 TURSO_DATABASE_URL
echo -n "  删除 TURSO_DATABASE_URL... "
if vercel env rm TURSO_DATABASE_URL production --yes 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${YELLOW}(不存在或已删除)${NC}"
fi

# 删除 TURSO_AUTH_TOKEN
echo -n "  删除 TURSO_AUTH_TOKEN... "
if vercel env rm TURSO_AUTH_TOKEN production --yes 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${YELLOW}(不存在或已删除)${NC}"
fi

# 删除 NEXTAUTH_SECRET
echo -n "  删除 NEXTAUTH_SECRET... "
if vercel env rm NEXTAUTH_SECRET production --yes 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${YELLOW}(不存在或已删除)${NC}"
fi

# 删除 NEXTAUTH_URL
echo -n "  删除 NEXTAUTH_URL... "
if vercel env rm NEXTAUTH_URL production --yes 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${YELLOW}(不存在或已删除)${NC}"
fi

echo ""
echo "➕ 步骤 2/3: 添加新的环境变量..."
echo "----------------------------------------"

# 添加 TURSO_DATABASE_URL
echo -n "  添加 TURSO_DATABASE_URL... "
if echo "$TURSO_DB_URL" | vercel env add TURSO_DATABASE_URL production 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ 失败${NC}"
    exit 1
fi

# 添加 TURSO_AUTH_TOKEN
echo -n "  添加 TURSO_AUTH_TOKEN... "
if echo "$TURSO_TOKEN" | vercel env add TURSO_AUTH_TOKEN production 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ 失败${NC}"
    exit 1
fi

# 添加 NEXTAUTH_SECRET
echo -n "  添加 NEXTAUTH_SECRET... "
if echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ 失败${NC}"
    exit 1
fi

# 添加 NEXTAUTH_URL
echo -n "  添加 NEXTAUTH_URL... "
if echo "$NEXTAUTH_URL" | vercel env add NEXTAUTH_URL production 2>/dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ 失败${NC}"
    exit 1
fi

echo ""
echo "🚀 步骤 3/3: 触发重新部署..."
echo "----------------------------------------"

# 重新部署
echo "  正在部署到生产环境..."
if vercel --prod --yes; then
    echo -e "${GREEN}✓ 部署成功!${NC}"
else
    echo -e "${RED}✗ 部署失败${NC}"
    echo ""
    echo "请手动在 Vercel Dashboard 中重新部署:"
    echo "  https://vercel.com/kevins-projects-fae97d2a/$PROJECT_NAME"
    exit 1
fi

echo ""
echo "=============================================="
echo -e "${GREEN}✅ 环境变量修复完成!${NC}"
echo "=============================================="
echo ""
echo "📝 接下来的步骤:"
echo ""
echo "1. 等待部署完成 (约 1-2 分钟)"
echo ""
echo "2. 验证数据库连接:"
echo "   curl https://laser-spec-hub.vercel.app/api/auth/debug"
echo ""
echo "   预期结果: \"database\": {\"connected\": true}"
echo ""
echo "3. 测试管理员登录:"
echo "   https://laser-spec-hub.vercel.app/admin/login"
echo "   Email: admin@laserspec.com"
echo "   Password: Admin2024!"
echo ""
echo "如果仍有问题，请查看详细文档:"
echo "   ADMIN_LOGIN_DIAGNOSIS.md"
echo ""


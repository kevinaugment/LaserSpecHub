#!/bin/bash
# GitHub 推送解决方案

cd /Users/luokun/Downloads/LaserSpecHub

echo "=== 方案 1: 直接推送 (如果网络正常) ==="
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    exit 0
fi

echo ""
echo "=== 方案 2: 设置代理后推送 ==="
echo "如果你使用代理，请取消注释下面的行并设置正确的代理地址："
echo "# export http_proxy=http://127.0.0.1:7890"
echo "# export https_proxy=http://127.0.0.1:7890"
echo "# git push origin main"

echo ""
echo "=== 方案 3: 使用 GitHub CLI ==="
echo "brew install gh"
echo "gh auth login"
echo "git push origin main"

echo ""
echo "=== 方案 4: 手动上传补丁文件 ==="
echo "在有网络的环境中执行："
echo "git format-patch origin/main"
echo "# 将生成的 .patch 文件传输到有网络的机器"
echo "# 在有网络的机器上："
echo "git am *.patch"
echo "git push origin main"
























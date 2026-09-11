#!/bin/bash
set -e

DEFAULT_REPO="bass-fishing"
LOCAL_DIR="/Users/apple/WorkBuddy/2026-09-11-10-49-41"
DEFAULT_USER="yyxudong"

echo "=================================="
echo "Bass Fishing → GitHub Pages 一键部署"
echo "=================================="
echo ""

read -p "GitHub username [$DEFAULT_USER]: " USERNAME
USERNAME=${USERNAME:-$DEFAULT_USER}

read -p "Repository name [$DEFAULT_REPO]: " REPO_NAME
REPO_NAME=${REPO_NAME:-$DEFAULT_REPO}

read -s -p "GitHub Personal Access Token: " TOKEN
echo ""
echo ""

if [ -z "$TOKEN" ]; then
  echo "Error: Token 不能为空。"
  exit 1
fi

echo "正在检查 GitHub 仓库..."
REPO_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$USERNAME/$REPO_NAME")

if [ "$REPO_STATUS" = "200" ]; then
  echo "仓库已存在，跳过创建。"
elif [ "$REPO_STATUS" = "404" ]; then
  echo "正在创建仓库 $REPO_NAME ..."
  CREATE_RESP=$(curl -s -X POST \
    -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"description\":\"Bass Fishing 路亚渔具电商首页\"}" \
    "https://api.github.com/user/repos")
  if echo "$CREATE_RESP" | grep -q '"full_name"'; then
    echo "仓库创建成功。"
  else
    echo "仓库创建失败，返回信息："
    echo "$CREATE_RESP"
    exit 1
  fi
else
  echo "检查仓库状态异常 (HTTP $REPO_STATUS)，请检查 Token 权限。"
  exit 1
fi

echo ""
echo "正在推送代码..."
cd "$LOCAL_DIR"

# 使用 credential.helper store 临时保存 token，push 后清除
git config --local credential.helper store
REMOTE_URL="https://$USERNAME:$TOKEN@github.com/$USERNAME/$REPO_NAME.git"
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"
git push -u origin main

# 清除 remote 中的 token，恢复为普通 HTTPS URL
git remote set-url origin "https://github.com/$USERNAME/$REPO_NAME.git"
git config --local --unset credential.helper 2>/dev/null || true
rm -f "$LOCAL_DIR/.git/credentials"

echo ""
echo "正在开启 GitHub Pages..."
PAGES_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{"source":{"branch":"main","path":"/"}}' \
  "https://api.github.com/repos/$USERNAME/$REPO_NAME/pages")

if [ "$PAGES_STATUS" = "201" ] || [ "$PAGES_STATUS" = "204" ]; then
  echo "GitHub Pages 开启成功。"
else
  echo "GitHub Pages 开启状态：HTTP $PAGES_STATUS（如果仓库已开启过 Pages，可忽略）"
fi

echo ""
echo "=================================="
echo "部署完成！"
echo "仓库地址：https://github.com/$USERNAME/$REPO_NAME"
echo "网站地址：https://$USERNAME.github.io/$REPO_NAME/"
echo "=================================="
echo ""
echo "提示："
echo "1. 首次访问可能需要等待 1-3 分钟。"
echo "2. 建议到 GitHub Settings -> Developer settings -> Personal access tokens 中删除本次使用的 Token。"

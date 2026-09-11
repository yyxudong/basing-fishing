#!/usr/bin/env python3
import os
import json
import base64
import time
import urllib.request
import urllib.error

TOKEN = os.environ.get("GITHUB_TOKEN")
if not TOKEN:
    print("请先设置环境变量 GITHUB_TOKEN")
    print("示例：GITHUB_TOKEN=ghp_xxx python3 push_via_api.py")
    raise SystemExit(1)
print(f"Token loaded (length: {len(TOKEN)})")

USER = "yyxudong"
REPO = "basing-fishing"
LOCAL_DIR = "/Users/apple/WorkBuddy/2026-09-11-10-49-41"
EXCLUDE_DIRS = {".git", ".workbuddy", ".codebuddy"}


def api_request(method, path, data=None):
    url = f"https://api.github.com{path}"
    headers = {
        "Authorization": f"token {TOKEN}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "BassFishingDeploy",
        "Expect": "",
    }
    body = None
    if data is not None:
        body = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        print(f"\nAPI Error {e.code}: {error_body}")
        raise


def main():
    current_commit_sha = None
    is_empty_repo = False

    print("正在检查仓库状态...")
    try:
        ref = api_request("GET", f"/repos/{USER}/{REPO}/git/refs/heads/main")
        current_commit_sha = ref["object"]["sha"]
        print(f"当前 commit: {current_commit_sha}")
    except urllib.error.HTTPError as e:
        if e.code in (404, 409):
            print("仓库为空，先用 Contents API 创建初始 README...")
            api_request(
                "PUT",
                f"/repos/{USER}/{REPO}/contents/README.md",
                {
                    "message": "Initial commit",
                    "content": base64.b64encode(b"# Bass Fishing\n").decode("ascii"),
                },
            )
            ref = api_request("GET", f"/repos/{USER}/{REPO}/git/refs/heads/main")
            current_commit_sha = ref["object"]["sha"]
            print(f"初始 commit: {current_commit_sha}")
        else:
            raise

    print("正在读取本地文件...")
    tree_items = []
    for root, dirs, files in os.walk(LOCAL_DIR):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for f in files:
            local_path = os.path.join(root, f)
            rel_path = os.path.relpath(local_path, LOCAL_DIR).replace(os.sep, "/")
            try:
                with open(local_path, "rb") as fp:
                    content = fp.read()
            except PermissionError:
                print(f"跳过（无权限）: {rel_path}")
                continue

            # 判断是否为文本
            try:
                text = content.decode("utf-8")
                encoding = "utf-8"
            except UnicodeDecodeError:
                text = base64.b64encode(content).decode("ascii")
                encoding = "base64"

            print(f"创建 blob: {rel_path} ({encoding}, {len(content)} bytes)")
            blob = api_request(
                "POST",
                f"/repos/{USER}/{REPO}/git/blobs",
                {"content": text, "encoding": encoding},
            )
            tree_items.append(
                {
                    "path": rel_path,
                    "mode": "100644",
                    "type": "blob",
                    "sha": blob["sha"],
                }
            )
            time.sleep(0.5)

    print(f"正在创建 tree（共 {len(tree_items)} 个文件）...")
    tree = api_request(
        "POST",
        f"/repos/{USER}/{REPO}/git/trees",
        {"tree": tree_items},
    )

    print("正在创建 commit...")
    commit_payload = {
        "message": "Initial Bass Fishing site",
        "tree": tree["sha"],
    }
    if current_commit_sha:
        commit_payload["parents"] = [current_commit_sha]

    commit = api_request(
        "POST",
        f"/repos/{USER}/{REPO}/git/commits",
        commit_payload,
    )

    if is_empty_repo:
        print("正在创建 main 分支...")
        api_request(
            "POST",
            f"/repos/{USER}/{REPO}/git/refs",
            {"ref": "refs/heads/main", "sha": commit["sha"]},
        )
    else:
        print("正在强制更新 main 分支...")
        api_request(
            "PATCH",
            f"/repos/{USER}/{REPO}/git/refs/heads/main",
            {"sha": commit["sha"], "force": True},
        )

    print("\n✅ Push 完成！")
    print(f"仓库地址：https://github.com/{USER}/{REPO}")


if __name__ == "__main__":
    main()

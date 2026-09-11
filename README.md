# Bass Fishing — 路亚渔具电商首页

一个静态单页电商网站，专注路亚假饵、鱼饵与渔具装备展示。

## 特性

- 中英双语一键切换
- 轮播图（自动 + 手动控制）
- 商品分类（8 大类，已配图）
- 热门商品展示（购物车计数）
- 促销活动 + 优惠码复制
- 加币/美元换算提示
- 响应式设计，支持移动端
- 页面转场动画与涟漪效果

## 在线访问

通过 GitHub Pages 部署后，访问地址为：

```
https://你的用户名.github.io/bass-fishing/
```

## 如何部署到 GitHub Pages

### 第一步：注册 GitHub 账号

1. 打开 [https://github.com/signup](https://github.com/signup)
2. 输入邮箱 → 设置密码 → 创建用户名
3. 按提示完成验证（邮箱验证码）
4. 选择免费版（Free）即可

### 第二步：创建仓库

1. 登录 GitHub，点击右上角 **+** → **New repository**
2. 仓库名填：`bass-fishing`（也可以填其他名字，但会影响最终网址）
3. 选择 **Public**（公开，免费）
4. 勾选 **Add a README file**（也可以不勾，这里已有 README）
5. 点击 **Create repository**

### 第三步：上传本文件夹所有文件

#### 方法 A：网页拖拽上传（最简单，无需配置 git）

1. 进入刚创建的仓库页面
2. 点击 **Add file** → **Upload files**
3. 把本文件夹里的所有文件和文件夹（`index.html`、`css/`、`js/`、`images/`、`README.md`、`.gitignore`）拖进去
4. 点击 **Commit changes**

#### 方法 B：使用 Git 命令（推荐，方便以后更新）

本地 git 仓库已经初始化并提交，remote 也已配置。你只需在 GitHub 创建仓库，然后运行：

```bash
cd /Users/apple/WorkBuddy/2026-09-11-10-49-41
git push -u origin main
```

如果提示输入密码，请输入你的 **GitHub Personal Access Token**（不是登录密码）。如果还没创建 token：

1. GitHub 右上角头像 → **Settings**
2. 左侧最下方 **Developer settings** → **Personal access tokens → Tokens (classic)**
3. 点 **Generate new token (classic)**
4. Note 填 `Bass Fishing deploy`，有效期选 **No expiration**，勾选 `repo`
5. 点 **Generate token**，复制生成的字符串
6. 回到终端粘贴作为密码

> 注意：token 只显示一次，建议先复制保存到安全的地方。

#### 方法 C：一键部署脚本（自动创建仓库 + push + 开启 Pages）

如果你希望一步完成，运行：

```bash
/Users/apple/WorkBuddy/2026-09-11-10-49-41/deploy-to-github.sh
```

脚本会提示输入 GitHub Token，然后自动：

1. 检查并创建 `bass-fishing` 仓库
2. 推送代码
3. 开启 GitHub Pages

运行前需要先创建 Personal Access Token（方法 B 中有步骤）。

### 第四步：开启 GitHub Pages

1. 在仓库页面点击 **Settings**（设置）
2. 左侧菜单选择 **Pages**
3. **Branch** 选择 `main`，文件夹选择 `/ (root)`
4. 点击 **Save**
5. 等待 1-3 分钟，刷新页面，上方会显示绿色网址

## 本地预览

```bash
python3 -m http.server 8080
```

然后打开 http://localhost:8080

## 文件结构

```
.
├── index.html          # 页面结构
├── css/
│   └── style.css       # 样式与响应式布局
├── js/
│   └── main.js         # 轮播、商品渲染、语言切换、购物车等交互
├── images/             # 配图（湖钓、鲈钓、渔具、分类图等）
└── README.md           # 本说明
```

## 后续上新

商品信息在 `js/main.js` 的 `products` 数组里，修改名称、价格、图片 URL 即可。

## 版权

© 2026 Bass Fishing. 本站仅为展示结构，商品陆续上新中。

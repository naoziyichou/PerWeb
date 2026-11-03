# 个人网站 · naoziyichou.xin

纯静态站，无构建步骤、无后端。GitHub Pages 托管，自定义域名 `naoziyichou.xin`。

## 目录

```
index.html          入口（页面外壳，内容由 JS 注入）
site/assets/        样式、脚本、图片
site/content/       全部文案与页面内容（改这里）
CNAME               GitHub Pages 自定义域名
.nojekyll           关闭 Jekyll 处理
```

## 日常修改

- 改文案/项目内容：编辑 `site/content/site-pages.js`、`site/content/projects.js`
- 换图片：放进 `site/assets/img/`，在内容里引用 `site/assets/img/文件名`
- 提交推送后等 1~2 分钟，`https://naoziyichou.xin` 自动更新

## 本地预览

直接双击 `index.html`，或起一个静态服务：

```powershell
npx serve .
```

## 部署要点

- GitHub 仓库 Settings → Pages：Source = `Deploy from a branch`，分支 `main`，目录 `/ (root)`
- Custom domain 填 `naoziyichou.xin`，勾选 `Enforce HTTPS`
- 阿里云 DNS：`@` 四条 A 记录指向 `185.199.108.153 / .109.153 / .110.153 / .111.153`；`www` CNAME 指向 `naoziyichou.github.io`

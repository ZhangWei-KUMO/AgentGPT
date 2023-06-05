# 网站

这个网站是使用[Docusaurus 2](https://docusaurus.io/)构建的，它是一个现代的静态网站生成器。

### 安装

```
> yarn
// 或者
> npm install
```

### 本地开发

```
> yarn start
// 或者
> npm run start
```

这个命令会启动一个本地开发服务器，并打开一个浏览器窗口。大多数更改都可以实时反映在页面上，无需重启服务器。

### 构建

```
> yarn build
// 或者
> npm run build
```

这个命令会将静态内容生成到`build`目录中，并可以使用任何静态内容托管服务进行提供。

## 部署前本地测试
```
npm run serve
```
### 部署

使用SSH：

```
$ USE_SSH=true yarn deploy
```

不使用SSH：

```
$ GIT_USER=<你的GitHub用户名> yarn deploy
```

如果你使用GitHub pages进行托管，这个命令是一种方便的方式来构建网站并推送到`gh-pages`分支。
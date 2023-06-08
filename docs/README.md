# UltraGPT 技术文档

本技术文档是UltraGPT官方[技术文档](https://zhangwei-kumo.github.io/UltraGPT/)，通过[Docusaurus 2](https://docusaurus.io/)生成，由社区成员进行维护。

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
### 部署到自己的Github Page上

使用SSH：

```
$ USE_SSH=true yarn deploy
```

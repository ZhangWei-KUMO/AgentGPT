<p align="center">
  <img src="https://github.com/ZhangWei-KUMO/UltraGPT/blob/main/logo_ultra.png?raw=true" height="300" alt="AgentGPT Logo"/>
</p>
<p align="center">
  <em>🤖 🤖 一款支持中文的AutoGPT客户端  🤖 </em>
</p>
<p align="center">
      <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=18&logo=node.js&color=2334D058" />
      <img src="https://img.shields.io/badge/python-%3E%3D3.11-blue" alt="python">
      <img src="https://img.shields.io/badge/ubuntu-22.04-orange" alt="ubuntu">
</p>

UltraGPT可以帮助您配置和部署自主AI代理,可配置的中文GPT客户端，支持网络搜索、维基百科、中国上市公司数据。集成的第三方API除OpenAI外，还包括：
1. 

目前处于开发阶段，详细内容请查看[技术文档](https://zhangwei-kumo.github.io/UltraGPT)。

## ⚙ 启动

### 配置环境变量
Ultra-GPT给用户构建了自动化环境变量生成脚本，位于项目`cli`文件夹中，用户只需执行`./setup.sh`文件即可在前端**next**项目文件夹和后端**platform**文件夹下各自创建`.env`文件。

```bash
# 下载当前项目
git clone https://github.com/ZhangWei-KUMO/UltraGPT.git && cd UltraGPT
# 运行脚手架，自动化配置前后端环境变量
./setup.sh
```

```bash
# 进入platform文件夹，安装依赖
poetry install
# 运行后端程序（development Model）
poetry run python -m agent_backend
# 进入next中
npm install
# 运行前端程序（development Model）
npm run dev
```

## 🚧 项目架构和技术栈

本项目由四个子项目所组成，分别为环境变量脚手架`cli`,文档网站`docs`,客户端`next`,后端`platform`。其中前端的技术选型在语言中是TypeScript,框架为React应用最多的Next.js框架。
在API通信上使用的是**tRPC**库。后端选择Python语言是鉴于Python在机器学习强大的社区环境，采用的tPeotry进行依赖包管理，整体框架采用FastAPI。在机器学习的库中与大多数GPT应用一样，
选择了LangChain库。


## 前端部署Vercel

[![一键部署UltraGPT](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

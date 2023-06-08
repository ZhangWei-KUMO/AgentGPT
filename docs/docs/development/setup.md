---
sidebar_position: 1
---

# 🛠️ 设置

以下文档将帮助您设置 Ultra-GPT 的本地安装。

> 需要注意的是，在中国境内开发由于众所周知的原因需要开设代理，请在终端配置您的VPN代理。

## 技术栈

- 💅 前端：NextJS + Typescript
- 🐍 后端：FastAPI + Python
- 📚 数据库：通过 Docker 运行的 MySQL，也可以在本地运行 SQLite。

## 交互式设置

我们最近推出了一个交互式设置工具，它将指导您创建 ENV 并运行 Ultra-GPT。只需执行以下命令：

```
git clone https://github.com/ZhangWei-KUMO/AgentGPT && cd AgentGPT
./setup.sh
```

如果您使用的是 Windows，则可以在下载存储库后执行以下操作：

```
cd cli
npm install
npm run start
```

按照这种方式，您可以忽略下面的文本。

## ENV

在开始之前，您需要确保正确配置了 ENV。为此，请将 [.env.example](https://github.com/reworkd/AgentGPT/blob/main/.env.example) 文件复制到 `./next/` 目录中，将其重命名为 `.env` 并根据需要更新值。请注意以下几点：

- 您需要使用自己的值更新 `OPENAI_API_KEY`。有关详细信息，请参见 [FAQ](/faq)
- DB ENV 值取自 `./docker-compose.yml` 中的定义

## 使用 Docker

Docker 构建非常简单，应该可以直接使用。请访问 [他们的网站](https://www.docker.com/) 确保已安装 Docker。完成后，运行以下命令：

```bash
docker-compose up --build
```

这将为前端、后端和数据库启动一个容器。

## 在 Docker 外开发

在 Docker 之外，您只需要配置您的 ENV。此外，您可以使用 `setup.sh` 来步入 ENV 配置，并更新您的 Prisma 配置以指向本地 SQLite 实例。

完成后，您可以运行以下命令来设置 Next.js 项目。在启用 Python 后端时，我们将添加其他说明。

```bash
// Frontend
cd ./next
npm install
npm run dev
```

在另一个窗口中，您可以运行以下命令来启动后端：

```bash
// Backend. 确保您在项目的根目录下
cd ./platform
poetry install
poetry run python -m agent_backend
```

## FastAPI跨域设置

打开`/platform/agent_backend/web/application.py`, 在origin字段中添加允许IP:
```py
  origins = [
        "http://112.65.39.181",
        "https://112.65.39.181",
        "http://localhost",
        "https://localhost",
        settings.frontend_url,
        "https://localhost:3000",
    ]
```
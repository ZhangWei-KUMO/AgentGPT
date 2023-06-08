---
sidebar_position: 2
---

# 🎢 依赖包管理

Poetry 提供了一种按组组织依赖项的方法。例如，您可能拥有仅用于测试项目或构建文档所需的依赖项。

```toml
[tool.poetry]
name = "agent_backend"
version = "0.1.1"
description = ""
authors = ["LewisZhang"]
maintainers = ["LewisZhang"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.9"
fastapi = "^0.96.0"
```

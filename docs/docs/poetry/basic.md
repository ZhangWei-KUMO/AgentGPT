---
sidebar_position: 1
---

# 🎢 简介

UltraGPT是一个较为复杂且使用最前沿技术的应用，整个应用构建在大量的开源库之上，无论是对于Python的版本还是各类库的版本都有着极高的要求，少有不慎就会产生大量的版本冲突问题。为避免开发人员将大量的时间浪费在配置环境上故编写此文档。UltraGPT的后端是由Python3.11编写而成，使用的后端框架为FastAPI，在包的管理上使用的工具为[Poetry](https://python-poetry.org/docs/)。首先我们安装Poetry:

```
curl -sSL https://install.python-poetry.org | python -
```

> 本文所用的系统环境为Ubuntu22，为方便起见也建议用户使用该系统。

安装成功后，我们可以检查其默认安装目录`~/.local/share/pypoetry`。



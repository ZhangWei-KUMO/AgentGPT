---
sidebar_position: 1
---

# 🎢 简介

UltraGPT是一个较为复杂且使用最前沿技术的应用，整个应用构建在大量的开源库之上，无论是对于Python的版本还是各类库的版本都有着极高的要求，少有不慎就会产生大量的版本冲突问题。为避免开发人员将大量的时间浪费在配置环境上故编写此文档。UltraGPT的后端是由Python3.11编写而成，使用的后端框架为FastAPI，在包的管理上使用的工具为[Poetry](https://python-poetry.org/docs/)。首先我们安装Poetry:

> 本文所用的系统环境为Ubuntu22，为方便起见也建议用户使用该系统。

首先安装Python3.11:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.11
vim ~/.bashrc
# 修改~/.bashrc中添加环境变量
alias python='/usr/bin/python3.11'
source ~/.bashrc
which pip
sudo vim /usr/local/bin/pip
```
安装poetry
```bash
curl -sSL https://install.python-poetry.org | POETRY_HOME=/home/ubuntu/etc python -
```
将`export PATH="/home/ubuntu/etc/bin:$PATH"`添加进`~/.bashrc`中后刷新：
```
source ~/.bashrc
```
在将`/home/ubuntu/etc/bin/poetry`中第一行中python指向3.11：
```bash
#!/home/ubuntu/etc/venv/bin/python3.11
```


如果出现重装问题需要先清除缓存：

```bash
rm -rf /home/ubuntu/.cache/pypoetry
```

## 创建项目

```bash
poetry new poetry-demo
```





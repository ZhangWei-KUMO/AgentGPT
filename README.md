<p align="center">
  <img src="https://raw.githubusercontent.com/reworkd/AgentGPT/main/next/public/banner.png" height="300" alt="AgentGPT Logo"/>
</p>
<p align="center">
  <em>🤖 🤖 在浏览器中组装、配置和部署自主 AI 代理  🤖 </em>
</p>
<p align="center">
  <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=18&logo=node.js&color=2334D058" />
  <img alt="Python version" src="https://img.shields.io/badge/python-%E2%89%A53.10-blue" />
  <img alt="Poetry version" src="https://img.shields.io/badge/poetry-%E2%89%A51.5.1-lightgrey" />
  <a href="https://github.com/reworkd/AgentGPT/blob/master/README.md">
    <img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English">
  </a>
  <a href="https://github.com/reworkd/AgentGPT/blob/master/docs/README.zh-HANS.md">
    <img src="https://img.shields.io/badge/lang-简体中文-red.svg" alt="简体中文">
  </a>
  <a href="https://github.com/reworkd/AgentGPT/blob/master/docs/README.hu-Cs4K1Sr4C.md">
    <img src="https://img.shields.io/badge/lang-Hungarian-red.svg" alt="Hungarian">
  </a>
</p>

<p align="center">
<a href="https://agentgpt.reworkd.ai">🔗 Short link</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.reworkd.ai/">📚 Docs</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.reworkd.ai/contributing">🤝 Contribute</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://twitter.com/reworkdai">🐦 Twitter</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://discord.gg/gcmNyAAFfV">📢 Discord</a>
</p>

AgentGPT可以帮助您配置和部署自主AI代理。您可以为其命名，并让它实现任何想象的目标。它会思考要执行的任务，执行这些任务并从结果中学习，以尝试达成目标。这是一项非常先进的技术，可以让您的工作更加高效和智能化。
---

## ✨ Demo
请看视频 [our site](https://agentgpt.reworkd.ai) directly :)

[Demo Video](https://github.com/reworkd/AgentGPT/assets/50181239/5348e44a-29a5-4280-a06b-fe1429a8d99e)


## 👨‍🚀 启动

使用 AgentGPT 的最简单方法是自动设置 CLI，该 CLI 包含在项目中。
CLI 为 AgentGPT 设置以下内容：
- 🔐 [环境变量](https://github.com/reworkd/AgentGPT/blob/main/.env.example) (and API Keys)
- 🗂️ [数据库](https://github.com/reworkd/AgentGPT/tree/main/db) (Mysql)
- 🤖 [后端](https://github.com/reworkd/AgentGPT/tree/main/platform) (FastAPI)
- 🎨 [前端](https://github.com/reworkd/AgentGPT/tree/main/next) (Nextjs)

安装Python3.11,在这里仅以Ubuntu22举例：
```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.11
# 修改~/.bashrc中添加环境变量
alias python='/usr/bin/python3.11'
source ~/.bashrc
# 为pip与python版本号保持一致,将执行环境改为#!/usr/bin/python3.11
sudo vim /usr/local/bin/pip

```
安装mysql:
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql.service
sudo mysql
# 设置root用户的初始密码，如：12345678
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';
exit
# 安全设置，根据提示完成即可
sudo mysql_secure_installation
```

后端的代码由python编写，在包管理上使用了poetry,首先需要进行安装。由于不同的版本不一样，在这里仅以Ubuntu22举例：
```bash
curl -sSL https://install.python-poetry.org | python -
# 在~/.bashrc中添加环境变量,/home/ubuntu/.local/bin/poetry
export PATH="/home/ubuntu/.local/bin:$PATH"
source ~/.bashrc
poetry --version
# 进入platform文件夹，安装依赖
poetry install
# 进入next中
npm install
```

输入如下命令行，启动程序：
```bash
git clone https://github.com/reworkd/AgentGPT.git && cd AgentGPT
./setup.sh
# 进入platform文件夹启动后台
poetry run python -m agent_backend
# 进入next中启动前端
npm run dev
```

> 🐳  推荐在本地使用 [docker-compose](https://www.docker.com/) 设置 AgentGPT，请确保您已安装 Docker。

## 🎉 路线图

这个平台目前处于Beta阶段，已完成和计划中的功能列表可以在我们的网站上找到。 [public roadmap](https://docs.reworkd.ai/roadmap).
其底层主要源于三个AI平台作为支撑：

1. [OpenAI](https://openai.com/) - 大语言模型
2. [Serper](https://serper.dev/) - Google 搜索服务
3. [Replicate](https://replicate.com/) - 图片生成服务

开发人员需要提前在这三个平台开通API Key，同时充值信仰。

## 🚀 技术栈

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg) + [FastAPI-template](https://github.com/s3rius/FastAPI-template).
- ✅ **框架**: [Nextjs 13 + Typescript](https://nextjs.org/) + [FastAPI](https://fastapi.tiangolo.com/)
- ✅ **授权**: [Next-Auth.js](https://next-auth.js.org)
- ✅ **ORM**: [Prisma](https://prisma.io) & [SQLModel](https://sqlmodel.tiangolo.com/).
- ✅ **数据库**: [Planetscale](https://planetscale.com/).
- ✅ **样式**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Schema 验证**: [Zod](https://github.com/colinhacks/zod) + [Pydantic](https://sqlmodel.tiangolo.com/).
- ✅ **大语言模型工具**: [Langchain](https://github.com/hwchase17/langchain).


<h2 align="center">
💝 AutoGPT项目的贡献者 💝
</h2>

<p align="center">
加入我们，支持AgentGPT的发展，这是一个推动AI代理技术边界的开源项目！您的赞助将有助于我们扩大资源规模，增强功能和功能，并继续对这个令人兴奋的项目进行迭代，从而推动进步！🚀
</p>

<p align="center">
<!-- sponsors --><a href="https://github.com/arthurbnhm"><img src="https://github.com/arthurbnhm.png" width="60px" alt="Arthur" /></a><a href="https://github.com/mrayonnaise"><img src="https://github.com/mrayonnaise.png" width="60px" alt="Matt Ray" /></a><a href="https://github.com/jd3655"><img src="https://github.com/jd3655.png" width="60px" alt="Vector Ventures" /></a><a href="https://github.com/durairajasivam"><img src="https://github.com/durairajasivam.png" width="60px" alt="" /></a><a href="https://github.com/floriank"><img src="https://github.com/floriank.png" width="60px" alt="Florian Kraft" /></a><a href="https://github.com/localecho"><img src="https://github.com/localecho.png" width="60px" alt="" /></a><a href="https://github.com/fireheat135"><img src="https://github.com/fireheat135.png" width="60px" alt="" /></a><a href="https://github.com/zoelidity"><img src="https://github.com/zoelidity.png" width="60px" alt="Zoe" /></a><a href="https://github.com/busseyl"><img src="https://github.com/busseyl.png" width="60px" alt="Lucas Bussey" /></a><a href="https://github.com/DuanChaori"><img src="https://github.com/DuanChaori.png" width="60px" alt="" /></a><a href="https://github.com/jukwaphil1"><img src="https://github.com/jukwaphil1.png" width="60px" alt="" /></a><a href="https://github.com/lisa-ee"><img src="https://github.com/lisa-ee.png" width="60px" alt="Lisa" /></a><a href="https://github.com/VulcanT"><img src="https://github.com/VulcanT.png" width="60px" alt="" /></a><a href="https://github.com/kman62"><img src="https://github.com/kman62.png" width="60px" alt="kmotte" /></a><a href="https://github.com/Haithamhaj"><img src="https://github.com/Haithamhaj.png" width="60px" alt="" /></a><a href="https://github.com/SwftCoins"><img src="https://github.com/SwftCoins.png" width="60px" alt="SWFT Blockchain" /></a><a href="https://github.com/ChevalierzA"><img src="https://github.com/ChevalierzA.png" width="60px" alt="" /></a><a href="https://github.com/research-developer"><img src="https://github.com/research-developer.png" width="60px" alt="" /></a><a href="https://github.com/Mitchell-Coder-New"><img src="https://github.com/Mitchell-Coder-New.png" width="60px" alt="" /></a><a href="https://github.com/Trecares"><img src="https://github.com/Trecares.png" width="60px" alt="" /></a><a href="https://github.com/nnkostov"><img src="https://github.com/nnkostov.png" width="60px" alt="Nikolay Kostov" /></a><a href="https://github.com/oryanmoshe"><img src="https://github.com/oryanmoshe.png" width="60px" alt="Oryan Moshe" /></a><a href="https://github.com/ClayNelson"><img src="https://github.com/ClayNelson.png" width="60px" alt="Clay Nelson" /></a><a href="https://github.com/0xmatchmaker"><img src="https://github.com/0xmatchmaker.png" width="60px" alt="0xmatchmaker" /></a><a href="https://github.com/carlosbartolomeu"><img src="https://github.com/carlosbartolomeu.png" width="60px" alt="" /></a><a href="https://github.com/Agronobeetles"><img src="https://github.com/Agronobeetles.png" width="60px" alt="" /></a><a href="https://github.com/CloudyGuyThompson"><img src="https://github.com/CloudyGuyThompson.png" width="60px" alt="Guy Thompson" /></a><a href="https://github.com/Jhonvolt17"><img src="https://github.com/Jhonvolt17.png" width="60px" alt="" /></a><a href="https://github.com/sirswali"><img src="https://github.com/sirswali.png" width="60px" alt="Vusi Dube" /></a><a href="https://github.com/Tweezamiza"><img src="https://github.com/Tweezamiza.png" width="60px" alt="" /></a><a href="https://github.com/DixonFyre"><img src="https://github.com/DixonFyre.png" width="60px" alt="" /></a><a href="https://github.com/jenius-eagle"><img src="https://github.com/jenius-eagle.png" width="60px" alt="" /></a><a href="https://github.com/CubanCongaMan"><img src="https://github.com/CubanCongaMan.png" width="60px" alt="Roberto Luis Sanchez, P.E., P.G.; D,GE; F.ASCE" /></a><a href="https://github.com/cskrobec"><img src="https://github.com/cskrobec.png" width="60px" alt="" /></a><a href="https://github.com/Jahmazon"><img src="https://github.com/Jahmazon.png" width="60px" alt="" /></a><a href="https://github.com/ISDAworld"><img src="https://github.com/ISDAworld.png" width="60px" alt="David Gammond" /></a><a href="https://github.com/lazzacapital"><img src="https://github.com/lazzacapital.png" width="60px" alt="Lazza Capital" /></a><a href="https://github.com/OptionalJoystick"><img src="https://github.com/OptionalJoystick.png" width="60px" alt="" /></a><a href="https://github.com/rodolfoguzzi"><img src="https://github.com/rodolfoguzzi.png" width="60px" alt="" /></a><a href="https://github.com/bluecat2210"><img src="https://github.com/bluecat2210.png" width="60px" alt="" /></a><a href="https://github.com/dactylogram9"><img src="https://github.com/dactylogram9.png" width="60px" alt="" /></a><a href="https://github.com/RUFreeJAC63"><img src="https://github.com/RUFreeJAC63.png" width="60px" alt="" /></a><a href="https://github.com/cecilmiles"><img src="https://github.com/cecilmiles.png" width="60px" alt="" /></a><a href="https://github.com/Djarielm007"><img src="https://github.com/Djarielm007.png" width="60px" alt="" /></a><a href="https://github.com/mikenj07"><img src="https://github.com/mikenj07.png" width="60px" alt="" /></a><a href="https://github.com/SvetaMolusk"><img src="https://github.com/SvetaMolusk.png" width="60px" alt="" /></a><a href="https://github.com/wuminkung"><img src="https://github.com/wuminkung.png" width="60px" alt="" /></a><a href="https://github.com/zhoumo1221"><img src="https://github.com/zhoumo1221.png" width="60px" alt="" /></a><a href="https://github.com/Stefan6666XXX"><img src="https://github.com/Stefan6666XXX.png" width="60px" alt="Stephane DeGuire" /></a><a href="https://github.com/lyska"><img src="https://github.com/lyska.png" width="60px" alt="Lyska" /></a><a href="https://github.com/KurganKolde"><img src="https://github.com/KurganKolde.png" width="60px" alt="" /></a><a href="https://github.com/sclappccsu"><img src="https://github.com/sclappccsu.png" width="60px" alt="Sharon Clapp at CCSU" /></a><a href="https://github.com/Rooba-Finance"><img src="https://github.com/Rooba-Finance.png" width="60px" alt="Rooba.Finance" /></a><a href="https://github.com/ferienhausmiete"><img src="https://github.com/ferienhausmiete.png" width="60px" alt="" /></a><a href="https://github.com/benjaminbales"><img src="https://github.com/benjaminbales.png" width="60px" alt="Benjamin Bales" /></a><a href="https://github.com/pimentel233"><img src="https://github.com/pimentel233.png" width="60px" alt="" /></a><a href="https://github.com/PinkyWobbles"><img src="https://github.com/PinkyWobbles.png" width="60px" alt="" /></a><a href="https://github.com/jconroy11"><img src="https://github.com/jconroy11.png" width="60px" alt="" /></a><a href="https://github.com/DavidJamesRotenberg"><img src="https://github.com/DavidJamesRotenberg.png" width="60px" alt="" /></a><a href="https://github.com/antecochat"><img src="https://github.com/antecochat.png" width="60px" alt="" /></a><a href="https://github.com/RealBonOfaSitch"><img src="https://github.com/RealBonOfaSitch.png" width="60px" alt="" /></a><!-- sponsors -->
</p>

<h2 align="center">
💪 贡献者 💪
</h2>

<p align="center">
感谢以下源码贡献者! 🙏
</p>

<a href="https://github.com/reworkd/agentgpt/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=reworkd/agentgpt" />
</a>

<div align="center">
<sub>Made with <a href="https://contrib.rocks">contrib.rocks</a>.</sub>
</div>

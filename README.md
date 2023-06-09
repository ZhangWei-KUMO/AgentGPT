<p align="center">
  <img src="https://github.com/ZhangWei-KUMO/UltraGPT/blob/main/logo_ultra.png?raw=true" height="300" alt="AgentGPT Logo"/>
</p>
<p align="center">
  <em>🤖 🤖 一款支持中文的AutoGPT客户端  🤖 </em>
</p>

<p align="center">
      <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=18&logo=node.js&color=2334D058" />
      <img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English">
      <img src="https://img.shields.io/badge/lang-简体中文-red.svg" alt="简体中文">
      <img src="https://img.shields.io/badge/lang-Hungarian-red.svg" alt="Hungarian">
</p>

[

UltraGPT可以帮助您配置和部署自主AI代理,可配置的中文GPT客户端，支持网络搜索、维基百科、中国上市公司数据。目前处于开发阶段，更多详细请查看[技术文档](https://zhangwei-kumo.github.io/UltraGPT)。

## 👨‍🚀 启动

### 配置环境变量
Ultra-GPT给用户构建了自动化环境变量生成脚本，位于项目`cli`文件夹中，用户只需执行`./setup.sh`文件即可在前端**next**项目文件夹和后端**platform**文件夹下各自创建`.env`文件。

```
git clone https://github.com/ZhangWei-KUMO/UltraGPT.git && cd UltraGPT
./setup.sh
```

### 执行环境配置
安装Python3.11,在这里仅以Ubuntu22举例：
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
# 进入platform文件夹，安装依赖
poetry install
# 进入next中
npm install
```

输入如下命令行，启动程序：
```bash
./setup.sh
# 进入platform文件夹启动后台
poetry run python -m agent_backend
# 启动守护者进程
nohup poetry run python -m agent_backend > ~/py.log &
# 查看进程,停止守护者进程
ps -fA | grep python
kill [PID]
# 进入next中启动前端
npm run dev
```
## 部署
![一键部署UltraGPT](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)
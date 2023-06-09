---
sidebar_position: 8
---

# 🏡 数据库配置

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
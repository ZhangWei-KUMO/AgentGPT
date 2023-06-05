#!/bin/sh

#!/bin/bash
DB_PASSWORD=""
HOST="localhost"
PORT=3306
while true
do
    echo "测试数据库连接..."
    mysql -h $HOST -P $PORT -u root -p$DB_PASSWORD -e "SELECT 1" >/dev/null 2>&1
    if [ $? -eq 0 ]
    then
        echo "数据库连接成功"
    else
        echo "数据库连接失败"
    fi
    sleep 2
done

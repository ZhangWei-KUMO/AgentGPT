#!/bin/bash
# 切换到当前脚本所在目录
cd "$(dirname "$0")" || exit 1
# 进入cli目录
cd ./cli || exit 1
npm install
npm run start

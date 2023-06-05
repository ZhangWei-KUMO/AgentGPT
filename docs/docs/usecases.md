---
sidebar_position: 6
---

# 🔥 已知问题

1. M1 芯片不兼容prisma
Prisma Client 是一个自动生成的数据库客户端，专为您的数据库模式量身定制。默认情况下，Prisma Client 生成到 node_modules/.prisma/client 文件夹中。
报错信息：unhandledRejection: PrismaClientInitializationError: Query engine library for current platform "darwin-arm64" could not be found.

解决方案：
```bash
# Uninstall old CLI                                                 │
npm uninstall @prisma/cli 
# Install new CLI    
npm install prisma --save-dev    
# 重新生成Prisma Client到./node_modules/@prisma/client 
npx prisma generate      
```
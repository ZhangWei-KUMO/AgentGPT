---
sidebar_position: 6
---

# ✈️ Vercel部署项目

[![一键部署UltraGPT](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

## 前端部署
**Framework Preset**选择`Next.js`,**Root Directory**选择`next`

在**Environment Variables**框中依次填入如下变量:

```bash
NODE_ENV="production"
NEXT_PUBLIC_BACKEND_URL="YOUR_BACK_END_URL"
PLATFORM_URL="YOUR_BACK_END_URL"
```

## 后端部署

在ENV框中依次填入如下变量:

```bash
BACK_END_ENVIRONMENT="development"
BACK_END_FF_MOCK_MODE_ENABLED="false"
BACK_END_OPENAI_API_KEY="YOUR_OPENAI_KEY"
BACK_END_FRONTEND_URL="YOUR_FROND_END_URL"
BACK_END_RELOAD="true"
BACK_END_OPENAI_API_BASE="https://api.openai.com/v1"
BACK_END_SERP_API_KEY="YOUR_SERP_API_KEY"
BACK_END_REPLICATE_API_KEY="YOUR_REPLICATE_API_KEY"
BACK_END_VECTOR_DB_URL="YOUR_VECTOR_DB_URL"
BACK_END_VECTOR_DB_API_KEY="YOUR_VECTOR_DB_API_KEY"
BACK_END_TUSHARE_API_KEY=YOUR_TUSHARE_API_KEY"
```
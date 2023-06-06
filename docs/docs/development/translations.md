---
sidebar_position: 2
---

# 🌎 翻译

Ultra-GPT 由许多贡献者（如 @Cs4K1Sr4C）的帮助下，拥有多种语言的翻译。我们始终在努力改进翻译，但如果您发现有问题或遗漏，请随时进行必要的更新或在 GitHub 上提交工单！

## 翻译前端

我们使用 i18next 处理前端翻译。它的工作原理是我们为每种语言创建一个文件夹，例如 [next/public/locales](https://github.com/reworkd/AgentGPT/tree/main/next/public/locales)。

```bash title="next/public/locales"
> en
> fr
> hu
...
> zh
```

对于应用程序中的每个组件，我们将它们的翻译命名空间化。例如，我们的 ChatWindow 使用 `chat` 命名空间，其翻译将在每个文件夹下的 `chat.json` 中找到。翻译是键值对，其中键表示所需的文本，值表示给定语言的翻译。

来自 `chat` 命名空间的示例：

- 英语：`"EMBARKING_ON_NEW_GOAL": "Embarking on a new goal:"`
- 西班牙语：`"EMBARKING_ON_NEW_GOAL": "Embarcándose en un nuevo objetivo:"`

#### 添加新语言

要添加新语言，请进入我们的 i18 配置并添加新语言环境

```bash title="next/next-i18next.config.js"
i18n: {
  defaultLocale: "en",
  locales:
  [
    "en",
    "hu",
    ...,
    "sk",
    "hr",
    "tr",
    // 在此处插入新的语言代码
  ],
  ...
```

然后转到我们的语言定义，并将可用语言列表添加到该部分

```tsx title="next/src/utils/languages.ts"
export const availableLanguages: Language[] = [
  ENGLISH,
  { code: "fr", name: "Français", flag: "🇫🇷" },
  // ...
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  // 在此处插入新语言
];
```

之后，您必须在 [next/public/locales](https://github.com/reworkd/AgentGPT/tree/main/next/public/locales) 中创建一个具有您的语言代码的新文件夹，并为应用程序的所有命名空间添加翻译。请注意，这些值可能无法热重载，因此您必须手动重新启动下一个服务器。

## 翻译后端

后端翻译通过模型本身处理。我们只需提示它以用户选择的语言提供答案即可。这意味着，每当添加新的前端语言时，后端立即支持该语言！但是，这也意味着我们目前没有太多空间实际编辑模型提供的翻译。


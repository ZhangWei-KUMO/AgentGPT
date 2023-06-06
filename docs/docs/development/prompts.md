---
sidebar_position: 3
---

# 💬 Prompts 提示词

Prompts是我们用来动态对齐语言模型行为与当前代理目标/任务的工具。我们主要使用 `gpt-3.5-turbo` 作为我们的代理，它表明其结果受到Prompts最细节的影响非常大。

## 开始Prompts

- [学习提示文档](https://learnprompting.org/)
- [提示工程指南](https://www.promptingguide.ai/techniques/consistency)
- [开发人员的提示工程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

## Ultra-GPT 中的技术

### 计划和解决

[计划和解决(PS)](https://arxiv.org/abs/2305.04091) 建立在思维链提示的基础上，这是一种提示方法，只需简单地向模型询问逐步说明即可使模型更准确地推理问题。 PS 是一种零-shot方法，可增加关于抽象目标推理的准确性。本质上，它涉及向模型提出以下问题：

1. 首先理解问题
2. 提取相关变量和相应的值
3. 设计一个完整的计划，**逐步执行**

您可以通过该论文的 [GitHub 存储库](https://github.com/AGI-Edgerunners/Plan-and-Solve-Prompting) 了解更多信息。当代理第一次运行时，我们利用计划和解决提示生成我们的初始任务列表。这种技术类似于 BabyAGI 的操作方式。

### ReAct

ReAct 代表推理+动作。它是一种提示技术，将推理和动作生成交织在单个输出中，使模型能够更好地协同思想和行动。
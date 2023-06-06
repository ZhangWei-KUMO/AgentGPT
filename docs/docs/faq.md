---
sidebar_position: 4
---

# ❓ 常见问题

### 简介

以下是关于 Ultra-GPT 最常见的问题列表。如果您有任何未解答的问题，请在 [Discord](https://discord.gg/jdSBAnmdnY) 或 [GitHub](https://github.com/reworkd/AgentGPT) 上联系我们的管理或开发团队。

### 代理问题

<details>
<summary>Ultra-GPT说它创建了一个文件/数据库/脚本，我在哪里可以找到它？</summary>
目前，AgentGPT无法以这种方式输出，但这是我们正在积极研究的内容。
请关注我们的<a href="/roadmap">路线图</a>，以了解此功能可能何时可用。
</details>

<details>
<summary>我的代理程序总是运行出错！</summary>
由于 API 和基础设施成本，我们必须限制代理程序的运行时间 😢。

为了规避这个问题，您可以访问我们的<a href="/roadmap">设置文档</a>，使用自己的 API 密钥在本地托管 Ultra-GPT。
或者，您可以订阅我们的专业计划以增加限制。
</details>

<details>
<summary>我的代理程序一开始表现很好，但后来停止了！我能从上次离开的地方继续吗？</summary>
目前，所有代理程序运行都是相互隔离的，因此这是不可能的。
这是我们未来要添加的功能之一，但同时，您可以使用它为您生成的信息创建另一个 Ultra-GPT 运行。
请关注我们的<a href="/roadmap">路线图</a>，以了解此功能可能何时可用。
</details>

<details>
<summary>凹凸GPT能使用 GPT-4 吗？</summary>
Ultra-GPT 目前为免费用户使用 GPT-3.5，家里没矿是主要原因
</details>

<details>
<summary>为什么输出总是被截断？</summary>
输出越长，我们生成它的成本就越高。
因此，我们对输出长度进行了限制，这可能会导致较长的消息被截断。
如果您提供自己的 API 密钥，可以通过增加令牌数量来增加设置菜单中的高级设置中的输出长度。
</details>

### 其他问题

<details>
<summary>这与 ChatGPT 有什么区别？</summary>
ChatGPT 是一个很棒的工具，可以让您提出特定的问题并获得结果。它还会跟随对话，因此在收到响应后，您可以继续与其交谈，并且它将记住（在限制范围内）之前讨论过的内容。

另一方面，AgentGPT 是一个 AI 代理平台。您可以配置代理以实现广泛目标，它将自动思考和执行任务以实现该目标。
</details>

<details>
<summary>这与 Ultra-GPT 有什么区别？</summary>
Ultra-GPT 和 AutoGPT 都是涉及自主 AI 代理的项目。Ultra-GPT 是一个本地运行的工具，而 Ultra-GPT 是一个基于 Web 的平台。
</details>

<details>
<summary>AUltra-GPT 能做什么？</summary>
Ultra-GPT 可以做很多事情，但我们也正在努力赋予它更多功能。请访问我们的<a href="/usecases">用例</a>页面，了解人们目前如何使用 AgentGPT。
</details>

<details>
<summary>Ultra-GPT 是否可以访问互联网？</summary>
目前还没有，但这很快就会来！请关注我们的<a href="/roadmap">路线图</a>。
</details>

### 本地贡献问题

<details>
<summary>我在本地设置 Ultra-GPT 时遇到了麻烦！</summary>
请访问我们的<a href="/development/setup">设置文档</a>以诊断任何问题。如果您有未记录的问题，请在<a href="https://github.com/reworkd/AgentGPT/issues">GitHub 上提交问题</a>。
</details>
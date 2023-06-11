---
sidebar_position: 6
---

# ⛑ LangChain

LangChain是一个用于开发基于语言模型的应用程序开发框架。总的来说，LangChain是一个链接面向用户程序和LLM之间的一个中间层。LangChain 可以轻松管理与语言模型的交互，将多个组件链接在一起，并集成额外的资源，例如 API 和数据库。其组件包括了模型（各类LLM），提示模板（Prompts），索引，代理（Agent），记忆等等。对于英文LangChain一般会使用RecursiveCharacterTextSplitter处理。由于中文的复杂性，会使用到jieba等处理工具预处理中文语句。本项目的底层就是基于LangChain构建而成。

我们以一个简单的爬虫为例：

```python
import os
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMRequestsChain, LLMChain

template = """在 >>> 和 <<< 之间是网页的返回的HTML内容。
分析网页的HTML内容，这是一份贵州茅台的资产负债表，请帮我生成一份财务报表的分析，
并告诉我重点需要注意哪些点。该公司股票是否值得投资。
>>> {requests_result} <<<
"""
prompt = PromptTemplate(
    input_variables=["requests_result"],
    template=template
)
llm = OpenAI(model_name="gpt-3.5-turbo", temperature=0)
chain = LLMRequestsChain(llm_chain=LLMChain(llm=llm, prompt=prompt))
inputs = {
  "url": "https://vip.stock.finance.sina.com.cn/corp/go.php/vFD_BalanceSheet/stockid/"
  +"600519/ctrl/part/displaytype/4.phtml"
}

response = chain(inputs)
```
在这个Demo中可以通过LLMRequestsChain轻松地爬取金融数据，事实上，LangChain的Chain有很多种下面就开始一一介绍：

1. **基础链 LLMChain** - 是使用最广泛的链，通过实例化一个ChatOpenAI的llm大语言模型对象，准备后一个Prompt模板就可以运行一个链；
2. **异步API链 Async API for Chain** - 它是LLMChain的异步形式，通过`async` `await` `chain.arun()`可以异步输出结果；
3. **分析文本链 SummarizeChain** - 这个也是应用非常广泛的链，用于对于LLMChain输出的总结，因为受制于tokens的长度限制，所以在chain_type属性上通常设置`chain_type="map_reduce"`；
4. **网络请求链 LLMRequestsChain** - 该链接受一个`input`对象，其中包含`question`和`url`两个属性，用于向指定网页请求HTML文件，注意当前很多网站采用前端渲染方式，所以该链存在一定的局限性。
5. **OpenAPI Chain** - 通过调用指定的API进行交互
6. **假设性文档嵌入 Hypothetical Doc Embeddings** - 用于对本地内容进行向量化后增加GPT上下文内容

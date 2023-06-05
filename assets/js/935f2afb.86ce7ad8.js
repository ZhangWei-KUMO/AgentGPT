"use strict";(self.webpackChunkaotugpt_documentation=self.webpackChunkaotugpt_documentation||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83e\udd16 \u9879\u76ee\u4ecb\u7ecd","href":"/AgentGPT/","docId":"index"},{"type":"category","label":"\ud83d\udda5  \u5f00\u53d1","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udee0\ufe0f \u8bbe\u7f6e","href":"/AgentGPT/development/setup","docId":"development/setup"},{"type":"link","label":"\ud83c\udf0e \u7ffb\u8bd1","href":"/AgentGPT/development/translations","docId":"development/translations"},{"type":"link","label":"\ud83d\udcac Prompts \u63d0\u793a\u8bcd","href":"/AgentGPT/development/prompts","docId":"development/prompts"},{"type":"link","label":"\ud83e\udde0 \u5185\u5b58","href":"/AgentGPT/development/memory","docId":"development/memory"}],"href":"/AgentGPT/development/"},{"type":"link","label":"\ud83d\ude80 \u53d1\u5c55\u8ba1\u5212","href":"/AgentGPT/roadmap","docId":"roadmap"},{"type":"link","label":"\u2753 \u5e38\u89c1\u95ee\u9898","href":"/AgentGPT/faq","docId":"faq"},{"type":"link","label":"\ud83e\udd1d \u8d21\u732e","href":"/AgentGPT/contributing","docId":"contributing"},{"type":"link","label":"\ud83d\udd25 \u4f7f\u7528\u573a\u666f","href":"/AgentGPT/usecases","docId":"usecases"}]},"docs":{"contributing":{"id":"contributing","title":"\ud83e\udd1d \u8d21\u732e","description":"\u51f9\u51f8GPT\u7684\u5f00\u6e90\uff0c\u6211\u4eec\u7684\u6210\u529f\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5f52\u529f\u4e8e\u6211\u4eecGPT\u793e\u533a\uff0c\u5176\u4e2d\u4e3b\u8981\u611f\u8c22AgentGPT\u3001LangChain\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u53cd\u9988\uff0c\u65e0\u8bba\u662f\u75af\u72c2\u7684\u60f3\u6cd5\u8fd8\u662f\u4ee3\u7801\u548c\u8bbe\u8ba1\u65b9\u9762\u7684\u610f\u89c1\u3002\u8fd9\u4e9b\u6587\u6863\u5c06\u4f1a\u9010\u6b65\u66f4\u65b0\uff0c\u4ee5\u6700\u597d\u5730\u63cf\u8ff0\u5982\u4f55\u4e3a \u51f9\u51f8GPT \u505a\u51fa\u8d21\u732e\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u65e0\u8bba\u4f60\u662f\u8bbe\u8ba1\u5e08\u3001\u5f00\u53d1\u4eba\u5458\u6216\u8005\u4ecb\u4e8e\u4e24\u8005\u4e4b\u95f4\u7684\u804c\u4e1a\uff0c\u90fd\u53ef\u4ee5\u5728 GitHub \u6216 \u5fae\u4fe1 \u4e0a\u8054\u7cfb\u6211\u4eec\u3002","sidebar":"tutorialSidebar"},"development/index":{"id":"development/index","title":"\ud83d\udda5  \u5f00\u53d1","description":"","sidebar":"tutorialSidebar"},"development/memory":{"id":"development/memory","title":"\ud83e\udde0 \u5185\u5b58","description":"\u4e3a\u4e86\u5b9e\u73b0\u7ed9\u5b9a\u7684\u76ee\u6807\uff0cAI \u4ee3\u7406\u6267\u884c\u591a\u79cd\u4efb\u52a1\uff0c\u8003\u8651\u5230\u5b83\u4eec\u81ea\u5df1\u7684\u6267\u884c\u5386\u53f2\u3002\u5f53\u4ee3\u7406\u957f\u65f6\u95f4\u8fd0\u884c\u65f6\uff0c\u8fd9\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u8bb0\u5fc6\u901a\u5e38\u53ea\u6709\u4e0a\u4e0b\u6587\u957f\u5ea6\u90a3\u4e48\u5927\u3002\u5728 GPT-3.5 \u548c GPT-4 \u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5927\u7ea6\u662f 8k \u4e2a\u4ee4\u724c\u3002","sidebar":"tutorialSidebar"},"development/prompts":{"id":"development/prompts","title":"\ud83d\udcac Prompts \u63d0\u793a\u8bcd","description":"Prompts\u662f\u6211\u4eec\u7528\u6765\u52a8\u6001\u5bf9\u9f50\u8bed\u8a00\u6a21\u578b\u884c\u4e3a\u4e0e\u5f53\u524d\u4ee3\u7406\u76ee\u6807/\u4efb\u52a1\u7684\u5de5\u5177\u3002\u6211\u4eec\u4e3b\u8981\u4f7f\u7528 gpt-3.5-turbo \u4f5c\u4e3a\u6211\u4eec\u7684\u4ee3\u7406\uff0c\u5b83\u8868\u660e\u5176\u7ed3\u679c\u53d7\u5230Prompts\u6700\u7ec6\u8282\u7684\u5f71\u54cd\u975e\u5e38\u5927\u3002","sidebar":"tutorialSidebar"},"development/setup":{"id":"development/setup","title":"\ud83d\udee0\ufe0f \u8bbe\u7f6e","description":"\u4ee5\u4e0b\u6587\u6863\u5c06\u5e2e\u52a9\u60a8\u8bbe\u7f6e AgentGPT \u7684\u672c\u5730\u5b89\u88c5\u3002","sidebar":"tutorialSidebar"},"development/translations":{"id":"development/translations","title":"\ud83c\udf0e \u7ffb\u8bd1","description":"AgentGPT \u7531\u8bb8\u591a\u8d21\u732e\u8005\uff08\u5982 @Cs4K1Sr4C\uff09\u7684\u5e2e\u52a9\u4e0b\uff0c\u62e5\u6709\u591a\u79cd\u8bed\u8a00\u7684\u7ffb\u8bd1\u3002\u6211\u4eec\u59cb\u7ec8\u5728\u52aa\u529b\u6539\u8fdb\u7ffb\u8bd1\uff0c\u4f46\u5982\u679c\u60a8\u53d1\u73b0\u6709\u95ee\u9898\u6216\u9057\u6f0f\uff0c\u8bf7\u968f\u65f6\u8fdb\u884c\u5fc5\u8981\u7684\u66f4\u65b0\u6216\u5728 GitHub \u4e0a\u63d0\u4ea4\u5de5\u5355\uff01","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"\u2753 \u5e38\u89c1\u95ee\u9898","description":"\u7b80\u4ecb","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"\ud83e\udd16 \u9879\u76ee\u4ecb\u7ecd","description":"\u6b22\u8fce\u4f7f\u7528 \u51f9\u51f8GPT \ud83d\udc4b\uff0c\u8fd9\u662f\u4e00\u4e2a\u7531AgentGPT \u5206\u652f\u51fa\u6765\u7684\u4e2d\u6587 AI \u4ee3\u7406\u5e73\u53f0\uff0c\u53ef\u4ee5\u4f7f\u7528\u6237\u5728\u7f51\u9875\u4e0a\u521b\u5efa\u548c\u90e8\u7f72\u53ef\u5b9a\u5236\u7684 AI \u4ee3\u7406\u3002","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"\ud83d\ude80 \u53d1\u5c55\u8ba1\u5212","description":"\u51f9\u51f8GPT\u76ee\u524d\u5904\u4e8ebeta\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6211\u4eec\u6709\u5f88\u591a\u529f\u80fd\u8ba1\u5212\u3002\u4ee5\u4e0b\u662f\u6211\u4eec\u6b63\u5728\u5f00\u53d1\u7684\u4e00\u4e9b\u529f\u80fd\u3002","sidebar":"tutorialSidebar"},"usecases":{"id":"usecases","title":"\ud83d\udd25 \u4f7f\u7528\u573a\u666f","description":"\u5982\u679c\u60a8\u6709\u65b0\u7684\u5e94\u7528\u573a\u666f\u53ef\u4ee5\u901a\u8fc7\u5fae\u4fe1\u544a\u77e5\u6211\u4eec:15502178435","sidebar":"tutorialSidebar"}}}')}}]);
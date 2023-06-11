from typing import Any, List

import aiohttp
from fastapi.responses import StreamingResponse as FastAPIStreamingResponse

from agent_backend.schemas import ModelSettings
from agent_backend.settings import settings
from agent_backend.web.api.agent.tools.stream_mock import stream_string
from agent_backend.web.api.agent.tools.tool import Tool
from agent_backend.web.api.agent.tools.utils import summarize

# serper.dev. Adapted from LangChain
# https://github.com/hwchase17/langchain/blob/master/langchain/utilities

async def _google_serper_search_results(
    search_term: str, search_type: str = "search"
) -> dict[str, Any]:
    headers = {
        "X-API-KEY": settings.serp_api_key or "",
        "Content-Type": "application/json",
    }
    if(search_term==""):
        return {"answerBox": {"answer": "没有搜索到相关信息"}}
    params = {
        "q": search_term,
    }
   # 调用serper.dev的API
    async with aiohttp.ClientSession() as session:
        async with session.post(
            f"https://google.serper.dev/{search_type}", headers=headers, params=params
        ) as response:
            response.raise_for_status()
            search_results = await response.json()
            return search_results


class Search(Tool):
    description = (
        "搜索谷歌以获取简单问题的短期和最新答案。 \n"
        "参数将会变成搜索查询"
    )
    public_description = "搜索谷歌以获取有关当前事件的信息。"

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)

    @staticmethod
    def available() -> bool:
        return settings.serp_api_key is not None

    async def call(
        self, goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        # 获取Google搜索结果
        results = await _google_serper_search_results(
            input_str,
        )
        k = 6  # 返回结果数
        max_links = 3  # 返回链接数
        snippets: List[str] = []
        links: List[str] = []
    
        if results.get("answerBox"):
            answer_values = []
            answer_box = results.get("answerBox", {})
            if answer_box.get("answer"):
                answer_values.append(answer_box.get("answer"))
            elif answer_box.get("snippet"):
                answer_values.append(answer_box.get("snippet").replace("\n", " "))
            elif answer_box.get("snippetHighlighted"):
                answer_values.append(", ".join(answer_box.get("snippetHighlighted")))

            if len(answer_values) > 0:
                return stream_string("\n".join(answer_values), True)
       
        if results.get("knowledgeGraph"):
            kg = results.get("knowledgeGraph", {})
            title = kg.get("title")
            entity_type = kg.get("type")
            if entity_type:
                snippets.append(f"{title}: {entity_type}.")
            description = kg.get("description")
            if description:
                snippets.append(description)
            for attribute, value in kg.get("attributes", {}).items():
                snippets.append(f"{title} {attribute}: {value}.")
         # 遍历从Google搜索结果中获取的信息，取前6个合并成背景资料
        for result in results["organic"][:k]:
            if "snippet" in result:
                snippets.append(result["snippet"])
            if "link" in result and len(links) < max_links:
                links.append(result["link"])
            for attribute, value in result.get("attributes", {}).items():
                snippets.append(f"{attribute}: {value}.")

        if len(snippets) == 0:
            return stream_string("Google搜索引擎中没有搜索到相关信息", True)
        
        # 生成摘要
        return summarize(self.model_settings, goal, task, snippets)


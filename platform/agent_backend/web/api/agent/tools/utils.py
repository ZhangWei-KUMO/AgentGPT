from typing import List
from lanarky.responses import StreamingResponse
from langchain import LLMChain
from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.model_settings import create_model

def summarize(
    model_settings: ModelSettings, goal: str, query: str, snippets: List[str]
):
    from agent_backend.web.api.agent.prompts import summarize_prompt

    chain = LLMChain(
        llm=create_model(model_settings, streaming=True),
          prompt=summarize_prompt
    )

    args = {
            "goal": goal, 
            "query": query,
            "snippets": snippets
         }
    markdown = chain.run(args)
    print("触发总结")
    return markdown

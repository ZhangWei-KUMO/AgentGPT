from typing import List

from fastapi.responses import StreamingResponse as FastAPIStreamingResponse
from lanarky.responses import StreamingResponse
from langchain import LLMChain

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.model_settings import create_model


def summarize(
    model_settings: ModelSettings, goal: str, query: str, snippets: List[str]
) -> FastAPIStreamingResponse:
    from agent_backend.web.api.agent.prompts import summarize_prompt

    chain = LLMChain(
        llm=create_model(model_settings, streaming=True), prompt=summarize_prompt
    )

    return StreamingResponse.from_chain(
        chain,
        {"goal": goal, "query": query, "snippets": snippets},
        media_type="text/event-stream",
    )

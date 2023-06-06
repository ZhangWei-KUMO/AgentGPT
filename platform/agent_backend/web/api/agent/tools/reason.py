from fastapi.responses import StreamingResponse as FastAPIStreamingResponse
from lanarky.responses import StreamingResponse
from langchain import LLMChain

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.model_settings import create_model
from agent_backend.web.api.agent.tools.tool import Tool


class Reason(Tool):
    description = (
        "通过现有的信息或理解来推理任务。 "
        "从选项中做出决策/选择。"
    )

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)

    async def call(
        self, goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        from agent_backend.web.api.agent.prompts import execute_task_prompt

        llm = create_model(self.model_settings, streaming=True)
        chain = LLMChain(llm=llm, prompt=execute_task_prompt)

        return StreamingResponse.from_chain(
            chain,
            {"goal": goal, 
             "language": "English", 
             "task": task
            },
            media_type="text/event-stream",
        )
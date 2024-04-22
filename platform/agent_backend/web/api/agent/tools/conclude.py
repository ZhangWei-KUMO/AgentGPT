from fastapi.responses import StreamingResponse as FastAPIStreamingResponse

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.tools.stream_mock import stream_string
from agent_backend.web.api.agent.tools.tool import Tool


class Conclude(Tool):
    description = "Use when there is nothing else to do. The task has been concluded."

    async def call(
        self,goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        print("触发Conclude")
        return stream_string("对任务进行总结", delayed=True)
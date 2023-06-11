from fastapi.responses import StreamingResponse as FastAPIStreamingResponse

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.tools.stream_mock import stream_string
from agent_backend.web.api.agent.tools.tool import Tool


class Conclude(Tool):
    description = "Use when there is nothing else to do. The task has been concluded."

    async def call(
        self,goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        print("Task execution concluded.")
        return stream_string("Task execution concluded.", delayed=True)
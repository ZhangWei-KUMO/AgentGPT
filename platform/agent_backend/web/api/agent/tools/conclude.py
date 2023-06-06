from fastapi.responses import StreamingResponse as FastAPIStreamingResponse

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.tools.stream_mock import stream_string
from agent_backend.web.api.agent.tools.tool import Tool


class Conclude(Tool):
    description = "当前任务已经完成。"

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)

    async def call(
        self, goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        return stream_string("Task execution concluded.", delayed=True)

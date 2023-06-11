import openai
import replicate
from fastapi.responses import StreamingResponse as FastAPIStreamingResponse
from replicate.exceptions import ModelError, ReplicateError as ReplicateAPIError

from agent_backend.schemas import ModelSettings
from agent_backend.settings import settings
from agent_backend.web.api.agent.api_utils import rotate_keys
from agent_backend.web.api.agent.tools.stream_mock import stream_string
from agent_backend.web.api.agent.tools.tool import Tool
from agent_backend.web.api.errors import ReplicateError


async def get_replicate_image(input_str: str) -> str:
    if settings.replicate_api_key is None:
        raise RuntimeError("Replicate API key not set")

    client = replicate.Client(settings.replicate_api_key)
    try:
        output = client.run(
            "stability-ai/stable-diffusion"
            ":db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            input={"prompt": input_str},
            image_dimensions="312x312",
        )
        print("生成图片",output)
    except ModelError as e:
        raise ReplicateError(e, "Image generation failed due to NSFW image.")
    except ReplicateAPIError as e:
        raise ReplicateError(e, "生成图片失败")

    return output[0]

class Image(Tool):
    description = (
        "Used to sketch, draw, or generate an image. The input string "
        "should be a detailed description of the image touching on image "
        "style, image focus, color, etc"
    )
    public_description = "Generate AI images."

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)

    async def call(
        self, goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
            url = await get_replicate_image(input_str)
            return stream_string(f"![{input_str}]({url})")

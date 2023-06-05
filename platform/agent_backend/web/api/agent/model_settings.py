import openai
from langchain.chat_models import ChatOpenAI

from agent_backend.schemas import ModelSettings
from agent_backend.settings import settings
from agent_backend.web.api.agent.api_utils import rotate_keys

openai.api_base = settings.openai_api_base


def create_model(model_settings: ModelSettings, streaming: bool = False) -> ChatOpenAI:
    print("创建模型")
    return ChatOpenAI(
        client=None,  # Meta private value but mypy will complain its missing
        openai_api_key=rotate_keys(
            primary_key=settings.openai_api_key,
            secondary_key=settings.secondary_openai_api_key,
        ),
        temperature=model_settings.temperature,
        model=model_settings.model,
        max_tokens=model_settings.max_tokens,
        streaming=streaming,
        request_timeout=120
    )

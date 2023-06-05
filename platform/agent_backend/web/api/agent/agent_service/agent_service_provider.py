from agent_backend.schemas import ModelSettings
from agent_backend.settings import settings
from agent_backend.web.api.agent.agent_service.agent_service import AgentService
from agent_backend.web.api.agent.agent_service.mock_agent_service import (
    MockAgentService,
)
from agent_backend.web.api.agent.agent_service.open_ai_agent_service import (
    OpenAIAgentService,
)


def get_agent_service(model_settings: ModelSettings) -> AgentService:
    if settings.ff_mock_mode_enabled:
        return MockAgentService()
    else:
        return OpenAIAgentService(model_settings)

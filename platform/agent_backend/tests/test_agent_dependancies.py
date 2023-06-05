import pytest

from agent_backend.schemas import ModelSettings, AgentRequestBody
from agent_backend.web.api.agent.dependancies import agent_validator


@pytest.mark.anyio
@pytest.mark.parametrize(
    "settings",
    [
        {
            "customModelName": "gpt-4",
        },
        {
            "customModelName": "gpt-3.5-turbo",
            "maxTokens": 1500,
            "customTemperature": 0.5,
            "language": "french",
        },
    ],
)
async def test_agent_validator_valid(settings):
    body = AgentRequestBody(goal="test", modelSettings=ModelSettings(**settings))
    validated = await agent_validator()(body)

    for k, v in settings.items():
        assert validated.modelSettings.dict(by_alias=True)[k] == v

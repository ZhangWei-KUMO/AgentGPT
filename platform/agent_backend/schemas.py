from typing import Optional, List, Literal
from pydantic import BaseModel, Field
from agent_backend.web.api.agent.analysis import Analysis

LLM_Model = Literal[
    "gpt-3.5-turbo",
    # "gpt-4"
]

class ModelSettings(BaseModel):
    model: LLM_Model = Field(default="gpt-3.5-turbo", alias="customModelName")
    temperature: float = Field(default=0.9, alias="customTemperature", ge=0.0, le=1.0)
    max_tokens: int = Field(default=300, alias="maxTokens", ge=0, le=2000)
    language: str = Field(default="English")

# 代理请求Body
class AgentRequestBody(BaseModel):
    modelSettings: ModelSettings
    goal: str
    language: str = "English"
    task: Optional[str]
    analysis: Optional[Analysis]
    toolNames: Optional[List[str]]
    tasks: Optional[List[str]]
    lastTask: Optional[str]
    result: Optional[str]
    completedTasks: Optional[List[str]]

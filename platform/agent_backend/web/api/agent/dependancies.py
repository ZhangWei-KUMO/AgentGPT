from typing import Dict, Any, Optional, Callable, Coroutine

from fastapi import Body

from agent_backend.schemas import AgentRequestBody


def agent_validator(
    example: Optional[Dict[str, Any]] = None, **kwargs: Any
) -> Callable[[AgentRequestBody], Coroutine[Any, Any, AgentRequestBody]]:
    async def func(
        body: AgentRequestBody = Body(example=example, **kwargs),
    ) -> AgentRequestBody:
        return body

    return func

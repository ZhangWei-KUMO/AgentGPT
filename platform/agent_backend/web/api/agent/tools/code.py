from fastapi.responses import StreamingResponse as FastAPIStreamingResponse
from lanarky.responses import StreamingResponse
from langchain import LLMChain
from langchain import PromptTemplate

from agent_backend.schemas import ModelSettings
from agent_backend.web.api.agent.model_settings import create_model
from agent_backend.web.api.agent.tools.tool import Tool

translator_prompt = PromptTemplate(
    template="""
     Now you are a translator. You are translating the following text {text} from Chinese to English.
    """,
    input_variables=["text"],
)

class Code(Tool):
    description = (
        "Useful for writing, reviewing, and refactoring code. Can also fix bugs, "
        "and explain programming concepts."
    )
    public_description = "Write and review code."

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)

    async def call(
        self, goal: str, task: str, input_str: str
    ) -> FastAPIStreamingResponse:
        from agent_backend.web.api.agent.prompts import code_prompt
        print(self.model_settings)
        llm = create_model(self.model_settings, streaming=True)
        chain = LLMChain(llm=llm, prompt=code_prompt)
        trans_chain = LLMChain(llm=llm, prompt=translator_prompt)
        goal_en = trans_chain.run({"text": goal})
        task_en = trans_chain.run({"text": task})
        print("Code tool called.")
        print("goal_en",goal_en)
        print("task_en",task_en)
        return StreamingResponse.from_chain(
            chain,
            {"goal": goal_en, "language": "English", "task": task_en},
            media_type="text/event-stream",
        )

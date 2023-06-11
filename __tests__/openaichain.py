import os
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMRequestsChain, LLMChain
from langchain.tools import OpenAPISpec, APIOperation
from langchain.chains import OpenAPIEndpointChain
from langchain.requests import Requests
from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.getenv('BACKEND_OPENAI_API_KEY')
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0,openai_api_key=OPENAI_API_KEY)
spec = OpenAPISpec.from_url("https://api.speak.com/openapi.yaml")

operation = APIOperation.from_openapi_spec(spec, '/v1/public/openai/explain-task', "post")
chain = OpenAPIEndpointChain.from_api_operation(
    operation, 
    llm, 
    requests=Requests(), 
    verbose=True,
    return_intermediate_steps=True # Return request and response text
)
output = chain("什么衣服最贵")

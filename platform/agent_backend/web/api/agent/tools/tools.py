from typing import Type, List

from agent_backend.web.api.agent.tools.code import Code
from agent_backend.web.api.agent.tools.conclude import Conclude
from agent_backend.web.api.agent.tools.reason import Reason
from agent_backend.web.api.agent.tools.search import Search
from agent_backend.web.api.agent.tools.tool import Tool


def get_user_tools(tool_names: List[str]) -> List[Type[Tool]]:
    tools =  list(map(get_tool_from_name, tool_names)) + get_default_tools()
    return tools


def get_available_tools() -> List[Type[Tool]]:
    return get_external_tools() + get_default_tools()


def get_available_tools_names() -> List[str]:
    return [get_tool_name(tool) for tool in get_available_tools()]

"""
外部工具，有图像处理，代码处理，搜索处理。
未来可以添加的可以有维基百科、知乎、知网等等
"""
def get_external_tools() -> List[Type[Tool]]:
    return [
        Search,
        Code,
    ]

"""
默认工具分为推理（Reason）和结论（Conclude）两大块
"""
def get_default_tools() -> List[Type[Tool]]:
    return [
        Conclude,
    ]


def get_tool_name(tool: Type[Tool]) -> str:
    return format_tool_name(tool.__name__)


def format_tool_name(tool_name: str) -> str:
    return tool_name.lower()


def get_tools_overview(tools: List[Type[Tool]]) -> str:
    """Return a formatted string of name: description pairs for all available tools"""
    formatted_strings = [
        f"'{get_tool_name(tool)}': {tool.description}" for tool in tools
    ]
    unique_strings = list(set(formatted_strings))
    return "\n".join(unique_strings)

# 搜集工具，实际上就是action
def get_tool_from_name(tool_name: str) -> Type[Tool]:
    for tool in get_available_tools():
        print(f"第二步：使用{tool_name}工具")
        return tool
    return get_default_tool()


def get_default_tool() -> Type[Tool]:
    print("启动默认工具-Reason")
    return Reason


def get_default_tool_name() -> str:
    return get_tool_name(get_default_tool())

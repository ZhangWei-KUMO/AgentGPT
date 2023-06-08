import uvicorn

from agent_backend.settings import settings

# 后端接口的主路由
def main() -> None:
    """应用程序的入口点"""
    uvicorn.run(
        "agent_backend.web.application:get_app",
        workers=settings.workers_count,
        host=settings.host,
        port=settings.port,
        reload=settings.reload,
        log_level=settings.log_level.value.lower(),
        factory=True,
    )


if __name__ == "__main__":
    main()

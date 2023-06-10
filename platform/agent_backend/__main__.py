import uvicorn
import ssl

from agent_backend.settings import settings

# 后端接口的主路由
def main() -> None:
    ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
    ssl_context.load_cert_chain("server.crt", "server.key")
    """应用程序的入口点"""
    uvicorn.run(
        "agent_backend.web.application:get_app",
        workers=settings.workers_count,
        host=settings.host,
        # port=settings.port,
        # ssl_version=ssl.PROTOCOL_TLSv1_2, 
        # ssl_keyfile="server.key", 
        # ssl_certfile="server.crt"
        reload=settings.reload,
        log_level=settings.log_level.value.lower(),
        factory=True,
    )


if __name__ == "__main__":
    main()

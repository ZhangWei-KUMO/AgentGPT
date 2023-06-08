from importlib import metadata

import sentry_sdk
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import UJSONResponse
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.logging import LoggingIntegration
from sentry_sdk.integrations.sqlalchemy import SqlalchemyIntegration

import logging
from agent_backend.logging import configure_logging
from agent_backend.settings import settings
from agent_backend.web.api.error_handling import platformatic_exception_handler
from agent_backend.web.api.errors import PlatformaticError
from agent_backend.web.api.router import api_router
from agent_backend.web.lifetime import (
    register_shutdown_event,
    register_startup_event,
)


def get_app() -> FastAPI:
    """
    获取 FastAPI 应用程序。这是应用程序的主要构造函数。
    :return: 应用程序。
    """
    configure_logging()
    if settings.sentry_dsn:
        # Enables sentry integration.
        sentry_sdk.init(
            dsn=settings.sentry_dsn,
            traces_sample_rate=settings.sentry_sample_rate,
            environment=settings.environment,
            integrations=[
                FastApiIntegration(transaction_style="endpoint"),
                LoggingIntegration(
                    level=logging.getLevelName(
                        settings.log_level.value,
                    ),
                    event_level=logging.ERROR,
                ),
                SqlalchemyIntegration(),
            ],
        )
    # FastAPI后端接口的主路由
    app = FastAPI(
        title="Ultra BackEnd API",
        version=metadata.version("agent_backend"),
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )
    # 允许的跨域请求
    origins = [
        "http://112.65.39.181",
        "https://112.65.39.181",
        "http://localhost",
        "https://localhost",
        settings.frontend_url,
        "https://localhost:3000",
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Adds startup and shutdown events.
    register_startup_event(app)
    register_shutdown_event(app)

    # API的主路由
    app.include_router(router=api_router, prefix="/api")
    app.exception_handler(PlatformaticError)(platformatic_exception_handler)

    return app

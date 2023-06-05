from typing import Awaitable, Callable

from fastapi import FastAPI
from sqlalchemy.ext.asyncio import async_sessionmaker

from agent_backend.db.meta import meta
from agent_backend.db.models import load_all_models
from agent_backend.db.utils import create_engine


def _setup_db(app: FastAPI) -> None:  # pragma: no cover
    """
        创建到数据库的连接。
        此函数创建 SQLAlchemy 引擎实例，用于创建会话的 session_factory，并将它们存储在应用程序的状态属性中。
        :param app: FastAPI 应用程序。      
    """
    engine = create_engine()
    session_factory = async_sessionmaker(
        engine,
        expire_on_commit=False,
    )
    app.state.db_engine = engine
    app.state.db_session_factory = session_factory


async def _create_tables() -> None:  # pragma: no cover
    """Populates tables in the database."""
    load_all_models()

    engine = create_engine()
    async with engine.begin() as connection:
        await connection.run_sync(meta.create_all)
    await engine.dispose()


def register_startup_event(
    app: FastAPI,
) -> Callable[[], Awaitable[None]]:  # pragma: no cover
    """
        这个函数使用 FastAPI 应用程序来存储一些数据，
        例如数据库引擎。它接受一个 FastAPI 应用程序作为参数，
        并返回一个实际执行操作的函数。
    """

    @app.on_event("startup")
    async def _startup() -> None:  # noqa: WPS430
        _setup_db(app)
        # await _create_tables()
        # await init_kafka(app)

    return _startup


def register_shutdown_event(
    app: FastAPI,
) -> Callable[[], Awaitable[None]]:  # pragma: no cover
    """
    Actions to run on application's shutdown.

    :param app: fastAPI application.
    :return: function that actually performs actions.
    """

    @app.on_event("shutdown")
    async def _shutdown() -> None:  # noqa: WPS430
        await app.state.db_engine.dispose()
        # await shutdown_kafka(app)

    return _shutdown

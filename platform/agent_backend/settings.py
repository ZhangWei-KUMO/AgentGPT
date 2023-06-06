import enum
from pathlib import Path
from tempfile import gettempdir
from typing import List, Optional
from pydantic import BaseSettings
from yarl import URL
# 返回用于临时文件的目录的名称,如：/var/folders/m1/k1p4490s6vxcsmxnm6fr8rg80000gn/T
TEMP_DIR = Path(gettempdir())
class LogLevel(str, enum.Enum):  # noqa: WPS600
    """日志等级"""
    NOTSET = "NOTSET"
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    FATAL = "FATAL"


class Settings(BaseSettings):
    """
    应用程序设置，这些参数可以通过环境变量配置。
    """
    host: str = "127.0.0.1"
    port: int = 8000

    # 是指用于启动uvicorn服务器的工作进程数量。Uvicorn是一个基于ASGI（异步服务器网关接口）的Web服务器，
    # 可以在Python 3.6+中使用。它支持异步请求处理和Web套接字协议，可以在高负载下处理大量并发连接。
    workers_count: int = 1
    # uvicorn服务器是否应该在代码更改时重新加载。
    reload: bool = True
    # Current environment
    environment: str = "development"
    log_level: LogLevel = LogLevel.INFO
    # OpenAI
    openai_api_base: str = "<Should be updated via env>"
    openai_api_key: str = "<Should be updated via env>"
    secondary_openai_api_key: Optional[str] = None

    replicate_api_key: Optional[str] = None
    ff_mock_mode_enabled: bool = False  # Controls whether calls are mocked
    serp_api_key: Optional[str] = None

    # 前端配置
    frontend_url: str = "<Should be updated via env>"

    # 数据库变量
    db_host: str = "localhost"
    db_port: int = 3306
    db_user: str = "<Should be updated via env>"
    db_pass: str = "<Should be updated via env>"
    db_base: str = "<Should be updated via env>"
    db_echo: bool = False
    db_ca_path: str = "/etc/ssl/cert.pem"

    # 向量数据库配置 Weaviate
    vector_db_url: str = "<Should be updated via env>"
    vector_db_api_key: str = "<Should be updated via env>"

    # Sentry's configuration.
    sentry_dsn: Optional[str] = None
    sentry_sample_rate: float = 1.0

    kafka_bootstrap_servers: List[str] = ["reworkd_platform-kafka:9092"]

    @property
    def db_url(self) -> URL:
        """
        Assemble database URL from settings.

        :return: database URL.
        """
        return URL.build(
            scheme="mysql+aiomysql",
            host=self.db_host,
            port=self.db_port,
            user=self.db_user,
            password=self.db_pass,
            path=f"/{self.db_base}",
        )
# 从后端项目的根目录中的.env文件中加载配置
    class Config:
        env_file = ".env"
        env_prefix = "BACK_END_"
        env_file_encoding = "utf-8"


settings = Settings()

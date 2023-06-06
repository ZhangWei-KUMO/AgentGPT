from aiokafka import AIOKafkaProducer
from fastapi import FastAPI

from agent_backend.settings import settings


async def init_kafka(app: FastAPI) -> None:  # pragma: no cover
    """
    初始化 Kafka producer该函数创建生产者并与 Kafka 集群建立初始连接。
    之后，您可以使用存储在状态中的生产者。在此过程中我们不需要使用池，
    因为 aiokafka 中的生产者内部已经有了隐式池。
    :param app: current application.
    """
    app.state.kafka_producer = AIOKafkaProducer(
        bootstrap_servers=settings.kafka_bootstrap_servers,
    )
    await app.state.kafka_producer.start()


async def shutdown_kafka(app: FastAPI) -> None:  # pragma: no cover
    """
    Shutdown kafka client.

    This function closes all connections
    and sends all pending data to kafka.

    :param app: current application.
    """
    await app.state.kafka_producer.stop()

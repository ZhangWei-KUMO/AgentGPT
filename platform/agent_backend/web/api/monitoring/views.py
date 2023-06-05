from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health_check() -> None:
    """
      检查当前项目健康程度，如果正常则返回200
    """

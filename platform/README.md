# reworkd_platform
本项目的后端API是使用fastapi_template生成的。

## Poetry

这个项目使用poetry作为现代化的依赖管理工具。要运行这个项目，请使用以下命令：
```bash
poetry install
poetry run python -m reworkd_platform
```

这将在配置的主机上启动服务器。您可以在`/api/docs`处找到Swagger文档。
您可以在此处阅读有关poetry的更多信息：https://python-poetry.org/

## Docker

您可以使用以下命令使用Docker启动项目：
```bash
docker-compose -f deploy/docker-compose.yml --project-directory . up --build
```

If you want to develop in docker with autoreload add `-f deploy/docker-compose.dev.yml` to your docker command.
Like this:

```bash
docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up --build
```

该命令在端口8000上公开Web应用程序，挂载当前目录并启用自动重新加载。
但是，每次使用此命令修改`poetry.lock`或`pyproject.toml`时，您都必须重新构建映像：

```bash
docker-compose -f deploy/docker-compose.yml --project-directory . build
```

## Project structure

```bash
$ tree "reworkd_platform"
reworkd_platform
├── conftest.py  # Fixtures for all tests.
├── db  # module contains db configurations
│   ├── dao  # Data Access Objects. Contains different classes to interact with database.
│   └── models  # Package contains different models for ORMs.
├── __main__.py  # Startup script. Starts uvicorn.
├── services  # Package for different external services such as rabbit or redis etc.
├── settings.py  # Main configuration settings for project.
├── static  # Static content.
├── tests  # Tests for project.
└── web  # Package contains web server. Handlers, startup config.
    ├── api  # Package with all handlers.
    │   └── router.py  # Main router.
    ├── application.py  # FastAPI application configuration.
    └── lifetime.py  # Contains actions to perform on startup and shutdown.
```

## 配置

你需要在项目的根目录下创建一个名为.env的文件，并将所有的环境变量放在里面。

看起来所有的环境变量名称都应该以"REWORKD_PLATFORM_"前缀开头。例如，如果你在`reworkd_platform/settings.py`文件中看到一个名为`random_parameter`的变量，则需要提供一个名为`REWORKD_PLATFORM_RANDOM_PARAMETER`的环境变量来配置该值。你可以通过覆盖`reworkd_platform.settings.Settings.Config`中的`env_prefix`属性来更改此行为。

以下是一个.env文件的示例：
```bash
REWORKD_PLATFORM_RELOAD="True"
REWORKD_PLATFORM_PORT="8000"
REWORKD_PLATFORM_ENVIRONMENT="dev"
```

你可以在这里阅读有关BaseSettings类的更多信息: https://pydantic-docs.helpmanual.io/usage/settings/

## Pre-commit

安装pre-commit：
```bash
pre-commit install
```

`pre-commit`是一个非常有用的工具，可以在发布代码之前检查代码。它使用`.pre-commit-config.yaml`文件进行配置。

默认:
* black (formats your code);
* mypy (validates types);
* isort (sorts imports in all files);
* flake8 (spots possibe bugs);


You can read more about pre-commit here: https://pre-commit.com/


## 测试

如果您想在Docker中运行它，只需运行：
```bash
docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . run --build --rm api pytest -vv .
docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . down
```

1. 在本地运行测试时，需要启动一个数据库。我更喜欢使用Docker来完成这个任务：
```
docker run -p "3306:3306" -e "MYSQL_PASSWORD=reworkd_platform" -e "MYSQL_USER=reworkd_platform" -e "MYSQL_DATABASE=reworkd_platform" -e ALLOW_EMPTY_PASSWORD=yes bitnami/mysql:8.0.30
```


2. 运行pytest.
```bash
pytest -vv .
```

## Running linters
```bash
# Flake
poetry run black .
poetry run autoflake --in-place --remove-duplicate-keys --remove-all-unused-imports -r .
poetry run flake8
poetry run mypy .

# Pytest
poetry run pytest -vv --cov="reworkd_platform" .

# Bump packages
poetry self add poetry-plugin-up
poetry up --latest
```

# agent_backend
本项目的后端API是使用**fastapi_template**生成的。

## Poetry

这个项目使用poetry作为现代化的依赖管理工具。要运行这个项目，请使用以下命令：
```bash
poetry install
poetry run python -m agent_backend
```
这将在配置的主机上启动服务器。您可以在`/api/docs`处找到Swagger文档。
您可以在此处阅读有关poetry的更多信息：https://python-poetry.org/


## 项目结构

```bash
$ tree "agent_backend"
agent_backend
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

看起来所有的环境变量名称都应该以"REWORKD_PLATFORM_"前缀开头。例如，如果你在`agent_backend/settings.py`文件中看到一个名为`random_parameter`的变量，则需要提供一个名为`REWORKD_PLATFORM_RANDOM_PARAMETER`的环境变量来配置该值。你可以通过覆盖`agent_backend.settings.Settings.Config`中的`env_prefix`属性来更改此行为。

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
poetry run pytest -vv --cov="agent_backend" .

# Bump packages
poetry self add poetry-plugin-up
poetry up --latest
```
## 自定义任务

针对中文世界中的信息，可以针对不同的语料库进行扩展。本项目中自定义工具箱位于`/platfrom/agent_backend/web/api/agent/tools`中。已集成功能有：

1. 推理 reason
2. 图片 image
3. 总结 conclude
4. 网络搜索 search
5. 维基百科 wikipedia
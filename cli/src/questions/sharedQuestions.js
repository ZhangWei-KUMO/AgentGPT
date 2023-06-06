export const RUN_OPTION_QUESTION = {
    type: 'list',
    name: 'runOption',
    choices: [
      { value: "docker-compose", name: "🐋 Docker-compose (推荐)" },
      { value: "手动操作", name: "💪 手动操作" },
    ],
    message: '打算如何运行Ultra-GPT?',
    default: "手动操作",
  }
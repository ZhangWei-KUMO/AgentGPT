import inquirer from "inquirer";
import dotenv from "dotenv";
import { printTitle } from "./helpers.js";
import { doesEnvFileExist, generateEnv, testEnvFile } from "./envGenerator.js";
import { newEnvQuestions } from "./questions/newEnvQuestions.js";
import { existingEnvQuestions } from "./questions/existingEnvQuestions.js";
import { spawn } from "child_process";
import chalk from "chalk";

// 检查是否存在.env文件
const handleExistingEnv = () => {
  console.log(chalk.yellow("存在 ./next/env 文件. 验证中..."));
  try {
    testEnvFile();
  } catch (e) {
    console.log(e.message);
    return;
  }
  // 在终端向用户发起提问
  inquirer.prompt(existingEnvQuestions).then((answers) => {
    // 用户返回选项结果
    handleRunOption(answers.runOption);
  });
};
// 处理新的.env文件
const handleNewEnv = () => {
  inquirer.prompt(newEnvQuestions).then((answers) => {
    dotenv.config({ path: "./.env" });
    generateEnv(answers);
    console.log("\n环境变量文件创建成功!如果需要修改请进入 ./next/.env 文件和./platform/.env.");
    handleRunOption(answers.runOption);
  });
};

const handleRunOption = (runOption) => {
  // 如果选择了docker-compose
  if (runOption === "docker-compose") {
    const dockerComposeUp = spawn("docker-compose", ["up", "--build"], {
      stdio: "inherit",
    });
  }
  // 如果选择了手动操作
  if (runOption === "manual") {
    console.log(
      "请进入 ./next 文件夹并运行 `npm install && npm run dev`."
    );
    console.log(
      "请进入 ./platform 文件夹并运行 a`poetry install && poetry run python -m agent_backend`."
    );
    console.log(
      "请进入.env文件中更新MySQL数据库配置信息."
    );
  }
};
// 打印标题
printTitle();
// 检查是否存在.env文件
if (doesEnvFileExist()) {
  handleExistingEnv();
} else {
  handleNewEnv();
}
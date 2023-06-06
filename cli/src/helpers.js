import chalk from "chalk";
import figlet from "figlet";

export const printTitle = () => {
  console.log(
    chalk.red(
      figlet.textSync("UltraGPT", {
        horizontalLayout: "full",
        font: "ANSI Shadow",
      })
    )
  );
  console.log(
    "欢迎使用 凹凸GPT 命令行界面！该界面将生成所需的 .env 文件。"
  );
  console.log(
    "生成的结果将分别位于`./next/.env` 和 `./platform/.env`.\n"
  );
};

// 检查是否为有效的Open AI Key
export const isValidSkKey = (apikey) => {
  const pattern = /^sk-[a-zA-Z0-9]{48}$/;
  return pattern.test(apikey);
};
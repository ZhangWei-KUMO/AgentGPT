import chalk from "chalk";
import figlet from "figlet";

export const printTitle = () => {
  console.log(
    chalk.red(
      figlet.textSync("Ultra-GPT", {
        horizontalLayout: "full",
        font: "ANSI Shadow",
      })
    )
  );
  console.log(
    "欢迎使用 Ultra-GPT 命令行界面！该界面将生成所需的 .env 文件。"
  );
  console.log(
    "生成的结果将分别位于`./next/.env` 和 `./platform/.env`."
  );
  console.log(
    "如果您在部署的过程中出现Bug，请及时在Github上提交issue，各种版本冲突的坑我们懂得。"
  );
  console.log(
    "微信：15502178435，作者：老张\n"
  );
};

// 检查是否为有效的Open AI Key
export const isValidSkKey = (apikey) => {
  const pattern = /^sk-[a-zA-Z0-9]{48}$/;
  return pattern.test(apikey);
};
import { isValidSkKey } from "../helpers.js";
import { RUN_OPTION_QUESTION } from "./sharedQuestions.js";

export const newEnvQuestions = [
  RUN_OPTION_QUESTION,
  {
    type: "input",
    name: "OpenAIApiKey",
    message:
      "输入你的Open API Key(若没有可以直接按回车，注册传送https://beta.openai.com/account/api-keys):",
    validate: (apikey) => {
      if (isValidSkKey(apikey) || apikey === "") {
        return true;
      } else {
        return "\n 该 api key不可用.";
      }
    },
  },
  {
    type: "input",
    name: "serpApiKey",
    message:
      "输入你的 SERP API key (Google搜索可选项，若没有可以直接按回车，注册传送https://serper.dev/):",
  },
  {
    type: "input",
    name: "replicateApiKey",
    message:
      "输入你的 Replicate API key (图像处理可选项，若没有可以直接按回车，注册传送https://replicate.com/):",
  },
  {
    type: "input",
    name: "WeaviateUrl",
    message:
      "输入你的 Weaviate URL (本项目使用的向量数据库为Weaviate，若没有可以直接按回车，注册传送https://weaviate.io//):",
  },
  {
    type: "input",
    name: "WeaviateApiKey",
    message:
      "输入你的 Weaviate API key:",
  },
];
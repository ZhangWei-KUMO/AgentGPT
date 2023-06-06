import { isValidSkKey } from "../helpers.js";
import { RUN_OPTION_QUESTION } from "./sharedQuestions.js";

export const newEnvQuestions = [
  RUN_OPTION_QUESTION,
  {
    type: "input",
    name: "OpenAIApiKey",
    message:
      "输入你的openai key (eg: sk...) 或者按下任意键跳过.",
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
      "你的 SERP API key (https://serper.dev/)? 如果设置为空则不可使用Web搜索。",
  },
  {
    type: "input",
    name: "replicateApiKey",
    message:
      "你的 Replicate API key (https://replicate.com/)? 留空以仅使用 DALL-E 进行图像生成。",
  },
];
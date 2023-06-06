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
        return "\n非法 api key. Please try again.";
      }
    },
  },
  {
    type: "input",
    name: "serpApiKey",
    message:
      "你的 SERP API key (https://serper.dev/)? Leave empty to disable web search.",
  },
  {
    type: "input",
    name: "replicateApiKey",
    message:
      "你的 Replicate API key (https://replicate.com/)? Leave empty to just use DALL-E for image generation.",
  },
];
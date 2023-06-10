import crypto from "crypto";
import fs from "fs";
import chalk from "chalk";
// 生成.env文件
export const generateEnv = (envValues) => {
  let isDockerCompose = envValues.runOption === "docker-compose";
  let dbPort = isDockerCompose ? 3307 : 3306;
  let platformUrl = isDockerCompose
    ? "http://host.docker.internal:8000"
    : "http://localhost:8000";

  const envDefinition = getEnvDefinition(
    envValues,
    isDockerCompose,
    dbPort,
    platformUrl,
  );

  const envFileContent = generateEnvFileContent(envDefinition);
  saveEnvFile(envFileContent);
};

const getEnvDefinition = (
  envValues,
  isDockerCompose,
  dbPort,
  platformUrl,
) => {
  return {
    "Deployment Environment": {
      NODE_ENV: "development",
    },
    NextJS: {
      NEXT_PUBLIC_BACKEND_URL: "http://localhost:8000",
      // NEXT_PUBLIC_BACKEND_URL: "https://api.lewiszhang.top",
      NEXT_PUBLIC_MAX_LOOPS: 25,
    },
    Backend: {
      BACK_END_ENVIRONMENT: "development",
      BACK_END_FF_MOCK_MODE_ENABLED: false,
      BACK_END_OPENAI_API_KEY: envValues.OpenAIApiKey || "<change me>",
      BACK_END_FRONTEND_URL: "https://utgpt.tech",
      BACK_END_RELOAD: true,
      BACK_END_OPENAI_API_BASE: "https://api.openai.com/v1",
      BACK_END_SERP_API_KEY: envValues.serpApiKey || "<change me>",
      BACK_END_TUSHARE_API_KEY: envValues.tushareApiKey || "<change me>",
      BACK_END_REPLICATE_API_KEY:envValues.replicateApiKey || "<change me>",
      // BACK_END_VECTOR_DB_URL: envValues.WeaviateUrl || "<change me>",
      // BACK_END_VECTOR_DB_API_KEY: envValues.WeaviateApiKey || "<change me>",
    },
    // "Database (Backend)": {
    //   BACK_END_DB_USER: "root",
    //   BACK_END_DB_PASS: "12345678",
    //   BACK_END_DB_HOST: "localhost",
    //   BACK_END_DB_PORT: dbPort,
    //   BACK_END_DB_BASE: "users",
    //   BACK_END_DB_URL:
    //     "mysql://${BACK_END_DB_USER}:${BACK_END_DB_PASS}@${BACK_END_DB_HOST}:${BACK_END_DB_PORT}/${BACK_END_DB_BASE}",
    // },
    "Database (Frontend)": {
      DB_USER: "root",
      DB_PASS: "12345678",
      DB_HOST: "localhost",
      DB_PORT: dbPort,
      DB_BASE: "users",
      DB_URL:
        "mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}",
    },
  };
};
// 生成ENV文件内容
const generateEnvFileContent = (config) => {
  let configFile = "";
  Object.entries(config).forEach(([section, variables]) => {
    configFile += `# ${ section }:\n`;
    Object.entries(variables).forEach(([key, value]) => {
      configFile += `${ key }="${ value }"\n`;
    });
    configFile += "\n";
  });
  return configFile.trim();
};
// 生成授权密码
const generateAuthSecret = () => {
  const length = 32;
  const buffer = crypto.randomBytes(length);
  return buffer.toString("base64");
};
// 分别位于前后端项目文件
const ENV_PATH = "../next/.env";
const BACKEND_ENV_PATH = "../platform/.env";

export const doesEnvFileExist = () => {
  return fs.existsSync(ENV_PATH);
};

// 读取现有的环境变量文件，检查是否缺少Key或包含任何额外的Key
export const testEnvFile = () => {
  const data = fs.readFileSync(ENV_PATH, "utf8");
  // Make a fake definition to compare the keys of
  const envDefinition = getEnvDefinition({}, "", "", "", "");
  const lines = data
    .split("\n")
    .filter((line) => !line.startsWith("#") && line.trim() !== "");
  const envKeysFromFile = lines.map((line) => line.split("=")[0]);

  const envKeysFromDef = Object.entries(envDefinition).flatMap(
    ([section, entries]) => Object.keys(entries)
  );

  const missingFromFile = envKeysFromDef.filter(
    (key) => !envKeysFromFile.includes(key)
  );
  const missingFromDef = envKeysFromFile.filter(
    (key) => !envKeysFromDef.includes(key)
  );

  if (missingFromFile.length > 0 || missingFromDef.length > 0) {
    let errorMessage = "";
    if (missingFromFile.length > 0) {
      errorMessage += "\n ./next/.env 缺少如下key:\n";
      missingFromFile.forEach((key) => {
        errorMessage += chalk.whiteBright(`- ❌  ${ key }\n`);
      });
      errorMessage += "\n";
    }

    if (missingFromDef.length > 0) {
      errorMessage += "./next/.env 缺少如下key:\n";
      missingFromDef.forEach((key) => {
        errorMessage += chalk.whiteBright(`- ⚠️  ${ key }\n`);
      });
      errorMessage += "\n";
    }

    errorMessage += chalk.red(
      "建议你删除已有.env file(s) 并重启当前脚本."
    );
    throw new Error(errorMessage);
  }
};

export const saveEnvFile = (envFileContent) => {
  fs.writeFileSync(ENV_PATH, envFileContent);
  fs.writeFileSync(BACKEND_ENV_PATH, envFileContent);
};
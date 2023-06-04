## AgentGPT 
AgentGPT CLI是一个实用程序，旨在简化AgentGPT环境的设置过程。它使用Inquirer交互式地构建ENV值，并验证它们是否正确。您可以从项目根目录或cli目录中运行该工具，具体命令如下：

```
// Running from the root of the project
./setup.sh
```

```
// Running from the cli directory
cd cli/
npm run start
```

如果您需要更新ENV值，可以按照以下步骤进行操作：

- 在`index.js`中的问题列表中添加问题以获取ENV值。
- 在`envDefinition`中添加一个值以定义ENV值。
- 将ENV值添加到项目根目录中的`.env.example`文件中。
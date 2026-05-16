# VSCode 开发调试 uni-app 项目完整指南

## 📋 目录

1. [环境准备](#环境准备)
2. [VSCode 插件配置](#vsCode-插件配置)
3. [项目创建和配置](#项目创建和配置)
4. [调试配置](#调试配置)
5. [开发技巧](#开发技巧)
6. [常见问题](#常见问题)

## 🚀 环境准备

### 1. 安装必要的工具

```bash
# 安装 Vue CLI（必需）
npm install -g @vue/cli

# 安装 uni-app 脚手架（正确的方式）
npm install -g @dcloudio/vue-cli-plugin-uni

# 或者使用 HBuilderX 提供的脚手架（推荐）
npm install -g dcloudio uni

# 如果上述方法都不行，可以直接下载 HBuilderX 桌面版
# 下载地址：https://www.dcloud.io/hbuilderx.html
```

### 2. 安装 Node.js 和 npm
- Node.js 版本要求：>= 12.0.0
- 推荐使用 nvm 管理 Node.js 版本

## 🔧 VSCode 插件配置

### 必需插件

1. **Vetur** - Vue 语法高亮和智能提示
   - 提供 Vue 单文件组件的语法高亮
   - 支持模板、脚本、样式的代码补全

2. **uni-app Helper** - uni-app 语法支持
   - uni-app 组件和 API 的智能提示
   - 语法高亮和代码补全

3. **ESLint** - 代码检查
   - JavaScript/TypeScript 代码检查
   - 配合 ESLint 配置使用

4. **Prettier** - 代码格式化
   - 统一的代码格式化
   - 支持 Vue、JavaScript、CSS 等

### 推荐插件

5. **Auto Close Tag** - 自动闭合标签
6. **Auto Rename Tag** - 自动重命名标签
7. **Path Intellisense** - 路径智能提示
8. **GitLens** - Git 增强工具

### 插件安装命令

```bash
# 在 VSCode 扩展面板搜索并安装以下插件：
- Vetur (octref.vetur)
- uni-app Helper (forsomething.helper)
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
```

## 📁 项目创建和配置

### 方法一：使用 Vue CLI（推荐）

```bash
# 1. 使用 Vue CLI 创建项目
vue create my-uniapp-project

# 2. 进入项目目录
cd my-uniapp-project

# 3. 添加 uni-app 支持
vue add uni-app

# 4. 启动开发服务器
npm run dev:h5

# 平台参数：
# h5 - H5 页面
# mp-weixin - 微信小程序
# mp-alipay - 支付宝小程序
# app-plus - App 平台
```

### 方法二：使用 HBuilderX 桌面版（最简单）

1. **下载并安装 HBuilderX**
   - 访问官网：https://www.dcloud.io/hbuilderx.html
   - 下载对应操作系统的版本
   - 安装并启动 HBuilderX

2. **在 HBuilderX 中创建项目**
   - 点击菜单：文件 → 新建 → 项目
   - 选择 uni-app 项目模板
   - 配置项目名称和路径
   - 点击创建

3. **在 VSCode 中打开项目**
   - 用 VSCode 打开刚创建的 uni-app 项目
   - 配置相应的插件和调试环境

### 方法三：使用 HBuilderX CLI（如果可用）

```bash
# 如果安装了 HBuilderX CLI
hx create my-uniapp-project
cd my-uniapp-project
hx serve
```

### 项目结构说明

```
my-uniapp-project/
├── src/
│   ├── components/          # 组件目录
│   ├── pages/              # 页面目录
│   ├── static/             # 静态资源
│   ├── store/              # Vuex 状态管理
│   ├── utils/              # 工具函数
│   ├── App.vue             # 应用入口文件
│   └── main.js             # 应用入口 JS
├── manifest.json           # 应用配置文件
├── pages.json              # 页面配置文件
├── uni.scss                # 全局样式变量
├── package.json
└── vue.config.js           # Vue 配置文件
```

## 🐛 调试配置

### 1. 创建 launch.json 调试配置

在 `.vscode/launch.json` 文件中添加以下配置：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome against localhost",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${webRoot}/*",
        "webpack:///src/*": "${webRoot}/*"
      }
    },
    {
      "name": "Attach to Chrome",
      "type": "pwa-chrome",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "uni-app H5 Debug",
      "type": "chrome",
      "request": "launch",
      "name": "Launch uni-app in Chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true,
      "trace": true
    }
  ],
  "compounds": []
}
```

### 2. 创建 tasks.json 任务配置

在 `.vscode/tasks.json` 文件中添加：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "uni-app: dev:h5",
      "type": "shell",
      "command": "npm",
      "args": ["run", "dev:h5"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared",
        "showReuseMessage": true,
        "clear": false
      },
      "problemMatcher": {
        "owner": "typescript",
        "fileLocation": "relative",
        "pattern": {
          "regexp": "^(.*?):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      }
    },
    {
      "label": "uni-app: build:h5",
      "type": "shell",
      "command": "npm",
      "args": ["run", "build:h5"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
```

### 3. 调试步骤

#### H5 平台调试

1. **启动开发服务器**：
   ```bash
   npm run dev:h5
   ```

2. **在 VSCode 中启动调试**：
   - 按 `F5` 或点击调试面板的绿色播放按钮
   - 选择 "uni-app H5 Debug" 配置
   - Chrome 浏览器将自动打开并加载应用

3. **设置断点**：
   - 在 `.vue` 文件的 `<script>` 部分设置断点
   - 在 JavaScript 文件中设置断点
   - 支持条件断点和日志断点

4. **使用调试工具**：
   - **变量面板**：查看当前作用域的变量
   - **监视面板**：监控特定表达式的值
   - **调用堆栈**：查看函数调用链
   - **断点面板**：管理所有断点

#### 小程序平台调试

由于小程序运行在特定环境中，需要使用对应的开发者工具：

1. **微信小程序**：
   ```bash
   npm run dev:mp-weixin
   ```
   然后使用微信开发者工具打开生成的 `dist/dev/mp-weixin` 目录

2. **支付宝小程序**：
   ```bash
   npm run dev:mp-alipay
   ```
   使用支付宝小程序开发者工具

## 💡 开发技巧

### 1. 代码片段配置

在 VSCode 中创建自定义代码片段：

1. 打开命令面板（`Ctrl+Shift+P`）
2. 输入 "Preferences: Configure User Snippets"
3. 选择 "vue.json"
4. 添加 uni-app 代码片段：

```json
{
  "uni-page": {
    "prefix": "uni-page",
    "body": [
      "<template>",
      "  <view class=\"$1\">",
      "    $2",
      "  </view>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  data() {",
      "    return {",
      "      $3",
      "    };",
      "  },",
      "  methods: {",
      "    $4",
      "  },",
      "  onLoad() {",
      "    $5",
      "  },",
      "  onShow() {",
      "    $6",
      "  },",
      "};",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "$7",
      "</style>"
    ],
    "description": "uni-app page template"
  },
  "uni-request": {
    "prefix": "uni-request",
    "body": [
      "uni.request({",
      "  url: '$1',",
      "  method: '${2|GET,POST,PUT,DELETE|}',",
      "  data: $3,",
      "  header: {",
      "    'content-type': 'application/json'",
      "  },",
      "  success: (res) => {",
      "    console.log('success:', res.data);",
      "    $4",
      "  },",
      "  fail: (err) => {",
      "    console.log('fail:', err);",
      "    $5",
      "  }",
      "});"
    ],
    "description": "uni-app request template"
  }
}
```

### 2. ESLint 配置

创建 `.eslintrc.js` 文件：

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'warn',
    'vue/no-mutating-props': 'warn'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```

### 3. Prettier 配置

创建 `.prettierrc` 文件：

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "auto"
}
```

## 🔧 常见问题

### 1. 语法高亮不生效

**解决方案**：
1. 确保安装了 Vetur 插件
2. 检查文件后缀是否为 `.vue`
3. 重启 VSCode
4. 检查 VSCode 右下角是否选择了正确的文件类型

### 2. 调试时断点不生效

**解决方案**：
1. 确保开启了 source map
2. 检查 `vue.config.js` 中的 devtool 配置：
   ```javascript
   module.exports = {
     configureWebpack: {
       devtool: 'source-map'
     }
   }
   ```
3. 确保 Chrome 调试配置正确

### 3. 代码补全不工作

**解决方案**：
1. 安装 uni-app Helper 插件
2. 确保项目依赖安装完整：
   ```bash
   npm install
   ```
3. 检查 `jsconfig.json` 配置：
   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "esnext",
       "baseUrl": ".",
       "paths": {
         "@/*": ["src/*"]
       }
     },
     "exclude": ["node_modules", "dist"]
   }
   ```

### 4. 热重载失效

**解决方案**：
1. 检查开发服务器是否正常启动
2. 确保文件保存后自动编译
3. 检查浏览器控制台是否有错误
4. 尝试重启开发服务器

## 📚 参考资料

- [uni-app 官方文档](https://uniapp.dcloud.io/)
- [Vue.js 官方文档](https://vuejs.org/)
- [VSCode 官方文档](https://code.visualstudio.com/docs)
- [Vetur 文档](https://vuejs.github.io/vetur/)

---

通过以上配置，你就可以在 VSCode 中高效地开发和调试 uni-app 项目了！
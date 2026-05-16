# uni-app 安装问题解决方案

## 🚨 问题描述

安装 uni-app CLI 时遇到错误：
```bash
Not Found - GET https://registry.npmjs.org/@dcloudio%2funi-app-cli - Not found
```

## ✅ 解决方案

### 方案一：使用 Vue CLI + uni-app 插件（推荐）

这是目前最稳定和推荐的方式：

```bash
# 1. 确保已安装 Vue CLI
npm install -g @vue/cli

# 2. 创建 Vue 项目
vue create my-uniapp-project

# 3. 进入项目目录
cd my-uniapp-project

# 4. 添加 uni-app 插件
vue add uni-app

# 5. 运行项目
npm run dev:h5
```

### 方案二：使用 HBuilderX 桌面版（最简单）

1. **下载 HBuilderX**
   - 官网：https://www.dcloud.io/hbuilderx.html
   - 选择对应操作系统的版本下载

2. **安装并启动**
   - 安装 HBuilderX
   - 启动后点击：文件 → 新建 → 项目
   - 选择 "uni-app" 项目类型
   - 选择模板（如 "默认模板"）
   - 配置项目名称和保存路径
   - 点击 "创建"

3. **在 VSCode 中开发**
   - 用 VSCode 打开刚创建的项目
   - 安装必要的 VSCode 插件
   - 配置调试环境

### 方案三：使用 HBuilderX CLI（替代方案）

```bash
# 如果 HBuilderX 安装目录在 PATH 中
# 通常在 HBuilderX 安装目录下有 hx 命令

# 创建项目
hx create my-uniapp-project

# 启动开发服务器
cd my-uniapp-project
hx serve
```

## 🔧 环境检查和故障排除

### 检查 Node.js 版本
```bash
node --version
# 要求 >= 12.0.0

npm --version
# 要求 >= 6.0.0
```

### 清理 npm 缓存
```bash
# 清理 npm 缓存
npm cache clean --force

# 重新安装 Vue CLI
npm uninstall -g @vue/cli
npm install -g @vue/cli
```

### 检查网络连接
```bash
# 检查是否能访问 npm registry
npm config get registry
# 应该是 https://registry.npmjs.org/

# 如果在中国，可以切换到淘宝镜像
npm config set registry https://registry.npmmirror.com
```

## 📋 验证安装成功

### 验证 Vue CLI
```bash
vue --version
# 应该显示版本号，如 @vue/cli 5.x.x
```

### 验证 uni-app 项目
```bash
# 在项目目录中运行
npm run dev:h5

# 如果成功，应该看到类似输出：
# DONE  Compiled successfully in xxxms
# 应用运行在 http://localhost:8080
```

## 🐛 常见错误解决

### 错误1：vue add uni-app 失败

**解决方案**：
```bash
# 1. 确保在 Vue 项目目录中
# 2. 检查 package.json 是否存在
# 3. 尝试手动安装依赖
npm install @dcloudio/vue-cli-plugin-uni -D

# 然后手动配置
```

### 错误2：依赖安装失败

**解决方案**：
```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 删除 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install
```

### 错误3：运行时报错

**解决方案**：
```bash
# 检查 package.json 中的 scripts
# 应该有类似配置：
"scripts": {
  "dev:h5": "uniapp-cli dev:h5",
  "build:h5": "uniapp-cli build:h5"
}

# 如果没有，手动添加依赖
npm install @dcloudio/uniapp-cli -D
```

## 🎯 推荐开发流程

1. **使用 HBuilderX 创建项目**（最稳定）
2. **在 VSCode 中开发**（更好的代码编辑体验）
3. **使用 HBuilderX 预览和调试**（更好的真机调试）
4. **使用 VSCode 的调试功能**（更好的代码调试）

## 📚 参考资源

- [uni-app 官方文档](https://uniapp.dcloud.io/)
- [HBuilderX 下载地址](https://www.dcloud.io/hbuilderx.html)
- [Vue CLI 文档](https://cli.vuejs.org/)
- [uni-app GitHub](https://github.com/dcloudio/uni-app)

---

通过以上方案，你应该能够成功搭建 uni-app 开发环境。如果还有问题，请检查网络连接或尝试不同的安装方法。
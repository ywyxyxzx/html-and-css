# AI学习方法指南 - Vue3 + Vue Router版本

这是一个使用Vue3 + Vite + Vue Router构建的AI学习方法书籍介绍网站，专为12-22岁学生设计。

## 项目特性

✅ **现代化技术栈**：Vue3 + Vite + Vue Router 4
✅ **单页面应用**：真正的SPA体验，页面切换无刷新
✅ **响应式设计**：支持手机、平板、电脑
✅ **交互功能**：
- 关键词高亮（内容速览页）
- 阅读计划生成器（阅读指南页）
- 6题适合度测评系统
✅ **极简学习风**：清爽的校园风格设计
✅ **组件化架构**：易于维护和扩展

## 路由结构

- **/** (HomePage)：书籍介绍、卖点展示、适合人群
- **/overview** (OverviewPage)：核心要点、收获清单、关键词交互
- **/guide** (GuidePage)：详细分析、计划生成、常见问题
- **/quiz** (QuizPage)：6题测评、个性化建议

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 技术细节

- **框架**：Vue 3
- **路由**：Vue Router 4
- **构建工具**：Vite
- **样式**：原生CSS + CSS变量
- **交互**：Vue响应式系统
- **无外部依赖**：除Vue Router外无第三方库

## 项目结构

```
src/
├── App.vue          # 主应用组件
├── main.js          # 应用入口
├── router/
│   └── index.js     # Vue Router配置
├── style.css        # 全局样式
├── components/
│   └── NavBar.vue   # 导航栏组件（使用router-link）
└── pages/
    ├── HomePage.vue     # 首页 (路由: /)
    ├── OverviewPage.vue # 内容速览 (路由: /overview)
    ├── GuidePage.vue    # 阅读指南 (路由: /guide)
    └── QuizPage.vue     # 测评页面 (路由: /quiz)
```

## 自定义

### 修改主题色
编辑 `src/style.css` 中的 `:root` 变量：

```css
:root {
  --primary: #2563eb;    /* 主色调 */
  --secondary: #10b981;  /* 辅助色 */
  --accent: #f59e0b;     /* 强调色 */
  /* ... 其他变量 */
}
```

### 添加新页面
1. 在 `src/pages/` 创建新组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在导航栏中添加router-link

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 许可证

MIT License
const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

// 页面模板
const pageTemplate = `<script setup>
import { ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app';

const title = ref('$PAGE_TITLE$');

onLoad(() => {
  console.log('$PAGE_NAME$ page onLoad');
});
</script>

<template>
  <view class="content">
    <text class="description">这是$PAGE_TITLE$页面</text>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.description {
  font-size: 30rpx;
  color: #8f8f94;
  line-height: 1.5;
  text-align: center;
  margin-top: 100rpx;
}
</style>
`;

module.exports = {
  name: 'generate-page',
  description: '生成一个新的uni-app页面',
  usage: '/generate-page <页面名称> <页面标题>',

  execute: async function(args, workingDirectory) {
    if (args.length < 2) {
      return {
        success: false,
        message: '请提供页面名称和页面标题。用法: /generate-page <页面名称> <页面标题>'
      };
    }

    const pageName = args[0];
    const pageTitle = args[1];

    // 检查页面名称是否有效
    if (!/^[a-zA-Z0-9_-]+$/.test(pageName)) {
      return {
        success: false,
        message: '页面名称只能包含字母、数字、下划线和连字符'
      };
    }

    // 修正项目路径 - 检查是否在my-vue3-project子目录中
    let projectRoot = workingDirectory;
    const vueProjectPath = join(workingDirectory, 'my-vue3-project');

    if (existsSync(join(vueProjectPath, 'src', 'pages'))) {
      projectRoot = vueProjectPath;
    }

    const pagesDir = join(projectRoot, 'src', 'pages');
    const pageDir = join(pagesDir, pageName);
    const pageFile = join(pageDir, 'index.vue');
    const pagesJsonFile = join(projectRoot, 'src', 'pages.json');

    // 检查页面是否已存在
    if (existsSync(pageDir)) {
      return {
        success: false,
        message: `页面 ${pageName} 已存在`
      };
    }

    try {
      // 创建页面目录
      require('fs').mkdirSync(pageDir, { recursive: true });

      // 生成页面文件
      const pageContent = pageTemplate
        .replace(/\$PAGE_NAME\$/g, pageName)
        .replace(/\$PAGE_TITLE\$/g, pageTitle);

      writeFileSync(pageFile, pageContent);

      // 更新pages.json
      if (existsSync(pagesJsonFile)) {
        let pagesJson = JSON.parse(readFileSync(pagesJsonFile, 'utf8'));

        // 在pages数组中查找404页面的位置，在其前面插入新页面
        const pagesArray = pagesJson.pages;
        const notFoundIndex = pagesArray.findIndex(page => page.path === 'pages/404/index');

        const newPageConfig = {
          "path": `pages/${pageName}/index`,
          "style": {
            "navigationBarTitleText": pageTitle
          }
        };

        if (notFoundIndex !== -1) {
          pagesArray.splice(notFoundIndex, 0, newPageConfig);
        } else {
          pagesArray.push(newPageConfig);
        }

        writeFileSync(pagesJsonFile, JSON.stringify(pagesJson, null, 2));
      }

      return {
        success: true,
        message: `页面 ${pageName} 创建成功！\n页面文件: src/pages/${pageName}/index.vue\n页面标题: ${pageTitle}\n项目路径: ${projectRoot}`
      };
    } catch (error) {
      return {
        success: false,
        message: `创建页面失败: ${error.message}`
      };
    }
  }
};
<template>
  <div>
    <h1 style="text-align: center; margin-bottom: var(--space-xl); color: var(--primary);">这本书讲什么</h1>

    <!-- 核心要点 -->
    <div class="key-points">
      <h2>核心内容要点</h2>
      <div class="points-grid">
        <div class="point-item">
          <h4>🤖 AI基础概念</h4>
          <p>机器学习、深度学习、神经网络等核心概念通俗讲解</p>
        </div>
        <div class="point-item">
          <h4>🐍 Python编程</h4>
          <p>从零开始学习Python，掌握AI开发必备编程技能</p>
        </div>
        <div class="point-item">
          <h4>📊 数据处理</h4>
          <p>学会收集、清洗、分析数据，为AI模型提供高质量输入</p>
        </div>
        <div class="point-item">
          <h4>🧠 模型训练</h4>
          <p>掌握机器学习模型训练流程，从理论到实践</p>
        </div>
        <div class="point-item">
          <h4>🚀 项目实战</h4>
          <p>通过真实项目案例，学会AI技术在实际场景中的应用</p>
        </div>
      </div>
    </div>

    <!-- 交互关键词高亮区域 -->
    <div class="benefits">
      <h2>你会收获什么</h2>
      <div class="keyword-tags">
        <p>点击下方关键词查看相关内容：</p>
        <span
          v-for="keyword in keywords"
          :key="keyword.tag"
          class="keyword-tag"
          :class="{ active: activeKeyword === keyword.tag }"
          @click="highlightKeyword(keyword)"
        >
          {{ keyword.tag }}
        </span>
      </div>
      <div id="highlightContent" class="benefits-content" v-html="highlightedContent"></div>
    </div>

    <div style="text-align: center; margin: var(--space-xl) 0;">
      <router-link to="/guide" class="btn btn-primary">查看阅读指南</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'OverviewPage',
  setup() {
    const activeKeyword = ref('')

    const keywords = [
      { tag: 'AI基础', text: '机器学习' },
      { tag: '学习方法', text: '实践' },
      { tag: '编程技能', text: 'Python' },
      { tag: '数学要求', text: '统计学' },
      { tag: '应用领域', text: '数据分析' }
    ]

    const originalContent = `
      <ul>
        <li>掌握机器学习的基本原理和常用算法</li>
        <li>学会使用Python进行数据分析和模型开发</li>
        <li>理解统计学在AI中的重要作用</li>
        <li>能够独立完成简单的AI项目实践</li>
        <li>建立完整的AI知识体系框架</li>
        <li>获得进入AI行业的信心和能力</li>
      </ul>
    `

    const highlightedContent = computed(() => {
      if (!activeKeyword.value) return originalContent

      const keyword = keywords.find(k => k.tag === activeKeyword.value)
      if (!keyword) return originalContent

      return originalContent.replace(
        new RegExp(`(${keyword.text})`, 'gi'),
        '<span class="highlight">$1</span>'
      )
    })

    const highlightKeyword = (keyword) => {
      activeKeyword.value = activeKeyword.value === keyword.tag ? '' : keyword.tag
    }

    return {
      keywords,
      activeKeyword,
      highlightedContent,
      highlightKeyword
    }
  }
})
</script>
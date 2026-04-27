<template>
  <div>
    <!-- Hero区域 -->
    <section class="hero">
      <h1>计算机AI学习方法</h1>
      <p>一本让学生轻松入门AI的实用指南，从零基础到实战应用</p>
      <router-link to="/overview" class="btn">开始了解这本书</router-link>
    </section>

    <!-- 卖点卡片 -->
    <div class="card-grid">
      <div class="card">
        <h3>🎯 学习路径清晰</h3>
        <p>提供完整的AI学习路线图，告别零散学习，系统掌握核心知识</p>
      </div>
      <div class="card">
        <h3>🚀 零基础友好</h3>
        <p>从最基础的概念讲起，数学要求不高，编程小白也能轻松入门</p>
      </div>
      <div class="card">
        <h3>💼 实战导向</h3>
        <p>每章都有实际案例，学了就能用，快速提升就业竞争力</p>
      </div>
    </div>

    <!-- 适合/不适合对比 -->
    <div class="two-column">
      <div class="comparison">
        <h3>适合谁读</h3>
        <ul>
          <li>想入门AI的大学生</li>
          <li>希望转行AI的职场人士</li>
          <li>对AI感兴趣的零基础学习者</li>
          <li>想提升技术能力的程序员</li>
          <li>需要AI知识的创业者</li>
        </ul>
      </div>
      <div class="comparison not-suitable">
        <h3>不适合谁</h3>
        <ul>
          <li>已经有丰富AI经验的专业人士</li>
          <li>只想了解AI概念的非技术人员</li>
          <li>没有时间坚持学习的忙碌人士</li>
          <li>数学基础很差且不愿补基础的人</li>
          <li>期望立即见效的速成主义者</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
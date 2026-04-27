``<template>
  <div>
    <h1 style="text-align: center; margin-bottom: var(--space-xl); color: var(--primary);">阅读指南</h1>

    <!-- 适合度详细分析 -->
    <div class="two-column">
      <div class="comparison">
        <h3>特别适合</h3>
        <ul>
          <li>计算机相关专业大学生</li>
          <li>想转行AI的职场新人</li>
          <li>有编程基础的技术爱好者</li>
          <li>需要AI知识的创业者</li>
          <li>对技术有热情的学习者</li>
        </ul>
      </div>
      <div class="comparison not-suitable">
        <h3>需要谨慎</h3>
        <ul>
          <li>完全零基础且不愿补基础</li>
          <li>数学基础很差且没时间补</li>
          <li>期望几天就学会的速成者</li>
          <li>只想了解概念的非技术人员</li>
          <li>没有时间坚持学习的人</li>
        </ul>
      </div>
    </div>

    <!-- 阅读计划生成器 -->
    <div class="reading-plan">
      <h2 style="text-align: center; margin-bottom: var(--space-md); color: var(--primary);">制定你的阅读计划</h2>
      <form @submit.prevent="generatePlan" class="plan-form">
        <div class="form-group">
          <label for="minutesPerDay">每天阅读时间</label>
          <select id="minutesPerDay" v-model="minutesPerDay" required>
            <option value="30">30分钟</option>
            <option value="45">45分钟</option>
            <option value="60">1小时</option>
            <option value="90">1.5小时</option>
            <option value="120">2小时</option>
          </select>
        </div>
        <div class="form-group">
          <label for="totalDays">计划完成天数</label>
          <select id="totalDays" v-model="totalDays" required>
            <option value="7">1周</option>
            <option value="14">2周</option>
            <option value="21">3周</option>
            <option value="30">1个月</option>
            <option value="60">2个月</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">生成计划</button>
      </form>
      <div v-if="showPlan" class="plan-result">
        <h3>你的专属阅读计划</h3>
        <p>每天阅读 {{ minutesPerDay }} 分钟，{{ totalDays }} 天完成</p>
        <div class="plan-days">
          <div v-for="(chapter, index) in chapters" :key="index" class="plan-day">
            <strong>第{{ index + 1 }}部分：</strong> {{ chapter }}<br>
            <small>建议时间：第{{ getDayRange(index) }}-{{ getDayRange(index + 1) - 1 }}天</small>
          </div>
        </div>
        <p>💡 建议：每天固定时间阅读，做好笔记，遇到问题及时查阅资料</p>
      </div>
    </div>

    <!-- 常见问题FAQ -->
    <div class="faq">
      <h2>常见问题</h2>
      <div class="faq-item">
        <div class="faq-question">Q: 完全没有编程基础能学会吗？</div>
        <div class="faq-answer">A: 可以！本书从Python基础开始讲起，但建议每天多花30分钟练习编程基础。</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">Q: 数学不好会影响学习效果吗？</div>
        <div class="faq-answer">A: 本书尽量用通俗语言解释数学概念，但建议补充基础的统计学和概率知识。</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">Q: 学完这本书能达到什么水平？</div>
        <div class="faq-answer">A: 能独立完成简单的AI项目，具备进入AI行业的基础能力，为进一步学习打下坚实基础。</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">Q: 需要准备什么样的电脑？</div>
        <div class="faq-answer">A: 普通笔记本即可，建议8GB内存以上。书中案例对硬件要求不高。</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">Q: 学习中遇到问题怎么办？</div>
        <div class="faq-answer">A: 建议加入学习社群，多查阅官方文档，善用搜索引擎，不要害怕犯错。</div>
      </div>
    </div>

    <div style="text-align: center; margin: var(--space-xl) 0;">
      <router-link to="/quiz" class="btn btn-primary">测试适合度</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GuidePage',
  setup() {
    const minutesPerDay = ref(60)
    const totalDays = ref(14)
    const showPlan = ref(false)

    const chapters = [
      '第1章：AI概述与基础概念',
      '第2章：机器学习入门',
      '第3章：Python编程基础',
      '第4章：数据处理与分析',
      '第5章：深度学习简介',
      '第6章：实践项目指导',
      '第7章：职业发展建议'
    ]

    const generatePlan = () => {
      showPlan.value = true
    }

    const getDayRange = (index) => {
      const totalMinutes = minutesPerDay.value * totalDays.value
      const minutesPerChapter = Math.floor(totalMinutes / chapters.length)
      const dayStart = Math.floor(index * minutesPerChapter / minutesPerDay.value) + 1
      return Math.min(dayStart, totalDays.value)
    }

    return {
      minutesPerDay,
      totalDays,
      showPlan,
      chapters,
      generatePlan,
      getDayRange
    }
  }
})
</script>
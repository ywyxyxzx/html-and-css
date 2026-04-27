<template>
  <div class="quiz-container">
    <h1 style="text-align: center; margin-bottom: var(--space-xl); color: var(--primary);">适合度测评</h1>

    <!-- 进度条 -->
    <div class="quiz-progress">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <p style="text-align: center;">帮助你了解是否适合阅读这本书</p>
    </div>

    <!-- 问题区域 -->
    <div v-if="!showResult" class="quiz-question">
      <div class="question-text">{{ currentQuestion.text }}</div>
      <div class="options-grid">
        <div
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="option"
          :class="{ selected: isOptionSelected(option) }"
          @click="selectOption(option)"
        >
          {{ option.text }}
        </div>
      </div>

      <div class="quiz-navigation">
        <button v-if="currentQuestionIndex > 0" class="btn" @click="prevQuestion">上一题</button>
        <button v-if="currentQuestionIndex < questions.length - 1" class="btn btn-primary" @click="nextQuestion" :disabled="!canProceed">下一题</button>
        <button v-else class="btn btn-primary" @click="submitQuiz" :disabled="!canProceed">提交答案</button>
      </div>
    </div>

    <!-- 结果区域 -->
    <div v-else class="quiz-result">
      <div :class="['result-badge', resultClass]">{{ resultTitle }}</div>
      <div class="result-advice" v-html="resultAdvice"></div>
      <button class="btn btn-primary" @click="resetQuiz">重新测评</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'QuizPage',
  setup() {
    const questions = [
      {
        id: 1,
        text: "你的编程基础如何？",
        type: "single",
        options: [
          { text: "完全零基础", value: 1 },
          { text: "了解一些基础概念", value: 2 },
          { text: "有Python或其他语言基础", value: 3 },
          { text: "编程经验丰富", value: 4 }
        ]
      },
      {
        id: 2,
        text: "你的数学基础如何？（统计、概率、线性代数）",
        type: "single",
        options: [
          { text: "数学基础较弱", value: 1 },
          { text: "高中数学水平", value: 2 },
          { text: "大学数学基础", value: 3 },
          { text: "数学基础很好", value: 4 }
        ]
      },
      {
        id: 3,
        text: "你每天能投入多少时间学习？",
        type: "single",
        options: [
          { text: "少于30分钟", value: 1 },
          { text: "30-60分钟", value: 2 },
          { text: "1-2小时", value: 3 },
          { text: "2小时以上", value: 4 }
        ]
      },
      {
        id: 4,
        text: "你希望通过学习AI达到什么目标？（可多选）",
        type: "multiple",
        options: [
          { text: "了解AI基本概念", value: 1 },
          { text: "转行进入AI领域", value: 3 },
          { text: "提升现有工作能力", value: 2 },
          { text: "学术研究需要", value: 3 },
          { text: "个人兴趣爱好", value: 1 }
        ]
      },
      {
        id: 5,
        text: "你对理论学习和实践操作哪个更感兴趣？",
        type: "single",
        options: [
          { text: "更喜欢理论学习", value: 2 },
          { text: "更喜欢动手实践", value: 3 },
          { text: "理论和实践都喜欢", value: 4 },
          { text: "都不太感兴趣", value: 1 }
        ]
      },
      {
        id: 6,
        text: "你是否有相关的学习或工作经验？",
        type: "single",
        options: [
          { text: "完全没有相关经验", value: 1 },
          { text: "了解一些基本概念", value: 2 },
          { text: "有相关领域工作经验", value: 3 },
          { text: "相关专业背景", value: 4 }
        ]
      }
    ]

    const currentQuestionIndex = ref(0)
    const answers = ref({})
    const showResult = ref(false)
    const resultClass = ref('')
    const resultTitle = ref('')
    const resultAdvice = ref('')

    const currentQuestion = computed(() => questions[currentQuestionIndex.value])

    const progress = computed(() => {
      const answeredQuestions = Object.keys(answers.value).length
      return (answeredQuestions / questions.length) * 100
    })

    const canProceed = computed(() => {
      const answer = answers.value[currentQuestion.value.id]
      return answer && (!Array.isArray(answer) || answer.length > 0)
    })

    const isOptionSelected = (option) => {
      const answer = answers.value[currentQuestion.value.id]
      if (Array.isArray(answer)) {
        return answer.includes(option.text)
      }
      return answer === option.text
    }

    const selectOption = (option) => {
      const question = currentQuestion.value
      if (question.type === 'single') {
        answers.value[question.id] = option.text
      } else if (question.type === 'multiple') {
        if (!answers.value[question.id]) {
          answers.value[question.id] = []
        }
        const index = answers.value[question.id].indexOf(option.text)
        if (index > -1) {
          answers.value[question.id].splice(index, 1)
        } else {
          answers.value[question.id].push(option.text)
        }
      }
    }

    const prevQuestion = () => {
      if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--
      }
    }

    const nextQuestion = () => {
      if (canProceed.value && currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++
      }
    }

    const submitQuiz = () => {
      if (!canProceed.value) return

      let totalScore = 0
      let maxScore = 0

      questions.forEach(question => {
        const answer = answers.value[question.id]
        if (answer) {
          if (Array.isArray(answer)) {
            answer.forEach(ansText => {
              const option = question.options.find(opt => opt.text === ansText)
              if (option) {
                totalScore += option.value
                maxScore += 4
              }
            })
          } else {
            const option = question.options.find(opt => opt.text === answer)
            if (option) {
              totalScore += option.value
              maxScore += 4
            }
          }
        }
      })

      const percentage = (totalScore / maxScore) * 100
      showResult.value = true

      if (percentage >= 70) {
        resultClass.value = 'result-recommended'
        resultTitle.value = '强烈推荐'
        resultAdvice.value = `
          <p>这本书非常适合你！建议：</p>
          <ul>
            <li>每天安排1-2小时系统学习</li>
            <li>重点阅读第2、4、6章的实践内容</li>
            <li>边学边做笔记，动手实践每个案例</li>
            <li>可以尝试参加一些AI比赛或课程设计</li>
          </ul>
        `
      } else if (percentage >= 40) {
        resultClass.value = 'result-caution'
        resultTitle.value = '谨慎推荐'
        resultAdvice.value = `
          <p>这本书对你来说有一定挑战，但值得一试。建议：</p>
          <ul>
            <li>先花时间补充编程和数学基础</li>
            <li>从第1、3章开始，循序渐进</li>
            <li>每天坚持30分钟，不要急于求成</li>
            <li>遇到问题多查阅资料和寻求帮助</li>
          </ul>
        `
      } else {
        resultClass.value = 'result-not-recommended'
        resultTitle.value = '暂时不推荐'
        resultAdvice.value = `
          <p>目前可能不太适合直接阅读这本书。建议：</p>
          <ul>
            <li>先学习Python编程基础</li>
            <li>补充数学基础知识（统计、概率）</li>
            <li>可以从更基础的AI入门书籍开始</li>
            <li>等基础扎实后再来挑战这本书</li>
          </ul>
        `
      }
    }

    const resetQuiz = () => {
      currentQuestionIndex.value = 0
      answers.value = {}
      showResult.value = false
      resultClass.value = ''
      resultTitle.value = ''
      resultAdvice.value = ''
    }

    return {
      questions,
      currentQuestionIndex,
      currentQuestion,
      progress,
      canProceed,
      showResult,
      resultClass,
      resultTitle,
      resultAdvice,
      isOptionSelected,
      selectOption,
      prevQuestion,
      nextQuestion,
      submitQuiz,
      resetQuiz
    }
  }
})
</script>

<style scoped>
.quiz-navigation {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-lg);
}

.quiz-navigation button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
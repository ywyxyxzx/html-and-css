class QuizApp {
  constructor() {
    this.questions = [
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
    ];

    this.currentQuestion = 0;
    this.answers = {};
    this.init();
  }

  init() {
    this.renderQuestion();
    this.updateProgress();
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestion];
    const container = document.getElementById('quizQuestion');

    if (!container) return;

    let html = `
      <div class="question-text">${question.text}</div>
      <div class="options-grid">
    `;

    question.options.forEach((option, index) => {
      const isSelected = this.answers[question.id] &&
                        ((Array.isArray(this.answers[question.id]) &&
                          this.answers[question.id].includes(option.text)) ||
                         this.answers[question.id] === option.text);

      html += `
        <div class="option ${isSelected ? 'selected' : ''}"
             data-question="${question.id}"
             data-option="${option.text}"
             data-type="${question.type}">
          ${option.text}
        </div>
      `;
    });

    html += '</div>';

    if (this.currentQuestion > 0) {
      html += '<button class="btn" id="prevBtn">上一题</button>';
    }

    if (this.currentQuestion < this.questions.length - 1) {
      html += '<button class="btn btn-primary" id="nextBtn">下一题</button>';
    } else {
      html += '<button class="btn btn-primary" id="submitBtn">提交答案</button>';
    }

    container.innerHTML = html;

    // 绑定事件
    this.bindEvents();
  }

  bindEvents() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        const questionId = parseInt(e.target.dataset.question);
        const optionText = e.target.dataset.option;
        const questionType = e.target.dataset.type;

        if (questionType === 'single') {
          this.answers[questionId] = optionText;
        } else if (questionType === 'multiple') {
          if (!this.answers[questionId]) {
            this.answers[questionId] = [];
          }

          const index = this.answers[questionId].indexOf(optionText);
          if (index > -1) {
            this.answers[questionId].splice(index, 1);
            e.target.classList.remove('selected');
          } else {
            this.answers[questionId].push(optionText);
            e.target.classList.add('selected');
          }
        } else {
          // 单选处理
          document.querySelectorAll(`[data-question="${questionId}"]`).forEach(opt => {
            opt.classList.remove('selected');
          });
          e.target.classList.add('selected');
        }

        this.updateProgress();
      });
    });

    // 上一题按钮
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
          this.renderQuestion();
          this.updateProgress();
        }
      });
    }

    // 下一题按钮
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.validateCurrentQuestion()) {
          if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
            this.updateProgress();
          }
        }
      });
    }

    // 提交按钮
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (this.validateCurrentQuestion()) {
          this.calculateResult();
        }
      });
    }
  }

  validateCurrentQuestion() {
    const question = this.questions[this.currentQuestion];
    const answer = this.answers[question.id];

    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      alert('请选择一个答案');
      return false;
    }

    return true;
  }

  updateProgress() {
    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
  }

  calculateResult() {
    let totalScore = 0;
    let maxScore = 0;

    this.questions.forEach(question => {
      const answer = this.answers[question.id];
      if (answer) {
        if (Array.isArray(answer)) {
          answer.forEach(ansText => {
            const option = question.options.find(opt => opt.text === ansText);
            if (option) {
              totalScore += option.value;
              maxScore += 4; // 最高分值
            }
          });
        } else {
          const option = question.options.find(opt => opt.text === answer);
          if (option) {
            totalScore += option.value;
            maxScore += 4;
          }
        }
      }
    });

    const percentage = (totalScore / maxScore) * 100;
    this.showResult(percentage);
  }

  showResult(percentage) {
    const resultContainer = document.getElementById('quizResult');
    const questionContainer = document.getElementById('quizQuestion');

    if (!resultContainer || !questionContainer) return;

    let resultClass, resultTitle, resultAdvice;

    if (percentage >= 70) {
      resultClass = 'result-recommended';
      resultTitle = '强烈推荐';
      resultAdvice = `
        <p>这本书非常适合你！建议：</p>
        <ul>
          <li>每天安排1-2小时系统学习</li>
          <li>重点阅读第2、4、6章的实践内容</li>
          <li>边学边做笔记，动手实践每个案例</li>
          <li>可以尝试参加一些AI比赛或课程设计</li>
        </ul>
      `;
    } else if (percentage >= 40) {
      resultClass = 'result-caution';
      resultTitle = '谨慎推荐';
      resultAdvice = `
        <p>这本书对你来说有一定挑战，但值得一试。建议：</p>
        <ul>
          <li>先花时间补充编程和数学基础</li>
          <li>从第1、3章开始，循序渐进</li>
          <li>每天坚持30分钟，不要急于求成</li>
          <li>遇到问题多查阅资料和寻求帮助</li>
        </ul>
      `;
    } else {
      resultClass = 'result-not-recommended';
      resultTitle = '暂时不推荐';
      resultAdvice = `
        <p>目前可能不太适合直接阅读这本书。建议：</p>
        <ul>
          <li>先学习Python编程基础</li>
          <li>补充数学基础知识（统计、概率）</li>
          <li>可以从更基础的AI入门书籍开始</li>
          <li>等基础扎实后再来挑战这本书</li>
        </ul>
      `;
    }

    resultContainer.innerHTML = `
      <div class="result-badge ${resultClass}">${resultTitle}</div>
      <div class="result-advice">${resultAdvice}</div>
      <button class="btn btn-primary" onclick="resetQuiz()">重新测评</button>
    `;

    resultContainer.style.display = 'block';
    questionContainer.style.display = 'none';
  }
}

function resetQuiz() {
  window.location.reload();
}

// 初始化测评
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('quiz.html')) {
    new QuizApp();
  }
});
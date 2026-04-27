// 导航高亮功能
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.includes(linkPath) ||
        (currentPath === '/' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 关键词高亮功能（在overview页面）
  if (window.location.pathname.includes('overview.html')) {
    setupKeywordHighlight();
  }

  // 阅读计划生成器（在guide页面）
  if (window.location.pathname.includes('guide.html')) {
    setupReadingPlanGenerator();
  }
});

// 关键词高亮功能
function setupKeywordHighlight() {
  const keywords = [
    { tag: 'AI基础', text: '机器学习' },
    { tag: '学习方法', text: '实践' },
    { tag: '编程技能', text: 'Python' },
    { tag: '数学要求', text: '统计学' },
    { tag: '应用领域', text: '数据分析' }
  ];

  const container = document.getElementById('keywordContainer');
  const content = document.getElementById('highlightContent');

  if (!container || !content) return;

  // 创建关键词标签
  keywords.forEach(keyword => {
    const tag = document.createElement('span');
    tag.className = 'keyword-tag';
    tag.textContent = keyword.tag;
    tag.addEventListener('click', () => {
      // 切换激活状态
      document.querySelectorAll('.keyword-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      // 高亮对应内容
      highlightKeyword(keyword.text);
    });
    container.appendChild(tag);
  });
}

function highlightKeyword(keyword) {
  const content = document.getElementById('highlightContent');
  if (!content) return;

  const text = content.textContent;
  const highlighted = text.replace(
    new RegExp(`(${keyword})`, 'gi'),
    '<span class="highlight">$1</span>'
  );

  content.innerHTML = highlighted;
}

// 阅读计划生成器
function setupReadingPlanGenerator() {
  const form = document.getElementById('planForm');
  const result = document.getElementById('planResult');

  if (!form || !result) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const minutesPerDay = parseInt(document.getElementById('minutesPerDay').value);
    const totalDays = parseInt(document.getElementById('totalDays').value);

    generatePlan(minutesPerDay, totalDays, result);
  });
}

function generatePlan(minutesPerDay, totalDays, container) {
  const chapters = [
    '第1章：AI概述与基础概念',
    '第2章：机器学习入门',
    '第3章：Python编程基础',
    '第4章：数据处理与分析',
    '第5章：深度学习简介',
    '第6章：实践项目指导',
    '第7章：职业发展建议'
  ];

  const totalMinutes = minutesPerDay * totalDays;
  const minutesPerChapter = Math.floor(totalMinutes / chapters.length);

  let planHTML = '<h3>你的专属阅读计划</h3>';
  planHTML += `<p>每天阅读 ${minutesPerDay} 分钟，${totalDays} 天完成</p>`;
  planHTML += '<div class="plan-days">';

  chapters.forEach((chapter, index) => {
    const dayStart = Math.floor(index * minutesPerChapter / minutesPerDay) + 1;
    const dayEnd = Math.floor((index + 1) * minutesPerChapter / minutesPerDay) + 1;

    planHTML += `
      <div class="plan-day">
        <strong>第${index + 1}部分：</strong> ${chapter}<br>
        <small>建议时间：第${dayStart}-${Math.min(dayEnd, totalDays)}天</small>
      </div>
    `;
  });

  planHTML += '</div>';
  planHTML += '<p>💡 建议：每天固定时间阅读，做好笔记，遇到问题及时查阅资料</p>';

  container.innerHTML = planHTML;
  container.style.display = 'block';
}
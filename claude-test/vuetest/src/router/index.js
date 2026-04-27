import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import OverviewPage from '../pages/OverviewPage.vue'
import GuidePage from '../pages/GuidePage.vue'
import QuizPage from '../pages/QuizPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/overview',
    name: 'Overview',
    component: OverviewPage
  },
  {
    path: '/guide',
    name: 'Guide',
    component: GuidePage
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
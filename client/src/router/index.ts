import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FooterView from '@/views/FooterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/footer',
    name: 'footer',
    component: FooterView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/denex',
    name: 'denex',
    component: () => import('../views/DenexPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

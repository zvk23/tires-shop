import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

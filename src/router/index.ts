// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Header from '@/components/Header.vue'

import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
          Header,
        }
      },
      {
        path: '/work',
        name: 'work',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Work.vue'),
          Header,
        }
      },
      {
        path: '/cat',
        name: 'cat',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/views/Cat.vue'),
          Header,
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

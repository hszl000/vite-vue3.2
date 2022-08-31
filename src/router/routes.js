import Layout from '@/components/Layout/index.vue'
import { defineAsyncComponent } from 'vue'

// 
import Login from '@/router/Login/index.js'

export default [
  Login,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: defineAsyncComponent(() => import('@/components/404.vue'))
  }
]
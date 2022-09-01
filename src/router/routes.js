import { defineAsyncComponent } from 'vue'

// 
import Login from '@/router/modules/Login/index.js'

export default [
  Login,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: defineAsyncComponent(() => import('@/components/404.vue'))
  }
]
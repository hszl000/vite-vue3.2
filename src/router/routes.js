import { defineAsyncComponent } from 'vue'

// 
import Login from '@/router/modules/Login/index.js'
import Test from '@/router/modules/Test/index.js'

export default [
  Login,
  Test,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: defineAsyncComponent(() => import('@/components/404.vue'))
  }
]
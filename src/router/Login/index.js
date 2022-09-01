import Layout from '@/components/Layout/index.vue'
import { defineAsyncComponent } from 'vue'

export default {
  path: '/login',
  name: 'ProjectLoginLayout',
  meta: {
    title: '登录'
  },
  component: defineAsyncComponent(() => Layout),
  redirect: {
    name: 'ProjectLogin'
  },
  children: [
    {
      path: '',
      name: 'ProjectLogin',
      meta: {
        title: '登录'
      },
      component: defineAsyncComponent(() => import('@/module/Login/index.vue'))
    }
  ]


}
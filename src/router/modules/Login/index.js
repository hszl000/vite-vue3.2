export default {
  path: '/login',
  name: 'ProjectLoginLayout',
  meta: {
    title: '登录'
  },
  component: () => import('@/components/Layout/index.vue'),
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
      component: () => import('@/modules/Login/pages/index.vue')
    }
  ]
}
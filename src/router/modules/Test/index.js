export default {
  path: '/test',
  name: 'ProjectTestLayout',
  meta: {
    title: '测试'
  },
  component: () => import('@/components/Layout/index.vue'),
  redirect: {
    name: 'ProjectTest'
  },
  children: [
    {
      path: '',
      name: 'ProjectTest',
      meta: {
        title: '测试'
      },
      component: () => import('@/modules/Test/pages/index.vue')
    }
  ]
}
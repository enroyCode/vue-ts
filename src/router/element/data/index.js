import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/data',
    component: ZcFrame,
    children: [
      {
        path: '/element/data/table',
        name: 'table',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

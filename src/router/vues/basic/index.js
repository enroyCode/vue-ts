import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/vue',
    component: ZcFrame,
    children: [
      {
        path: '/vue',
        name: 'vue',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

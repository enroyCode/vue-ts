import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/basic',
    component: ZcFrame,
    children: [
      {
        path: '/element/basic/layout',
        name: 'layout',
        component: resolve => require(['@/views/element/basic/layout/layout.vue'], resolve)
      }]
  }
]

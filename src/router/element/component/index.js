import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/component',
    component: ZcFrame,
    children: [
      {
        path: '/element/component/dialog',
        name: 'dialog',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

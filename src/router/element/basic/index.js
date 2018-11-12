import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/basic',
    component: ZcFrame,
    children: [
      {
        path: '/element/basic/dialog',
        name: 'dialog',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/notice',
    component: ZcFrame,
    children: [
      {
        path: '/element/notice/alert',
        name: 'dialog',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

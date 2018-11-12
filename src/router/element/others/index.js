import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/others',
    component: ZcFrame,
    children: [
      {
        path: '/element/others/dialog',
        name: 'dialog',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

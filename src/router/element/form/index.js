import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/form',
    component: ZcFrame,
    children: [
      {
        path: '/element/form/select',
        name: 'dialog',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

import ZcFrame from '@/components/frame/zc-frame.vue'

export default [
  {
    path: '/element/navigation',
    component: ZcFrame,
    children: [
      {
        path: '/element/navigation/navMenu',
        name: 'navMenu',
        component: resolve => require(['@/views/home/home.vue'], resolve)
      }]
  }
]

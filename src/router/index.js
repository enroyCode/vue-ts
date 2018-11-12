import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import ZcFrame from '@/components/frame/zc-frame.vue'
import element from './element/index'
import vueDocs from './vues/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'//配置默认页面
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      component: ZcFrame,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: resolve => require(['@/views/home/home.vue'], resolve)
        }]
    },
    ...element,
    ...vueDocs
  ]
})

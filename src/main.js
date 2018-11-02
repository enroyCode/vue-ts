// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//路由
import ElementUI from 'element-ui'//饿了么ui
import moment from "moment";//时间格式转换

Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */


Vue.prototype.$moment = moment;//修改原型链

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

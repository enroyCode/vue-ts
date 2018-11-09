import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import ElementUI from 'element-ui' // 饿了么ui
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/less/font-awesome.less'
import moment from 'moment'// 时间格式转换
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$moment = moment; // 修改原型链

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

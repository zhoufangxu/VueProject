import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);
//配置axios默认请求地址
axios.defaults.baseURL ='http://127.0.0.1:3000';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
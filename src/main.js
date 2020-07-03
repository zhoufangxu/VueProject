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

//8: main.js 创建日期过滤器
Vue.filter("datetimeFilter", function (val) {
  //8.1:创建日期对象
  var date = new Date(val);
  //8.2:获取年 月 日 时 分 秒
  var y = date.getFullYear(); //年份
  var m = date.getMonth() + 1; //月份0~11
  var d = date.getDate(); //日
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  //8.3:返回字符串 y-m-d h:mi:s
  m < 10 && (m = "0" + m);
  d < 10 && (d = "0" + d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});

//7.1:加载第三方模块 qs
import qs from "qs";
//7.2:配置qs模块,qs成为Vue属性 
Vue.prototype.qs = qs;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
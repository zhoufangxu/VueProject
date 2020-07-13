import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Search from "../views/subViews/searchPage.vue";
import Info from "../views/subViews/Info.vue";
import Container from '../views/container.vue';
import Cart from "../views/subViews/Cart.vue";
//解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Container,
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'info/:lid',
          name: 'info',
          component: Info
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]

const router = new VueRouter({
  routes
})

export default router

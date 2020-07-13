import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount: sessionStorage.getItem("cartCount") || 0,  //保存购物车图标显示数量
    cartList: sessionStorage.getItem("cartList") || [],  //保存购物车列表数据
    userKey: sessionStorage.getItem("userKey") || '', //保存搜索框用户搜索关键词
  },
  mutations: {
    //购物车中数据加1  点击商品详细[加入购物]
    increment(state) {
      state.cartCount++;
    },
    //显示购物车列表时
    updateCount(state, count) {
      state.cartCount = count;
      sessionStorage.setItem("cartCount", count);
    },

    //更新购物车列表数据
    updataCartList(state, list) {
      state.cartList = list;
      sessionStorage.setItem("cartList", list);
    },
    upDataUserKey(state, key){
      state.userKey = key;
      sessionStorage.setItem("userKey", key);
    },
    //更新购物车中产品数量
    upCartListCountAdd(state, i) {
      state.cartList[i].count += 1;
    },
    upCartListCountReduce(state, i) {
      state.cartList[i].count -= 1;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    //获取购物车中数量方法
    optCartCount: function (state) {
      return state.cartCount;
    },
    //获取购物车列表数据
    getCartList(state) {
      return state.cartList;
    },
    //获取搜索框用户搜索关键词
    getUserKey(state){
      return state.userKey;
    }
  }
})
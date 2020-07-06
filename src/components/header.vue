<template>
  <div id='app'>
    <el-menu :default-active="activeIndex" class="el-menu-demo ul-box" mode="horizontal">
      <el-menu-item>
        <router-link to="/">
          <img src="../assets/logo.png" class="img-style">
        </router-link>
      </el-menu-item>
      <el-menu-item index="1">发现音乐</el-menu-item>
      <el-menu-item index="2">我的音乐</el-menu-item> 
      <el-menu-item index="3">朋友</el-menu-item>
      <el-menu-item index="4">商城</el-menu-item>
      <el-menu-item index="5">音乐人</el-menu-item>
      <el-menu-item>
        <div class="search-box">
          <input type="text" placeholder="音乐/电台/用户" class="userInput" v-model="textInput" @keyup.13="userInput">
          <ul class="search-list" v-if="showSearch">
            <li v-for="(item, index) of list" :key="index">
              <router-link to="#">{{item.lname}}</router-link>
            </li>
          </ul>
        </div>
          <span class="center" @click="goCart">
            <i class="el-icon-shopping-cart-full"></i>
            购物车
            <div class="bubble">
              <!-- 获取xuex中的购物车商品数量 -->
              <span class="cart_count">{{$store.getters.optCartCount}}</span>
            </div>
          </span>
      </el-menu-item>
        <el-menu-item class="userNameBox" v-show="isLogin">
            <router-link :to=" isLogin ? '/login' : '' ">
              <span class="login">登陆</span>
            </router-link>
        </el-menu-item>
        <el-submenu index="7" v-show="!isLogin">
            <template slot="title">
            <span class="login">{{userMsg.user_name}}</span>
            </template>
            <el-menu-item index="7-1">
            <img src="../assets/default.png">
            </el-menu-item>
            <el-menu-item index="7-2">
            {{userMsg.email}}
            </el-menu-item>
            <el-menu-item index="7-3">
            <span @click="outLogin">退出</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex: '1',
      textInput: '',
      isLogin: true,
      userMsg: [],
      list: [],
      showSearch: false,
    };
  },
  watch :{
    textInput:function(){
        this.getSearch();
    }
  },
  methods: {
   //获取搜索数据
   getSearch(){
     this.$axios.get(`/search?key=${this.textInput}`)
     .then(res => {
       if(this.textInput === ''){
         this.showSearch = false;
       } else {
         this.showSearch = true;
       }
       this.list = res.data.data;
     })
     .catch(err => {
       console.log(err);
     })
   },
   userInput(){
     //页面跳转携带参数
     this.$router.push(`/search/${this.textInput}`);
   },
   //退出登陆
   outLogin(){
     this.$confirm('确定退出', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.get('/logout')
        .then(res=>{
        if(res.data.code == 1){
          this.$alert('退出成功', {
            confirmButtonText: '确定',
          });
          this.isLogin = true;
        }
       }).catch(err=>{
         console.log(err);
       })
       }).catch(() => {
         this.$message({
           type: 'info',
           message: '已取消退出'
        });          
       });
    },
    //跳转购物车Btn
    goCart(){
     this.$router.push("/cart");
    },
  },
  created(){
    //判断当前用户是否登录
    this.$axios.get(`/isLogin`)
     .then(res=>{
       if(res.data.code == 1){
         this.isLogin = false;
       }else{
         this.isLogin = true;
       }
       this.userMsg = res.data.data[0]
     })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>

<style scoped>
    #app .el-menu.el-menu--horizontal{
      border-bottom: none;
    }
    #app{
      border-bottom: solid 1px #e6e6e6;
    }
    body{
      margin: 0;
      padding: 0;
      text-align: right;
    }
    a{
      text-decoration: none;
    } 
    #app .ul-box{
      width: 1000px;
      margin: 0 auto;
    }
    .img-style{
      height: 30px;
    }
    .userInput{
      border:none;
      outline: none;
      display: inline-block;
      background-color: #e3e4e5;
      height: 26px;
      width: 130px;
      border-radius: 100px;
      padding-left: 10px;
      margin-right: 15px;
      margin-left: 10px;
    }
    .center{
        margin-left: 10px;
        border: 1px solid #e3e4e5;
        padding: 6px 14px;
        position: relative;
    }
    .center:hover{
      border: 1px solid #f00;
    }
    .login{
      font-size: 14px;
    }
    .userNameBox{
      position: relative;
    }
    .user-item{
      position: absolute;
      z-index: 999;
      border: 1px solid #e1e1e1;
      padding: 10px;
    }
    .el-menu-item{
      text-align: center;
    }
    .bubble{
      display:inline-block;
      width: 20px;
      height: 15px;
      background: #f00;
      border-radius: 20px;
      position: absolute;
      left: 27px;
      top: 0;
    }
    .cart_count{
      position: absolute;
      top: -22px;
      left: 6px;
      color: #fff;
    }
    .search-box{
      position: relative;
    }
    .search-list{
      background: #f00;
      position: absolute;
      z-index: 999;
    }
</style>
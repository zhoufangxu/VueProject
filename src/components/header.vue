<template>
  <div id='app'>
    <el-menu :default-active="activeIndex" class="el-menu-demo ul-box" mode="horizontal">
      <el-menu-item>
          <img src="../assets/logo.png" class="img-style">
      </el-menu-item>
      <el-menu-item index="1">发现音乐</el-menu-item>
      <el-menu-item index="2">我的音乐</el-menu-item> 
      <el-menu-item index="3">朋友</el-menu-item>
      <el-menu-item index="4">商城</el-menu-item>
      <el-menu-item index="5">音乐人</el-menu-item>
      <el-menu-item>
          <input type="text" placeholder="音乐/电台/用户" class="userInput" v-model="textInput" @keyup.13="userInput">
          <span class="center" @click="goCart">购物车</span>
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
    };
  },
  methods: {
   userInput(){
     console.log(this.textInput);
     this.textInput = '';
     this.$router.push("/search");
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
     this.$router.push("cart");
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
    padding: 2px 14px;
    border-radius: 50px;
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
</style>
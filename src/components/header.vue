<template>
  <div id='app'>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" class="img-style">
        </router-link>
      </div>
      <ul>
        <li v-if="isLogin">
          <router-link to="/login">你好，请登陆</router-link>
          <span class="register">免费注册</span>
        </li>
        <li v-if="!isLogin" class="userBox" @mouseover="enterUserBox" @mouseout="leaveUserBox" :class="activeIndex === 1 ? 'active' : ''">
          <router-link to="#">
             {{userMsg.user_name}}
             <i class="el-icon-arrow-down"></i>
          </router-link>
          <div class="showUser" v-show="showUserBox">
            <img src="../assets/logo.png">
            <span @click="outLogin">退出</span>
          </div>
        </li>
        <li class="spacer"></li>
        <li>
          <router-link to="#">我的订单</router-link>
        </li>
        <li class="spacer"></li>
        <li>
          <router-link to="#">我的会员</router-link>
        </li>
        <li class="spacer"></li>
        <li>
          <router-link to="#">客服服务</router-link>
        </li>
        <li class="spacer"></li>
        <li>
          <router-link to="#">手机app</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex: '-1',
      isLogin: true,
      userMsg: [],
      showUserBox: false,
    };
  },
  methods: {
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
    //鼠标进入用户名
    enterUserBox(){
      this.activeIndex = 1;
      this.showUserBox = true;
    },
    //鼠标离开用户名
    leaveUserBox(){
      this.activeIndex = -1;
      this.showUserBox = false;
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
  #app{
    background: #e3e4e5;
    border-bottom: 1px solid #ddd;
  }
  .container{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width: 24px;
    height: 24px;
    margin: 2px;
  }
  .logo img{
    width: 24px;
    height: 24px;
  }
  .container ul{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: rgb(169, 169, 169);
    height: 30px;
  }
  .container ul li{
    margin: 0 10px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
  }
  .container ul a:hover{
    color: #f00;
  }
  .container ul li.spacer{
    width: 1px;
    height: 10px;
    background: #ccc;
  }
  .register{
    color: #f00;
    margin-left: 4px;
  }
  .userBox{
    position: relative;
    padding: 0 5px;
    border: 1px solid #e3e4e5;
  }
  .showUser{
    position: absolute;
    z-index: 100;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-top: none;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: -1px;
    top: 31px;
  }
  .showUser>img{
    width: 50px;
    height: 50px;
  }
  .active{
    background: #fff;
    border: 1px solid #e1e1e1;
    border-bottom: 1px solid #fff;
  }
</style>
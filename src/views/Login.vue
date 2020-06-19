<template>
  <div class="login">
    <div class="login-title">
      <div class="login-logo">
        <img src="../assets/logo.png"/>
        <h1>欢迎登陆</h1>
      </div>
    </div>
    <div class="login-bg">
      <div class="login-w">
        <div class="login-box">
          <p class="login-box-title">
            <span @click="isLogin" data-index='1' :class=" index == 1 ? 'loginActive' : '' ">扫码登陆</span>
            <span @click="isLogin" data-index='2' :class=" index == 2 ? 'loginActive' : '' ">账户登陆</span>
          </p>
          <Scan v-show='showItem'></Scan>
          <btnLogin v-show="!showItem"></btnLogin>
          <div class="login-botton-login">
            <div>
              <span>
              <i class="el-icon-eleme"></i>
              <router-link to="#">QQ</router-link>
              </span>
              <span>
                <i class="el-icon-eleme"></i>
                <router-link to="#">微信</router-link>
              </span>
            </div>
            <div>
              <i class="el-icon-caret-right"></i>
              <router-link to="#">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scan from '../components/Login/Scan';
import btnLogin from '../components/Login/btnLogin';
export default {
  data(){
    return{
      showItem: true,
      index: 1,
    }
  },
  methods:{
    isLogin(e){
      let index = e.target.dataset.index;
      this.index = index;
      if(index == 1){
        this.showItem = true;
      }else{
        this.showItem = false;
      }
      
    }
  },
  components:{
    Scan,
    btnLogin
  }
}
</script>


<style>
body{
  text-align: center;
}
a{
  color: #747474;
}
.login-title{
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
.login-logo{
  display: flex;
  align-items: center;
}
.login-logo>img{
  width: 60px;
  height: 60px;
}
.login-logo>h1{
  font-size: 20px;
  margin-left: 10px;
}
.login-bg{
  background-color: #e93854;
  height: 420px;
}
.login-w{
  width: 1000px;
  height: 420px;
  margin: 0 auto;
  position: relative;
  background: url('../assets/bg.png');
}
.login-box{
  width: 320px;
  margin: 20px 0;
  background: #fff;
  position: absolute;
  right: 0;
}
.login-box-title{
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
}
.login-box-title>span{
  display:inline-block;
  width: 50%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  cursor: pointer;
  color: #747474;
}
.login-botton-login{
  margin-top: 6px;
  display: flex;
  border-top: 1px solid #e1e1e1;
  padding-top: 10px;
  justify-content: space-between;
  color: #747474;
  padding:0px 10px;
  padding-top: 15px;
  padding-bottom: 6px;
}
.login-box-title .loginActive{
  font-weight: bold;
  color: #e93854;
}
</style>

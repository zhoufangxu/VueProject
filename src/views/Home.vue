<template>
<div>
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
    <el-menu-item index="6">下载客户端</el-menu-item>
    <el-menu-item>
      <input type="text" placeholder="音乐/电台/用户" class="userInput">
      <span class="center">创作中心</span>
    </el-menu-item>
    <el-menu-item>
      <span class="login">登陆</span>
    </el-menu-item>
  </el-menu>
  </div>
  <Banner />
</div>

</template>
<script>
import Banner from "../components/banner";
export default {
  components:{
    Banner
  },
  data(){
    return {
      activeIndex: '1'
    };
  },
  methods: {
   
  }
}
</script>


<style>
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
  width: 140px;
  border-radius: 100px;
  padding-left: 10px;
  margin-right: 20px;
  margin-left: 10px;
}
.center{
  margin-left: 20px;
  border: 1px solid #e3e4e5;
  padding: 2px 14px;
  border-radius: 50px;
}
.login{
  font-size: 14px;
}
</style>
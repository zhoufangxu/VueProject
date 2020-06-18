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
            <span>扫码登陆</span>
            <span>账户登陆</span>
          </p>
          <div class="login-box-container">
            <div class="login-box-container-imgbox">
              <img src="../assets/time.jpg" />
            </div>
            <div class="login-bottom-text">打开<span style="color:red;margin:0 2px;">手机App</span>扫描二维码</div>
            <div class="login-bottom-icon">
              <div>
                <i class="el-icon-s-tools login-bottom-icons"></i>
                免输入
              </div>
              <div>
                <i class="el-icon-warning login-bottom-icons"></i>
                更快
              </div>
              <div>
                <i class="el-icon-error login-bottom-icons"></i>
                更安全
              </div>
            </div>
          </div>
          <div class="login-botton-login">
            <div>
              <span>
              <i class="el-icon-eleme"></i>QQ
              </span>
              <span>
                <i class="el-icon-eleme"></i>微信
              </span>
            </div>
            <div>
              <i class="el-icon-caret-right"></i>
              立即注册
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
body{
  text-align: center;
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
  background-color: rgb(203, 35, 35);
  padding: 10px;
  height: 400px;
}
.login-w{
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.login-box{
  width: 260px;
  padding: 10px;
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
.login-box-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-box-container-imgbox{
  width: 150px;
  height: 150px;
  padding: 5px;
  border: 1px solid #e1e1e1;
  margin-bottom: 20px;
}
.login-box-container-imgbox>img{
  widows: 147px;
  height: 147px;
}
.login-bottom-text{
  font-size: 14px;
  color: #747474;
  margin-bottom: 8px;
}
.login-bottom-icon{
  display: flex;
  color: #747474;
  font-size: 14px;
}
.login-bottom-icon>div{
  margin: 0 5px;
  display: flex;
  align-items: center;
  padding: 5px;
}
.login-bottom-icons{
  font-size: 22px;
  margin-right: 5px;
}
.login-botton-login{
  margin-top: 6px;
  display: flex;
  border-top: 1px solid #e1e1e1;
  padding-top: 10px;
  justify-content: space-between;
  color: #747474;
}
</style>

<template>
    <div>
        <div class="login-box-container">
            <div class="login-box-container-imgbox">
                <img src="../../assets/time.jpg" />
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
    </div>
</template>

<style>
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
        margin: 10px 0;
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
</style>
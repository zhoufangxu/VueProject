<template>
    <div class="box">
        <div class="user-name">
            <i class="el-icon-user"></i>
            <input type="text">
            <i class="el-icon-close"></i>
        </div>
        <div class="user-pwd">
            <i class="el-icon-s-goods"></i>
            <input type="password">
            <i class="el-icon-close"></i>
        </div>
        <div>
            <router-link to="#">忘记密码</router-link>
        </div>
        <div class="login-btn">
            <button>登录</button>
        </div>
    </div>
</template>

<style>
    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-name,.user-pwd{
        margin: 15px 0;
        border: 1px solid #e1e1e1;
        width: 250px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    .user-name>input,.user-pwd>input{
        border: none;
        outline: none;
        border-left: 1px solid #e1e1e1;
        padding-left: 10px;
    }
</style>
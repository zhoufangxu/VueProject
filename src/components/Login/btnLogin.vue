<template>
    <div class="box">
        <div class="user-name">
            <i class="el-icon-user"></i>
            <input type="text" placeholder="请输入用户名" v-model="userName">
            <i class="el-icon-close" data-name="uname" @click="clearContent"></i>
        </div>
        <div class="user-pwd">
            <i class="el-icon-s-goods"></i>
            <input type="password" placeholder="请输入密码" v-model="userUpwd">
            <i class="el-icon-close" data-name="upwd" @click="clearContent"></i>
        </div>
        <div class="pwd">
            <router-link to="#">忘记密码</router-link>
        </div>
        <div class="login-btn" @click='login'>
            <button>登&nbsp;录</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            userName: '',
            userUpwd: '',
        }
    },
    methods:{
        //清除内容
        clearContent(e){
            let name = e.target.dataset.name;
            if(name=='uname'&&this.userName!=''){
                this.userName = '';
            }else if(name=='upwd'&&this.userUpwd!=''){
                this.userUpwd = '';
            }
        },
        //登录验证
        login(e){
            //获取用户名和密码
            let uname = this.userName, upwd = this.userUpwd;
            if(uname != '' && upwd != '' ){
                let url = `/userLogin?uname=${uname}&upwd=${upwd}`;
                this.$axios.get(url)
                  .then(res=>{
                    if(res.data.code == 1){
                        this.$alert('登录成功', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$router.push("/");
                            }
                        });
                    }else{
                         this.$alert('用户名或密码有误', {
                            confirmButtonText: '确定',
                        });
                    }
                  }).catch(err=>{
                      console.log(err);
                  })
            }
        }
    }    
}
</script>


<style>
    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-name,.user-pwd{
        margin: 10px 0;
        border: 1px solid #e1e1e1;
        width: 250px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
    }
    .user-name>input,.user-pwd>input{
        border: none;
        outline: none;
        border-left: 1px solid #e1e1e1;
        padding-left: 10px;
        width: 185px;
    }
    .pwd{
        width: 100%;
        text-align: right;
        padding-right: 50px;
        font-size: 14px;
        margin: 8px 0;
    }
    .login-btn{
        width: 250px;
        height: 40px;
        background: #f00;
        border-radius: 5px;
        line-height: 40px;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .login-btn>button{
        color: #fff;
        font-size: 18px;
        background: #f00;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>
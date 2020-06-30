<template>
    <div class="container">
        <!-- logo -->
        <div class="logo">
            <router-link to="/cart">
                <img src="http://misc.360buyimg.com/jdf/1.0.0/unit/global-header/5.0.0/i/jdlogo-201708-@2x.png">
            </router-link>
            <span>购物车</span>
        </div>
        <!-- 购物车内容 -->
        <div class="cart-container">
            <h2>全部商品{{allCount}}</h2>
            <div class="title">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">
                            <el-radio v-model="radio" label="1">全选</el-radio>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple-dark title-style">商品</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">单价</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">数量</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">小计</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple-dark title-style">操作</div>
                    </el-col>
                </el-row>
            </div>
            <div class="cart-item" v-for="(item, index) of cartList" :key="index">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">
                            <el-radio v-model="radio"></el-radio>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple-dark title-style cart-product">
                            <img src="../../assets/logo.png" class="cart-item-img">
                            <div class="cart-title">{{item.lname}}</div>
                            <div class="cart-spec">mac</div>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">¥{{item.price.toFixed(2)}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">{{item.count}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style price">¥{{item.price.toFixed(2)}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple-dark title-style">
                            <span class="delBtn" @click="delItem" :data-id="item.id">删除</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allCount: 10,
            radio: '0',
            cartList: [],
        }
    },
    methods:{
        getCartList(){
            this.$axios.get('/cartlist')
             .then(res => {
                 console.log(res.data)
                 this.cartList = res.data.data;
             })
             .catch(err => {
                 console.log(err);
             })
        },
        delItem(e){
            this.$confirm('是否删除该商品?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let id = e.target.dataset.id;
                this.$axios.get(`/delCartItem?id=${id}`)
                 .then(res => {
                     this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getCartList();
                 })
                 .catch(err => {
                     console.log(err);
                 })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    },
    created(){
        this.getCartList()
    },
}
</script>

<style scoped>
    .container{
        width: 1000px;
        margin: 0 auto;
    }
    .container>.logo{
        margin: 20px 0;
        display: flex;
        align-items: flex-end;
    }
    .container>.logo img{
        width: 143px;
        height: 42;
    }
     .container>.logo span{
         font-size: 22px;
         font-weight: bold;
         margin-left: 14px;
         color: #494949;
     }
     /* 内容标题 */
     .title{
         background: #f4f4f4;
         padding: 10px 10px;
         border: 1px solid #f0f0f0;
     }
     .cart-container>h2{
         font-size: 18px;
         color: #f00;
         margin: 0;
         width: 120px;
         padding: 5px;
         text-align:center;
         border-bottom: 1px solid #f00;
     }
     .title-style{
         font-size: 14px;
         color: #747474;
     }
     /* 购物车列表项 */
     .cart-item{
         border-top: 1px solid #e1e1e1;
         margin: 20px 0;
         padding: 20px 10px;
     }
     .cart-item-img{
         display: block;
         width: 50px;
         height: 50px;
         border: 1px solid #e1e1e1;
         padding: 5px;
         margin-right: 10px;
     }
     .cart-product{
         display: flex;
     }
     .cart-title{
         width: 250px;
     }
     .cart-spec{
         margin-left: 10px;
     }
     .price{
         font-size: 15px;
         font-weight: bold;
         color: #f00;
     }
     .delBtn{
         cursor: pointer;
     }
</style>
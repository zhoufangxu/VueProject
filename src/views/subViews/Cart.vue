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
            <h2>全部商品{{cartCount}}</h2>
            <div class="title">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style">
                        <div class="allSelect">
                            <input type="checkbox" :checked="checkedAll" @click="changeVal">全选
                        </div>
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
                            <input type="checkbox" @click="changeItem" :checked="item.cb" :data-i="index">
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
                        <div class="grid-content bg-purple-dark title-style">¥{{ parseInt(item.price).toFixed(2)}}</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="cart-count">
                            <button class="count-btn" @click="reduce" :data-pid="item.pid" :data-count="item.count" :data-i="index">-</button>
                            <span class="count">{{item.count}}</span>
                            <button class="count-btn" @click="add" :data-pid="item.pid" :data-i="index">+</button>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark title-style price">¥{{parseInt(item.price).toFixed(2)}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple-dark title-style">
                            <span class="delBtn" @click="delItem" :data-id="item.id">删除</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 底部内容 -->
        <div class="cart-bootm">
            <el-row>
                <el-col :span="12">
                    <div class="allbox">
                        <div class="allSelect">
                            <input type="checkbox" :checked="checkedAll" @click="changeVal">全选
                        </div>
                        <span style="cursor: pointer;" @click="delItems">删除选中商品</span>
                    </div>
                </el-col>
                <el-col :span="12" class="settlement">
                    <span>已选中<span class="select-count">{{number}}</span>件商品</span>
                    <div>总价<span class="select-count">¥{{notes.toFixed(2)}}</span></div>
                    <div class="settlement-btn">去结算</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            radio: '0',
            checkedAll: false,  //全选按钮状态
        }
    },
    methods:{
        //购物车数量加
        add(e){
            var count = 1;
            var pid = e.target.dataset.pid;
            var i = e.target.dataset.i;
            this.$axios.get(`/upDatecart?pid=${pid}&count=${count}`)
            .then(res=>{
                this.$store.commit("upCartListCountAdd",i);
            })
            .catch(err => {
                console.log(err);
            })
        },
        //购物车数量减
        reduce(e){
            var itemCount = e.target.dataset.count;
            var count = -1;
            var pid = e.target.dataset.pid;
            var i = e.target.dataset.i;
            if(itemCount > 1){
                this.$axios.get(`/upDatecart?pid=${pid}&count=${count}`)
                .then(res=>{
                   this.$store.commit("upCartListCountReduce",i);
                })
                .catch(err => {
                    console.log(err);
                })
            }else{
                this.$alert('最少购买一件商品', '提示', {
                    confirmButtonText: '确定',
                });
            }
        },
        //选中一个商品
        changeItem(e){
           var cb = e.target.checked;
           var i = e.target.dataset.i;
           this.cartList[i].cb = cb;
           //复选框点击时获得cb为true的个数
           var count = 0;
           for(var item of this.cartList){
              if(item.cb){
                count++;
              }
           }
           if(count == this.cartList.length){
              this.checkedAll = true;
           }else{
              this.checkedAll = false;
           }
        },
        //选中全部商品
        changeVal(e){
            var cb = e.target.checked;
            this.checkedAll = cb;
            for(var item of this.cartList){
                item.cb = cb;
            }
        },
        //获取购物车数据
        getCartList(){
            this.$axios.get('/cartlist')
             .then(res => {
               //判断用户有没有登陆
               if(res.data.code == -1){
                   this.$alert('您还没有登陆', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$router.push('/login')
                        }
                    });
               }
               //将购物车数据保存到vuex中
               let rows = res.data.data;
               for (const item of rows) {
                   item.cb = false;
               }
               this.$store.commit("updataCartList",rows);
               this.$store.commit("updateCount",rows.length);
             })
             .catch(err => {
                 console.log(err);
             })
        },
        //删除一个商品
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
        },
        //删除多个商品
        delItems(){ 
            var ids = "";
            for(var item of this.cartList){
              if(item.cb){
                ids += item.id + ",";
              }
            }
            ids = ids.substring(0,ids.length-1);
            if(ids === ""){
                this.$alert('至少选中一件商品', '提示', {
                    confirmButtonText: '确定',
                });
                return;
            }
            this.$confirm('是否删除选中商品?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.$axios.get(`/removeMItem?ids=${ids}`)
                .then(res => {
                    if(res.data.code == 1){
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getCartList();
                    }
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
    },
    computed:{
        //获得购物车中商品数量
        cartCount(){
            return this.cartList.length;
        },
        //获取vuex中的购物车数据
        cartList:function(){
            return this.$store.getters.getCartList;
        },
        //计算选中的商品数量
        number:function(){
            //创建变量保存要结算商品的个数
            var count = 0;
            //遍历数组中cb为true的 累加
            for(var item of this.cartList){
                if(item.cb){
                    count += item.count;
                }
            }
            return count;
        },
        //计算商品总计
        notes:function(){
            //创建变量保存总计
            var sum = 0;
            //循环item中cb为true的产品的价格，累加到sum中
            for(var item of this.cartList){
                if(item.cb){
                    sum += item.price*item.count;
                }
            }
            //返回总计
            return sum;
        },
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
     /* 底部结算 */
     .cart-bootm{
         border: 1px solid #e1e1e1;
         color: #747474;
         font-size: 14px;
         padding-left: 10px;
         height: 40px;
         line-height: 40px;
     }
     .settlement{
         display: flex;
         justify-content: flex-end;
     }
     .settlement>span{
         margin-right: 20px;
     }
     .select-count{
         font-weight: bold;
         color: #f00;
         margin: 0 3px;
         font-size: 18px;
     }
     .settlement-btn{
         margin-left: 20px;
         background: #f00;
         color: #fff;
         padding: 0 20px;
         cursor: pointer;
     }
     .allSelect{
         width: 50px;
         display: flex;
         cursor: pointer;
         justify-content: left;
         align-items: center;
         margin-right: 20px;
     }
     .allbox{
         display: flex;
     }
     .cart-count{
         display: flex;
         align-items: center;
     }
     .count-btn{
         border: 1px solid #e1e1e1;
         background: #fff;
         width: 24px;
         height: 24px;
         outline: none;
     }
     .count{
         display: inline-block;
         width: 30px;
         height: 22px;
         text-align: center;
         border-top: 1px solid #e1e1e1;
         border-bottom: 1px solid #e1e1e1;
     }
</style>
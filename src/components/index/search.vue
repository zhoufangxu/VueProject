<template>
    <div class="container">
        <div class="box">
            <div class="search-box">
            <input type="text" placeholder="音乐/电台/用户" class="userInput" v-model="textInput" @keyup.13="userInput">
            <ul class="search-list" v-if="showSearch">
                <li v-for="(item, index) of list" :key="index">
                <router-link to="#">{{item.lname}}</router-link>
                </li>
            </ul>
            </div>
            <span class="center" @click="goCart">
                <i class="el-icon-shopping-cart-full"></i>
                购物车
                <div class="bubble">
                    <!-- 获取xuex中的购物车商品数量 -->
                    <span class="cart_count">{{$store.getters.optCartCount}}</span>
                </div>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            textInput: '',
            showSearch: false,
             list: [],
        }
    },
    methods:{
      userInput(){
      //页面跳转携带参数
       this.$router.push(`/search/${this.textInput}`);
      },
      //跳转购物车Btn
      goCart(){
        this.$router.push("/cart");
      },
    //获取搜索数据
      getSearch(){
        this.$axios.get(`/search?key=${this.textInput}`)
        .then(res => {
        if(this.textInput === ''){
            this.showSearch = false;
        } else {
            this.showSearch = true;
        }
        this.list = res.data.data;
        })
        .catch(err => {
        console.log(err);
        })
      },
    },
    watch :{
      textInput:function(){
        this.getSearch();
      }
  },
}
</script>

<style scoped>
    .container{
        width: 1000px;
        margin: 0 auto;
    }
     .userInput{
        border:none;
        outline: none;
        display: inline-block;
        padding-left: 10px;
        border: 2px solid #f00;
        width: 400px;
        height: 30px;
        color: #747474;
    }
    .search-list{
        background: #f00;
        position: absolute;
        z-index: 999;
    }
    .center{
        margin-left: 10px;
        border: 1px solid #e3e4e5;
        padding: 6px 14px;
        position: relative;
        cursor: pointer;
    }
    .center:hover{
        border: 1px solid #f00;
    }
    .bubble{
        display:inline-block;
        width: 20px;
        height: 15px;
        background: #f00;
        border-radius: 20px;
        position: absolute;
        left: 27px;
        top: 0;
    }
    .cart_count{
        position: absolute;
        top: -3px;
        left: 6px;
        color: #fff;
    }
    .search-box{
        position: relative;
    }
    .box{
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
</style>
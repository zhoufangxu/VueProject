<template>
    <div class="container">
        <div class="box">
            <div class="search-box">
                <div class="search-item">
                     <input type="text" placeholder="请输入您要搜索的商品" class="userInput" v-model="textInput" @keyup.13="userInput" @keydown="changeTurn" @input="getSearch">
                     <i class="el-icon-search" @click="userInput"></i>
                </div>
                <ul class="search-list" v-if="showSearch">
                    <li v-for="(item, i) of list" :key="i" @click="getValue" class="search-list-item" :class="[index === i ? 'search_active' : '']">
                        {{item.lname}}
                    </li>
                    <span class="del-btn" @click="closeUl">关闭</span>
                </ul>
            </div>
            <span class="center" @click="goCart">
                <i class="el-icon-shopping-cart-full"></i>
                购物车
                <div class="bubble">
                    <!-- 获取xuex中的购物车商品数量 -->
                    <span class="cart_count">{{count}}</span>
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
            index: -1,
        }
    },
    methods:{
      //获取列表中关键词，给this.textInput
      getValue(e){
          this.textInput = e.target.dataset.title;
          this.userInput();
          this.showSearch = false;
      },
      //键盘上下切换选中
      changeTurn(e){
        //如果输入框没有内容直接退出
        if (this.textInput === '') {
            return;
        }
        if (e.keyCode == 38){
            this.index <= 0 ? this.index = this.list.length - 1 : this.index--;
            this.selectVal();
        } else if (e.keyCode == 40){
            this.index >= this.list.length - 1 ? this.index = 0 : this.index++;
            this.selectVal();
        }
      },
      //选中li内容赋值给textInput
      selectVal(){
        this.textInput = this.list[this.index].lname;
      },
      //关闭模糊查询列表
      closeUl(){
          this.showSearch = false;
      },
      userInput(){
        //跳转到搜索页面
        this.$router.push(`search`);
        this.$emit('getList',this.list);
        this.showSearch = false;
      },
      //跳转购物车Btn
      goCart(){
        this.$router.push("/cart");
      },
    //@input事件监听input的值获取搜索数据
      getSearch(){
          //此处节流
          this.$store.commit("upDataUserKey",this.textInput);
          setTimeout(() => {
             this.$axios.get(`/search?key=${this.textInput}`)
            .then(res => {
                this.list = res.data.data;
                //如果输入框内容为空，或者list.length为0时改为false
                if(this.textInput === '' || this.list.length === 0){
                  this.showSearch = false;
                } else {
                  this.showSearch = true;
                }
            })
            .catch(err => {
              console.log(err);
            }) 
          }, 200);
      },
    },
    watch :{
    //   textInput:function(){
    //     this.getSearch();
    //   }
  },
  computed:{
    //返回vuex中购物车商品数量
    count(){
        return this.$store.getters.optCartCount;
    },
    //计算属性返回vuex中key
    searchKey:function(){
        return this.$store.getters.getUserKey;
    }
  }
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
        width: 500px;
        height: 30px;
        color: #747474;
    }
    .search-box{
        position: relative;
    }
    .search-list{
        border: 1px solid #bfbfbf;
        top: 38px;
        position: absolute;
        z-index: 999;
        background: #fff;
        cursor: pointer;
        width: 510px;
    }
    .search-list-item{
        padding: 4px;
        font-size: 13px;
        line-height: 26px;
        color: #747474;
    }
    .search-list-item:hover{
        background: #e1e1e1;
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
    .box{
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .search-item{
        display: flex;
        align-items: center;
    }
    .search-item i{
        background: #f00;
        width: 40px;
        height: 36px;
        color: #fff;
        font-size: 22px;
        text-align: center;
        line-height: 36px;
        margin-left: -2px;
    }
    .del-btn{
        display: block;
        border-top: 1px solid #e1e1e1;
        height: 28px;
        color: #747474;
        font-size: 13px;
        line-height: 28px;
        text-align: right;
        padding-right: 10px;
    }
    .search_active{
        background: rgba(250, 226, 90, 0.748);
    }
</style>
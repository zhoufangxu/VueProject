<template>
    <div>
        <Search @getList="getChildList" />
        <div class="container">
            <!-- 导航栏 -->
            <div class="nav">
                <ul class="nav-list">
                    <li class="border" :class="index == 1 ? 'active' : ''">
                        <span>综合</span>
                        <i class="el-icon-caret-bottom"></i>
                    </li>
                    <li :class="index == 2 ? 'active' : ''">
                        <span>销量</span>
                        <i class="el-icon-caret-bottom"></i>
                    </li>
                    <li :class="index == 3 ? 'active' : ''">
                        <span>评论数</span>
                        <i class="el-icon-caret-bottom"></i>
                    </li>
                    <li :class="index == 4 ? 'active' : ''">
                        <span>新品</span>
                        <i class="el-icon-caret-bottom"></i>
                    </li>
                    <li :class="index == 5 ? 'active' : ''">
                        <span>价格</span>
                        <i class="el-icon-d-caret"></i>
                    </li>
                </ul>
            </div>
            <!-- 列表 -->
            <div class="list">
                <ul>
                    <li v-for="(item, index) of list" :key="index">
                        <router-link :to="`info/${item.lid}`">
                            <img src="../../assets/search.jpg">
                        </router-link>
                        <h4 class="price">{{item.price.toFixed(2)}}</h4>
                        <p class="product-title">{{item.lname}}</p>
                        <div class="addCartBtn">
                            <button @click="addCart" :data-id="item.lid" :data-price="item.price">加入购物车</button>
                        </div>
                    </li>
                </ul>
                <div class="noFind" v-show="list.length === 0">抱歉，没有找到“{{searchKey}}”相关的商品!</div>
            </div>
            <div class="page-num">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Search from "../../components/index/search";
export default {
    data(){
        return {
            index: 1,
            list: [],
        }
    },
    methods:{
      addCart(e){
            e.stopPropagation();
            let pid = e.target.dataset.id;
            let count = 1;
            let price = e.target.dataset.price;
            this.$axios.get(`/addcart?pid=${pid}&count=${count}&price=${price}`)
            .then(res => {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                this.$store.commit("increment");
            })
            .catch(err => {
                console.log(err);
            })
        },
        getChildList(list){
            this.list = list;
        }
    },
    created(){
        // 获取vuex中用户搜索key
        this.$axios.get(`/search?key=${this.searchKey}`)
        .then(res => {
           this.list =res.data.data;
        })
        .catch(err => {
            console.log(err);
        })
    },
    components:{
        Search,
    },
    watch:{
      
    },
    computed:{
      //计算属性返回vuex中key
      searchKey:function(){
          return this.$store.getters.getUserKey;
      }
    }
}
</script>

<style scoped>
  /* 导航栏 */
  .container{
      width: 1000px;
      margin: 0 auto;
  }
  .nav{
      background: #F1F1F1;
      margin-top: 10px;
      padding: 6px;
  }
  .nav-list{
      display: flex;
  }
  .nav-list>li{
      border: 1px solid #ccc;
      border-left: none;
      color: #666;
      background: #fff;
      font-size: 14px;
      padding: 4px;
      cursor: pointer;
  }
  .nav-list>.border{
      border-left: 1px solid #ccc;
  }
  .nav-list>.active{
      color: #fff;
      background: #f00;
      border: #f00;
  }
  /* 列表 */
  .list{
      margin: 30px 0;
  }
  .list ul{
      display: flex;
      flex-wrap: wrap;
  }
  .list li{
      width: 186px;
      margin: 0 5px;
      padding: 2px;
  }
  .list img{
      width: 100%;
  }
  .list li:hover{
      box-shadow: 1px 1px 1px 1px rgba(228, 228, 228, 0.5),-1px -1px 1px 1px rgba(228, 228, 228, 0.5);
  }
  .addCartBtn{
      text-align: right;
  }
  .addCartBtn>button{
      border:none;
      background: #f00;
      color: #fff;
      width: 90px;
      height: 30px;
      border-radius: 5px;
      margin: 5px;
      outline: none;
      cursor: pointer;
  }
  .addCartBtn>button:hover{
      opacity: 0.9;
  }
  .page-num{
      text-align: right;
      margin: 20px 0;
  }
  .price{
      color: #f00;
      font-size: 20px;
      margin: 0;
  }
  .product-title{
      font-size: 14px;
      color: #747474;
  }
  .noFind{
      text-align: center;
      color: #f00;
      font-size: 24px;
      margin: 20px;
  }
</style>
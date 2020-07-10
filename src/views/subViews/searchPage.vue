<template>
    <div>
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
                        <router-link to="#">
                            <img src="../../assets/search.jpg">
                        </router-link>
                        <h4>{{item.price.toFixed(2)}}</h4>
                        <p>{{item.lname}}</p>
                        <el-button type="danger" plain size="small">加入购物车</el-button>
                        
                    </li>
                </ul>
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
      
    },
    created(){
        //接受参数
        console.log(this.$route.params.listInfo);
        this.list = this.$route.params.listInfo;
    },
    components:{
        Search,
    },
    watch:{
      
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
  .list ul{
      display: flex;
      flex-wrap: wrap;
  }
  .list li{
      border: 1px solid #e1e1e1;
  }
</style>
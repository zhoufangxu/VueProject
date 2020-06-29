<template>
    <div class="hotProduct">
        <div class="container">
            <h1>热门商品</h1>
            <ul>
                <li v-for="(item, index) of dataList" :key="index">
                    <router-link :to="`info/${item.lid}`">
                        <img :src=" 'http://127.0.0.1:3000/' + item.md">
                        <p>{{item.title}}</p>
                        <span>¥{{item.price.toFixed(2)}}</span>
                    </router-link>
                </li>
            </ul>
            <div v-if="hasMore" class="loadIcon">
                <i class="el-icon-loading"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList: [],
            pno: 0,
            pageSize: 15,
            hasMore: true,
        }
    },
    methods:{
        loadMore(){
          if(this.dataList.length === 43){
              this.hasMore = false;
              return;
          }
          this.pno ++;
          this.$axios.get(`/products?pno=${this.pno}&pageSize=${this.pageSize}`)
            .then(res => {
                this.dataList = this.dataList.concat(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
         }
    },
    created(){
       this.loadMore();
        //防抖
        let timer;
        window.onscroll = () => {
            if(timer !== undefined){
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                var top = document.documentElement.scrollTop || document.body.scrollTop; 
                if(top >= 1370){
                    this.loadMore();
                }
            }, 200);
        }
    }
}
</script>

<style scoped>
    .container{
        width: 1000px;
        margin: 0 auto;
    }
    .container>ul{
        display: flex;
        flex-direction: row;
        justify-content: left;
        flex-wrap: wrap;
    }
    .container>ul>li{
        width: 190px;
        margin-bottom: 30px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .container>ul>li img{
        width: 80%;
        transition: all 0.6s;
        display: block;
        margin: 0 auto;
    }
    .container>ul>li img:hover{
        transform: scale(1.1);
    }
    .container>ul>li p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
        color: #747474;
    }
    .container>ul>li span{
        color: #f00;
        font-weight: bold;
    }
    .loadIcon{
        color: #e1e1e1;
        font-size: 36px;
        margin-top: 16px;
        text-align: center;
    }
</style>
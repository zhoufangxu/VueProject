<template>
    <div class="hotProduct">
        <div class="container">
            <h1>热门商品</h1>
            <ul>
                <li v-for="(item, index) of dataList" :key="index">
                    <router-link to="#">
                        <img :src=" 'http://127.0.0.1:3000/' + item.md">
                    </router-link>
                    <p>{{item.title}}</p>
                    <span>¥{{item.price.toFixed(2)}}</span>
                </li>
            </ul>
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
            this.pno ++;
          this.$axios.get(`/products?pno=${this.pno}&pageSize=${this.pageSize}`)
            .then(res => {
                console.log(res);
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
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .container>ul>li{
        width: 190px;
        margin-bottom: 20px;
    }
    .container>ul>li img{
        width: 100%;
        transition: all 0.6s;
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
</style>
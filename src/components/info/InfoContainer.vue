<template>
    <div class="Info-container">
        <div class="left">
            <div class="img-box">
                <img :src=" imgUrl + list.pics[0].md">
            </div>
            <div class="img-list">
                <i class="el-icon-arrow-left arrow-left"></i>
                <div class="list-item">
                    <ul :style="{width:list.pics.length * 74 + 'px'}">
                        <li v-for="(item, index) of list.pics" :key="index">
                            <img :src=" imgUrl + item.sm">
                        </li>
                    <div class="clear"></div>
                </ul>
                </div>
                <i class="el-icon-arrow-right arrow-right"></i>
                <div class="clear"></div>
            </div>
        </div>
        <div class="right">
            <div class="title">{{list.product.title}}</div>
            <div class="subtitle">{{list.product.subtitle}}</div>
            <div class="price">¥{{list.product.price.toFixed(2)}}</div>
            <div class="specs">
                <ul>
                    <li>
                        <router-link to="#">

                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="count-btn">
                <button class="reduce" @click="add" :data-count="-1">-</button>
                <span>{{count}}</span>
                <button class="add" @click="add" :data-count="1">+</button>
            </div>
            <div class="promise">承诺:{{list.product.promise}}</div>
            <div class="buy-box">
                <div class="buy-btn">立即购买</div>
                <div class="add-cart">
                    <i class="el-icon-shopping-cart-full"></i>
                    加入购物车
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           imgUrl: 'http://127.0.0.1:3000/',
           count: 1,
        }
    },
    methods:{
        //购物车数量
        add(e){
            this.count += parseInt(e.target.dataset.count);
            if(this.count === 0){
                this.count = 1;
            }
        }
    },
    created(){
       console.log(this);
    },
    props: ['list']
}
</script>

<style scoped>
 .clear{
    clear: both;
 }
 .Info-container{
     width: 1000px;
     margin: 0 auto;
     display: flex;
 }
 .left{
     width: 450px;
     margin-right: 40px;
 }
 .img-box{
     width: 450px;
     height: 450px;
     border: 1px solid #e1e1e1;
 }
 .img-box>img{
     width: 450px;
     height: 450px;
 }
 .img-list{
    margin-top: 20px;
    width: 370px;
    position: relative;
    padding-left: 41px;
    padding-right: 41px;
 }
 .arrow-left,.arrow-right{
     font-size: 30px;
     width: 30px;
     height: 60px;
     background: rgb(189, 189, 189);
     text-align: center;
     line-height: 54px;
 }
 .arrow-left{
     position: absolute;
     left: 0;
     top: 7px;
 }
 .arrow-right{
     position: absolute;
     top: 7px;
     right: 0;
 }
 .list-item{
    width: 370px;
    height: 74px;
    overflow: hidden;
 }
 .list-item>ul>li{
     float: left;
     width: 74px;
     height: 74px;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .list-item>li>img{
     width: 54px;
     height: 54px;
 }

 /* 右侧 */
 .title{
     font-size: 18px;
     font-weight: bold;
     margin-bottom: 10px;
 }
 .subtitle{
     font-size: 14px;
     color: #747474;
     margin-bottom: 20px;
 }
 .price{
     color: #f00;
     font-size: 28px;
     font-weight: bold;
 }
 .count-btn{
     width: 150px;
     display: flex;
     align-items: center;
     margin-top: 20px;
     margin-bottom: 20px;
 }
 .count-btn>.reduce,.add{
     width: 32px;
     height: 32px;
     border: none;
     background: #fff;
     border: 1px solid #e1e1e1;
     outline: none;
     cursor: pointer;
 }
 .count-btn>span{
     display: block;
     border-top: 1px solid #e1e1e1;
     border-bottom: 1px solid #e1e1e1;
     height: 30px;
     width: 50px;
     line-height: 30px;
     text-align: center;
 }
 .promise{
     font-size: 14px;
     color: #747474;
 }
 .buy-box{
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 300px;
     margin-top: 20px;
 }
 .buy-btn{
     width: 140px;
     height: 40px;
     border: 2px solid #f00;
     color: #f00;
     font-size: 18px;
     text-align: center;
     line-height: 40px;
     cursor: pointer;
 }
 .add-cart{
     width: 140px;
     height: 44px;
     font-size: 18px;
     background: #f00;
     line-height: 44px;
     color: #fff;
     text-align: center;
     cursor: pointer;
 }
</style>
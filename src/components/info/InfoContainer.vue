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
                        <router-link>

                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="count-btn">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <div>承诺:</div>
            <div>
                <div>立即购买</div>
                <div>
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
     margin-right: 18px;
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
</style>
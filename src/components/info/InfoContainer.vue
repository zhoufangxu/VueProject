<template>
    <div class="Info-container">
        <div class="left" v-if="list.pics !== undefined">
            <div class="img-box">
                <img :src=" imgUrl + list.pics[imgMd].md">
                <div class="magnifier" v-show="isMask" :style="{top:mask.top,left:mask.left}"></div>
                <div class="super-mask" @mouseover="signMask" @mouseout="outMask" @mousemove="move"></div>
                <div class="div-lg" v-show="isMask" :style="{'background-image':`url(${imgUrl + list.pics[imgMd].lg})`,'background-position':bgPosition}"></div>
            </div>
            <div class="img-list">
                <i class="el-icon-arrow-left arrow-left" @click="ulMove(-1)" :class="`${ moved==0 ? 'arrow-disabled' : '' }`"></i>
                <div class="list-item">
                    <ul :style="{width:list.pics.length * 74 + 'px', 'margin-left':ulMarginLeft}">
                        <li v-for="(item, index) of list.pics" :key="index">
                            <img :src=" imgUrl + item.sm" :data-index="index" :class=" isActive == index ?'img-active':''" @mouseover="signIn" @mouseout="signOut">
                        </li>
                    <div class="clear"></div>
                </ul>
                </div>
                <i class="el-icon-arrow-right arrow-right" @click="ulMove(+1)" :class="`${ moved >= list.pics.length-5 ? 'arrow-disabled' : ''}`"></i>
                <div class="clear"></div>
            </div>
        </div>
        <div class="right" v-if="list.product !== undefined">
            <div class="title">{{list.product.title}}</div>
            <div class="subtitle">{{list.product.subtitle}}</div>
            <div>
                <span class="promise">价格:</span>
                <span class="price">¥{{list.product.price.toFixed(2)}}</span>
            </div>
            
            <div class="specs">
                <div class="promise">规格:</div>
                <div class="spec-list">
                  <router-link v-for="(item, index) of list.specs" :key="index" :class="`${item.lid == $route.params.lid ? 'spec-active' : ''}`" :to="`/info/${item.lid}`">
                    {{item.spec}}
                  </router-link>
                </div>
            </div>
            <div class="count-box">
                <span class="promise">数量:</span>
                <div class="count-btn">
                    <button class="reduce" @click="add" :data-count="-1">-</button>
                    <span>{{count}}</span>
                    <button class="add" @click="add" :data-count="1">+</button>
                </div>
            </div>
            <div class="promise">
                <span class="promise">承诺:</span>
                {{list.product.promise}}
            </div>
            <div class="buy-box">
                <div class="buy-btn" @click="buy">立即购买</div>
                <div class="add-cart" @click="addCart">
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
           count: 1, //添加数量
           isActive: -1,  //小图片是否添加边框
           imgMd: 0,  //显示第几张中图片
           isMask: false, //放大镜和lgdiv显示隐藏
           moved:0, //已经左移的li的个数
           mask :{  //放大镜位置
               top: 0,
               left: 0
           },
        }
    },
    methods:{
        //购物车数量
        add(e){
            this.count += parseInt(e.target.dataset.count);
            if(this.count === 0){
                this.count = 1;
            }
        },
        //立即购买
        buy(){
            console.log('立即购买')
        },
        //加入购物车
        addCart(){
            let pid = this.$route.params.lid;
            let count = this.count;
            let price = this.list.product.price;
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
        //鼠标进入小图片
        signIn(e){
            e.stopPropagation();
            this.isActive = e.target.dataset.index;
            this.imgMd = e.target.dataset.index;
        },
        //鼠标离开小图片
        signOut(){
            this.isActive = -1;
        },
        //鼠标进入中图片显示放大镜
        signMask(e){
            this.isMask = true;
        },
        //鼠标离开中图片隐藏放大镜
        outMask(){
            this.isMask = false;
        },
        //鼠标在中图片中移动
        move(e){
            let top = e.offsetY - 240/2;
            let left = e.offsetX - 240/2;
            if(top<0) top=0;
            else if(top>210) top = 210;
            if(left<0) left = 0;
            else if(left>210) left = 210;
            this.mask.top = top + 'px';
            this.mask.left = left + 'px';
        },
        //小图片移动
        ulMove(i){
          if(i == -1 && this.moved != 0 || i == 1 && this.moved < this.list.pics.length - 5) {
             this.moved+=i;
          }
        },
    },
    computed:{
      //计算属性获得lgdiv背景图位置
      bgPosition(){
        return `-${parseFloat(this.mask.left)*16/13}px -${parseFloat(this.mask.top)*16/13}px`
      },
      //获得图片移动位置
      ulMarginLeft(){
        return this.moved*-74+"px"
      }
    },
    //监视地址栏的变化，刷新页面
    watch:{
      "$route":function(){
        //触发父组件事件
        this.$emit('fatherMethod');
      }
    },
    props: ['list'],
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
     position: relative;
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
     background: rgb(226, 226, 226);
     text-align: center;
     line-height: 60px;
     border-radius: 3px;
 }
 .arrow-disabled{
     color: #d2d2d2;
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
 .list-item>ul{
    transition:margin-left .2s linear;
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
 .count-box{
     display: flex;
     align-items: center;
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
     margin-right: 10px;
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
 .img-active{
     border: 1px solid #f00;
 }
 .magnifier{
     width: 240px;
     height: 240px;
     background: rgb(203, 197, 150);
     opacity: 0.5;
     position: absolute;
 }
 .super-mask{
     position: absolute;
     width: 450px;
     height: 450px;
     background: #f00;
     top: 0;
     left: 0;
     opacity: 0;
 }
 .div-lg{
     width: 530px;
     height: 530px;
     border: 1px solid #e1e1e1;
     position: absolute;
     top: -1px;
     left: 451px;
     background-repeat: no-repeat;
 }
 .specs{
    display: flex;
    margin-top: 20px;
 }
 .specs>.spec-list{
     display: flex;
     flex-direction: column;
 }
 .specs>.spec-list>a{
     display: inline-block;
     border: 2px solid #e1e1e1;
     border-radius: 2px;
     padding: 4px;
     margin-bottom: 2px;
     text-align: center;
 }
 .specs>.spec-list .spec-active{
     border:2px solid #f00;
 }
</style>
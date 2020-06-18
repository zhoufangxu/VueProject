<template>
    <div>
      <ul class="ul">
        <li v-for="(item, index) of bannerList" :key="index">
          <router-link to="#">
            <img :src="bannerList[itemIndex].img_url"  @mouseover="Mouseover" @mouseout="Mouseout" style="display: block;">
          </router-link>
        </li>
        <ul class="focus">
          <li v-for="(item, index) of bannerList" :key="index" class="focus-item" :class="{'active':itemIndex == index}" @mouseover="MouseoverFocus" @mouseout="Mouseout" :data-index="index"></li>
        </ul>
      </ul>
    </div>
</template>


<script>
export default {
  data(){
    return {
      bannerList: [], //保持轮播图图片
      itemIndex: 0,  //当前图片显示下标
      timer: null,  //定时器
    }
  },
  methods:{
    //组建挂载完成启动定时器
    bannerStart(){
      this.timer = setInterval(() => {
        this.itemIndex++;
        if(this.itemIndex===this.bannerList.length){
          this.itemIndex=0;
        }
      }, 1500);
    },
    //鼠标进入，清除定时器
    Mouseover(e){
      e.stopPropagation();
      clearInterval(this.timer);
    },
    // 鼠标移出，开始定时器
    Mouseout(e){
      e.stopPropagation();
      this.timer = setInterval(() => {
        this.itemIndex++;
        //如果当前下标等于数组长度，显示第一张图片
        if(this.itemIndex===this.bannerList.length){
          this.itemIndex=0;
        }
      }, 1500);
    },
    MouseoverFocus(e){
      e.stopPropagation();
      clearInterval(this.timer);
      let itemIndex = e.target.dataset.index;
      this.itemIndex = itemIndex;
    }
  },
  mounted(){
    let url = `http://127.0.0.1:3000/imageList`;
    this.$axios.get(url)
     .then(res=>{
       this.bannerList = res.data;
     })
     .catch(err=>{
       console.log(err);
     })
     this.bannerStart();
  },
  //组建销毁清除定时器
  destroyed(){
    clearInterval(this.timer);
  }
}
</script>

<style>
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.ul{
  width: 1000px;
  margin: 0 auto;
  padding-top: 12px;
  overflow: hidden;
  display: flex;
  position: relative;
}
.focus{
  display: flex;
  width: 64px;
  position: absolute;
  bottom: 10px;
  z-index: 99;
  left: 50%;
  margin-left: -32px;
}
.focus-item{
  width: 12px;
  height: 12px;
  background: #c6c6c6;
  border-radius: 50%;
  margin: 0 2px;
  cursor: pointer;
}
.active{
  background: green;
}
</style>
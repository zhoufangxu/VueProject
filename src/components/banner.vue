<template>
    <div>
      <ul class="ul">
        <li v-for="(item, index) of bannerList" :key="index">
          <a href="#">
            <img :src="item.img_url" :data-id="index">
          </a>
        </li>
      </ul>
    </div>
</template>


<script>
export default {
  data(){
    return {
      bannerList: [],
      index: 0,
    }
  },
  mounted(){
    let url = `http://127.0.0.1:3000/imageList`;
    this.$axios.get(url)
     .then(res=>{
       console.log(res.data);
       this.bannerList = res.data;
     })
     .catch(err=>{
       console.log(err);
     })
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
}
</style>
<template>
    <div class="Image">
        <div class="container">
           <div v-for="(item, index) of imgList" :key="index">
               <img :src="item.img_url">
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgList: [],
        }
    },
    created(){
        this.$axios.get('/indexImage')
        .then(res=>{
            console.log(res);
            this.imgList = res.data;
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .Image{
        margin: 40px 0;
    }
    .container{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .container img{
        width: 495px;
    }
</style>
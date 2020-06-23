<template>
    <div class="recommend">
        <div class="container">
            <h1>编辑推荐</h1>
            <ul class="list">
                <li v-for="(item, index) of List" :key="index" class="list-item">
                    <router-link to="#">
                        <img :src="'http://127.0.0.1:3000/' + item.md" :data-index="index" @mouseenter="signIn" @mouseout="signOut" :class="isActive == index ? 'active' : '' ">
                        <p>{{item.title}}</p>
                        <span class="price">¥{{item.price.toFixed(2)}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            List: [],
            isActive: -1,
        }
    },
    created(){
        this.$axios.get('/products')
         .then(res => {
             this.List = res.data.data;
         })
         .catch(err => {
             console.log(err);
         })
    },
    methods:{
        signIn(e){
            this.isActive = e.target.dataset.index;
        },
        signOut(){
            this.isActive = -1;
        }
    }
}
</script>


<style scoped>
 .container{
     width: 1000px;
     margin: 0 auto;
 }
 .list{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
 }
 .list-item{
     width: 240px;
     margin-bottom: 20px;
 }
 .list-item img{
     border: 1px solid #e1e1e1;
     width: 100%;
 }
 .list-item p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
 }
 .price{
     color: #f00;
     font-weight: bold;
 }
 .active{
     opacity: 0.9;
 }
</style>
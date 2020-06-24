<template>
    <div>
        <div class="left">
            <div>
                <img :src="'http://127.0.0.1:3000/' + data.pics[0].lg">
            </div>
            <ul>
                <li>
                    <router-link to="">
                        <img src="">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <h3>{{data.product.title}}</h3>
            <p>{{data.product.subtitle}}</p>
            <p>价格¥{{data.product.price.toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        
    },
    props: ['data']
}
</script>

<style scoped>

</style>
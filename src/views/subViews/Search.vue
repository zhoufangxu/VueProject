<template>
    <div>
        <Search />
        <h1>这里是搜索页面</h1>
    </div>
</template>

<script>
import Search from "../../components/index/search";
export default {
    data(){
        return {
            
        }
    },
    created(){
        //接受参数
        let val = this.$route.params.val;
    },
    components:{
        Search,
    }
}
</script>

<style scoped>

</style>
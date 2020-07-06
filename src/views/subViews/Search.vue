<template>
    <div>
        <h1>这里是搜索页面</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        //接受参数
        let val = this.$route.params.val;
        console.log(val);
    }
}
</script>

<style scoped>

</style>
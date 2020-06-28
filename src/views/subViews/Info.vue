<template>
    <div class="info">
        <div class="container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <Info :list=list />
    </div>
</template>

<script>
import Info from "../../components/info/InfoContainer";
export default {
    components:{
        Info
    },
    data(){
        return {
            list: {},
        }
    },
    mounted(){
        this.loadDetails();
    },
    methods:{
         loadDetails(){
            let lid = this.$route.params.lid
            this.$axios.get(`/detalis?lid=${lid}`)
             .then(res=>{
               this.list = res.data;
             })
             .catch(err => {
                 console.log(err);
             })
        },
    }
}
</script>

<style scoped>
  .container{
      width: 1000px;
      margin: 40px auto;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 20px;
  }
</style>
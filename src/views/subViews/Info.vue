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
        <!-- 向子组件传递一个事件 -->
        <Info :list=list  @fatherMethod="loadDetails" />
        <InfoBottom :list=list :details=details />
    </div>
</template>

<script>
import Info from "../../components/info/InfoContainer";
import InfoBottom from '../../components/info/infoBottom';
export default {
    components:{
        Info,
        InfoBottom
    },
    data(){
        return {
            list: {},
            details: [],
        }
    },
    created(){
        this.loadDetails();
    },
    methods:{
        loadDetails(){
          let lid = this.$route.params.lid
          this.$axios.get(`/detalis?lid=${lid}`)
           .then(res=>{
              this.list = res.data;
              let serverUrl = 'http://127.0.0.1:3000/';
              let reg = /(?<=(src="))[^"]*?(?=")/ig;
              let allSrc = res.data.product.details.match(reg);
              let all = [];
              for (const item of allSrc) {
                  all.push(serverUrl + item);
              }
              this.details = all;
            })
            .catch(err => {
              console.log(err);
            })
        },
    },
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
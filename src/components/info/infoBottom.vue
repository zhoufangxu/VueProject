<template>
    <div class="container">
        <!-- 推荐 -->
        <div class="recommend">
          <p>
            为你推荐
            <span>大家都在看</span>
          </p>
          <ul>
              <li>
                  <router-link to="#">
                    <img src="http://127.0.0.1:3000/img/recommend/recommend_img1.png">
                    <p>ThinkPad New S2 (20GUA00QCD)13.3英寸超霸</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="#">
                    <img src="http://127.0.0.1:3000/img/recommend/recommend_img2.png">
                    <p>戴尔 DELL燃7000 R1605S 超霸</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="#">
                    <img src="http://127.0.0.1:3000/img/recommend/recommend_img3.png">
                    <p>戴尔(DELL)魔方15MF Pro-R2505TSS灵</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="#">
                    <img src="http://127.0.0.1:3000/img/recommend/recommend_img4.png">
                    <p>联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版</p>
                  </router-link>
              </li>
          </ul>
        </div>
        <!-- 产品规格 -->
        <div class="product-box">
          <el-tabs type="border-card">
            <el-tab-pane label="商品详情">
                <ul class="product-spec" v-if="list.product !== undefined">
                    <li>
                        <span>商品名称 : </span>
                        <span>os : {{list.product.os}}</span>
                        <span>屏幕尺寸 : {{list.product.resolution}}</span>
                        <span>内存容量 : {{list.product.memory}}</span>
                        <span>颜色 : 黑色</span>
                    </li>
                     <li>
                        <span>硬盘 : {{list.product.disk}}</span>
                        <span>优选服务 : {{list.product.promise}}</span>
                        <span>处理器 : {{list.product.cpu}}</span>
                        <span>显卡型号 : {{list.product.spec}}</span>
                    </li>
                     <li>
                        <span>商品毛重 : 4kg</span>
                        <span>数量 : {{list.product.sold_count}}</span>
                        <span>屏幕刷新率 : 其他</span>
                        <span>硬盘容量 : {{list.product.disk}}</span>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="规格和包装">配置管理</el-tab-pane>
            <el-tab-pane label="评价">角色管理</el-tab-pane>
            <el-tab-pane label="服务说明">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <!-- details -->
        <div v-if="list.product !== undefined" class="detalis" v-html="list.product.details"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['list'],
}
</script>

<style scoped>
 /* 为你推荐 */
 .recommend>p{
     font-size: 22px;
     font-weight: bold;
 }
 .recommend>p>span{
     font-size: 14px;
     background: #f00;
     color: #fff;
     padding: 2px;
 }
 .recommend>ul{
     display: flex;
     justify-content: space-around;
     border: 1px solid #e1e1e1;
     padding: 10px;
 }
 .recommend>ul>li{
     width: 20%;
 }
  .recommend>ul>li p{
      font-size: 14px;
  }
  /* 产品规格 */
  .product-box{
      margin-top: 20px;
  }
  .product-spec{
      display: flex;
      justify-content: space-around;
  }
  .product-spec>li{
    width: 30%;    
  }
  .product-spec>li>span{
      display: block;
      font-size: 13px;
      color: #747474;
      line-height: 24px;
  }
  /* detalis */
 .detalis{
     text-align: center;
 }
</style>
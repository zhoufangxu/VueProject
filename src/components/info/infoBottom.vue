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
                        <span>os : {{list.os}}</span>
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
                <!-- details -->
                <ul v-if="list.product !== undefined" class="detalis">
                    <li v-for="(item, index) of details" :key="index">
                        <img :src="item">
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="规格和包装">
                <div class="row">
                    <h3>主体</h3>
                    <div>
                        <dl>
                            <dd>入网型号</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>品牌</dd>
                            <dd>苹果Apple</dd>
                        </dl>
                        <dl>
                            <dd>产品名称</dd>
                            <dd>Mac book</dd>
                        </dl>
                        <dl>
                            <dd>上市年份</dd>
                            <dd>2019年</dd>
                        </dl>
                        <dl>
                            <dd>首销日期</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>上市月份</dd>
                            <dd>10月</dd>
                        </dl>
                    </div>
                </div>
                <div class="row">
                    <h3>主体</h3>
                    <div>
                        <dl>
                            <dd>入网型号</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>品牌</dd>
                            <dd>苹果Apple</dd>
                        </dl>
                        <dl>
                            <dd>产品名称</dd>
                            <dd>Mac book</dd>
                        </dl>
                        <dl>
                            <dd>上市年份</dd>
                            <dd>2019年</dd>
                        </dl>
                        <dl>
                            <dd>首销日期</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>上市月份</dd>
                            <dd>10月</dd>
                        </dl>
                    </div>
                </div>
                <div class="row">
                    <h3>主体</h3>
                    <div>
                        <dl>
                            <dd>入网型号</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>品牌</dd>
                            <dd>苹果Apple</dd>
                        </dl>
                        <dl>
                            <dd>产品名称</dd>
                            <dd>Mac book</dd>
                        </dl>
                        <dl>
                            <dd>上市年份</dd>
                            <dd>2019年</dd>
                        </dl>
                        <dl>
                            <dd>首销日期</dd>
                            <dd>以官网信息为准</dd>
                        </dl>
                        <dl>
                            <dd>上市月份</dd>
                            <dd>10月</dd>
                        </dl>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="评价">
                <div v-for="(item, index) of commentList" :key="index" class="comment-box">
                    <div class="comment-user">
                        <div>
                             <img src="../../assets/default.png">
                        </div>
                        <span>用户名</span>
                    </div>
                    <div class="comment-content">
                        <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                        <p>{{item.content}}</p>
                        <p>{{item.ctime | datetimeFilter }}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="售后保障">
                <div>
                    <dl>
                        <dt class="title-box">
                            <i class="el-icon-question icon"></i>
                            <span  class="guarantee-title">厂家服务</span>
                        </dt>
                        <dd>
                            本产品全国联保，享受三包服务，质保期为：一年质保
                            <br>
                            如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！
                            <br>
                            (注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。) 您可以查询本品牌在各地售后服务中心的联系方式，请点击这儿查询......
                            <br>
                            <br>
                            品牌官方网站：http://www.mi.com/
                            <br>
                            售后服务电话：400-100-5678
                        </dd>
                        <dt class="title-box">
                            <i class="el-icon-info icon"></i>
                            <span  class="guarantee-title">京东承诺</span>
                        </dt>
                        <dd>
                            京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！
                            <br>
                            注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
                        </dd>
                        <dt class="title-box">
                            <i class="el-icon-remove icon"></i>
                            <span  class="guarantee-title">正品行货</span>
                        </dt>
                        <dd>京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。</dd>
                        <dt class="title-box">
                            <i class="el-icon-circle-plus icon"></i>
                            <span  class="guarantee-title">全国联保</span>
                        </dt>
                        <dd>
                            凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
                            <br>
                            <br>
                            注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
                        </dd>
                        <dt class="title-box">
                            <i class="el-icon-warning icon"></i>
                            <span class="guarantee-title">无忧退货</span>
                        </dt>
                        <dd>客户购买京东自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）</dd>
                    </dl>
                </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            commentList: [],
            value: 4,
        }
    },
    methods:{
        getComment(){
            this.$axios.get(`/getComment?nid=5`)
            .then(res => {
                this.commentList = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getComment();
    },
    props:['list', 'details'],
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
     margin-top: 80px;
 }
 .title-box{
     display: flex;
     align-items: center;
     margin-bottom: 10px;
 }
 .icon{
     font-size: 26px;
     color: #f00;
     margin-right: 8px;
 }
 .guarantee-title{
     font-size: 18px;
     color: #f00;
     font-weight: bold;
 }
 dd{
     font-size: 14px;
     color: #747474;
     margin-bottom: 20px;
 }

 /* 评论 */
 .comment-box{
     display: flex;
     margin: 20px 0;
     align-items: flex-start;
 }
 .comment-user{
     display: flex;
     align-items: center;
     margin-right: 100px;
 }
  .comment-user>div{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
  }
   .comment-user>div>img{
       display: block;
       widows: 40px;
       height: 40px;
   }
   .row{
       border-bottom: 1px solid #e1e1e1;
       padding: 20px 10px;
       display: flex;
   }
   .row>h3{
       font-size: 14px;
       color: #747474;
       margin: 0;
       margin-right: 100px;
       margin-left: 20px;
      
   }
   .row>div>dl{
       display: flex;
       margin: 0;
       margin-bottom: 5px;
   }
   .row>div>dl>dd{
       margin: 0;
       margin-right: 100px;
       width: 100px;
   }
</style>
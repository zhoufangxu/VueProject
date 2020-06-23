<template>
    <div>
        <div class="container">
            <ul>
                <li>
                    <i class="el-icon-s-ticket"></i>
                    <h4>品类齐全,轻松购物</h4>
                </li>
                 <li>
                    <i class="el-icon-s-claim"></i>
                    <h4>多仓直发,极速配送</h4>
                </li>
                 <li>
                    <i class="el-icon-s-data"></i>
                    <h4>正品行货,精致服务</h4>
                </li>
                 <li>
                    <i class="el-icon-folder-opened"></i>
                    <h4>天天低价,畅选无忧</h4>
                </li>
            </ul>
        </div>
        <div class="footer"></div>
        <div class="bottom">
            <ul>
                <li>
                    <h4>购物指南</h4>
                    <ul>
                        <li class="item">购物流程</li>
                        <li class="item">会员介绍</li>
                        <li class="item">生活旅行</li>
                        <li class="item">常见问题</li>
                        <li class="item">大家电</li>
                        <li class="item">联系客服</li>
                    </ul>
                </li>
                <li>
                    <h4>配送方式</h4>
                    <ul>
                        <li class="item">上门自提</li>
                        <li class="item">211限时达</li>
                        <li class="item">配送服务查询</li>
                        <li class="item">配送费收取标准</li>
                        <li class="item">海外配送</li>
                    </ul>
                </li>
                <li>
                    <h4>支付方式</h4>
                    <ul>
                        <li class="item">货到付款</li>
                        <li class="item">在线支付</li>
                        <li class="item">分期付款</li>
                        <li class="item">公司转账</li>
                    </ul>
                </li>
                <li>
                    <h4>售后服务</h4>
                    <ul>
                        <li class="item">售后政策</li>
                        <li class="item">价格保护</li>
                        <li class="item">退款说明</li>
                        <li class="item">返修/退换货</li>
                        <li class="item">取消订单</li>
                    </ul>
                </li>
                <li>
                    <h4>特色服务</h4>
                    <ul>
                        <li class="item">夺宝岛</li>
                        <li class="item">DIY装机</li>
                        <li class="item">延保服务</li>
                        <li class="item">京东E卡</li>
                        <li class="item">京东通信</li>
                        <li class="item">鲸鱼座智能</li>
                    </ul>
                </li>
                <li>
                    <h4>覆盖区县</h4>
                    <ul class="info">
                        <li class="item">
                            <span>京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</span>
                        </li>
                        <div>查看详情></div>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .footer{
        border-bottom: 1px solid #e1e1e1;
    }
    .container{
        width: 1000px;
        margin: 20px auto;
    }
    .container ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        color: #747474;
    }
     .container ul li{
         display: flex;
         flex-direction: row;
         align-items: center;
     }
     .container ul li i{
         font-size: 40px;
         margin-right: 5px;
     }
     .container ul li h4{
         color: #000;
     }


     .bottom{
         width: 1000px;
         margin: 0 auto;
         margin-bottom: 30px;
         border-bottom: 1px solid #e1e1e1;
         padding-bottom: 20px;
     }
     .bottom h4{
         margin: 0;
         margin-top: 20px;
         margin-bottom: 10px;
     }
     .bottom>ul{
         display: flex;
         flex-direction: row;
         justify-content: space-between;
     }
     .bottom>ul>li{
         width: 16.66%;
     }
     .bottom>ul .item{
         font-size: 12px;
         color: #747474;
         line-height: 22px;
     }
     .info{
         display: flex;
         flex-direction: column;
         align-items: flex-end;
     }
     .info>div{
         font-size: 12px;
         color: #747474;
     }
</style>
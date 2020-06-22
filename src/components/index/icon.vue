<template>
    <div class="icon">
        <div class="container">
            <div class="item">
                <i class="el-icon-shopping-bag-2"></i>
                <span>热销爆品</span>
            </div>
            <i class="line"></i>
            <div class="item">
                <i class="el-icon-office-building"></i>
                <span>IP周边</span>
            </div>
            <i class="line"></i>
            <div class="item">
                <i class="el-icon-mouse"></i>
                <span>数码影音</span>
            </div>
            <i class="line"></i>
            <div class="item">
                <i class="el-icon-suitcase"></i>
                <span>云贝商城</span>
            </div>
        </div>
    </div>
</template>

<style>
    .icon{
        border-bottom: 1px solid #e1e1e1;
    }
    .container{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
    }
    .line{
        width: 1px;
        height: 20px;
        background: #e1e1e1;
    }
    .item{
        padding: 20px;
        font-size: 16px;
        color: #747474;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }
    .item>i{
        font-size: 32px;
    }
    .item>span{
        margin-left: 5px;
    }
</style>
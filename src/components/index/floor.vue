<template>
    <ul class="floor-box">
        <li>
            商品<br>搜索
        </li>
        <i class="el-icon-minus"></i>
        <li>
            商品<br>轮播
        </li>
        <i class="el-icon-minus"></i>
        <li>
           编辑<br>推荐
        </li>
        <i class="el-icon-minus"></i>
        <li>
           热门<br>商品
        </li>
        <i class="el-icon-minus"></i>
        <li class="top">
            <i class="el-icon-arrow-up"></i>
            <span>楼层<br>顶部</span>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>


<style scoped>
  .floor-box{
      background: rgb(244, 244, 244);
      position: fixed;
      right: 680px;
      color: #747474;
      z-index: 9999;
      top: 200px;
      text-align: center;
  }
  .floor-box>li{
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
  }
  .floor-box>li:hover{
      background: #f00;
      color: #fff;
  }
  .top{
      display: flex;
      flex-direction: column;
      justify-content: center;

      align-items: center;
  }
</style>
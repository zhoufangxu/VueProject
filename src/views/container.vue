<template>
    <div>
        <Search />
        <Banner />
        <Icon />
        <MyImage />
        <Recommend />
        <HotProduct />
    </div>
</template>

<script>
import Search from '../components/index/search';
import Banner from "../components/banner";
import Icon from '../components/index/icon';
import MyImage from '../components/index/Image';
import Recommend from "../components/index/recommend";
import HotProduct from '../components/index/HotProduct';


export default {
  components:{
    Search,
    Banner,
    Icon,
    MyImage,
    Recommend,
    HotProduct,
  },    
}
</script>
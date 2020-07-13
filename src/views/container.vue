<template>
    <div>
        <Search />
        <Banner />
        <Icon />
        <MyImage />
        <Recommend />
        <HotProduct />
        <Floor />
    </div>
</template>

<script>
import Search from '../components/index/search';
import Banner from "../components/banner";
import Icon from '../components/index/icon';
import MyImage from '../components/index/Image';
import Recommend from "../components/index/recommend";
import HotProduct from '../components/index/HotProduct';
import Floor from "../components/index/floor";


export default {
  components:{
    Search,
    Banner,
    Icon,
    MyImage,
    Recommend,
    HotProduct,
    Floor,
  },    
}
</script>
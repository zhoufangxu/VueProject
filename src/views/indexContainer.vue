<template>
    <div>
        <Banner />
        <Icon />
        <MyImage />
        <Recommend />
        <HotProduct />
    </div>
</template>

<script>
import Banner from "../components/banner";
import Icon from '../components/index/icon';
import MyImage from '../components/index/Image';
import Recommend from "../components/index/recommend";
import HotProduct from '../components/index/HotProduct';
export default {
    components:{
        Banner,
        Icon,
        MyImage,
        Recommend,
        HotProduct,
    }
}
</script>

<style scoped>

</style>
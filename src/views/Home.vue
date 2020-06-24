<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<script>
import Header from "../components/header";
import Footer from "../components/index/footer";
export default {
  components:{
    Header,
    Footer,
  },
}
</script>
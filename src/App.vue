<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from './views/Home';
export default {
  components:{
    Home
  }
}
</script>

<style>
 a{
   text-decoration: none;
   color: #747474;
 }
 body{
   margin: 0;
   padding: 0;
 }
 ul,li{
   list-style: none;
   margin: 0;
   padding: 0;
 }
</style>
<template>
    <div>
        <Search />
        <router-view></router-view>
    </div>
</template>

<script>
import Search from '../components/index/search';

export default {
  components:{
    Search,
  },    
}
</script>
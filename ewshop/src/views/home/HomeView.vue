<script setup>
import {onMounted,ref} from 'vue';
import Navbar from 'components/common/navbar/navbar.vue';
import Recomend from 'views/home/Recomend.vue';
import { useRoute } from 'vue-router';
import {getHomeAllData} from 'network/home.js';
const route = useRoute();
const recommendList = ref([]);  
onMounted(() => {
  getHomeAllData().then(res=>{
    console.log(res, res.goods.data)
    recommendList.value= res.goods.data


  }).catch(err=>{
    console.log(err)
  })
})

</script>
<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="~assets/logo.png">
  <img alt="Vue logo" :src="imgsrc">
  </div>
  <div id="demo" class="w-[1200px] mx-auto h-96">
3123213
  </div> -->
<div>
  <Navbar>
    <!-- <template v-slot:left>
        <img src="~assets/images/left.png" alt="">
    </template> -->
    <template v-slot:default>
       {{route.meta.title}}
    </template>

    
  </Navbar>
  
  <div class="banner">
     <img src="~assets/images/1.png" alt="Banner">
  </div>
  <Recomend :recommendList="recommendList"></Recomend>


</div>



</template>


<style scope>
  /* #demo{
  background-image: url('~assets/logo.png');
  } */

</style>
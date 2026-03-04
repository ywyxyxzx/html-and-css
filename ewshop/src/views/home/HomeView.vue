<script setup>
// @ is an alias to /src


// export default {
//   name: 'HomeView',

//   data:()=>{
//     return {
//       imgsrc: require('assets/logo.png')
//     }
//   },
//   components: {

//   }
// }
import {onMounted,ref} from 'vue';
// import {getHomeAllData} from 'network/home.js';
// const bannerList = ref([]);
// onMounted(()=>{
//   console.log('home11111111111')

//   getHomeAllData().then(res=>{
//     console.log(res)
//     bannerList.value = res.slides

//     console.log(bannerList.value)
//   }).catch(err=>{
//     console.log(err)
//   })
// })
import Navbar from 'components/common/navbar/navbar.vue'
import { useRoute } from 'vue-router';
const route = useRoute();



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
</div>



</template>


<style scope>
  /* #demo{
  background-image: url('~assets/logo.png');
  } */

</style>
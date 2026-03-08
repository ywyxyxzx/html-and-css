<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    banners: {
        type: Object,
        defaults: ()=>{}
    }
})
let getItemStyle = (imgSrl)=>{
    return {
        'background':`url(${imgSrl}) no-repeat center center`,
        'height':'150px',
        'width':'100%',
        'background-size':'cover'
    }
}


</script>

<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="props.banners.length" lazy-render :vertical="false">
  <van-swipe-item v-for="banner in props.banners">
    <div class="swiper-item" :style="getItemStyle(banner?.img_url)"></div>
  </van-swipe-item>
</van-swipe>
</template>

<style scoped lang="scss">
.my-swipe{
    height:150px;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
    height:150px;
 
  }
</style>
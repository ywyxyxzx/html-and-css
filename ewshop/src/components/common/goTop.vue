<script setup>
import { defineEmits,useAttrs, computed } from 'vue';
const attrs = useAttrs()
const bTopEmit = defineEmits('bTop');
const hasMyEvent = computed(() => {
  return !!attrs['onBTop']; // 注意：事件名首字母大写
});
const goTop= ()=>{
    if(!!attrs['onBTop'] ){
        bTopEmit('bTop')
        return
    }

    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
</script>

<template>
    <div @click="goTop" class="back-top"></div>
</template>

<style scoped lang="scss">
   .back-top {
        width:40px;
        height:40px;
        position: fixed;
        bottom: 80px;
        right:30px;
        z-index: 20;
        box-shadow: 5px 5px 5px #888888;
        border-radius: 50%;
        background: #FCFCFC url('~assets/images/up.png') no-repeat center center;

    }
</style>
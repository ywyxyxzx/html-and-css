<script setup>
    const goTop= ()=>{
        debugger
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
</script>

<template>
    <img src="~assets/images/up.png" @click="goTop">
</template>

<style scoped lang="scss">
    img{
        position: fixed;
        right: 20px;
        bottom: 80px;
        width: 40px;
        height: 40px;
    }
</style>
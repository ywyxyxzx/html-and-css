<script setup>

import { useRoute } from 'vue-router';
import {ref, onMounted, reactive, toRef} from 'vue'
import Navbar from 'components/common/navbar/navbar.vue';
import {getDetail} from 'network/detail.js'

const route = useRoute();

// console.log(route.query)
const goodId=  route.query.itemId;
const book = reactive({
    detail:{},
    like_goods:[],
})
const bookDetail = toRef(book,'detail')
const likeGoods = toRef(book,'like_goods')
// methods
const getGoodDetailFun = async()=>{
   return await getDetail(goodId).then((res)=>{
        console.log(res)
        book.detail = bookDetail =res.goods;
        book.like_goods = likeGoods = res.like_goods
   }).catch(()=>{
    
   })
}

onMounted(()=>{
    getGoodDetailFun()
})


</script>

<template>
<Navbar>
    <template v-slot:default>
        {{route.meta.title}}
    </template>
</Navbar>
</template>

<style scoped>
</style>
<script setup>

import { useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRef } from 'vue'
import Navbar from 'components/common/navbar/navbar.vue';
import HomeGoodslist from 'components/content/homeGoodslist.vue';
import { getDetail } from 'network/detail.js'

const route = useRoute();

// console.log(route.query)
const goodId = route.query.itemId;
const book = reactive({
    detail: {},
    like_goods: [],
})
const detail = toRef(book, 'detail')
const likeGoods = toRef(book, 'like_goods')
const tabActive = ref(0)
// methods
const getGoodDetailFun = async () => {
    return await getDetail(goodId).then((res) => {
        console.log(res)
        book.detail = detail.value = res.goods;
        book.like_goods = likeGoods.value = res.like_goods
    }).catch(() => {

    })
}
const handleAddCart = ()=>{

}
const goToCart= ()=>{

}

onMounted(() => {
    getGoodDetailFun()
})

    
</script>

<template>
    <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>
    <div style="margin-top:45px" class="w-[100vw]">
        <van-image fit="contain" style="margin:0 auto" width="100%" lazy-load
            src="https://img3m1.ddimg.cn/41/17/25582631-1_b_13.jpg"></van-image>
    </div>
    <van-card style="text-align: left" :num="detail.stock" :price="detail.price + '.00'" :desc="detail.description"
        :title="detail.title">
        <template #tags>
            <van-tag plain type="danger">新书</van-tag>
            <van-tag plain type="danger">推荐</van-tag>
        </template>
        <template #footer>
            <van-button type="warning" @click="handleAddCart">加入购物车</van-button>
            <van-button type="danger" @click="goToCart">立即购买</van-button>
        </template>
    </van-card>
    <van-tabs v-model="tabActive">
        <van-tab title="概述">
            <div id="con1" v-html="detail.details">

            </div>
        </van-tab>
        <van-tab title="热评">

        </van-tab>
        <van-tab title="相关图书">
            <HomeGoodslist :goods="likeGoods"></HomeGoodslist>

        </van-tab>

    </van-tabs>




</template>

<style scoped>
#con1 {
    padding:10px;

}</style>
<script setup>

import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, reactive, toRefs} from 'vue'
import Navbar from 'components/common/navbar/navbar.vue';
import HomeGoodslist from 'components/content/homeGoodslist.vue';
import { getDetail } from 'network/detail.js'
import { addCart } from 'network/cart.js'
import { showSuccessToast, showFailToast, showToast } from 'vant';
import storeVuex from '@/store';
const  route = useRoute()

const router = useRouter()
// console.log(route.query)
const goodId = route.query.itemId;
const book = reactive({
    detail: {},
    like_goods: [],
})
const {detail, likeGoods} = toRefs(book)

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
    debugger
    console.log(detail.value.id)
    addCart({goods_id: detail.value.id, num:1}).then((res)=>{
        debugger
        console.log(res)
        if(res && (res['status'] == '201' || res['status'] == '204')){
        //    showSuccessToast('添加成功');   
            storeVuex.dispatch('updateCart',).then(()=>{
                showToast({
                    message: '购物车更新成功',
                    duration: 1000
                })
            })
        }
    })
}
const goToCart= ()=>{
     router.push({path: 'shopCart'})

}

onMounted(() => {
    getGoodDetailFun()
})

    
</script>

<template>
    <Navbar>

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
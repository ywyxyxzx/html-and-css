<script setup>
import { getCategory, getCategoryGoods } from 'network/category.js';

import Navbar from 'components/common/navbar/navbar.vue';
import goTop from 'components/common/goTop.vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { ref, onMounted, computed, reactive, watch ,watchEffect } from 'vue'

import {
    initBscroll,
    bsRresh,
    bsFinishPullUp,
    bsEnable,
    bsDisable,
} from 'components/js/bScroll.js';
const route = useRoute();
//data
debugger
const orderByList = ['sales', 'price', 'comments_count'];
const misstu = require('assets/images/22.png')

let bscroll = reactive({});
const sideBarActive = ref(0)
const sideBarActiveName = ref(1)
const sideBarCategory = ref([])
const tabActive = ref(0)
const currnentCateId = ref(0);
const goodsList = reactive({
    sales: { page: 1, list: [] },
    price: { page: 1, list: [] },
    comments_count: { page: 1, list: [] }
});
const isTabShow = ref(false);
const goodsDomRef = ref(null)
const goodsContentDomRef = ref(null)
// computed
const showGoods = computed(() => {
    return goodsList[currentOrderby()]['list'] || []
})

// methods
let getCategoryFun = async () => {
    return await getCategory().then((res) => {
        sideBarCategory.value = res.categories;
        //let firstId = res.categories[0]['children'][0]['id']
        // currnentCateId.value = firstId

    }).catch((err) => {

    })
}
let getGoodsFun = async () => {
    return await getCategoryGoods(currentOrderby(), currnentCateId.value, goodsList[currentOrderby()].page).then((res) => {
        console.log(556, res)
        goodsList[currentOrderby()]['list'].push(...res.goods.data);
    }).catch((err) => {

    })
}
let currentOrderby = () => {
    return orderByList[tabActive.value]
}
const tabClick = (item) => {
    tabActive.value = item.name;
    // console.log(currentOrderby(), currnentCateId.value)
    goodsList[currentOrderby()].page = 1;
    goodsList[currentOrderby()]['list'] = [];
    getGoodsFun();
}
const getChildCateId = (id) => {
    currnentCateId.value = id;
    // console.log(currentOrderby(), currnentCateId.value)
    getGoodsFun()
}
watchEffect(() => {
  bsRresh()
})

watch(goodsList, (nv, ov) => {
  // debugger
  bsRresh()
}, {
  deep: true
})

const bTop = ()=>{
    bscroll.scrollTo(0, 0, 300)
}

onMounted(() => {
    getCategoryFun();
    getGoodsFun()

    bscroll = initBscroll({
        className: 'goodslist',
        bsOnScroll:(position)=>{
            isTabShow.value = (-position.y) > 300;
        },
        bsOnPullingUp: async()=>{
            goodsList[currentOrderby()].page +=1
            await getGoodsFun()
        },
    })
  
})


onBeforeRouteLeave(()=>{
  
    // sideBarActive.value  = 0
    // sideBarActiveName.value  = 1
    // sideBarCategory.value  = []
    // tabActive.value = 0
    // currnentCateId.value = 0;
    // Object.keys(goodsList).forEach(key=>{
    //     goodsList[key].page = 1;
    //     goodsList[key].list = []
    // })

})

</script>

<template>
    <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>
    <div id="mainbox">
        <div class="ordertab">

            <van-tabs v-model="tabActive" @click-tab="tabClick">
                <van-tab title="销量排序"></van-tab>
                <van-tab title="价格排序"></van-tab>
                <van-tab title="评化排序"></van-tab>
            </van-tabs>
        </div>
        <div class="leftmenu">
            <van-sidebar v-model="sideBarActive">
                <van-collapse v-model="sideBarActiveName" accordion>
                    <van-collapse-item v-for="(item, index) in sideBarCategory" :key="item?.id" :title="item?.name"
                        :name="item?.name">
                        <van-sidebar-item v-for="(cItem, cIndex) in item?.children" :key="cItem?.id"
                            :title="cItem?.name" @click="getChildCateId(cItem?.id)" />
                    </van-collapse-item>
                </van-collapse>
            </van-sidebar>
        </div>





        <div class="goodslist" ref="goodsDomRef">
            <div class="content" ref="goodsContentDomRef">
                <van-card :num="item?.comments_count" :tag="item.comments_count > 0 ? '流行' : ''" :price="item?.price"
                    desc="" :title="item?.title" :thumb="misstu" v-for="item in showGoods" />
            </div>
        </div>

    </div>
    <goTop v-show="isTabShow" @bTop ="bTop"></goTop>



</template>

<style scoped lang="scss">
#mainbox {
    margin-top: 45px;
    height: calc(100vh - 60px - 45px);
    display: flex;

    .ordertab {
        flex: 1;
        float: right;
        height: 50px;
        z-index: 9;
        position: fixed;
        top: 45px;
        right: 0;
        left: 130px;

    }

    .leftmenu {
        position: fixed;
        top: 95px;
        left: 0;
        width: 130px;
        height: calc(100vh - 60px - 45px - 50px);

        .van-sidebar {
            width: 100%
        }
    }

    .goodslist {
        flex: 1;
        position: absolute;
        top: 95px;
        left: 130px;
        right: 0;
        height: calc(100vh - 60px - 45px - 50px);
        padding: 10px;
        text-align: left !important;
        overflow: hidden;

        .content {}


    }

}
</style>
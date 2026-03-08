<script setup>
import { getCategory, getCategoryGoods } from 'network/category.js';
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted,computed ,reactive} from 'vue'
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';

BScroll.use(Pullup);
const route = useRoute();
//data
const orderByList= ['sales','price','comments_count'];
const misstu = require('assets/images/22.png')

let bscroll = reactive({});
const sideBarActive = ref(0)
const sideBarActiveName = ref(1)
const sideBarCategory = ref([])
const tabActive = ref(0)
const currnentCateId = ref(0);
const goodsList = reactive({
    sales: {page:1, list:[]},
    price: {page:1, list:[]},
    comments_count: {page:1, list:[]}
});

// computed
const showGoods = computed(()=>{
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
let getGoodsFun =async ()=>{
    return await getCategoryGoods(currentOrderby(), currnentCateId.value, goodsList[currentOrderby()].page).then((res) => {
        console.log(556, res)
        goodsList[currentOrderby()]['list'] = res.goods.data;
    }).catch((err) => {

    })
}
let currentOrderby = ()=>{
    return orderByList[tabActive.value]
}
const tabClick = (item)=>{
    tabActive.value = item.name;
   // console.log(currentOrderby(), currnentCateId.value)
    goodsList[currentOrderby()].page = 1;
    getGoodsFun();
}
const getChildCateId= (id)=>{
    currnentCateId.value = id;
    // console.log(currentOrderby(), currnentCateId.value)
    getGoodsFun()
}


onMounted(() => {
    getCategoryFun();
    getGoodsFun()
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
                            :title="cItem?.name" 
                            @click="getChildCateId(cItem?.id)"/>
                    </van-collapse-item>
                </van-collapse>
            </van-sidebar>
        </div>





        <div class="goodslist">
            <div class="content">
                <!-- <van-card v-for="item in showGoods" :key="item.id" @click="itemClick(item.id)"
                    :num="item.comments_count" :tag="item.comments_count >= 0 ? '流行' : '标签'" :price="item.price"
                    :desc="item.updated_at" :title="item.title" :thumb="item.cover_url" :lazy-load="true" /> -->
                <van-card :num="item?.comments_count" :tag="item.comments_count > 0 ? '流行' : ''" :price="item?.price" desc="" :title="item?.title"
                    :thumb="misstu" v-for="item in showGoods" />
            </div>
        </div>

    </div>




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
        overflow:auto;
        .content {}


    }

}
</style>
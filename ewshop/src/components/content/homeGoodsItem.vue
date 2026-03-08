<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    product: {
        type: Object,
        default: () => ({})
    }
})
const goodClick = (itemId)=>{
    router.push({
        path: '/detail',
        query: {itemId}
    })
}

</script>

<template>
<div class="goods-item w-[40%]">
    <img src="~assets/images/11.png" alt="" class="w-[80%] mx-auto pb-2">
        <div class="goods-info">
            <p>{{product?.title}}</p>
            <span class="price"><small>￥</small>{{product?.price}}</span>
            <span class="collect">{{product?.collects_count}}</span>
        </div>
</div>
</template>

<style scoped lang="scss">
.goods-item {
    width:46%;
    padding-bottom: 10px;
    position: relative;


    img {
        border-radius: 5px;
    }

    .goods-info {
        font-size:12px;
        // position: absolute;
        // bottom:5px;
        // left:0;
        // right:0;
        overflow: hidden;
        text-align: center;
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
             padding-bottom: 8px;
        }

        .price {
            color: red;
             padding-bottom: 8px;
             
        }

        .collect {
            position: relative;
            padding-left: 20px;
        }
        .collect::before {
            content: '';
            position: absolute;
            left: 4px;
            width:14px;
            height:14px;
            top:-1px;
            background: url('~assets/images/collect.png') 0 0/14px 14px;
        }
    }
}

</style>
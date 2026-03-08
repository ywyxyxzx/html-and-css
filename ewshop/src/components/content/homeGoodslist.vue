<script setup>
import HomeGoodsItem from 'components/content/homeGoodsItem.vue';   
import {ref, defineProps} from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const props = defineProps({
    goods: {
        type: Array,
        default: () => []
    }
});
const goodClick = (itemId)=>{
     router.push({
        path: '/detail',
        query: {itemId}
    })
}
</script>

<template>
<div class="goods">
     <HomeGoodsItem v-for="item in props.goods" :product="item" :key="item" @click="goodClick(item?.id)"></HomeGoodsItem>
</div>
</template>

<style scoped lang="scss">
 .goods {
        display: flex;;
        flex-wrap: wrap;
        justify-content: space-around;
   }
</style>
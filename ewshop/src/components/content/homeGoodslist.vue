<script setup>
import HomeGoodsItem from 'components/content/homeGoodsItem.vue';   
import {ref, defineProps} from 'vue';
const props = defineProps({
    goods: {
        type: Array,
        default: () => []
    }
});

</script>

<template>
<div class="goods">
     <HomeGoodsItem v-for="item in props.goods" :product="item" :key="item"></HomeGoodsItem>
</div>
</template>

<style scoped lang="scss">
 .goods {
        display: flex;;
        flex-wrap: wrap;
        justify-content: space-around;
   }
</style>
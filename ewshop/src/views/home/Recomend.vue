<script setup>
import {defineProps,ref} from 'vue';
const props = defineProps({
  recommendList: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
    <div class="w-full overflow-x-auto overflow-y-hidden ">
        <div class="recommend flex text-center pt-1 pb-1.5 border-gray-100 border-b-[10px] " >
            <div class="recommend-item w-[25%] flex-wrap" v-for="(item, index) in props.recommendList.slice(0,4)" :key="item.id" :id="`goods-${item.id}`">
                <a href="javascript:;" class="w-full">
                    <img src="~assets/images/11.png" alt="" class="mb-2">
                    <div class="text-base break-all max-h-12 overflow-y-hidden mb-2">{{ item.title }}</div>
                    <div class="text-sm break-all max-h-12 overflow-y-hidden text-gray-300">{{ item.description}}</div>
                </a>
            </div>
        </div>
    </div>
 


</template>

<style scoped lang="scss">

</style>
<script setup>
import {defineProps, ref} from 'vue';
const props = defineProps({
     tabList: {
        type: Array,
        default: () => []
     },
     currentTitle: { 
        type: String,
        default: ''
     }
}); 
const emit = defineEmits(['tabChange'])
const tabClick = (tab) => {
    emit('tabChange', tab)
}   
</script>

<template>
<div class="tab-control h-[40px] leading-[40px] flex text-lg">
    <!-- <div class="tab-item flex-1 text-center tab-active"><span>热销</span></div>
    <div class="tab-item  flex-1 text-center"><span>新书</span></div>
    <div class="tab-item  flex-1 text-center"><span>精选</span></div> -->
    <div class="tab-item flex-1 text-center" v-for="(tab, index) in  tabList" :key="index"
    :class="{'tab-active': currentTitle === tab}"
    @click="tabClick(tab)">
        <span>{{ tab }}</span>
    </div>

</div>
</template>

<style scoped lang="scss">
    .tab-control{
        color:var(--color-text);
         position: sticky;
              top: 50px;
        left:0;
         z-index:99;
         box-shadow: 0 2px 0px rgba(100, 100, 100, 0.1);
         background: white;
   
        .tab-item{
            span{

            }
        }
        .tab-item.tab-active{
            color:var(--color-tint);
            border-bottom:3px solid var(--color-tint);
      
        }
}
</style>
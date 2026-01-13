<script setup lang="ts">
const props = defineProps({
    userInfo: {
        type: Object,
        required: true,
    }
})
</script>
<template>
<div class="list-item">
    <router-link :to="`/user/${userInfo?.id}`">
        <span class="title">{{ userInfo?.name }}</span>
    </router-link>    
    
</div>

</template>
<style scoped lang="scss">
.list-item{
    background-color: #16a085;
    color:#fff;
    padding: 5px 10px;
    margin-bottom:10px

    
}
.list-item a span.title{
    color: #f1c40f
}
</style>
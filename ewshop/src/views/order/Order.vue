<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed, toRefs, reactive, ref } from 'vue';
import { addAddress, EditAddress, DeleteAddress, getAddressDetail } from 'network/address';
import { showToast, showSuccessToast, showFailToast, showLoadingToast, closeToast } from 'vant';
const router = useRouter()
const route = useRoute()
const store = useStore()

let tabs = ref(null);
const state = reactive({
    loading: false,
    finished: false,
    refreshing: false,
    list: [],
    page: 1,
    totalPage: 0,
    status: 0,
})
const {loading,finished,refreshing,list,page,totalPage,status} = toRefs(state)
</script>

<template>
    <Navbar class="nav-bar">
        <template v-slot:default>
            定单列表
        </template>
    </Navbar>

    <van-tabs ref="tabs" @click="onChangeTab" class="order-tab">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="已支付"></van-tab>
        <van-tab title="发货"></van-tab>
        <van-tab title="交易完成"></van-tab>
        <van-tab title="过期"></van-tab>
    </van-tabs>
</template>

<style scoped lang="scss"></style>
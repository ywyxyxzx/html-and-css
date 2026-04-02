<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed, toRefs, reactive, ref } from 'vue';
import { getOrderList } from 'network/order';
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
const { loading, finished, refreshing, list, page, totalPage, status } = toRefs(state)


onMounted(() => {
    onRefresh();  // 初使化
})

const onRefresh = () => {
    // 是否处于加载状态，加载过程中不触发load事件
    state.refreshing = true
    // 清空列表数据
    state.finished = false
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    state.loading = true

    state.page = 1;

    onLoad()
}

const onLoad = () => {

    if (!state.refreshing && state.page < state.totalPage) {
        state.page = state.page + 1;
    }


    if (state.refreshing) {
        state.list = [];
        state.refreshing = false;
    }

    loadData();
}
const loadData = () => {
    getOrderList({ page: state.page, status: state.status, include: 'orderDetails.goods' }).then(res => {
        state.list = state.list.concat(res.data);
        state.loading = false;

        console.log(state.page + "################");

        state.totalPage = res.meta.pagination.total_pages;

        if (state.page >= state.totalPage) {
            state.finished = true;
        }
    })
}

const goTo = (id) => {
    router.push({ path: '/orderdetail', query: { id } });
}
// tab 切换
const onChangeTab = (name) => {
    state.status = name;
    onRefresh();
}
</script>

<template>
    <Navbar class="nav-bar">
        <template v-slot:default>
            定单列表
        </template>
    </Navbar>
    <div class="order-box">
        <van-tabs ref="tabs" @click="onChangeTab" class="order-tab">
            <van-tab title="全部"></van-tab>
            <van-tab title="待付款"></van-tab>
            <van-tab title="已支付"></van-tab>
            <van-tab title="发货"></van-tab>
            <van-tab title="交易完成"></van-tab>
            <van-tab title="过期"></van-tab>
        </van-tabs>
        <!--    /*
    List 组件通过 loading 和 finished 两个变量控制加载状态，
    当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。
    此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。
    若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
     */ -->
        <div class="content">
            <van-pull-refresh v-model="loading" @refresh="onRefresh">
                <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"
                    @offset="10">
                    <div @click="goTo(item.id)" class="order-item-box" v-for="(item, index) in list" :key="index">
                        <div class="order-item-header">
                            <span style="line-height:30px;">订单号：{{ item.order_no }} <br> 创建时间：{{ item.created_at
                            }}</span>
                        </div>
                        <van-card v-for="sub in item.orderDetails.data" :key="sub.id" :num="sub.num"
                            :price="sub.goods.price" desc="全场包邮" :title="sub.goods.title"
                            :thumb="sub.goods.cover_url" />

                    </div>
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<style scoped lang="scss">
.order-box {
    text-align: left;

    .order-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        color: #252525;
        background: #fff;
        border-bottom: 1px solid #dcdcdc;

        .order-name {
            font-size: 14px;
        }
    }

    .order-tab {
        margin-top: 44px;
        position: fixed;
        left: 0;
        z-index: 1000;
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
    }


    .content {
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
        padding-top: 100px;

    }

    .order-list-refresh {
        .van-card__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .van-pull-refresh__head {
            background: #f9f9f9;
        }

        .order-item-box {
            margin: 20px 10px;
            background-color: #FAFAFA;

            .order-item-header {
                padding: 10px 20px 0 20px;
                display: flex;
                justify-content: space-between;
            }

            .van-card {
                background-color: #FFFFFF;
                border-radius: 3px;
                margin-top: 10px;
            }
        }
    }
}
</style>
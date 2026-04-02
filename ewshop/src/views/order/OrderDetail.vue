<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { getOrderDetail, confirmOrder, payOrder, payOrderStatus, viewExpress } from 'network/order'
import { Dialog, showToast, showSuccessToast, showFailToast, showLoadingToast, closeToast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, computed, toRefs, reactive, ref } from 'vue';

const route = useRoute()
const router = useRouter()
const state = reactive({
    orderNo: '',  // 定单ID
    detail: {
        orderDetails: {
            data: []
        },
        status: 0
    },
    showPay: false,
    aliyun: '',
    wechat: ''
})
const { detail,orderNo,showPay,aliyun,wechat } = toRefs(state)
const init = () => {
    const { id } = route.query;
    state.orderNo = id;

    getOrderDetail(id).then(res => {
        console.log(res);
        state.detail = res;
    })

}

onMounted(() => {
    showLoadingToast({ message: '加载中...', forbidClick: true });
    init();
    closeToast();
})

const statusString = computed(() => {
    // 1下单 2支付 3发货 4收货 5过期
    let status = ['', '已下单', '已支付', '等待发货', '确认收货', '已过期'];

    return status[state.detail.status];
})

const total = computed(() => {
    let sum = 0;

    state.detail.orderDetails.data.forEach(item => {
        sum += item.num * item.price;
    })

    return sum;
})

const showPayFn = () => {
    state.showPay = true;

    payOrder(state.orderNo, { type: 'aliyun' }).then(res => {
        state.aliyun = res.qr_code_url;
        state.wechat = res.qr_code_url;
    })

    // 轮询查看
    // const timer = setInterval(() => {
    //     payOrderStatus(state.orderNo).then(res => {

    //         console.log(res);
    //         if (res == '2') {
    //             clearInterval(timer);
    //             state.showPay = false;
    //             router.push({ path: '/orderdetail', query: { id: state.orderNo } })
    //         }

    //     })
    // }, 2000)

}

const handleConfirmOrder = () => {
    Dialog.confirm({
        title: '是否确认订单'
    }).then(() => {
        confirmOrder(state.orderNo).then(res => {

            showSuccessToast('确认成功');
            init();


        })
    }).catch(() => {

    })
}

const close = () => {
    Dialog.close();
}
</script>

<template>
    <Navbar class="nav-bar">
        <template v-slot:default>
            定单详情
        </template>
    </Navbar>
    <div class="order-detail-box">
       
        <div class="order-status">
            <div class="status-item">
                <label>订单状态：</label>
                <span>{{ statusString }}</span>
            </div>
            <div class="status-item">
                <label>订单编号：</label>
                <span>{{ detail?.order_no }}</span>
            </div>
            <div class="status-item">
                <label>下单时间：</label>
                <span>{{ detail?.created_at }}</span>
            </div>

            <van-button v-if="detail.status == 1" @click="showPayFn" style="margin-bottom: 10px" color="#1baeae"
                block>去支付</van-button>
            <van-button v-if="detail.status == 2" @click="handleConfirmOrder" block>确认订单</van-button>
        </div>
        <div class="order-price">
            <div class="price-item">
                <label>商品金额：</label>
                <span>¥ {{ total + '.00' }}</span>
            </div>
            <div class="price-item">
                <label>配送方式：</label>

                <span>普通快递</span>
            </div>
        </div>

        <van-card v-for="item in detail.orderDetails.data" :key="item.id" :num="item.num" :price="item.price + '.00'"
            desc="全场包邮" :title="item.goods.title" :thumb="item.goods.cover_url" />



        <div style="width:100%;height:50px;">

        </div>

        <van-popover v-model:show="showPay" position="bottom" :style="{ height: '40%' }">
            <template #reference>
                <div style="width:100vw;text-align:center"></div>
            </template>
            <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
                <van-grid :border="false" :column-num="2">
                    <van-grid-item text="支付宝">
                        支付宝二维码<br>
                        <van-image width="150" height="150" :src="aliyun" />
                    </van-grid-item>
                    <van-grid-item text="微信支付">
                        微信二维码<br>
                        <van-image width="150" height="150" :src="wechat" />
                    </van-grid-item>
                </van-grid>

            </div>
        </van-popover>
    </div>
</template>

<style scoped lang="scss">
.order-detail-box {
    text-align: left;
    background: #f7f7f7;

    .order-status {
        background: #fff;
        margin-top: 44px;
        padding: 20px;
        font-size: 15px;

        .status-item {
            margin-bottom: 10px;

            label {
                color: #999;
            }

            span {}
        }
    }

    .order-price {
        background: #fff;
        margin: 20px 0;
        padding: 20px;
        font-size: 15px;

        .price-item {
            margin-bottom: 10px;

            label {
                color: #999;
            }

            span {}
        }
    }

    .van-card {
        margin-top: 0;
    }

    .van-card__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
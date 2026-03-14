<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRouter } from 'vue-router';
import { addCart, getCart, modifyCart, checkedCard } from 'network/cart.js'
import { useStore } from 'vuex';
import { onMounted, reactive, toRef, ref, toRefs, computed } from 'vue';
import { showSuccessToast, showFailToast, showToast, showLoadingToast, closeToast } from 'vant';

//import homeGoodsItem from 'views/homeGoodsItem/homeGoodsItem.vue'
const router = useRouter();
const store = useStore();

const state = reactive({
    cartList: [],
    checkedResIdList: [],
    checkedard: {},
    isCheckedAll: false
})
const checkboxGroup = ref(null);
const { cartList, checkedResIdList, isCheckedAll } = toRefs(state)


// 通过计算属性 计算总价
const totalPrice = computed(() => {
    let sum = 0;

    cartList.value.filter(item => checkedResIdList.value.includes(item.id))
        .forEach(item => {
            sum += parseInt(item.num) * parseFloat(item.goods.price);
        })

    return sum;
})

const goTo = () => {
    router.push({
        path: '/home',
    })
}
const refreshCartList = () => {

    showLoadingToast({
        message: '加载中…',
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner'
    })
    getCart('include=goods').then(res => {
        if (!res) {
            return
        }
        cartList.value = res.data
        checkedResIdList.value= res.data.filter(n=>n.is_checked == 1).map(item => item.id);
        console.log(999, cartList.value, state.cartList)
        closeToast()
    })
}


//   异步改变购物车数量
const onChange = (value, detail) => {

    showLoadingToast({
        forbidClick: true,
    })

    console.log(value, detail)

    return modifyCart(detail.name, { num: value }).then((res) => {
        if (!res) {
            return
        }
        if (res.status == 204) {
            cartList.value.forEach(item => {
                console.log(1123, item.id, detail.name)
                if (item.id == detail.name) {
                    item.num = value;
                }
            })
        } else {
            refreshCartList()
        }
    })


}

// 复选框change
const groupChange = (valArr) => {
    
    checkedResIdList.value = valArr;
    if (checkedResIdList.value.length == cartList.value.length) {
        isCheckedAll.value = true;
    } else {
        isCheckedAll.value = false;
    }

    console.log();
     showLoadingToast({
        forbidClick: true,
    })
   
    // 改变数据表中选中状态
    checkedCard({ cart_ids: valArr }).then((res)=>{
            console.log(res)
            
  
    
          closeToast()
    }).catch(()=>{
        refreshCartList()
          closeToast()
    });
}
//删除
const deleteGood = (id)=>{

}

//
const onSubmit = () => {

}
const allCheck = () => {
    
    isCheckedAll.value = !isCheckedAll.value
    if (isCheckedAll.value) {
        checkedResIdList.value = cartList.value.map(item => item.id)
    } else {
        checkedResIdList.value = []
    }
}


onMounted(() => {
    refreshCartList()

})
</script>

<template>
    <Navbar></Navbar>

    <div class="cart-box">
        <div class="cart-body">

            <van-checkbox-group v-model="checkedResIdList" @change="groupChange" ref="checkboxGroup">

                <van-swipe-cell v-for="(item, index) in cartList" :key="index">
                    <template #left>
                        <van-button square type="primary" text="选择" />
                    </template>
                    <div class="good-item">
                        <van-checkbox :name="item.id" />
                        <div class="good-img"><img src="~assets/images/11.png" alt=""></div>
                        <div class="good-desc">
                            <div class="good-title">
                                <span>{{ item.goods.title }}</span>
                                <span>x{{ item.goods.stock }}</span>
                            </div>
                            <div class="good-btn">
                                <div class="price"><small>¥</small>{{ item.goods.price + '.00' }}</div>
                                <van-stepper integer :min="1" :max="item.goods.stock" :model-value="item.num"
                                    :name="item.id" @change="onChange" />
                            </div>
                        </div>
                    </div>
                    <template #right>
                       <van-button
                            square
                            icon="delete"
                            type="danger"
                            class="delete-button"
                            @click="deleteGood(item.id)"
                    />
                    </template>

                </van-swipe-cell>
            </van-checkbox-group>
            <van-submit-bar class="submit-all" :price="totalPrice * 100" @submit="onSubmit" button-text="结算">
                <van-checkbox @click="allCheck" v-model:checked="isCheckedAll">全选</van-checkbox>
            </van-submit-bar>
            <div class="empty" v-if="!cartList.length">
                <img class="empty-cart" src="~assets/images/empty-car.png" alt="空购物车">
                <div class="title">购物车空空如也</div>
                <van-button round color="#1baeae" type="primary" block @click="goTo">前往选购</van-button>
            </div>
        </div>
    </div>

</template>
<style scoped lang="scss">
.cart-box {
    .cart-body {
        // margin: 60px 0 100px 0;
        padding-left: 10px;

        .good-item {
            display: flex;

            .good-img {
                img {
                    width: 100px;
                    height: auto;
                }
            }

            .good-desc {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
                padding: 20px;

                .good-title {
                    display: flex;
                    justify-content: space-between;
                }

                .good-btn {
                    display: flex;
                    justify-content: space-between;

                    .price {
                        font-size: 16px;
                        color: red;
                        line-height: 28px;
                    }

                    .van-icon-delete {
                        font-size: 20px;
                        margin-top: 4px;
                    }
                }
            }
        }

        .delete-button {
            width: 50px;
            height: 100%;
        }
    }

    .empty {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        margin-top: 200px;

        .empty-cart {
            width: 150px;
            margin-bottom: 20px;
        }

        .van-icon-smile-o {
            font-size: 50px;
        }

        .title {
            font-size: 16px;
            margin-bottom: 20px;
        }
    }

    .submit-all {
        margin-bottom: 60px;

        .van-checkbox {
            margin-left: 0px
        }

        .van-submit-bar__text {
            margin-right: 10px
        }

        .van-submit-bar__button {
            background: red;
        }
    }

    .van-checkbox__icon--checked .van-icon {
        background-color: red;
        border-color: red;
    }
}
</style>
<script setup>
import Navbar from 'components/common/navbar/navbar.vue';   
import { useRoute, useRouter } from 'vue-router';
import {useStore} from 'vuex';
import { onMounted , computed , toRefs, reactive, ref} from 'vue';
import { getAddressList } from 'network/address.js'
import { showToast, showSuccessToast, showFailToast } from 'vant';
const route = useRoute();
const router = useRouter();
const store = useStore();    
 const state = reactive({
    chosenAddressId: '1',
    list: []
})
const {list, chosenAddressId} = toRefs(state);
onMounted( () => {
     getAddressList().then(res=>{
        if(res.data.length == 0) {
            list.value = [];
            return;
        }

        list.value = res.data.map(item=>{
            return {
                id:item.id,
                name:item.name,
                tel:item.phone,
                address:`${item.province} ${item.city} ${item.county} ${item.address}`,
                isDefault: !!item.is_default
            }
        });

    })
})
const onAdd = () => {
    router.push({ path: '/addressedit', query: { type: 'add' }})
}

const onEdit = (item) => {
    router.push({ path: '/addressedit', query: { type: 'edit', addressId: item.id }})
}


</script>

<template>
     <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>
    <div v-show="list.length == 0" style="margin-top:200px;text-align: center;">
      还没有地址信息，去添加吧！
    </div>

    <div class="address-item">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"

      />
    </div>
</template>

<style scoped lang="scss">
.address-box {
    height:300px;
    // .van-radio__icon {
    //   display: none;
    // }
    .address-item {
      margin-top: 45px;
      .van-button {
        background: var(--color-tint);
        border-color: var(--color-tint);
      }
    }
  }

  .address-item :deep(.van-address-list__bottom){
    bottom: 65px !important;
    }
</style>
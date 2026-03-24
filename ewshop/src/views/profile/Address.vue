<script setup>
import Navbar from 'components/common/navbar/navbar.vue';   
import { useRoute, useRouter } from 'vue-router';
import {useStore} from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();    
</script>

<template>
    1111
     <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>
    <!-- <div v-show="list.length == 0" style="margin-top:200px;text-align: center;">
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
    </div> -->
</template>

<style scoped lang="scss">

</style>
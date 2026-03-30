<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed, toRefs, reactive, ref } from 'vue';
import { addAddress, EditAddress, DeleteAddress, getAddressDetail } from 'network/address';
import { showToast, showSuccessToast, showFailToast ,showLoadingToast, closeToast} from 'vant';
</script>

<template>

</template>

<style scoped lang="scss">

</style>
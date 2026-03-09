<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { showNotify, closeNotify } from 'vant';
import { showToast, showSuccessToast } from 'vant';
import { register } from 'network/user.js';
const route = useRoute();
const router = useRouter()



</script>

<template>
  <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>

    
</template>

<style scoped lang="scss">

</style>
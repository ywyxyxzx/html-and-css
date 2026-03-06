<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goback = () => {
    router.go(-1)
}
</script>

<template>
    <div class="h-[45px]">


        <div class="nav-bar fixed top-0 left-0 right-0  h-[45px] flex items-center">
            <div class="left" @click="goback">
                <slot name="left">
                    <img src="~assets/images/left.png" alt="" class="w-10">
                </slot>
            </div>
            <div class="center">
                <slot></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav-bar {
    background-color: var(--color-tint);
    box-shadow: 0 2px 0px rgba(100, 100, 100, 0.1);
z-index:100;
    .left,
    .right {
        width: 60px;

    }

    .center {
        flex: 1;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 1rem;
    }
}
</style>
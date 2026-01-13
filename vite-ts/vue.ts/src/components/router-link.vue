<script setup lang="ts">
import { path1 } from '../router/index1';

const prop = defineProps({
    to: {
        type: String,
        required: true,
    }
})
const push = () => {
    
    console.log(path1.value)
    path1.value = prop.to;
}

</script>
<template>
    <div>
        <a  @click="push">
            <slot></slot>
        </a>
    </div>
</template>
<style scoped></style>
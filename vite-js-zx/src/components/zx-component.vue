<template>
    <div class="hd" :class="[{current: active}, classList, 'package']">daffsadfasdasdf</div>
</template>
<script>
    export default {
        data(){
            return {
                active: true,
                classList: {
                    aa: true,
                    bb: true
                }
            }
        }
    }
</script>
<style scoped>
    .hd{
        color: red;
    }
    .current{
        background-color: blue;
    }
    .aa{
        font-weight: bold;
    }
    .bb{
        font-style: italic;
    }
    .package{
        background-color: yellow;
    }
</style>
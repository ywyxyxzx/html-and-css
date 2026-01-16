<script setup>

</script>
<template>
<div>
    <div class="layout-member">
        <div class="menu">
            <router-link :to="{name:'mobile'}">Mobile</router-link>
            <router-link :to="{name:'email'}">Email</router-link>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</div>
  
</template>
<style lang="scss">
.layout-member{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100vh;
    background: #fff;
    padding: auto 10px ;
    margin-bottom:20px;
    & .menu{
        grid-column:  span 3;
        border-right: 1px solid #ccc;
        background: #ddd;
        display: flex;
        flex-direction: column;
        & a{
            display:block
        }
    }
    & .main{
        grid-column: span 9;
    }
}
</style>
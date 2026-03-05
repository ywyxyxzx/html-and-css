<script setup>

</script>


<template>
  <div class="main-wrap w-full">
    <div class="router-wrap">
      <router-view />
    </div>
  
  
    <div id="nav" class="flex bg-[#f6f6f6]  w-full ">
      <router-link :to="{ path: '/' }" class="tab-bar-item">
        <div><i class="iconfont icon-shouye"></i></div>
        <div>首页</div>
      </router-link>
      <router-link :to="{ path: '/category' }" class="tab-bar-item">
        <div><i class="iconfont icon-fenlei"></i></div>
        <div>分类</div>
      </router-link>
      <router-link :to="{ path: '/shopCart' }" class="tab-bar-item">
        <div><i class="iconfont icon-gouwuchezhengpin"></i></div>
        <div>购物车</div>
      </router-link>
      <router-link :to="{ path: '/profile' }" class="tab-bar-item">
        <div><i class="iconfont icon-yonghu"></i></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>

  
</template>

<style lang="scss" scoped>
.main-wrap{
  display:flex;
  flex-direction: column;
   height: 100vh;
  & .router-wrap{
      display:flex;
    flex:1;
    overflow-y: auto;
   
  }

 &  #nav {
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
  height:60px;
  a {
    color: var(--color-text);

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);

    & .iconfont {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      display: inline-block;
    }
  }
}
}


</style>

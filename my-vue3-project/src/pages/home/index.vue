

<script setup>
import { ref } from 'vue';
import {onHide, onLoad, onPullDownRefresh, onReady, onResize, onUnload} from '@dcloudio/uni-app';
const title = ref('Hello uni-app');
const count = ref(0);
onLoad(() => {
  console.log('index page onLoad');
});

onReady(() => {
  console.log('index page onReady');
});

onUnload(() => {
  console.log('index page onUnload');
});

onHide(() => {
  console.log('index page onHide');
});

onResize(() => {
  console.log('index page onResize');
});
onPullDownRefresh(() => {
  console.log('index page onPullDownRefresh');
});
const navigateToAbout = () => {
  uni.$emit('toAbout', {msg: 'Hello from home page'});
  uni.navigateTo({
     url: '/pages/about/index?title=函数式传参'
  });
};
const navigateToTest = () => {
  uni.navigateTo({
     url: '/pages/test/index'
  });
};


</script>
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <!-- 函数式跳转 -->
      <text class="title" @click="navigateToAbout">to about</text>
     <!-- 组件式跳转 -->
      <!-- <navigator
        url="/pages/about/index?title=组件式传参"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to about
      </navigator> -->

    </view>
    <view>
      {{ count }}<button @click="count++">+</button><button @click="count--">-</button>
    </view>
     <view>
      <!-- <text class="title" @click="navigateToTest">to test</text> -->
       <navigator
        url="/pages/test/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to test
      </navigator>
    </view>
  </view>
</template>
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

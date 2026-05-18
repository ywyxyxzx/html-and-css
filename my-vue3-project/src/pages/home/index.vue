

<script setup>
import { ref } from 'vue';
import {onHide, onLoad, onReady, onUnload} from '@dcloudio/uni-app';
const title = ref('Hello uni-app');

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
const navigateToAbout = () => {
  uni.navigateTo({
    url: '/pages/about/index'
  });
};

</script>
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title" @click="navigateToAbout">to about</text>
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

<script setup>
import { ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app';

const title = ref('关于我们');
const version = ref('1.0.0');
const description = ref('这是一个基于uni-app开发的Vue 3项目');

onLoad(() => {
  console.log('about page onLoad');
});
</script>

<template>
  <view class="content">
    <view class="about-section">
      <text class="title">{{ title }}</text>
      <text class="version">版本: {{ version }}</text>
      <text class="description">{{ description }}</text>
    </view>

    <view class="info-section">
      <view class="info-item">
        <text class="info-label">项目名称:</text>
        <text class="info-value">My Vue3 Project</text>
      </view>

      <view class="info-item">
        <text class="info-label">开发框架:</text>
        <text class="info-value">uni-app + Vue 3</text>
      </view>

      <view class="info-item">
        <text class="info-label">构建工具:</text>
        <text class="info-value">Vite</text>
      </view>

      <view class="info-item">
        <text class="info-label">更新时间:</text>
        <text class="info-value">2026年5月17日</text>
      </view>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.about-section {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  align-items: center;
}

.title {
  font-size: 36rpx;
  color: #333333;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  text-align: center;
}

.version {
  font-size: 28rpx;
  color: #666666;
  margin-bottom: 15px;
  display: block;
  text-align: center;
}

.description {
  font-size: 30rpx;
  color: #8f8f94;
  line-height: 1.5;
  text-align: center;
}

.info-section {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 28rpx;
  color: #666666;
  flex: 1;
}

.info-value {
  font-size: 28rpx;
  color: #333333;
  flex: 2;
  text-align: right;
}
</style>
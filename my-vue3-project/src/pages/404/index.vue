<script setup>
const goHome = () => {
    uni.switchTab({
        url: '/'
    });
}
</script>

<template>
    <view class="container">
        <view class="content">
            <view class="title">404</view>
            <view class="subtitle">页面不存在</view>
            <button class="home-btn" @click="goHome">返回首页</button>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;

    .content {
        text-align: center;
        padding: 40rpx;

        .title {
            font-size: 120rpx;
            font-weight: bold;
            color: #333;
            margin-bottom: 20rpx;
        }

        .subtitle {
            font-size: 32rpx;
            color: #666;
            margin-bottom: 60rpx;
        }

        .home-btn {
            background-color: #007AFF;
            color: white;
            border: none;
            border-radius: 10rpx;
            padding: 20rpx 40rpx;
            font-size: 28rpx;

            &:active {
                background-color: #0056CC;
            }
        }
    }
}
</style>
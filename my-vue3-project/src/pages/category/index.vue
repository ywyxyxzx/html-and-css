<template>
  <view class="category">
    <view class="content">
      <text class="title">分类</text>
      <text class="desc">这是分类页面</text>

      
    </view>
    <view>
          <navigator
        url="/pages/about/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to about
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  text-align: center;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}

.desc {
  font-size: 28rpx;
  color: #666;
}
</style>
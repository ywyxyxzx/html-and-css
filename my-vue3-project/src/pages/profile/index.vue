<template>
  <view class="profile">
    <view class="content">
      <text class="title">个人中心</text>
      <text class="desc">这是个人中心页面</text>

      <navigator
        url="/pages/about/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to about
      </navigator>
       <navigator
        url="/pages/category/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to category
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.profile {
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
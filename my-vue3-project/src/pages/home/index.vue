

<script setup>
import { ref } from 'vue';
import {onHide, onLoad, onPullDownRefresh, onReady, onResize, onUnload} from '@dcloudio/uni-app';

const title = ref('Hello uni-app');
const count = ref(0);

const scrollTop = ref(0);


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
     url: '/pages/about/index?title=函数式传参',
     	animationType: 'pop-in',
	    animationDuration: 200,
       events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    }
  },
  success: function(res) {
    // 通过eventChannel向被打开页面传送数据, 
    ////////////////////// 可以用来传参///////////////////////
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: '2222222222222222222222222222data from starter page' })
  }
  });
//  uni.redirectTo({
//      url: '/pages/about/index?title=函数式传参'
//   });
  // uni.reLaunch({
  //    url: '/pages/about/index?title=函数式传参'
  // });
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
        to test 带参数
      </navigator>
    </view>
        <view>
       <!-- 函数式跳转 -->
      <text class="title" @click="navigateToAbout">to about 带参数</text>
     <!-- 组件式跳转 -->
      <!-- <navigator
        url="/pages/about/index?title=组件式传参"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to about
      </navigator> -->
          <navigator
        url="/pages/category/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        to category
      </navigator>
    </view>
  </view>

   <view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>

			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\n横向滚动</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
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
.uni-row {
    flex-direction: row;
}
.uni-column {
    flex-direction: column;
}
.flex-item {
    width: 200rpx;
    height: 200rpx;
    line-height: 200rpx;
    text-align: center;
    font-size: 36rpx;
    color: #fff;
    margin-right: 20rpx;      
}

/* 滚动视图样式 */
.scroll-Y {
		height: 300rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

</style>

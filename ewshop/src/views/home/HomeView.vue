<script setup>
import { computed, onMounted, reactive, ref, watch, watchEffect, nextTick } from 'vue';
import Navbar from 'components/common/navbar/navbar.vue';
import Recomend from 'views/home/content/Recomend.vue';
import TabControl from 'components/content/tabControl.vue';
import goTop from 'components/common/goTop.vue';
import HomeGoodslist from 'components/content/homeGoodslist.vue';
import HomeSwiper from 'views/home/content/HomeSwiper.vue'
import { useRoute } from 'vue-router';
import { getHomeAllData, getHomeGoods } from 'network/home.js';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';

BScroll.use(Pullup)
const route = useRoute();
const recommendList = ref([]);
const tabList = ref(['热销', '新书', '精选']);
const tabCurrentTitle = ref('热销');
let bscroll = reactive({});
const isTabFixed = ref(false)
const banRef = ref(null)
const bannersList = ref([])
let bannerLocalList = [
  require('assets/images/1.png'),
  require('assets/images/2.jpg'),
  require('assets/images/3.jpg'),
]


// 商品列表
const goods = reactive({
  sales: { page: 1, data: [] },
  new: { page: 1, data: [] },
  recommend: { page: 1, data: [] },
});
const currentGoodsType = ref('sales');
const showGoods = computed(() => {
  return goods[currentGoodsType.value].data
})

const bscrollRresh = () => {
  nextTick(() => {
    // 重新计算高度    
    if (bscroll && bscroll['refresh']) {
      bscroll.refresh();
    }
  })
}


let getHomeGoodsFun = async () => {
  await getHomeGoods(currentGoodsType.value, goods[currentGoodsType.value].page).then(res => {
    console.log(res, res.goods.data)
 
    goods[currentGoodsType.value].data.push(...res.goods.data)
  }).catch(err => {
    console.log(err)
  })
}
let getHomeDataFun = async () => {
  await getHomeAllData().then(res => {
    console.log(res, res.goods.data)
    recommendList.value = res.goods.data
    bannersList.value = res.slides.map((v,i) => {
      if(v.hasOwnProperty('img_url')) v.img_url = bannerLocalList[i]
      return v
    })

  }).catch(err => {
    console.log(err)
  })
}

// 监听 任何一个变量有变量
watchEffect(() => {
  bscrollRresh()
})

watch(goods, (nv, ov) => {
  // debugger
  bscrollRresh()
}, {
  deep: true
})

onMounted(async () => {

  getHomeDataFun();
  getHomeGoodsFun();
  bscroll = new BScroll(document.querySelector('.wrapper'), {
    probeType: 3,  // 0, 1, 2, 3, 3 只要在运运就触发scroll事件
    click: true, // 是否允许点击
    pullUpLoad: true, //上拉加载更多， 默认是false
    preventDefault: false,
  });
 
  //setTimeout(() => {
  //

  bscroll.on('scroll', (position) => {
    // console.log(position)
    isTabFixed.value = (-position.y) > banRef.value.offsetHeight;
  });
  //},1000


  bscroll.on('pullingUp', async () => {
     console.log('上拉加载更多.....');
     goods[currentGoodsType.value].page += 1;
     bscroll.disable();
     
     await  getHomeGoodsFun();
     
      setTimeout(()=>{
        bscroll.enable();
        bscroll.finishPullUp();
      },500)
    // 完成上拉， 等数据请求完成， 要将新数据展示出来
    
  })
})

const tabChanged = async ($event) => {

  tabCurrentTitle.value = $event;
  switch ($event) {
    case '热销':
      currentGoodsType.value = 'sales';
      break;
    case '新书':
      currentGoodsType.value = 'new';
      break;
    case '精选':
      currentGoodsType.value = 'recommend';
      break;
  }
  goods[currentGoodsType.value].page = 1;
  goods[currentGoodsType.value].data = []
  await getHomeGoodsFun();
  

}

const bTop = ()=>{
  bscroll.scrollTo(0, 0, 300)
}


</script>
<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="~assets/logo.png">
  <img alt="Vue logo" :src="imgsrc">
  </div>
  <div id="demo" class="w-[1200px] mx-auto h-96">
3123213
  </div> -->
  <div class="home-view position-relative overflow-x-auto">
    <Navbar>
      <!-- <template v-slot:left>
        <img src="~assets/images/left.png" alt="">
    </template> -->
      <template v-slot:default>
        {{ route.meta.title }}
      </template>
    </Navbar>
    <goTop v-show="isTabFixed" @bTop ="bTop"/>
  <TabControl :tabList="tabList" :currentTitle="tabCurrentTitle" @tabChange="tabChanged" v-show="isTabFixed"></TabControl>
    <div class="wrapper">
      <div class="content">
        <div ref="banRef">
           <!-- <div class="banner">
            <img src="~assets/images/1.png" alt="Banner" class="w-full h-auto">
          </div> -->
           <div class="banner">
           <HomeSwiper :banners= "bannersList"></HomeSwiper> 
          </div>
          
          <Recomend :recommendList="recommendList"></Recomend>
        </div>
        

        <TabControl :tabList="tabList" :currentTitle="tabCurrentTitle" @tabChange="tabChanged" v-show="!isTabFixed"></TabControl>
        <HomeGoodslist :goods="showGoods"></HomeGoodslist>

      </div>

    </div>

  </div>



</template>


<style scope lang="scss">
.home-view {
  height: calc(100vh - 60px);
  position: relative;
  width: 100%;


  .wrapper {
    position: absolute;

    width: 100%;
    top: 45px;

    left: 0px;
    right: 0px;
    height: calc(100% - 45px);
    overflow: hidden;

    .content {
      width: 100%;
    }
  }

}
</style>
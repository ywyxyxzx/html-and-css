import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import { nextTick } from 'vue';
BScroll.use(Pullup);

let bscroll;
const initBscroll = ({
    className = 'wrapper', 
    config = {},
    bsOnScroll,
    bsOnPullingUp
}= {}) => {
    const defaultCfg = {
        probeType: 3,  // 0, 1, 2, 3, 3 只要在运运就触发scroll事件
        click: true, // 是否允许点击
        pullUpLoad: true, //上拉加载更多， 默认是false
        preventDefault: false,
    }
    const curConfig = Object.assign(defaultCfg, config)
    bscroll = new BScroll(document.querySelector(`.${className}`, curConfig));

    bscroll.on('scroll', (position) => {
        // console.log(position)
        bsOnScroll();
    });

    bscroll.on('pullingUp', async () => {
        console.log('上拉加载更多.....');

        await bsOnPullingUp()
        setTimeout(() => {
            bscroll.enable();
            bscroll.finishPullUp();
        }, 500)
        // 完成上拉， 等数据请求完成， 要将新数据展示出来

    })
    return bscroll
}
const bsRresh = () => {
    nextTick(() => {
        // 重新计算高度    
        if (bscroll && bscroll['refresh']) {
            bscroll.refresh();
        }
    })
}
const bsFinishPullUp = () => {
    bscroll.finishPullUp();
}
const bsEnable = () => {
    bscroll.enable();
}
const bsDisable = () => {
    bscroll.disable();
}
const bsOnScroll = () => {

}




export {
    initBscroll,
    bsRresh,
    bsFinishPullUp,
    bsEnable,
    bsDisable,
}
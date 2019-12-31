
<template>
<movable-swiper :dataList="lastDataList" :height="movHeight">
    <template v-slot="{movSlotData}">
        <!-- 这里面放你自己的要显示的东西，图片什么的，下面这是示例 -->
        <view v-if="movSlotData" style="line-height: 360rpx;text-align: center;font-size: 12px;">
			<image :src='movSlotData.src' mode=""></image>
           <!-- <text>{{movSlotData.name}}</text>:<text>{{movSlotData.tit}}</text> -->
        </view>
    </template>
</movable-swiper>
</template>
<script>
	import movableSwiper from '@/components/movable-swiper/movable-swiper.vue'
	export default{
		components:{
		    movableSwiper
		},
		
		data() {
		    return {
		        movHeight: '360rpx',//卡片高度
		        //传入的数据示例
		        lastDataList: [
					{src:'http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg',title:"mm1"},
				     {src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"}, 
						//只是为了演示，不推荐这种混合方式，不一致不太好
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm3.jpg'}, 
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm4.jpg'},
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm6.jpg'}, 
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm7.jpg'},
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm10.jpg'}, 
							{src:'http://image.zhangxinxu.com/image/study/s/s128/mm13.jpg'}
						],
		    }
		},
	}
</script>
<style>
	image{
		height: 350rpx;
	}
</style>


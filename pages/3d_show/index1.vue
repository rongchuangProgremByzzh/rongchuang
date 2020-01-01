<template>
	<div><movable-swiper :pages="lastDataList" :stackinit="stackinit"></movable-swiper></div>
</template>

<script>
import movableSwiper from '@/components/3d_swiper/index.vue';
export default {
	components: {
		movableSwiper
	},
	data() {
		return {
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
					  stackinit: {
					        visible: 3
					      }
		};
	}
};
</script>

<style></style>

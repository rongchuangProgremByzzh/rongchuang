
<template>
	<view class="content">
		<whitebox :setheight="75"></whitebox>
		<div class="width100center height1">
			<movable-swiper :pages="lastDataList" :stackinit="stackinit"></movable-swiper>
		</div>
		<whitebox :setheight="100"></whitebox>
		<div class="width90center height2">
			
			<view class="txt">
				<div class="txt1">兑现城市经济新引擎 </div>
		
                                昆明融创文旅城，规划约3500亩体量，集娱乐、艺术、生态、教育、康氧等全资源配套于一体，带来“一站式”文化休闲度假生活新体验。未来必将为片区，乃至城市带来巨大的发展动能。在促进城市新发展的同时， 还将促进新的就业增长极，助推片区崛起。
                            

			</view>
		</div>
	</view>
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
				// {src:'http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg',title:"mm1"},
			 //     {src:'http://image.zhangxinxu.com/image/study/s/s128/mm8.jpg',title:"mm2"}, 
				// 	//只是为了演示，不推荐这种混合方式，不一致不太好
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm3.jpg'}, 
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm4.jpg'},
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm6.jpg'}, 
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm7.jpg'},
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm10.jpg'}, 
				// 		{src:'http://image.zhangxinxu.com/image/study/s/s128/mm13.jpg'}
					],
					  stackinit: {
					        visible: 3
					      }
		};
	},
	mounted() {
		this.$http.banner('/banner').then(res=>{
			console.log(res);
			this.lastDataList=res.data;
		})
	}
};
</script>

<style lang="scss" scoped>
  .content{
	  height: 100%;
	  background: url(../../static/bg@2x.png) no-repeat;
	 background-size: 100% 100%;
  }
	.height1{
		height:637rpx;
	}
	.height2{
			height: 260rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: url('../../static/park/3@2x.png') no-repeat;
			background-size: 100% 100%;
			border-radius: 16rpx;
	}
	.txt1{
		font-size: 30rpx;
		opacity: 1;
	}
.txt{
	
	padding: 0 20rpx;

	font-size:22rpx;
	line-height: 38rpx;
	color: #fff;
	opacity: .8;
	
}
</style>


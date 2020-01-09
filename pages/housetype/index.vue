<template>
	<div class="housetype">
		<swiper class="set-wrap"  :duration="500">
			<swiper-item>
				<view class="swiper-item setoverflow">
				<house-view></house-view>
				</view>
			</swiper-item>
			
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/a@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/b1@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/b2@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/c@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/d@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/d1@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/d2@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/d3@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/e@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image src="http://www.zangzhihong.com/pic/static/housetype/f@2x.png" mode="aspectFill"></image></view>
			</swiper-item>
		</swiper>
		
	</div>
</template>

<script>
	import houseView from '@/pages/houseview'
	export default{
		components:{
			houseView
		}
	}
</script>

<style scoped>
.housetype {
	width: 100%;
	height: 100%;
}
.set-wrap{
	height: 100%;
}
.swiper-item{
	height: 100%;
}
.setoverflow{
	overflow-y: auto;
}
image{
	margin-top: 5%;
	height: 95%;
}
</style>

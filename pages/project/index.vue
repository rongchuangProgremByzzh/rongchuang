<template>
	<view class="content">
		<div class="width100center height1">
			<image src="http://rongchuang.sqhd850.cn/pic/static/pingpai/pingpai@2x.png" mode=""></image>
		</div>
		<navigator url="/pages/longimg/index">
		<div class="top">
			
		</div>
		</navigator>
		<navigator url="/pages/long2/index">
		<div class="bottom">
			
		</div>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
  .content{
	  position: relative;
	  height: 100%;
  }
	.height1{
		height:100%;
	}
.top{
	position: absolute;
	left: 0;
	top: 364rpx;
	width: 100%;
	height: 260rpx;
}
.bottom{
	position: absolute;
	left: 0;
	bottom: 364rpx;
	width: 100%;
	height: 260rpx;
}
</style>

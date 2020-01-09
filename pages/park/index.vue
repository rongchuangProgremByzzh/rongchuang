<template>
	<view class="content">
		<whitebox :setheight="110"></whitebox>
		<div class="width90center height1">
			<image src="http://www.zangzhihong.com/pic/static/park/1@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="80"></whitebox>
		<div class="width90center height2">
			<view class="txt">
				昆明融创文旅城，于草海城市会客厅，北岸黄金区位，结合东方以及云南本土的文化特色，在约3500亩文旅大盘之上，依托纯美山海资源，打造匠心独具的高品质低密住区，全系产品悉心雕琢，致敬城市峰层人物。

			</view>
		</div>
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
	  height: 100%;
	  background: url(http://www.zangzhihong.com/pic/static/bg@2x.png) no-repeat;
	 background-size: 100% 100%;
  }
	.height1{
		height:756rpx;
	}
	.height2{
			height: 250rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: url('http://www.zangzhihong.com/pic/static/park/3@2x.png') no-repeat;
			background-size: 100% 100%;
	}
.txt{
	
	padding: 0 20rpx;

	font-size:22rpx;
	line-height: 38rpx;
	color: #fff;
	
}
</style>

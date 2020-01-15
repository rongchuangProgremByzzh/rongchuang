<template>
	<view class="content">
		<whitebox :setheight="100"></whitebox>
		<div class="width70center height1">
			<image src="http://rongchuang.sqhd850.cn/pic/static/houseview/1@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="60"></whitebox>
		<div class="title">昆明融创文旅城</div>
		<div class="subtitle">2019<text class="orange">开业狂欢年</text></div>
		<whitebox :setheight="12"></whitebox>
		 <div class="line"></div>
		 <div class="title3">抢在价值兑现之前入手</div>
		 <div class="title3en">Mountain & Sea</div>
		 <div class="width90center height2">
		 	<image src="http://rongchuang.sqhd850.cn/pic/static/houseview/2@2x.png" mode=""></image>
		 </div>
		 <div class="top">
			 <image src="http://rongchuang.sqhd850.cn/pic/static/houseview/top@2x.png" mode=""></image>昆明融创文旅城项目总平图
		 </div>
		 <whitebox :setheight="12"></whitebox>
		 <div class="width90center height2">
		 	<image src="http://rongchuang.sqhd850.cn/pic/static/houseview/3@2x.png" mode=""></image>
		 </div>
		 <whitebox :setheight="30"></whitebox>
		 <div class="width90center height3">
		 	<image src="http://rongchuang.sqhd850.cn/pic/static/houseview/4@2x.png" mode=""></image>
		 </div>
		  <whitebox :setheight="50"></whitebox>
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
  }
	.height1{
		height:72rpx;
	}
.title{
	font-size:44rpx;
	text-align: center;
	color: #333333;
}
.subtitle{
	font-size:75rpx;
	text-align: center;
	color: #333333;
}
.orange{
	font-size:75rpx;
	color: #F39800;
}
.line{
	width:40rpx ;
	height: 4rpx;
	margin: 0 auto;
	border-radius: 2px;
	background:#000000 ;
}
.title3{
	margin-top: 28rpx;
	font-size:30rpx;
	text-align: center;
	color: #333333;
}
.title3en{
	margin-top: 4rpx;
	font-size:35rpx;
	text-align: center;
	color: #333333;
}
.height2{
	margin-top: 25rpx;
	height: 525rpx;
}
.top{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30rpx 0;
	font-size:28rpx;
	font-family:PingFangSC;
	font-weight:500;
	color:rgba(51,51,51,1);
	image{
		width: 25rpx;
		height: 15rpx;
	}
}
.height3{
	
	height: 72rpx;
}
</style>

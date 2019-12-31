<template>
	<view class="Item">
		<view class="pic-type"><text>实景图</text></view>
		<view class="tit-mes">
			<div class="card-tit">这是一段融创大事记的标题...</div>
			<div class="time">2019-01-01</div>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.Item{
		position: relative;
		width: 90%;
		height: 330rpx;
		margin: 30rpx auto;
		border-radius:14rpx;
		background: url('http://img.zangzhihong.com/background1.jpg') no-repeat;
	    background-size: 100% 100%;
		.pic-type{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: absolute;
			left: 0;
			bottom: 70rpx;
			width: 100%;
			height:70rpx;
			font-size:14rpx;
			font-family:PingFangSC;
			font-weight:400;
			color:rgba(255,255,255,1);
			overflow: hidden;
			text{
				margin-right:30rpx;
			}
		}
		.tit-mes{
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height:70rpx;
			background:rgba(39,47,143,1);
			opacity:0.7;
			border-radius:14rpx;
			.card-tit{
				font-size:28rpx;
				font-family:PingFangSC;
				font-weight:300;
				color:rgba(255,255,255,1);
				padding-left: 50rpx;
			}
			.time{
				padding-right: 50rpx;
				font-size:30rpx;
				font-family:PingFangSC;
				font-weight:300;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>

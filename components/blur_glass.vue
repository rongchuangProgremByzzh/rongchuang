<template>
	<view class="background">
		<image class="bg" src="http://img.zangzhihong.com/background1.jpg" mode="scaleToFill"></image>
		<view class="top">
			<view class="main-tit"><image src="../static/logo.png" mode=""></image>雪世界</view>
			<!-- <view class="sub-tit">SUNAC OCEAN PARK</view> -->
		</view>
		<view class="bottom">
			<div class="box">
				<div class="dotbox">
					融创万达文华六星级酒店：以云南传统“一颗印”为布局蓝本，昆明首家庭院式六星级酒品，80栋别墅客房。 酒店配套：草坪婚礼、图书文化等。
					融创万达嘉华五星级酒店：承袭宋代建筑风格，约200间精端客房。
				</div>
			</div>
		</view>
	</view>
</template>

<script></script>

<style scoped lang="scss">
.background {
	position: relative;
	height: 100%;
	.bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.top {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 320rpx;
		z-index: 2;
		overflow: hidden;
		font-size: 61rpx;
		font-family: NotoSansHans;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		.main-tit{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			
			image{
				width: 60rpx;
				height: 60rpx;
				margin-right: 30rpx;
			}
		}
		.sub-tit{
			font-size:29rpx;
			font-family:PingFangSC;
			font-weight:300;
		}
	}
	.top:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		filter: blur(15rpx);
		background: url('http://img.zangzhihong.com/background1.jpg') no-repeat;
		// background-size: 100% 100%;
		background-position: top center;
		z-index: -1;
	}
}
.bottom {
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 490rpx;
	z-index: 2;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		filter: blur(15rpx);
		background: url('http://img.zangzhihong.com/background1.jpg') no-repeat;
		// background-size: 100% 100%;
		background-position: bottom center;
		z-index: -1;
	}
	.box {
		display: flex;
		width: 92%;
		height: 372rpx;
		margin-top: 25rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 0.8;
		border-radius: 12rpx;
		.dotbox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			margin: 20rpx;
			padding: 0 20rpx;
			text-align: left;
			font-size: 24rpx;
			font-weight: 500;
			line-height: 41rpx;
			color: rgba(0, 0, 0, 1);
			border: 1px dashed rgba(0, 0, 0, 1);
			border-radius: 12rpx;
		}
	}
}
</style>

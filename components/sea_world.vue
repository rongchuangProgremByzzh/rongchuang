<template>
	<view class="show">
		<div class="tit1">融创文旅品牌-融创乐园</div>
		<div class="tit2">两大世界乐园  探秘奇幻欢乐王国</div>
		<div class="btn">昆明融创海世界</div>
		<div class="footer-wrap">
			<image class="img-show" src="../static/home/icon1@2x.png" mode=""></image>
			<div class="footer">
				<div class="txt-wrap">
				<div class="text">云南首家引入剧场、零距离互动式海洋乐园 </div>
				<div class="text">约5.2个标准足球场，乘坐“水母观缆车”畅游海底</div>
				<div class="text">三大主题区域：大洋环游区、热带雨林区、海岛珊瑚区</div>
				<div class="text">三大明星剧场：海豚海狮剧场、海洋精灵秀剧场、雨林剧场</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.show{
		position: relative;
		height: 100%;
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
	}
	.tit1{
		margin-top: 90rpx;
		text-align: center;
		font-size:45rpx;
		font-family:PingFangSC;
		font-weight:500;
		color:rgba(39,47,143,1);
	}
	.tit2{
		margin-top: 20rpx;
		text-align: center;
		font-size:24rpx;
		font-family:PingFangSC;
		font-weight:300;
		color:rgba(39,47,143,1);
	}
	.btn{
		
		height: 60rpx;
		text-align: center;
		line-height:60rpx;
		margin-top:60rpx;
		background:rgba(39,47,143,1);
		border-radius:13rpx;
		color: #fff;
	}
	.footer-wrap{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #333333;
	}
	.img-show{
		height: 520rpx;
	}
	.footer{
		background: #333333;
        .txt-wrap{
			margin: 0 auto;
			padding-top: 35rpx;
			padding-bottom: 40rpx;
			width: 90%;
			text-align: center;
		}
		.text{
			font-size:25rpx;
			line-height: 40rpx;
			color: #fff;
			text-align: center;
		}
	}
</style>

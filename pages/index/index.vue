<template>
	<view class="content">
		<view class="swiper">
			<swiper class="swiper" @change="changeHandle" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home/home4@2x.png" mode="center"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home/home4@2x.png" mode="center"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home/home4@2x.png" mode="center"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home/home4@2x.png" mode="center"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/home/home4@2x.png" mode="center"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<div class="current-point-wrap">
			<div class="current-point" v-for="(isactive,index) in swiperList" :key="index" :class="{active_point:index==current}"></div>
		</div>
		<whitebox :setheight="5"></whitebox>
		<div class="width90center height1">
			<image src="../../static/home/home1@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="30"></whitebox>
		<div class="width100center height2">
			<image src="../../static/home/home2@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="25"></whitebox>
		<div class="width90center height2">
			<image src="../../static/home/home3@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="30"></whitebox>
		<div class="width100center height2">
			<image src="../../static/home/home4@2x.png" mode=""></image>
		</div>
		<view class="contact">
			<div class="lf">
				<view class="h1">全国</view>
				<view class="h1">客户见证</view>
				<view class="h2">customer serivce</view>
				<view class="h3">众多项目案例</view>
				<view class="h3">实例见证</view>
				<view class="h3">以品质赢得口碑</view>
			</div>
			<div class="middle-line"></div>
			<div class="rt">
				<input type="text" placeholder="填写姓名" value="" />
				<input type="phone" placeholder="联系电话" value="" />
				<input type="text" placeholder="看房时间" value="" />
			</div>
		</view>
		<button type="primary" class="btn width90center">立即预约</button>
		<view class="footer">
			<view class="lf"><image src="../../static/code@2x.png" mode=""></image></view>
			<view class="rt"><video src="" controls></video><button type="primary" class="registbtn">幸福通 | 立即注册</button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				swiperList:5,
				current:0
			}
		},
		onLoad() {

		},
		methods: {
changeHandle(e){
	this.current=e.detail.current
	console.log(e.detail.current);
}
		}
	}
</script>

<style lang="scss" scoped>
	
	.swiper{
		height: 450rpx;
	}
	.swiper-item{
		height: 100%;
	}
	.current-point-wrap{
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
	}
	.current-point{
		width:10rpx;
		height:10rpx;
		margin: 0 6rpx;
		background:rgba(204,204,204,1);
		border-radius:50%;
		transition: width .5s;
	}
	.active_point{
		width: 50rpx;
		height: 10rpx;
		background: #272F8F;
		border-radius: 4rpx;
	}
	.height1{
		height: 390rpx;
	}
	.height2{
		height: 450rpx;
	}
	.contact{
		display: flex;
		flex-direction: row;
		height:260rpx ;
		margin: 40rpx 0;
		.middle-line{
			margin: 0 40rpx;
			width: 1px;
			background:rgba(0,0,0,1);
		}
		.lf,.rt{
			display: flex;
			flex: 1;
		}
		.lf{
			text-align: right;
			flex-direction: column;
			.h1{
				font-size:30rpx;
			}
			.h2{
				padding-bottom: 20rpx;
				font-size:22rpx;
				color:rgba(0,0,0,0.3);
			}
			.h3{
				padding-bottom: 10rpx;
				font-size:22rpx;
				color:rgba(0,0,0,1);
			}
		
		}
		.rt{
			flex-direction: column;
			justify-content: space-around;
			input{
				width: 90%;
				height: 60rpx;
				border:1px solid rgba(51, 51, 51, .8);
				border-radius:12rpx;
			}
		}
	}
	.btn{
		background:rgba(39,47,143,1);
		border-radius:12rpx;
	}
	.footer{
		display: flex;
		flex-direction: row;
		height: 384rpx;
		margin-top: 50rpx;
		background: url(../../static/park/3@2x.png) no-repeat;
		background-size: 100% 100%;
		.lf,.rt{
			display: flex;
			
			align-items: center;
			
		}
		.lf{
			justify-content: center;
			width: 300rpx;
		}

		.lf image{
			width: 263rpx;
			height: 263rpx;
			
		}
		.rt{
			flex: 1;	
			display: flex;
			flex-direction: column;
            justify-content: center;
			.registbtn{
				margin-top: 30rpx;
				width: 90%;
				height:55rpx;
				background:rgba(39,47,143,1);
				border-radius:12rpx;
				font-size: 24rpx;
				line-height: 55rpx;
			}
		}
		video{
			width: 90%;
			height: 176rpx;
		}
	}
</style>

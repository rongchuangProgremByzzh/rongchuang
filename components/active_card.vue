<template>
	<view class="Item" @click="openDeatil(item.id)"  :style="{ 'backgroundImage': 'url(' +item.icon+ ')'}">
		<view class="pic-type"><text></text></view>
		<view class="tit-mes">
			<div class="card-tit">{{item.title}}</div>
			<div class="time">{{item.ctime|formatTime}}</div>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:{
				type:Object
			}
		},
		methods:{
			openDeatil(id){
				uni.navigateTo({
					url: '/pages/zixun/list?id='+id
				});
			}
		}
	}
</script>

<style lang="scss">
	.Item{
		position: relative;
		width: 90%;
		height: 330rpx;
		margin: 30rpx auto;
		border-radius:14rpx;
		// background: url('http://img.zangzhihong.com/background1.jpg') no-repeat;
        background-size: 100% auto;
		
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
			background:rgba(39,47,143,.7);
			border-radius:14rpx;
			.card-tit{
				font-size:28rpx;
				font-family:PingFangSC;
				font-weight:300;
				color:rgba(255,255,255,1);
				padding-left: 40rpx;
				padding-right: 20rpx;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.time{
				width: 270rpx;
				padding-right: 40rpx;
				font-size:30rpx;
				font-family:PingFangSC;
				font-weight:300;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>

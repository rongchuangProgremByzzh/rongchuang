<template>
	<view class="message"  @click="gotochat()">
		<view class="listitem">
			<view class="lf-icon"><image src="http://www.zangzhihong.com/pic/static/logo.png" mode=""></image></view>
			<view class="list-title">
				<view class="top">
					<view class="lf-txt">这是一个名字</view>
					<view class="rt-time">9:55</view>
				</view>
				<view class="bottom">这是一段消息,只是一段消息</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
			
		},
		data() {
		  return {
		   
		  }
		},
		methods:{
			gotochat(){
				uni.navigateTo({
					url: '/pages/chat/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.listitem{
		display: flex;
		flex-direction: row;

		.lf-icon{
            margin-left: 30rpx;
			width: 136rpx;
			height: 136rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.list-title{
			margin-left: 30rpx;
			flex: 1;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			padding-right: 30rpx;
			border-bottom:1rpx solid rgba(204,204,204,1);
			.top{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding-top: 8rpx;
				.lf-txt{
					font-size:36rpx;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
				.rt-time{
					font-size:28rpx;
					color:rgba(51,51,51,1);
				}
			}
			.bottom{
				padding-bottom: 30rpx;
				font-size:30rpx;
				color:rgba(102,102,102,1);
			}
		}
	}
		
</style>

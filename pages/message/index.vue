<template>
	<view class="message-wrap">
		<view class="message"  @click="gotochat(userinfo.uid)" v-for="(userinfo,index) in userinfolist" :key="index">
			<view class="listitem">
				<view class="lf-icon"><image :src="userinfo.headImg" mode=""></image></view>
				<view class="list-title">
					<view class="top">
						<view class="lf-txt">{{userinfo.username}}</view>
						<view class="rt-time">{{userinfo.time|formatTime}}</view>
					</view>
					<view class="bottom">{{userinfo.message}}</view>
				</view>
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
		   userinfolist:[],
		   timer:null,
		   socketTask:null
		  }
		},
		methods:{
			gotochat(uid){
				this.socketTask.close()
				uni.navigateTo({
					url: '/pages/chat/index?uid='+uid
				});		
			},
			wxChat(){
				let token=uni.getStorageSync('token')
				this.socketTask = uni.connectSocket({
				    url: `ws://rcxcx.api.95lsy.com/ws/${token}`, //仅为示例，并非真实接口地址。
				    complete: ()=> {}
				});
				uni.onSocketOpen( (res)=> {
				  console.log('WebSocket连接已打开！');
				 this.timer= setInterval(()=>{
					   this.socketTask.send({
					        data: `{content:'',type:1,toUser:-1,uuid:${Math.random()}}`,
							success:(res)=>{
								console.log(res);
							}
					      });
				  },50*1000)
				});
				this.socketTask.onMessage( (res)=> {
				  console.log('收到服务器内容：' + res.data);
				  let message=JSON.parse(res.data);
				 if(message&&message.fromId&&message.fromId!=-1){
					this.initData()//更新leibiao
					
				 }
				});
				uni.onError( (res)=> {
				  console.log('WebSocket连接打开失败，请检查！');
				  this.wxChat()
				});
			},
			initData(){
				let token=uni.getStorageSync('token')
				this.$http.people(token).then(res=>{
					this.userinfolist=res.data
				})
			}
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		mounted() {
			this.wxChat()
			this.initData()
		},
		onHide(){
			clearInterval(this.timer);
			this.socketTask.close()
		}
	}
</script>

<style lang="scss" scoped>
	.listitem{
		display: flex;
		flex-direction: row;
        margin: 22rpx 0;
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

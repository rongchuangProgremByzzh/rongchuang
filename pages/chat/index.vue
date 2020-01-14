<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
			    :scroll-top="scrollTop">
				<page-foot :name="name"></page-foot>
				<message-show v-for="(message,index) in messages" :key="index" :message="message" :cid="index"></message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage" @show="setScrollH" @foc="setScrollH"></chat-input>
		</view>
		
	</view>
</template>
<script>
	import chatInput from '@/components/chat/yszyun-imchat-emoji/components/yszyun-imchat-emoji/chatinput.vue';
	import messageShow from '@/components/chat/yszyun-imchat-emoji/components/yszyun-imchat-emoji/messageshow.vue';
	
	export default {
		data() {
			return {
				socketTask:null,
				timer:null,
				uid:'',
				name:'xcecd@qq.com',
				
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				messages: []
			}
		},
		components: {
			chatInput,
			messageShow
		},
		onLoad: function (option) {
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) ; //像素
			console.log(option.uid)
			this.uid=option.uid;
			this.wxChat()
			this.initData()
		},
		onUnload(){
			clearInterval(this.timer);
			this.socketTask.close()
		},
		methods: {
			getInputMessage: function (message) { //获取子组件的输入数据
				// console.log(message);
			
			   let nickName=uni.getStorageSync('nickName');//
			 
			  let avatarUrl=uni.getStorageSync('avatarUrl');//分享id
				this.addMessage(nickName, message.content, avatarUrl,true);//消息上屏
				// this.toRobot(message.content);
				this.sendMessage(message.content,this.uid);//发送到websocket
                this.scrollToBottom()
				this.setScrollH();
			},
			addMessage: function (user, content,avatarUrl,myself) {
				var that = this;
	
				that.messages.push({
					username: user,
					message: content,
					headImg:avatarUrl,
					self:myself
				});
			},
			scrollToBottom: function () {
				var that = this;
				this.scrollTop += 10000; 
				console.log(this.scrollTop)

			},
			// 设置高度 用emit辅助
			setScrollH: function(){
				var query = uni.createSelectorQuery();
				let footh = query.select('.foot');
				//console.log('fh',footh);
				const res = uni.getSystemInfoSync();
				this.style.pageHeight = res.windowHeight;
				this.$nextTick(function(){
					footh.fields({
						size: true
					}, data => {
						footh = data.height;
						console.log('fh',data.height);
						this.style.contentViewHeight = res.windowHeight -footh ; //像素
					}).exec();	
					console.log('contentViewHeight',this.style.contentViewHeight);
				})	
			},
			sendMessage(mes,id){//普通消息
				this.socketTask.send({
				     data: `{content:'${mes}',type:2,toUser:${id},uuid:${Math.random()}}`,
											success:(res)=>{
												console.log(res);
											}
				   });
			},
			getHistoryMessage(id){
				this.socketTask.send({
				     data: `{content:'',type:3,toUser:${id},uuid:${Math.random()}}`,
											success:(res)=>{
												console.log(res);
											}
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
				  this.getHistoryMessage(this.uid)
				});
				this.socketTask.onMessage( (res)=> {
				  console.log('收到服务器内容：' + res.data);
				  let message=JSON.parse(res.data);
              
				 if(message&&message.fromId&&message.fromId!=-1){//如果不是心跳类型
					//更新leibiao
					if(message.fromId==this.uid){
						  this.messages.push(message);
						
					}else{
						uni.showToast({
							title: '您有新的消息',
							 duration: 2000
						})
					}
					 
				 }
				  if(Object.prototype.toString.call(message)=="[object Array]"){//如果是数组类型代表历史消息
					 	 
					  this.messages=message;
				  }
				  this.scrollToBottom()
				console.log(this.messages);
				});
				uni.onError( (res)=> {
				  console.log('WebSocket连接打开失败，请检查！');
				  this.wxChat()
				});
			},
		},
		onHide(){
		clearInterval(this.timer);
		this.socketTask.close()
		}
	}
</script>

<style>
	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {
background: #FAFAFA;
		display: flex;
		flex: 1;
		/* margin-bottom: 100upx; */
	}

	.foot {
		position: fixed;
		width: 100%;
		/* height: 90upx;
		min-height: 90upx; */
		height: auto;
		left: 0upx;
		bottom: 0;
		overflow: hidden;
	}
</style>
<template>
	<view class="content">
		
		<div class="like" @click="scrollTolast(800)"></div>
		<div class="chat" @click="callPhone()"></div>
		
		<button v-if="role==1" class="phone" open-type="contact"></button>
		<div v-else class="phone" @click="gotoChat()"></div>
		<div class="location" @click="toMap(1000)"></div>
		<view class="swiper">
			<swiper class="swiper" @change="changeHandle" :indicator-dots="false" :circular="true" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item v-for="(item, index) in bannerList" :key="item.id">
					<view class="swiper-item">
					
						<image :src="item.imgUrl" mode="scaleToFill"></image>
					</view>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item"><image src="../../static/banner.png" mode="scaleToFill"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/banner.png" mode="scaleToFill"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/banner.png" mode="scaleToFill"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/banner.png" mode="scaleToFill"></image></view>
				</swiper-item> -->
			</swiper>
		</view>
		<div class="current-point-wrap">
			<div class="current-point" v-for="(isactive, index) in bannerList" :key="index" :class="{ active_point: index == current }"></div>
		</div>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/project/index">
			<div class="width90center height1">
				<image src="http://rongchuang.sqhd850.cn/pic/static/home/home1@2x.png" mode=""></image>
			</div>
		</navigator>
		<whitebox :setheight="60"></whitebox>

		<div class="width100center height2 setposition">
			<div class="box1" @click="jumpzixun(memorabilia)" ><div class="box1box2">{{memorabilia.title}}</div><image :src="memorabilia.icon" mode="aspectFit"></image></div>
			<div class="box2" @click="jumpzixun(actvity)"><div class="box1box2">{{actvity.title}}</div><image :src="actvity.icon" mode="aspectFit"></image></div>
			<div class="box22" >
				<image src="../../static/hometxt.png" mode="aspectFit"></image>
			</div>
			<div class="more" @click="jumpzixunlist()"></div>
			<image src="http://rongchuang.sqhd850.cn/pic/static/home/home2@2x.png" mode=""></image>
		</div>

		<whitebox :setheight="25"></whitebox>
		<div class="width90center height21 setposition">
			<div class="box33" @click="jumpjijin()"></div>
			<div class="box3" @click="jumpshapan()"></div>
			<div class="box4" @click="jumphuxing()"></div>
			<div class="box5" @click="jumpvr()"></div>
			<image src="http://rongchuang.sqhd850.cn/pic/static/home/home3@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="30"></whitebox>
		<div class="width100center height3 setposition">
			<div class="box6" @click="jumpxuanchuan()"></div>
			<div class="box7" @click="jumpshow()"></div>
			<div class="box8" @click="jumpseven()"></div>
			<div class="box9" @click="jumpimglist()"></div>
			<div class="box10" @click="jumpprogress()"></div>
			<image src="http://rongchuang.sqhd850.cn/pic/static/home/home4@2x.png" mode=""></image>
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
				<input placeholder-style="padding-left:20rpx" type="text" placeholder="填写姓名" maxlength="10" v-model="username" value="" />
				<input placeholder-style="padding-left:20rpx" type="number" placeholder="联系电话" maxlength="15" v-model="userphone" value="" />
				<input placeholder-style="padding-left:20rpx" type="text" placeholder="看房时间" maxlength="30" v-model="userlookhousetime" value="" />
			</div>
		</view>
		<button type="primary" class="btn width90center" @click="yuyue()">立即预约</button>
		<view class="footer">
			<view class="lf">
				<image @click="previewImage()" src="http://rongchuang.sqhd850.cn/pic/static/code@2x.png" mode=""></image>
			</view>
			<view class="rt">
				<div class="video-wrap">
					<!-- <div class="btn-play"><div class="btn-play-btn"></div></div> -->
					<video :src="video" controls="false" show-center-play-btn="false"></video>
				</div>

				<button type="primary" class="registbtn" @click="gotoOtherSmProgram()">幸福通 | 立即注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	//import auth from '../../components/auth.vue'
	export default {
		components:{
			
		},
		data() {
			return {
				userlookhousetime: '',
				userphone: '',
				username: '',
				title: 'Hello',
				swiperList: 5,
				current: 0,
				bannerList: [],
				video: '',
				phone: '',
				memorabilia:{}, 
				actvity:{},
				role: uni.getStorageSync('role') //登录获取,1为普通用户
			};
		},
		onLoad(option) {
			if(option.id){
				let that=this
				uni.getSetting({
				   success(res) {
				      console.log(res.authSetting)
					  if(!res.authSetting["scope.userInfo"]){
						  uni.navigateTo({
						  	url: '/pages/auth/auth'
						  });
					  }else{
						 let token=uni.getStorageSync('token')
						 this.$http.bind(option.id,token).then(res=>{
						 	
						 }) 
					  }
				   }
				})
				
			}

		},
		methods: {
			jumpzixun(data) {
				console.log(data);
				//+encodeURIComponent(JSON.stringify(data))
				 uni.setStorageSync('newsData',JSON.stringify(data));
				uni.navigateTo({
					url: '/pages/zixun/news'
				});
			},
			jumpzixunlist(index) {
				uni.navigateTo({
					url: '/pages/zixun/index'
				});
			},
			jumpjijin() {
				uni.navigateTo({
					url: '/pages/house_photo_list/index'
				});
			},
			jumpshapan() {
				uni.navigateTo({
					url: '/pages/shapan/index'
				});
			},
			jumphuxing() {
				uni.navigateTo({
					url: '/pages/housetype/index'
				});
			},
			jumpvr() {
				uni.navigateTo({
					url: '/pages/webview/index'
				});
			},
			jumpprogress() {
				uni.navigateTo({
					url: '/pages/progress/index'
				});
			},
			jumpxuanchuan() {
				uni.navigateTo({
					url: '/pages/3d_show/index'
				});
			},
			jumpshow() {
				uni.navigateTo({
					url: '/pages/park/index'
				});
			},
			jumpseven() {
				uni.navigateTo({
					url: '/pages/seven_type/index'
				});
			},
			jumpimglist() {
				uni.navigateTo({
					url: '/pages/3d_show/index1'
				});
			},
			changeHandle(e) {
				this.current = e.detail.current;
			},
			callPhone() {
				console.log(this.phone);
				uni.makePhoneCall({
					phoneNumber: this.phone //仅为示例
				});
			},
			scrollTolast(diff) {
				uni.pageScrollTo({
					scrollTop: diff,
					duration: 300
				});
			},
			toMap(){
				uni.openLocation({
					latitude:25.022151,
					longitude: 102.652347,
					name: "昆明融创文旅城",
					address: "昆明市西山区碧鸡路和益宁路交叉口"
				})
				// uni.navigateTo({
				// 	url: '/pages/map/index'
				// });
			},
			gotoChat() {
                let that=this
                uni.getSetting({
                   success(res) {
					   console.log(res);
                	  if(!res.authSetting["scope.userInfo"]){
                		uni.navigateTo({
                			url: '/pages/auth/auth'
                		});
                	  }else{
                	uni.requestSubscribeMessage({
                		tmplIds: ['yLyxJKwUOVitKFREPciNHvfI4-kPMkQPlr1tGQ1U3D4'],
                		success: (res) => {
                			if (res["yLyxJKwUOVitKFREPciNHvfI4-kPMkQPlr1tGQ1U3D4"] === 'accept') {
                				let token=uni.getStorageSync('token')
                				this.$http.addPush(token).then(res => {
                					console.log(res);
                					uni.navigateTo({
                						url: '/pages/message/index'
                					});
                				})
                			}
                		}
                	})
                	  }
                   }
                })
			
			},
			gotoOtherSmProgram() { //打开其他小程序
				uni.navigateToMiniProgram({
					appId: 'wx2f7d0154d4adc63d',
					path: '',
					extraData: {
						
					},
					success(res) {
						// 打开成功
						console.log(res);
					},
					fail(err){
						console.log(err);
					}
				})
			},
			yuyue() {

				if (this.userphone.length <= 0) {
					return uni.showToast({
						title: '请输入电话号码',
						duration: 2000
					});
				} else {
					this.$http.appointment({
						name: this.username,
						phone: this.userphone,
						checkingTime: this.userlookhousetime
					}).then(res => {
						console.log(res);
					});
				}

			},
			onGotUserInfo(res){
				console.log(res);
				
			},
			previewImage(){
				  uni.previewImage({
				            urls:['http://rongchuang.sqhd850.cn/pic/static/code@2x.png'],
				            longPressActions: {
				                itemList: ['发送给朋友', '保存图片', '收藏'],
				                success: function(data) {
				                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				                },
				                fail: function(err) {
				                    console.log(err.errMsg);
				                }
				            }
				        });
			}
		},

		mounted() {
			
			this.$http.banner().then(res => {
				this.bannerList = res.data;
			});
			this.$http.videoIndex().then(res => {
				this.video = res.data.videoUrl;
			});
			this.$http.getPhone().then(res => {
				this.phone = res.data;
			});
			this.$http.getMostNews().then(res=>{
								
								 	 this.memorabilia=res.data.memorabilia;
								 	 
								    this.actvity=res.data.actvity;
								 
			})
			// uni.login({
			//   provider: 'weixin',
			//   success:  (loginRes)=> {
			// 	this.$http.wxlogin(loginRes.code).then(res=>{
			// 		console.log(res);
			// 	})
			//   }
			// });
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
	}

	.like,
	.chat,
	.phone,
	.location {
		position: fixed;
		left: 30rpx;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		height: 80rpx;
		background: #fff;
		box-shadow: 0px 6rpx 20rpx rgba(39, 47, 143, 0.2);
		border-radius: 50%;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 60% 60%;
	}

	.like {
		top: 200rpx;
		background-image: url(http://rongchuang.sqhd850.cn/pic/static/home/like@2x.png);
	}

	.chat {
		top: 360rpx;
		background-image: url(http://rongchuang.sqhd850.cn/pic/static/home/phone@2x.png);
	}

	.phone {
		top: 510rpx;
		background-image: url(http://rongchuang.sqhd850.cn/pic/static/home/chat@2x.png);
	}

	.location {
		top: 510rpx;
		right: 30rpx;
		left: auto;
		background-image: url(http://rongchuang.sqhd850.cn/pic/static/home/location@2x.png);
	}

	.swiper {
		height: 450rpx;
	}

	.swiper-item {
		height: 100%;
	}

	.current-point-wrap {
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
	}

	.current-point {
		width: 10rpx;
		height: 10rpx;
		margin: 0 6rpx;
		background: rgba(204, 204, 204, 1);
		border-radius: 50%;
		transition: width 0.5s;
	}

	.active_point {
		width: 50rpx;
		height: 10rpx;
		background: #272f8f;
		border-radius: 4rpx;
	}

	.height1 {
		height: 390rpx;
	}

	.height2 {
		height: 500rpx;
	}

	.height21 {
		height: 370rpx;
	}

	.height3 {
		height: 563rpx;
	}

	.setposition {
		position: relative;
	}

	.more {
		position: absolute;
		left: 110rpx;
		bottom: 20rpx;
		width: 150rpx;
		height: 80rpx;
		z-index: 99;
	}

	.box1 {
		position: absolute;
		left: 26rpx;
		top: 50rpx;
		width: 336rpx;
		height: 266rpx;
		z-index: 99;
	}

	.box2 {
		position: absolute;
		right: 36rpx;
		top: 180rpx;
		width: 330rpx;
		height: 266rpx;
		z-index: 99;
	}
	.box22{
		position: absolute;
		right: 36rpx;
		top: 20rpx;
		width: 330rpx;
		height: 180rpx;
		z-index: 99;
	}
.box1box2{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height:60rpx;
	color: #fff;
	font-size: 28rpx;
	background:rgba(29, 41, 135,.7) ;
	text-align: center;
	line-height: 60rpx;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
	.box33 {
		position: absolute;
		left: 4rpx;
		top: 92rpx;
		width: 320rpx;
		height: 128rpx;
		z-index: 99;
	}

	.box3 {
		position: absolute;
		right: 4rpx;
		top: 92rpx;
		width: 320rpx;
		height: 128rpx;
		z-index: 99;
	}

	.box4 {
		position: absolute;
		left: 4rpx;
		top: 240rpx;
		width: 320rpx;
		height: 128rpx;
		z-index: 99;
	}

	.box5 {
		position: absolute;
		right: 4rpx;
		top: 240rpx;
		width: 320rpx;
		height: 128rpx;
		z-index: 99;
	}

	.box6 {
		position: absolute;
		right: 206rpx;
		top: 28rpx;
		width: 172rpx;
		height: 166rpx;
		z-index: 99;
	}

	.box7 {
		position: absolute;
		left: 28rpx;
		top: 194rpx;
		width: 344rpx;
		height: 168rpx;
		z-index: 99;
	}

	.box8 {
		position: absolute;
		right: 36rpx;
		top: 200rpx;
		width: 344rpx;
		height: 160rpx;
		z-index: 99;
	}

	.box9 {
		position: absolute;
		left: 200rpx;
		bottom: 32rpx;
		width: 174rpx;
		height: 166rpx;
		z-index: 99;
	}

	.box10 {
		position: absolute;
		right: 204rpx;
		bottom: 32rpx;
		width: 174rpx;
		height: 166rpx;
		z-index: 99;
	}

	.contact {
		display: flex;
		flex-direction: row;
		height: 260rpx;
		margin: 40rpx 0;

		.middle-line {
			margin: 0 40rpx;
			width: 1px;
			background: rgba(0, 0, 0, 1);
		}

		.lf {
			
			flex: 1;
		}

		.lf {
			text-align: right;
			flex-direction: column;
          
			.h1 {
				font-size: 30rpx;
			}

			.h2 {
				padding-bottom: 20rpx;
				font-size: 22rpx;
				color: rgba(0, 0, 0, 0.3);
			}

			.h3 {
				padding-bottom: 10rpx;
				font-size: 22rpx;
				color: rgba(0, 0, 0, 1);
			}
		}

		.rt {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 440rpx;
            padding-left: 20rpx;
			input {
				width: 90%;
				height: 60rpx;
				border: 1px solid #aaa;
				border-radius: 12rpx;
			}
		}
	}

	.btn {
		background: rgba(39, 47, 143, 1);
		border-radius: 12rpx;
	}

	.footer {
		display: flex;
		flex-direction: row;
		height: 384rpx;
		margin-top: 50rpx;
		background: url(http://rongchuang.sqhd850.cn/pic/static/park/3@2x.png) no-repeat;
		background-size: 100% 100%;

		.lf,
		.rt {
			display: flex;

			align-items: center;
		}

		.lf {
			justify-content: center;
			width: 300rpx;
		}

		.lf image {
			width: 263rpx;
			height: 263rpx;
		}

		.rt {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.registbtn {
				margin-top: 30rpx;
				width: 90%;
				height: 55rpx;
				background: rgba(39, 47, 143, 1);
				border-radius: 12rpx;
				font-size: 24rpx;
				line-height: 55rpx;
			}
		}

		.video-wrap {
			position: relative;
			width: 90%;
		}

		.btn-play {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 999;

			.btn-play-btn {
				width: 80rpx;
				height: 80rpx;
				background: url(http://rongchuang.sqhd850.cn/pic/static/home/play.png) no-repeat;
				background-size: 100% 100%;
			}
		}

		video {

			width: 100%;
			height: 176rpx;
		}

	}
</style>


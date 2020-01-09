<template>
	<view class="content">
		<div class="like" @click="scrollTolast(800)"></div>
		<div class="chat" @click="callPhone()"></div>
		<div class="phone" @click="gotoChat()"></div>
		<div class="location" @click="scrollTolast(1000)"></div>
		<view class="swiper">
			<swiper class="swiper" @change="changeHandle" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000">
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<view class="swiper-item"><image :src="item.imgUrl" mode="scaleToFill"></image></view>
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
		<div class="current-point-wrap"><div class="current-point" v-for="(isactive, index) in swiperList" :key="index" :class="{ active_point: index == current }"></div></div>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/project/index">
			<div class="width90center height1"><image src="http://www.zangzhihong.com/pic/static/home/home1@2x.png" mode=""></image></div>
		</navigator>
		<whitebox :setheight="60"></whitebox>

		<div class="width100center height2 setposition">
			<div class="box1" @click="jumpzixun(0)"></div>
			<div class="box2" @click="jumpzixun(1)"></div>
			<div class="more" @click="jumpzixunlist()"></div>
			<image src="http://www.zangzhihong.com/pic/static/home/home2@2x.png" mode=""></image>
		</div>

		<whitebox :setheight="25"></whitebox>
		<div class="width90center height21 setposition">
			<div class="box33" @click="jumpjijin()"></div>
			<div class="box3" @click="jumpshapan()"></div>
			<div class="box4" @click="jumphuxing()"></div>
			<div class="box5" @click="jumpvr()"></div>
			<image src="http://www.zangzhihong.com/pic/static/home/home3@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="30"></whitebox>
		<div class="width100center height3 setposition">
			<div class="box6" @click="jumpxuanchuan()"></div>
			<div class="box7" @click="jumpshow()"></div>
			<div class="box8" @click="jumpseven()"></div>
			<div class="box9" @click="jumpimglist()"></div>
			<div class="box10" @click="jumpprogress()"></div>
			<image src="http://www.zangzhihong.com/pic/static/home/home4@2x.png" mode=""></image>
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
				<input type="text" placeholder="填写姓名" maxlength="10" v-model="username" value="" />
				<input type="number" placeholder="联系电话" maxlength="15" v-model="userphone" value="" />
				<input type="text" placeholder="看房时间" maxlength="30" v-model="userlookhousetime" value="" />
			</div>
		</view>
		<button type="primary" class="btn width90center" @click="yuyue()">立即预约</button>
		<view class="footer">
			<view class="lf"><image src="http://www.zangzhihong.com/pic/static/code@2x.png" mode=""></image></view>
			<view class="rt">
				<div class="video-wrap">
					<!-- <div class="btn-play"><div class="btn-play-btn"></div></div> -->
						<video :src="video" controls="false" show-center-play-btn="false" ></video>
				</div>
			
				<button type="primary" class="registbtn" @click="gotoOtherSmProgram()">幸福通 | 立即注册</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
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
			phone: ''
		};
	},
	onLoad() {},
	methods: {
		jumpzixun(index) {
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
		gotoChat() {
			uni.navigateTo({
				url: '/pages/message/index'
			});
		},
		gotoOtherSmProgram(){//打开其他小程序
			uni.navigateToMiniProgram({
			  appId: '',
			  path: 'pages/index/index?id=123',
			  extraData: {
			    'data1': 'test'
			  },
			  success(res) {
			    // 打开成功
			  }
			})
		},
		yuyue() {

			if (this.userphone.length<=0) {
				return uni.showToast({
					title: '请输入电话号码',
					duration: 2000
				});
			}else{
				this.$http.appointment({ name: this.username, phone: this.userphone, checkingTime: this.userlookhousetime }).then(res => {
					console.log(res);
				});
			}
			
		}
	},
	mounted() {
		this.$http.banner().then(res => {
			this.bannerList = res.data;
		});
		this.$http.videoIndex().then(res => {
			this.video = res.data;
		});
		this.$http.getPhone().then(res => {
			this.phone = res.data;
		});
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
	position: absolute;
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
	background-image: url(http://www.zangzhihong.com/pic/static/home/like@2x.png);
}
.chat {
	top: 360rpx;
	background-image: url(http://www.zangzhihong.com/pic/static/home/phone@2x.png);
}
.phone {
	top: 510rpx;
	background-image: url(http://www.zangzhihong.com/pic/static/home/chat@2x.png);
}
.location {
	top: 510rpx;
	right: 30rpx;
	left: auto;
	background-image: url(http://www.zangzhihong.com/pic/static/home/location@2x.png);
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
	left: 100rpx;
	bottom: 20rpx;
	width: 130rpx;
	height: 60rpx;
	z-index: 99;
}
.box1 {
	position: absolute;
	left: 26rpx;
	top: 50rpx;
	width: 300rpx;
	height: 240rpx;
	z-index: 99;
}
.box2 {
	position: absolute;
	right: 114rpx;
	top: 164rpx;
	width: 300rpx;
	height: 240rpx;
	z-index: 99;
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
	.lf,
	.rt {
		display: flex;
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
		flex-direction: column;
		justify-content: space-around;
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
	background: url(http://www.zangzhihong.com/pic/static/park/3@2x.png) no-repeat;
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
	.video-wrap{
		position: relative;
		width: 90%;
	}
	.btn-play{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		.btn-play-btn{
			width: 80rpx;
			height: 80rpx;
			background: url(http://www.zangzhihong.com/pic/static/home/play.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	video {

		width: 90%;
		height: 176rpx;
	}
	
}
</style>

<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view v-if="isCanUse">
			<view>
				<view class='header'>
					<image src='../../static/weixin_login.png'></image>
				</view>
				<view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
					授权登录
				</button>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>
<script>
	export default {
		data() {
			return {
				SessionKey: '',
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				isCanUse: uni.getStorageSync('isCanUse') || true //默认为true
			};
		},
		methods: {
			//第一授权获取用户信息===》按钮触发
			wxGetUserInfo() {
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {

						let nickName = infoRes.userInfo.nickName; //昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
							_this.updateUserInfo(infoRes);
						} catch (e) {}
					},
					fail(res) {}
				});
			},

			//登录
			login() {
				let _this = this;
				// uni.showLoading({
				//     title: '登录中...'
				// });

				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: (loginRes)=>{
						let code = loginRes.code;
						this.$http.wxlogin(loginRes.code).then(res => {
							uni.setStorageSync('shareid', res.data.id);//分享id
							uni.setStorageSync('token', res.data.token);
							uni.setStorageSync('sessionKey', res.data.sessionKey);
							if (!_this.isCanUse) {
								//非第一次授权获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										//获取用户信息后向调用信息更新方法
										let nickName = infoRes.userInfo.nickName; //昵称
										let avatarUrl = infoRes.userInfo.avatarUrl; //头像
										console.log(nickName);
										_this.updateUserInfo(infoRes); //调用更新信息方法
										// uni.hideLoading();

									}
								});
							}
						})
					
					},
				});
			},
			//向后台更新信息
			updateUserInfo(userinfo) {
				console.log(userinfo);
				uni.getStorage({
    key: 'token',
    success:  (res)=>{
        console.log(res.data);
		this.$http.info(userinfo,uni.getStorageSync('sessionKey'),res.data)
		
		uni.redirectTo({ //信息更新成功后跳转到小程序首页
			url: '/pages/index/index?id=5555'
		});
    }
});
			
			}
		},
		onLoad() { //默认加载

			this.login();
		}
	}
</script>
<style>
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
	}

	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}

	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>

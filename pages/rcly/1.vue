<template>
	<view class="content">
		<whitebox :setheight="40"></whitebox>
		<div class="width90center height1">融创文旅品牌-融创乐园</div>
		<div class="width90center height2">两大世界乐园 探秘奇幻欢乐王国</div>
		<div class="width90center height3">昆明融创雪世界</div>
		<div class="width90center height4">
			<div class="txt-wrap">
				<div class="txt">国内首家采用糖果主题包装设计的室内娱雪乐园</div>
				<div class="txt">约4.2个标准足球场，3大滑雪道飞流直下</div>
				<div class="txt">飘雪树下互动飘雪、炫彩冰湖+冰上碰碰车</div>
				<div class="txt">集冰雪文化展示、冰上娱乐活动、</div>
				<div class="txt">滑雪运动及趣味冰雪娱乐体验为一体的全室内体验</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.content {
	height: 100%;
	background: url(../../static/bg@2x.png) no-repeat;
	background-size: 100% 100%;
}
.height1 {
	font-size: 46rpx;
	font-family: PingFangSC;
	font-weight: 500;
	text-align: center;
	color: #272f8f;
}
.height2 {
	margin-top: 10rpx;
	text-align: center;
	font-size: 24rpx;
	font-family: PingFangSC;
	font-weight: 300;
	color: rgba(39, 47, 143, 1);
}
.height3 {
	margin-top: 70rpx;
	height: 60rpx;
	line-height: 60rpx;
	background: rgba(39, 47, 143, 1);
	border-radius: 14rpx;
	text-align: center;
	color: #fff;
	font-size: 30rpx;
}
.height4 {
	position: absolute;
	bottom: 0;
	left: 5%;
	width: 90%;
	height: 860rpx;
	background: url(../../static/rcly/1@2x.png) no-repeat;
	background-size: 100% 100%;
}
.txt-wrap{
	position: absolute;
	bottom: 50rpx;
	left: 10%;
	width: 80%;
}
.txt {
	text-align: center;
	font-size: 20rpx;
	color: #fff;
	line-height: 40rpx;
}
</style>

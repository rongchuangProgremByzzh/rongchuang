<template>
	<view class="content">
		<whitebox :setheight="25"></whitebox>
		<div class="width90center height1">融创文旅品牌-融创乐园</div>
		<div class="width90center height2">两大世界乐园 探秘奇幻欢乐王国</div>
		<div class="width90center height3">中国家庭欢乐供应商</div>
		<whitebox :setheight="10"></whitebox>
		<div class=" height31">>>打开详情</div>
			
		<div class="width90center height32">融创文旅，主要包括融创文旅城、融创旅游度假区、融创阿朵小镇等业务板块。</div>
		<div class="width90center height4">
			<div class="txt-wrap">
				<div class="txt">融创文旅布局10座文旅城、4个旅游度假区、</div>
				<div class="txt">9个文旅小镇、39个主题乐园、24个商业及70家高端酒店</div>
				<div class="txt">★打造具有融创特色的品牌战略</div>
				<div class="txt">★服务于中国家\庭的欢乐生活方式</div>
				<div class="txt">★塑造一站式欢乐体验生态链！</div>
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
	margin-top: 50rpx;
	text-align: center;
	color: #272f8f;
	font-size: 45rpx;
}
.height31 {
	margin: 0 auto;
	text-align: center;
	line-height: 45rpx;
	width: 180rpx;
	font-size: 26rpx;
	color: #fff;
	height: 45rpx;
	background: rgba(39, 47, 143, 1);
	border-radius: 6rpx;
}
.height32 {
	position: absolute;
	bottom: 870rpx;
	left: 5%;
	width: 90%;
	font-size: 18rpx;
	font-family: PingFangSC;
	font-weight: 500;
	color: rgba(39, 47, 143, 1);
	text-align: center;
}
.height4 {
	position: absolute;
	bottom: 0;
	left: 5%;
	width: 90%;
	height: 860rpx;
	background: url(../../static/rcly/index@2x.png) no-repeat;
	background-size: 100% 100%;
}
.txt-wrap {
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

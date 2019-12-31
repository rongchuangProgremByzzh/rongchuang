<template>
	<view class="content">
		<whitebox :setheight="40"></whitebox>
		<div class="width90center height1">融创文旅品牌-融创乐园</div>
		<div class="width90center height2">两大世界乐园 探秘奇幻欢乐王国</div>
		<div class="width90center height3">昆明融创海世界</div>
		<div class="width90center height4">
			<div class="txt-wrap">
				<div class="txt">云南首家引入剧场、零距离互动式海洋乐园</div>
				<div class="txt">约5.2个标准足球场，乘坐“水母观缆车”畅游海底</div>
				<div class="txt">三大主题区域：大洋环游区、热带雨林区、海岛珊瑚区</div>
				<div class="txt">三大明星剧场：海豚海狮剧场、海洋精灵秀剧场、雨林剧场</div>
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
	background: url(../../static/rcly/2@2x.png) no-repeat;
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

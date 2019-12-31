<template>
	<view class="scale-wrap">
		<movable-area>
			<movable-view class="Item" scale-min="0.5" scale-max="10" direction="all" scale out-of-bounds><image src="../../static/shapan/1@2x.png" mode=""></image></movable-view>
		</movable-area>
		<div class="switch-tab">
			<scroll-view enable-flex="true" scroll-x="true" class="switch-tab-view">
				<view class="tab-item">
					<view class="tab-img "><image class="thumb active" src="../../static/home/home1@2x.png" mode=""></image></view>
					<text class="desc active">昆明市交通图</text>
				</view>
				<view class="tab-item">
					<view class="tab-img"><image class="thumb" src="../../static/home/home1@2x.png" mode=""></image></view>
					<text class="desc">昆明市交通图</text>
				</view>
				<view class="tab-item">
					<view class="tab-img"><image class="thumb" src="../../static/home/code@2x.png" mode=""></image></view>
					<text class="desc">昆明市交通图</text>
				</view>
				<view class="tab-item">
					<view class="tab-img"><image class="thumb" src="../../static/home/code@2x.png" mode=""></image></view>
					<text class="desc">昆明市交通图</text>
				</view>
				<view class="tab-item">
					<view class="tab-img"><image class="thumb" src="../../static/home/code@2x.png" mode=""></image></view>
					<text class="desc">昆明市交通图</text>
				</view>
			</scroll-view>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			x: 0,
			y: 0,
			scale: 2,
			old: {
				x: 0,
				y: 0,
				scale: 2
			}
		};
	},
	methods: {
		onChange: function(e) {
			this.old.x = e.detail.x;
			this.old.y = e.detail.y;
		},
		onScale: function(e) {
			this.old.scale = e.detail.scale;
		}
	}
};
</script>

<style lang="scss" scoped>
.scale-wrap {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}

movable-area {
	flex: 1;
	width: 100%;
	background-color: #d8d8d8;
	overflow: hidden;
}
.Item {
	width: 800px;
	height: 500px;
}

.switch-tab-view {
	position: relative;
	white-space: nowrap;
	width: 100%;
	height: 160rpx;
	background: #333333;
	.tab-item {
		display: inline-block;
		text-align: center;
		margin: 0 30rpx;
		margin-top: 16rpx;
		width: 100rpx;
		.thumb {
			width: 100rpx;
			height: 70rpx;
			border-radius: 6rpx;
			-webkit-filter: grayscale(100%);
			filter: grayscale(100%);
			filter: gray;
		}
		.desc {
			font-size: 20rpx;
			color: #cccccc;
		}
		.active.desc {
			color: #fff;
		}
		.active.thumb {
			filter: none;
			border: 1px solid #f39903;
		}
	}
}
.switch-tab-view::before {
	content: '';
	position: absolute;
	bottom: 160rpx;
	left: 46%;
	width: 0;
	height: 0;
	border: 30rpx solid transparent;
	border-bottom: 30rpx solid #000;
}
</style>

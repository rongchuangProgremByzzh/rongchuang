<template>
	<view class="scale-wrap">
		<movable-area>
			<movable-view :x="x" :y="y" class="Item" scale-min="1.2" scale-max="10" direction="all" scale out-of-bounds>
				<image :src="choose" mode="scaleToFill"></image>
				</movable-view>
		</movable-area>
		<div class="switch-tab">
			<scroll-view enable-flex="true" scroll-x="true" class="switch-tab-view">
				<view class="tab-item" @click="chooseItem(0)">
					<view class="tab-img "><image class="thumb" :class="{active:isactive==0}" src="../../static/animate/smbg/1@2x.png" mode="scaleToFill"></image></view>
					<text class="desc" :class="{active:isactive==0}">昆明市交通图</text>
				</view>
				<view class="tab-item" @click="chooseItem(1)">
					<view class="tab-img"><image class="thumb" :class="{active:isactive==1}" src="../../static/animate/smbg/2@2x.png" mode="scaleToFill"></image></view>
					<text class="desc" :class="{active:isactive==1}">昆明市交通图</text>
				</view>
				<view class="tab-item" @click="chooseItem(2)">
					<view class="tab-img"><image class="thumb" :class="{active:isactive==2}" src="../../static/animate/smbg/3@2x.png" mode=""></image></view>
					<text class="desc" :class="{active:isactive==2}">昆明市交通图</text>
				</view>
				<view class="tab-item" @click="chooseItem(3)">
					<view class="tab-img"><image class="thumb" :class="{active:isactive==3}" src="../../static/animate/smbg/4@2x.png" mode=""></image></view>
					<text class="desc" :class="{active:isactive==3}">昆明市交通图</text>
				</view>
				<view class="tab-item" @click="chooseItem(4)">
					<view class="tab-img"><image class="thumb" :class="{active:isactive==4}" src="../../static/animate/smbg/5@2x.png" mode=""></image></view>
					<text class="desc" :class="{active:isactive==4}">昆明市交通图</text>
				</view>
			</scroll-view>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			x: 100,
			y:50,
			scale: 2,
			isactive:0,
			old: {
				x: 0,
				y: 0,
				scale: 2
			},
			choose:'../../static/animate/1.gif',
			imglist:[
				"../../static/animate/1.gif",
				"../../static/animate/2.gif",
				"../../static/animate/3.gif"
			]
		};
	},
	methods: {
		onChange: function(e) {
			this.old.x = e.detail.x;
			this.old.y = e.detail.y;
		},
		onScale: function(e) {
			this.old.scale = e.detail.scale;
		},
		chooseItem(index){
			this.isactive=index;
			this.choose=this.imglist[index]
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
	border-bottom: 30rpx solid #333;
}
</style>

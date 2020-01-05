<template>
	<view class="content">
		<div class="width95center height1 setposition">
			<div class="box1 setabsolute" @click="jumpsea()"></div>
			<div class="box2 setabsolute" @click="jumpsnow()"></div>
			<image src="../../static/seven/1@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/seven_item/6">
		<div class="width95center height1">
				<image src="../../static/seven/2@2x.png" mode=""></image>
		</div>
		</navigator>
		<whitebox :setheight="10"></whitebox>
		<div class="width95center height1">
				<image src="../../static/seven/3@2x.png" mode=""></image>
		</div>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/seven_item/4">
		<div class="width95center height1">
				<image src="../../static/seven/4@2x.png" mode=""></image>
		</div>
		</navigator>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/seven_item/2">
		<div class="width95center height1">
				<image src="../../static/seven/5@2x.png" mode=""></image>
		</div>
		</navigator>
		<whitebox :setheight="10"></whitebox>
		<navigator url="/pages/seven_item/5">
		<div class="width95center height1">
				<image src="../../static/seven/6@2x.png" mode=""></image>
		</div>
		</navigator>
		<whitebox :setheight="10"></whitebox>
				<navigator url="/pages/seven_item/1">
		<div class="width95center height1">
				<image src="../../static/seven/7@2x.png" mode=""></image>
		</div>
		</navigator>
		<whitebox :setheight="10"></whitebox>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
              jumpsea(){
				  uni.navigateTo({
				  	url: '/pages/seven_item/8'
				  });
			  },
			  jumpsnow(){
				  uni.navigateTo({
				  	url: '/pages/seven_item/3'
				  });
			  }
		}
	}
</script>

<style lang="scss" scoped>

	.height1{
		height: 520rpx;
	}
.box1{
	    width: 352rpx;
	    height: 340rpx;
	    left: 0px;
	    top: 6rpx;
}
.box2{
	    width: 352rpx;
	    height: 340rpx;
	    right: 0px;
	    top: 6rpx;
}
</style>

<template>
	<view class="black_box" :style="{height:setheight+'rpx'}" >
		
	</view>
</template>

<script>
	export default {
		props:{
			setheight:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style scoped >
	.black_box{
		width: 100%;
	}
</style>

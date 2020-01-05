<template>
	<view class="content">
		<div class="width100center height1">
			<image class="zindex1" src="../../static/sevenitem/8@2x.png" mode="" :class="{tran:tran}" @click="transtion()"></image>
			<image class="zindex2" src="../../static/sevenitem/7@2x.png" mode="" :class="{tran:!tran}" @click="transtion()"></image>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tran:false
			}
		},
		onLoad() {

		},
		methods: {
transtion(){
	this.tran=!this.tran
}
		}
	}
</script>

<style lang="scss" scoped>
  .content{
	  height: 100%;
  }
	.height1{
		position: relative;
		height:100%;
	}
.zindex1{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	opacity:1;
	transition: opacity 1s;
}
.zindex2{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity:1;
	transition: opacity 1s;
}
.tran{
	opacity:0;
}
</style>

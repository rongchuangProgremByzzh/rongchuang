<template>
	<ul class="stack">
	 <li class="stack-item" style="transform: translate3d(0px, 0px, 0px);opacity: 1;z-index: 10;"><image src="../../static/glass/glass@2x.png" mode=""></image></li>
	 <li class="stack-item" style="transform: translate3d(0px, 0px, -60px);opacity: 1;z-index: 1"><image src="../../static/glass/glass@2x.png" mode=""></image></li>
	 <li class="stack-item" style="transform: translate3d(0px, 0px, -120px);opacity: 1;z-index: 1"><image src="../../static/glass/glass@2x.png" mode=""></image></li>
	 <li class="stack-item" style="transform: translate3d(0px, 0px, -180px);opacity: 0;z-index: -1"><image src="../../static/glass/glass@2x.png" mode=""></image></li>
	 <li class="stack-item" style="transform: translate3d(0px, 0px, -180px);opacity: 0;z-index: -1"><image src="../../static/glass/glass@2x.png" mode=""></image></li>
	</ul>
</template>

<script>
</script>

<style>
	.stack {
	 width: 100%;
	 height: 100%;
	 position: relative;
	 perspective: 1000px; //子元素视距
	 perspective-origin: 50% 150%; //子元素透视位置
	 -webkit-perspective: 1000px;
	 -webkit-perspective-origin: 50% 150%;
	 margin: 0;
	 padding: 0;
	 }
	 .stack-item{
	 background: #fff;
	 height: 100%;
	 width: 100%;
	 border-radius: 4px;
	 text-align: center;
	 overflow: hidden;
	 }
	 .stack-item image {
		 height: 200rpx;
	 width: 100%;
	 display: block;
	 pointer-events: none;
	 }
</style>

<template>
	<curry-swiper
	  :width="195"
	  :space="112"
	  :inverseScaling="400"
	  :height="107"
	  :perspective="14"
	  :border="3"
	  :count="10"
	  ref="swiper"
	>
	  <curry-slide>
	  </curry-slide>
	</curry-swiper>
</template>

<script>
	import CurrySwiper from './curry-swiper/curry-swiper.vue'
	import CurrySlide from './curry-swiper/curry-slide.vue'
	export default {
		components: {
			CurrySwiper,CurrySlide
		},
		data() {
		  return {
		    sceneList: [
		        { img: 'https://2fz1.me/img/phaser.jpg' },
		        { img: 'https://2fz1.me/img/css3.png' },
		        { img: 'https://2fz1.me/img/nodemodules.jpg' },
		        { img: 'https://2fz1.me/img/js.jpg' }
		      ],
		  }
		}
	}
</script>

<style>
</style>

<template>
	<view class="list">
		<!-- <card-item v-for="item in 5" :key='item'></card-item> -->
		<whitebox :setheight="90"></whitebox>
		 <bw-swiper :imageKey="imageKey" :swiperHeight="swiperHeight" :swiperList="swiperList" :autoplay="autoplay" :fullScreen="fullScreen" :indicatorDots="indicatorDots" :swiperType="swiperType"   style="width:100%"></bw-swiper>
	</view>
</template>

<script>
	import bwSwiper from '@/components/wxcomponents/bw-swiper/bw-swiper.vue'
	export default{
		components:{
			bwSwiper
		},
		data(){
			return{
				imageKey:'imgUrl',
				swiperList:[
					
				],
					swiperType:true,
					indicatorDots:false,
					fullScreen:false,
					autoplay:false,
					swiperHeight:0
			}
		},
		mounted() {
			this.swiperHeight=uni.upx2px(1100);
			this.$http.imgwordcontroller(1).then(res=>{
				console.log(res);
				this.swiperList=res.data;
			})
		}
		
	}
	
</script>

<style scoped>
	.list{
		height: 100%;
		background: url(http://www.zangzhihong.com/pic/static/photolist-bg@2x.png) no-repeat;
		background-size: 100% 100%;
	}
</style>

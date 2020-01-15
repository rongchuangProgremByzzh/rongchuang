<template>
	<view class="content" id="3dheight">
			<whitebox :setheight="240"></whitebox>
			<ynGallery 
			 :galleryheight="galleryheight" 
			  bkstart="#000000" 
			  bkend="#000000" 
			 :imgviewwidth="imgviewwidth" 
			 :imgviewheight="imgviewheight" 
			 :showbadge="true"
			  badegtype="trian" 
			  badegwidth="25" 
			  badegheight="25" 
			 :showdec="true" 
			 :images="testimgs" 
			 @clickimg="onclickimg">
			</ynGallery>
			<whitebox :setheight="80"></whitebox>
			<div class="width90center height2">
				<view class="txt">
昆明融创文旅城集合昆明融创乐园（海世界、雪世界、电影世界，在建中）、融创滇池后海（在建中）、主题湿地公园、星级酒店群（在建中）、品质住区（在建中）、“教育+生态”（规划中）、“医疗+生态”（规划中）等七大创新业态，为世界，开启欢乐之门。
				</view>
			</div>
	</view>
</template>


<script>
	import ynGallery from '@/components/YnComponents/ynGallery/ynGallery.vue'

	export default {
		components: {
			ynGallery,
		},
		data() {
			return {
				sh: 0,
				Msg: "0",
				// 画廊示例数据
				videoList:[],
				testimgs: [{
						url: "http://p1.meituan.net/movie/d94e5c3054778f6f48bff3a813b0b7cd5300998.jpg@170w_235h_1e_1c",
					},
					{
						url: "http://p0.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@170w_235h_1e_1c"	
					},
					{
						url: "http://p0.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/034069fc367db8a7d9644717b416cc2c332883.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@170w_235h_1e_1c"
					}
				],
				galleryheight:0,
				imgviewheight:0,
				imgviewwidth:0
			}
		},
		
		
		onLoad(){
			
			this.galleryheight=uni.upx2px(580)
			this.imgviewheight=uni.upx2px(400)
			this.imgviewwidth=uni.upx2px(500)
			this.setimgs();
		},
    

		methods: {
			onclickimg(imgviewobj) {
				console.log(imgviewobj.index);
				if (imgviewobj.index != undefined)
					this.Msg = `${imgviewobj.index}`;
			},
			setimgs() {
				var imgs=[];
				for (let i in this.testimgs) {									
					 let imgobj={
						  dec:'',                   //图像描述信息
						  badeg:'',                 //角标文字
						  badegcolor:'#000000',     //角标颜色
						  url:'',                   //图源  
						  dominant:''               //主色  
					};
					imgobj.url=this.testimgs[i].url;
					imgobj.dominant = this.retcolor(); //随机主色
					imgobj.dec = i; //描述  
					imgobj.badeg = i; //角标文字
					imgobj.badegcolor = (i % 2) == 0 ? 'red' : 'LimeGreen'; //角标颜色
					
					imgs.push(imgobj)
				}
				this.testimgs=imgs;
			},
			retcolor() {
				let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
				return color;
			}
		
	},
	mounted(){
		
		this.$http.videoList().then(res=>{
			console.log(res);
			this.testimgs=res.data;
		})
	}
	}
</script>

<style scoped>


  .content{
	  height: 100%;
	  background: url(http://rongchuang.sqhd850.cn/pic/static/bg@2x.png) no-repeat;
	 background-size: 100% 100%;
  }
	.height1{
		height:756rpx;
	}
	.height2{
			height: 250rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: url('http://rongchuang.sqhd850.cn/pic/static/park/3@2x.png') no-repeat;
			background-size: 100% 100%;
			border-radius: 12rpx;
	}
.txt{
	
	padding: 0 20rpx;

	font-size:22rpx;
	line-height: 38rpx;
	color: #fff;
	
}
</style>

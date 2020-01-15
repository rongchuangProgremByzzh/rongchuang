<template>
	<div class="content">
		<div class="content-wrap">
			<div class="title">{{newsList.title}}</div>
			<div class="time">{{newsList.ctime|formatTime}}</div>
			 <rich-text :nodes="content"></rich-text>
		</div>
	</div>
</template>
<script>
	import activeItem from '@/components/active_card.vue'
	export default{
		components:{
			
		},
		data(){
			return{
				newsList:{},
				content:''
			}
		},
		methods:{
		
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        console.log(option.id); //打印出上个页面传递的参数。
				  this.$http.getNewsList(option.id).then(res=>{
					 if(res.data){
						 this.newsList=res.data;
						 this.content=res.data.content
					 }
				  })

		    },
		mounted() {
			
		}
	}
</script>
<style scoped>
	.content{
		height: 100%;
		overflow-y: auto;
background: url(http://rongchuang.sqhd850.cn/pic/static/bg@2x.png) no-repeat;
background-size: 100% 100%;
	}
	.content-wrap{
		width: 96%;
		margin: 0 auto;
		text-align: center;
		color: #333333;
		font-size: 26rpx;
		line-height: 45rpx;
	}
	.title{
		margin-top: 40rpx;
		font-size:40rpx;
		color: #000;
		padding: 10rpx 0;
		text-align: center;
	}
	image{
		border-radius: 12rpx;
	}
	img{
		border-radius: 12rpx;
	}
	.time{
		padding: 10rpx 0;
		font-size: 30rpx;
		color: #333333;
	}
</style>

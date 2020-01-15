<template>
	<div class="newspaper">
		<whitebox :setheight="80"></whitebox>
		<div class="title">
			<div class="detail" :class="{current:current==0}" @click="choose(0)"><div class="isactive">融创</div>大事记</div>
			<div class="active " :class="{current:current==1}" @click="choose(1)"><div class="isactive">融创</div>活动</div>
		</div>
		<whitebox :setheight="40"></whitebox>
		<swiper @change="changeHandle" class="swiper-wrap" :current="current" :duration="200">
			<swiper-item>
				<view class="swiper-item">
				<div v-if="eventList.length>0">
					<active-item v-for="(item,index) in eventList" :key="item.id" :item="item"></active-item>
				</div>
				<div v-else class="nodata">暂无数据~</div>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<div v-if="activeList.length>0">
						<active-item v-for="(item,index) in activeList" :key="item.id" :item="item"></active-item>
					</div>
					<div v-else class="nodata">暂无数据~</div>
				</view>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import activeItem from '@/components/active_card.vue'
	export default{
		components:{
			activeItem
		},
		data(){
			return{
				current:0,
				activeList:[],
				eventList:[]
			}
		},
		methods:{
			choose(index){
				this.current=index
			},
			changeHandle(e) {
				this.current = e.detail.current;
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        console.log(option.id); //打印出上个页面传递的参数。
                  this.current=option.id||0;
				  this.$http.active().then(res=>{
					 this.activeList=res.data; 
				  })
				  this.$http.bigevent().then(res=>{
				  	 this.eventList=res.data; 
				  })
		    },
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
	.newspaper{
		height: 100%;
		background: url(http://rongchuang.sqhd850.cn/pic/static/photolist-bg@2x.png) no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
	.title{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	    font-size: 28rpx;	
		color: #9B9B9B;
	}
	.detail,.active{
		display: flex;
       flex-direction: row;
	  
	}
	.current{
		position: relative;
		color: #000;
		font-size: 40rpx;
		
	}
	.current::before{
		position: absolute;
		content: "";
		left: 0;
		bottom: -10rpx;
		width: 100%;
		height: 2rpx;
		background: #EC8301;
	}
	.current .isactive{
		font-size: 40rpx;
		color: #40B4E5;
	}
	.swiper-wrap{
		height: calc(100% - 100rpx );
		// overflow-y: auto;
	}
	.swiper-item{
		height: calc(100% - 100rpx );
		overflow-y: auto;
	}
	.nodata{
		font-size: 28rpx;
		color: #999;
		text-align: center;
		margin-top: 160rpx;
	}
</style>

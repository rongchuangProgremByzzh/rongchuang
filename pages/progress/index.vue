<template>
	<div class="progress">
		<!-- <scroll-view scroll-y="true" class="scroll-Y"> -->
			<div class="bg">
				<block v-for="(item,index) in List" :key="index">
					<div class="item-wrap " v-if="index==0">
						<div class="left">
							<div class="time">{{item.time|formatTime}}</div>
							<div class="title">{{item.title}}</div>
						</div>
						<div class="mid"><div class="mid-wrap"><div class="pointcircle"><div class="pointcirclewhite"></div></div></div></div>
						<div class="right"><image :src="item.imgUrl" mode=""></image></div>
					</div>
					<div class="item-wrap normal" v-if="index%2!=0 && index!=0">
						<div class="left">
							<div class="time">{{item.time|formatTime}}</div>
							<div class="title">{{item.title}}</div>
						</div>
						<div class="mid"><div class="mid-wrap"><div class="pointcircle"><div class="pointcirclewhite"></div></div></div></div>
						<div class="right"><image :src="item.imgUrl" mode=""></image></div>
					</div>
					
					<div class="item-wrap rt normal" v-if="index%2==0 && index!=0">
						<div class="right"><image :src="item.imgUrl" mode=""></image></div>
						<div class="mid"><div class="mid-wrap"><div class="pointcircle"><div class="pointcirclewhite"></div></div></div></div>
						<div class="left">
							<div class="time">{{item.time|formatTime}}</div>
							<div class="title">{{item.title}}</div>
						</div>
						
					</div>
				</block>
	

			</div>
		<!-- </scroll-view> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				List:[]
			}
		},
		mounted() {
			this.$http.projectprogress().then(res=>{
				console.log(res);
				this.List=res.data;
			})
		}
	}
	
</script>

<style scoped lang="scss">
	.progress{
		height: 100%;
	}

	.bg{
		width: 100%;
min-height: 100%;
		background: url(../../static/bg@2x.png) repeat;
		background-size:contain;
	}
	.item-wrap{
		height: 320rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	
		.left{
			width: 313rpx;
			height: 119rpx;
			margin-left: 24rpx;
			background:linear-gradient(to right,#eee,rgba(39,47,143,1));
			border-radius:12rpx;
			color: #fff;
			text-align: right;
			
			.time{
				 margin-top: 20rpx;
				  margin-right: 20rpx;
				font-size:26rpx;
			}
			.title{
				 margin-right: 20rpx;
				font-size:28rpx;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		.right{
			width: 312rpx;
			height: 193rpx;
			background: #fff;
			border-radius:12rpx;
			margin-right: 24rpx;
			image{
				height: calc(100% - 12rpx);
				width: calc(100% - 12rpx);
			padding: 6rpx;	
			border-radius:12rpx;
			}
		}
		.mid{
			position: relative;
			width:7rpx;
			height:100%;
		
			.mid-wrap{
				position: absolute;
				left: 0;
				top: 50%;
				width: 100%;
				height: 100%;
				background:rgba(243,152,1,1);
				.pointcircle{
					position: absolute;
					left: -8rpx;
					top: 0;
					width: 22rpx;
					height:22rpx;
					background:rgba(243,152,1,1);
					border-radius:50%;
					.pointcirclewhite{
						position: absolute;
						left: 6rpx;
						top: 6rpx;
						width: 10rpx;
						height:10rpx;
						background:#fff;
						border-radius:50%;
					}
				}
			}

		}
	}
	.item-wrap.rt{
		.left{
			margin-left: 0;
			margin-right: 24rpx;
			    background: linear-gradient(to right, #272f8f, #eee);
		}
		.right{
			margin-left: 24rpx;
			margin-right: 0;
		}
	}
	.item-wrap.normal{
		.mid-wrap{
			top:0;
		}
		.mid-wrap .pointcircle{
			top: 50%;
		}
	}

</style>

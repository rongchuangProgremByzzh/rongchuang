<template>
	<view class="container">
	
		<view class="body-view">
			<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTab.name}}</view>
							<view class="menu-one-bottom">
								<view class="menu-one-bottom-color"></view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<block v-for="(swiperDate,index1) in swiperDateList" :key="index1">
					<swiper-item>
						<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(index1)">
								<view class="swiper-list-entity">
									<block v-for="(swiperDate2,index2) in swiperDate" :key="index2">

									<view>
										<image :src="swiperDate2" mode="scaleToFill" @tap="lookImage(swiperDate)"></image>
									</view>
									</block>

								</view>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>

	</view>
</template>

<script>
	//import urls from '../../utils/urls.js'
	export default {
		data() {
			return {

				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [{
					name: '医生照片'
				}, {
					name: '案例展示'
				}],
				swiperDateList: {
					swiperDate:[],
					swiperDate2:[],
				},
				doctorId:'' ,
			}

		},
	onLoad: function(options) {
			this.doctorId = options.id
			//初始化数据

			for (var i = 0; i < this.swiperDateList.length; i++) {

				this.getDateList(i);

			}
		//	this.doctorResource(options.id,this.currentTab)
		},
		methods: {
			lookImage(item) {
				uni.previewImage({
					urls: item,
					loop: true
				})
			},
			swichMenu: async function(current) {
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
				if(current == 1) {
					this.doctorResource(this.doctorId,this.currentTab)
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) {
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
// 			loadMore: function(tabIndex) {
// 				// console.log('正在加载更多数据。。。') 
// 
// 				this.getDateList(tabIndex);
// 				
// 			},
			getDateList: function(tabIndex) {
				for (var i = 0; i < 20; i++) {
					var entity = this.menuTabs[tabIndex].name + (this.swiperDateList[tabIndex].length);
					this.swiperDateList[tabIndex].push(entity);
				}
			},
			doctorResource(id,current) {
				var that = this
				let num = current
				if(num == 0) {
					let params = {doctorId: id,type: 'STYLE'}
					that.$http.post(urls.links[0].doctorResource, params).then(function(res){
						if(res[1].data.code == 0) {
							that.swiperDateList.swiperDate = res[1].data.data
						}
					})
				}else {
					let params = {doctorId: id,type: 'EXAMPLE'}
					that.$http.post(urls.links[0].doctorResource, params).then(function(res){
						if(res[1].data.code == 0) {
							that.swiperDateList.swiperDate2 = res[1].data.data
						}
					})
				}
			}
		},
	}
</script>

<style scoped>
	page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		background: rgba(249, 249, 249, 1);
	}
.container{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
	.body-view {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		justify-content: center;
	}

	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #FFFFFF;
		height: 112upx;
		/* 在这里设置导航条高度 */
		border-bottom: 2upx solid #eee;
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;
	}

	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		font-size: 30upx;
		font-family: PingFang-SC-Regular;
		color: #222;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 112%;
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 8upx;
	}

	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		font-size: 30upx;
		font-family: PingFang-SC-Regular;
		color: #669bdc;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgba(0, 170, 255, 1);
	}

	.swiper-box-list {
		flex: 1;
		width: 100%;
		height:5000upx;
		background-color: #FFFFFF;
	}

	.swiper-one-list {
		height: auto;
		width: 100%;
	}

	.swiper-one-list .swiper-list-entity {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
            flex-wrap: wrap;
		width: 100%;
		height: auto;
		padding: 23upx 25upx;
		
	}
	.swiper-one-list .swiper-list-entity view {
		height: 340upx;
		width: 340upx;
		border-radius: 20upx;
		margin-bottom: 20upx;
	}
	.swiper-one-list .swiper-list-entity image {
		height: 100%;
		width: 100%;
		border-radius: 20upx;
	}
</style>

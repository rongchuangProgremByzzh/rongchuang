<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		share: function () {
		//监听路由切换
		//间接实现全局设置分享内容
		wx.onAppRoute(function (res) {
		//获取加载的页面
		let pages = getCurrentPages(),
		//获取当前页面的对象
		view = pages[pages.length - 1],
		data;
		if (view) {
		data = view.data;
		console.log('是否重写分享方法', data.isOverShare);
		if (!data.isOverShare) {
		data.isOverShare = true;
		view.onShareAppMessage = function () {
		//分享配置
		return {
		title: '标题',
		path: '/pages/index/index'
		};
		}
		}
		}
		})
		},
		
	}
</script>

<style>
	/*每个页面公共css */
	page{
		width: 100%;
		height: 100%;
	}
</style>

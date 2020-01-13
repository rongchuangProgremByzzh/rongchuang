export default {
	data() {
		return {
			//设置默认的分享参数
			share: {
				title: 'ALAPI',
				path: '/pages/index/index',
				imageUrl: '',
				desc: '',
				content: ''
			}
		}
	},
	onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
		if(option.id){
			
			let token=uni.getStorageSync('token')
			this.$http.bind(option.id,token).then(res=>{
				
			})
		}
		
	},
	onShareAppMessage(res) {
		return {
			title: 'ALAPI',
			path: '/pages/index/index?id=' + uni.getStorageSync('shareid'),
			imageUrl: '',
			desc: 'jjjjjjjjjj',
			content: 'eeeeeeeeeeeeeee',
		}

	}
}

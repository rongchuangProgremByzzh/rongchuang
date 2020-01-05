import $http from './zhouWei-request/requestConfig.js';
export default function ajax(url, data) {
	return $http.get(url)
	// uni.request({
	// 	url: url, //仅为示例，并非真实接口地址。
	// });
}



// this.$http.get('aid/region',{pid:0}).
// then(function (response) {
// 	//这里只会在接口是成功状态返回
// }).catch(function (error) {
// 	//这里只会在接口是失败状态返回，不需要去处理错误提示
// 	console.log(error);
// });
import ajax from './request.js'
import $http from './zhouWei-request/requestConfig.js';
export default {
	banner(url) {
		return $http.get(url)
	},
	projectprogress(url) {
		return $http.get(url)
	}
	//ajax('http://rcxcx.api.95lsy.com/banner')
}

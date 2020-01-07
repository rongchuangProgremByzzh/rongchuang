import ajax from './request.js'
import $http from './zhouWei-request/requestConfig.js';
export default {
	banner() {
		return $http.get('/banner')
	},
	projectprogress() {
		return $http.get('/projectProgress')
	},
	imgwordcontroller(type) {
		return $http.get('/imgWord?type='+type)
	},
	active(){
		return $http.get('/activity?type=1')
	},
	bigevent(){
		return $http.get('/activity?type=2')
	},
	getNewsList(id){
		return $http.get(`/activity/${id}`)
	},
	getMostNews(){
		return $http.get(`/activity/new`)
	},
	videoIndex(){
		return $http.get(`/video/index`)
	},
	videoList(){
		return $http.get(`/video`)
	},
	vr(type){
		return $http.get(`/vr?type=${type}`)
	}
	//ajax('http://rcxcx.api.95lsy.com/banner')
}

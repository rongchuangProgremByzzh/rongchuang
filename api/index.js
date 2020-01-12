import ajax from './request.js'
import $http from './zhouWei-request/requestConfig.js';
const appid=`wxead2ae5bf7837720`;
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
	},
	getPhone(){
		return $http.get(`/hotline`)
	},
	appointment(data){
		return $http.post(`/appointment`,data)
	},
	addPush(){
		return $http.put(`/user/add/push`)
	},
	wxlogin(code){
		return $http.get(`/wx/user/${appid}/login?code=${code}`)
	}
	,
	info(res,sessionKey,token){
		let param=`sessionKey=${encodeURI(sessionKey)}&signature=${encodeURI(res.signature)}&
		rawData=${encodeURI(res.rawData)}&encryptedData=${encodeURI(res.encryptedData)}&iv=${encodeURI(res.iv)}&Authorization=${token}`
		return $http.get(`/wx/user/${appid}/info?${param}`)
	}
	
	//ajax('http://rcxcx.api.95lsy.com/banner')POST /appointment
}

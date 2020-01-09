import Vue from 'vue'
import App from './App'
import './static/common.css'
import request from './api/index.js'
Vue.prototype.$http=request;
import WhiteBox from './components/black_box.vue'
Vue.component('whitebox',WhiteBox);
Vue.prototype.$imgBaseUrl='http://www.zangzhihong.com/'
Vue.config.productionTip = false
// import $http from '@/api/zhouWei-request/requestConfig.js';
// Vue.prototype.$http = $http;
App.mpType = 'app'
Vue.filter('formatTime', (value)=> {
  if (!value) return ''

  return value.split('T')[0]
})
const app = new Vue({
    ...App
})
app.$mount()

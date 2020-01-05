import Vue from 'vue'
import App from './App'
import './static/common.css'
import request from './api/index.js'
Vue.prototype.$http=request;
import WhiteBox from './components/black_box.vue'
Vue.component('whitebox',WhiteBox);

Vue.config.productionTip = false
// import $http from '@/api/zhouWei-request/requestConfig.js';
// Vue.prototype.$http = $http;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import Vue from 'vue'
import App from './App'
import './static/common.css'
import WhiteBox from './components/black_box.vue'
Vue.component('whitebox',WhiteBox);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

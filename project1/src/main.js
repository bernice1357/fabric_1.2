import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { GET, POST, PUT } from '@/service/api'
Vue.prototype.$GET = GET
Vue.prototype.$POST = POST
Vue.prototype.$PUT = PUT

import global_ from './views/Global'//引用檔案
Vue.prototype.GLOBAL = global_

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App),
     
}).$mount('#app')

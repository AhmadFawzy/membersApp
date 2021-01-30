import Vue from 'vue'
import App from './App.vue'
// window.axios = require('axios');
import { router } from './routes'
import { store } from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

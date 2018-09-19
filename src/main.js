import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import store from './store'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import axios from 'axios'

global.axios = axios;

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

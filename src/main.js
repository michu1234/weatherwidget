import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'

import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'

global.axios = axios;


import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuex
}).$mount('#app')

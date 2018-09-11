import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuex from 'vuex'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuex
}).$mount('#app')

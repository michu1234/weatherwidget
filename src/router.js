import Vue from 'vue'
import Router from 'vue-router'
import WeatherWidget from './views/WeatherWidget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weatherwidget',
      component: WeatherWidget
    }
  ],
  mode: 'history'
})

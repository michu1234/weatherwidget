import Vue from 'vue'
import Router from 'vue-router'
import WeatherWidget from './views/WeatherWidget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weatherwidget',
      name: 'weatherwidget',
      component: WeatherWidget
    }
  ]
})

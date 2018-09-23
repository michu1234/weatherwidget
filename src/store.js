import Vue from 'vue'
import Vuex from 'vuex'
import { widgetState } from './modules/state'
import { widgetMutations } from './modules/mutations';
import { widgetActions } from './modules/actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...widgetState
  },
  mutations: {
    ...widgetMutations
  },
  actions: {
    ...widgetActions
  }
})

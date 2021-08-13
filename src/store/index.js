import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  user: {
    username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})

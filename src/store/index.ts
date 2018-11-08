import Vue from 'vue'
import Vuex from 'vuex'
import { state, getters, actions, mutations } from './global'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;

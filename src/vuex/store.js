
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

import Dashboard from '../controllers/Dashboard/vuex/store';
import Users from '../controllers/Users/vuex/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  modules: { Dashboard, Users },
});

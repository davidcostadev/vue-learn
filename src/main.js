import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

new Vue({
  el : '#app',
  render : h => h(App),
  store : new Vuex.Store({
    state : {
      user : {
        name : 'David Costa',
        email : 'davidcostadev@gmail.com'
      }
    },
    mutations : {},
    strict : true
  })
});

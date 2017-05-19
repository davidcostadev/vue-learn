
<script>

import HeaderPage from './layout/Header';
import FooterPage from './layout/Footer';

export default {
  name: 'DavidLearnVue',
//   vuex: {
//     getters: {
//       token: (state) => {
//         window.console.log(state);
//         return state.token;
//       },
//     },
//   },
  computed: {
    user() {
      const { name, email } = this.$store.state.user;

      return `O usuário logado é ${name} com email: ${email}`;
    },
    mudar() {
      const payload = {
        name: 'Maria',
        email: 'outroemail@masd;com',
      };

      this.$store.commit('CHANGE_USER', payload);
    },
  },
  components: { HeaderPage, FooterPage },
};
</script>

<template>
  <div id="wrapper">
    <p>{{user}}</p>
    <button @click="mudar()">Mudar</button>
    <header-page></header-page>
    <div id="content" class="container">
      <router-view></router-view>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

#content {
  margin-top: 30px;
  margin-bottom: 100px;
}

</style>

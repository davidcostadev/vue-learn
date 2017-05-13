
<script>
import HeaderPage from './layout/Header';
import FooterPage from './layout/Footer';

export default {
  name: 'app',
  components: { HeaderPage, FooterPage },
};
</script>

<template>
  <div id="wrapper">
    <header-page></header-page>
    <router-view></router-view>
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
</style>

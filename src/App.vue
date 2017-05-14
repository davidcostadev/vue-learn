
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

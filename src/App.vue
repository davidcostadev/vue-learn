<script>
  import HeaderPage from './Layout/Header.vue';
  import ContentPage from './Layout/Content.vue';
  import FooterPage from './Layout/Footer.vue';
  
  
  export default {
    components : { HeaderPage, ContentPage, FooterPage }
  }
</script>

<template>
  <div id="wrapper">
    <header-page></header-page>
    <content-page></content-page>
    <footer-page></footer-page>
  </div>
</template>

<style sass>

</style>

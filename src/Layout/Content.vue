<script>
  import Child from './Contents/Child.vue';

  export default {
    // created : () {
    //   
    // },
    components : { Child },
    events : {
      
      'mudar-sentenca' (obj) {
        window.console.log(obj);
      }
    },
    data ()  {
      return {
        message : 'Esse é o conteudo da página'
      }
    }
  }  
</script>

<template>
  <div id="content">
    {{ message }}
    
    <child></child>
    
  </div>
</template>

<style>
  #content {
    padding: 7px 16px;
  }
</style>
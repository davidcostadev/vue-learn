<script>

  export default {
    data ()  {
      return {
        message : 'Esse é o conteudo da página'
      }
    }
  }  
</script>

<template>
  <div id="content" class="container">
    {{ message }}   
  </div>
</template>

<style>
  #content {
    padding: 7px 16px;
  }
</style>
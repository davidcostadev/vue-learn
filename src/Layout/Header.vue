<script>
  export default {
    vuex : {
      getters : {
        user : store => store.user
      }
    },
  }
</script>

<template>
  <header>
    <h1>Meu teste pessoal</h1>
    <p>{{ user}}</p>
  </header>
</template>

<style scoped>
  header {
    background: #eee;
    padding: 7px 15px;
  }
</style>
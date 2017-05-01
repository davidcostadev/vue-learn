<script>
  export default {
    vuex : {
      getters : {
        user : store => store.user
      }
    }
  };
</script>

<template>
  <header>
    <div class="container">
      <h1>Vue Learn</h1>
    </div>
  </header>
</template>

<style scoped>
  header {
    background: #eee;
    padding: 7px 15px;
  }
</style>


<script>
  export default {
    methods : {
      mudarMessage () {
        console.log(this);
        this.$emit('mudar-sentenca', {messageNew : 'novo texto'});
      }
    }
  }
</script>
<template>
  <div>
    Child 
    <a href="#" @click="mudarMessage">Mude</a>

  </div>
</template>

<script>
  import Vue from 'vue';

  Vue.filter('upper', (value) => value.toUpperCase());

  Vue.filter('limit', (value, limit = 15) => {
    const length = value.length;

    if (length <= limit) {
      return value;
    }

    return `${value.substr(0, limit)}`;
  });

  export default {
    data () {
      return {
        message : 'Esse é o conteudo da página',
        active : false,
        name : 'david'
      };
    },
    /**
     * Na versão anterior era ready
     */
    mounted () {
      console.log(this);
      setTimeout(() => {
        this.message = 'legal de mais, realmente isso aqui é muito legal';
      }, 1000 * 5);
    },
    /**
     * @deprecated
     */
    ready () { }
  };
</script>

<template>
  <div id="content" class="container">
    <p> {{ message | upper }}</p>
    <p> {{ message | limit 3 }} </p>
    <p> {{ active ? 'ATIVO' : 'desativado' }}</p>
    <!-- na versao anterior voce faria assim
    <p id="'name-{{name}}">Meu nome</p> agora não é permitido
    -->
    <p :id="'name-'+name">Meu nome</p>
  </div>
</template>

<style>
  #content {
    padding: 7px 16px;
  }
  #name-david {
    color: red;
  }
</style>


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
        name : 'david',
        // v-model
        input : {
          name : 'David Costa',
          boxCheckbox : 'none'
        }
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

    <div class="panel panel-default">
      <div class="panel-heading">Indrodução, Filtors, Mounted e v-bind</div>
      <div class="panel-body">
        <p> {{ message | upper }}</p>
        <p> {{ message | limit }} </p>
        <p> {{ active ? 'ATIVO' : 'desativado' }}</p>
        <!-- na versao anterior voce faria assim
            <p id="'name-{{name}}">Meu nome</p> agora não é permitido na versao 2.0 do vue
        -->
        <p v-bind:id="'name-'+name">Meu nome</p>
        <p :id="'name-'+name">Meu nome</p> <!-- mesma coisa de v-bind: -->
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">v-model</div>
      <div class="panel-body">
        <p>Usado para definir value para inputs</p>
        <p>input.name: <b>{{ input.name }}</b></p>
        <div class="form-group">
          <label for="" class="control-label">Normal</label>
          <input type="text" v-model="input.name" class="form-control">
        </div>
        <div class="form-group">
          <label for="" class="control-label">Com lazy</label>
          <input type="text" v-model.lazy="input.name" class="form-control">
           <!-- Migration -> https://vuejs.org/v2/guide/migration.html#lazy-or-number-Param-Attributes-for-v-model-replaced -->
        </div>
        <div class="form-group">
          <label for="" class="control-label">Com debounce</label>
          <input type="text" v-model="input.name" class="form-control" debounce="400">
        </div>

        <hr>
        <p>active: <b>{{ input.boxCheckbox }}</b></p>
        <div id="box-checkbox" v-bind:class="input.boxCheckbox ? 'active' : ''"></div>
        <div class="checkbox"><label><input type="checkbox" v-model="input.boxCheckbox" /> {{input.boxCheckbox ? 'Desativar' : 'Ativar' }}</label></div>

      </div>
    </div>

  </div>
</template>

<style>
  #content {
    padding: 7px 16px;
  }
  #name-david {
    color: red;
  }
  #box-checkbox {
    width: 30px;
    height: 30px;
    background: red;
  }
  #box-checkbox.active {
    background: green;
  }
</style>

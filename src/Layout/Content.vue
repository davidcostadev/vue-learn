
<script>
  import Vue from 'vue';
  import Sidebar from './Sidebar.vue';

  Vue.filter('upper', (value) => value.toUpperCase());

  Vue.filter('limit', (value, limit = 15) => {
    const length = value.length;

    if (length <= limit) {
      return value;
    }

    return `${value.substr(0, limit)}`;
  });

  export default {
    components : { Sidebar },
    data () {
      return {
        message : 'Esse é o conteudo da página',
        active : false,
        name : 'david',
        // v-model
        input : {
          name : 'David Costa',
          boxCheckbox : 'none',
          selector : 'blue',
          multiple : null
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
  <div class="container">
    <div class="row">

      <div id="content" class="col-xs-12 col-sm-8 col-md-9">

        <h2><a href="#">Indrodução, Filtors, Mounted e v-bind</a></h2>

        <div class="panel panel-default">
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

        <h2><a href="#">v-model</a></h2>

        <div class="panel panel-default">
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
              <label for="" class="control-label">O debounce nao funciona mais, tem que usar o loadesh</label>
              <input type="text" v-model="input.name" class="form-control" debounce="400">
            </div>

            <hr>
            <p>active: <b>{{ input.boxCheckbox }}</b></p>
            <div id="box-checkbox" v-bind:class="input.boxCheckbox ? 'active' : ''"></div>
            <div class="checkbox"><label><input type="checkbox" v-model="input.boxCheckbox" /> {{input.boxCheckbox ? 'Desativar' : 'Ativar' }}</label></div>

            <h3>Radio</h3>

            <div class="form-group">
              <div class="radio"><label for="radio-active-on"><input type="radio" id="radio-active-on" :value="true" v-model="input.boxCheckbox"> Ativo</label></div>
              <div class="radio"><label for="radio-active-off"><input type="radio" id="radio-active-off" :value="false" v-model="input.boxCheckbox"> Desativado</label></div>
            </div>

            <pre>{{$data}}</pre>


            <h3>Select</h3>

            <div class="form-group">
              <select class="form-control" v-model="input.selector">
                <option value="blue">Azul</option>
                <option value="red">Vermelha</option>
                <option value="green">Verde</option>
              </select>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">
                input.selector {{ input.selector }}
              </div>
            </div>


            <h3>Selector muilt</h3>

            <div class="form-group">
              <select class="form-control" v-model="input.multiple" multiple>
                <option value="blue">Azul</option>
                <option value="red">Vermelha</option>
                <option value="green">Verde</option>
              </select>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">
                input.selector {{ input.multiple }}
              </div>
            </div>


          </div>
        </div>

      </div>

      <Sidebar></Sidebar>

    </div>
  </div>
</template>

<style>
  #content {
    /*padding: 0px 16px;*/
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

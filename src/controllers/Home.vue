
<script>
import Vue from 'vue';
import Sidebar from '../layout/Sidebar';

// Vue.filter('upper', (value) => value.toUpperCase());

Vue.filter('limit', (value, limit = 15) => {
  const length = value.length;

  if (length <= limit) {
    return value;
  }

  return `${value.substr(0, limit)}`;
});

export default {
  components: { Sidebar },
  data() {
    return {
      message: 'Esse é o conteudo da página',
      active: false,
      name: 'david',
      testeWatch: true,
      log: [],
      // v-modele
      friends: [
        { name: 'Jhonny', selected: true },
        { name: 'Jessuir', selected: false },
        { name: 'DVD', selected: false },
        { name: 'Fabiano', selected: false },
      ],

      person: {
        name: 'David',
        job: 'Programador',
      },

      // activeFriends : [ usando com watch

      // ],
      cars: [
        {
          model: 'GOl',
          brand: 'volkswagen',
        },
        {
          model: 'Uno',
          brand: 'Fiat',
        },
      ],
      input: {
        name: 'David Costa',
        boxCheckbox: 'none',
        selector: 'blue',
        carIndex: {},
        carRadio: {},
        carCheckbox: [],
        multiple: [],
        active: null,
        show: false,
      },
    };
  },
  watch: {
    // return {
    testeWatch(value, oldValue) {
      this.log.push({ time: new Date(), value: oldValue });
      // console.log('sdfsdfsd');
      // console.log(value, oldValue);
    },
    // friends : {
    //   handler (value) {
    //     this.loadSelected();
    //   },
    //   deep : true
    // }

  },
  computed: {
    activeFriends() {
      return this.friends.filter(s => s.selected === true);
    },
    // bio () {
    //   return `${this.person.name} - ${this.person.job}`;
    // }
    bio: {
      get() {
        return `${this.person.name} ${this.person.job}`;
      },
      set(value) {
        const [first, ...last] = value.split(' ');

        this.person.name = first;
        this.person.job = last.join(' ');
      },
    },
  },

  // methods : {
  //   loadSelected () {
  //     this.activeFriends = this.friends.filter(s => s.selected === true);
  //   }
  // },
  // watch () { // this way dont work
  //   console.log('this way dont work');
  // },

  /**
   * Na versão anterior era ready
   */
  mounted() {
    // console.log(this);

    // this.loadSelected();

    setTimeout(() => {
      this.message = 'legal de mais, realmente isso aqui é muito legal';
    }, 1000 * 5);
  },
  /**
   * @deprecated
   */
  // ready() { }
};
</script>


<template>
  <div class="row">

    <div class="col-xs-12 col-sm-8 col-md-9">

      <div id="inicio">
        <h2>
          <a href="#">Indrodução, Filtors, Mounted e v-bind</a>
        </h2>

        <div class="panel panel-default">
          <div class="panel-body">
            <p> {{ message | upper }}</p>
            <p> {{ message | limit }} </p>
            <p> {{ active ? 'ATIVO' : 'desativado' }}</p>

            <p v-bind:id="'name-'+name">Meu nome</p>
            <p :id="'name-'+name">Meu nome</p>
            <!-- mesma coisa de v-bind: -->
          </div>
        </div>

      </div>

      <div id="model">
        <h2>
          <a href="#">v-model</a>
        </h2>

        <div class="panel panel-default">
          <div class="panel-body">

            <p>Usado para definir value para inputs</p>
            <p>input.name:
              <b>{{ input.name }}</b>
            </p>
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
            <p>active:
              <b>{{ input.boxCheckbox }}</b>
            </p>
            <div id="box-checkbox" v-bind:class="input.boxCheckbox ? 'active' : ''"></div>
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="input.boxCheckbox" /> {{input.boxCheckbox ? 'Desativar' : 'Ativar' }}</label>
            </div>

            <h3>Radio</h3>

            <div class="form-group">
              <div class="radio">
                <label for="radio-active-on">
                  <input type="radio" id="radio-active-on" :value="true" v-model="input.boxCheckbox"> Ativo</label>
              </div>
              <div class="radio">
                <label for="radio-active-off">
                  <input type="radio" id="radio-active-off" :value="false" v-model="input.boxCheckbox"> Desativado</label>
              </div>
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

            <h3>Selector muilt e checbox</h3>

            <div class="form-group">
              <select class="form-control" v-model="input.multiple" multiple>
                <option value="blue">Azul</option>
                <option value="red">Vermelha</option>
                <option value="green">Verde</option>
              </select>
            </div>

            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="blue" v-model="input.multiple">
                </label> Azul</div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="red" v-model="input.multiple">
                </label> Red</div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="green" v-model="input.multiple">
                </label> Green</div>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">
                input.selector {{ input.multiple }}
              </div>
            </div>

            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" :false-value="'INATIVO'" :true-value="'ATIVO'" v-model="input.active"> ATIVO?</label>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">
                input.active {{ input.active }}
              </div>
            </div>

            <h3>v-if v-show</h3>

            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="input.show"> Mostrar?</label>
              </div>
            </div>

            <div class="panel panel-default" v-show="input.show">
              <div class="panel-body" style="background: red">
                input.show {{ input.show }}
              </div>
            </div>
            <div class="panel panel-default" v-if="!input.show">
              <div class="panel-body" style="background: green">
                input.show {{ input.show }}
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-body">
                input.show {{ input.show }}
              </div>
            </div>

            <h3>Selector With Info</h3>

            <strong>Index</strong>
            <pre>{{input.carIndex}}</pre>

            <div class="panel panel-defualt">
              <table class="table">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(car, index) in cars">
                    <td>{{ index }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.brand }}</td>
                    <td>
                      <input type="radio" :value="index" v-model="input.carIndex">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <strong>Radio</strong>
            <pre>{{input.carRadio}}</pre>

            <strong>Checkbox</strong>
            <pre>{{input.carCheckbox}}</pre>

            <div class="panel panel-defualt">
              <table class="table">
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Radio</th>
                    <th>checkbox</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="car in cars">
                    <td>{{ car.model }}</td>
                    <td>{{ car.brand }}</td>
                    <td>
                      <input type="radio" :value="car" v-model="input.carRadio">
                    </td>
                    <td>
                      <input type="checkbox" :value="car" v-model="input.carCheckbox">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <div id="watch">

        <h2>
          <a href="watches">Watch</a>
        </h2>

        <div class="panel panel-default">
          <div class="panel-body">

            <h3>Basico</h3>
            <pre>{{testeWatch}}</pre>
            <p>Log:</p>
            <pre>{{log}}</pre>
            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="testeWatch"> algo
                </label>
              </div>
            </div>

            <h3>Avançado e Computed</h3>

            <div class="panel default">
              <div class="panel-body">
                <pre>{{activeFriends}}</pre>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="friend in friends">
                    <td>{{friend.name}}</td>
                    <td>
                      <input type="checkbox" :value="friend" v-model="friend.selected">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Computeed</h3>
            <form class="form">
              <div class="form-group">
                <label for="" class="control-label">Nome</label>
                <input type="text" class="form-control" v-model="person.name">
              </div>
              <div class="form-group">
                <label for="" class="control-label">Cargo</label>
                <input type="text" class="form-control" v-model="person.job">
              </div>
              <div class="form-group">
                <label for="" class="control-label">BIOS</label>
                <input type="text" class="form-control" v-model="bio">
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>

    <Sidebar></Sidebar>

  </div>
</template>

<style>


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

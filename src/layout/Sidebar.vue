
<script>

  export default {
    data() {
      return {
        menu: [
          { text: 'Inicio', link: '/#inicio' },
          { text: 'v-model', link: '/#model' },
          { text: 'watch', link: '/#watch' },
        ],
      };
    },
  };

</script>

<template>
  <div id="sidebar" class="col-xs-12 col-sm-4 col-md-3">
    <ul class="list-group">
      <li class="list-group-item" v-for="menuitem in menu">
        <a :href="menuitem.link">{{menuitem.text}}</a>
      </li>
    </ul>
  </div>
</template>


<style>
  #sidebar {
    margin-top: 30px;
  }
</style>

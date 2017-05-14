
<script>
export default {
  data() {
    return {
      links: [
        {
          url: '/',
          title: 'Home',
        },
        {
          url: '/todo',
          title: 'Todo',
        },
        {
          url: '/components',
          title: 'Components',
        },
      ],
    };
  },
  mounted() {
    // window.console.log(this.$route.path);
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Learn Vue</a>
        </div>

        <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="link in links" v-bind:class="$route.path === link.url ? 'active' : ''">
              <router-link v-bind:to="link.url">{{link.title}}</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  </header>
</template>

<style>

</style>


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
          url: '#',
          title: 'Vue Init',
          sub: [
            {
              url: '/basic',
              title: 'Basics',
            },
            {
              url: '/components',
              title: 'Components',
            },
          ],
        },
      ],
    };
  },
  methods: {
    getClassLi(link) {
      const classes = [];

      if (this.$route.path === link.url) {
        classes.push('active');
      }

      if (typeof link.sub !== 'undefined') {
        classes.push('dropdown');

        link.sub.forEach((subLink) => {
          if (this.$route.path === subLink.url) {
            classes.push('active');
          }
        });
      }

      return classes.join(' ');
    },
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
            <li v-for="link in links" v-bind:class="getClassLi(link)">
              <router-link v-if="typeof link.sub === 'undefined'" v-bind:to="link.url">{{link.title}}</router-link>
              <a v-else href="#" class="dropdown-toggle" data-toggle="dropdown">{{link.title}} <span class="caret"></span></a>


              <ul v-show="typeof link.sub !== 'undefined'" class="dropdown-menu">
                <li v-for="subLink in link.sub"  v-bind:class="getClassLi(subLink)">
                  <router-link v-bind:to="subLink.url">{{subLink.title}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  </header>
</template>

<style>

</style>

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/controllers/Home';
import Todo from '@/controllers/Todo';
import Components from '@/controllers/Components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
    },
  ],
});

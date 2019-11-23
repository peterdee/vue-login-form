import Vue from 'vue';
import Router from 'vue-router'

import Dashboard from '../components/Dashboard';
import Index from '../components/Index';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

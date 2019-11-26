import Vue from 'vue';
import Router from 'vue-router'

import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Index from '../components/Index';
import Login from '../components/Login';
import Post from '../components/Post';
import Posts from '../components/Posts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: About,
      name: 'About',
      path: '/about',
    },
    {
      component: Dashboard,
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      component: Index,
      name: 'Index',
      path: '/',
    },
    {
      component: Login,
      name: 'Login',
      path: '/login',
    },
    {
      component: Post,
      name: 'Post',
      path: '/post/:id',
    },
    {
      component: Posts,
      name: 'Posts',
      path: '/posts',
    },
  ],
});

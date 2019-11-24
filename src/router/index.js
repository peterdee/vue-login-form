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
  routes: [
    {
      component: About,
      name: 'About',
      path: '/about',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      component: Index,
      name: 'Index',
      path: '/',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
  ],
});

import Vue from 'vue';
import Vuex from 'vuex'

import dashboard from './modules/dashboard';
import login from './modules/login';
import post from './modules/post';
import posts from './modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    login,
    post,
    posts,
  },
});

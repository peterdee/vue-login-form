import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {

  },
  state: {
    dashboard: {
      generalError: '',
      isLoading: false,
      user: {
        email: '',
        name: '',
      },
    },
    login: {
      email: '',
      emailStatus: '',
      generalError: '',
      isLoading: false,
      password: '',
      passwordStatus: '',
      passwordIsOk: false,
    },
    post: {
      generalError: '',
      isLoading: true,
      post: {
        id: null,
        created: '',
        text: '',
        title: '',
      },
    },
    posts: {
      generalError: '',
      isLoading: true,
      posts: [],
    },
  },
  mutations: {

  }
});

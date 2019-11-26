import axios from 'axios';

import * as actionTypes from '../action-types/posts';
import * as mutationTypes from "../mutation-types/posts";
import origin from '../../config';

const actions = {
  [actionTypes.POSTS_GET_POSTS]: async ({ commit }) => {
    commit(mutationTypes.POSTS_GET_POSTS);
    try {
      const { data: posts = {} } = await axios({
        method: 'GET',
        url: `${origin}/api/posts`,
      });
      if (!(posts && posts.data)) {
        return commit({
          generalError: 'Error loading posts!',
          type: mutationTypes.POSTS_GET_POSTS_FAIL,
        });
      }
      return commit({
        posts: posts.data,
        type: mutationTypes.POSTS_GET_POSTS_OK,
      });
    } catch (error) {
      return commit({
        generalError: 'Error loading posts!',
        type: mutationTypes.POSTS_GET_POSTS_FAIL,
      });
    }
  },
};

const mutations = {
  [mutationTypes.POSTS_GET_POSTS]: (state) => {
    state.generalError = '';
    state.isLoading = true;
  },
  [mutationTypes.POSTS_GET_POSTS_FAIL]: (state, { generalError = '' }) => {
    state.generalError = generalError;
    state.isLoading = false;
  },
  [mutationTypes.POSTS_GET_POSTS_OK]: (state, { posts = {} }) => {
    state.generalError = '';
    state.isLoading = false;
    state.posts = posts;
  },
};

const state = {
  generalError: '',
  isLoading: true,
  posts: [],
};

export default {
  actions,
  mutations,
  state,
};

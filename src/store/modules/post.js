import axios from 'axios';

import * as actionTypes from '../action-types/post';
import * as mutationTypes from "../mutation-types/post";
import origin from '../../config';

const actions = {
  [actionTypes.POST_GET_POST]: async ({ commit }, { id = '' }) => {
    commit(mutationTypes.POST_GET_POST);
    try {
      const { data: post = {} } = await axios({
        method: 'GET',
        url: `${origin}/api/posts?id=${id}`,
      });
      if (!(post && post.data)) {
        return commit({
          generalError: 'Post not found!',
          type: mutationTypes.POST_GET_POST_FAIL,
        });
      }
      return commit({
        post: post.data,
        type: mutationTypes.POST_GET_POST_OK,
      });
    } catch (error) {
      return commit({
        generalError: 'Error loading post!',
        type: mutationTypes.POST_GET_POST_FAIL,
      });
    }
  },
};

const mutations = {
  [mutationTypes.POST_GET_POST]: (state) => {
    state.generalError = '';
    state.isLoading = true;
  },
  [mutationTypes.POST_GET_POST_FAIL]: (state, { generalError = '' }) => {
    state.generalError = generalError;
    state.isLoading = false;
  },
  [mutationTypes.POST_GET_POST_OK]: (state, { post = {} }) => {
    state.generalError = '';
    state.isLoading = false;
    state.post = post;
  },
};

const state = {
  generalError: '',
  isLoading: true,
  post: {
    id: null,
    created: '',
    text: '',
    title: '',
  },
};

export default {
  actions,
  mutations,
  state,
};

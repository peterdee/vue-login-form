import axios from 'axios';

import * as actionTypes from '../action-types/dashboard';
import * as mutationTypes from "../mutation-types/dashboard";
import origin from '../../config';

const actions = {
  [actionTypes.DASHBOARD_GET_USER]: async ({ commit }) => {
    commit(mutationTypes.DASHBOARD_GET_USER);
    try {
      const { data: user = {} } = await axios({
        method: 'GET',
        url: `${origin}/api/dashboard`,
      });
      if (!(user && user.data)) {
        return commit({
          generalError: 'Error loading User!',
          type: mutationTypes.DASHBOARD_GET_USER_FAIL,
        });
      }
      return commit({
        user: user.data,
        type: mutationTypes.DASHBOARD_GET_USER_OK,
      });
    } catch (error) {
      return commit({
        generalError: 'Error loading User!',
        type: mutationTypes.DASHBOARD_GET_USER_FAIL,
      });
    }
  },
  [actionTypes.DASHBOARD_SWITCH_LOADER]: ({ commit }, { isLoading }) => commit({
    isLoading,
    type: mutationTypes.DASHBOARD_SWITCH_LOADER,
  }),
};

const mutations = {
  [mutationTypes.DASHBOARD_GET_USER]: (state) => {
    state.generalError = '';
    state.isLoading = true;
  },
  [mutationTypes.DASHBOARD_GET_USER_FAIL]: (state, { generalError = '' }) => {
    state.generalError = generalError;
    state.isLoading = false;
  },
  [mutationTypes.DASHBOARD_GET_USER_OK]: (state, { user = {} }) => {
    state.generalError = '';
    state.isLoading = false;
    state.user = user;
  },
  [mutationTypes.DASHBOARD_SWITCH_LOADER]: (state, { isLoading = false }) => {
    state.isLoading = isLoading;
  },
};

const state = {
  generalError: '',
  isLoading: true,
  user: {
    email: '',
    name: '',
  },
};

export default {
  actions,
  mutations,
  state,
};

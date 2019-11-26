import axios from 'axios';

import * as actionTypes from '../action-types/login';
import * as getterTypes from '../getter-types/login';
import * as mutationTypes from '../mutation-types/login';
import origin from '../../config';
import router from '../../router';

const actions = {
  [actionTypes.LOGIN_HANDLE_INPUT]: ({ commit }, { field, value }) => commit({
    field,
    type: mutationTypes.LOGIN_HANDLE_INPUT,
    value,
  }),
  [actionTypes.LOGIN_SUBMIT_FORM]: async ({ commit, state }) => {
    // validate the form first
    const { email, password } = state;
    if (!(email && password)) {
      return commit(mutationTypes.LOGIN_VALIDATION_FAIL);
    }

    // send request
    commit(mutationTypes.LOGIN_SEND_REQUEST);
    try {
      await axios({
        data: { email, password },
        method: 'POST',
        url: `${origin}/api/login`,
      });
      commit(mutationTypes.LOGIN_RESPONSE_OK);
      return await router.push('/dashboard');
    } catch (error) {
      return commit({
        generalError: 'Access denied!',
        type: mutationTypes.LOGIN_RESPONSE_FAIL,
      });
    }
  },
};

const getters = { [getterTypes.LOGIN_GET_VALUE]: state => value => state[value] };

const mutations = {
  [mutationTypes.LOGIN_HANDLE_INPUT]: (state, { field, value }) => {
    state[field] = value;
    state[`${field}Status`] = '';
    state.generalError = '';
  },
  [mutationTypes.LOGIN_RESPONSE_FAIL]: (state, { generalError = '' }) => {
    state.emailStatus = '';
    state.generalError = generalError;
    state.isLoading = false;
    state.passwordStatus = '';
  },
  [mutationTypes.LOGIN_RESPONSE_OK]: (state) => {
    state.isLoading = false;
  },
  [mutationTypes.LOGIN_SEND_REQUEST]: (state) => {
    state.emailStatus = 'valid';
    state.generalError = '';
    state.isLoading = true;
    state.passwordStatus = 'valid';
  },
  [mutationTypes.LOGIN_VALIDATION_FAIL]: (state) => {
    state.emailStatus = state.email ? 'valid' : 'invalid';
    state.generalError = 'Please provide your Email and Password!';
    state.isLoading = false;
    state.passwordStatus = state.password ? 'valid' : 'invalid';
  },
};

const state = {
  email: '',
  emailStatus: '',
  generalError: '',
  isLoading: false,
  password: '',
  passwordStatus: '',
};

export default {
  actions,
  getters,
  mutations,
  state,
};

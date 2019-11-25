import axios from 'axios';

import * as actionTypes from '../action-types/login';
import * as mutationTypes from '../mutation-types/login';
import origin from '../../config';
import router from '../../router';

const actions = {
  [actionTypes.LOGIN_SUBMIT_FORM]: async ({ commit, state: { login } }) => {
    // validate the form first
    const { email, password } = login;
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
        payload: { generalError: 'Access denied!' },
        type: mutationTypes.LOGIN_RESPONSE_FAIL,
      });
    }
  },
};

const mutations = {
  [mutationTypes.LOGIN_RESPONSE_FAIL]: ({ login = {} }, { generalError = '' }) => {
    login.emailStatus = '';
    login.generalError = generalError;
    login.isLoading = false;
    login.passwordStatus = '';
  },
  [mutationTypes.LOGIN_RESPONSE_OK]: ({ login }) => {
    login.isLoading = false;
  },
  [mutationTypes.LOGIN_SEND_REQUEST]: ({ login }) => {
    login.emailStatus = 'valid';
    login.generalError = '';
    login.isLoading = true;
    login.passwordStatus = 'valid';
  },
  [mutationTypes.LOGIN_VALIDATION_FAIL]: ({ login }) => {
    login.emailStatus = login.email ? 'valid' : 'invalid';
    login.generalError = 'Please provide your Email and Password!';
    login.isLoading = false;
    login.passwordStatus = login.password ? 'valid' : 'invalid';
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
  mutations,
  state,
};

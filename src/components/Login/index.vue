<template>
  <div class="centered">
    <transition name="fade" appear>
      <form class="col-12" @submit="handleSubmit">
        <div class="form-group">
          <v-input
            :disabled="isLoading"
            :status="emailStatus"
            name="email"
            placeholder="Email"
            type="email"
            v-model.trim="email"
          />
        </div>
        <div class="form-group">
          <v-input
            :disabled="isLoading"
            :status="passwordStatus"
            name="password"
            placeholder="Password"
            type="password"
            v-model.trim="password"
          />
        </div>
        <v-button
          :generalError="generalError"
          :isLoading="isLoading"
          text="Submit"
          type="submit"
        />
        <div class="mt-2 error-container">
          <transition name="fade">
            <div v-if="generalError" class="text-danger text-center">
              {{ generalError }}
            </div>
          </transition>
        </div>
      </form>
    </transition>
    <div class="error-container">
      <transition name="fade" appear>
        <router-link v-if="!isLoading" class="noselect" to="/">
          Back
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  import * as actionTypes from '../../store/action-types/login';
  import ButtonWithLoader from './ButtonWithLoader';
  import * as getterTypes from '../../store/getter-types/login';
  import StyledInput from '../../reusable/StyledInput';

  export default {
    computed: {
      ...mapState({
        emailStatus: ({ login: { emailStatus = '' } }) => emailStatus,
        generalError: ({ login: { generalError = '' } }) => generalError,
        isLoading: ({ login: { isLoading = false } }) => isLoading,
        passwordStatus: ({ login: { passwordStatus = '' } }) => passwordStatus,
      }),
      ...mapGetters({
        getValue: getterTypes.LOGIN_GET_VALUE,
      }),
      email: {
        get() {
          return this.getValue('email');
        },
        set(value) {
          return this.handleInput({
            field: 'email',
            type: actionTypes.LOGIN_HANDLE_INPUT,
            value,
          });
        },
      },
      password: {
        get() {
          return this.getValue('password');
        },
        set(value) {
          return this.handleInput({
            field: 'password',
            type: actionTypes.LOGIN_HANDLE_INPUT,
            value,
          });
        },
      },
    },
    components: {
      'v-button': ButtonWithLoader,
      'v-input': StyledInput,
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        return this.submitForm();
      },
      ...mapActions({
        handleInput: actionTypes.LOGIN_HANDLE_INPUT,
        submitForm: actionTypes.LOGIN_SUBMIT_FORM,
      }),
    },
    name: "Login",
  };
</script>

<style scoped>
.centered {
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.error-container {
  height: 25px;
}
</style>

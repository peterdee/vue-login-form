<template>
  <form @submit="handleSubmit">
    <div class="form-group">
      <v-input
        v-bind:disabled="isLoading"
        v-bind:status="emailStatus"
        name="email"
        placeholder="Email"
        type="email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <v-input
        v-bind:disabled="isLoading"
        v-bind:status="passwordStatus"
        name="password"
        placeholder="Password"
        type="password"
        v-model="password"
      />
    </div>
    <v-button
      v-bind:generalError="generalError"
      v-bind:isLoading="isLoading"
      text="Submit"
      type="submit"
    />
    <transition name="fade">
      <div v-if="generalError" class="general-error mt-3">
        {{ generalError }}
      </div>
    </transition>
  </form>
</template>

<script>
  import axios from 'axios';
  import ButtonWithLoader from '../../reusable/ButtonWithLoader';
  import StyledInput from '../../reusable/StyledInput';

  export default {
    components: {
      'v-button': ButtonWithLoader,
      'v-input': StyledInput,
    },
    data: () => ({
      email: '',
      emailStatus: '',
      generalError: '',
      isLoading: false,
      password: '',
      passwordStatus: '',
      passwordIsOk: false,
    }),
    methods: {
      async handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this;
        if (!(email && password)) {
          this.generalError = 'Please provide your Email and Password!';
          this.emailStatus = this.email ? 'valid' : 'invalid';
          this.passwordStatus = this.password ? 'valid' : 'invalid';
          return;
        }

        this.emailStatus = 'valid';
        this.passwordStatus = 'valid';
        this.isLoading = true;
        
        try {
          await axios({
            data: {
              email,
              password,
            },
            method: 'POST',
            url: 'http://localhost:9000/api/login',
          });
          this.isLoading = false;
        } catch (error) {
          this.emailStatus = '';
          this.generalError = 'Access denied!';
          this.isLoading = false;
          this.passwordStatus = '';
          return;
        }
      },
    },
    name: "Login",
    watch: {
      email() {
        this.emailStatus = '';
        this.generalError = '';
      },
      password() {
        this.generalError = '';
        this.passwordStatus = '';
      },
    },
  };
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.general-error {
  text-align: center;
  color: red;
}
</style>

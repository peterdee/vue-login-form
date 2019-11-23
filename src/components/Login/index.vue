<template>
<div class="centered">
  <transition name="fade" appear>
  <form class="col-12" @submit="handleSubmit">
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
    <div class="mt-2 error-container">
      <transition name="fade">
        <div v-if="generalError" class="text-danger text-center">
          {{ generalError }}
        </div>
      </transition>
    </div>
  </form>
  </transition>
  <router-link class="mt-3" to="/">
    Back
  </router-link>
</div>
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

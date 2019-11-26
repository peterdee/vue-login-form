<template>
  <div class="col-12">
    <Header />
    <transition name="fade" appear>
      <div>
        <div class="greeting">
          A login form with Vue
        </div>
        <div>
          I've created this project while learning the basics of Vue:
          <ul>
            <li>state management (within the component)</li>
            <li>directives</li>
            <li>components and component interactions</li>
            <li>routing</li>
            <li>application state management with Vuex</li>
          </ul>
        </div>
        <div>
          Total time spent on the project (both backend and frontend): <b>~22 hours</b>
        </div>
        <div class="mt-3">
          Source code for the frontend project:
        </div>
        <div>
          <a href="https://github.com/peterdee/vue-login-form-frontend">https://github.com/peterdee/vue-login-form-frontend</a>
        </div>
        <div class="mt-3">
          Source code for the backend project:
        </div>
        <div>
          <a href="https://github.com/peterdee/vue-login-form-backend">https://github.com/peterdee/vue-login-form-backend</a>
        </div>
        <div class="mt-3">
          <b><a href="https://github.com/peterdee">Peter Dyumin</a>, {{ new Date().getFullYear() }}</b>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Header from '../Header';

  export default {
    components: {
      Header,
    },
    name: 'About',
  };
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter, .fade-leave-to, .loader-enter, .loader-leave-to {
  opacity: 0;
}
.greeting {
  font-size: 24px;
  font-weight: bold;
}
</style>

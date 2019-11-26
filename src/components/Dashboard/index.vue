<template>
  <div class="col-12">
    <Header />
    <div v-if="this.isLoading">
      <transition name="loader" appear>
        <Loader />
      </transition>
    </div>
    <div v-else-if="this.generalError">
      <ErrorMessage :message="this.generalError" />
    </div>
    <div v-else>
      <transition name="fade" appear>
        <div>
        <div class="greeting">
          Hello, {{ this.user.name }}!
        </div>
        <small class="text-muted mt-2">
          User name is loaded from the backend. Request performed on component mounting.
        </small>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import * as actionTypes from '../../store/action-types/dashboard';
  import ErrorMessage from '../../reusable/ErrorMessage';
  import Header from '../Header';
  import Loader from '../../reusable/Loader';

  export default {
    components: {
      ErrorMessage,
      Header,
      Loader,
    },
    computed: {
      ...mapState({
        generalError: ({ dashboard }) => dashboard.generalError,
        isLoading: ({ dashboard }) => dashboard.isLoading,
        user: ({ dashboard }) => dashboard.user,
      }),
    },
    created() {
      return this.switchLoader({ isLoading: true });
    },
    methods: {
      ...mapActions({
        getUser: actionTypes.DASHBOARD_GET_USER,
        switchLoader: actionTypes.DASHBOARD_SWITCH_LOADER,
      }),
    },
    mounted() {
      return this.getUser();
    },
    name: "Dashboard",
  };
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.loader-enter-active, .loader-leave-active {
  transition: opacity 1.50s;
}
.fade-enter, .fade-leave-to, .loader-enter, .loader-leave-to {
  opacity: 0;
}
.greeting {
  font-size: 24px;
  font-weight: bold;
}
</style>

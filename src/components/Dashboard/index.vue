<template>
  <div class="col-12">
    <Header />
    <div v-if="isLoading">
      <transition name="loader" appear>
        <Loader />
      </transition>
    </div>
    <div v-else-if="generalError">{{ generalError }}</div>
    <div v-else>
      <transition name="fade" appear>
        <div>
        <div class="greeting">
          Hello, {{ user.name }}!
        </div>
        <small class="text-muted mt-2">
          User name is loaded from the backend, request performed on component mounting.
        </small>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  import Header from '../Header';
  import Loader from '../../reusable/Loader';
  import origin from '../../config';

  export default {
    components: {
      Header,
      Loader,
    },
    async mounted() {
      try {
        this.isLoading = true;
        const { data: user = {} } = await axios({
          method: 'GET',
          url: `${origin}/api/dashboard`,
        });
        this.isLoading = false;
        return this.user = user.data; 
      } catch (error) {
        this.isLoading = false;
        return this.generalError = 'Error loading User data!';
      }
    },
    data: () => ({
      generalError: '',
      isLoading: true,
      user: {
        email: '',
        name: '',
      },
    }),
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
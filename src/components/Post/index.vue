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
            {{ this.post.title }}
          </div>
          <small class="text-muted mt-2">
            Created: {{ this.post.created }}
          </small>
          <div class="mt-3 text">
            {{ this.post.text }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import * as actionTypes from '../../store/action-types/post';
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
        generalError: ({ post }) => post.generalError,
        isLoading: ({ post }) => post.isLoading,
        post: ({ post }) => post.post,
      }),
    },
    methods: {
      ...mapActions({
        getPost: actionTypes.POST_GET_POST,
      })
    },
    mounted() {
      return this.getPost({ id: this.$route.params.id });
    },
    name: "Post",
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
.text {
  white-space: pre-wrap;
}
</style>

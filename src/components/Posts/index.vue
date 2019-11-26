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
          Posts
        </div>
        <small class="text-muted mt-2">
          A list of posts is loaded from the backend. Request performed on component mounting.
        </small>
        <div v-for="({ id, title }) in this.posts" v-bind:key="id">
          <Post :id="id" :title="title" />
        </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import * as actionTypes from '../../store/action-types/posts';
  import ErrorMessage from '../../reusable/ErrorMessage';
  import Header from '../Header';
  import Loader from '../../reusable/Loader';
  import Post from './Post';

  export default {
    components: {
      ErrorMessage,
      Header,
      Loader,
      Post,
    },
    computed: {
      ...mapState({
        generalError: ({ posts }) => posts.generalError,
        isLoading: ({ posts }) => posts.isLoading,
        posts: ({ posts }) => posts.posts,
      }),
    },
    methods: {
      ...mapActions({ getPosts: actionTypes.POSTS_GET_POSTS }),
    },
    mounted() {
      return this.getPosts();
    },
    name: "Posts",
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

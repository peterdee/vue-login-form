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
          Posts
        </div>
        <small class="text-muted mt-2">
          A list of posts is loaded from the backend. Request performed on component mounting.
        </small>
        <div v-for="({ id, title }) in posts" v-bind:key="id">
          <Post :id="id" :title="title" />
        </div>
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
  import Post from './Post';

  export default {
    components: {
      Header,
      Loader,
      Post,
    },
    async mounted() {
      try {
        this.isLoading = true;
        const { data: posts = {} } = await axios({
          method: 'GET',
          url: `${origin}/api/posts`,
        });
        this.isLoading = false;
        return this.posts = posts.data; 
      } catch (error) {
        this.isLoading = false;
        return this.generalError = 'Error loading Posts!';
      }
    },
    data: () => ({
      generalError: '',
      isLoading: true,
      posts: [],
    }),
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

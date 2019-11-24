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
            {{ post.title }}
          </div>
          <small class="text-muted mt-2">
            Created: {{ post.created }}
          </small>
          <div class="mt-3 text">
            {{ post.text }}
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

  export default {
    components: {
      Header,
      Loader,
    },
    async mounted() {
      try {
        const { id = null } = this.$route.params;
        this.isLoading = true;
        const { data: post = {} } = await axios({
          method: 'GET',
          url: `${origin}/api/posts?id=${id}`,
        });
        this.isLoading = false;
        return this.post = { ...post.data, text: post.data.text.replace(/\n/g, '\r\n') }; 
      } catch (error) {
        this.isLoading = false;
        return this.generalError = 'Error loading Post data!';
      }
    },
    data: () => ({
      generalError: '',
      isLoading: true,
      post: {
        id: null,
        created: '',
        text: '',
        title: '',
      },
    }),
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
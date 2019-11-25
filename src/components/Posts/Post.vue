<template>
  <div class="mb-2">
    <router-link class="link" :to="link">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      link() {
        return `/post/${this.id}`; 
      },
    },
    name: 'Post',
    props: {
      id: {
        default: '',
        required: true,
        type: [Number, String],
      },
      title: {
        default: '',
        required: true,
        type: String,
      },
    }
  };
</script>

<style scoped>
.link {
  font-size: 16px;
  font-weight: 500;
}
</style>

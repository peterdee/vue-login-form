<template>
  <div class="mb-2">
    <router-link :to="link">
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

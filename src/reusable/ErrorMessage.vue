<template>
  <transition name="error" appear>
    <div class="text-danger text-center">
      {{ message }}
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: {
      message: {
        default: '',
        required: true,
        type: String,
      },
    },
  };
</script>

<style scoped>
  .error-enter-active, .error-leave-active {
    transition: opacity 0.75s;
  }
  .error-enter, .error-leave-to {
    opacity: 0;
  }
</style>

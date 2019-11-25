<template>
  <button
    class="btn btn-block"
    :class="generalError ? 'btn-outline-danger' : 'btn-outline-success'"
    :disabled="isLoading"
    :type="type"
  >
    <span v-if="isLoading" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: "ButtonWithLoader",
    props: {
      classes: {
        default: '',
        required: false,
        type: String,
      },
      generalError: {
        default: '',
        required: true,
        type: String,
      },
      isLoading: {
        default: false,
        required: true,
        type: Boolean,
      },
      text: {
        default: '',
        required: true,
        type: String,
      },
      type: {
        default: '',
        required: true,
        type: String,
      },
    },
  };
</script>

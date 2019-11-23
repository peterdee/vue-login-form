<template>
  <input
    class="form-control"
    v-bind:class="highlight"
    v-bind:disabled="disabled"
    v-bind:name="name"
    v-bind:placeholder="placeholder"
    v-bind:type="type"
    v-bind:value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
  export default {
    computed: {
      highlight() {
        const { status = '' } = this;
        switch (status) {
          case 'valid':
            return 'is-valid';
          case 'invalid':
            return 'is-invalid';
          default:
            return '';
        }
      },
    },
    name: "StyledInput",
    props: {
      disabled: {
        default: false,
        required: true,
        type: Boolean,
      },
      name: {
        default: '',
        required: true,
        type: String,
      },
      placeholder: {
        default: '',
        required: false,
        type: String,
      },
      status: {
        default: '',
        required: false,
        type: String,
      },
      type: {
        default: '',
        required: true,
        type: String,
      },
      value: {
        default: '',
        required: true,
        type: [Number, String],
      },
    },
  };
</script>

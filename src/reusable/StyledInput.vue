<template>
  <input
    class="form-control"
    :class="highlight"
    :disabled="disabled"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
  export default {
    computed: {
      highlight() {
        const { status = '' } = this;
        switch (status) {
          case 'valid': return 'is-valid';
          case 'invalid': return 'is-invalid';
          default: return '';
        }
      },
    },
    name: 'StyledInput',
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

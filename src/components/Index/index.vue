<template>
  <div class="centered">
    <transition name="faded" appear>
      <div class="title">
        Learning Vue
      </div>
    </transition>
    <router-link to="/login">
      <button
        class="mt-3 btn btn-success button"
        type="button"
      >
        Login
      </button>
    </router-link>
  </div>
</template>

<script>
export default { name: 'Index' };
</script>

<style scoped>
.button {
  width: 150px;
}
.centered {
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.faded-enter-active, .faded-leave-active {
  transition: opacity 1.75s;
}
.faded-enter, .faded-leave-to {
  opacity: 0;
}
.title {
  font-size: 36px;
  font-weight: bold;
}
</style>

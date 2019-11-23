<template>
  <nav class="header">
    <router-link
      class="mr-3"
      to="/"
    >
      Index
    </router-link>
    <router-link class="mr-3" :class="{ 'selected': (current === '/dashboard') }" to="/dashboard">
      Dashboard
    </router-link>
    <router-link
      class="mr-3"
      to="/login"
    >
      Logout
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    current() {
      return this.$route.fullPath;
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0;
  font-size: 24px;
};
.selected {
  font-weight: bold;
}
</style>
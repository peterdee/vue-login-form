<template>
  <div class="header">
    <div class="main-nav">
      <router-link class="mr-3" to="/" exact>
        <img class="logo" src="../../assets/logo.png" alt="Logo" />
      </router-link>
      <router-link class="mr-3" :class="{ 'selected': (current === '/dashboard') }" to="/dashboard">
        Dashboard
      </router-link>
      <router-link class="mr-3" :class="{ 'selected': (current === '/posts') }" to="/posts">
        Posts
      </router-link>
      <router-link class="mr-3" :class="{ 'selected': (current === '/about') }" to="/about">
        About
      </router-link>
    </div>
    <div>
      <router-link class="mr-3" to="/login">
        Logout
      </router-link>
    </div>
  </div>
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
.header, .main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header {
  justify-content: space-between;
  padding: 10px 0;
  font-size: 24px;
};
.logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid black;
}
.selected {
  background-color: rgba(233, 233, 233, 0.699);
}
</style>
<template>
  <div class="header">
    <div class="main-nav">
      <router-link class="mr-3" to="/" exact>
        <img class="logo" src="../../assets/logo.png" alt="Logo" />
      </router-link>
      <router-link class="mr-3 nav" exact-active-class="selected" to="/dashboard">
        Dashboard
      </router-link>
      <router-link class="mr-3 nav" exact-active-class="selected" to="/posts">
        Posts
      </router-link>
      <router-link class="mr-3 nav" exact-active-class="selected" to="/about">
        About
      </router-link>
    </div>
    <div>
      <router-link class="mr-3 nav" to="/login">
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
export default { name: 'Header' };
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.header, .main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header {
  justify-content: space-between;
  padding: 10px 0;
  font-size: 16px;
  border-bottom: 1px solid black;
}
.logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid black;
}
.logo:hover {
  border: 2px solid rgb(108, 228, 255);
  transition: border 750ms;
}
.nav {
  padding: 0 10px;
  border-bottom: 2px solid transparent;
}
.selected, .nav:hover {
  border-bottom: 2px solid rgb(108, 228, 255);
  transition: border-bottom-color 750ms;

}
</style>

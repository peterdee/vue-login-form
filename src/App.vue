<template>
  <div>
    <div class="container">
      <div class="row wrap">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

import Footer from './components/Footer';

export default {
  components: {
    Footer,
  },
  name: 'App',
};
</script>

<style scoped>
.wrap {
  min-height: calc(100vh - 30px);
}
</style>

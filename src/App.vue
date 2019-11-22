<template>
  <div class="container">
    <h1>Login form</h1>
    <Login />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';

export default {
  name: 'app',
  components: {
    Login,
  },
};
</script>

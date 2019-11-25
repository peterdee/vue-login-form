<template>
  <footer class="text-center noselect footer">
    <small>
      <a href="https://github.com/peterdee">Peter Dyumin</a>, {{ new Date().getFullYear() }}
    </small>
  </footer>
</template>

<script>
export default { name: 'Footer' };
</script>

<style scoped>
.footer {
  height: 30px;
}
</style>

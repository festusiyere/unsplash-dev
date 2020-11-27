<template>
  <div ref="placeholder" class="placeholder">
    <div class="text">
      <div class="name"></div>
      <div class="location"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const height = Math.random() * (500 - 350) + 350;
    this.$refs.placeholder.style.height = height + "px";
  },
};
</script>

<style>
</style>
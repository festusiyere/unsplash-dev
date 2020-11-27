<template>
  <transition mode="out-in" name="slide">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>


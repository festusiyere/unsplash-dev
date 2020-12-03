<template>
  <div>
    <section class="first_section">
      <div class="input_container">
        <slot name="header">
        </slot>
      </div>
    </section>

    <section class="second_section">
      <div class="images_container">
        <slot name="body">

        </slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "BaseComponent"
};
</script>

<style>
</style>
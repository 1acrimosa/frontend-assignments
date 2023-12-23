<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // methods: {
  //   handleButtonClick(isActive) {
  //     console.log('Button Clicked! Active State:', isActive);
  //   },
  // },
};
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 3px;
}
</style>

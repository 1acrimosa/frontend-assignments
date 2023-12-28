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
  gap: 3px;
  align-items: start;
}

.button-group img {
  width: 100px;
  height: 450px;
}
</style>

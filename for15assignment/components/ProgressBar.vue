<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100,
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 800px;
  height: 35px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress {
  height: 100%;
  background-color: #55d3c9;
  transition: width 0.3s ease-in-out;
}
</style>

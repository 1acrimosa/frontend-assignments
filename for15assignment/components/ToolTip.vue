<template>
  <div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <div class="target-element">
      <slot></slot>
    </div>
    <div v-if="isVisible" class="tooltip">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    position: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value),
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showTooltip() {
      this.isVisible = true;
    },
    hideTooltip() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
/* Add styling for your tooltip component */
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  z-index: 1;
}

.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.left {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
}

.right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}
</style>

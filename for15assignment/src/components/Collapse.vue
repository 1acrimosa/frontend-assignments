<template>
  <div>
    <div class="collapse-header" @click="toggleCollapse">
      {{ title }}
      <span :class="{ 'rotate-arrow': isCollapsed }">&#9660;</span>
    </div>
    <div v-show="!isCollapsed" class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    defaultCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCollapsed: this.defaultCollapsed,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.collapse-header {
  cursor: pointer;
  padding: 10px;
  background-color: #f5f5f5;
  border: 2px solid #222;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}

.rotate-arrow {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}

.collapse-content {
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}
</style>

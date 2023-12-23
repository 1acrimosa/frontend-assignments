<template>
  <span class="icon" :class="iconClass">
    <i v-if="iconName" :class="iconName"></i>
  </span>
</template>

<script>
export default {
  props: {
    iconName: String,
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    color: {
      type: String,
      default: '#000',
    },
  },
  computed: {
    iconClass() {
      return this.size && `icon-${this.size}`;
    },
  },
};
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon i {
  color: inherit;
}

.icon-small i {
  font-size: 16px;
}

.icon-medium i {
  font-size: 24px;
}

.icon-large i {
  font-size: 32px;
}
</style>

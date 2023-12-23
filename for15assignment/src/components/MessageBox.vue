<template>
  <div v-if="isVisible" class="message-box" :class="[typeClass]">
    <div class="message-header">
      {{ title }}
      <button class="close-button" @click="closeMessageBox">&times;</button>
    </div>
    <div class="message-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
    },
    title: String,
  },
  computed: {
    typeClass() {
      return `message-${this.type}`;
    },
  },
  methods: {
    closeMessageBox() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.message-header {
  font: 20px Verdana, sans-serif;
  color: black;

  margin-bottom: 10px;
}
.message-content {
  font: 20px Verdana, sans-serif;
  color: black;

  margin-bottom: 10px;
}

.close-button {
  padding: 7px;

  border-radius: 3px;
  border-color: black;
  background-color: ghostwhite;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 4px 4px #55d3c9;
}
</style>

<template>
  <div v-if="isVisible" class="alert" :class="[typeClass]">
    {{ message }}
    <button class="close-button" @click="closeAlert">&times;</button>
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
    message: String,
  },
  computed: {
    typeClass() {
      return `alert-${this.type}`;
    },
  },
  methods: {
    closeAlert() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Add styling for your alert component */
.alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert-info {
  background-color: #e6f7ff;
  color: #004085;
  border: 1px solid #b8daff;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}
</style>

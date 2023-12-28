<script>
export default {
  name: 'vButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    btnClass: {
      type: String,
      default: 'default-button-class',
    },
  },
}
</script>

<template :class="btnClass">
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;

  background-color: rebeccapurple;
  color: white;

}

button:hover {
  background-color: mediumpurple;
}
</style>
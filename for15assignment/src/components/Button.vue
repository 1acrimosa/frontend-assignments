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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 7px;

  border-radius: 3px;
  border-color: black;
  background-color: ghostwhite;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 4px 4px #55d3c9;

  font: 20px Verdana, sans-serif;
  color: black;

  margin-bottom: 20px;
}
button:hover {
  border-radius: 3px;
  background-color: darkgrey;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 4px 4px #55d3c9;
  color: ghostwhite;
}
</style>
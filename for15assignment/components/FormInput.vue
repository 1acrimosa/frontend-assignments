<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :value="value" @input="$emit('input', $event)" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text",
      validator: (value) => ["text", "email", "password", "number", "file", "date"].includes(value),
    },
    placeholder: String,
    value: String,
  },
};
</script>

<style scoped>
div {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  width: 100px;
}

input {
  width: 300px;
  padding: 16px;
  box-sizing: border-box;
  border: 2px solid #222;
  border-radius: 3px;
  background-color: ghostwhite;
}
</style>

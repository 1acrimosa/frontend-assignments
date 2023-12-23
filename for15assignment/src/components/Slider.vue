<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :id="id" type="range" :min="min" :max="max" :step="step" :value="value" @input="updateValue" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:value", event.target.value);
    },
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
}

input {
  width: 400px;
}

span {
  display: inline-block;
  margin-top: 8px;
}
</style>

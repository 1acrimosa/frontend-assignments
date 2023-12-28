<script>
export default {
  name: 'IconComponent',
  props: {
    image: String,
  },
};
</script>

<template>
<div class="icon">
  <div class="icon-image">
    <img :src="image" alt="Icon Image">
  </div>
</div>
</template>

<style scoped>
.icon-image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ghostwhite;
}
</style>
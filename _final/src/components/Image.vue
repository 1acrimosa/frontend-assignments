<script>
export default {
  name: 'ImageComponent',
  props: {
    image: String,
  },
};
</script>

<template>
  <div class="image">
    <div class="image-image">
      <img :src="image" alt="Image">
    </div>
  </div>
</template>

<style scoped>
.image-image img {
  width: 1000px;
  height: 450px;
  border-radius: 20px;
}
</style>
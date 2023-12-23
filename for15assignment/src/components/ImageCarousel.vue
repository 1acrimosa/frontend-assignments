<template>
  <div class="image-carousel">
    <div class="carousel-content" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <img v-for="(image, index) in images" :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
    </div>

    <button @click="prevSlide" class="nav-button prev-button">&#9665;</button>
    <button @click="nextSlide" class="nav-button next-button">&#9655;</button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
/* Add styling for your image carousel component */
.image-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.carousel-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>

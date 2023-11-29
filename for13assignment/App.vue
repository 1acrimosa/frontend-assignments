<!-- Carousel.vue -->
<template>
  <div class="carousel">
    <div class="carousel-display">
      <img :src="currentItem.src" :alt="currentItem.alt" class="carousel-image">
      <div v-if="currentItem.caption" class="carousel-caption">{{ currentItem.caption }}</div>
    </div>
    <div class="carousel-controls">
      <button @click="prevItem" class="control-button">Previous</button>
      <button @click="nextItem" class="control-button">Next</button>
    </div>
    <div v-if="showIndicators" class="carousel-indicators">
      <span
          v-for="(item, index) in items"
          :key="index"
          @click="goToItem(index)"
          :class="{ active: index === currentIndex }"
          class="indicator-dot"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000, // Autoplay interval in milliseconds
    },
    showIndicators: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  methods: {
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevItem() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    goToItem(index) {
      this.currentIndex = index;
    },
    startAutoplay() {
      this.timer = setInterval(this.nextItem, this.interval);
    },
    stopAutoplay() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 600px;
  margin: auto;
}

.carousel-display {
  position: relative;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.carousel-caption {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 16px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
}

.control-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7f8c8d;
  margin: 0 5px;
  cursor: pointer;
}

.indicator-dot.active {
  background-color: #3498db;
}
</style>

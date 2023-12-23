<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item" :class="{ 'active': index === activeIndex }">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
      </div>
      <div class="accordion-content" v-if="index === activeIndex">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: -1,
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    },
  },
};
</script>

<style scoped>
.accordion {
  width: 400px;
}

.accordion-item {
  margin-bottom: 8px;
  border: 2px solid #222;
  border-radius: 4px;
}

.accordion-header {
  padding: 10px;
  cursor: pointer;
  background-color: ghostwhite;
}

.accordion-content {
  padding: 10px;
  display: none;
}

.accordion-item.active .accordion-content {
  display: block;
}
</style>

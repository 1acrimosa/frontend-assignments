<script>
export default {
  name: 'DropdownButton',
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    buttonLabel: {
      type: String,
      default: 'Dropdown'
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-button" @click="toggleDropdown">
      {{ buttonLabel }}
      <span class="caret"></span>
    </button>
    <div class="dropdown-content" v-if="isOpen">
      <ul class="dropdown-list">
        <slot></slot>
      </ul>
    </div>
  </div>
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
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content .dropdown-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-content .dropdown-list li {
  display: block;
  padding: 16px;
  cursor: pointer;
}

</style>
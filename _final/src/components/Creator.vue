<script>
import VButton from "./Button.vue";

export default {
  name: 'CreatorComponent',
  components: {VButton},
  props: {
    image: String,
  },
};
</script>

<template>
  <div class="container">
    <div class="icon-image">
      <img :src="image" alt="Icon Image">
    </div>
    <div class="text">
      <h5>Darlene Robertson</h5>
      <p>darlene@hotmail.com</p>
    </div>
    <v-button>Follow</v-button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
.container {
  display: flex;
  width: 380px;
  border-radius: 20px;

  align-items: center;
  justify-content: space-around;

  font-family: Poppins, sans-serif;
}
.icon-image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ghostwhite;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text * {
  margin: 0;
}
</style>
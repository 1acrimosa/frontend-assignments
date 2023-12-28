<script>
import { defineComponent } from "vue";
import VIcon from "../components/Icon.vue";
import vSearchBar from "../components/SearchBar.vue";

export default defineComponent({
  components: {
    VIcon,
    vSearchBar,
  }
})
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Saved Items</h2>
      <p>Welcome Enfso Saved Page</p>
    </div>
    <v-search-bar></v-search-bar>
    <div class="buttons">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
      </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg>
      </button>
    </div>
    <div class="profile">
      <div class="profile-text">
        <h5>Nella Vita</h5>
        <p>User</p>
      </div>
      <v-icon image="src/media/av11.png"></v-icon>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
.container {
  display: flex;

  align-items: center;
  justify-content: space-between;

  font-family: Poppins, sans-serif;
}

.title {
  padding-left: 20px;
}

button {
  border-radius: 50%;
  border-color: lightgray;
  cursor: pointer;
  transition: 0.3s;

  color: black;
  width: 30px;
  height: 30px;
}

.profile {
  padding-right: 40px;
  display: flex;
}

.profile-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
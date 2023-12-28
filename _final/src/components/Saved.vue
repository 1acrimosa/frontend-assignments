<script>
import vButton from './Button.vue'
import vCard from './Card.vue'
import vGroup from './Group.vue'
import vIcon from './Icon.vue'
import vCreator from './Creator.vue'
import vCreatorGroup from './CreatorsGroup.vue'
import CreatorComponent from "./Creator.vue"
import vSideBar from "./SideBar.vue"
import vGuide from "./GuideCard.vue"
import vHeader from "./Header.vue";
import vSearchBar from "./SearchBar.vue";
export default {
  components: {
    vHeader,
    CreatorComponent,
    vButton,
    vCard,
    vGroup,
    vIcon,
    vCreator,
    vCreatorGroup,
    vSideBar,
    vSearchBar,
  },
}
</script>

<template>
  <div class="side">
    <v-side-bar></v-side-bar>
    <div class="main">
      <v-header></v-header>
      <div class="search-nav">
        <v-search-bar></v-search-bar>
        <div>
          <v-button>Filter</v-button>
          <v-button>Create New Artwork</v-button>
        </div>
      </div>
      <v-group>
        <v-card title="Golden" image="src/media/m1.webp" auction-time="0d 9h" creator="Y2K" current-bid="210"></v-card>
        <v-card title="Eminem" image="src/media/m2.webp" auction-time="2d 6h" creator="Eminem" current-bid="56"></v-card>
        <v-card title="Modern" image="src/media/m3.png" auction-time="3d 1h" creator="Aizee" current-bid="10"></v-card>
        <v-card title="Football" image="src/media/m4.jpeg" auction-time="0d 21h" creator="Mbappe" current-bid="6"></v-card>
        <v-card title="Black Air" image="src/media/i1.webp" auction-time="1d 2h" creator="Toto" current-bid="10"></v-card>
        <v-card title="Air" image="src/media/i2.webp" auction-time="3d 1h" creator="Toto" current-bid="119"></v-card>
        <v-card title="Black Skull" image="src/media/i3.jpeg" auction-time="5d 2h" creator="Yuiko" current-bid="109"></v-card>
        <v-card title="Modern Skull" image="src/media/i4.png" auction-time="4d 0h" creator="Ulyanov" current-bid="80"></v-card>
      </v-group>

    </div>

  </div>
</template>

<style scoped>

.side {
  display: flex;
}

.main {
  background-color: ghostwhite;
}

.search-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

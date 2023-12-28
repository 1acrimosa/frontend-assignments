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
import vImage from "./Image.vue";
import IconComponent from "@/components/Icon.vue";
import vGraph from "@/components/Graph.vue";
import vTransferCard from "@/components/TransferCard.vue";
export default {
  components: {
    IconComponent,
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
    vImage,
    vGraph,
    vTransferCard,
  },
}
</script>

<template>
  <div class="side">
    <v-side-bar></v-side-bar>
    <div class="main">
      <v-header></v-header>
      <div class="search-nav">
        <div>
        </div>
      </div>

      <v-transfer-card image="src/media/walletgraph.png" creator="$23,980"></v-transfer-card>
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

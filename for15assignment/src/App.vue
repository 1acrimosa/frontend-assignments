<script>
import vButton from './components/Button.vue'
import vDropDown from './components/DropDownButton.vue'
import vGroup from './components/Group.vue'
import vFormInput from './components/FormInput.vue'
import vSlider from './components/Slider.vue'
import vCard from './components/Card.vue'
import vAccordion from './components/Accordion.vue'
import vCollapse from "@/components/Accordion.vue";
import vProgressBar from "@/components/ProgressBar.vue";
import vToolTip from "@/components/ToolTip.vue";
import vMessageBox from "@/components/MessageBox.vue";
export default {
  components: {
    vButton,
    vDropDown,
    vGroup,
    vFormInput,
    vSlider,
    vCard,
    vAccordion,
    vCollapse,
    vProgressBar,
    vToolTip,
    vMessageBox,
  },
  data() {
    return {
      accordionItems: [
        { title: "Select 1", content: "Some little doesn't matter text" },
        { title: "Select 2", content: "Some tiny does not meaningful text" },
        { title: "Select 3", content: "You can not check this, it's working" },
      ],
      isCollapsed: this.defaultCollapsed,
      showMessageBox: false,
    };
  },
  methods: {
    toggleMessageBox() {
      this.showMessageBox = !this.showMessageBox;
    },
  },
}
</script>

<template>
  <vButton>Smile!</vButton>

  <v-drop-down button-label="Select">
    <ul class="dropdown-list">
      <li><a href="#" class="dropdown-option">Option 1</a></li>
      <li><a href="#" class="dropdown-option">Option 2</a></li>
      <li><a href="#" class="dropdown-option">Option 3</a></li>
      <li><a href="#" class="dropdown-option">Option 4</a></li>
    </ul>
  </v-drop-down>

  <div id="app">
    <v-group>
      <v-button>Button 1</v-button>
      <v-button>Button 2</v-button>
      <v-button>Button 3</v-button>
    </v-group>
  </div>

  <v-form-input type="text"></v-form-input>

  <v-slider min="0" max="100"></v-slider>

  <v-group>
    <v-form-input></v-form-input>
    <v-form-input></v-form-input>
    <v-form-input></v-form-input>
  </v-group>

  <div>
    <v-card image="nttt.jpg" title="NFC" creator="Me" current-bid="2.99" auction-time="23h 3m"></v-card>
  </div>
  <v-accordion :items="accordionItems"></v-accordion>

  <v-progress-bar :progress="30"></v-progress-bar>

  <v-tool-tip content="This is a tooltip" position="top">
    <v-button>Hover me</v-button>
  </v-tool-tip>

  <v-message-box v-if="showMessageBox" :is-visible="true" type="info" title="Information">
    This is an informational message.
  </v-message-box>

  <v-button @click="toggleMessageBox">Show Message Box</v-button>
</template>

<style scoped>
</style>

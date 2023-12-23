import vButton from '../components/Button.vue';

export default {
  title: 'Components/vButton',
  component: vButton,
  argTypes: {
    type: { control: 'text' },
    btnClass: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { vButton },
  setup() {
    return { args };
  },
  template: '<vButton v-bind="args">Click me</vButton>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  btnClass: 'default-button-class',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  type: 'button',
  btnClass: 'custom-style-class',
};

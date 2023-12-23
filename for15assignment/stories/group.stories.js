import ButtonGroup from '../components/Group.vue';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
};

const Template = (args) => ({
    components: { ButtonGroup },
    setup() {
        return { args };
    },
    template: `
    <ButtonGroup>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </ButtonGroup>
  `,
});

export const Default = Template.bind({});
Default.args = {};

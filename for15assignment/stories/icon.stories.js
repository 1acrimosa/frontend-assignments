import Icon from '../components/Icon.vue';

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        iconName: { control: 'text' },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        color: { control: 'color' },
    },
};

const Template = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: '<Icon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    iconName: 'your-icon-class',
    size: 'medium',
    color: '#000',
};

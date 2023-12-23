import Slider from '../components/Slider.vue';

export default {
    title: 'Components/Slider',
    component: Slider,
    argTypes: {
        min: { control: 'number', defaultValue: 0 },
        max: { control: 'number', defaultValue: 100 },
        step: { control: 'number', defaultValue: 1 },
        value: { control: 'number', defaultValue: 50 },
    },
};

const Template = (args) => ({
    components: { Slider },
    setup() {
        return { args };
    },
    template: '<Slider v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    id: 'slider1',
    label: 'Slider Label',
};

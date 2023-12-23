import ProgressBar from '../components/ProgressBar.vue';
export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    argTypes: {
        progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    },
};

const Template = (args) => ({
    components: { ProgressBar },
    setup() {
        return { args };
    },
    template: '<ProgressBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    progress: 50,
};

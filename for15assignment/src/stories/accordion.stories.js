// src/stories/Accordion.stories.js
import Accordion from '@/components/Accordion.vue';

export default {
    title: 'Components/Accordion',
    component: Accordion,
};

const Template = (args) => ({
    components: { Accordion },
    setup() {
        return { args };
    },
    template: '<Accordion v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    items: [
        { title: 'Panel 1', content: 'Content for Panel 1' },
        { title: 'Panel 2', content: 'Content for Panel 2' },
        { title: 'Panel 3', content: 'Content for Panel 3' },
    ],
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    items: [
        { title: 'Custom Panel 1', content: '<p>Custom HTML content for Panel 1</p>' },
        { title: 'Custom Panel 2', content: '<p>Custom HTML content for Panel 2</p>' },
        { title: 'Custom Panel 3', content: '<p>Custom HTML content for Panel 3</p>' },
    ],
};

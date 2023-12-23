import CollapseComponent from '@/components/Collapse.vue';

export default {
    title: 'Components/CollapseComponent',
    component: CollapseComponent,
    argTypes: {
        title: { control: 'text' },
        defaultCollapsed: { control: 'boolean' },
    },
};

const Template = (args) => ({
    components: { CollapseComponent },
    setup() {
        return { args };
    },
    template: '<CollapseComponent v-bind="args">Content goes here</CollapseComponent>',
});

export const Default = Template.bind({});
Default.args = {
    title: 'Collapse Header',
    defaultCollapsed: false,
};

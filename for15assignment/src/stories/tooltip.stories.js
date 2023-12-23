import Tooltip from '@/components/ToolTip.vue';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        content: { control: 'text', defaultValue: 'Tooltip Content' },
        position: { control: 'select', options: ['top', 'bottom', 'left', 'right'], defaultValue: 'top' },
    },
};

const Template = (args) => ({
    components: { Tooltip },
    setup() {
        return { args };
    },
    template: '<Tooltip v-bind="args"><div>Hover me</div></Tooltip>',
});

export const Default = Template.bind({});

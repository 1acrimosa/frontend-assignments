import MessageBox from '@/components/MessageBox.vue';

export default {
    title: 'Components/MessageBox',
    component: MessageBox,
    argTypes: {
        isVisible: { control: 'boolean' },
        type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
        title: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { MessageBox },
    setup() {
        return { args };
    },
    template: '<MessageBox v-bind="args">This is the message content</MessageBox>',
});

export const Default = Template.bind({});
Default.args = {
    isVisible: true,
    type: 'info',
    title: 'Info Message',
};

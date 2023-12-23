import Alert from '../components/Alert.vue';

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        isVisible: { control: 'boolean' },
        type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
        message: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { Alert },
    setup() {
        return { args };
    },
    template: '<Alert v-bind="args" @close="closeAlert" />',
    methods: {
        closeAlert() {
            console.log('Alert closed');
        },
    },
});

export const Info = Template.bind({});
Info.args = {
    isVisible: true,
    type: 'info',
    message: 'This is an information message.',
};

export const Success = Template.bind({});
Success.args = {
    isVisible: true,
    type: 'success',
    message: 'Operation successful!',
};

export const Warning = Template.bind({});
Warning.args = {
    isVisible: true,
    type: 'warning',
    message: 'Warning: Proceed with caution.',
};

export const Error = Template.bind({});
Error.args = {
    isVisible: true,
    type: 'error',
    message: 'An error occurred. Please try again.',
};

import FormInput from '@/components/FormInput.vue';

export default {
    title: 'Components/FormInput',
    component: FormInput,
    argTypes: {
        id: { control: 'text' },
        label: { control: 'text' },
        type: { control: 'select', options: ['text', 'email', 'password', 'number', 'file', 'date'] },
        placeholder: { control: 'text' },
        value: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { FormInput },
    setup() {
        return { args };
    },
    template: '<FormInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    id: 'inputId',
    label: 'Input Label',
    type: 'text',
    placeholder: 'Enter text...',
    value: '',
};

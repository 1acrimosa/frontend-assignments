import DropdownButton from '@/components/DropDownButton.vue';

export default {
    title: 'Components/DropdownButton',
    component: DropdownButton,
    argTypes: {
        buttonLabel: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { DropdownButton },
    setup() {
        return { args };
    },
    template: '<DropdownButton v-bind="args"><li>Option 1</li><li>Option 2</li><li>Option 3</li></DropdownButton>',
});

export const Default = Template.bind({});
Default.args = {
    buttonLabel: 'Dropdown',
};

import CustomTable from '../components/Table.vue';

export default {
    title: 'Components/CustomTable',
    component: CustomTable,
    argTypes: {
        headers: { control: 'array', defaultValue: ['Header 1', 'Header 2', 'Header 3'] },
        rows: {
            control: 'array',
            defaultValue: [
                { id: 1, header1: 'Row 1 - Cell 1', header2: 'Row 1 - Cell 2', header3: 'Row 1 - Cell 3' },
                { id: 2, header1: 'Row 2 - Cell 1', header2: 'Row 2 - Cell 2', header3: 'Row 2 - Cell 3' },
                // Add more rows as needed
            ],
        },
    },
};

const Template = (args) => ({
    components: { CustomTable },
    setup() {
        return { args };
    },
    template: '<CustomTable v-bind="args" />',
});

export const Default = Template.bind({});

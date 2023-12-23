import CardComponent from '../components/Card.vue';

export default {
    title: 'Components/CardComponent',
    component: CardComponent,
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        creator: { control: 'text' },
        currentBid: { control: 'number' },
        auctionTime: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { CardComponent },
    setup() {
        return { args };
    },
    template: '<CardComponent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    image: 'path/to/your/image.jpg',
    title: 'Card Title',
    creator: 'John Doe',
    currentBid: 100,
    auctionTime: '2 days left',
};

import ImageCarousel from '@/components/ImageCarousel.vue';

export default {
    title: 'Components/ImageCarousel',
    component: ImageCarousel,
    argTypes: {
        images: { control: 'array' },
    },
};

const Template = (args) => ({
    components: { ImageCarousel },
    setup() {
        return { args };
    },
    template: '<ImageCarousel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    images: [
        'image-url-1.jpg',
        'image-url-2.jpg',
        'image-url-3.jpg',
    ],
};

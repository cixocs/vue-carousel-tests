<template lang="pug">
.vue-carousel
  h2.vue-carousel__title(ref='heading') vue-carousel test
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.vue-carousel
  &__title
    text-align: center
</style>

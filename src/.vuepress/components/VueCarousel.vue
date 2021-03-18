<template lang="pug">
.vue-carousel
  h2.vue-carousel__title(ref='heading') vue-carousel test
  .vue-carousel__inner
    Carousel.vue-carousel__block(:perPage='3')
      Slide.vue-carousel__track(v-for='num in 30', :key='num.id')
        .vue-carousel__track-image
          img(:src='carouselItem(num).imagePath', :alt='carouselItem(num).title')
        p {{ carouselItem(num).title }}
        p {{ carouselItem(num).description }}
</template>

<script>
import CarouselData from '../data/carousel.json';

import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      carouselData: CarouselData
    };
  },
  computed: {
    // changeText() {
    //   return this.textData[this.currentId];
    // }
    carouselItem() {
      return (index) => {
        return this.carouselData[index - 1];
      };
    }
  },
  mounted() {},
  methods: {
    // randomTextId() {
    //   let rnd = 0;
    //   while (rnd === this.currentId) {
    //     rnd = Math.floor(Math.random() * this.textData.length);
    //   }
    //   this.currentId = rnd;
    //   console.log(this.currentId, rnd);
    // }
  }
};
</script>

<style lang="stylus" scoped>
.vue-carousel
  &__title
    text-align: center

  &__track
    > p
      text-align: center

  &__rnd
    margin-top: 50px
</style>

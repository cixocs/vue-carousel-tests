<template lang="pug">
.vue-carousel
  h2.vue-carousel__title(ref='heading') vue-carousel test
  .vue-carousel__inner
    //- Carousel.vue-carousel__block(:perPage='3')
    //-   Slide.vue-carousel__track(v-for='num in 30', :key='num.id')
    //-     .vue-carousel__track-image
    //-       img(:src='carouselItem(num).imagePath', :alt='carouselItem(num).title')
    //-     p {{ carouselItem(num).title }}
    //-     p {{ carouselItem(num).description }}
    div(v-swiper:mySwiper='swiperOptions')
      ul.swiper-wrapper
        li.swiper-slide(v-for='num in 30', :key='num.id')
          img(:src='carouselItem(num).imagePath', :alt='carouselItem(num).title')
</template>

<script>
import CarouselData from '../data/carousel.json';

// import Carousel from 'vue-carousel/src/Carousel.vue';
// import Slide from 'vue-carousel/src/Slide.vue';

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css';

export default {
  components: {
    // Carousel,
    // Slide
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      carouselData: CarouselData,
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true
      }
    };
  },
  computed: {
    carouselItem() {
      return (index) => {
        return this.carouselData[index - 1];
      };
    }
  },
  mounted() {},
  methods: {}
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

// swiper
.swiper
  &-wrapper
    display: flex
    width: 100%
    height: 100%

  &-slide
    flex-shrink: 0
    width: get_vw(230) !important
    margin: 0 get_vw(22)
</style>

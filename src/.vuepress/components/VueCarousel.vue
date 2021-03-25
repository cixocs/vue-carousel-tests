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
    Swiper(:options='swiperOptions')
      SwiperSlide(v-for='num in 30', :key='num.id')
        img(:src='carouselItem(num).imagePath', :alt='carouselItem(num).title')
</template>

<script>
import CarouselData from '../data/carousel.json';

// import Carousel from 'vue-carousel/src/Carousel.vue';
// import Slide from 'vue-carousel/src/Slide.vue';

// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import SwiperCore from 'swiper/swiper-bundle.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

import 'swiper/swiper-bundle.css';

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperCore);

export default {
  components: {
    // Carousel,
    // Slide
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      carouselData: CarouselData,
      swiperOptions: {
        loop: true,
        slidesPerView: 3
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
</style>

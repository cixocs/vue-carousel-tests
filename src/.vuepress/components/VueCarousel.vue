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

    //- <!-- Slider main container -->
    .swiper-container
      //- <!-- Additional required wrapper -->
      .swiper-wrapper
        //- <!-- Slides -->
        .swiper-slide(v-for='num in 30', :key='num.id')
          img(:src='carouselItem(num).imagePath', :alt='carouselItem(num).title')
      //- <!-- If we need pagination -->
      .swiper-pagination
      //- <!-- If we need navigation buttons -->
      .swiper-button-prev
      .swiper-button-next
    </div>
</template>

<script>
import CarouselData from '../data/carousel.json';

// import Carousel from 'vue-carousel/src/Carousel.vue';
// import Slide from 'vue-carousel/src/Slide.vue';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

import 'swiper/swiper-bundle.css';

export default {
  components: {
    // Carousel,
    // Slide
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
  mounted() {
    new Swiper('.swiper-container', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  },
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

.swiper-container
  width: 600px
  height: 300px

.swiper-slide
  display: flex
  align-items: center
  justify-content: center
</style>

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

    //- swiper component
    Swiper(ref='swiper', :options='swiperOptions', @slideChangeTransitionStart='onSlideChange')
      SwiperSlide(v-for='data in carouselData', :key='data.id')
        img(:src='data.imagePath', :alt='data.title')
    span.swiper-control-prev(@click='prev') prev
    span.swiper-control-next(@click='next') next

    .swiper-info
      p {{ currentInfo.title }}
      p {{ currentInfo.description }}

    .swiper-pagefraction
      p {{ formatCurrentIndex }}
      p {{ actives }}
</template>

<script>
import CarouselData from '../data/carousel.json';

// import Carousel from 'vue-carousel/src/Carousel.vue';
// import Slide from 'vue-carousel/src/Slide.vue';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    // Carousel,
    // Slide,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      carouselData: CarouselData,
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true
      },
      current: 0,
      actives: 0
    };
  },
  computed: {
    // carouselItem() {
    //   return (index) => {
    //     return this.carouselData[index - 1];
    //   };
    // },
    swiper() {
      return this.$refs.swiper.$swiper;
    },
    currentInfo() {
      return this.carouselData[this.current];
    },
    formatCurrentIndex() {
      const format = ('00' + (this.current + 1)).slice(-2);
      return format;
    }
  },
  mounted() {
    this.actives = this.swiper.activeIndex;
  },
  methods: {
    onSlideChange() {
      const index = this.swiper.realIndex;
      this.current = index;
    },
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    }
  }
};
</script>

<style lang="stylus" scoped>
.vue-carousel
  &__inner
    margin: 0 get_vw(-20)

  &__title
    text-align: center

  &__track
    > p
      text-align: center

  &__rnd
    margin-top: 50px

.swiper
  &-slide
    width: get_vw(230)
    margin: 0 get_vw(22)
</style>

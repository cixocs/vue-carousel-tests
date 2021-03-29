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
    //- Swiper(ref='swiper', :options='swiperOptions', @slideChangeTransitionStart='onSlideChange')
    //-   SwiperSlide(v-for='data in carouselData', :key='data.id')
    //-     img(:src='data.imagePath', :alt='data.title')
    //- span.swiper-control-prev(@click='prev') prev
    //- span.swiper-control-next(@click='next') next

    //- .swiper-info
    //-   p {{ currentInfo.title }}
    //-   p {{ currentInfo.description }}

    //- .swiper-pagefraction
    //-   p {{ formatCurrentIndex }}
    //-   p {{ actives }}

    //- splide
    ClientOnly
      Splide(:options='splideOptions', @splide:move='splideMove')
        SplideSlide(v-for='data in carouselData', :key='data.id')
          span.splide__slide-image
            img(:src='data.imagePath', :alt='data.title')
      .splide__info
        .splide__info-summary
          p {{ currentInfo.title }}
          p {{ currentInfo.description }}
        .splide__info-fraction
          p {{ formatCurrentIndex }}
          p {{ carouselData.length }}
</template>

<script>
import CarouselData from '../data/carousel.json';

// vue-carousel
// import Carousel from 'vue-carousel/src/Carousel.vue';
// import Slide from 'vue-carousel/src/Slide.vue';

// vue-awesome-swiper
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// vue-splide
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    // Carousel,
    // Slide,
    // Swiper,
    // SwiperSlide,
    Splide: () =>
      import('@splidejs/vue-splide')
        .then((m) => m.Splide)
        .catch(),
    SplideSlide: () =>
      import('@splidejs/vue-splide')
        .then((m) => m.SplideSlide)
        .catch()
  },
  data() {
    return {
      carouselData: CarouselData,
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true
      },
      splideOptions: {
        type: 'loop',
        speed: 600,
        autoWidth: true,
        clones: 2,
        focus: 'center',
        easing: 'ease',
        pagination: false,
        keyboard: false,
        flickPower: 250,
        updateOnMove: true
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
    // swiper() {
    //   return this.$refs.swiper.$swiper;
    // },
    currentInfo() {
      return this.carouselData[this.current];
    },
    formatCurrentIndex() {
      const format = ('00' + (this.current + 1)).slice(-2);
      return format;
    }
  },
  mounted() {
    // this.actives = this.swiper.activeIndex;
    console.log(this.actives);
  },
  methods: {
    // onSlideChange() {
    //   const index = this.swiper.realIndex;
    //   this.current = index;
    // },
    // prev() {
    //   this.swiper.slidePrev();
    // },
    // next() {
    //   this.swiper.slideNext();
    // }
    splideMove(splide, newIndex) {
      // console.log(newIndex, oldIndex, destIndex);
      this.current = newIndex;
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

// swiper
.swiper
  &-slide
    width: get_vw(230)
    margin: 0 get_vw(22)

// splide
.splide
  &__slide
    width: get_vw(270)
    margin: 0 get_vw(2)

    > span
      display: block
      transform: scale3d(0.85, 0.85, 1) rotate(0.001deg)
      will-change: transform
      transition: transform 0.7s ease

    &.is-active > span
      transform: scale3d(1.001, 1.001, 1.001) rotate(0.001deg)
</style>

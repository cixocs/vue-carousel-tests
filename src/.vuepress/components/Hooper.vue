<template lang="pug">
.hooper-block
  h2.hooper__title Hooper test
  Hooper(:settings='hooperSettings')
    Slide(v-for='data in carouselData', :key='data.id')
      .hooper__thumb
        img(:src='$withBase(`/images/campaign-illust/${data.imageName}`)', :alt='data.title', loading='lazy', width='480', height='360')
      p {{ data.title }}
    HooperNavigation(slot='hooper-addons')
    HooperPagination(slot='hooper-addons', mode='fraction')
</template>

<script>
import { mapState } from 'vuex';
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        centerMode: true,
        wheelControl: false,
        keysControl: false,
        autoPlay: true,
        playSpeed: 6000,
        transition: 600,
        breakpoints: {
          769: {
            itemsToShow: 3
          }
        }
      }
    };
  },
  computed: {
    ...mapState(['carouselData'])
  }
};
</script>

<style lang="stylus" scoped>
.hooper
  &__title
    text-align: center
</style>

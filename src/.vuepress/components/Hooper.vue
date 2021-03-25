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
// import 'hooper/dist/hooper.css';

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
        hoverPause: false,
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

>>> .hooper
  position: relative
  box-sizing: border-box
  width: 100%

  // height: 200px
  *
    box-sizing: border-box

  &-list
    overflow: hidden
    width: 100%
    height: 100%

  &-track
    display: flex
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 0
    margin: 0

  &-slide
    flex-shrink: 0
    height: 100%
    margin: 0
    padding: 0
    list-style: none
</style>

<template lang="pug">
.glide-block
  h2.glide-block__title vue-glide-js test
  VueGlide(ref='carousel', :options='glideOptions', @change='currentIndex')
    VueGlideSlide(ref='slide', v-for='(data, index) in carouselData', :key='index')
      img(:src='$withBase(`/images/campaign-illust/${data.imageName}`)', :alt='data.title', loading='lazy', width='480', height='360')
    template(slot='control')
      span(data-glide-dir='<') prev
      span(data-glide-dir='>') next
  .glide__info
    p.glide__info-title {{ currentInfo.title }}
    p.glide__info-desc {{ currentInfo.description }}
  .glide__fraction
    p.glide__fraction-num.glide__fraction-num--current {{ currentSlide }}
    p.glide__fraction-num.glide__fraction-num--max {{ carouselData.length }}
</template>

<script>
import { mapState } from 'vuex';
import { Glide, GlideSlide } from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      glideOptions: {
        type: 'carousel',
        perView: 3,
        gap: 40,
        focusAt: 'center',
        autoplay: 6000,
        hoverpause: false,
        animationDuration: 1000,
        breakpoints: {
          768: {
            perView: 1,
            gap: 30,
            peek: 60
          }
        }
      },
      currentSlide: 1,
      slides: []
    };
  },
  computed: {
    ...mapState(['carouselData']),
    currentInfo() {
      const current = this.carouselData[this.currentSlide - 1];
      return current;
    }
  },
  mounted() {
    this.slides = this.$refs.slide;
  },
  methods: {
    currentIndex(value) {
      this.currentSlide = value + 1;
    }
  }
};
</script>

<style lang="stylus" scoped>
.glide-block
  &__title
    text-align: center
</style>

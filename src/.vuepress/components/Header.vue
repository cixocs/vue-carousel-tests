<template lang="pug">
header.header
  h1.header__icon
    span Vuepress Carousel Test
    img(src='/images/cisco_icon.png', alt='cisco icon')
  nav.header__link
    ul.header__link-inner
      li.header__link-item(v-for='link in links', :key='link.id')
        router-link(:to='link.link', active-class='active', exact-active-class='exact-active', exact) {{ link.text }}
</template>

<script>
export default {
  data() {
    return {
      links: [
        { link: '/', text: 'home' },
        { link: '/hooper', text: 'hooper' },
        { link: '/glide', text: 'glide' }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.header
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  padding-top: 10px

  &__icon
    width: 40px

    > span
      display: none

  &__link
    &-inner
      display: grid
      grid-template-columns: repeat(3, auto)
      grid-template-rows: auto
      column-gap: 30px

    &-item > a
      text-transform: capitalize

      &.exact-active
        text-decoration: underline
</style>

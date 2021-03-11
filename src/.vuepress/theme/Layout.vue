<template lang="pug">
.theme-container
  Header
  Content(:custom='false')
</template>

<script>
import Header from '@components/Header';

export default {
  components: {
    Header
  }
};
</script>

<style lang="stylus">
.theme-container
  padding: 0 get_vw(20)

  +breakpoint(pc)
    padding: 0 get_vw(40)

.content__default
  margin: 100px auto 0

  +breakpoint(pc)
    max-width: 1250px
</style>

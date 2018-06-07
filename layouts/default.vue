<template>
  <div :class="{'grid-content': page !== 'index'}">
    <app-header />
    <nuxt/>
    <app-footer v-if="page !== 'index'"/>
  </div>
</template>

<script>
  import appHeader from '~/components/AppHeader.vue'
  import appFooter from '~/components/AppFooter.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      appHeader,
      appFooter
    },
    computed: mapState(['page'])
  }
</script>

<style lang="scss">
  @import "~/assets/css/_vars.scss";


  .grid-content {
    background-image: url("~/assets/images/background3.png");
    background-repeat: repeat;

    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: $header_height_shrink 1fr auto;
    &.iphone {
      grid-template-rows: $header_height_shrink 1fr auto;
    }

    grid-template-areas: "header" "body" "footer";
    align-content: space-between;
    justify-content: center;
  }
</style>
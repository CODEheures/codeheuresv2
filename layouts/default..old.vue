<template>
  <div :class="{'screen': true, 'index': page === 'index' }">
    <transition name="slide-up">
      <div class="back-image" v-if="page === 'index'">
        <div class="back-color"></div>
      </div>
    </transition>
    <div :class="{'grid-main': true, 'shrink-header': (page !== 'index')}">
      <app-header />
      <nuxt/>
    </div>
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

  html {
    font-family: "Open sans", sans-serif;
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media (max-width: 360px) {
      font-size: 50%;
    }
    @media (max-width: 360px) {
      font-size: 50%;
    }
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }


  .screen {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    min-height: 100vh;
    background: url("~/assets/images/background3.png") repeat fixed;
    background-color: #fff;

    grid-template-rows: auto min-content;
    grid-template-areas: "all" "footer";
    &.index {
      grid-template-rows: 1fr;
      grid-template-areas: "all";
      height: 100vh;
    }

    & div.back-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("~/assets/images/2.jpg");
      background-size: cover;
      & div.back-color {
        background-color: rgba(0,5,8,.75);
        width: 100%;
        height: 100%;
      }
    }



    .grid-main {
      grid-area: all;
      display: grid;
      grid-template-columns: minmax(auto, $gridMainMaxWidth);
      grid-template-rows: 100px 1fr;
      grid-template-areas: "header" "content";
      align-content: start;
      justify-content: center;
      z-index: 2;
      width: 100%;

      &.shrink-header {
        grid-template-rows: 60px 1fr;
      }
    }
  }


</style>
